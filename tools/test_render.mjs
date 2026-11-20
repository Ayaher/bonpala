/* Renders every screen once and fails if an authoring marker survives into the
   markup — `{{Globasa}}` in data/curriculum.js or `globasa` in backticks in
   data/grammar.js / data/tenses.js. A leak means a view escaped authored text
   without going through prose()/inlineFormat(). */
import fs from "node:fs";
import vm from "node:vm";

const store = {};
const localStorage = {
  getItem: (key) => (key in store ? store[key] : null),
  setItem: (key, value) => { store[key] = String(value); },
  removeItem: (key) => { delete store[key]; }
};

const sandbox = {
  window: { localStorage },
  document: {
    title: "",
    /* navFor only highlights links; there is no DOM here. */
    querySelectorAll: () => []
  },
  localStorage,
  console
};
const context = vm.createContext(sandbox);

const FILES = [
  "data/words.js",
  "data/curriculum.js",
  "data/grammar.js",
  "data/tenses.js",
  "js/normalize.js",
  "js/diff.js",
  "js/storage.js",
  "js/exercise-engine.js",
  "js/review.js",
  "js/views.js"
];

for (const file of FILES) {
  vm.runInContext(fs.readFileSync(file, "utf8"), context, { filename: file });
}

const curriculum = sandbox.window.GLOBASA_CURRICULUM;
const views = sandbox.window.GlobasaViews;
const engine = sandbox.window.GlobasaEngine;

const failures = [];

function check(label, html) {
  if (!html) {
    failures.push(`${label}: rendered nothing`);
    return;
  }
  /* Braces or backticks anywhere in the markup — text or attributes — mean a
     marker reached the browser. */
  const braces = html.match(/.{0,50}\{\{.{0,50}/);
  if (braces) failures.push(`${label}: unrendered marker — ${braces[0]}`);
  const ticks = html.match(/.{0,50}`.{0,50}/);
  if (ticks) failures.push(`${label}: unrendered backtick — ${ticks[0]}`);
}

const dictState = { dict: { query: "", classFilter: "all", categoryFilter: "all", limit: 40 } };
const dashboardHtml = views.dashboard({});
check("dashboard", dashboardHtml);
const grammarHtml = views.grammar();
const settingsHtml = views.settings();
check("grammar", grammarHtml);
check("settings", settingsHtml);
check("reference", views.reference());
check("dictionary", views.dictionary(dictState));

const grammarData = sandbox.window.GLOBASA_GRAMMAR;
const grammarChapterIds = ["core"].concat(grammarData.sections.map((section) => section.id)).concat(["tenses", "study"]);
for (const chapterId of grammarChapterIds) {
  check(`grammar/${chapterId}`, views.grammar(chapterId));
}
if (!grammarHtml.includes('href="#/grammar/core"') || !grammarHtml.includes('href="#/grammar/tenses"')) {
  failures.push("grammar: chapter index links are missing");
}
if (grammarHtml.includes('id="g-sounds"')) {
  failures.push("grammar: chapter content should not be inlined on the index");
}
const tenseHtml = views.grammar("tenses");
if (!tenseHtml.includes('id="g-tenses"') || !tenseHtml.includes('id="tense-group-simple"')) {
  failures.push("grammar/tenses: tense chapter content is missing");
}
if (views.grammarChapterTitle("tenses") !== "Verb tenses, without conjugation") {
  failures.push("grammarChapterTitle: tense chapter title is missing");
}
if (!settingsHtml.includes('id="dynamic-toggle"') ||
  !settingsHtml.includes('data-action="reset-progress"') ||
  !settingsHtml.includes('data-action="sign-out"')) {
  failures.push("settings: practice, progress, or sign-out control is missing");
}

for (const area of curriculum.areas) {
  check(`area/${area.id}`, views.areaPage(area.id));
}

if (!dashboardHtml.includes('href="#/area/foundations"')) {
  failures.push("dashboard: compact area links are missing");
}
if (!/class="slot is-[a-z]+ is-challenge"/.test(dashboardHtml)) {
  failures.push("dashboard: challenge slot is missing");
}
if (dashboardHtml.includes("challenge-tag") || dashboardHtml.includes("slot-star")) {
  failures.push("dashboard: challenge chip or slot star should not be rendered");
}

const challengeConcept = curriculum.byId["chal-foundations"];
const foundationArea = views.areaPage("foundations");
if (!views.isChallenge(challengeConcept)) failures.push("isChallenge: chal-foundations was not detected");
if (views.isChallenge(curriculum.byId["read-s14-tyojan-de-bwaw"])) {
  failures.push("isChallenge: a story that mentions challenge was detected");
}
if (!/class="concept-card [^"]*is-challenge/.test(foundationArea)) {
  failures.push("area/foundations: challenge card styling is missing");
}
if (foundationArea.includes("challenge-tag")) {
  failures.push("area/foundations: challenge chip should not be rendered");
}

const firstConcept = curriculum.concepts[0];
const secondConcept = curriculum.concepts[1];
const lastConcept = curriculum.concepts[curriculum.concepts.length - 1];
if (!views.nextConcept(firstConcept.id) || views.nextConcept(firstConcept.id).id !== secondConcept.id) {
  failures.push("nextConcept: did not follow the curriculum order");
}
if (views.nextConcept(lastConcept.id) !== null) {
  failures.push("nextConcept: returned a concept after the last lesson");
}

sandbox.window.GlobasaStorage.finishLesson(firstConcept.id, 10, 10);
const masteredResults = views.results(firstConcept.id, null);
if (!masteredResults.includes(`href="#/lesson/${secondConcept.id}"`)) {
  failures.push("results: mastered lesson has no next-concept link");
}
if (!masteredResults.includes('aria-keyshortcuts="n"')) {
  failures.push("results: next-concept shortcut is missing");
}

let screens = 0;
for (const concept of curriculum.concepts) {
  const item = curriculum.byId[concept.id];
  check(`lesson/${concept.id}`, views.lesson(concept.id));

  concept.exercises.forEach((exercise, index) => {
    screens += 1;
    check(`exercise/${exercise.id}`, views.exercise(concept.id, index, engine.createSession(item, index)));

    /* Answer it wrong so the feedback branch — correct answer, diff, explanation
       — is checked too. */
    const session = engine.createSession(item, index);
    const rendered = engine.instance(session, exercise);
    session.response = rendered.type === "mcq" ? (rendered.correct + 1) % rendered.options.length : "definitely wrong";
    session.feedback = engine.evaluate(rendered, session.response);
    session.submitted = true;
    session.results[rendered.id] = session.feedback.correct;
    check(`feedback/${exercise.id}`, views.exercise(concept.id, index, session));
  });
}

if (failures.length) {
  console.error(`Render tests failed (${failures.length}):`);
  failures.slice(0, 25).forEach((line) => console.error("  " + line));
  process.exit(1);
}

console.log(`Render tests passed (${screens * 2 + 5 + curriculum.areas.length + grammarChapterIds.length} screens, ${curriculum.concepts.length} lessons, ${curriculum.areas.length} areas, ${grammarChapterIds.length} grammar chapters).`);
