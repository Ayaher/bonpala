/* Versioned localStorage progress store with an in-memory fallback. */
(function () {
  "use strict";

  var KEY = "globasa.progress.v1";
  var VERSION = 1;
  var SCHEMA_VERSION = 1;
  var SYNC_DEBOUNCE_MS = 1500;

  var memory = null;
  var available = true;
  var currentUserUid = null;
  var syncTimeoutId = null;
  var isDirty = false;
  var syncStatus = "offline";
  var syncStatusCallback = null;
  var suspendSyncScheduling = false;

  function canUseWindow() {
    return typeof window !== "undefined";
  }

  function getLocalStorage() {
    if (!canUseWindow() || !window.localStorage) return null;
    return window.localStorage;
  }

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
      var localStorage = getLocalStorage();
      if (!localStorage) {
        memory = emptyState();
        available = false;
        return memory;
      }
      var raw = localStorage.getItem(KEY);
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

  function write(state, options) {
    var opts = options || {};
    memory = state;
    try {
      var localStorage = getLocalStorage();
      if (!localStorage) {
        available = false;
      } else {
        localStorage.setItem(KEY, JSON.stringify(state));
      }
    } catch (error) {
      available = false;
    }
    if (!opts.skipCloud && !suspendSyncScheduling) {
      scheduleCloudSave();
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
      var localStorage = getLocalStorage();
      if (localStorage) localStorage.removeItem(KEY);
      else available = false;
    } catch (error) {
      available = false;
    }
    write(memory);
  }

  function exportState() {
    return JSON.parse(JSON.stringify(read()));
  }

  function notifySyncStatus(status, message) {
    syncStatus = status;
    if (typeof syncStatusCallback === "function") {
      syncStatusCallback(status, message || "");
    }
  }

  function firebaseService() {
    if (!canUseWindow()) return null;
    return window.FirebaseService || null;
  }

  function canSyncToCloud() {
    var service = firebaseService();
    return Boolean(currentUserUid && service && service.isReady && service.isReady());
  }

  function clearPendingSync() {
    if (!syncTimeoutId) return;
    window.clearTimeout(syncTimeoutId);
    syncTimeoutId = null;
  }

  function cloudPayload() {
    return {
      payload: exportState(),
      schemaVersion: SCHEMA_VERSION,
      updatedAt: firebaseService().serverTimestamp()
    };
  }

  function writeRemoteState() {
    if (!canSyncToCloud()) return Promise.resolve(false);
    var service = firebaseService();
    var ref = service.getUserDocRef(currentUserUid);
    notifySyncStatus("syncing");
    return ref.set(cloudPayload(), { merge: true }).then(function () {
      isDirty = false;
      notifySyncStatus("synced");
      return true;
    }).catch(function (error) {
      notifySyncStatus("error", error && error.message ? error.message : "Cloud sync failed.");
      throw error;
    });
  }

  function scheduleCloudSave() {
    if (!currentUserUid) return;
    isDirty = true;
    if (!canSyncToCloud()) {
      notifySyncStatus("offline");
      return;
    }
    clearPendingSync();
    syncTimeoutId = window.setTimeout(function () {
      syncTimeoutId = null;
      if (!isDirty) return;
      writeRemoteState().catch(function () {});
    }, SYNC_DEBOUNCE_MS);
  }

  function flushCloudSave() {
    clearPendingSync();
    if (!isDirty) return Promise.resolve(true);
    if (!canSyncToCloud()) {
      notifySyncStatus("offline");
      return Promise.reject(new Error("Cloud sync is not available."));
    }
    return writeRemoteState();
  }

  function initCloudSync(uid) {
    currentUserUid = uid || null;
    isDirty = false;
    clearPendingSync();
    if (!currentUserUid) {
      notifySyncStatus("offline");
      return Promise.resolve(false);
    }
    if (!canSyncToCloud()) {
      notifySyncStatus("offline");
      return Promise.reject(new Error("Firebase is not configured."));
    }

    notifySyncStatus("syncing");
    var service = firebaseService();
    var ref = service.getUserDocRef(currentUserUid);
    return ref.get().then(function (snapshot) {
      if (snapshot.exists) {
        var remote = snapshot.data() || {};
        var remoteState = remote.payload;
        if (remoteState && typeof remoteState === "object") {
          suspendSyncScheduling = true;
          write(migrate(remoteState), { skipCloud: true });
          suspendSyncScheduling = false;
        }
        notifySyncStatus("synced");
        return true;
      }
      return writeRemoteState();
    }).catch(function (error) {
      notifySyncStatus("error", error && error.message ? error.message : "Initial sync failed.");
      throw error;
    });
  }

  function clearCloudSession() {
    var pending = isDirty ? flushCloudSave() : Promise.resolve(true);
    return pending.then(function () {
      currentUserUid = null;
      isDirty = false;
      clearPendingSync();
      notifySyncStatus("offline");
      return true;
    });
  }

  function onSyncStatus(callback) {
    syncStatusCallback = typeof callback === "function" ? callback : null;
    if (syncStatusCallback) syncStatusCallback(syncStatus, "");
  }

  if (canUseWindow() && typeof window.addEventListener === "function") {
    window.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "hidden" && isDirty) flushCloudSave().catch(function () {});
    });
    window.addEventListener("beforeunload", function () {
      if (isDirty) flushCloudSave().catch(function () {});
    });
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
    initCloudSync: initCloudSync,
    flushCloudSave: flushCloudSave,
    clearCloudSession: clearCloudSession,
    onSyncStatus: onSyncStatus,
    getSyncStatus: function () { return syncStatus; },
    isAvailable: function () {
      return available;
    }
  };
})();
