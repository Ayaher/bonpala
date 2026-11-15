#!/usr/bin/env node
/* Focused tests for the translation diff (js/diff.js). */

import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sandbox = { window: {} };
vm.createContext(sandbox);
for (const file of ["js/normalize.js", "js/diff.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), sandbox, { filename: file });
}
const D = sandbox.window.GlobasaDiff;

const failures = [];
function check(label, actual, expected) {
  if (actual !== expected) failures.push(`${label}\n    got:      ${JSON.stringify(actual)}\n    expected: ${JSON.stringify(expected)}`);
}

function lines(yours, correct) {
  const diff = D.compare(yours, correct);
  return { yours: D.render(diff.yours), correct: D.render(diff.correct) };
}

/* The reported case: two typos in a Globasa sentence. */
{
  const out = lines(
    "Miso baltu sen denmo day kom yusu to.",
    "Misu baytu sen denmo day kom yusu to."
  );
  check("typo, correct line", out.correct, "Mis<ins>u</ins> ba<ins>y</ins>tu sen denmo day kom yusu to.");
  check("typo, learner line", out.yours, "Mis<del>o</del> ba<del>l</del>tu sen denmo day kom yusu to.");
}

/* Only case, punctuation and spacing differ: nothing to mark. */
{
  const out = lines("  mi   LE doxo kitabu  ", "Mi le doxo kitabu.");
  check("case-insensitive words are not marked", /[<>]/.test(out.correct), false);
  check("learner line keeps the original text", out.yours, "mi LE doxo kitabu");
}

/* Missing words on the learner's side. */
{
  const out = lines("I lived in house under tree", "I lived in a small house under a tree.");
  check("missing words are shown as insertions", out.correct, "I lived in <ins>a</ins> <ins>small</ins> house under <ins>a</ins> tree.");
  check("learner line is untouched", out.yours, "I lived in house under tree");
}

/* Extra words on the learner's side. */
{
  const out = lines("Mi le doxo neo kitabu tre", "Mi le doxo neo kitabu.");
  check("extra word is struck through", out.yours, "Mi le doxo neo kitabu <del>tre</del>");
  check("reference line is untouched", out.correct, "Mi le doxo neo kitabu.");
}

/* Unrelated words are marked whole instead of letter by letter. */
{
  const out = lines("the cat sat on the chair", "The bird sang in the tree");
  check("unrelated nouns are whole-word marks", /<del>chair<\/del>/.test(out.yours), true);
  check("unrelated nouns are whole-word marks (reference)", /<ins>tree<\/ins>/.test(out.correct), true);
}

/* Similar words still get character marks. */
{
  const out = lines("Mi le somnu", "Mi le somno");
  check("a single wrong letter is marked", out.yours, "Mi le somn<del>u</del>");
  check("a single wrong letter is marked (reference)", out.correct, "Mi le somn<ins>o</ins>");
}

/* Word order changes are reported as a move. */
{
  const out = lines("Mi le doxo kitabu neo", "Mi le doxo neo kitabu");
  check("reordered words are marked", /<del>neo<\/del>/.test(out.yours) && /<ins>neo<\/ins>/.test(out.correct), true);
}

/* Punctuation is ignored by grading, so it is never highlighted. */
{
  const out = lines("I gave one book to my brothel", "I gave one book to my brother.");
  check("a missing full stop is not marked", out.correct, "I gave one book to my brothe<ins>r</ins>.");
  check("the typo itself is still marked", out.yours, "I gave one book to my brothe<del>l</del>");
}
{
  const out = lines('He said "hello"', "He said hello.");
  check("quotes are not marked", /[<>]/.test(out.correct), false);
}

/* Rendering must escape learner input. */
{
  const out = lines("a <script>alert(1)</script>", "a script alert 1");
  check("html is escaped", out.yours.includes("<script>"), false);
  check("escaped angle brackets survive", out.yours.includes("&lt;script&gt;"), true);
}

/* Choosing the closest accepted wording. */
{
  const candidates = [
    "I lived in a small house under a tree.",
    "I lived in a small house beneath a tree.",
    "I lived in a little house under a tree."
  ];
  check(
    "the closest alternative wins",
    D.closest("I lived in a small house beneath the tree", candidates),
    "I lived in a small house beneath a tree."
  );
  check("the reference is used when nothing is closer", D.closest("Total nonsense", ["Hi.", "Hello there."]), "Hi.");
  check("an empty list yields an empty string", D.closest("x", []), "");
  check("a single candidate is returned", D.closest("x", ["only"]), "only");
}

/* Distance ignores case, punctuation and spacing, like grading. */
{
  check("distance ignores case and punctuation", D.distance("mi le doxo kitabu", "Mi le doxo kitabu."), 0);
  check("distance counts real edits", D.distance("miso", "misu"), 2);
  check("distance is symmetric", D.distance("abc", "abd"), D.distance("abd", "abc"));
}

if (failures.length) {
  console.error(`\n${failures.length} diff test(s) failed:`);
  failures.forEach((failure) => console.error("  - " + failure));
  process.exit(1);
}
console.log("Diff tests passed.");
