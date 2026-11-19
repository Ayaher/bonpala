#!/usr/bin/env node
/* Validate the authored curriculum and dictionary data without a browser. */

import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sandbox = { window: {} };
vm.createContext(sandbox);

for (const file of ["data/words.js", "data/curriculum.js", "data/grammar.js", "data/tenses.js", "js/normalize.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), sandbox, { filename: file });
}

const C = sandbox.window.GLOBASA_CURRICULUM;
const W = sandbox.window.GLOBASA_WORDS;
const N = sandbox.window.GlobasaNormalize;
const G = sandbox.window.GLOBASA_GRAMMAR;
const T = sandbox.window.GLOBASA_TENSES;
const errors = [];
const warnings = [];

function fail(message) {
  errors.push(message);
}

function warn(message) {
  warnings.push(message);
}

if (!C || !Array.isArray(C.concepts)) fail("curriculum did not load");
if (!W || W.count !== 9527 || W.entries.length !== 9527) fail(`dictionary count is ${W && W.count}`);

/* Mirror of the runtime's default-variant substitution, so checks compare what a learner sees. */
function substitute(text, values) {
  return text.replace(/\{([a-z0-9]+)(?::([a-z0-9]+))?\}/gi, (whole, name, field) => {
    const value = values[name.toLowerCase()];
    if (value == null) return whole;
    if (typeof value === "string") return value;
    if (Array.isArray(value)) return field === "e" ? value[0] : value[1];
    const key = field || "g";
    if (value[key] != null) return value[key];
    return value.g != null ? value.g : "";
  });
}

/* {{Globasa}} markers are markup, never placeholders. */
function fillSlots(text, values) {
  if (typeof text !== "string") return text;
  return text.split(/(\{\{.*?\}\})/).map((part, i) => (i % 2 === 1 ? part : substitute(part, values))).join("");
}

function stripMarkers(text) {
  return typeof text === "string" ? text.replace(/\{\{(.*?)\}\}/g, "$1") : text;
}

/* Reading lessons quote the authored story file verbatim. Parse it once so the
   checks below compare against the same text a learner sees. */
const READING_SOURCE = path.join(root, "more-resources-2/Thirty Short Stories in Globasa.md");
const storyCache = new Map();

function storyLoose(text) {
  return String(text == null ? "" : text).replace(/\s+/g, " ").trim();
}

function parseStories() {
  if (storyCache.size) return storyCache;
  const lines = fs.readFileSync(READING_SOURCE, "utf8").split(/\r?\n/);
  let current = null;
  for (const raw of lines) {
    const heading = raw.match(/^###\s+(\d+)\s+-\s+(.*?)\s+_\s*(.*?)\s*_?\s*$/);
    if (heading) {
      current = { num: Number(heading[1]), title: heading[2], en: heading[3], pairs: [], body: [] };
      storyCache.set(current.num, current);
      continue;
    }
    if (!current || !raw.trim()) continue;
    current.body.push(raw.trim());
  }
  for (const story of storyCache.values()) {
    let index = 0;
    /* The first pair repeats the title in both languages. */
    if (story.body.length >= 2 && /^_.*_$/.test(story.body[1])) index = 2;
    for (; index < story.body.length; index += 1) {
      const gl = story.body[index];
      const en = story.body[index + 1];
      if (en && /^_.*_$/.test(en)) {
        story.pairs.push({ gl, en: en.slice(1, -1) });
        index += 1;
      }
    }
    delete story.body;
  }
  return storyCache;
}

/* The passage must be an exact run of whole story sentences, not a paraphrase
   and not a fragment. */
function contiguousSpan(passage, sentences) {
  const target = storyLoose(stripMarkers(passage));
  for (let start = 0; start < sentences.length; start += 1) {
    let acc = "";
    for (let end = start; end < sentences.length; end += 1) {
      acc = acc ? `${acc} ${sentences[end]}` : sentences[end];
      if (acc === target) return [start, end];
      if (!target.startsWith(acc)) break;
    }
  }
  return null;
}

/* {{...}} markers must pair up in order: no stray braces, no nesting. */
function markersOk(text) {
  if (typeof text !== "string") return true;
  let i = 0;
  while (i < text.length) {
    const open = text.indexOf("{{", i);
    const close = text.indexOf("}}", i);
    if (open === -1) return close === -1;
    if (close !== -1 && close < open) return false;
    const end = text.indexOf("}}", open + 2);
    if (end === -1) return false;
    if (text.slice(open + 2, end).includes("{{")) return false;
    i = end + 2;
  }
  return true;
}

function defaultValues(dyn) {
  const values = {};
  for (const [name, pool] of Object.entries(dyn.slots || {})) values[name] = pool[0];
  return values;
}

function defaultPrompt(exercise) {
  if (!exercise.dyn) return exercise.prompt;
  if (exercise.dyn.kind === "definition") return fillSlots(exercise.dyn.prompt, { term: exercise.dyn.pool[0][0] });
  return fillSlots(exercise.prompt, defaultValues(exercise.dyn));
}

const conceptIds = new Set();
const exerciseIds = new Set();
const prompts = new Map();
const areaIds = new Set(C.areas.map((area) => area.id));
let exerciseCount = 0;
const byArea = {};
const byType = {};

for (const concept of C.concepts) {
  if (conceptIds.has(concept.id)) fail(`duplicate concept id: ${concept.id}`);
  conceptIds.add(concept.id);
  for (const [label, value] of [["blurb", concept.blurb], ["notes", (concept.notes || []).join(" ")],
    ["examples", (concept.examples || []).map((pair) => pair.join(" ")).join(" ")]]) {
    if (!markersOk(value)) fail(`${concept.id}: unbalanced Globasa markers in ${label}`);
  }

  if (!areaIds.has(concept.area)) fail(`${concept.id}: unknown area ${concept.area}`);
  for (const field of ["title", "blurb"]) {
    if (!concept[field] || typeof concept[field] !== "string") fail(`${concept.id}: missing ${field}`);
  }
  if (!Array.isArray(concept.notes) || concept.notes.length < 2) fail(`${concept.id}: needs at least two notes`);
  if (!Array.isArray(concept.examples) || concept.examples.length < 2) fail(`${concept.id}: needs at least two examples`);
  if (!Array.isArray(concept.refs) || concept.refs.length < 1) fail(`${concept.id}: needs at least one ref`);

  if (!Array.isArray(concept.exercises) || concept.exercises.length !== 10) {
    fail(`${concept.id}: expected exactly 10 exercises, found ${concept.exercises ? concept.exercises.length : 0}`);
    continue;
  }

  const localPrompts = new Set();
  const localTypes = { mcq: 0, translate: 0, fill: 0 };

  for (const exercise of concept.exercises) {
    exerciseCount += 1;
    byArea[concept.area] = (byArea[concept.area] || 0) + 1;
    if (exerciseIds.has(exercise.id)) fail(`duplicate exercise id: ${exercise.id}`);
    exerciseIds.add(exercise.id);
    if (!exercise.id.startsWith(concept.id + "-")) warn(`${exercise.id}: id does not start with concept id`);
    if (!exercise.prompt || typeof exercise.prompt !== "string") fail(`${exercise.id}: missing prompt`);
    const shownPrompt = defaultPrompt(exercise);
    if (localPrompts.has(shownPrompt)) fail(`${concept.id}: duplicate prompt ${shownPrompt}`);
    localPrompts.add(shownPrompt);
    if (prompts.has(shownPrompt)) fail(`duplicate prompt across concepts: ${exercise.id} and ${prompts.get(shownPrompt)}`);
    prompts.set(shownPrompt, exercise.id);
    if (/\{[a-z0-9]+(?::[a-z0-9]+)?\}/i.test(stripMarkers(shownPrompt))) fail(`${exercise.id}: unresolved placeholder in the default prompt`);
    if (!exercise.explanation || typeof exercise.explanation !== "string") fail(`${exercise.id}: missing explanation`);
    if (!["mcq", "translate", "fill"].includes(exercise.type)) fail(`${exercise.id}: bad type ${exercise.type}`);
    localTypes[exercise.type] = (localTypes[exercise.type] || 0) + 1;
    byType[exercise.type] = (byType[exercise.type] || 0) + 1;

    if (exercise.dyn) {
      const dyn = exercise.dyn;
      if (dyn.kind === "definition") {
        if (!/{term}/.test(dyn.prompt || "")) fail(`${exercise.id}: definition pool prompt needs {term}`);
        if (!Array.isArray(dyn.pool) || dyn.pool.length < 5) fail(`${exercise.id}: definition pool needs at least 5 entries`);
        const terms = new Set();
        let askable = 0;
        dyn.pool.forEach((entry, index) => {
          if (!Array.isArray(entry) || entry.length < 2 || !entry[1]) fail(`${exercise.id}: pool entry ${index} needs [term, option]`);
          if (entry[0]) {
            askable += 1;
            if (terms.has(entry[0])) fail(`${exercise.id}: duplicate pool term ${entry[0]}`);
            terms.add(entry[0]);
          }
        });
        if (!askable) fail(`${exercise.id}: definition pool has no askable entry`);
        dyn.pool.forEach((entry, index) => {
          if (!entry[0]) return;
          const window = [0, 1, 2, 3, 4].map((step) => dyn.pool[(index + step) % dyn.pool.length][1]);
          if (new Set(window).size !== 5) fail(`${exercise.id}: pool entry "${entry[0]}" yields duplicate options`);
        });
      } else if (dyn.slots) {
        const names = Object.keys(dyn.slots);
        if (!names.length) fail(`${exercise.id}: dyn.slots is empty`);
        for (const [name, pool] of Object.entries(dyn.slots)) {
          if (!Array.isArray(pool) || pool.length < 2) fail(`${exercise.id}: slot ${name} needs at least two values`);
          if (name !== name.toLowerCase()) fail(`${exercise.id}: slot ${name} must be lowercase`);
        }
        const fields = [exercise.prompt, exercise.gloss, exercise.answer, exercise.explanation, exercise.passage]
          .concat(exercise.options || [])
          .concat((exercise.accept || []))
          .concat((exercise.blanks || []).flatMap((blank) => [blank.answer].concat(blank.accept || [])));
        for (const field of fields) {
          if (typeof field !== "string") continue;
          const referenced = [...stripMarkers(field).matchAll(/\{([a-z0-9]+)(?::[a-z0-9]+)?\}/gi)].map((match) => match[1].toLowerCase());
          for (const name of referenced) {
            if (!dyn.slots[name]) fail(`${exercise.id}: placeholder {${name}} has no slot`);
          }
        }
        const values = defaultValues(dyn);
        const shownGloss = exercise.gloss && fillSlots(exercise.gloss, values);
        const shownAnswer = exercise.answer && fillSlots(exercise.answer, values);
        const shownBlanks = (exercise.blanks || []).map((blank) => fillSlots(blank.answer, values)).join(" / ");
        for (const [label, value] of [["gloss", shownGloss], ["answer", shownAnswer], ["blank", shownBlanks]]) {
          if (value && /\{[a-z0-9]+(?::[a-z0-9]+)?\}/i.test(value)) fail(`${exercise.id}: unresolved placeholder in ${label}`);
        }
      } else {
        fail(`${exercise.id}: dyn needs either kind:"definition" or slots`);
      }
    }

    for (const [label, value] of [["prompt", exercise.prompt], ["notes", (concept.notes || []).join(" ")],
      ["blurb", concept.blurb], ["explanation", exercise.explanation], ["gloss", exercise.gloss],
      ["options", (exercise.options || []).join(" ")]]) {
      if (typeof value !== "string") continue;
      if (!markersOk(value)) fail(`${exercise.id}: unbalanced Globasa markers in ${label}`);
    }

    if (exercise.type === "mcq") {
      if (!Array.isArray(exercise.options) || exercise.options.length !== 5) {
        fail(`${exercise.id}: MCQ must have exactly 5 options`);
      } else {
        if (new Set(exercise.options).size !== 5) fail(`${exercise.id}: duplicate MCQ options`);
        /* Passage MCQs are interpretive reading items, so their options stay full sentences.
           Recall items name the answer form directly: a letter, a word, a phrase, a series. */
        const interpretive = Boolean(exercise.passage && exercise.passage.trim().length > 20);
        exercise.options.forEach((option, index) => {
          const text = stripMarkers(option).trim();
          if (!text) fail(`${exercise.id}: empty option ${index}`);
          if (interpretive) {
            if (!/[.!?]$/.test(text)) fail(`${exercise.id}: option ${index} is not a full sentence (no terminal punctuation)`);
            if (text.split(/\s+/).length < 2) fail(`${exercise.id}: option ${index} is a single word`);
          }
        });
        if (!Number.isInteger(exercise.correct) || exercise.correct < 0 || exercise.correct > 4) {
          fail(`${exercise.id}: correct index must be 0..4`);
        }
      }
    } else if (exercise.type === "translate") {
      if (!["en-gl", "gl-en"].includes(exercise.direction)) fail(`${exercise.id}: bad direction`);
      if (!exercise.answer || !exercise.answer.trim()) fail(`${exercise.id}: missing answer`);
      if (!Array.isArray(exercise.accept)) fail(`${exercise.id}: accept must be an array`);
      for (const alternative of exercise.accept || []) {
        if (!alternative.trim()) fail(`${exercise.id}: empty accepted alternative`);
        if (N.normalize(alternative) === N.normalize(exercise.answer) && alternative !== exercise.answer) {
          warn(`${exercise.id}: accepted alternative normalizes to the answer`);
        }
      }
    } else if (exercise.type === "fill") {
      const placeholders = exercise.prompt.split("___").length - 1;
      if (!Array.isArray(exercise.blanks) || exercise.blanks.length !== placeholders) {
        fail(`${exercise.id}: ${placeholders} placeholders but ${exercise.blanks ? exercise.blanks.length : 0} blanks`);
      }
      for (const blank of exercise.blanks || []) {
        if (!blank.answer || !blank.answer.trim()) fail(`${exercise.id}: empty blank answer`);
        if (!Array.isArray(blank.accept)) fail(`${exercise.id}: blank accept must be an array`);
      }
      if (exercise.gloss != null) {
        if (typeof exercise.gloss !== "string" || !exercise.gloss.trim()) fail(`${exercise.id}: empty gloss`);
        else if (!/[.!?]$/.test(exercise.gloss.trim())) warn(`${exercise.id}: gloss should end with punctuation`);
      }
    }
  }

  if (localTypes.mcq < 3) fail(`${concept.id}: needs at least three MCQs`);
  if (localTypes.translate + localTypes.fill < 3) fail(`${concept.id}: needs at least three production exercises`);
}


const passageConcepts = new Set();
let multiBlankCount = 0;
for (const concept of C.concepts) {
  const hasPassage = concept.exercises.some((exercise) => exercise.type === "mcq" && exercise.passage && exercise.passage.trim().length > 20);
  if (hasPassage) passageConcepts.add(concept.id);
  else fail(`${concept.id}: needs at least one passage-based interpretive MCQ`);
  for (const exercise of concept.exercises) {
    if (exercise.type === "fill" && exercise.blanks.length > 1) multiBlankCount += 1;
  }
}
if (multiBlankCount < 1) fail("curriculum needs at least one multi-blank fill exercise");
if (Object.keys(C.byId).length !== C.concepts.length) fail("byId is out of sync with concepts");
for (const concept of C.concepts) {
  if (C.byId[concept.id] !== concept) fail(`${concept.id}: byId does not point at the concept object`);
}

/* Reading area: each lesson is anchored to one authored story, and every quoted
   sentence must come from it verbatim. */
const stories = parseStories();
/* Story 0 is the author preface, not a reading lesson. */
stories.delete(0);
if (stories.size !== 30) fail(`story source: expected 30 stories, parsed ${stories.size}`);
const readingConcepts = C.concepts.filter((concept) => concept.area === "reading");
if (readingConcepts.length !== stories.size) fail(`expected ${stories.size} reading concepts, found ${readingConcepts.length}`);
if (!C.areas.some((area) => area.id === "reading")) fail("reading area is missing");
for (const concept of C.concepts) {
  const storyMatch = concept.id.match(/^read-s(\d{2})-/);
  if (concept.area === "reading" && !storyMatch) fail(`${concept.id}: reading concept id must start with read-sNN-`);
  if (concept.area !== "reading" && storyMatch) fail(`${concept.id}: read-sNN- id must belong to the reading area`);
}

for (const concept of readingConcepts) {
  const num = Number(concept.id.match(/^read-s(\d{2})-/)[1]);
  const story = stories.get(num);
  if (!story) {
    fail(`${concept.id}: source story ${num} not found`);
    continue;
  }
  if (!(concept.refs || []).some((ref) => new RegExp(`Story\\s+${num}\\b`).test(ref))) {
    fail(`${concept.id}: refs must cite source story ${num}`);
  }
  const storyGl = story.pairs.map((pair) => storyLoose(pair.gl));
  const storyEn = story.pairs.map((pair) => storyLoose(pair.en));
  const storyGlSet = new Set(storyGl);
  const storyEnSet = new Set(storyEn);
  const storyGlText = storyGl.join(" ");
  const passageMcqs = concept.exercises.filter((exercise) => exercise.type === "mcq" && exercise.passage && exercise.passage.trim().length > 20);
  const recallMcqs = concept.exercises.filter((exercise) => exercise.type === "mcq" && !(exercise.passage && exercise.passage.trim().length > 20));
  const glEn = concept.exercises.filter((exercise) => exercise.type === "translate" && exercise.direction === "gl-en");
  const enGl = concept.exercises.filter((exercise) => exercise.type === "translate" && exercise.direction === "en-gl");
  const fills = concept.exercises.filter((exercise) => exercise.type === "fill");
  if (passageMcqs.length !== 4) fail(`${concept.id}: expected 4 passage MCQs, found ${passageMcqs.length}`);
  if (recallMcqs.length !== 1) fail(`${concept.id}: expected 1 vocabulary MCQ, found ${recallMcqs.length}`);
  if (glEn.length !== 2) fail(`${concept.id}: expected 2 gl-en translations, found ${glEn.length}`);
  if (enGl.length !== 1) fail(`${concept.id}: expected 1 en-gl translation, found ${enGl.length}`);
  if (fills.length !== 2) fail(`${concept.id}: expected 2 fills, found ${fills.length}`);

  for (const exercise of passageMcqs) {
    const span = contiguousSpan(exercise.passage, storyGl);
    if (!span) fail(`${exercise.id}: passage is not a contiguous run of story ${num} sentences`);
    else {
      const chars = storyLoose(exercise.passage).length;
      if (chars < 25 || chars > 220) fail(`${exercise.id}: passage length ${chars} outside 25–220 characters`);
      if (span[1] - span[0] > 2) fail(`${exercise.id}: passage spans more than three sentences`);
    }
  }

  const recall = recallMcqs[0];
  if (recall) {
    const quoted = [...String(recall.prompt).matchAll(/\{\{(.*?)\}\}/g)].map((match) => match[1]);
    if (!quoted.length) fail(`${recall.id}: vocabulary prompt must quote the word in {{…}}`);
    /* The last quoted span is the word under test; earlier spans may be the title. */
    const word = quoted[quoted.length - 1];
    if (!storyGlText.toLowerCase().includes(String(word).toLowerCase())) fail(`${recall.id}: "{{${word}}}" does not occur in story ${num}`);
  }

  for (const exercise of concept.exercises) {
    if (exercise.type === "fill") {
      let filled = exercise.prompt;
      for (const blank of exercise.blanks) filled = filled.replace("___", () => blank.answer);
      filled = storyLoose(stripMarkers(filled));
      if (!storyGlSet.has(filled)) fail(`${exercise.id}: completed fill is not a sentence from story ${num}`);
    } else if (exercise.type === "translate") {
      const promptText = storyLoose(stripMarkers(exercise.prompt));
      const answerText = storyLoose(stripMarkers(exercise.answer));
      if (exercise.direction === "gl-en") {
        if (!storyEnSet.has(answerText)) fail(`${exercise.id}: answer is not a published English line from story ${num}`);
        if (!storyGl.some((line) => promptText.includes(line))) fail(`${exercise.id}: prompt does not quote a Globasa sentence from story ${num}`);
      } else {
        if (!storyGlSet.has(answerText)) fail(`${exercise.id}: answer is not a published Globasa line from story ${num}`);
        if (!storyEn.some((line) => promptText.includes(line))) fail(`${exercise.id}: prompt does not quote an English line from story ${num}`);
      }
    }
  }
}

const areaIdSet = new Set();
for (const area of C.areas) {
  if (areaIdSet.has(area.id)) fail(`duplicate area id: ${area.id}`);
  areaIdSet.add(area.id);
  if (!C.concepts.some((concept) => concept.area === area.id)) fail(`area ${area.id} has no concepts`);
}

const EXPECTED_CONCEPTS = 86;
const EXPECTED_EXERCISES = EXPECTED_CONCEPTS * 10;
if (C.concepts.length !== EXPECTED_CONCEPTS) fail(`expected ${EXPECTED_CONCEPTS} concepts, found ${C.concepts.length}`);
if (exerciseCount !== EXPECTED_EXERCISES) fail(`expected ${EXPECTED_EXERCISES} exercises, found ${exerciseCount}`);
if (C.totals.exercises !== exerciseCount) fail(`totals.exercises is ${C.totals.exercises}`);
if (C.totals.concepts !== C.concepts.length) fail(`totals.concepts is ${C.totals.concepts}`);


if (!G || !Array.isArray(G.sections) || !Array.isArray(G.coreRules)) fail("grammar summary did not load");
else {
  if (!G.title || !G.subtitle || !G.intro) fail("grammar summary: missing title/subtitle/intro");
  if (G.coreRules.length < 5) fail("grammar summary: needs at least five core rules");
  for (const rule of G.coreRules) {
    if (!rule.title || !rule.text) fail("grammar summary: core rule missing title/text");
    if (!Array.isArray(rule.example) || rule.example.length !== 2) fail(`grammar summary core rule "${rule.title}": example must be a pair`);
  }
  const sectionIds = new Set();
  for (const section of G.sections) {
    if (!section.id || sectionIds.has(section.id)) fail(`grammar summary: duplicate/missing section id ${section.id}`);
    sectionIds.add(section.id);
    for (const field of ["title", "source", "lead"]) {
      if (!section[field] || typeof section[field] !== "string") fail(`grammar summary ${section.id}: missing ${field}`);
    }
    if (!Array.isArray(section.rules) || !Array.isArray(section.tables)) fail(`grammar summary ${section.id}: rules/tables must be arrays`);
    for (const rule of section.rules || []) {
      if (!rule.title || !rule.text) fail(`grammar summary ${section.id}: rule missing title/text`);
      for (const example of rule.examples || []) {
        if (!Array.isArray(example) || example.length !== 2) fail(`grammar summary ${section.id}: example must be a pair`);
      }
    }
    for (const table of section.tables || []) {
      if (!Array.isArray(table.head) || !table.head.length) fail(`grammar summary ${section.id}: table missing head`);
      if (!Array.isArray(table.rows)) fail(`grammar summary ${section.id}: table missing rows`);
      for (const row of table.rows || []) {
        if (row.length !== table.head.length) fail(`grammar summary ${section.id}: table row width mismatch`);
      }
    }
    if (!(section.rules || []).length && !(section.tables || []).length) fail(`grammar summary ${section.id}: no content`);
    for (const link of section.links || []) {
      if (!link.label || !link.href) fail(`grammar summary ${section.id}: link missing label/href`);
    }
  }
  if (sectionIds.size < 5) fail("grammar summary: too few sections");
  if (!G.studyPlan || !Array.isArray(G.studyPlan.steps)) fail("grammar summary: missing study plan");
  else {
    for (const step of G.studyPlan.steps) {
      if (!step.title || !step.text) fail("grammar summary: study step missing title/text");
      if (!Array.isArray(step.concepts)) fail(`grammar summary study step "${step.title}": concepts must be an array`);
      for (const id of step.concepts || []) {
        if (!C.byId[id]) fail(`grammar summary study step "${step.title}": unknown concept ${id}`);
      }
    }
  }
}

if (!T || !Array.isArray(T.groups) || !Array.isArray(T.principles)) fail("tense reference did not load");
else {
  if (!T.title || !T.subtitle || !T.intro) fail("tense reference: missing title/subtitle/intro");
  if (T.principles.length < 3) fail("tense reference: needs at least three principles");
  const cardIds = new Set();
  let cardTotal = 0;
  for (const principle of T.principles) {
    if (!principle.title || !principle.text) fail("tense reference: principle missing title/text");
  }
  for (const group of T.groups) {
    if (!group.id || !group.title || !group.lead) fail("tense reference: group missing id/title/lead");
    if (!Array.isArray(group.cards) || !group.cards.length) fail(`tense reference ${group.id}: no cards`);
    for (const card of group.cards || []) {
      cardTotal += 1;
      if (!card.id || cardIds.has(card.id)) fail(`tense reference: duplicate/missing card id ${card.id}`);
      cardIds.add(card.id);
      for (const field of ["name", "marker", "formula", "summary", "detail", "watch"]) {
        if (!card[field] || typeof card[field] !== "string") fail(`tense reference ${card.id}: missing ${field}`);
      }
      if (!Array.isArray(card.examples) || card.examples.length < 2) fail(`tense reference ${card.id}: needs at least two examples`);
      for (const example of card.examples || []) {
        if (!Array.isArray(example) || example.length !== 2) fail(`tense reference ${card.id}: example must be a pair`);
      }
      if (!C.byId[card.practice]) fail(`tense reference ${card.id}: unknown practice concept ${card.practice}`);
      else if (C.byId[card.practice].area !== "tenses") fail(`tense reference ${card.id}: practice concept ${card.practice} is not in the tenses area`);
    }
  }
  if (cardTotal < 10) fail(`tense reference: expected at least ten tense cards, found ${cardTotal}`);
  for (const tableKey of ["order", "choosing"]) {
    const table = T[tableKey];
    if (!table || !table.title || !table.lead || !Array.isArray(table.head) || !Array.isArray(table.rows)) fail(`tense reference ${tableKey}: missing title/lead/table head/rows`);
    else {
      for (const row of table.rows) {
        if (row.length !== table.head.length) fail(`tense reference ${tableKey}: row width mismatch`);
      }
    }
  }
  if (!Array.isArray(T.traps) || T.traps.length < 3) fail("tense reference: needs at least three traps");
  if (!T.practice || !T.practice.title || !T.practice.lead || !Array.isArray(T.practice.conceptIds) || T.practice.conceptIds.length < 1) fail("tense reference: missing practice title/lead/conceptIds");
  for (const id of (T.practice && T.practice.conceptIds) || []) {
    if (!C.byId[id]) fail(`tense reference practice: unknown concept ${id}`);
    else if (C.byId[id].area !== "tenses") fail(`tense reference practice: ${id} is not in the tenses area`);
  }
}

// Normalization contract.
const normalizationCases = [
  ["  Hello,   WORLD!  ", "hello world"],
  ["Don't stop.", "dont stop"],
  ["Mi le doxo, kitabu!", "mi le doxo kitabu"],
  ["Mi\u00a0le\t\tdoxo", "mi le doxo"]
];
for (const [input, expected] of normalizationCases) {
  if (N.normalize(input) !== expected) fail(`normalize(${JSON.stringify(input)}) = ${JSON.stringify(N.normalize(input))}, expected ${JSON.stringify(expected)}`);
}
if (!N.matches("Mi  le doxo kitabu", "mi le doxo kitabu.")) fail("normalization should ignore spaces and punctuation");
if (N.matches("Mi le doxo kitabu", "mi le doxo pingo")) fail("normalization must be strict about wording");

const toleranceCases = [
  ["I lived in a small house under the tree.", "I lived in a small house under a tree.", true],
  ["I lived in small house under tree", "I lived in a small house under a tree.", true],
  ["I do not like it.", "I don't like it.", true],
  ["The colour is grey.", "The color is gray.", true],
  ["I bought two book.", "I bought two books.", true],
  ["A cat sat on a chair and watched the bird.", "The cat sat on the chair and watched a bird.", false],
  ["The children are here.", "The child is here.", false],
  ["I live here.", "I lived here.", false]
];
for (const [input, target, expected] of toleranceCases) {
  const actual = N.matchesTranslation(input, [target]);
  if (actual !== expected) fail(`matchesTranslation(${JSON.stringify(input)}, ${JSON.stringify(target)}) = ${actual}, expected ${expected}`);
}
if (N.matchesAny("the tiketo", ["tiketo"])) fail("fill answers must stay strict: no article tolerance on blanks");

console.log(`Concepts: ${C.concepts.length}`);
console.log(`Exercises: ${exerciseCount}`);
console.log("By area:", byArea);
console.log("By type:", byType);
console.log(`Dictionary entries: ${W.count.toLocaleString()}`);
if (warnings.length) {
  console.log(`\nWarnings (${warnings.length}):`);
  warnings.forEach((warning) => console.log("  - " + warning));
}
if (errors.length) {
  console.error(`\nErrors (${errors.length}):`);
  errors.forEach((error) => console.error("  - " + error));
  process.exit(1);
}
console.log("\nContent validation passed.");
