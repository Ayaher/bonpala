#!/usr/bin/env node
/* Focused tests for the exact normalization contract used by the app. */

import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(root, "js/normalize.js"), "utf8"), sandbox);
const N = sandbox.window.GlobasaNormalize;

const cases = [
  ["  Hello,   WORLD!  ", "hello world"],
  ["Don't stop.", "dont stop"],
  ["Mi le doxo, kitabu!", "mi le doxo kitabu"],
  ["Mi\u00a0le\t\tdoxo", "mi le doxo"],
  ["???", ""],
  ["Bwaw sen lil.", "bwaw sen lil"]
];

let failed = 0;
for (const [input, expected] of cases) {
  const actual = N.normalize(input);
  if (actual !== expected) {
    failed += 1;
    console.error(`normalize(${JSON.stringify(input)}) = ${JSON.stringify(actual)}; expected ${JSON.stringify(expected)}`);
  }
}

const matches = [
  ["Mi le doxo kitabu", "mi le doxo kitabu."],
  ["  NINI DOXO NEO KITABU  ", "Nini doxo neo kitabu."],
  ["Kitabu sen per mesa, no sen bax kursi.", "kitabu sen per mesa no sen bax kursi"]
];
for (const [input, target] of matches) {
  if (!N.matches(input, target)) {
    failed += 1;
    console.error(`expected a match: ${JSON.stringify(input)} ~ ${JSON.stringify(target)}`);
  }
}

const mismatches = [
  ["Mi le doxo kitabu", "mi le doxo pingo"],
  ["kafe", "cafe"],
  ["mi le doxo", "mi le doxo kitabu"]
];
for (const [input, target] of mismatches) {
  if (N.matches(input, target)) {
    failed += 1;
    console.error(`expected no match: ${JSON.stringify(input)} !~ ${JSON.stringify(target)}`);
  }
}

/* Translation tolerance: articles, contractions and spelling convention are
   neutral; anything that changes a content word must still fail. */
const tolerant = [
  ["I lived in a small house under the tree.", "I lived in a small house under a tree.", null],
  ["I lived in small house under tree", "I lived in a small house under a tree.", null],
  ["I bought two book.", "I bought two books.", null],
  ["The child are here.", "The children are here.", null],
  ["I don't like it.", "I do not like it.", null],
  ["I dont like it.", "I do not like it.", null],
  ["The colour is red.", "The color is red.", null],
  ["They're travelling there.", "They are traveling there.", null],
  ["I lived in a small house under a tree.", "I lived in a small house beneath a tree.", ["I lived in a small house under a tree."]]
];
for (const [input, expected, accept] of tolerant) {
  const candidates = [expected].concat(accept || []);
  if (!N.matchesTranslation(input, candidates)) {
    failed += 1;
    console.error(`expected a tolerant match: ${JSON.stringify(input)} ~ ${JSON.stringify(candidates)}`);
  }
}

const intolerant = [
  ["I bought a books.", "I bought a book."],
  ["The children are here.", "The child is here."],
  ["I live here.", "I lived here."],
  ["He is tall.", "She is tall."],
  ["under a tree", "under the house"],
  ["the tree", "a car"],
  ["A cat sat on a chair and watched the bird.", "The cat sat on the chair and watched a bird."]
];
for (const [input, expected] of intolerant) {
  if (N.matchesTranslation(input, [expected])) {
    failed += 1;
    console.error(`expected no tolerant match: ${JSON.stringify(input)} !~ ${JSON.stringify(expected)}`);
  }
}

/* Fills keep the strict contract: no article tolerance on single words. */
if (N.matchesAny("the tiketo", ["tiketo"])) {
  failed += 1;
  console.error("fill answers must stay strict");
}

if (failed) {
  console.error(`\n${failed} normalization test(s) failed.`);
  process.exit(1);
}
console.log(`Normalization tests passed (${cases.length + matches.length + mismatches.length + tolerant.length + intolerant.length + 1} cases).`);
