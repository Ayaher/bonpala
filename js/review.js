/* Spaced-repetition scheduler: which started lessons are due, and which of
   their questions a mixed review run should ask. */
(function () {
  "use strict";

  var DAY_MS = 24 * 60 * 60 * 1000;
  /* Days between successful reviews of the same lesson. */
  var LADDER = [1, 3, 7, 16, 35, 75];
  /* A run asks 20 questions: mostly from lessons still being learned. */
  var BUDGET = { learning: 12, mastered: 8 };
  var QUOTA = { learning: 4, mastered: 3 };
  var REVIEW_ID = "__review";
  var MASTERY = 10;

  function storage() {
    return window.GlobasaStorage;
  }

  function nowValue(now) {
    return typeof now === "number" ? now : Date.now();
  }

  function iso(ms) {
    return new Date(ms).toISOString();
  }

  function parse(value) {
    var time = Date.parse(value);
    return isNaN(time) ? null : time;
  }

  function daysSince(value, now) {
    var time = parse(value);
    if (time == null) return 60;
    return Math.max(0, (nowValue(now) - time) / DAY_MS);
  }

  function answeredCount(record) {
    return record && record.answers ? Object.keys(record.answers).length : 0;
  }

  function isMastered(record) {
    return Boolean(record) && record.bestScore === MASTERY;
  }

  function isStarted(record) {
    return Boolean(record) && (answeredCount(record) > 0 || record.bestScore != null);
  }

  /* A lesson that reaches 10/10 enters the ladder at its first rung. */
  function fresh(now) {
    var at = nowValue(now);
    return {
      intervalIndex: 0,
      due: iso(at + LADDER[0] * DAY_MS),
      lastReviewedAt: null,
      lapses: 0,
      reps: 0
    };
  }

  /* Pass: one rung up. Miss: one rung down, retried tomorrow. */
  function update(review, passed, now) {
    var at = nowValue(now);
    var previous = review && typeof review.intervalIndex === "number" ? review : fresh(at);
    var index = previous.intervalIndex;
    var next = passed ? Math.min(index + 1, LADDER.length - 1) : Math.max(index - 1, 0);
    var days = passed ? LADDER[next] : 1;
    return {
      intervalIndex: next,
      due: iso(at + days * DAY_MS),
      lastReviewedAt: iso(at),
      lapses: (previous.lapses || 0) + (passed ? 0 : 1),
      reps: (previous.reps || 0) + 1
    };
  }

  function dueLabel(record, now) {
    var info = status(record, now);
    if (info.state === "due") return "review due";
    if (info.state !== "scheduled") return null;
    if (info.daysUntil <= 0) return "review today";
    return "review in " + info.daysUntil + " day" + (info.daysUntil === 1 ? "" : "s");
  }

  function status(record, now) {
    var at = nowValue(now);
    if (!isStarted(record)) return { state: "new", dueAt: null, daysUntil: null };
    if (!isMastered(record)) return { state: "learning", dueAt: null, daysUntil: null };
    var review = record.review;
    var due = review && review.due ? parse(review.due) : null;
    if (due == null) return { state: "due", dueAt: null, daysUntil: 0, interval: LADDER[0], lapses: 0 };
    var daysUntil = Math.ceil((due - at) / DAY_MS);
    return {
      state: due <= at ? "due" : "scheduled",
      dueAt: review.due,
      daysUntil: Math.max(0, daysUntil),
      interval: LADDER[review.intervalIndex] || LADDER[0],
      lapses: review.lapses || 0
    };
  }

  /* Only a full 10/10 run starts the schedule; partial runs leave it alone. */
  function onLessonFinished(conceptId, score, total, now) {
    if (!total || score < total) return null;
    var record = storage().getConcept(conceptId);
    if (record && record.review && record.review.due) return record.review;
    return storage().setReview(conceptId, fresh(now));
  }

  /* Weakest first, then the lesson that has been waiting longest. */
  function learningOrder(a, b, at) {
    var scoreA = a.record.bestScore == null ? 0 : a.record.bestScore;
    var scoreB = b.record.bestScore == null ? 0 : b.record.bestScore;
    if (scoreA !== scoreB) return scoreA - scoreB;
    return daysSince(b.record.lastRunAt, at) - daysSince(a.record.lastRunAt, at);
  }

  function candidates(concepts, now) {
    var at = nowValue(now);
    var pool = { learning: [], due: [], scheduled: [] };
    (concepts || []).forEach(function (concept) {
      var record = storage().getConcept(concept.id) || {};
      var info = status(record, at);
      var entry = { concept: concept, record: record, info: info };
      if (info.state === "learning") pool.learning.push(entry);
      else if (info.state === "due") pool.due.push(entry);
      else if (info.state === "scheduled") pool.scheduled.push(entry);
    });
    pool.learning.sort(function (a, b) { return learningOrder(a, b, at); });
    /* Most overdue first, so the longest-waiting lesson always gets asked. */
    var byDue = function (a, b) {
      var dueA = parse(a.info.dueAt);
      var dueB = parse(b.info.dueAt);
      return (dueA == null ? 0 : dueA) - (dueB == null ? 0 : dueB);
    };
    pool.due.sort(byDue);
    pool.scheduled.sort(byDue);
    return pool;
  }

  /* Questions that missed last time, or have not been seen for a while, come
     first; the jitter keeps consecutive runs from asking the same three. */
  function weight(record, exerciseId, at) {
    var answer = record.answers && record.answers[exerciseId];
    var value;
    if (!answer) value = 80;
    else {
      var age = daysSince(answer.updatedAt, at);
      value = (answer.correct ? 0 : 120) + Math.min(answer.attempts || 1, 5) * 4 + Math.min(age, 60) * 1.5;
      if (age < 1) value -= 25;
    }
    return value + Math.random() * 25;
  }

  function rankExercises(concept, record, now) {
    var at = nowValue(now);
    var scored = concept.exercises.map(function (exercise) {
      return { exercise: exercise, score: weight(record, exercise.id, at) };
    });
    scored.sort(function (a, b) { return b.score - a.score; });
    return scored.map(function (item) { return item.exercise; });
  }

  function toQuestion(entry, exercise) {
    return {
      conceptId: entry.concept.id,
      title: entry.concept.title,
      exercise: exercise
    };
  }

  /* Breadth first: one question per lesson, then a second, up to the quota.
     Only a short queue digs deeper into the same lessons. */
  function takeFrom(entries, budget, quota, at, exclude) {
    var picked = [];
    if (!entries.length || budget <= 0) return picked;
    var skip = exclude || {};
    var ranked = entries.map(function (entry) {
      return {
        entry: entry,
        list: rankExercises(entry.concept, entry.record, at).filter(function (exercise) {
          return !skip[exercise.id];
        })
      };
    });
    function take(wrapper, depth) {
      var exercise = wrapper.list[depth];
      if (!exercise) return false;
      skip[exercise.id] = true;
      picked.push(toQuestion(wrapper.entry, exercise));
      return true;
    }
    var depth;
    for (depth = 0; depth < quota && picked.length < budget; depth += 1) {
      for (var i = 0; i < ranked.length && picked.length < budget; i += 1) take(ranked[i], depth);
    }
    for (; picked.length < budget; depth += 1) {
      var added = false;
      for (var j = 0; j < ranked.length && picked.length < budget; j += 1) {
        if (take(ranked[j], depth)) added = true;
      }
      if (!added) break;
    }
    return picked;
  }

  function shuffle(list) {
    var copy = list.slice();
    for (var i = copy.length - 1; i > 0; i -= 1) {
      var j = Math.floor(Math.random() * (i + 1));
      var swap = copy[i];
      copy[i] = copy[j];
      copy[j] = swap;
    }
    return copy;
  }

  /* Build the question queue for one run. Lessons still being learned fill the
     bulk; lessons mastered and due fill the rest. */
  function buildQueue(concepts, now) {
    var at = nowValue(now);
    var pool = candidates(concepts, at);
    var taken = {};
    var queue = takeFrom(pool.learning, BUDGET.learning, QUOTA.learning, at, taken)
      .concat(takeFrom(pool.due, BUDGET.mastered, QUOTA.mastered, at, taken));
    var target = BUDGET.learning + BUDGET.mastered;
    /* Fewer unmastered lessons than planned: mastered ones may exceed their half. */
    if (queue.length < target) {
      queue = queue.concat(takeFrom(pool.due, target - queue.length, QUOTA.mastered, at, taken));
    }
    /* Nothing else left: borrow from lessons that are not due yet. */
    if (queue.length < target) {
      queue = queue.concat(takeFrom(pool.scheduled, target - queue.length, QUOTA.mastered, at, taken));
    }
    return shuffle(queue);
  }

  function overview(concepts, now) {
    var at = nowValue(now);
    var pool = candidates(concepts, at);
    var started = pool.learning.length + pool.due.length + pool.scheduled.length;
    var next = pool.scheduled[0];
    return {
      started: started,
      learning: pool.learning.length,
      due: pool.due.length,
      scheduled: pool.scheduled.length,
      dueCount: pool.learning.length + pool.due.length,
      nextTitle: next ? next.concept.title : null,
      nextDays: next ? next.info.daysUntil : null,
    };
  }

  /* A review run is a lesson whose questions come from many lessons, so the
     whole existing exercise pipeline works unchanged. */
  function buildConcept(queue) {
    var exercises = queue.map(function (item) {
      var copy = {};
      Object.keys(item.exercise).forEach(function (key) { copy[key] = item.exercise[key]; });
      copy.reviewSource = item.conceptId;
      copy.reviewSourceTitle = item.title;
      return copy;
    });
    return {
      id: REVIEW_ID,
      title: "Spaced review",
      blurb: "A mixed run drawn from the lessons you have already started.",
      area: "review",
      review: true,
      refs: [],
      notes: [],
      examples: [],
      exercises: exercises
    };
  }

  /* One outcome per source lesson: a lesson counts as passed only if every
     question asked from it was answered correctly. */
  function applyResults(session, exercises, now) {
    var at = nowValue(now);
    var groups = {};
    var order = [];
    (exercises || []).forEach(function (exercise) {
      var source = exercise.reviewSource || session.conceptId;
      if (!groups[source]) {
        groups[source] = { conceptId: source, title: exercise.reviewSourceTitle || source, total: 0, correct: 0 };
        order.push(source);
      }
      groups[source].total += 1;
      if (session.results[exercise.id]) groups[source].correct += 1;
    });
    return order.map(function (id) {
      var group = groups[id];
      var record = storage().getConcept(id) || {};
      var base = record.review && record.review.due ? record.review : (isMastered(record) ? fresh(at) : null);
      group.passed = group.correct === group.total;
      if (!base) {
        group.state = "learning";
        return group;
      }
      var next = update(base, group.passed, at);
      storage().setReview(id, next);
      group.state = group.passed ? "advanced" : "lapsed";
      group.interval = LADDER[next.intervalIndex];
      group.dueAt = next.due;
      group.lapses = next.lapses;
      return group;
    });
  }

  window.GlobasaReview = {
    LADDER: LADDER,
    BUDGET: BUDGET,
    QUOTA: QUOTA,
    REVIEW_ID: REVIEW_ID,
    fresh: fresh,
    update: update,
    status: status,
    dueLabel: dueLabel,
    onLessonFinished: onLessonFinished,
    overview: overview,
    buildQueue: buildQueue,
    buildConcept: buildConcept,
    rankExercises: rankExercises,
    applyResults: applyResults,
    isMastered: isMastered
  };
})();
