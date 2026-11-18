/* Hash router, theme, and event wiring. */
(function () {
  "use strict";

  var C = window.GLOBASA_CURRICULUM;
  var Views = window.GlobasaViews;
  var Storage = window.GlobasaStorage;
  var Engine = window.GlobasaEngine;
  var Review = window.GlobasaReview;
  var Firebase = window.FirebaseService;

  var State = {
    session: null,
    dict: { query: "", classFilter: "all", categoryFilter: "all", limit: 80 },
    widget: { open: false, query: "" },
    authReady: false,
    user: null,
    login: { loading: false, errorMsg: "", errorCode: "" },
    lastHash: null,
    skipLeaveGuard: false
  };

  var view = document.getElementById("view");
  var themeButton = document.getElementById("theme-toggle");
  var toastEl = document.getElementById("toast");
  var toastTimer = null;
  var widgetToggle = document.getElementById("dict-widget-toggle");
  var widgetPanel = document.getElementById("dict-widget");
  var widgetClose = document.getElementById("dict-widget-close");
  var widgetSearch = document.getElementById("dict-widget-search");
  var widgetResults = document.getElementById("dict-widget-results");
  var mainNav = document.getElementById("main-nav");
  var authControls = document.getElementById("auth-controls");
  var syncBadge = document.getElementById("cloud-sync-status");
  var logoutButton = document.getElementById("logout-btn");

  function toast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add("show");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () { toastEl.classList.remove("show"); }, 2400);
  }

  function renderWidgetResults() {
    if (!widgetResults) return;
    widgetResults.innerHTML = Views.dictionaryWidget(State.widget.query);
  }

  var LEAVE_MESSAGE = "Leave this lesson run? Your answers from this attempt will be discarded.";

  /* A run that has answers recorded but has not reached the results screen. */
  function activeRun() {
    var route = parseRoute();
    if (route.view !== "exercise") return null;
    var session = State.session;
    if (!session || session.conceptId !== route.id || session.finished) return null;
    if (!session.results || Object.keys(session.results).length === 0) return null;
    return session;
  }

  function goesToSameRun(hash) {
    var match = /^#\/exercise\/([^/]+)/.exec(hash || "");
    if (!match || !State.session) return false;
    try {
      return decodeURIComponent(match[1]) === State.session.conceptId;
    } catch (error) {
      return false;
    }
  }

  function confirmLeaveRun() {
    if (!activeRun()) return true;
    if (!window.confirm(LEAVE_MESSAGE)) return false;
    State.session = null;
    return true;
  }

  function answerTextControl() {
    return view.querySelector("#translation-input") || view.querySelector(".blank-input");
  }

  function setWidgetOpen(open, focusInput, restoreFocus) {
    var wasOpen = State.widget.open;
    State.widget.open = Boolean(open);
    if (widgetToggle) widgetToggle.setAttribute("aria-expanded", State.widget.open ? "true" : "false");
    if (widgetPanel) widgetPanel.hidden = !State.widget.open;
    if (State.widget.open) {
      if (!wasOpen) {
        var active = document.activeElement;
        State.widget.returnFocus = active && active !== document.body && active !== widgetToggle && !widgetPanel.contains(active) ? active : null;
      }
      renderWidgetResults();
      if (focusInput && widgetSearch) {
        try { widgetSearch.focus({ preventScroll: true }); } catch (error) { widgetSearch.focus(); }
      }
      return;
    }
    if (wasOpen && restoreFocus) {
      var target = State.widget.returnFocus;
      if (!target || !document.contains(target) || target.disabled) target = answerTextControl() || widgetToggle;
      if (target) {
        try { target.focus({ preventScroll: true }); } catch (error) { target.focus(); }
      }
    }
    if (wasOpen) State.widget.returnFocus = null;
  }

  /* The widget only exists in lesson context; leaving it closes the panel. */
  function syncWidgetVisibility(route) {
    var inLesson = route.view === "lesson" || route.view === "exercise";
    if (widgetToggle) widgetToggle.hidden = !inLesson;
    if (!inLesson && State.widget.open) setWidgetOpen(false);
  }

  /* Label the dictionary shortcut the way the current keyboard spells it (see Views.shortcutLabel). */
  function applyShortcutLabels() {
    var label = Views.shortcutLabel();
    if (widgetToggle) widgetToggle.setAttribute("title", "Dictionary (" + label + ")");
    var chip = document.querySelector(".dict-widget-kbd");
    if (chip) chip.textContent = label;
  }

  function isTextEntry(element) {
    if (!element) return false;
    if (element.isContentEditable) return true;
    if (element.tagName === "TEXTAREA") return true;
    if (element.tagName === "INPUT") {
      var type = (element.getAttribute("type") || "text").toLowerCase();
      return ["text", "search", "email", "password", "number", "url", "tel"].indexOf(type) !== -1;
    }
    return false;
  }

  function submitCurrentForm() {
    var form = document.getElementById("answer-form");
    if (!form) return;
    if (typeof form.requestSubmit === "function") form.requestSubmit();
    else submitAnswer(form);
  }

  /* Put the caret straight into text entry so typing works; MCQ choices are reachable with 1–5. */
  function focusAnswerControl() {
    var session = State.session;
    if (!session || session.submitted) return;
    if (widgetPanel && widgetPanel.contains(document.activeElement)) return;
    var target = view.querySelector("#translation-input") || view.querySelector(".blank-input");
    if (!target) return;
    try { target.focus({ preventScroll: true }); } catch (error) { target.focus(); }
  }

  function systemTheme() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme() {
    var saved = Storage.getTheme();
    document.documentElement.setAttribute("data-theme", saved === "auto" ? systemTheme() : saved);
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    var next = current === "dark" ? "light" : "dark";
    Storage.setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  }

  function authEnabled() {
    return Boolean(Firebase && Firebase.isConfigured && Firebase.isConfigured());
  }

  function setSyncBadge(status, message) {
    if (!syncBadge) return;
    var labelByStatus = {
      synced: "Synced",
      syncing: "Syncing",
      error: "Sync error",
      offline: "Offline"
    };
    syncBadge.className = "sync-badge is-" + status;
    syncBadge.textContent = labelByStatus[status] || "Offline";
    syncBadge.title = message || "";
  }

  function updateChrome() {
    var signedIn = Boolean(State.user);
    if (mainNav) mainNav.hidden = !signedIn;
    if (authControls) authControls.hidden = !signedIn;
    if (logoutButton) logoutButton.hidden = !signedIn;
  }

  function renderLogin() {
    if (widgetToggle) widgetToggle.hidden = true;
    if (State.widget.open) setWidgetOpen(false);
    view.innerHTML = Views.login({
      isLoading: State.login.loading,
      errorMsg: State.login.errorMsg,
      errorCode: State.login.errorCode,
      configMissing: !authEnabled()
    });
    document.title = "Sign in · Bonpala";
    if (State.lastHash !== window.location.hash) {
      State.lastHash = window.location.hash;
      window.scrollTo({ top: 0, behavior: "auto" });
    }
    window.setTimeout(function () {
      var email = document.getElementById("login-email");
      if (!email) return;
      try { email.focus({ preventScroll: true }); } catch (error) { email.focus(); }
    }, 10);
  }

  function handleAuthState(user) {
    State.user = user || null;
    State.authReady = true;
    State.session = null;
    State.login.loading = false;
    State.login.errorMsg = "";
    State.login.errorCode = "";
    updateChrome();

    if (!State.user) {
      setSyncBadge("offline");
      Storage.clearCloudSession().catch(function () {});
      renderRoute();
      return;
    }

    setSyncBadge("syncing");
    Storage.initCloudSync(State.user.uid).then(function () {
      renderRoute();
    }).catch(function (error) {
      toast(error && error.message ? error.message : "Could not load cloud progress.");
      renderRoute();
    });
  }

  function submitLogin(form) {
    if (!authEnabled() || !Firebase || !Firebase.signIn) {
      State.login.errorMsg = "Firebase is not configured.";
      State.login.errorCode = "";
      renderLogin();
      return;
    }

    var emailInput = form.querySelector("#login-email");
    var passwordInput = form.querySelector("#login-password");
    var email = emailInput ? emailInput.value.trim() : "";
    var password = passwordInput ? passwordInput.value : "";
    if (!email || !password) {
      State.login.errorMsg = "Enter both email and password.";
      State.login.errorCode = "";
      renderLogin();
      return;
    }

    State.login.loading = true;
    State.login.errorMsg = "";
    State.login.errorCode = "";
    renderLogin();
    Firebase.signIn(email, password).catch(function (error) {
      State.login.loading = false;
      State.login.errorCode = error && error.code ? error.code : "";
      State.login.errorMsg = error && error.message ? error.message : "Sign-in failed.";
      renderLogin();
    });
  }

  /* A review run is a synthetic concept that only exists while the run is live. */
  function conceptFor(conceptId) {
    var session = State.session;
    if (session && session.concept && session.concept.id === conceptId) return session.concept;
    return C.byId[conceptId] || null;
  }

  function reviewOrder(concept) {
    return concept.exercises.map(function (exercise) { return exercise.id; });
  }

  function parseRoute() {
    var raw = (window.location.hash || "#/").replace(/^#/, "");
    var parts = raw.split("/").filter(function (part) { return part.length > 0; });
    if (!parts.length) return { view: "dashboard" };
    if (parts[0] === "lesson" && parts[1]) return { view: "lesson", id: decodeURIComponent(parts[1]) };
    if (parts[0] === "exercise" && parts[1]) {
      var index = parseInt(parts[2], 10);
      return { view: "exercise", id: decodeURIComponent(parts[1]), index: isNaN(index) ? 0 : index };
    }
    if (parts[0] === "results" && parts[1]) return { view: "results", id: decodeURIComponent(parts[1]) };
    if (parts[0] === "grammar") return { view: "grammar" };
    if (parts[0] === "tenses") return { view: "tenses" };
    if (parts[0] === "dictionary") return { view: "dictionary" };
    if (parts[0] === "reference") return { view: "reference" };
    return { view: "not-found" };
  }

  function renderRoute() {
    if (!State.authReady) {
      view.innerHTML = '<div class="empty"><span class="eyebrow">Loading</span><h1 style="margin:8px 0">Checking session…</h1></div>';
      return;
    }
    if (!State.user) {
      renderLogin();
      return;
    }

    var route = parseRoute();
    var html = "";
    var title = "Bonpala — Globasa practice";

    if (route.view === "dashboard") {
      html = Views.dashboard();
    } else if (route.view === "lesson") {
      var concept = C.byId[route.id];
      if (concept) title = concept.title + " · Bonpala";
      html = Views.lesson(route.id);
    } else if (route.view === "exercise") {
      var exConcept = conceptFor(route.id);
      if (!exConcept && route.id === Review.REVIEW_ID) {
        /* A review queue lives only in memory, so a reload cannot rebuild it. */
        html = Views.reviewExpired();
        title = "Review · Bonpala";
      } else if (exConcept) {
        var index = Math.max(0, Math.min(exConcept.exercises.length - 1, route.index));
        var live = State.session && State.session.conceptId === exConcept.id;
        /* A review run keeps its session across questions; a lesson rebuilds it. */
        if (!live) {
          State.session = Engine.createSession(exConcept, index);
          State.session.order = exConcept.review ? reviewOrder(exConcept) : Views.lessonOrder(exConcept);
        } else if (State.session.index !== index) {
          if (exConcept.review) {
            State.session.index = index;
            State.session.submitted = false;
            State.session.feedback = null;
            State.session.response = null;
          } else {
            State.session = Engine.createSession(exConcept, index);
            State.session.order = Views.lessonOrder(exConcept);
          }
        }
        var runOrder = State.session.order || Views.lessonOrder(exConcept);
        var position = runOrder.indexOf(exConcept.exercises[index].id);
        title = "Exercise " + (position + 1) + " of " + exConcept.exercises.length + " · " + exConcept.title;
        html = Views.exercise(exConcept.id, index, State.session);
      } else {
        html = Views.notFound("That exercise does not exist.");
      }
    } else if (route.view === "results") {
      var resultConcept = conceptFor(route.id);
      if (!resultConcept && route.id === Review.REVIEW_ID) {
        html = Views.reviewExpired();
        title = "Review · Bonpala";
      } else {
        if (resultConcept) title = "Results · " + resultConcept.title;
        html = Views.results(route.id, State.session);
      }
    } else if (route.view === "grammar") {
      html = Views.grammar();
      title = "Grammar in Brief · Bonpala";
    } else if (route.view === "tenses") {
      html = Views.tenses();
      title = "Verb Tenses · Bonpala";
    } else if (route.view === "dictionary") {
      html = Views.dictionary(State);
      title = "Dictionary · Bonpala";
    } else if (route.view === "reference") {
      html = Views.reference();
      title = "Quick reference · Bonpala";
    } else {
      html = Views.notFound("Check the address or return to the dashboard.");
    }

    view.innerHTML = html;
    document.title = title;
    syncWidgetVisibility(route);

    if (State.lastHash !== window.location.hash) {
      State.lastHash = window.location.hash;
      window.scrollTo({ top: 0, behavior: "auto" });
      try { view.focus({ preventScroll: true }); } catch (error) { view.focus(); }
    }

    if (route.view === "exercise") {
      window.setTimeout(focusAnswerControl, 30);
    }
  }

  /* A run opens at the first exercise of its own order, not at a caller-supplied index. */
  function startLesson(conceptId) {
    if (!State.user) return;
    var concept = C.byId[conceptId];
    if (!concept) return;
    var session = Engine.createSession(concept, 0);
    session.order = Views.lessonOrder(concept);
    var firstId = session.order[0];
    session.index = concept.exercises.findIndex(function (exercise) { return exercise.id === firstId; });
    if (session.index < 0) session.index = 0;
    State.session = session;
    window.location.hash = "#/exercise/" + encodeURIComponent(conceptId) + "/" + session.index;
  }

  /* Build a mixed run from every started lesson and let the normal pipeline ask it. */
  function startReview() {
    if (!State.user) return;
    var queue = Review.buildQueue(C.concepts);
    if (!queue.length) {
      toast("Start a lesson first — review draws from lessons you have already practised.");
      return;
    }
    var concept = Review.buildConcept(queue);
    var session = Engine.createSession(concept, 0);
    session.kind = "review";
    session.order = reviewOrder(concept);
    State.session = session;
    State.skipLeaveGuard = true;
    window.location.hash = "#/exercise/" + Review.REVIEW_ID + "/0";
  }

  function allAnswered(concept, session) {
    return concept.exercises.every(function (exercise) {
      return session.results[exercise.id] !== undefined;
    });
  }

  /* Next exercise of this run, wrapping around so a run never ends with unanswered items. */
  function nextUnansweredIndex(concept, session) {
    var order = Views.sessionOrder(concept, session);
    var current = concept.exercises[session.index] && concept.exercises[session.index].id;
    var start = order.indexOf(current);
    for (var step = 1; step <= order.length; step += 1) {
      var id = order[(start + step + order.length) % order.length];
      if (session.results[id] === undefined) {
        return concept.exercises.findIndex(function (exercise) { return exercise.id === id; });
      }
    }
    return -1;
  }

  /* A review run has no 10/10 score; each source lesson advances or lapses instead. */
  function finishRun(concept, session) {
    if (session.finished) return;
    if (session.kind === "review") {
      session.outcomes = Review.applyResults(session, concept.exercises);
      session.finished = true;
      return;
    }
    var score = Engine.score(session, concept);
    Storage.finishLesson(concept.id, score, concept.exercises.length);
    Review.onLessonFinished(concept.id, score, concept.exercises.length);
    session.finished = true;
  }

  function submitAnswer(form) {
    var route = parseRoute();
    if (route.view !== "exercise") return;
    var concept = conceptFor(route.id);
    if (!concept) return;
    var session = State.session;
    if (!session || session.conceptId !== concept.id || session.submitted) return;
    var exercise = Engine.instance(session, concept.exercises[session.index]);
    var response;

    if (exercise.type === "mcq") {
      var checked = form.querySelector('input[name="option"]:checked');
      if (!checked) { toast("Choose one answer first."); return; }
      response = Number(checked.value);
    } else if (exercise.type === "translate") {
      var textarea = form.querySelector("#translation-input");
      response = textarea ? textarea.value.trim() : "";
      if (!response) { toast("Write a translation first."); textarea && textarea.focus(); return; }
    } else {
      var inputs = form.querySelectorAll(".blank-input");
      response = Array.prototype.map.call(inputs, function (input) { return input.value.trim(); });
      if (response.some(function (value) { return !value; })) {
        toast("Fill every blank first.");
        var empty = Array.prototype.filter.call(inputs, function (input) { return !input.value.trim(); })[0];
        if (empty) empty.focus();
        return;
      }
    }

    var feedback = Engine.evaluate(exercise, response);
    session.response = response;
    session.feedback = feedback;
    session.submitted = true;
    Engine.recordResult(session, exercise, feedback.correct);
    if (!session.finished && allAnswered(concept, session)) finishRun(concept, session);
    renderRoute();
    window.setTimeout(function () {
      var panel = document.getElementById("feedback-panel");
      if (panel) panel.focus();
    }, 20);
  }

  function nextExercise(conceptId) {
    var session = State.session;
    var concept = conceptFor(conceptId);
    if (!session || !concept || session.conceptId !== concept.id) return;
    var nextIndex = nextUnansweredIndex(concept, session);
    if (nextIndex < 0) {
      finishRun(concept, session);
      window.location.hash = "#/results/" + encodeURIComponent(concept.id);
      return;
    }
    session.index = nextIndex;
    session.submitted = false;
    session.feedback = null;
    session.response = null;
    State.skipLeaveGuard = true;
    window.location.hash = "#/exercise/" + encodeURIComponent(concept.id) + "/" + session.index;
  }

  function updateDictionaryResults() {
    var host = document.getElementById("dict-results");
    if (host) host.innerHTML = Views.dictionaryResults(State);
  }

  view.addEventListener("submit", function (event) {
    if (event.target && event.target.id === "answer-form") {
      event.preventDefault();
      submitAnswer(event.target);
    } else if (event.target && event.target.id === "login-form") {
      event.preventDefault();
      submitLogin(event.target);
    }
  });

  view.addEventListener("click", function (event) {
    var scrollLink = event.target.closest("[data-scroll]");
    if (scrollLink) {
      event.preventDefault();
      var target = document.getElementById(scrollLink.getAttribute("data-scroll"));
      if (target) {
        var root = document.documentElement;
        var previous = root.style.scrollBehavior;
        root.style.scrollBehavior = "auto";
        target.scrollIntoView({ block: "start" });
        root.style.scrollBehavior = previous;
      }
      return;
    }
    var button = event.target.closest("[data-action]");
    if (!button) return;
    var action = button.getAttribute("data-action");

    if (action === "start-lesson") {
      startLesson(button.getAttribute("data-concept"));
    } else if (action === "start-review") {
      startReview();
    } else if (action === "next-exercise") {
      nextExercise(button.getAttribute("data-concept"));
    } else if (action === "retry-lesson") {
      startLesson(button.getAttribute("data-concept"));
    } else if (action === "dict-more") {
      State.dict.limit += 80;
      updateDictionaryResults();
    } else if (action === "reset-progress") {
      if (window.confirm("Reset every lesson score and completed exercise? This cannot be undone.")) {
        Storage.reset();
        State.session = null;
        applyTheme();
        renderRoute();
        toast("Progress reset.");
      }
    }
  });

  view.addEventListener("input", function (event) {
    if (event.target && event.target.id === "dict-search") {
      State.dict.query = event.target.value;
      State.dict.limit = 80;
      updateDictionaryResults();
    }
  });

  view.addEventListener("change", function (event) {
    if (event.target && event.target.id === "dynamic-toggle") {
      window.GlobasaStorage.setDynamic(event.target.checked);
      toast(event.target.checked ? "Dynamic questions on — applies from your next run." : "Dynamic questions off — original wording restored.");
    } else if (event.target && event.target.id === "dict-class") {
      State.dict.classFilter = event.target.value;
      State.dict.limit = 80;
      updateDictionaryResults();
    } else if (event.target && event.target.id === "dict-category") {
      State.dict.categoryFilter = event.target.value;
      State.dict.limit = 80;
      updateDictionaryResults();
    } else if (event.target && event.target.name === "option") {
      var labels = view.querySelectorAll(".option");
      Array.prototype.forEach.call(labels, function (label) {
        label.classList.toggle("is-selected", Boolean(label.querySelector("input:checked")));
      });
    }
  });

  applyShortcutLabels();

  if (widgetToggle) {
    widgetToggle.addEventListener("click", function () {
      setWidgetOpen(!State.widget.open, true);
    });
  }
  if (widgetClose) {
    widgetClose.addEventListener("click", function () {
      setWidgetOpen(false, false, true);
    });
  }
  if (widgetSearch) {
    widgetSearch.addEventListener("input", function () {
      State.widget.query = widgetSearch.value;
      renderWidgetResults();
    });
  }
  if (logoutButton) {
    logoutButton.addEventListener("click", function () {
      if (!Firebase || !Firebase.signOutUser) return;
      Storage.flushCloudSave().then(function () {
        return Firebase.signOutUser();
      }).catch(function (error) {
        toast(error && error.message ? error.message : "Sync failed. Sign out blocked.");
      });
    });
  }
  document.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) return;

    var active = document.activeElement;
    var typing = isTextEntry(active);

    if (event.key === "Escape" && State.widget.open) {
      setWidgetOpen(false, false, true);
      return;
    }

    /* Ctrl/⌘ + "/" opens the in-lesson dictionary, or returns to its search field. */
    if (event.key === "/" && (event.ctrlKey || event.metaKey) && !event.altKey) {
      if (widgetToggle && !widgetToggle.hidden) {
        event.preventDefault();
        if (!State.widget.open) setWidgetOpen(true, true);
        else if (widgetSearch) widgetSearch.focus();
        return;
      }
    }

    var route = parseRoute();

    /* Results screen: R retries the lesson, Esc opens the notes, D returns to the dashboard. */
    if (route.view === "results") {
      if (typing || event.ctrlKey || event.metaKey || event.altKey) return;
      var resultsKey = event.key.toLowerCase();
      var reviewRun = route.id === Review.REVIEW_ID;
      if (resultsKey === "r" && !event.repeat) {
        event.preventDefault();
        if (reviewRun) startReview();
        else startLesson(route.id);
      } else if (resultsKey === "d" && !event.repeat) {
        event.preventDefault();
        window.location.hash = "#/";
      } else if (event.key === "Escape") {
        event.preventDefault();
        window.location.hash = reviewRun ? "#/" : "#/lesson/" + encodeURIComponent(route.id);
      }
      return;
    }

    /* Lesson page: X starts or retries the run, Esc returns to the dashboard. */
    if (route.view === "lesson") {
      if (typing || event.ctrlKey || event.metaKey || event.altKey) return;
      var lessonKey = event.key.toLowerCase();
      if (lessonKey === "x" && !event.repeat) {
        event.preventDefault();
        startLesson(route.id);
      } else if (event.key === "Escape") {
        event.preventDefault();
        window.location.hash = "#/";
      }
      return;
    }

    if (route.view !== "exercise") return;
    var session = State.session;
    if (!session || session.conceptId !== route.id) return;

    if (event.key === "Enter" && !event.shiftKey) {
      if (session.submitted) {
        if (typing) return;
        event.preventDefault();
        nextExercise(route.id);
        return;
      }
      if (typing) {
        if (active.tagName === "TEXTAREA" && (event.ctrlKey || event.metaKey)) {
          event.preventDefault();
          submitCurrentForm();
        }
        return;
      }
      if (active && (active.tagName === "BUTTON" || active.tagName === "A")) return;
      event.preventDefault();
      submitCurrentForm();
      return;
    }

    if (!typing && !session.submitted && /^[1-9]$/.test(event.key)) {
      var options = view.querySelectorAll(".options .option");
      var choice = options[Number(event.key) - 1];
      if (choice) {
        event.preventDefault();
        choice.click();
      }
    }
  });

  themeButton.addEventListener("click", toggleTheme);

  /* Warn before leaving an unfinished run through any in-app link. */
  document.addEventListener("click", function (event) {
    var link = event.target && event.target.closest ? event.target.closest('a[href^="#/"]') : null;
    if (!link || !activeRun()) return;
    var href = link.getAttribute("href");
    if (!href || href === window.location.hash || goesToSameRun(href)) return;
    if (!confirmLeaveRun()) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, true);

  /* Warn before closing or reloading the tab mid-run. */
  window.addEventListener("beforeunload", function (event) {
    if (!activeRun()) return;
    event.preventDefault();
    event.returnValue = "";
  });

  window.addEventListener("hashchange", function () {
    if (State.skipLeaveGuard) {
      State.skipLeaveGuard = false;
      renderRoute();
      return;
    }
    if (activeRun() && window.location.hash !== State.lastHash) {
      if (!confirmLeaveRun()) {
        State.skipLeaveGuard = true;
        window.location.hash = State.lastHash || "#/";
        return;
      }
    }
    renderRoute();
  });

  applyTheme();
  updateChrome();
  Storage.onSyncStatus(function (status, message) {
    setSyncBadge(status, message);
  });

  if (Firebase && Firebase.onAuthChange) {
    Firebase.onAuthChange(handleAuthState);
  } else {
    handleAuthState(null);
  }

  if (!Storage.isAvailable()) {
    window.setTimeout(function () { toast("This browser cannot save progress locally."); }, 500);
  }
})();
