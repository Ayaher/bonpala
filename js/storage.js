/* Versioned localStorage progress store with an in-memory fallback. */
(function () {
  "use strict";

  var KEY = "globasa.progress.v1";
  var VERSION = 1;
  var memory = null;
  var available = true;

  function emptyState() {
    return {
      version: VERSION,
      concepts: {},
      lastConcept: null,
      settings: { theme: "auto" }
    };
  }

  function read() {
    if (memory) return memory;
    try {
      var raw = window.localStorage.getItem(KEY);
      if (!raw) {
        memory = emptyState();
        return memory;
      }
      var parsed = JSON.parse(raw);
      memory = migrate(parsed);
    } catch (error) {
      available = false;
      memory = emptyState();
    }
    return memory;
  }

  function migrate(value) {
    if (!value || typeof value !== "object") return emptyState();
    var state = emptyState();
    state.concepts = value.concepts && typeof value.concepts === "object" ? value.concepts : {};
    state.lastConcept = typeof value.lastConcept === "string" ? value.lastConcept : null;
    state.settings = Object.assign(state.settings, value.settings || {});
    state.version = VERSION;
    return state;
  }

  function write(state) {
    memory = state;
    try {
      window.localStorage.setItem(KEY, JSON.stringify(state));
    } catch (error) {
      available = false;
    }
  }

  function conceptRecord(state, conceptId) {
    if (!state.concepts[conceptId]) {
      state.concepts[conceptId] = {
        answers: {},
        bestScore: null,
        lastScore: null,
        runs: 0,
        lastRunAt: null
      };
    }
    var record = state.concepts[conceptId];
    record.answers = record.answers || {};
    return record;
  }

  function getConcept(conceptId) {
    var state = read();
    var record = state.concepts[conceptId];
    if (!record) return null;
    record.answers = record.answers || {};
    record.bestScore = typeof record.bestScore === "number" ? record.bestScore : null;
    record.lastScore = typeof record.lastScore === "number" ? record.lastScore : null;
    record.runs = typeof record.runs === "number" ? record.runs : 0;
    record.review = record.review && typeof record.review === "object" ? record.review : null;
    return record;
  }

  function recordAnswer(conceptId, exerciseId, correct) {
    var state = read();
    var record = conceptRecord(state, conceptId);
    var previous = record.answers[exerciseId] || { attempts: 0 };
    record.answers[exerciseId] = {
      correct: Boolean(correct),
      attempts: previous.attempts + 1,
      updatedAt: new Date().toISOString()
    };
    state.lastConcept = conceptId;
    write(state);
    return record.answers[exerciseId];
  }

  function finishLesson(conceptId, score, total) {
    var state = read();
    var record = conceptRecord(state, conceptId);
    var normalizedScore = Math.max(0, Math.min(total, Number(score) || 0));
    record.lastScore = normalizedScore;
    record.bestScore = record.bestScore == null ? normalizedScore : Math.max(record.bestScore, normalizedScore);
    record.runs = (record.runs || 0) + 1;
    record.lastRunAt = new Date().toISOString();
    state.lastConcept = conceptId;
    write(state);
    return record;
  }

  function setLastConcept(conceptId) {
    var state = read();
    state.lastConcept = conceptId;
    write(state);
  }

  /* Spaced-repetition state lives beside the answers so a single record holds
     everything known about a lesson. */
  function setReview(conceptId, review) {
    var state = read();
    var record = conceptRecord(state, conceptId);
    record.review = review;
    write(state);
    return record.review;
  }

  function getTheme() {
    return read().settings.theme || "auto";
  }

  function setTheme(theme) {
    var state = read();
    state.settings.theme = theme;
    write(state);
  }

  function getDynamic() {
    return Boolean(read().settings.dynamic);
  }

  function setDynamic(on) {
    var state = read();
    state.settings.dynamic = Boolean(on);
    write(state);
  }

  function reset() {
    memory = emptyState();
    try {
      window.localStorage.removeItem(KEY);
    } catch (error) {
      available = false;
    }
    write(memory);
  }

  function exportState() {
    return JSON.parse(JSON.stringify(read()));
  }

  window.GlobasaStorage = {
    getState: read,
    getConcept: getConcept,
    recordAnswer: recordAnswer,
    finishLesson: finishLesson,
    setLastConcept: setLastConcept,
    setReview: setReview,
    getTheme: getTheme,
    setTheme: setTheme,
    getDynamic: getDynamic,
    setDynamic: setDynamic,
    reset: reset,
    exportState: exportState,
    isAvailable: function () {
      return available;
    }
  };
})();
