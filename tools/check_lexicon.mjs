#!/usr/bin/env node
/* Token-level Globasa lexicon check against resources/word-list.csv.
   Usage:
     node tools/check_lexicon.mjs                    # checks chal-* concepts in data/curriculum.js
     node tools/check_lexicon.mjs file.json [...]    # checks concept objects in JSON files
   A token passes if it is an exact word-list entry, a hyphenated compound of valid
   parts, or an official affix derivation (prefix- or suffix-based). */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { root, classify, tokens, looksGlobasa, markerSpans } from "./lexicon-lib.mjs";

const problems = [];
const derived = new Map();

function checkText(label, text, { required = false } = {}) {
  const list = tokens(text);
  if (!list.length) {
    if (required) problems.push(`${label}: no Globasa tokens`);
    return;
  }
  for (const token of list) {
    const kind = classify(token);
    if (!kind) problems.push(`${label}: unknown token "${token}"`);
    else if (kind !== "root" && kind !== "name" && !derived.has(token)) derived.set(token, kind);
  }
}

function checkMarkers(label, text) {
  for (const span of markerSpans(text)) checkText(`${label} {{…}}`, span, { required: true });
}

function checkConcept(concept) {
  const base = concept.id;
  checkText(`${base}.blurb`, concept.blurb);
  for (const [index, note] of (concept.notes || []).entries()) {
    checkMarkers(`${base}.notes[${index}]`, note);
  }
  for (const [index, pair] of (concept.examples || []).entries()) {
    checkText(`${base}.examples[${index}][0]`, pair[0], { required: true });
    checkMarkers(`${base}.examples[${index}][1]`, pair[1]);
  }
  for (const exercise of concept.exercises || []) {
    const id = exercise.id;
    checkMarkers(`${id}.explanation`, exercise.explanation);
    if (exercise.passage) checkText(`${id}.passage`, exercise.passage, { required: true });
    if (exercise.type === "mcq") {
      if (looksGlobasa(exercise.prompt)) checkText(`${id}.prompt`, exercise.prompt);
      for (const [index, option] of (exercise.options || []).entries()) {
        checkText(`${id}.options[${index}]`, option, { required: true });
      }
    } else if (exercise.type === "translate") {
      if (exercise.direction === "en-gl") checkText(`${id}.answer`, exercise.answer, { required: true });
      else {
        checkMarkers(`${id}.prompt`, exercise.prompt);
        const quoted = markerSpans(exercise.prompt).join(" ");
        checkText(`${id}.prompt`, quoted || exercise.prompt, { required: true });
      }
    } else if (exercise.type === "fill") {
      checkText(`${id}.prompt`, exercise.prompt, { required: true });
      for (const [index, blank] of (exercise.blanks || []).entries()) {
        checkText(`${id}.blanks[${index}]`, blank.answer, { required: true });
      }
    }
  }
}

function loadConcepts() {
  const args = process.argv.slice(2);
  const concepts = [];
  if (!args.length) {
    const sandbox = { window: {} };
    vm.createContext(sandbox);
    vm.runInContext(fs.readFileSync(path.join(root, "data/curriculum.js"), "utf8"), sandbox, { filename: "data/curriculum.js" });
    for (const concept of sandbox.window.GLOBASA_CURRICULUM.concepts) {
      if (concept.id.startsWith("chal-")) concepts.push(concept);
    }
    return concepts;
  }
  for (const file of args) {
    const parsed = JSON.parse(fs.readFileSync(path.resolve(file), "utf8"));
    if (Array.isArray(parsed)) concepts.push(...parsed);
    else if (Array.isArray(parsed.concepts)) concepts.push(...parsed.concepts);
    else concepts.push(parsed);
  }
  return concepts;
}

const concepts = loadConcepts();
if (!concepts.length) {
  console.error("No concepts found to check.");
  process.exit(1);
}
for (const concept of concepts) checkConcept(concept);

if (problems.length) {
  console.error(`Lexicon check failed (${problems.length} problem${problems.length === 1 ? "" : "s"}):`);
  for (const problem of problems.slice(0, 200)) console.error(`  ${problem}`);
  if (problems.length > 200) console.error(`  … and ${problems.length - 200} more`);
  process.exit(1);
}

const derivedList = [...derived.entries()].sort(([a], [b]) => a.localeCompare(b));
console.log(`Lexicon check passed (${concepts.length} concept${concepts.length === 1 ? "" : "s"}, 0 unknown tokens).`);
if (derivedList.length) {
  console.log(`Derived forms accepted for review (${derivedList.length}):`);
  for (const [form, kind] of derivedList) console.log(`  ${form} (${kind})`);
}
