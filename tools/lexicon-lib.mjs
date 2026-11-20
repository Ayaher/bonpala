/* Shared Globasa lexicon helpers for the repository's Node tools.
   Loads resources/word-list.csv once and exposes token classification,
   word-class codes, and the Globasa-token helpers used by the validators. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

export function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"') {
        if (text[i + 1] === '"') { cell += '"'; i += 1; } else quoted = false;
      } else cell += ch;
    } else if (ch === '"') quoted = true;
    else if (ch === ",") { row.push(cell); cell = ""; }
    else if (ch === "\n") { row.push(cell); rows.push(row); row = []; cell = ""; }
    else if (ch !== "\r") cell += ch;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  return rows;
}

const csv = parseCsv(fs.readFileSync(path.join(root, "resources/word-list.csv"), "utf8"));
export const words = new Set();
export const prefixes = [];
export const suffixes = [];
export const dictionary = new Map();

for (const row of csv.slice(1)) {
  const entry = String(row[0] || "").trim().toLowerCase();
  if (!entry) continue;
  dictionary.set(entry, {
    category: String(row[1] || "").trim(),
    wordClass: String(row[2] || "").trim(),
    gloss: String(row[3] || "").trim()
  });
  if (entry.startsWith("-")) suffixes.push(entry.slice(1));
  else if (entry.endsWith("-")) prefixes.push(entry.slice(0, -1));
  else words.add(entry);
}
/* Longest affixes first so the most specific split wins. */
prefixes.sort((a, b) => b.length - a.length);
suffixes.sort((a, b) => b.length - a.length);

export const NAMES = new Set([
  "ana", "beni", "bela", "sam", "tim", "nini", "johan", "oliver", "tom", "musa", "lena", "omar"
]);

const memo = new Map();
export function classify(token, depth = 0) {
  if (!token) return null;
  if (NAMES.has(token)) return "name";
  if (words.has(token)) return "root";
  if (depth > 6) return null;
  if (memo.has(token)) return memo.get(token);
  memo.set(token, null);
  if (token.includes("-")) {
    const parts = token.split("-").filter(Boolean);
    if (parts.length > 1 && parts.every((part) => classify(part, depth + 1))) {
      memo.set(token, "compound");
      return "compound";
    }
  }
  for (const prefix of prefixes) {
    if (token.length > prefix.length + 1 && token.startsWith(prefix) && classify(token.slice(prefix.length), depth + 1)) {
      const result = `prefix:${prefix}`;
      memo.set(token, result);
      return result;
    }
  }
  for (const suffix of suffixes) {
    if (token.length > suffix.length + 1 && token.endsWith(suffix) && classify(token.slice(0, -suffix.length), depth + 1)) {
      const result = `suffix:${suffix}`;
      memo.set(token, result);
      return result;
    }
  }
  return null;
}

const GLOBASA_TOKEN = /[a-z]+(?:-[a-z]+)*/g;
export function tokens(text) {
  return String(text || "").replace(/\{\{|\}\}/g, " ").toLowerCase().match(GLOBASA_TOKEN) || [];
}

export function stripMarkers(text) {
  return String(text || "").replace(/\{\{|\}\}/g, " ");
}

export function markerSpans(text) {
  const spans = [];
  const re = /\{\{(.*?)\}\}/g;
  let match;
  while ((match = re.exec(String(text || "")))) spans.push(match[1]);
  return spans;
}

export const ENGLISH_HINTS = new Set(["the", "a", "an", "which", "what", "who", "when", "where", "why", "how",
  "sentence", "means", "mean", "according", "passage", "text", "correct", "answer", "choose", "best",
  "translate", "into", "english", "globasa", "does", "do", "is", "are", "was", "were", "in", "of", "to"]);

export function looksGlobasa(text) {
  const list = tokens(text);
  if (!list.length) return false;
  const known = list.filter((token) => classify(token)).length;
  return known / list.length >= 0.6;
}

/* Word-class codes: "b.oro.jotay" -> ["b", "b.oro", "b.oro.jotay"];
   "d; m" -> ["d", "m"]; "tabel: d" -> ["tabel", "d"]; "su s" -> ["su"]. */
export function classCodes(word) {
  const entry = dictionary.get(String(word || "").toLowerCase());
  if (!entry) return [];
  const codes = new Set();
  for (const part of entry.wordClass.split(";")) {
    const trimmed = part.trim().toLowerCase();
    if (!trimmed) continue;
    if (trimmed.startsWith("tabel:")) {
      codes.add("tabel");
      for (const sub of trimmed.slice(6).trim().split(/[\s,.]+/)) if (sub) codes.add(sub);
    } else if (trimmed.startsWith("su")) {
      codes.add("su");
    } else if (trimmed.startsWith("pn")) {
      codes.add("pn");
    } else {
      const bits = trimmed.split(".");
      for (let i = 1; i <= bits.length; i += 1) codes.add(bits.slice(0, i).join("."));
    }
  }
  return [...codes];
}

export function isNoun(word) {
  const codes = classCodes(word);
  return codes.some((code) => code === "b" || code.startsWith("b."));
}

export function isNumeral(word) {
  return classCodes(word).includes("num");
}

export function isAdjectiveOrAdverb(word) {
  return classCodes(word).includes("t");
}

export function isAdverb(word) {
  return classCodes(word).includes("m");
}

export function isDeterminer(word) {
  return classCodes(word).includes("d");
}

export function isPreposition(word) {
  return classCodes(word).includes("p");
}

export function isConjunction(word) {
  return classCodes(word).includes("l");
}

export function isPronoun(word) {
  return classCodes(word).includes("pn") || classCodes(word).includes("su");
}

export function glossOf(word) {
  const entry = dictionary.get(String(word || "").toLowerCase());
  return entry ? entry.gloss : "";
}
