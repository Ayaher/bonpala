#!/usr/bin/env node
/* Review worksheet and mechanical audit for authored exercises.
   Usage:
     node tools/review_challenges.mjs                      # chal-* concepts
     node tools/review_challenges.mjs --concept chal-tenses
     node tools/review_challenges.mjs --item chal-syntax-4
     node tools/review_challenges.mjs --all                # every concept
     node tools/review_challenges.mjs --only-flagged
     node tools/review_challenges.mjs --json
     node tools/review_challenges.mjs --blind              # hide key + explanation
     node tools/review_challenges.mjs --hash               # content hashes
     node tools/review_challenges.mjs --out review.json
     node tools/review_challenges.mjs --strict             # exit 1 on S2 as well
   The tool never edits curriculum.js. It prints an item-by-item worksheet with
   S1/S2/S3 flags so a reviewer can adjudicate each item against repository sources. */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import crypto from "node:crypto";
import {
  root, classify, tokens, markerSpans, stripMarkers, looksGlobasa,
  classCodes, isNoun, isNumeral, isAdjectiveOrAdverb
} from "./lexicon-lib.mjs";

const CURRICULUM = path.join(root, "data/curriculum.js");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(CURRICULUM, "utf8"), sandbox, { filename: "data/curriculum.js" });
const curriculum = sandbox.window.GLOBASA_CURRICULUM;

const args = process.argv.slice(2);
const options = {
  concepts: [], items: [], all: false, onlyFlagged: false, json: false,
  blind: false, hash: false, out: null, strict: false, help: false
};
for (let i = 0; i < args.length; i += 1) {
  const arg = args[i];
  if (arg === "--concept") options.concepts.push(args[++i]);
  else if (arg === "--item") options.items.push(args[++i]);
  else if (arg === "--all") options.all = true;
  else if (arg === "--only-flagged") options.onlyFlagged = true;
  else if (arg === "--json") options.json = true;
  else if (arg === "--blind") options.blind = true;
  else if (arg === "--hash") options.hash = true;
  else if (arg === "--strict") options.strict = true;
  else if (arg === "--out") options.out = args[++i];
  else if (arg === "--help" || arg === "-h") options.help = true;
  else {
    console.error(`Unknown argument: ${arg}`);
    options.help = true;
  }
}

if (options.help) {
  console.log(`Review worksheet for authored exercises.

  --all                every concept (default: chal-*); best-effort outside Challenge content
  --concept <id>       one concept id (repeatable)
  --item <id>          one exercise id (repeatable)
  --only-flagged       print only items with at least one flag
  --json               machine-readable output
  --blind              omit "correct" and "explanation" (blind-solve input)
  --hash               add a content hash per exercise
  --out <path>         write the report to a file instead of stdout
  --strict             exit 1 on S2 flags as well as S1

Exit code: 1 when the selection is Challenge content (default or --concept chal-*) and any S1
flag is present (or any flag with --strict). Triage runs outside Challenge content exit 0.`);
  process.exit(args.length ? 2 : 0);
}

/* ---------------------------------------------------------------- selection */

const conceptById = new Map(curriculum.concepts.map((concept) => [concept.id, concept]));
let concepts = curriculum.concepts;
if (options.concepts.length) {
  concepts = options.concepts.map((id) => {
    const concept = conceptById.get(id);
    if (!concept) {
      console.error(`No concept with id ${id}`);
      process.exit(2);
    }
    return concept;
  });
} else if (!options.all) {
  concepts = concepts.filter((concept) => concept.id.startsWith("chal-"));
}

const exercises = [];
for (const concept of concepts) {
  for (const exercise of concept.exercises || []) exercises.push({ concept, exercise });
}

const selected = options.items.length
  ? exercises.filter(({ exercise }) => options.items.includes(exercise.id))
  : exercises;
if (options.items.length && selected.length !== options.items.length) {
  const found = new Set(selected.map(({ exercise }) => exercise.id));
  for (const id of options.items) if (!found.has(id)) console.error(`No exercise with id ${id}`);
}

/* --------------------------------------------------------------- utilities */

const GRAMMAR_TERMS = new Set([
  "sen", "le", "xa", "nun", "jale", "jaxa", "ger", "eger", "du", "na", "am", "kam", "kama",
  "ku", "ki", "feki", "hu", "da", "dasu", "sesu", "tesu", "se", "be", "max", "min", "maxmo",
  "minmo", "kom", "haji", "no", "wal", "cel", "tas", "ton", "ex", "per", "in", "fe", "bax",
  "of", "pas", "yon", "fal", "tem", "dur", "denwatu", "denloka", "denseba", "denmaner",
  "moy", "hin", "den", "ban", "nil", "alo", "sama", "un", "plu", "ji", "mas", "or", "koski",
  "celki", "abil", "ingay", "musi", "vole", "haja", "xoru", "fini", "awidi", "preata", "ruata",
  "idi", "ata", "ergo", "doxo", "lala", "danse", "somno", "yam", "glu", "kari", "gibe",
  "porta", "plasi", "xerca", "ewreka", "sonxi", "hifazi", "wanji", "resta", "klosi", "buka",
  "bukacu", "bukagi", "beklosi", "klosido", "bukado", "pilodo", "pilopul", "termocu",
  "bardicu", "finigi", "kasirugi", "dudanse", "dudoxo", "dansene", "yampul", "interes",
  "preferi", "suki", "ganjon", "loga", "pala", "swal", "jawabu", "jixi", "aham", "memori",
  "ore", "oko", "sahay", "safegi", "ordenu", "rekomenda", "telifon", "irsal", "esto", "sencu",
  "xencu", "bardi", "termo", "termopul", "daymo", "godomo", "velosi", "fori", "dyer",
  "pimpan", "solo", "dento", "moyto", "moyte", "nilto", "nilte", "aloto", "alote", "samato",
  "samate", "kete", "keto", "keloka", "kewatu", "keseba", "kemaner", "kekwanti", "kenumer",
  "kesu", "hinto", "hinte"
]);

const FUNCTION_CODES = new Set(["l", "p", "d", "m", "pn", "su"]);
const DETERMINERS = new Set(["moy", "hin", "den", "ban", "nil", "alo", "sama", "ke"]);

function isFunctionWord(token) {
  return classCodes(token).some((code) => FUNCTION_CODES.has(code));
}

function normalizeText(text) {
  return stripMarkers(text)
    .toLowerCase()
    .replace(/[“”«»"']/g, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function sentences(text) {
  return stripMarkers(text)
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
}

function contentTokens(text) {
  return tokens(text).filter((token) => !isFunctionWord(token) && !GRAMMAR_TERMS.has(token));
}

function hashExercise(exercise) {
  return crypto.createHash("sha256").update(JSON.stringify(exercise)).digest("hex").slice(0, 12);
}

/* ------------------------------------------------------------- global maps */

const promptOwner = new Map();
const passageOwner = new Map();
const optionOwner = new Map();
for (const concept of curriculum.concepts) {
  for (const exercise of concept.exercises || []) {
    if (exercise.prompt && !promptOwner.has(exercise.prompt)) promptOwner.set(exercise.prompt, exercise.id);
    if (exercise.passage) {
      const key = normalizeText(exercise.passage);
      if (!passageOwner.has(key)) passageOwner.set(key, []);
      passageOwner.get(key).push(exercise.id);
    }
    for (const option of exercise.options || []) {
      const key = normalizeText(option);
      if (!optionOwner.has(key)) optionOwner.set(key, []);
      optionOwner.get(key).push(exercise.id);
    }
  }
}

/* ------------------------------------------------------------ item checks */

function itemFields(exercise) {
  const fields = [];
  if (exercise.passage) fields.push(["passage", exercise.passage, looksGlobasa(exercise.passage)]);
  const promptGlobasa = !markerSpans(exercise.prompt).length && looksGlobasa(exercise.prompt);
  fields.push(["prompt", exercise.prompt, promptGlobasa]);
  (exercise.options || []).forEach((option, index) => {
    fields.push([`option[${index}]`, option, looksGlobasa(option)]);
  });
  if (exercise.answer) {
    const globasa = exercise.type === "translate" && exercise.direction === "en-gl";
    fields.push(["answer", exercise.answer, globasa]);
  }
  (exercise.accept || []).forEach((text, index) => {
    if (text) fields.push([`accept[${index}]`, text, exercise.direction === "en-gl"]);
  });
  (exercise.blanks || []).forEach((blank, index) => {
    fields.push([`blank[${index}]`, blank.answer, true]);
    (blank.accept || []).forEach((text, inner) => {
      if (text) fields.push([`blank[${index}].accept[${inner}]`, text, true]);
    });
  });
  if (exercise.gloss) fields.push(["gloss", exercise.gloss, false]);
  if (exercise.explanation) fields.push(["explanation", exercise.explanation, false]);
  return fields;
}

function auditExercise(concept, exercise) {
  const flags = [];
  const add = (severity, category, message) => flags.push({ severity, category, message });

  if (!exercise.id || !exercise.id.startsWith(`${concept.id}-`)) {
    add("S2", "structure", "exercise id does not start with the concept id");
  }
  if (!exercise.explanation || !String(exercise.explanation).trim()) {
    add("S1", "structure", "missing explanation");
  }
  if (exercise.dyn) {
    if (concept.id.startsWith("chal-")) add("S1", "structure", "dyn block present on a challenge item");
  }
  if (exercise.prompt && promptOwner.get(exercise.prompt) !== exercise.id) {
    add("S1", "structure", `duplicate prompt (also ${promptOwner.get(exercise.prompt)})`);
  }

  for (const [label, text, globasa] of itemFields(exercise)) {
    if (typeof text !== "string") continue;

    if (label === "passage" && /\{\{|\}\}/.test(text)) add("S1", "markers", "passage contains authoring markers");
    if (["answer", "gloss"].includes(label) && /\{\{|\}\}/.test(text)) {
      add("S1", "markers", `${label} contains authoring markers`);
    }
    if (label.startsWith("accept") && /\{\{|\}\}/.test(text)) add("S1", "markers", `${label} contains authoring markers`);
    if (label.startsWith("blank") && /\{\{|\}\}/.test(text)) add("S1", "markers", `${label} contains authoring markers`);

    const open = (text.match(/\{\{/g) || []).length;
    const close = (text.match(/\}\}/g) || []).length;
    if (open !== close) add("S1", "markers", `${label} has unbalanced {{…}} markers`);

    if (!globasa) {
      for (const span of markerSpans(text)) {
        for (const token of tokens(span)) {
          if (!classify(token)) add("S1", "lexicon", `${label} cites unknown token "${token}"`);
        }
      }
      continue;
    }

    for (const token of tokens(text)) {
      if (token.length < 2) continue;
      const kind = classify(token);
      if (!kind) add("S1", "lexicon", `${label}: unknown token "${token}"`);
      else if (kind.includes(":")) add("S3", "lexicon", `${label}: derived form "${token}" (${kind})`);
    }
  }

  /* ---- structural contract by type */
  if (exercise.type === "mcq") {
    if (!Array.isArray(exercise.options) || exercise.options.length !== 5) {
      add("S1", "structure", `MCQ has ${(exercise.options || []).length} options (needs 5)`);
    } else {
      const seen = new Set();
      const interpretive = Boolean(exercise.passage && exercise.passage.trim().length > 20 && looksGlobasa(exercise.passage));
      exercise.options.forEach((option, index) => {
        const text = stripMarkers(option).trim();
        if (!text) add("S1", "structure", `option[${index}] is empty`);
        if (seen.has(option)) add("S1", "structure", `option[${index}] duplicates another option`);
        seen.add(option);
        if (!/^\{\{[\s\S]*\}\}$/.test(option.trim()) && interpretive) {
          add("S1", "markers", `option[${index}] is not wrapped in one {{…}} pair`);
        }
        if (interpretive) {
          if (!/[.!?]$/.test(text)) add("S1", "structure", `option[${index}] lacks terminal punctuation`);
          if (text.split(/\s+/).length < 2) add("S1", "structure", `option[${index}] is a single word`);
        }
      });
      if (!Number.isInteger(exercise.correct) || exercise.correct < 0 || exercise.correct > 4) {
        add("S1", "structure", "correct index is not 0..4");
      } else {
        const key = stripMarkers(exercise.options[exercise.correct]).trim();
        const lengths = exercise.options.map((option) => stripMarkers(option).trim().length);
        const sorted = [...lengths].sort((a, b) => b - a);
        if (sorted[0] === lengths[exercise.correct] && sorted[0] > sorted[1] * 1.25) {
          add("S2", "key", "key is the longest option by more than 25%");
        }
        if (sorted[sorted.length - 1] > 0 && sorted[0] / sorted[sorted.length - 1] > 1.6) {
          add("S3", "style", `option lengths span ${sorted[sorted.length - 1]}–${sorted[0]} characters`);
        }
        if (exercise.passage) {
          const passageTokens = tokens(exercise.passage);
          const keyTokens = tokens(key);
          const windowSize = 6;
          const passageGrams = new Set();
          for (let i = 0; i + windowSize <= passageTokens.length; i += 1) {
            passageGrams.add(passageTokens.slice(i, i + windowSize).join(" "));
          }
          for (let i = 0; i + windowSize <= keyTokens.length; i += 1) {
            if (passageGrams.has(keyTokens.slice(i, i + windowSize).join(" "))) {
              add("S2", "key", `key repeats a ${windowSize}-word run from the passage`);
              break;
            }
          }
          const passageSentences = new Set(sentences(exercise.passage).map(normalizeText));
          if (passageSentences.has(normalizeText(key))) add("S2", "key", "key copies a passage sentence verbatim");
        }
        const keyContent = new Set(contentTokens(key));
        exercise.options.forEach((option, index) => {
          if (index === exercise.correct) return;
          const optionContent = [...new Set(contentTokens(option))];
          if (!optionContent.length) return;
          const shared = optionContent.filter((token) => keyContent.has(token));
          if (shared.length / optionContent.length > 0.85) {
            add("S3", "style", `option[${index}] nearly restates the key`);
          }
        });
      }
    }
  } else if (exercise.type === "translate") {
    if (!["en-gl", "gl-en"].includes(exercise.direction)) add("S1", "structure", "bad translation direction");
    if (!exercise.answer || !String(exercise.answer).trim()) add("S1", "structure", "missing translation answer");
    if (!Array.isArray(exercise.accept)) add("S1", "structure", "accept is not an array");
    const answerKey = normalizeText(exercise.answer || "");
    for (const alternative of exercise.accept || []) {
      if (alternative && normalizeText(alternative) === answerKey && alternative !== exercise.answer) {
        add("S2", "structure", "accepted alternative normalizes to the answer");
      }
    }
  } else if (exercise.type === "fill") {
    const placeholders = String(exercise.prompt || "").split("___").length - 1;
    if (!Array.isArray(exercise.blanks) || exercise.blanks.length !== placeholders) {
      add("S1", "structure", `${placeholders} placeholders but ${(exercise.blanks || []).length} blanks`);
    }
    const answers = new Set();
    for (const [index, blank] of (exercise.blanks || []).entries()) {
      if (!blank.answer || !String(blank.answer).trim()) add("S1", "structure", `blank[${index}] is empty`);
      const value = String(blank.answer || "").trim().toLowerCase();
      if (answers.has(value)) add("S3", "structure", `blank[${index}] repeats another blank's answer`);
      answers.add(value);
      if (value.length > 1 && !classify(value) && !value.includes(" ")) add("S1", "lexicon", `blank[${index}] answer "${value}" is unknown`);
    }
    if (!exercise.gloss) add("S2", "structure", "fill prompt has no gloss");
    else if (!/[.!?]$/.test(String(exercise.gloss).trim())) add("S3", "structure", "gloss lacks terminal punctuation");
  } else {
    add("S1", "structure", `unknown exercise type "${exercise.type}"`);
  }

  /* ---- grammar heuristics on Globasa text */
  const globasaTexts = itemFields(exercise)
    .filter(([, text, globasa]) => globasa && typeof text === "string")
    .map(([label, text]) => [label, text]);

  for (const [label, text] of globasaTexts) {
    if (label.startsWith("blank") || text.includes("___")) continue;
    const flat = stripMarkers(text).replace(/\s+/g, " ");

    for (const match of flat.matchAll(/\b([a-zà-ÿ]{3,})\s+\1\b/gi)) {
      add("S1", "grammar", `${label}: duplicated word "${match[1]}"`);
    }
    for (const match of flat.matchAll(/\b([a-zà-ÿ]{4,})\s+([a-zà-ÿ]{2,})\s+\1\b/gi)) {
      const first = match[1].toLowerCase();
      if (isFunctionWord(first) || GRAMMAR_TERMS.has(first)) continue;
      add("S2", "grammar", `${label}: repeated word "${match[1]}" with one word between`);
    }
    for (const match of flat.matchAll(/\bno\s+(le|xa|nun|jale|jaxa|ger)\b/gi)) {
      add("S2", "grammar", `${label}: "${match[0]}" puts no before the tense marker`);
    }

    for (const sentence of sentences(text)) {
      if (/\bhu\b/i.test(sentence)) {
        const adverbial = /\b(denloka|denwatu|denmaner|denseba|denkwanti|dennumer)\s+hu\b/i.test(sentence);
        const huPlace = /\bhu\s+(denloka|denwatu|denmaner|denseba|in\s+da)\b/i.test(sentence);
        const resumptive = /\b(da|dasu)\b/i.test(sentence);
        if (!adverbial && !huPlace && !resumptive) {
          add("S2", "grammar", `${label}: relative "hu" clause without da/dasu — ${sentence}`);
        }
      }
      if (!/\bku\b/i.test(sentence) && !/[:«“]/.test(sentence)) {
        const first = sentence.trim().split(/\s+/)[0].toLowerCase();
        const questionWord = sentence.match(/\b(ke[a-z]+)\b/i);
        const reported = /\b(jixi|swal|jawabu|pala|loga|sati|aham)\b/i.test(sentence);
        if (questionWord && reported && !first.startsWith("ke")) {
          add("S1", "grammar", `${label}: reported content question has no "ku" — ${sentence}`);
        }
      }
    }

    const list = tokens(text);
    for (let i = 0; i < list.length; i += 1) {
      const token = list[i];
      const next = list[i + 1];
      if (DETERMINERS.has(token)) {
        if (!next) add("S1", "grammar", `${label}: determiner "${token}" stands alone`);
        else if (!isNoun(next) && !isAdjectiveOrAdverb(next) && !isNumeral(next) && next !== "plu") {
          add("S2", "grammar", `${label}: determiner "${token}" is followed by "${next}", not a noun phrase`);
        }
      }
      if (token === "maxmo" || token === "minmo") {
        if (next && isNoun(next) && !isAdjectiveOrAdverb(next)) {
          add("S1", "grammar", `${label}: ${token} before noun-like "${next}"`);
        }
      }
      if (token === "max" || token === "min") {
        if (next && isAdjectiveOrAdverb(next) && !isNoun(next)) {
          add("S1", "grammar", `${label}: ${token} before adjective/adverb "${next}"`);
        }
      }
      if (token === "tesu" || token === "sesu" || token === "dasu") {
        add("S3", "grammar", `${label}: possessive "${token}" in "${list.slice(Math.max(0, i - 2), i + 3).join(" ")}"`);
      }
    }
  }

  /* ---- explanation hygiene */
  const explanation = String(exercise.explanation || "");
  const keyText = exercise.type === "mcq" && Array.isArray(exercise.options) && Number.isInteger(exercise.correct)
    ? exercise.options[exercise.correct] || ""
    : [exercise.answer, exercise.gloss, (exercise.blanks || []).map((blank) => blank.answer).join(" ")].join(" ");
  const shownTokens = new Set([
    ...tokens(exercise.passage || ""),
    ...tokens(exercise.prompt || ""),
    ...tokens(keyText)
  ]);
  for (const span of markerSpans(explanation)) {
    for (const token of tokens(span)) {
      if (GRAMMAR_TERMS.has(token) || isFunctionWord(token) || classify(token) === "name") continue;
      if (!shownTokens.has(token)) {
        add("S3", "explanation", `explanation cites "${token}", absent from passage/prompt/key — verify the claim`);
      }
    }
  }
  if (/\b(first|second|third|fourth|fifth|option\s+\d|options?\s+[a-e])\b/i.test(explanation)) {
    add("S3", "explanation", "explanation refers to option ordinals — verify the mapping");
  }

  /* ---- cross-item duplication */
  if (exercise.passage) {
    const owners = passageOwner.get(normalizeText(exercise.passage)) || [];
    if (owners.length > 1) add("S2", "structure", `passage also used by ${owners.filter((id) => id !== exercise.id).join(", ")}`);
  }
  for (const option of exercise.options || []) {
    if (!(exercise.passage && exercise.passage.trim().length > 20 && looksGlobasa(exercise.passage))) continue;
    const owners = optionOwner.get(normalizeText(option)) || [];
    if (owners.length > 1) add("S2", "structure", `option also used by ${owners.filter((id) => id !== exercise.id).join(", ")}`);
  }

  const order = { S1: 0, S2: 1, S3: 2 };
  flags.sort((a, b) => order[a.severity] - order[b.severity]);
  return flags;
}

/* ------------------------------------------------------------------ output */

const results = [];
for (const { concept, exercise } of selected) {
  const flags = auditExercise(concept, exercise);
  results.push({ concept: concept.id, exercise, flags, hash: hashExercise(exercise) });
}

const visible = options.onlyFlagged ? results.filter((result) => result.flags.length) : results;

if (options.json || options.out) {
  const payload = visible.map(({ concept, exercise, flags, hash }) => ({
    concept,
    id: exercise.id,
    type: exercise.type,
    direction: exercise.direction || null,
    hash,
    passage: exercise.passage || null,
    prompt: exercise.prompt,
    options: exercise.options || null,
    correct: options.blind ? null : (Number.isInteger(exercise.correct) ? exercise.correct : null),
    answer: options.blind ? null : (exercise.answer || null),
    accept: options.blind ? null : (exercise.accept || []),
    blanks: options.blind ? null : (exercise.blanks || []),
    gloss: exercise.gloss || null,
    explanation: options.blind ? null : (exercise.explanation || null),
    flags
  }));
  const text = `${JSON.stringify(payload, null, 2)}\n`;
  if (options.out) fs.writeFileSync(path.resolve(options.out), text);
  else process.stdout.write(text);
} else {
  for (const { concept, exercise, flags, hash } of visible) {
    console.log(`\n${"=".repeat(78)}`);
    console.log(`${exercise.id}  [${exercise.type}${exercise.direction ? ` ${exercise.direction}` : ""}]  concept=${concept}`);
    if (options.hash) console.log(`hash: ${hash}`);
    if (exercise.passage) console.log(`P: ${exercise.passage}`);
    console.log(`Q: ${exercise.prompt}`);
    if (exercise.options) {
      exercise.options.forEach((option, index) => {
        const marker = !options.blind && index === exercise.correct ? "*" : " ";
        console.log(`  ${marker} ${index}. ${option}`);
      });
    }
    if (!options.blind && exercise.answer) console.log(`A: ${exercise.answer}`);
    if (!options.blind && exercise.accept && exercise.accept.length) console.log(`accept: ${JSON.stringify(exercise.accept)}`);
    if (!options.blind && exercise.blanks && exercise.blanks.length) console.log(`blanks: ${JSON.stringify(exercise.blanks)}`);
    if (exercise.gloss) console.log(`G: ${exercise.gloss}`);
    if (!options.blind && exercise.explanation) console.log(`E: ${exercise.explanation}`);
    if (flags.length) {
      for (const flag of flags) console.log(`  ${flag.severity} ${flag.category}: ${flag.message}`);
    } else {
      console.log("  no mechanical flags");
    }
  }

  const counts = { S1: 0, S2: 0, S3: 0 };
  const categories = new Map();
  for (const { flags } of visible) {
    for (const flag of flags) {
      counts[flag.severity] += 1;
      categories.set(flag.category, (categories.get(flag.category) || 0) + 1);
    }
  }
  const flaggedItems = visible.filter(({ flags }) => flags.length).length;
  console.log(`\n${"=".repeat(78)}`);
  console.log(`Items shown: ${visible.length}/${results.length}  |  flagged: ${flaggedItems}`);
  console.log(`Flags: S1=${counts.S1}  S2=${counts.S2}  S3=${counts.S3}`);
  console.log(`By category: ${[...categories.entries()].sort((a, b) => b[1] - a[1]).map(([name, count]) => `${name}=${count}`).join("  ") || "none"}`);
}

const hasS1 = results.some(({ flags }) => flags.some((flag) => flag.severity === "S1"));
const hasS2 = results.some(({ flags }) => flags.some((flag) => flag.severity === "S2"));
const challengeScope = concepts.every((concept) => concept.id.startsWith("chal-"));
process.exit(challengeScope && (hasS1 || (options.strict && hasS2)) ? 1 : 0);
