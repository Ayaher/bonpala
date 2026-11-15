/* Exercise evaluation and in-memory lesson sessions. */
(function () {
  "use strict";

  var N = window.GlobasaNormalize;
  var D = window.GlobasaDiff || { closest: function (input, list) { return (list || [])[0] || ""; } };

  function expectedFor(exercise) {
    if (exercise.type === "mcq") return exercise.options[exercise.correct];
    if (exercise.type === "translate") return exercise.answer;
    if (exercise.type === "fill") return exercise.blanks.map(function (blank) { return blank.answer; });
    return "";
  }

  function evaluate(exercise, response) {
    if (!exercise) return { correct: false, expected: "" };

    if (exercise.type === "mcq") {
      var selected = Number(response);
      return {
        correct: Number.isInteger(selected) && selected === exercise.correct,
        expected: exercise.options[exercise.correct],
        details: []
      };
    }

    if (exercise.type === "translate") {
      var candidates = [exercise.answer].concat(exercise.accept || []);
      var correct = N.matchesTranslation(response, candidates);
      return {
        correct: correct,
        /* The closest accepted wording gives the most useful correction. */
        expected: D.closest(response, candidates),
        details: []
      };
    }

    if (exercise.type === "fill") {
      var values = Array.isArray(response) ? response : [response];
      var details = exercise.blanks.map(function (blank, index) {
        var candidates = [blank.answer].concat(blank.accept || []);
        return N.matchesAny(values[index] || "", candidates);
      });
      return {
        correct: details.every(Boolean),
        expected: exercise.blanks.map(function (blank) { return blank.answer; }),
        details: details
      };
    }

    return { correct: false, expected: "" };
  }

  function createSession(concept, startIndex) {
    var settings = {};
    var record = null;
    try {
      settings = window.GlobasaStorage.getState().settings || {};
      record = window.GlobasaStorage.getConcept(concept.id);
    } catch (error) {
      settings = {};
    }
    return {
      conceptId: concept.id,
      /* Review runs carry a synthetic concept that only exists while the run is live. */
      concept: concept,
      index: Math.max(0, Math.min(concept.exercises.length - 1, startIndex || 0)),
      results: {},
      submitted: false,
      feedback: null,
      optionOrders: {},
      dynamic: Boolean(settings.dynamic),
      run: (record && record.runs) || 0,
      variants: {}
    };
  }

  /* Deterministic 32-bit hash so a variant is stable for a whole attempt, reloads included. */
  function hashText(text) {
    var hash = 2166136261;
    for (var i = 0; i < text.length; i += 1) {
      hash ^= text.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  }

  function substitute(text, values) {
    return text.replace(/\{([a-z0-9]+)(?::([a-z0-9]+))?\}/gi, function (whole, name, field) {
      var value = values[name.toLowerCase()];
      if (value == null) return whole;
      if (typeof value === "string") return value;
      if (Array.isArray(value)) return field === "e" ? value[0] : value[1];
      var key = field || "g";
      if (value[key] != null) return value[key];
      return value.g != null ? value.g : "";
    });
  }

  /* Slot values are filled everywhere except inside {{Globasa}} markers, which
     are markup rather than placeholders. */
  function fillSlots(text, values) {
    if (typeof text !== "string") return text;
    return text.split(/(\{\{.*?\}\})/).map(function (part, index) {
      return index % 2 === 1 ? part : substitute(part, values);
    }).join("");
  }

  function pickBy(list, seed) {
    if (!list || !list.length) return null;
    return list[hashText(seed) % list.length];
  }

  /* Definition pools: entry = [term|null, optionText, explanation?]. A null term is distractor-only.
     The four options after the chosen entry become the distractors, so the authored order
     holds for the default entry and every rotation keeps a minimal-pair set. */
  function materializeDefinition(exercise, seed) {
    var pool = exercise.dyn.pool;
    var askable = [];
    for (var i = 0; i < pool.length; i += 1) {
      if (pool[i][0]) askable.push(i);
    }
    if (!askable.length) return exercise;
    var chosen = askable[hashText(seed) % askable.length];
    var options = [];
    for (var step = 0; step < 5; step += 1) {
      options.push(pool[(chosen + step) % pool.length][1]);
    }
    return {
      id: exercise.id,
      type: "mcq",
      prompt: fillSlots(exercise.dyn.prompt, { term: pool[chosen][0] }),
      options: options,
      correct: 0,
      explanation: pool[chosen][2] || exercise.explanation,
      passage: null,
      dyn: exercise.dyn
    };
  }

  function slotValues(exercise, seed) {
    var values = {};
    Object.keys(exercise.dyn.slots).forEach(function (name) {
      values[name] = pickBy(exercise.dyn.slots[name], seed + ":" + name);
    });
    return values;
  }

  /* The first entry of every pool is the authored default used when dynamic
     questions are switched off. */
  function defaultSlotValues(exercise) {
    var values = {};
    Object.keys(exercise.dyn.slots).forEach(function (name) {
      values[name] = exercise.dyn.slots[name][0];
    });
    return values;
  }

  function materializeSlots(exercise, values) {
    function text(value) {
      return fillSlots(value, values);
    }
    var copy = {
      id: exercise.id,
      type: exercise.type,
      prompt: text(exercise.prompt),
      explanation: text(exercise.explanation),
      dyn: exercise.dyn
    };
    if (exercise.passage) copy.passage = text(exercise.passage);
    if (exercise.gloss) copy.gloss = text(exercise.gloss);
    if (exercise.direction) copy.direction = exercise.direction;
    if (exercise.options) copy.options = exercise.options.map(text);
    if (exercise.answer) copy.answer = text(exercise.answer);
    if (exercise.accept) copy.accept = exercise.accept.map(text);
    if (exercise.blanks) {
      copy.blanks = exercise.blanks.map(function (blank) {
        return { answer: text(blank.answer), accept: (blank.accept || []).map(text) };
      });
    }
    if (typeof exercise.correct === "number") copy.correct = exercise.correct;
    return copy;
  }

  function materialize(exercise, seed) {
    if (!exercise || !exercise.dyn) return exercise;
    if (exercise.dyn.kind === "definition") return materializeDefinition(exercise, seed);
    return exercise.dyn.slots ? materializeSlots(exercise, slotValues(exercise, seed)) : exercise;
  }

  function defaults(exercise) {
    if (!exercise || !exercise.dyn || !exercise.dyn.slots) return exercise;
    return materializeSlots(exercise, defaultSlotValues(exercise));
  }

  /* One instance per exercise per attempt, cached so render, submit and reload agree. */
  function instance(session, exercise) {
    if (!exercise || !exercise.dyn) return exercise;
    if (!session) return defaults(exercise);
    if (!session.variants) session.variants = {};
    if (!session.variants[exercise.id]) {
      session.variants[exercise.id] = session.dynamic
        ? materialize(exercise, session.conceptId + ":" + exercise.id + ":" + (session.run || 0))
        : defaults(exercise);
    }
    return session.variants[exercise.id];
  }

  /* Shuffled display order for MCQ options, cached per exercise so re-renders stay stable. */
  function optionOrder(session, exercise) {
    if (!Array.isArray(exercise.options)) return [];
    if (!session.optionOrders) session.optionOrders = {};
    if (!session.optionOrders[exercise.id]) {
      var order = exercise.options.map(function (_, index) { return index; });
      for (var i = order.length - 1; i > 0; i -= 1) {
        var j = Math.floor(Math.random() * (i + 1));
        var swap = order[i];
        order[i] = order[j];
        order[j] = swap;
      }
      session.optionOrders[exercise.id] = order;
    }
    return session.optionOrders[exercise.id];
  }

  function score(session, concept) {
    return concept.exercises.reduce(function (total, exercise) {
      return total + (session.results[exercise.id] ? 1 : 0);
    }, 0);
  }

  function recordResult(session, exercise, correct) {
    session.results[exercise.id] = Boolean(correct);
    /* Review questions belong to the lesson they were drawn from, so their
       per-exercise statistics stay with that lesson. */
    window.GlobasaStorage.recordAnswer(exercise.reviewSource || session.conceptId, exercise.id, correct);
  }

  window.GlobasaEngine = {
    evaluate: evaluate,
    expectedFor: expectedFor,
    createSession: createSession,
    instance: instance,
    materialize: materialize,
    optionOrder: optionOrder,
    score: score,
    recordResult: recordResult
  };
})();
