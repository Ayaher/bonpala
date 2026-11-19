#!/usr/bin/env node
/* Print the word class and English gloss for words from resources/word-list.csv.
   Usage: node tools/lookup_words.mjs word [word ...] */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function parseCsv(text) {
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

const rows = parseCsv(fs.readFileSync(path.join(root, "resources/word-list.csv"), "utf8"));
const map = new Map();
for (const row of rows.slice(1)) {
  if (row[0]) map.set(row[0].trim().toLowerCase(), { category: row[1], wordClass: row[2], gloss: row[3] });
}

const requested = process.argv.slice(2);
if (!requested.length) {
  console.error("Usage: node tools/lookup_words.mjs word [word ...]");
  process.exit(1);
}
let missing = 0;
for (const raw of requested) {
  const word = raw.trim().toLowerCase();
  const entry = map.get(word);
  if (!entry) {
    missing += 1;
    console.log(`MISSING  ${word}`);
  } else {
    console.log(`OK       ${word}  |  ${entry.wordClass}  |  ${entry.gloss}`);
  }
}
process.exit(missing ? 1 : 0);
