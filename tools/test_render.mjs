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
check("dashboard", views.dashboard({}));
check("grammar", views.grammar());
check("tenses", views.tenses());
check("reference", views.reference());
check("dictionary", views.dictionary(dictState));

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

console.log(`Render tests passed (${screens * 2 + 5} screens, ${curriculum.concepts.length} lessons).`);
