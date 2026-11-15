#!/usr/bin/env node
/* Focused tests for the spaced-repetition scheduler (js/review.js). */

import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DAY = 24 * 60 * 60 * 1000;
const NOW = Date.parse("2026-06-15T12:00:00.000Z");

/* Minimal in-memory stand-in for GlobasaStorage, recording every write. */
function makeStorage(seed) {
  const concepts = seed || {};
  const writes = [];
  return {
    concepts,
    writes,
    getConcept(id) {
      return concepts[id] || null;
    },
    setReview(id, review) {
      concepts[id] = Object.assign({ answers: {}, bestScore: null, runs: 0 }, concepts[id], { review });
      writes.push({ id, review });
      return review;
    }
  };
}

function load(storage) {
  const sandbox = { window: { GlobasaStorage: storage } };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(root, "js/review.js"), "utf8"), sandbox);
  return sandbox.window.GlobasaReview;
}

/* Records keyed by exercise number, all answered correctly at a given time. */
function answers(count, at) {
  const out = {};
  for (let i = 1; i <= count; i += 1) out[String(i)] = { correct: true, attempts: 1, updatedAt: at };
  return out;
}

/* Build a lesson with n exercises (no dynamic blocks needed by the scheduler). */
function lesson(id, count) {
  const exercises = [];
  for (let i = 0; i < count; i += 1) exercises.push({ id: `${id}-${i + 1}`, type: "mcq" });
  return { id, title: id, exercises };
}

const failures = [];
function check(label, actual, expected) {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a !== e) failures.push(`${label}: got ${a}, expected ${e}`);
}

/* --- ladder ------------------------------------------------------------- */

const R = load(makeStorage());
check("fresh rung", R.fresh(NOW).intervalIndex, 0);
check("fresh due is one day out", R.fresh(NOW).due, new Date(NOW + DAY).toISOString());

const firstPass = R.update(R.fresh(NOW), true, NOW);
check("pass moves up one rung", firstPass.intervalIndex, 1);
check("pass schedules the next rung", firstPass.due, new Date(NOW + 3 * DAY).toISOString());
check("pass does not count a lapse", firstPass.lapses, 0);

const firstMiss = R.update(R.fresh(NOW), false, NOW);
check("miss at the first rung stays on it", firstMiss.intervalIndex, 0);
check("miss retries tomorrow", firstMiss.due, new Date(NOW + DAY).toISOString());
check("miss counts a lapse", firstMiss.lapses, 1);

const deep = { intervalIndex: 3, due: new Date(NOW).toISOString(), lapses: 1, reps: 4 };
const stepBack = R.update(deep, false, NOW);
check("miss steps back exactly one rung", stepBack.intervalIndex, 2);
check("stepped-back review retries tomorrow", stepBack.due, new Date(NOW + DAY).toISOString());
check("lapses accumulate", stepBack.lapses, 2);

const top = { intervalIndex: 5, due: new Date(NOW).toISOString(), lapses: 0, reps: 9 };
check("the ladder caps at its last rung", R.update(top, true, NOW).intervalIndex, 5);
check("top rung is 75 days", R.update(top, true, NOW).due, new Date(NOW + 75 * DAY).toISOString());

/* --- status ------------------------------------------------------------- */

check("untouched lesson is new", R.status(null, NOW).state, "new");
check("started but unmastered", R.status({ answers: { a: {} }, bestScore: 6 }, NOW).state, "learning");
check("mastered without a schedule is due", R.status({ answers: { a: {} }, bestScore: 10 }, NOW).state, "due");
check(
  "a future schedule is not due",
  R.status({ answers: { a: {} }, bestScore: 10, review: { intervalIndex: 2, due: new Date(NOW + 5 * DAY).toISOString() } }, NOW).state,
  "scheduled"
);
check(
  "a past schedule is due",
  R.status({ answers: { a: {} }, bestScore: 10, review: { intervalIndex: 2, due: new Date(NOW - DAY).toISOString() } }, NOW).state,
  "due"
);
check(
  "due label counts days",
  R.dueLabel({ answers: { a: {} }, bestScore: 10, review: { intervalIndex: 2, due: new Date(NOW + 5 * DAY).toISOString() } }, NOW),
  "review in 5 days"
);
check(
  "overdue label",
  R.dueLabel({ answers: { a: {} }, bestScore: 10, review: { intervalIndex: 2, due: new Date(NOW - DAY).toISOString() } }, NOW),
  "review due"
);
check("unmastered lessons carry no review label", R.dueLabel({ answers: { a: {} }, bestScore: 4 }, NOW), null);

/* --- mastery initialisation -------------------------------------------- */

{
  const storage = makeStorage();
  const review = load(storage);
  check("9/10 does not schedule anything", review.onLessonFinished("a", 9, 10, NOW), null);
  check("nothing was written", storage.writes.length, 0);

  const scheduled = review.onLessonFinished("a", 10, 10, NOW);
  check("10/10 schedules the first rung", scheduled.intervalIndex, 0);
  check("10/10 is due tomorrow", scheduled.due, new Date(NOW + DAY).toISOString());

  storage.concepts.a.review = { intervalIndex: 4, due: new Date(NOW + 30 * DAY).toISOString() };
  review.onLessonFinished("a", 10, 10, NOW);
  check("a later 10/10 keeps the existing schedule", storage.concepts.a.review.intervalIndex, 4);
}

/* --- queue composition -------------------------------------------------- */

{
  const lessons = [lesson("weak", 10), lesson("mid", 10), lesson("strong", 10), lesson("m1", 10), lesson("m2", 10), lesson("later", 10)];
  const seen = new Date(NOW - 3 * DAY).toISOString();
  const storage = makeStorage({
    weak: { answers: answers(3, seen), bestScore: 3, lastRunAt: new Date(NOW - 10 * DAY).toISOString() },
    mid: { answers: answers(6, seen), bestScore: 6, lastRunAt: new Date(NOW - 5 * DAY).toISOString() },
    strong: { answers: answers(9, seen), bestScore: 9, lastRunAt: new Date(NOW - 2 * DAY).toISOString() },
    m1: { answers: answers(10, seen), bestScore: 10, review: { intervalIndex: 1, due: new Date(NOW - 3 * DAY).toISOString() } },
    m2: { answers: answers(10, seen), bestScore: 10, review: { intervalIndex: 2, due: new Date(NOW - DAY).toISOString() } },
    later: { answers: answers(10, seen), bestScore: 10, review: { intervalIndex: 3, due: new Date(NOW + 9 * DAY).toISOString() } }
  });
  const review = load(storage);

  const plan = review.overview(lessons, NOW);
  check("overview counts learning lessons", plan.learning, 3);
  check("overview counts due mastered lessons", plan.due, 2);
  check("overview counts scheduled lessons", plan.scheduled, 1);
  check("overview counts everything started", plan.started, 6);
  check("next scheduled lesson is reported", plan.nextTitle, "later");

  const queue = review.buildQueue(lessons, NOW);
  check("a full run asks 20 questions", queue.length, 20);

  const counts = {};
  queue.forEach((item) => {
    counts[item.conceptId] = (counts[item.conceptId] || 0) + 1;
  });
  const learningTotal = (counts.weak || 0) + (counts.mid || 0) + (counts.strong || 0);
  const masteredTotal = (counts.m1 || 0) + (counts.m2 || 0) + (counts.later || 0);
  check("learning lessons supply 12 questions", learningTotal, 12);
  check("mastered lessons supply 8 questions", masteredTotal, 8);
  check("a not-yet-due lesson is only used as a top-up", counts.later || 0, 0);
  check("the weakest lesson is asked", (counts.weak || 0) > 0, true);
  check("every due mastered lesson is asked", (counts.m1 || 0) > 0 && (counts.m2 || 0) > 0, true);

  const ids = queue.map((item) => item.exercise.id);
  check("questions are not repeated", new Set(ids).size, ids.length);

  const concept = review.buildConcept(queue);
  check("the synthetic lesson holds the queue", concept.exercises.length, 20);
  check("every question remembers its lesson", concept.exercises.every((ex) => Boolean(ex.reviewSource)), true);
  check("the synthetic lesson is flagged as review", concept.review, true);

  /* Order should vary between runs; 20 questions over 5 lessons gives room. */
  const again = review.buildQueue(lessons, NOW).map((item) => item.exercise.id).join("|");
  if (again === ids.join("|")) failures.push("two consecutive queues were identical");
}

/* --- weakest lessons get more questions -------------------------------- */

{
  const lessons = ["w1", "w2", "w3", "w4", "w5"].map((id) => lesson(id, 10));
  const seen = new Date(NOW - 2 * DAY).toISOString();
  const storage = makeStorage({
    w1: { answers: answers(3, seen), bestScore: 3, lastRunAt: seen },
    w2: { answers: answers(4, seen), bestScore: 4, lastRunAt: seen },
    w3: { answers: answers(6, seen), bestScore: 6, lastRunAt: seen },
    w4: { answers: answers(8, seen), bestScore: 8, lastRunAt: seen },
    w5: { answers: answers(9, seen), bestScore: 9, lastRunAt: seen }
  });
  const review = load(storage);
  const counts = {};
  review.buildQueue(lessons, NOW).forEach((item) => {
    counts[item.conceptId] = (counts[item.conceptId] || 0) + 1;
  });
  check("the weakest lesson is asked most", counts.w1, 3);
  check("the second weakest is asked as often", counts.w2, 3);
  check("the strongest learning lesson is asked least", counts.w5, 2);
}

/* --- a single started lesson still fills a run ------------------------- */

{
  const lessons = [lesson("only", 10), lesson("m1", 10)];
  const seen = new Date(NOW - DAY).toISOString();
  const storage = makeStorage({
    only: { answers: answers(5, seen), bestScore: 5, lastRunAt: new Date(NOW).toISOString() },
    m1: { answers: answers(10, seen), bestScore: 10, review: { intervalIndex: 0, due: new Date(NOW).toISOString() } }
  });
  const review = load(storage);
  const queue = review.buildQueue(lessons, NOW);
  check("one lesson cannot be asked more often than it has questions", queue.filter((q) => q.conceptId === "only").length, 10);
  check("the mastered lesson fills the rest", queue.filter((q) => q.conceptId === "m1").length, 10);
  check("the run is still 20 questions", queue.length, 20);
}

/* --- nothing started ---------------------------------------------------- */

{
  const review = load(makeStorage());
  check("an empty history builds no queue", review.buildQueue([lesson("a", 10)], NOW).length, 0);
  check("an empty history reports nothing started", review.overview([lesson("a", 10)], NOW).started, 0);
}

/* --- weak questions lead ------------------------------------------------ */

{
  const lessons = [lesson("mixed", 10)];
  const answers = {};
  answers["mixed-1"] = { correct: false, attempts: 3, updatedAt: new Date(NOW - 2 * DAY).toISOString() };
  for (let i = 2; i <= 10; i += 1) {
    answers[`mixed-${i}`] = { correct: true, attempts: 1, updatedAt: new Date(NOW - 2 * DAY).toISOString() };
  }
  const record = { answers, bestScore: 7, lastRunAt: new Date(NOW).toISOString() };
  const review = load(makeStorage({ mixed: record }));
  const ranked = review.rankExercises(lessons[0], record, NOW).map((exercise) => exercise.id);
  check("the missed question ranks first", ranked[0], "mixed-1");
  check("everything else follows", ranked.slice(1).sort(), ["mixed-10", "mixed-2", "mixed-3", "mixed-4", "mixed-5", "mixed-6", "mixed-7", "mixed-8", "mixed-9"]);
  const queue = review.buildQueue(lessons, NOW);
  check("the missed question is always asked", queue.some((item) => item.exercise.id === "mixed-1"), true);
}

/* --- outcomes ----------------------------------------------------------- */

{
  const lessons = [lesson("good", 10), lesson("bad", 10)];
  const storage = makeStorage({
    good: { answers: answers(10, new Date(NOW - DAY).toISOString()), bestScore: 10, review: { intervalIndex: 2, due: new Date(NOW - DAY).toISOString(), lapses: 0 } },
    bad: { answers: answers(10, new Date(NOW - DAY).toISOString()), bestScore: 10, review: { intervalIndex: 2, due: new Date(NOW - DAY).toISOString(), lapses: 0 } }
  });
  const review = load(storage);
  const exercises = [
    { id: "good-1", reviewSource: "good", reviewSourceTitle: "good" },
    { id: "good-2", reviewSource: "good", reviewSourceTitle: "good" },
    { id: "bad-1", reviewSource: "bad", reviewSourceTitle: "bad" },
    { id: "bad-2", reviewSource: "bad", reviewSourceTitle: "bad" }
  ];
  const session = { results: { "good-1": true, "good-2": true, "bad-1": true, "bad-2": false } };
  const outcomes = review.applyResults(session, exercises, NOW);

  check("one outcome per lesson", outcomes.length, 2);
  const good = outcomes.find((o) => o.conceptId === "good");
  const bad = outcomes.find((o) => o.conceptId === "bad");
  check("a clean lesson advances", good.state, "advanced");
  check("advanced rung is reported in days", good.interval, 16);
  check("one miss lapses the lesson", bad.state, "lapsed");
  check("a lapse steps back one rung", storage.concepts.bad.review.intervalIndex, 1);
  check("a lapse retries tomorrow", storage.concepts.bad.review.due, new Date(NOW + DAY).toISOString());
  check("the review time is recorded", storage.concepts.good.review.lastReviewedAt, new Date(NOW).toISOString());
}

/* --- a mastered lesson with no schedule is adopted ---------------------- */

{
  const storage = makeStorage({ legacy: { answers: answers(10, new Date(NOW - DAY).toISOString()), bestScore: 10 } });
  const review = load(storage);
  const outcomes = review.applyResults(
    { results: { "legacy-1": true } },
    [{ id: "legacy-1", reviewSource: "legacy", reviewSourceTitle: "legacy" }],
    NOW
  );
  check("legacy mastery gets a schedule", outcomes[0].state, "advanced");
  check("legacy schedule is persisted", storage.concepts.legacy.review.intervalIndex, 1);
}

if (failures.length) {
  console.error(`\n${failures.length} review test(s) failed:`);
  failures.forEach((failure) => console.error("  - " + failure));
  process.exit(1);
}
console.log("Review scheduler tests passed.");
