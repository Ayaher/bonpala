/* HTML rendering for every screen. Content is authored, but all user/dictionary text is escaped. */
(function () {
  "use strict";

  var C = window.GLOBASA_CURRICULUM;
  var W = window.GLOBASA_WORDS;

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }

  /* Prose with {{Globasa}} markers set in the citation face. Authoring rule:
     mark only text that sits inside English prose, never a whole Globasa line. */
  function prose(value) {
    return esc(value).replace(/\{\{(.+?)\}\}/g, '<span class="gl">$1</span>');
  }

  /* Word-list glosses mark italic hints with underscores: pen (_writing utensil_). */
  function gloss(value) {
    return esc(value).replace(/_([^_]+)_/g, "<em>$1</em>");
  }

  function area(areaId) {
    return C.areas.filter(function (item) { return item.id === areaId; })[0] || { title: areaId, blurb: "" };
  }

  function concept(conceptId, session) {
    if (session && session.concept && session.concept.id === conceptId) return session.concept;
    return C.byId[conceptId] || null;
  }

  function recordFor(conceptId) {
    return window.GlobasaStorage.getConcept(conceptId) || { answers: {}, bestScore: null, lastScore: null, runs: 0 };
  }

  function answeredCount(record) {
    return Object.keys(record.answers || {}).length;
  }

  /* Challenge lessons carry a chal- id; titles alone are unreliable because some
     reading stories mention the word "challenge". */
  function isChallenge(item) {
    return Boolean(item && item.id.indexOf("chal-") === 0);
  }

  function conceptStatus(record) {
    if (record.bestScore === 10) return "mastered";
    if (answeredCount(record) > 0 || (record.runs || 0) > 0 || record.bestScore != null) return "started";
    return "new";
  }

  function nextConcept(conceptId) {
    var index = C.concepts.findIndex(function (item) { return item.id === conceptId; });
    return index >= 0 && index < C.concepts.length - 1 ? C.concepts[index + 1] : null;
  }

  function typeLabel(type) {
    return type === "mcq" ? "Multiple choice" : type === "translate" ? "Translation" : "Fill in the blank";
  }

  function typeShort(type) {
    return type === "mcq" ? "MCQ" : type === "translate" ? "Translate" : "Fill";
  }

  function statusFor(record, exerciseId) {
    var answer = record.answers && record.answers[exerciseId];
    if (!answer) return "unseen";
    return answer.correct ? "correct" : "incorrect";
  }

  function bestLabel(record) {
    return record.bestScore == null ? "—" : record.bestScore + "/10";
  }

  /* Score summary that drops the redundant 10/10 for mastered lessons. */
  function plural(count, singular, many) {
    return count + " " + (count === 1 ? singular : (many || singular + "s"));
  }

  function scoreLabel(record) {
    if (record.bestScore == null) return "no score yet";
    return record.bestScore >= 10 ? "all answers correct" : "best " + record.bestScore + "/10";
  }

  function hashSeed(text) {
    var hash = 2166136261;
    for (var i = 0; i < text.length; i += 1) {
      hash ^= text.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  }

  function seededRandom(seed) {
    var state = seed >>> 0;
    return function () {
      state = (state + 0x6d2b79f5) >>> 0;
      var t = state;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function seededShuffle(list, seed) {
    var random = seededRandom(seed);
    var copy = list.slice();
    for (var i = copy.length - 1; i > 0; i -= 1) {
      var j = Math.floor(random() * (i + 1));
      var swap = copy[i];
      copy[i] = copy[j];
      copy[j] = swap;
    }
    return copy;
  }

  /* Exercise ids grouped by type, keeping the authored recognition → production order. */
  function typeBlocks(item) {
    var order = [];
    var byType = {};
    item.exercises.forEach(function (exercise) {
      if (!byType[exercise.type]) {
        byType[exercise.type] = [];
        order.push(exercise.type);
      }
      byType[exercise.type].push(exercise.id);
    });
    return order.map(function (type) { return byType[type]; });
  }

  /* Run order: blocks stay in authored sequence, items shuffle inside each block. */
  function lessonOrder(item, attempt) {
    var record = recordFor(item.id);
    var run = attempt == null ? record.runs || 0 : attempt;
    var seed = hashSeed(item.id + ":" + run);
    return typeBlocks(item).reduce(function (ids, block, blockIndex) {
      return ids.concat(seededShuffle(block, hashSeed(seed + ":" + blockIndex)));
    }, []);
  }

  function sessionOrder(item, session) {
    if (session && Array.isArray(session.order) && session.order.length === item.exercises.length) {
      return session.order;
    }
    var order = lessonOrder(item);
    if (session) session.order = order;
    return order;
  }

  function authoredIndex(item, exerciseId) {
    return item.exercises.findIndex(function (exercise) { return exercise.id === exerciseId; });
  }

  function navFor(viewName) {
    var links = document.querySelectorAll(".main-nav a");
    for (var i = 0; i < links.length; i += 1) {
      links[i].classList.toggle("active", links[i].getAttribute("data-nav") === viewName);
    }
  }

  /* Decorative watermark glyphs; one per stat card tone. */
  var STAT_ICONS = {
    book:
      '<path d="M12 6.2C10.5 4.9 8.6 4.2 6.2 4.2H3.8v13h2.4c2.4 0 4.3.7 5.8 2 1.5-1.3 3.4-2 5.8-2h2.4v-13h-2.4c-2.4 0-4.3.7-5.8 2z"/>' +
      '<path d="M12 6.2v13"/>',
    check:
      '<path d="M4 6.6l1.7 1.7 3.4-3.4"/><path d="M12 7h8.2"/>' +
      '<path d="M4 13.1l1.7 1.7 3.4-3.4"/><path d="M12 13.5h8.2"/>' +
      '<path d="M4 19.6l1.7 1.7 3.4-3.4"/><path d="M12 20h8.2"/>',
    star: '<path d="M12 2.8L14.35 8.76L20.75 9.16L15.8 13.24L17.41 19.44L12 16L6.59 19.44L8.2 13.24L3.25 9.16L9.65 8.76Z"/>'
  };

  function statCard(opts) {
    var total = opts.total > 0 ? opts.total : 1;
    var pct = Math.max(0, Math.min(100, Math.round((opts.value / total) * 100)));
    return (
      '<div class="stat stat--' + esc(opts.tone) + '">' +
        '<svg class="stat-art" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' +
          STAT_ICONS[opts.icon] +
        '</svg>' +
        '<div class="stat-value">' + opts.value + '<span class="stat-total">/' + opts.total + '</span>' + (opts.suffix ? '<span class="stat-suffix">' + esc(opts.suffix) + '</span>' : "") + '</div>' +
        '<div class="stat-label">' + esc(opts.label) + '</div>' +
        '<div class="stat-meter" role="progressbar" aria-label="' + esc(opts.label) + '" aria-valuemin="0" aria-valuemax="' + opts.total + '" aria-valuenow="' + opts.value + '">' +
          '<div class="stat-meter-fill" style="width:' + pct + '%"></div>' +
        '</div>' +
      '</div>'
    );
  }

  function conceptCard(item) {
    var record = recordFor(item.id);
    var count = answeredCount(record);
    var complete = count >= item.exercises.length;
    var masteredCard = record.bestScore === 10;
    var pct = Math.round((count / item.exercises.length) * 100);
    var cardReview = window.GlobasaReview.dueLabel(record);
    var challenge = isChallenge(item);
    var status = masteredCard ? '<span class="status-pill best">Mastered</span>' :
      complete ? '<span class="status-pill done">Complete</span>' :
      count ? '<span class="status-pill">In progress</span>' : '<span class="status-pill">New</span>';
    return (
      '<article class="concept-card area-' + esc(item.area) + (challenge ? " is-challenge" : "") + (complete ? " is-complete" : "") + (masteredCard ? " is-mastered" : "") + '">' +
        '<div class="concept-top">' +
          '<span class="area-dot" aria-hidden="true"></span>' +
          '<h3><a href="#/lesson/' + esc(item.id) + '">' + esc(item.title) + '</a></h3>' +
          status +
        '</div>' +
        '<p class="blurb">' + prose(item.blurb) + '</p>' +
        '<div class="chips">' +
          '<span class="chip">10 exercises</span>' +
          '<span class="chip">' + esc(item.refs[0] || "Grammar") + '</span>' +
          (cardReview ? '<span class="chip accent">' + esc(cardReview) + '</span>' : "") +
        '</div>' +
        '<div class="progress">' +
          '<div class="progress-meta"><span>' + count + ' of 10 answered</span><span class="progress-score' + (masteredCard ? " is-perfect" : "") + '">' + esc(scoreLabel(record)) + '</span></div>' +
          '<div class="progress-track"><div class="progress-bar" style="width:' + pct + '%"></div></div>' +
        '</div>' +
        (challenge ? '<span class="challenge-watermark" aria-hidden="true">★</span>' : "") +
      '</article>'
    );
  }

  function slotStrip(items) {
    return '<span class="slot-strip" aria-hidden="true">' + items.map(function (item) {
      var status = conceptStatus(recordFor(item.id));
      return '<span class="slot is-' + status + (isChallenge(item) ? " is-challenge" : "") + '" title="' + esc(item.title + " · " + status) + '"></span>';
    }).join("") + '</span>';
  }

  function areaTrack(areaItem, items) {
    var mastered = items.filter(function (item) { return recordFor(item.id).bestScore === 10; }).length;
    var exercises = items.reduce(function (sum, item) { return sum + item.exercises.length; }, 0);
    return (
      '<a class="area-track area-' + esc(areaItem.id) + '" href="#/area/' + esc(areaItem.id) + '"' +
        ' aria-label="' + esc(areaItem.title + ": " + mastered + " of " + items.length + " concepts mastered. Open area.") + '">' +
        '<span class="area-track-head">' +
          '<span class="area-dot" aria-hidden="true"></span>' +
          '<span class="area-track-title">' + esc(areaItem.title) + '</span>' +
          '<span class="area-track-count">' + mastered + '/' + items.length + ' mastered</span>' +
        '</span>' +
        slotStrip(items) +
        '<span class="area-track-foot">' +
          '<span>' + items.length + ' concepts · ' + exercises + ' exercises</span>' +
          '<span class="area-track-cta">Open area →</span>' +
        '</span>' +
      '</a>'
    );
  }

  function areaPage(areaId) {
    navFor("dashboard");
    var areaItem = C.areas.filter(function (item) { return item.id === areaId; })[0];
    if (!areaItem) return notFound("That area does not exist.");
    var items = C.concepts.filter(function (item) { return item.area === areaItem.id; });
    var mastered = items.filter(function (item) { return recordFor(item.id).bestScore === 10; }).length;
    var cards = items.map(conceptCard).join("");
    return (
      '<div class="crumbs"><a href="#/">Dashboard</a><span class="sep">/</span><span>' + esc(areaItem.title) + '</span></div>' +
      '<header class="area-hero area-' + esc(areaItem.id) + '">' +
        '<span class="eyebrow">Area overview</span>' +
        '<h1>' + esc(areaItem.title) + '</h1>' +
        '<p class="lead">' + prose(areaItem.blurb) + '</p>' +
        '<div class="chips" style="margin-top:14px">' +
          '<span class="chip">' + items.length + ' concepts</span>' +
          '<span class="chip">' + (items.length * 10) + ' exercises</span>' +
          '<span class="chip' + (mastered ? " accent" : "") + '">' + mastered + ' mastered</span>' +
        '</div>' +
        '<div class="button-row">' +
          '<a class="ghost" href="#/">Back to dashboard</a>' +
        '</div>' +
      '</header>' +
      '<section class="area-section" aria-label="' + esc(areaItem.title) + ' concepts">' +
        '<div class="concept-grid">' + cards + '</div>' +
      '</section>'
    );
  }

  function dashboard() {
    navFor("dashboard");
    var concepts = C.concepts;
    var allRecords = concepts.map(function (item) { return recordFor(item.id); });
    var answered = concepts.reduce(function (sum, item, index) {
      return sum + answeredCount(allRecords[index]);
    }, 0);
    var done = concepts.filter(function (item, index) {
      return answeredCount(allRecords[index]) >= item.exercises.length;
    }).length;
    var mastered = allRecords.filter(function (record) { return record.bestScore === 10; }).length;
    var lastId = window.GlobasaStorage.getState().lastConcept;
    var lastConcept = lastId && concept(lastId);
    var startConcept = concepts.filter(function (item) {
      return answeredCount(recordFor(item.id)) < item.exercises.length;
    })[0] || concepts[0];

    var review = window.GlobasaReview;
    var plan = review.overview(concepts);
    var reviewHtml = "";
    if (plan.started === 0) {
      reviewHtml =
        '<section class="review-card is-idle">' +
          '<div>' +
            '<span class="eyebrow">Spaced review</span>' +
            '<h2>Review unlocks after your first lesson</h2>' +
            '<p>Once a lesson has answers on record it joins the rotation: lessons still being learned come first, and mastered lessons return on a widening gap of ' + review.LADDER.join(", ") + ' days.</p>' +
          '</div>' +
        '</section>';
    } else {
      var headline;
      var detail;
      if (plan.dueCount > 0) {
        headline = plan.due > 0
          ? plural(plan.dueCount, "lesson") + " due for review"
          : plural(plan.learning, "lesson") + " ready to practise";
        detail = (plan.learning ? plural(plan.learning, "lesson") + " still being learned" : "nothing left half-learned") +
          (plan.due ? " · " + plural(plan.due, "mastered lesson") + " due again" : "") +
          ". One run asks 20 questions: up to " + review.BUDGET.learning + " from lessons you have not mastered, up to " + review.BUDGET.mastered + " from mastered lessons that have fallen due.";
      } else {
        headline = "Nothing due right now";
        detail = plural(plan.scheduled, "lesson") + " on the schedule" +
          (plan.nextTitle ? ", next up " + plan.nextTitle + " in " + plural(plan.nextDays || 0, "day") : "") +
          ". You can still run a mixed practice and it will count.";
      }
      reviewHtml =
        '<section class="review-card">' +
          '<div>' +
            '<span class="eyebrow">Spaced review</span>' +
            '<h2>' + esc(headline) + '</h2>' +
            '<p>' + esc(detail) + '</p>' +
          '</div>' +
          '<div class="review-card-side">' +
            '<button class="primary" type="button" data-action="start-review">' + (plan.dueCount > 0 ? "Start review" : "Practise anyway") + '</button>' +
            '<span class="review-ladder" aria-label="Review intervals in days">' + review.LADDER.join(" · ") + ' days</span>' +
          '</div>' +
        '</section>';
    }

    var continueHtml = "";
    if (lastConcept) {
      var lastRecord = recordFor(lastConcept.id);
      continueHtml =
        '<section class="continue-card">' +
          '<div>' +
            '<span class="eyebrow">Pick up where you left off</span>' +
            '<h2>' + esc(lastConcept.title) + '</h2>' +
            '<p>' + answeredCount(lastRecord) + ' of 10 exercises answered · ' + esc(scoreLabel(lastRecord)) + '</p>' +
          '</div>' +
          '<div class="button-row">' +
            '<a class="primary" href="#/lesson/' + esc(lastConcept.id) + '">Resume lesson</a>' +
            '<a class="secondary" href="#/dictionary">Browse dictionary</a>' +
          '</div>' +
        '</section>';
    }

    var sections =
      '<section class="area-index-block" aria-labelledby="area-index-heading">' +
        '<div class="section-head">' +
          '<div><h2 id="area-index-heading">Lessons by area</h2><p>Each square is one concept. Open an area to see its full cards, notes, and exercise maps.</p></div>' +
          '<div class="slot-legend" aria-hidden="true">' +
            '<span class="slot-legend-item"><span class="slot is-new"></span>New</span>' +
            '<span class="slot-legend-item"><span class="slot is-started"></span>Started</span>' +
            '<span class="slot-legend-item"><span class="slot is-mastered"></span>Mastered</span>' +
            '<span class="slot-legend-item"><span class="slot is-challenge"></span>Challenge</span>' +
          '</div>' +
        '</div>' +
        '<div class="area-index">' +
          C.areas.map(function (areaItem) {
            var items = concepts.filter(function (item) { return item.area === areaItem.id; });
            return areaTrack(areaItem, items);
          }).join("") +
        '</div>' +
      '</section>';

    return (
      '<section class="hero">' +
        '<div>' +
          '<span class="eyebrow">Bonpala · ' + C.totals.concepts + ' lessons · ' + C.totals.exercises + ' sentences</span>' +
          '<h1>Learn Globasa by <em>writing it</em>.</h1>' +
          '<p class="lead">Ten questions a lesson, every one of them a whole sentence you have to make sense of or produce: pick the reading a passage supports, translate in either direction, or type the word that is missing. Each answer comes back with the reason it holds, so a miss becomes a note instead of a guess.</p>' +
          '<div class="hero-actions">' +
            '<a class="primary" href="#/lesson/' + esc(startConcept.id) + '">' + (answered ? "Continue learning" : "Start learning") + '</a>' +
          '</div>' +
        '</div>' +
        '<aside class="hero-art" aria-label="How a lesson works">' +
          '<h2>Inside a lesson</h2>' +
          '<p>Ten questions in a new order every attempt, each with an explanation.</p>' +
          '<div class="hero-art-list">' +
            '<div class="hero-art-item"><span class="dot"></span><div><strong>Read and decide</strong><span>Five full sentences; one matches what the passage actually says.</span></div></div>' +
            '<div class="hero-art-item"><span class="dot"></span><div><strong>Translate both ways</strong><span>English into Globasa and back, compared with punctuation and spacing set aside.</span></div></div>' +
            '<div class="hero-art-item"><span class="dot"></span><div><strong>Close the gap</strong><span>Type the missing word or particle, with the English line pinning down the meaning.</span></div></div>' +
            '<div class="hero-art-item"><span class="dot"></span><div><strong>Learn from the miss</strong><span>Every answer names the rule that decided it.</span></div></div>' +
            '<div class="hero-art-item"><span class="dot"></span><div><strong>Retry without penalty</strong><span>Questions reshuffle each run; only your best score is kept.</span></div></div>' +
          '</div>' +
        '</aside>' +
      '</section>' +
      '<section class="stats-grid" aria-label="Progress summary">' +
        statCard({ label: "Lessons complete", value: done, total: concepts.length, tone: "lessons", icon: "book" }) +
        statCard({ label: "Exercises answered", value: answered, total: C.totals.exercises, tone: "exercises", icon: "check" }) +
        statCard({ label: "Perfect lessons", value: mastered, total: concepts.length, suffix: "mastered", tone: "perfect", icon: "star" }) +
      '</section>' +
      reviewHtml +
      continueHtml +
      sections
    );
  }

  function lesson(conceptId) {
    navFor("dashboard");
    var item = concept(conceptId);
    if (!item) return notFound("That lesson does not exist.");
    var record = recordFor(item.id);
    var count = answeredCount(record);
    var order = lessonOrder(item);
    var areaItem = area(item.area);
    var challenge = isChallenge(item);
    var actionLabel = count === 0
      ? (challenge ? "Start challenge" : "Start lesson")
      : count >= 10
      ? (challenge ? "Retry challenge" : "Retry lesson")
      : (challenge ? "Continue challenge" : "Continue lesson");

    var notesHeading = item.area === "reading" ? "Reading notes" : "Grammar notes";
    var notes = item.notes.map(function (note) { return "<li>" + prose(note) + "</li>"; }).join("");
    var examples = item.examples.map(function (pair) {
      return '<div class="example"><span class="gl">' + esc(pair[0]) + '</span><span class="en">' + prose(pair[1]) + '</span></div>';
    }).join("");

    var map = order.map(function (id, position) {
      var exercise = item.exercises[authoredIndex(item, id)];
      var status = statusFor(record, exercise.id);
      return (
        '<a class="exercise-item is-' + status + '" href="#/exercise/' + esc(item.id) + '/' + authoredIndex(item, id) + '">' +
          '<span class="num">' + (position + 1) + '</span>' +
          '<span>' + typeLabel(exercise.type) + '</span>' +
        '</a>'
      );
    }).join("");

    var refs = item.refs.map(function (ref) { return '<span class="chip gold">' + esc(ref) + '</span>'; }).join("");
    var reviewChip = window.GlobasaReview.dueLabel(record);
    var sourceNote = item.area === "nuances"
      ? 'This concept is drawn from the author\'s follow-up notes on Globasa, which expand on the <a href="https://xwexi.globasa.net/eng/gramati" target="_blank" rel="noopener noreferrer">Complete Globasa Grammar</a>. Read the rules in the <a href="#/grammar">Grammar summary</a>, or use the <a href="#/reference">Quick reference</a> for the table view.'
      : item.area === "reading"
      ? 'This lesson quotes short excerpts from <em>Thirty Short Stories in Globasa</em>; the published English sentence pairs are the translation keys. Read the notes above, or use the <a href="#/reference">Quick reference</a> for grammar tables.'
      : 'This concept is drawn from the <a href="https://xwexi.globasa.net/eng/gramati" target="_blank" rel="noopener noreferrer">Complete Globasa Grammar</a> and the beginner lessons. Read the rules in the <a href="#/grammar">Grammar summary</a>' + (item.area === "tenses" ? ', open the <a href="#/grammar/tenses">verb-tense lab</a>' : '') + ', or use the <a href="#/reference">Quick reference</a> for the table view.';

    return (
      '<div class="crumbs"><a href="#/">Dashboard</a><span class="sep">/</span><a href="#/area/' + esc(areaItem.id) + '">' + esc(areaItem.title) + '</a><span class="sep">/</span><span>' + esc(item.title) + '</span></div>' +
      '<header class="lesson-header' + (challenge ? " is-challenge" : "") + '">' +
        '<span class="eyebrow">' + esc(areaItem.title) + (challenge ? " · Area challenge" : "") + '</span>' +
        '<h1>' + esc(item.title) + '</h1>' +
        '<p class="lead">' + prose(item.blurb) + '</p>' +
        '<div class="chips" style="margin-top:14px">' +
          '<span class="chip accent">10 exercises</span>' +
          '<span class="chip">' + count + ' of 10 answered</span>' +
          '<span class="chip">' + esc(scoreLabel(record)) + '</span>' +
          '<span class="chip">' + record.runs + ' attempt' + (record.runs === 1 ? "" : "s") + '</span>' +
          (reviewChip ? '<span class="chip">' + esc(reviewChip) + '</span>' : "") +
        '</div>' +
        '<div class="button-row">' +
          '<button class="primary" type="button" data-action="start-lesson" data-concept="' + esc(item.id) + '" aria-keyshortcuts="x">' + actionLabel + '<kbd class="keycap" aria-hidden="true">X</kbd></button>' +
          '<a class="ghost" href="#/" aria-keyshortcuts="Escape">Back to dashboard<kbd class="keycap" aria-hidden="true">Esc</kbd></a>' +
        '</div>' +
      '</header>' +
      '<div class="lesson-grid">' +
        '<div>' +
          '<section class="panel"><h2>' + notesHeading + '</h2><ul class="notes">' + notes + '</ul></section>' +
          '<section class="panel"><h2>Model sentences</h2><div class="examples">' + examples + '</div></section>' +
          '<section class="panel"><h2>Sources</h2><p>' + sourceNote + '</p><div class="chips" style="margin-top:12px">' + refs + '</div></section>' +
        '</div>' +
        '<aside>' +
          '<section class="panel"><h2>Exercise map</h2><div class="exercise-map">' + map + '</div></section>' +
          '<section class="panel"><h2>Scoring</h2><p>Each exercise is worth one point. Your first answer in a run sets that run\'s score; your best run is kept. Retrying never erases a better score.</p><p style="margin-top:8px">A lesson is mastered at 10/10; after that it returns for spaced review at 1, 3, 7, 16, 35 and 75 days, stepping back one rung whenever a review question is missed.</p><p style="margin-top:8px">Questions are reshuffled on every attempt, so the order changes while MCQs stay first, then translations, then fill-ins.</p></section>' +
        '</aside>' +
      '</div>'
    );
  }

  function feedbackHtml(exercise, feedback, response) {
    if (!feedback) return "";
    var title = feedback.correct ? "Correct" : "Not quite";
    var icon = feedback.correct ? "✓" : "×";
    var responseText = Array.isArray(response) ? response.join(" / ") : response;
    /* A wrong translation is shown as a diff so the typo is visible at a glance. */
    var diff = !feedback.correct && exercise.type === "translate" && responseText
      ? window.GlobasaDiff.compare(responseText, feedback.expected)
      : null;
    /* Nothing in common: a wall of red adds nothing, so show plain text instead. */
    if (diff && !diff.yours.some(function (word) { return word.type === "same"; })) diff = null;
    var answerHtml = "";
    if (exercise.type === "fill") {
      answerHtml = "<div class=\"answer\"><span class=\"answer-label\">Correct answer" + (exercise.blanks.length > 1 ? "s" : "") + "</span>" +
        exercise.blanks.map(function (blank, index) { return (index + 1) + ". " + esc(blank.answer); }).join("<br>") + "</div>";
    } else if (diff) {
      answerHtml = '<div class="answer diff"><span class="answer-label">Correct answer</span>' + window.GlobasaDiff.render(diff.correct) + '</div>';
    } else {
      answerHtml = '<div class="answer"><span class="answer-label">Correct answer</span>' + prose(feedback.expected) + '</div>';
    }
    var given = "";
    if (diff) {
      given = '<div class="answer diff is-yours"><span class="answer-label">Your answer</span>' + window.GlobasaDiff.render(diff.yours) + '</div>';
    } else if (!feedback.correct && responseText && exercise.type !== "mcq") {
      given = '<p class="small" style="color:var(--muted)">Your answer: ' + esc(responseText) + '</p>';
    }
    return (
      '<div class="feedback ' + (feedback.correct ? "correct" : "incorrect") + '" role="status" aria-live="polite" id="feedback-panel" tabindex="-1">' +
        '<div class="feedback-title" id="feedback-title">' + icon + " " + title + '</div>' +
        answerHtml +
        given +
        '<p>' + prose(exercise.explanation) + '</p>' +
      '</div>'
    );
  }

  function exercise(conceptId, index, session) {
    navFor("dashboard");
    var item = concept(conceptId, session);
    if (!item) return notFound("That lesson does not exist.");
    var safeIndex = Math.max(0, Math.min(item.exercises.length - 1, index));
    if (!session || session.conceptId !== item.id) {
      session = window.GlobasaEngine.createSession(item, safeIndex);
    }
    /* Dynamic practice swaps text per attempt; the cache keeps render and scoring on the same variant. */
    var current = window.GlobasaEngine.instance(session, item.exercises[safeIndex]);
    var runOrder = sessionOrder(item, session);
    var position = runOrder.indexOf(current.id);
    if (position < 0) position = safeIndex;
    var pct = Math.round(((position + 1) / item.exercises.length) * 100);
    var response = session.response;
    var submitted = Boolean(session.submitted);
    var challenge = isChallenge(item);

    var body = "";
    if (current.type === "mcq") {
      var order = window.GlobasaEngine.optionOrder(session, current);
      var options = order.map(function (optionIndex, displayIndex) {
        var option = current.options[optionIndex];
        var classes = "option";
        var checked = submitted && Number(response) === optionIndex ? " checked" : "";
        if (submitted) {
          if (optionIndex === current.correct) classes += " is-correct";
          else if (Number(response) === optionIndex) classes += " is-wrong";
        }
        return (
          '<label class="' + classes + '" ' + (submitted ? 'aria-disabled="true"' : "") + '>' +
            '<input type="radio" name="option" value="' + optionIndex + '" aria-keyshortcuts="' + (displayIndex + 1) + '"' + checked + (submitted ? " disabled" : "") + '>' +
            '<span class="option-key" aria-hidden="true">' + (displayIndex + 1) + '</span>' +
            '<span class="option-text">' + prose(option) + '</span>' +
          '</label>'
        );
      }).join("");
      body = '<fieldset class="options" ' + (submitted ? "disabled" : "") + '><legend class="sr-only">Choose one answer</legend>' + options + "</fieldset>";
    } else if (current.type === "translate") {
      var direction = current.direction === "en-gl" ? "English → Globasa" : "Globasa → English";
      var value = submitted && typeof response === "string" ? response : "";
      body =
        '<span class="chip accent" style="margin-bottom:10px">' + direction + '</span>' +
        '<div class="translate-box">' +
          '<label class="sr-only" for="translation-input">Your translation</label>' +
          '<textarea id="translation-input" name="translation" placeholder="Type your translation…" ' + (submitted ? "disabled" : "") + '>' + esc(value) + '</textarea>' +
          '<p class="instruction">Case, punctuation and spacing are ignored, as are articles (a / the), contractions (<em>don\'t</em> / <em>do not</em>) and UK/US spelling. The words themselves must match.</p>' +
        '</div>';
    } else {
      var pieces = current.prompt.split("___");
      var inputs = [];
      for (var i = 0; i < pieces.length; i += 1) {
        inputs.push(prose(pieces[i]));
        if (i < pieces.length - 1) {
          var blankValue = submitted && Array.isArray(response) ? response[i] || "" : "";
          var blankClasses = "blank-input";
          if (submitted && session.feedback && session.feedback.details) {
            blankClasses += session.feedback.details[i] ? " is-correct" : " is-wrong";
          }
          inputs.push('<input class="' + blankClasses + '" data-blank="' + i + '" type="text" autocomplete="off" spellcheck="false" aria-label="Blank ' + (i + 1) + '" value="' + esc(blankValue) + '"' + (submitted ? " disabled" : "") + '>');
        }
      }
      var fillHint = current.gloss ?
        "Complete the sentence so that it means the English line above." :
        "Type the missing word or phrase into each blank.";
      body = (current.gloss ? '<div class="fill-gloss"><span class="fill-gloss-label">English</span><span>' + prose(current.gloss) + '</span></div>' : "") +
        '<div class="fill-line">' + inputs.join("") + '</div><p class="instruction">' + fillHint + '</p>';
    }

    var passage = current.passage ? '<div class="passage"><span class="passage-label">Read the passage</span>' + prose(current.passage) + '</div>' : "";
    var backLink = item.review
      ? '<a class="ghost" href="#/">Back to dashboard</a>'
      : '<a class="ghost" href="#/lesson/' + esc(item.id) + '">Back to lesson</a>';
    var actions;
    if (!submitted) {
      var hint = current.type === "translate" ? "Ctrl/⌘ + Enter to check" :
        current.type === "mcq" ? "Press 1–5 to choose · Enter to check" :
        "Enter to check";
      actions = '<div class="actions"><button class="primary" type="submit">Check answer</button>' + backLink + '<span class="key-hint">' + hint + '</span></div>';
    } else {
      var last = !item.exercises.some(function (exercise) {
        return exercise.id !== current.id && (session.results || {})[exercise.id] === undefined;
      });
      var nextHint = last ? "Enter to see results" : "Enter for next";
      actions = '<div class="actions"><button class="primary" type="button" data-action="next-exercise" data-concept="' + esc(item.id) + '">' + (last ? "See results" : "Next exercise") + '</button>' + backLink + '<span class="key-hint">' + nextHint + '</span></div>';
    }

    var crumbs = item.review
      ? '<a href="#/">Dashboard</a><span class="sep">/</span><span>Spaced review</span>'
      : '<a href="#/">Dashboard</a><span class="sep">/</span><a href="#/lesson/' + esc(item.id) + '">' + esc(item.title) + '</a>';
    var meta = 'Exercise ' + (position + 1) + ' of ' + item.exercises.length + ' · ' + typeLabel(current.type) +
      (challenge ? ' · Challenge' : "") +
      (current.reviewSourceTitle ? ' · from ' + esc(current.reviewSourceTitle) : "");

    return (
      '<div class="exercise-wrap' + (challenge ? " is-challenge" : "") + '">' +
        '<div class="exercise-top">' +
          '<div class="crumbs" style="margin:0">' + crumbs + '</div>' +
          '<span class="meta">' + meta + '</span>' +
        '</div>' +
        '<div class="progress" style="margin-bottom:16px"><div class="progress-track"><div class="progress-bar" style="width:' + pct + '%"></div></div></div>' +
        '<form class="exercise-card' + (challenge ? " is-challenge" : "") + '" id="answer-form" novalidate>' +
          '<span class="eyebrow">' + (challenge ? "Challenge · " : "") + esc(typeLabel(current.type)) + '</span>' +
          '<h1>' + prose(current.prompt) + '</h1>' +
          passage +
          '<div class="prompt">' + (current.type === "mcq" ? "Choose the best answer." : current.type === "translate" ? "Write your translation." : "Complete the sentence.") + '</div>' +
          body +
          actions +
          feedbackHtml(current, session.feedback, response) +
        '</form>' +
      '</div>'
    );
  }

  function reviewExpired() {
    navFor("dashboard");
    return (
      '<div class="empty">' +
        '<span class="eyebrow">Spaced review</span>' +
        '<h1 style="margin:8px 0">That review run has ended</h1>' +
        '<p>A review queue lives only for the length of one sitting, so a reload or a new tab starts over. Nothing was lost: your lesson progress and schedule are saved.</p>' +
        '<div class="button-row" style="justify-content:center;margin-top:16px">' +
          '<button class="primary" type="button" data-action="start-review">Start a new review</button>' +
          '<a class="ghost" href="#/">Dashboard</a>' +
        '</div>' +
      '</div>'
    );
  }

  function outcomeLabel(outcome) {
    if (outcome.state === "learning") return "still learning";
    /* A lapse always retries tomorrow, whatever rung it fell back to. */
    if (outcome.state === "lapsed") return "retry tomorrow";
    return "next in " + outcome.interval + " day" + (outcome.interval === 1 ? "" : "s");
  }

  /* Review runs are scored per source lesson, not out of ten. */
  function reviewResults(session, item) {
    /* Lapses first, then what moved forward, then lessons with no schedule yet. */
    var rank = { lapsed: 0, advanced: 1, learning: 2 };
    var outcomes = (session.outcomes || []).slice().sort(function (a, b) {
      return (rank[a.state] == null ? 3 : rank[a.state]) - (rank[b.state] == null ? 3 : rank[b.state]);
    });
    var answered = Object.keys(session.results || {}).length;
    var correct = Object.keys(session.results || {}).filter(function (key) {
      return session.results[key];
    }).length;
    var passed = outcomes.filter(function (outcome) { return outcome.state === "advanced"; }).length;
    var lapsed = outcomes.filter(function (outcome) { return outcome.state === "lapsed"; }).length;
    var percent = answered ? Math.round((correct / answered) * 100) : 0;

    var rows = outcomes.map(function (outcome) {
      var mark = outcome.passed ? "✓" : "×";
      return (
        '<div class="breakdown-row ' + (outcome.passed ? "ok" : "no") + '">' +
          '<span class="mark">' + mark + '</span>' +
          '<span><a href="#/lesson/' + esc(outcome.conceptId) + '">' + esc(outcome.title) + '</a></span>' +
          '<span class="type">' + outcome.correct + "/" + outcome.total + '</span>' +
          '<span class="type">' + esc(outcomeLabel(outcome)) + '</span>' +
        '</div>'
      );
    }).join("");

    var message = !answered ? "No questions were answered." :
      percent === 100 ? "Every question landed. The schedule moved forward for each lesson you touched." :
      percent >= 70 ? "Solid recall. Lessons with a miss step back one rung and will be asked again tomorrow." :
      "Rough patch. Those lessons come back tomorrow, and the questions you missed will lead the next run.";

    return (
      '<div class="results-wrap">' +
        '<div class="crumbs"><a href="#/">Dashboard</a><span class="sep">/</span><span>Review</span><span class="sep">/</span><span>Results</span></div>' +
        '<section class="results-card">' +
          '<span class="eyebrow">Review complete</span>' +
          '<div class="score-ring" style="--score:' + percent + '"><strong>' + correct + "/" + answered + '</strong></div>' +
          '<h1>Spaced review</h1>' +
          '<p class="lead">' + esc(message) + '</p>' +
          '<div class="chips" style="justify-content:center;margin-top:12px">' +
            '<span class="chip accent">' + answered + ' question' + (answered === 1 ? "" : "s") + '</span>' +
            '<span class="chip">' + passed + ' advanced</span>' +
            '<span class="chip">' + lapsed + ' to retry</span>' +
            '<span class="chip">' + outcomes.length + ' lesson' + (outcomes.length === 1 ? "" : "s") + '</span>' +
          '</div>' +
          (rows ? '<div class="breakdown">' + rows + '</div>' : "") +
          '<div class="button-row" style="justify-content:center;margin-top:22px">' +
            '<button class="primary" type="button" data-action="start-review" aria-keyshortcuts="r">Another review<kbd class="keycap" aria-hidden="true">R</kbd></button>' +
            '<a class="ghost" href="#/" aria-keyshortcuts="d">Dashboard<kbd class="keycap" aria-hidden="true">D</kbd></a>' +
          '</div>' +
        '</section>' +
        '<p class="muted" style="text-align:center;margin-top:16px">A lesson advances only when every question asked from it was answered correctly. Lessons with no schedule yet stay in your normal rotation until a full 10/10 lesson run.</p>' +
      '</div>'
    );
  }

  function results(conceptId, session) {
    navFor("dashboard");
    var item = concept(conceptId, session);
    if (!item) return notFound("That lesson does not exist.");
    if (item.review) {
      if (!session || session.kind !== "review" || !Object.keys(session.results || {}).length) return reviewExpired();
      return reviewResults(session, item);
    }
    var record = recordFor(item.id);
    var hasSession = session && session.conceptId === item.id && Object.keys(session.results || {}).length > 0;
    var hasSaved = record.lastScore != null;
    var hasScore = Boolean(hasSession || hasSaved);
    var score = hasSession ? window.GlobasaEngine.score(session, item) : (hasSaved ? record.lastScore : 0);
    var percent = hasScore ? Math.round((score / item.exercises.length) * 100) : 0;
    var challenge = isChallenge(item);
    var mastered = record.bestScore === 10;
    var next = mastered ? nextConcept(item.id) : null;
    var eyebrow = hasScore
      ? (challenge ? (mastered ? "Challenge mastered" : "Challenge complete") : "Lesson complete")
      : (challenge ? "Challenge not attempted" : "No run yet");
    var message = !hasScore ? "This lesson has not been completed yet. Start it when you are ready." :
      percent === 100 ? (challenge ? "Perfect challenge. You cleared the whole area." : "Perfect lesson. This pattern is solid.") :
      percent >= 80 ? "Strong work. Review the misses and lock it in." :
      percent >= 60 ? "Good progress. Another run will sharpen the pattern." :
      "This one needs another pass. Read the notes, then retry.";

    var breakdown = "";
    if (hasSession) {
      var runOrder = sessionOrder(item, session);
      breakdown = '<div class="breakdown">' + runOrder.map(function (id, position) {
        var ex = item.exercises[authoredIndex(item, id)];
        var ok = session.results[ex.id] === true;
        return '<div class="breakdown-row ' + (ok ? "ok" : "no") + '"><span class="mark">' + (ok ? "✓" : "×") + '</span><span>Exercise ' + (position + 1) + '</span><span class="type">' + typeShort(ex.type) + '</span></div>';
      }).join("") + '</div>';
    } else if (hasSaved) {
      breakdown = '<p class="muted" style="margin-top:18px">Reloading the page clears the current run breakdown, but your saved score is shown above.</p>';
    }

    return (
      '<div class="results-wrap">' +
        '<div class="crumbs"><a href="#/">Dashboard</a><span class="sep">/</span><a href="#/lesson/' + esc(item.id) + '">' + esc(item.title) + '</a><span class="sep">/</span><span>Results</span></div>' +
        '<section class="results-card' + (challenge ? " is-challenge" : "") + '">' +
          '<span class="eyebrow">' + esc(eyebrow) + '</span>' +
          '<div class="score-ring" style="--score:' + percent + '"><strong>' + (hasScore ? score + "/10" : "—") + '</strong></div>' +
          '<h1>' + esc(item.title) + '</h1>' +
          '<p class="lead">' + esc(message) + '</p>' +
          '<div class="chips" style="justify-content:center;margin-top:12px">' +
            (hasScore ? '<span class="chip accent">This run: ' + score + '/10</span>' : '<span class="chip">Not attempted</span>') +
            '<span class="chip">Best: ' + esc(bestLabel(record)) + '</span>' +
            '<span class="chip">Attempts: ' + record.runs + '</span>' +
            (window.GlobasaReview.dueLabel(record) ? '<span class="chip accent">' + esc(window.GlobasaReview.dueLabel(record)) + '</span>' : "") +
          '</div>' +
          breakdown +
          '<div class="button-row" style="justify-content:center;margin-top:22px">' +
            (next ? '<a class="primary" href="#/lesson/' + esc(next.id) + '" aria-keyshortcuts="n" title="Next: ' + esc(next.title) + '">Next concept<kbd class="keycap" aria-hidden="true">N</kbd></a>' : "") +
            '<button class="' + (next ? "secondary" : "primary") + '" type="button" data-action="retry-lesson" data-concept="' + esc(item.id) + '" aria-keyshortcuts="r">' + (hasScore ? "Retry lesson" : "Start lesson") + '<kbd class="keycap" aria-hidden="true">R</kbd></button>' +
            '<a class="secondary" href="#/lesson/' + esc(item.id) + '" aria-keyshortcuts="Escape">Review notes<kbd class="keycap" aria-hidden="true">Esc</kbd></a>' +
            '<a class="ghost" href="#/" aria-keyshortcuts="d">Dashboard<kbd class="keycap" aria-hidden="true">D</kbd></a>' +
          '</div>' +
        '</section>' +
      '</div>'
    );
  }

  function inlineFormat(value) {
    return prose(value)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/`([^`]+)`/g, "<code>$1</code>");
  }

  function grammarExamples(examples) {
    if (!examples || !examples.length) return "";
    return '<div class="grammar-examples">' + examples.map(function (pair) {
      return '<div class="grammar-example"><span class="gl">' + esc(pair[0]) + '</span><span class="en">' + prose(pair[1]) + '</span></div>';
    }).join("") + '</div>';
  }

  function grammarTable(table) {
    var head = "<tr>" + table.head.map(function (cell) { return "<th>" + inlineFormat(cell) + "</th>"; }).join("") + "</tr>";
    var rows = table.rows.map(function (row) {
      return "<tr>" + row.map(function (cell) { return "<td>" + inlineFormat(cell) + "</td>"; }).join("") + "</tr>";
    }).join("");
    return (
      '<div class="grammar-table-block">' +
        (table.title ? '<h3>' + inlineFormat(table.title) + '</h3>' : "") +
        '<div class="grammar-table-wrap"><table class="grammar-table"><thead>' + head + '</thead><tbody>' + rows + '</tbody></table></div>' +
        (table.note ? '<p class="grammar-table-note">' + inlineFormat(table.note) + '</p>' : "") +
      '</div>'
    );
  }

  function grammarCoreBlock(G) {
    var core = G.coreRules.map(function (rule, index) {
      return (
        '<article class="grammar-core-card">' +
          '<span class="grammar-core-num">' + String(index + 1).padStart(2, "0") + '</span>' +
          '<h3>' + inlineFormat(rule.title) + '</h3>' +
          '<p>' + inlineFormat(rule.text) + '</p>' +
          grammarExamples(rule.example ? [rule.example] : []) +
        '</article>'
      );
    }).join("");
    return (
      '<section class="grammar-section" id="g-core-rules">' +
        '<div class="grammar-core-grid">' + core + '</div>' +
      '</section>'
    );
  }

  function grammarSectionBlock(section) {
    var rules = (section.rules || []).map(function (rule) {
      return (
        '<article class="grammar-rule">' +
          '<h3>' + inlineFormat(rule.title) + '</h3>' +
          '<p>' + inlineFormat(rule.text) + '</p>' +
          grammarExamples(rule.examples) +
        '</article>'
      );
    }).join("");
    var tables = (section.tables || []).map(grammarTable).join("");
    var notes = section.notes && section.notes.length ?
      '<ul class="grammar-notes">' + section.notes.map(function (note) { return '<li>' + inlineFormat(note) + '</li>'; }).join("") + '</ul>' : "";
    var links = section.links && section.links.length ?
      '<div class="grammar-section-links">' + section.links.map(function (link) {
        return '<a class="secondary" href="' + esc(link.href) + '"' + (link.scroll ? ' data-scroll="' + esc(link.scroll) + '"' : "") + '>' + esc(link.label) + '</a>';
      }).join("") + '</div>' : "";
    return (
      '<section class="grammar-section" id="g-' + esc(section.id) + '">' +
        rules + tables + notes + links +
      '</section>'
    );
  }

  function grammarStudyBlock(G) {
    if (!G.studyPlan) return "";
    var steps = G.studyPlan.steps.map(function (step) {
      var links = (step.concepts || []).map(function (id) {
        var item = concept(id);
        return item ? '<a href="#/lesson/' + esc(id) + '">' + esc(item.title) + '</a>' : "";
      }).join("");
      return '<li><h3>' + inlineFormat(step.title) + '</h3><p>' + inlineFormat(step.text) + '</p><div class="study-links">' + links + '</div></li>';
    }).join("");
    return (
      '<section class="grammar-section" id="g-study-plan">' +
        '<ol class="study-steps">' + steps + '</ol>' +
        '<div class="grammar-backtop"><a href="#/grammar/study" data-scroll="g-chapter-top">Back to top ↑</a></div>' +
      '</section>'
    );
  }

  function grammarChapters(G) {
    var chapters = [{
      id: "core",
      kind: "core",
      title: "Core rules at a glance",
      source: "Ten rules that carry most sentences",
      lead: "If you remember nothing else, remember these. Each one is expanded and practised in the other chapters.",
      href: "#/grammar/core"
    }];
    G.sections.forEach(function (section) {
      chapters.push({
        id: section.id,
        kind: "section",
        title: section.title,
        source: section.source,
        lead: section.lead,
        href: "#/grammar/" + section.id,
        section: section
      });
    });
    var T = window.GLOBASA_TENSES;
    if (T) {
      chapters.push({
        id: "tenses",
        kind: "tenses",
        title: "Verb tenses, without conjugation",
        source: "Standalone study · Grammar pp. 55–58",
        lead: T.subtitle,
        href: "#/grammar/tenses"
      });
    }
    if (G.studyPlan) {
      chapters.push({
        id: "study",
        kind: "study",
        title: G.studyPlan.title,
        source: "How to use this material",
        lead: G.studyPlan.intro,
        href: "#/grammar/study"
      });
    }
    return chapters;
  }

  function grammarChapterTitle(chapterId) {
    var G = window.GLOBASA_GRAMMAR;
    if (!G || !chapterId) return null;
    var chapter = grammarChapters(G).filter(function (item) { return item.id === chapterId; })[0];
    return chapter ? chapter.title : null;
  }

  function grammarIndex(G, chapters) {
    var cards = chapters.map(function (chapter) {
      return (
        '<a class="grammar-chapter-card" href="' + esc(chapter.href) + '">' +
          '<span class="grammar-source">' + esc(chapter.source) + '</span>' +
          '<h2>' + inlineFormat(chapter.title) + '</h2>' +
          '<p>' + inlineFormat(chapter.lead) + '</p>' +
          '<span class="grammar-chapter-cta">Open chapter →</span>' +
        '</a>'
      );
    }).join("");
    return (
      '<div class="grammar-hero" id="g-grammar-top">' +
        '<span class="eyebrow">Standalone study · Complete Globasa Grammar</span>' +
        '<h1>Globasa Grammar <em>in Brief</em></h1>' +
        '<p class="lead">' + esc(G.subtitle) + '</p>' +
        '<p class="grammar-intro">' + inlineFormat(G.intro) + '</p>' +
        '<p class="grammar-credit">Full grammar and language resources: <a href="https://xwexi.globasa.net/eng/gramati" target="_blank" rel="noopener noreferrer">Complete Globasa Grammar</a> · <a href="https://globasa.net" target="_blank" rel="noopener noreferrer">globasa.net</a></p>' +
      '</div>' +
      '<section class="grammar-chapter-index" aria-labelledby="grammar-chapters-heading">' +
        '<div class="section-head"><div><h2 id="grammar-chapters-heading">Chapters</h2><p>' + chapters.length + ' short chapters. Open any of them on its own page; the sidebar keeps the rest one click away.</p></div></div>' +
        '<div class="grammar-index">' + cards + '</div>' +
      '</section>'
    );
  }

  function grammarChapterView(G, chapters, chapter) {
    var tense = chapter.kind === "tenses" ? tenseStudy() : null;
    var content = "";
    if (chapter.kind === "core") content = grammarCoreBlock(G);
    else if (chapter.kind === "section") content = grammarSectionBlock(chapter.section);
    else if (chapter.kind === "tenses" && tense) content = tense.content;
    else if (chapter.kind === "study") content = grammarStudyBlock(G);

    var nav = chapters.map(function (item) {
      var current = item.id === chapter.id;
      return '<a href="' + esc(item.href) + '"' + (current ? ' class="is-active" aria-current="page"' : "") + '>' + inlineFormat(item.title) + '</a>';
    }).join("");
    var localToc = tense ?
      '<h2 class="grammar-toc-sub">On this page</h2><nav>' + tense.toc + '</nav>' : "";
    var index = chapters.indexOf(chapter);
    var previous = chapters[index - 1];
    var next = chapters[index + 1];
    var chapterNav =
      '<nav class="grammar-chapter-nav" aria-label="Chapter navigation">' +
        (previous ? '<a class="secondary" href="' + esc(previous.href) + '">← ' + inlineFormat(previous.title) + '</a>' : '<span></span>') +
        (next ? '<a class="secondary" href="' + esc(next.href) + '">' + inlineFormat(next.title) + ' →</a>' : '<span></span>') +
      '</nav>';

    return (
      '<div class="crumbs"><a href="#/">Dashboard</a><span class="sep">/</span><a href="#/grammar">Grammar</a><span class="sep">/</span><span>' + inlineFormat(chapter.title) + '</span></div>' +
      '<header class="grammar-chapter-head">' +
        '<span class="grammar-source">' + esc(chapter.source) + '</span>' +
        '<h1>' + inlineFormat(chapter.title) + '</h1>' +
        '<p class="lead">' + inlineFormat(chapter.lead) + '</p>' +
        '<div class="button-row"><a class="ghost" href="#/grammar">All chapters</a></div>' +
      '</header>' +
      '<div class="grammar-layout">' +
        '<aside class="grammar-toc"><h2>Chapters</h2><nav>' + nav + '</nav>' + localToc + '</aside>' +
        '<div class="grammar-content" id="g-chapter-top">' + content + chapterNav + '</div>' +
      '</div>'
    );
  }

  function grammar(chapterId) {
    navFor("grammar");
    var G = window.GLOBASA_GRAMMAR;
    if (!G) return notFound("The grammar summary data is missing.");
    var chapters = grammarChapters(G);
    if (!chapterId) return grammarIndex(G, chapters);
    var chapter = chapters.filter(function (item) { return item.id === chapterId; })[0];
    if (!chapter) return notFound("That grammar chapter does not exist.");
    return grammarChapterView(G, chapters, chapter);
  }

  function tenseCard(card) {
    var practiceConcept = concept(card.practice);
    return (
      '<article class="tense-card" id="tense-card-' + esc(card.id) + '">' +
        '<div class="tense-card-top">' +
          '<span class="tense-marker">' + inlineFormat(card.marker) + '</span>' +
          '<h3>' + inlineFormat(card.name) + '</h3>' +
        '</div>' +
        '<p class="tense-formula"><code>' + esc(card.formula) + '</code></p>' +
        '<p class="tense-summary">' + inlineFormat(card.summary) + '</p>' +
        '<p class="tense-detail">' + inlineFormat(card.detail) + '</p>' +
        grammarExamples(card.examples) +
        '<p class="tense-watch"><strong>Watch:</strong> ' + inlineFormat(card.watch) + '</p>' +
        (practiceConcept ? '<a class="tense-practice-link" href="#/lesson/' + esc(card.practice) + '">Practise this pattern →</a>' : "") +
      '</article>'
    );
  }

  /* Tense reference content lives inside the grammar page; #/tenses redirects here. */
  function tenseStudy() {
    var T = window.GLOBASA_TENSES;
    if (!T) return null;

    var toc =
      '<a href="#/grammar/tenses" data-scroll="g-tenses">Overview</a>' +
      '<a href="#/grammar/tenses" data-scroll="tense-overview">How tense works</a>' +
      T.groups.map(function (group) {
        return '<a href="#/grammar/tenses" data-scroll="tense-group-' + esc(group.id) + '">' + inlineFormat(group.title) + '</a>';
      }).join("") +
      '<a href="#/grammar/tenses" data-scroll="tense-order">Tense word order</a>' +
      '<a href="#/grammar/tenses" data-scroll="tense-choosing">Choosing a tense</a>' +
      '<a href="#/grammar/tenses" data-scroll="tense-traps">Tense traps</a>' +
      '<a href="#/grammar/tenses" data-scroll="tense-practice">Tense practice</a>';

    var principles = T.principles.map(function (principle, index) {
      return (
        '<article class="grammar-core-card">' +
          '<span class="grammar-core-num">' + String(index + 1).padStart(2, "0") + '</span>' +
          '<h3>' + inlineFormat(principle.title) + '</h3>' +
          '<p>' + inlineFormat(principle.text) + '</p>' +
        '</article>'
      );
    }).join("");
    var groups = T.groups.map(function (group) {
      return (
        '<section class="grammar-section" id="tense-group-' + esc(group.id) + '">' +
          '<div class="grammar-section-head">' +
            '<div><span class="grammar-source">Tense group</span><h2>' + inlineFormat(group.title) + '</h2></div>' +
            '<a class="grammar-mini-link" href="#/grammar/tenses" data-scroll="g-tenses">Top ↑</a>' +
          '</div>' +
          '<p class="grammar-lead">' + inlineFormat(group.lead) + '</p>' +
          '<div class="tense-grid">' + group.cards.map(tenseCard).join("") + '</div>' +
        '</section>'
      );
    }).join("");
    var practiceCards = T.practice.conceptIds.map(function (id) {
      var item = concept(id);
      if (!item) return "";
      var record = recordFor(id);
      var count = answeredCount(record);
      var pct = Math.round((count / item.exercises.length) * 100);
      var action = count >= item.exercises.length ? "Review lesson" : count ? "Continue lesson" : "Start lesson";
      return (
        '<article class="tense-practice-card">' +
          '<div class="tense-practice-head"><h3>' + esc(item.title) + '</h3><span class="status-pill">' + count + '/' + item.exercises.length + ' answered</span></div>' +
          '<p>' + prose(item.blurb) + '</p>' +
          '<div class="progress" style="margin-top:11px"><div class="progress-track"><div class="progress-bar" style="width:' + pct + '%"></div></div></div>' +
          '<div class="tense-practice-actions">' +
            '<button class="primary" type="button" data-action="start-lesson" data-concept="' + esc(item.id) + '">' + action + '</button>' +
            '<a class="ghost" href="#/lesson/' + esc(item.id) + '">Review notes</a>' +
            '<span class="small muted">Best ' + esc(bestLabel(record)) + '</span>' +
          '</div>' +
        '</article>'
      );
    }).join("");

    var content =
      '<section class="grammar-section" id="g-tenses">' +
        '<p class="grammar-intro">' + inlineFormat(T.intro) + '</p>' +
      '</section>' +
      '<section class="grammar-section" id="tense-overview">' +
        '<div class="grammar-section-head"><div><span class="grammar-source">The short version</span><h2>How tense works</h2></div></div>' +
        '<p class="grammar-lead">Globasa marks tense with particles and prefixes around an unchanging verb. Learn these three principles before memorising the cards below.</p>' +
        '<div class="grammar-core-grid">' + principles + '</div>' +
      '</section>' +
      groups +
      '<section class="grammar-section" id="tense-order">' +
        '<div class="grammar-section-head"><div><span class="grammar-source">Grammar p. 65</span><h2>' + inlineFormat(T.order.title) + '</h2></div><a class="grammar-mini-link" href="#/grammar/tenses" data-scroll="g-tenses">Top ↑</a></div>' +
        '<p class="grammar-lead">' + inlineFormat(T.order.lead) + '</p>' +
        grammarTable({ head: T.order.head, rows: T.order.rows, note: T.order.note }) +
      '</section>' +
      '<section class="grammar-section" id="tense-choosing">' +
        '<div class="grammar-section-head"><div><span class="grammar-source">Decision guide</span><h2>' + inlineFormat(T.choosing.title) + '</h2></div><a class="grammar-mini-link" href="#/grammar/tenses" data-scroll="g-tenses">Top ↑</a></div>' +
        '<p class="grammar-lead">' + inlineFormat(T.choosing.lead) + '</p>' +
        grammarTable({ head: T.choosing.head, rows: T.choosing.rows }) +
      '</section>' +
      '<section class="grammar-section" id="tense-traps">' +
        '<div class="grammar-section-head"><div><span class="grammar-source">Avoid these</span><h2>Tense traps</h2></div><a class="grammar-mini-link" href="#/grammar/tenses" data-scroll="g-tenses">Top ↑</a></div>' +
        '<ul class="grammar-notes">' + T.traps.map(function (trap) { return '<li>' + inlineFormat(trap) + '</li>'; }).join("") + '</ul>' +
      '</section>' +
      '<section class="grammar-section" id="tense-practice">' +
        '<div class="grammar-section-head"><div><span class="grammar-source">Apply the patterns</span><h2>' + inlineFormat(T.practice.title) + '</h2></div><a class="grammar-mini-link" href="#/grammar/tenses" data-scroll="g-tenses">Top ↑</a></div>' +
        '<p class="grammar-lead">' + inlineFormat(T.practice.lead) + '</p>' +
        '<div class="tense-practice-grid">' + practiceCards + '</div>' +
      '</section>';

    return { toc: toc, content: content };
  }

  function dictionary(state) {
    navFor("dictionary");
    var classes = Object.keys(W.classes).sort();
    var categories = Object.keys(W.categories).sort();
    var classOptions = '<option value="all">All word classes</option>' + classes.map(function (item) {
      return '<option value="' + esc(item) + '"' + (state.dict.classFilter === item ? " selected" : "") + '>' + esc(item) + '</option>';
    }).join("");
    var categoryOptions = '<option value="all">All categories</option>' + categories.map(function (item) {
      return '<option value="' + esc(item) + '"' + (state.dict.categoryFilter === item ? " selected" : "") + '>' + esc(item) + '</option>';
    }).join("");

    return (
      '<div class="crumbs"><a href="#/">Dashboard</a><span class="sep">/</span><span>Dictionary</span></div>' +
      '<span class="eyebrow">Official word list</span>' +
      '<h1 style="font-size:clamp(32px,4vw,46px);margin:8px 0 8px">Dictionary</h1>' +
      '<p class="reference-intro">All ' + W.count.toLocaleString() + ' entries from the official <a href="https://github.com/Globasa-Team/cdn-files/blob/main/api2/word-list.csv" target="_blank" rel="noopener noreferrer"><code>word-list.csv</code></a>, with Globasa word class, English gloss, and source category. Search in English or Globasa.</p>' +
      '<div class="dictionary-toolbar">' +
        '<label class="sr-only" for="dict-search">Search dictionary</label>' +
        '<input class="search-input" id="dict-search" type="search" placeholder="Search word, gloss, or class…" value="' + esc(state.dict.query) + '" autocomplete="off">' +
        '<label class="sr-only" for="dict-class">Word class</label>' +
        '<select class="select" id="dict-class">' + classOptions + '</select>' +
        '<label class="sr-only" for="dict-category">Category</label>' +
        '<select class="select" id="dict-category">' + categoryOptions + '</select>' +
      '</div>' +
      '<div id="dict-results">' + dictionaryResults(state) + '</div>'
    );
  }

  function dictionaryResults(state) {
    var q = state.dict.query.trim().toLowerCase();
    var filtered = W.entries.filter(function (entry) {
      if (state.dict.classFilter !== "all" && entry[1] !== state.dict.classFilter) return false;
      if (state.dict.categoryFilter !== "all" && entry[3] !== state.dict.categoryFilter) return false;
      if (!q) return true;
      return entry[0].toLowerCase().indexOf(q) !== -1 || entry[2].toLowerCase().indexOf(q) !== -1 || entry[1].toLowerCase().indexOf(q) !== -1;
    });
    var shown = filtered.slice(0, state.dict.limit);
    var rows = shown.map(function (entry) {
      return '<tr><td><span class="dict-word">' + esc(entry[0]) + '</span></td><td><span class="dict-class">' + esc(entry[1]) + '</span></td><td><span class="dict-gloss">' + gloss(entry[2]) + '</span></td><td class="hide-mobile"><span class="dict-cat">' + esc(entry[3]) + '</span></td></tr>';
    }).join("");
    var more = filtered.length > state.dict.limit ?
      '<button class="secondary" type="button" data-action="dict-more">Show more</button>' :
      '<span></span>';
    return (
      '<p class="dictionary-meta">' + filtered.length.toLocaleString() + ' matching entries · showing ' + shown.length.toLocaleString() + '</p>' +
      '<div class="table-wrap">' +
        '<table class="dict-table"><thead><tr><th>Word</th><th>Class</th><th>English</th><th class="hide-mobile">Category</th></tr></thead><tbody>' +
        (rows || '<tr><td colspan="4"><div class="empty"><h2>No matches</h2><p>Try a shorter search or clear a filter.</p></div></td></tr>') +
        '</tbody></table>' +
      '</div>' +
      '<div class="pagination"><span>Showing ' + shown.length.toLocaleString() + ' of ' + filtered.length.toLocaleString() + '</span>' + more + '</div>'
    );
  }

  var WIDGET_LIMIT = 30;

  function glossHasWord(gloss, query) {
    return gloss.split(/[^a-z0-9]+/).indexOf(query) !== -1;
  }

  function widgetRank(entry, query) {
    var word = entry[0].toLowerCase();
    var gloss = entry[2].toLowerCase();
    if (word === query) return 0;
    if (word.indexOf(query) === 0) return 1;
    if (gloss === query) return 2;
    if (glossHasWord(gloss, query)) return 3;
    if (word.indexOf(query) !== -1) return 4;
    if (gloss.indexOf(query) !== -1) return 5;
    return 6;
  }

  /* Apple keyboards spell this shortcut with ⌘; Windows and Linux use Ctrl. Unknown platforms keep ⌘. */
  function shortcutLabel() {
    var platform = (navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || "";
    var agent = navigator.userAgent || "";
    if (/iphone|ipad|ipod|mac/i.test(platform)) return "Ctrl + \u2318 + /";
    if (/iphone|ipad|ipod/i.test(agent)) return "Ctrl + \u2318 + /";
    if (/^win|windows|linux|cros/i.test(platform)) return "Ctrl + /";
    if (/windows|android|x11|linux|cros/i.test(agent)) return "Ctrl + /";
    return "Ctrl + \u2318 + /";
  }

  function dictionaryWidget(query) {
    var q = String(query || "").trim().toLowerCase();
    if (!q) {
      return '<p class="dw-empty"><strong>Look up a word</strong> while you answer. Search in Globasa or English; results show the word, its class, and its gloss. Press <kbd>' + shortcutLabel() + '</kbd> to reopen this panel, and <kbd>Esc</kbd> to close it.</p>';
    }
    var matches = W.entries.filter(function (entry) {
      return entry[0].toLowerCase().indexOf(q) !== -1 ||
        entry[2].toLowerCase().indexOf(q) !== -1 ||
        entry[1].toLowerCase().indexOf(q) !== -1;
    });
    if (!matches.length) {
      return '<p class="dw-empty"><strong>No matches.</strong> Try a shorter search or a different spelling.</p>';
    }
    matches.sort(function (a, b) {
      var diff = widgetRank(a, q) - widgetRank(b, q);
      return diff !== 0 ? diff : a[0].localeCompare(b[0]);
    });
    var shown = matches.slice(0, WIDGET_LIMIT);
    var rows = shown.map(function (entry) {
      return (
        '<li class="dw-row">' +
          '<span class="dw-top"><span class="dw-word">' + esc(entry[0]) + '</span><span class="dw-class">' + esc(entry[1]) + '</span></span>' +
          '<span class="dw-gloss">' + gloss(entry[2]) + '</span>' +
        '</li>'
      );
    }).join("");
    var count = matches.length > shown.length ?
      '<p class="dw-count">Showing ' + shown.length + ' of ' + matches.length.toLocaleString() + ' matches — keep typing to narrow.</p>' :
      '<p class="dw-count">' + matches.length.toLocaleString() + ' match' + (matches.length === 1 ? "" : "es") + '</p>';
    return count + '<ul class="dw-list">' + rows + '</ul>';
  }

  var corrColumns = [
    { key: "ke", label: "ke- (which)" },
    { key: "hin", label: "hin- (this)" },
    { key: "den", label: "den- (that)" },
    { key: "ban", label: "ban- (some)" },
    { key: "moy", label: "moy- (every)" },
    { key: "nil", label: "nil- (no)" },
    { key: "alo", label: "alo- (other)" },
    { key: "sama", label: "sama- (same)" }
  ];

  var corrRows = [
    ["Any noun (determiner)", ["ke|which", "hin|this", "den|that", "ban|some", "moy|every", "nil|no", "alo|another", "sama|same"]],
    ["Thing (-to)", ["keto|what", "hinto|this thing", "dento|that thing", "banto|something", "moyto|everything", "nilto|nothing", "aloto|something else", "samato|the same thing"]],
    ["Plural thing (-oto)", ["keoto|what things", "hinoto|these things", "denoto|those things", "banoto|some things", "moyoto|all things", "niloto|none of them", "alooto|other things", "samaoto|the same things"]],
    ["Animate being (-te)", ["kete|who", "hinte|this one", "dente|that one", "bante|somebody", "moyte|everybody", "nilte|nobody", "alote|somebody else", "samate|the same one"]],
    ["Plural animate (-ete)", ["keete|who (pl.)", "hinete|these ones", "denete|those ones", "banete|some of them", "moyete|they all", "nilete|none of them", "aloete|others", "samaete|the same ones"]],
    ["Possession (-su)", ["kesu|whose", "hinsu|this one's", "densu|that one's", "bansu|somebody's", "moysu|everybody's", "nilsu|nobody's", "alosu|somebody else's", "samasu|the same person's"]],
    ["Kind / way (-pul)", ["kepul|what kind; how", "hinpul|this kind; like this", "denpul|that kind; like that", "banpul|some kind", "moypul|every kind", "nilpul|no kind", "alopul|a different kind", "samapul|the same kind"]],
    ["Degree (-mo)", ["kemo|how; to what degree", "hinmo|to this degree", "denmo|to that degree; as", "banmo|somewhat", "moymo|to every degree", "nilmo|to no degree", "alomo|to a different degree", "samamo|to the same degree"]],
    ["Quantity (-kwanti)", ["kekwanti|how much", "hinkwanti|this much", "denkwanti|that much", "bankwanti|some amount", "moykwanti|the entire amount", "nilkwanti|no amount", "alokwanti|a different amount", "samakwanti|the same amount"]],
    ["Number (-numer)", ["kenumer|how many", "hinnumer|this many", "dennumer|that many", "bannumer|some number", "moynumer|all of them", "nilnumer|none of them", "alonumer|a different number", "samanumer|the same number"]],
    ["Location (-loka)", ["keloka|where", "hinloka|here", "denloka|there", "banloka|somewhere", "moyloka|everywhere", "nilloka|nowhere", "aloloka|elsewhere", "samaloka|in the same place"]],
    ["Time (-watu)", ["kewatu|when", "hinwatu|now", "denwatu|then", "banwatu|sometime", "moywatu|always", "nilwatu|never", "alowatu|at other times", "samawatu|at the same time"]],
    ["Reason (-seba)", ["keseba|why", "hinseba|for this reason", "denseba|for that reason", "banseba|for some reason", "moyseba|for every reason", "nilseba|for no reason", "aloseba|for another reason", "samaseba|for the same reason"]],
    ["Manner (-maner)", ["kemaner|how (by what manner)", "hinmaner|like this", "denmaner|like that", "banmaner|somehow", "moymaner|by every manner", "nilmaner|by no manner", "alomaner|by another manner", "samamaner|by the same manner"]]
  ];

  function reference() {
    navFor("reference");
    var head = "<tr><th>Row / suffix</th>" + corrColumns.map(function (col) { return "<th>" + esc(col.label) + "</th>"; }).join("") + "</tr>";
    var body = corrRows.map(function (row) {
      var cells = row[1].map(function (cell) {
        var split = cell.split("|");
        return '<td><span class="gl">' + esc(split[0]) + '</span><span class="en">' + prose(split[1]) + '</span></td>';
      }).join("");
      return "<tr><td>" + esc(row[0]) + "</td>" + cells + "</tr>";
    }).join("");

    var classes = [
      ["b", "noun/verb — the same form can name a thing or an action"],
      ["b.oj", "transitive verb — takes a direct object"],
      ["b.nenoj", "intransitive verb — no direct object"],
      ["b.oro", "patientive ambitransitive — transitive or intransitive"],
      ["b.lin", "copula — links a subject to a complement"],
      ["b.sah", "auxiliary — abil, ingay, musi"],
      ["t", "adjective/adverb"],
      ["m", "adverb"],
      ["pn", "pronoun"],
      ["d", "determiner — ke, hin, den, ban, moy, nil, alo, sama"],
      ["p", "adposition / preposition"],
      ["l", "conjunction"],
      ["num", "numeral"],
      ["par", "particle — le, xa, na, am, no"]
    ].map(function (row) {
      return '<div class="class-row"><span class="class-code">' + esc(row[0]) + '</span><span>' + prose(row[1]) + '</span></div>';
    }).join("");

    return (
      '<div class="crumbs"><a href="#/">Dashboard</a><span class="sep">/</span><span>Quick reference</span></div>' +
      '<span class="eyebrow">Tables &amp; patterns</span>' +
      '<h1 style="font-size:clamp(32px,4vw,46px);margin:8px 0 8px">Quick reference</h1>' +
      '<p class="reference-intro">The full correlative table, the word-class shorthand used by the dictionary, and the sentence patterns this curriculum drills. For the rules behind the tables, read the <a href="#/grammar">Grammar summary</a>.</p>' +
      '<h2 style="font-size:25px;margin:22px 0 10px">Table of correlatives</h2>' +
      '<div class="corr-wrap"><table class="corr-table"><thead>' + head + '</thead><tbody>' + body + '</tbody></table></div>' +
      '<div class="reference-grid">' +
        '<section class="panel"><h2>Word classes</h2><div class="class-list">' + classes + '</div></section>' +
        '<section class="panel"><h2>Relative clause patterns</h2>' +
          '<div class="examples">' +
            '<div class="example"><span class="gl">femixu hu da lubi mi</span><span class="en">the woman who loves me (subject gap → da)</span></div>' +
            '<div class="example"><span class="gl">femixu hu mi lubi da</span><span class="en">the woman whom I love (object gap → da)</span></div>' +
            '<div class="example"><span class="gl">manixu hu dasu sodar kone mi</span><span class="en">the man whose brother knows me (possessor → dasu)</span></div>' +
            '<div class="example"><span class="gl">kitabudom hu mi ergo denloka</span><span class="en">the library where I work (place → denloka)</span></div>' +
            '<div class="example"><span class="gl">restoran feki imi le yam</span><span class="en">the restaurant where we ate (short feki clause)</span></div>' +
          '</div>' +
        '</section>' +
        '<section class="panel"><h2>Rigid syntax checklist</h2><ul class="notes">' +
          '<li>Subject + Verb + Object, with the object immediately after the verb.</li>' +
          '<li>Adjectives precede nouns; complex adjective phrases follow them.</li>' +
          '<li>Use sen before any non-verbal predicate: noun, adjective, prepositional phrase, or clause.</li>' +
          '<li>Determiners (ke, hin, den, ban, moy, nil, alo, sama) always need a following noun.</li>' +
          '<li>Relative clauses keep normal order and use resumptive da, dasu, or a correlative adverb.</li>' +
        '</ul></section>' +
      '</div>'
    );
  }

  function settings() {
    navFor("settings");
    var dynamicOn = window.GlobasaStorage.getDynamic();
    return (
      '<div class="crumbs"><a href="#/">Dashboard</a><span class="sep">/</span><span>Settings</span></div>' +
      '<header class="lesson-header">' +
        '<span class="eyebrow">Account & practice</span>' +
        '<h1>Settings</h1>' +
        '<p class="lead">Adjust how practise works and manage the progress saved for this account.</p>' +
      '</header>' +
      '<div class="settings-grid">' +
        '<section class="panel">' +
          '<h2>Practice</h2>' +
          '<p>Change how exercises adapt on each attempt.</p>' +
          '<div class="setting-row">' +
            '<label class="switch" for="dynamic-toggle">' +
              '<input type="checkbox" id="dynamic-toggle"' + (dynamicOn ? " checked" : "") + '>' +
              '<span class="switch-track" aria-hidden="true"><span class="switch-thumb"></span></span>' +
              '<span class="switch-text"><strong>Dynamic questions</strong><span>Swap numbers, subjects and forms on every attempt. Takes effect from your next run.</span></span>' +
            '</label>' +
          '</div>' +
        '</section>' +
        '<section class="panel">' +
          '<h2>Progress</h2>' +
          '<p>Your answers and best scores are stored in this browser with <code>localStorage</code> and synced to your account. Resetting clears every lesson score, completed exercise, and the last-opened lesson.</p>' +
          '<div class="settings-actions">' +
            '<button class="secondary" type="button" data-action="reset-progress">Reset all progress</button>' +
          '</div>' +
        '</section>' +
        '<section class="panel">' +
          '<h2>Account</h2>' +
          '<p>Signed in with cloud sync enabled. Signing out stops syncing on this device; your progress stays saved locally.</p>' +
          '<div class="settings-actions">' +
            '<button class="secondary" type="button" data-action="sign-out">Sign out</button>' +
          '</div>' +
        '</section>' +
      '</div>'
    );
  }

  function authErrorMessage(code, fallback) {
    if (code === "auth/invalid-credential" || code === "auth/wrong-password" || code === "auth/user-not-found") {
      return "Invalid email or password.";
    }
    if (code === "auth/too-many-requests") {
      return "Too many failed attempts. Please wait and try again.";
    }
    if (code === "auth/network-request-failed") {
      return "Network error. Check your connection and try again.";
    }
    return fallback || "Sign-in failed. Please try again.";
  }

  function login(options) {
    navFor("");
    var opts = options || {};
    var error = opts.errorMsg ? authErrorMessage(opts.errorCode, opts.errorMsg) : "";
    var isLoading = Boolean(opts.isLoading);
    var configMissing = Boolean(opts.configMissing);
    var submitLabel = isLoading ? "Signing in..." : "Sign in";
    var disabled = isLoading || configMissing;
    var inputDisabled = isLoading;

    return (
      '<section class="login-screen">' +
        '<div class="login-card">' +
          '<span class="eyebrow">Private access</span>' +
          '<h1>Sign in to Bonpala</h1>' +
          (configMissing ? '<div class="login-error" role="alert">Firebase is not configured yet. Add your project values in <code>js/firebase-config.js</code>.</div>' : "") +
          (error ? '<div class="login-error" role="alert">' + esc(error) + '</div>' : "") +
          '<form class="login-form" id="login-form" novalidate>' +
            '<label for="login-email">Email</label>' +
            '<input type="email" id="login-email" name="email" autocomplete="username" required' + (inputDisabled ? " disabled" : "") + '>' +
            '<label for="login-password">Password</label>' +
            '<input type="password" id="login-password" name="password" autocomplete="current-password" required' + (inputDisabled ? " disabled" : "") + '>' +
            '<button class="primary" id="login-submit-btn" type="submit"' + (disabled ? " disabled" : "") + '>' + submitLabel + "</button>" +
          "</form>" +
        "</div>" +
      "</section>"
    );
  }

  function notFound(message) {
    navFor("");
    return '<div class="empty"><span class="eyebrow">404</span><h1 style="margin:8px 0">Page not found</h1><p>' + esc(message || "Check the address or return to the dashboard.") + '</p><div class="button-row" style="justify-content:center;margin-top:16px"><a class="primary" href="#/">Back to dashboard</a></div></div>';
  }

  window.GlobasaViews = {
    esc: esc,
    dashboard: dashboard,
    areaPage: areaPage,
    nextConcept: nextConcept,
    isChallenge: isChallenge,
    lesson: lesson,
    exercise: exercise,
    results: results,
    grammar: grammar,
    grammarChapterTitle: grammarChapterTitle,
    dictionary: dictionary,
    dictionaryResults: dictionaryResults,
    reference: reference,
    settings: settings,
    reviewExpired: reviewExpired,
    notFound: notFound,
    recordFor: recordFor,
    answeredCount: answeredCount,
    typeLabel: typeLabel,
    lessonOrder: lessonOrder,
    sessionOrder: sessionOrder,
    dictionaryWidget: dictionaryWidget,
    shortcutLabel: shortcutLabel,
    login: login
  };
})();
