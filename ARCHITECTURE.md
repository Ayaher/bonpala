# Bonpala — Architecture & Developer Guide

This document explains how the app works, where the data lives, how scoring and persistence behave, and how to extend the curriculum safely. It is written for a developer who is new to the project and wants to add lessons or exercises without breaking the runtime.

## Contents

1. [What this app is](#1-what-this-app-is)
2. [Quick start](#2-quick-start)
3. [Runtime architecture at a glance](#3-runtime-architecture-at-a-glance)
4. [File responsibilities](#4-file-responsibilities)
5. [Data model](#5-data-model)
6. [Boot and routing](#6-boot-and-routing)
7. [Exercise engine and scoring](#7-exercise-engine-and-scoring)
8. [Answer normalization contract](#8-answer-normalization-contract)
9. [Persistence](#9-persistence)
9b. [Spaced review](#9b-spaced-review)
10. [Adding a new lesson/concept](#10-adding-a-new-lessonconcept)
11. [Adding a new area](#11-adding-a-new-area)
12. [Editing existing lessons and exercises](#12-editing-existing-lessons-and-exercises)
13. [Adding a new exercise type](#13-adding-a-new-exercise-type)
14. [Adding a new view/route](#14-adding-a-new-viewroute)
15. [Dictionary pipeline](#15-dictionary-pipeline)
16. [Styling, theming, and responsiveness](#16-styling-theming-and-responsiveness)
17. [Accessibility & UX conventions](#17-accessibility--ux-conventions)
18. [Testing and QA](#18-testing-and-qa)
19. [Common pitfalls](#19-common-pitfalls)
20. [Extension ideas](#20-extension-ideas)
21. [Source and content policy](#21-source-and-content-policy)
22. [Change checklist](#22-change-checklist-copy-into-a-pr)

---

## 1. What this app is

A static, offline-first learning app for the constructed language Globasa. It contains:

- **78 grammar, vocabulary, and reading concepts**, each with **exactly 10 exercises** (780 total).
- Three exercise mechanics: multiple choice, translation, and fill-in-the-blank.
- A dashboard, lesson overview, exercise runner, results screen, searchable dictionary, standalone grammar summary, verb-tense study page, vocabulary lessons, and quick reference tables.
- Progress stored locally in the browser with `localStorage`.

The important constraint is **no build step at runtime**. The app is a set of classic HTML/CSS/JavaScript files opened directly from `index.html`. There is no bundler, transpiler, framework, package manager, server requirement, or network request.

---

## 2. Quick start

```bash
# Option A: open directly
# Double-click index.html in a browser.

# Option B: serve statically
python3 -m http.server 8000
# open http://localhost:8000
```

Validation and data generation are developer-only commands:

```bash
python3 tools/build_words.py        # regenerate data/words.js from word-list.csv
node tools/validate_curriculum.mjs  # schema, counts, exercise/grammar/tense rules, normalization
node tools/test_normalize.mjs      # focused normalization tests
node tools/test_review.mjs          # spaced-review scheduler tests
node tools/test_diff.mjs            # translation diff tests
node tools/test_render.mjs           # no authoring marker reaches the markup
```

---

## 3. Runtime architecture at a glance

```text
index.html
  │
  ├── css/styles.css                 design system, layout, light/dark themes
  │
  ├── data/words.js                  GENERATED dictionary, 9,527 entries
  ├── data/curriculum.js             AUTHORED curriculum, 78 concepts × 10 exercises
  ├── data/grammar.js                AUTHORED standalone grammar summary
  ├── data/tenses.js                 AUTHORED verb-tense reference cards
  │
  ├── js/normalize.js                exact answer normalization contract
  ├── js/diff.js                     word/character diff for wrong translations
  ├── js/storage.js                  localStorage persistence + fallback
  ├── js/exercise-engine.js          answer evaluation + in-memory lesson sessions
  ├── js/review.js                   spaced-repetition scheduler
  ├── js/views.js                    all HTML rendering functions
  └── js/app.js                      hash router, event wiring, theme, boot
```

All scripts are classic scripts, not ES modules. This is deliberate: `file://` pages can load classic scripts reliably, while ES module imports are subject to browser-specific CORS/file-origin restrictions.

Script load order matters. `views.js` and `app.js` assume the globals below already exist. If you add a data file, load it before `views.js`/`app.js`.

```text
data/words.js
data/curriculum.js
data/grammar.js
data/tenses.js
js/normalize.js
js/diff.js
js/storage.js
js/exercise-engine.js
js/review.js
js/views.js
js/app.js
```

### Global objects

| Global | Created by | Purpose |
|---|---|---|
| `window.GLOBASA_WORDS` | `data/words.js` | Compact dictionary payload |
| `window.GLOBASA_CURRICULUM` | `data/curriculum.js` | Concepts, areas, exercises, `byId`, computed totals |
| `window.GLOBASA_GRAMMAR` | `data/grammar.js` | Standalone grammar summary sections, core rules, and study path |
| `window.GLOBASA_TENSES` | `data/tenses.js` | Standalone verb-tense cards, tables, traps, and practice links |
| `window.GlobasaNormalize` | `js/normalize.js` | Lowercase/punctuation/space normalization |
| `window.GlobasaDiff` | `js/diff.js` | Word/character diff and closest-answer selection |
| `window.GlobasaStorage` | `js/storage.js` | Progress read/write/reset API |
| `window.GlobasaEngine` | `js/exercise-engine.js` | Per-type evaluation and session scoring |
| `window.GlobasaReview` | `js/review.js` | Spaced-review states, queue building, ladder updates |
| `window.GlobasaViews` | `js/views.js` | Screen rendering functions |

Avoid adding more globals unless necessary. A new module can attach one namespaced object, like the existing modules do.

---

## 4. File responsibilities

| File | Responsibility | Safe to edit by hand? |
|---|---|---|
| [index.html](./index.html) | App shell, nav, footer, script order | Yes |
| [globasa.svg](./globasa.svg) | Header logo and SVG favicon | Yes |
| [globasa-1867x2000.png](./globasa-1867x2000.png) | Apple touch icon | Yes |
| [css/styles.css](./css/styles.css) | Design tokens, components, responsive rules | Yes |
| [data/words.js](./data/words.js) | Generated dictionary | **No** — regenerate |
| [data/curriculum.js](./data/curriculum.js) | Authored concepts and exercises | **Yes** — source of truth |
| [data/grammar.js](./data/grammar.js) | Authored standalone grammar summary | **Yes** |
| [data/tenses.js](./data/tenses.js) | Authored verb-tense reference and practice links | **Yes** |
| [js/normalize.js](./js/normalize.js) | Exact answer normalization | Only with tests updated |
| [js/diff.js](./js/diff.js) | Diff for wrong translations | Yes, with `tools/test_diff.mjs` updated |
| [js/storage.js](./js/storage.js) | Progress schema and persistence | Yes, with migration care |
| [js/exercise-engine.js](./js/exercise-engine.js) | Evaluation and scoring | Yes |
| [js/review.js](./js/review.js) | Spaced-review scheduling | Yes, with `tools/test_review.mjs` updated |
| [js/views.js](./js/views.js) | HTML for every screen | Yes |
| [js/app.js](./js/app.js) | Router, state, event delegation, theme | Yes |
| [tools/build_words.py](./tools/build_words.py) | CSV → `data/words.js` | Yes |
| [tools/validate_curriculum.mjs](./tools/validate_curriculum.mjs) | Content/schema validator | Yes |
| [tools/test_normalize.mjs](./tools/test_normalize.mjs) | Normalization tests | Yes |
| [tools/test_review.mjs](./tools/test_review.mjs) | Scheduler tests | Yes |
| [tools/test_diff.mjs](./tools/test_diff.mjs) | Diff tests | Yes |
| [tools/test_render.mjs](./tools/test_render.mjs) | Marker-leak tests for every screen | Yes |

Source material at the repository root:

- `word-list.csv` — official dictionary; input to the generator.
- `ENG_KompletoGramati_mesi8_nyan2026.pdf` — grammar source.
- `ENG_Darsulari.pdf` — beginner lessons source.
- The official *500 maxim pimpan genlexi ji fiko* list — frequency guide for vocabulary-area content.

The PDFs are **not parsed at runtime**. Curriculum content is hand-authored, and the `refs` fields are human-readable citations back to the source material.

---

## 5. Data model

### 5.1 Dictionary: `data/words.js`

Generated by `tools/build_words.py`. Do not edit it by hand; rerun the generator when `word-list.csv` changes.

Payload shape:

```js
window.GLOBASA_WORDS = {
  count: 9527,
  classes: { "n/v": 4010, "v.tr": 1174, ... },   // label -> count
  categories: { root: 3227, derived: 4841, ... },
  entries: [
    ["doste", "n/v", "n: friend, pal, mate", "root"],
    ...
  ]
};
```

Each entry is a compact array, not an object:

| Index | Meaning |
|---|---|
| `0` | Globasa word |
| `1` | Display class label (`n/v`, `v.tr`, `v.intr`, `v.ambi`, `adj/adv`, `pron`, `det`, ...) |
| `2` | English gloss from the CSV, including `n:` / `v.tr:` markers and `_..._` italic hints |
| `3` | Source category (`root`, `derived`, `proper word`, `phrase`, ...) |

The dictionary view filters this array linearly. Only 80 rows render at a time, with a "Show more" button; keep that pattern if you change the table.

About 1,300 glosses carry the CSV's italic markup for disambiguation hints — `pen (_writing utensil_)`, `swallow (_bird_), martin, _Hirundinidae_`. Render glosses with `Views.gloss()`, never raw `esc()`: it escapes first, then turns each `_pair_` into `<em>`. Both the table (`Views.dictionaryResults`) and the floating widget (`Views.dictionaryWidget`) use it, and `.dict-gloss em` / `.dw-gloss em` give the hint a softer colour. Filtering and ranking still run against the raw string, so searching `writing utensil` keeps working. Never let CSV text reach `innerHTML` unescaped; `gloss()` escapes before adding its own tags.

`CLASS_LABELS` in `tools/build_words.py` maps CSV class codes (including `b.oj`, `b.oro.hisi`, `tabel: pn`, etc.) to display labels. Unknown codes fall back to the raw code, so adding a new CSV class does not crash the app, but it will look untranslated until you add a mapping.

### 5.2 Curriculum: `data/curriculum.js`

This file is a JSON assignment wrapped in JavaScript. It is the authored source of truth for all lessons. It has this shape:

```js
window.GLOBASA_CURRICULUM = {
  version: 1,
  areas: [
    { id: "word-classes", title: "Word categorization", blurb: "..." },
    ...
  ],
  concepts: [
    { /* concept object, see below */ },
    ...
  ]
};

// Rebuilt at load time:
window.GLOBASA_CURRICULUM.byId = {};              // concept id -> concept
window.GLOBASA_CURRICULUM.totals = {
  concepts: ...,                                  // computed from concepts.length
  exercises: ...                                  // computed from every concept
};
```

Do **not** add a static `totals` or `byId` inside the JSON payload. They are computed in the bootstrap at the bottom of the file so adding/removing concepts updates the app automatically.

Edit only the `areas` and `concepts` arrays above the bootstrap block. Keep valid JSON syntax (no comments, no trailing commas inside the JSON object). `node --check data/curriculum.js` catches JavaScript syntax errors.

### 5.3 Area object

```json
{
  "id": "relatives",
  "title": "Relative clauses",
  "blurb": "hu, resumptive da, dasu, and correlative adverbs."
}
```

- `id` is used by `concept.area` and by the CSS class `area-<id>`.
- Areas render in the order they appear in the `areas` array.
- A new area appears automatically on the dashboard; its concept count and exercise count are computed.
- Optional styling: add `.area-yourid { --area-accent: ...; }` in `css/styles.css`. Without it, the default accent colour is used. That one token drives the card tint, the card border, the progress feel and the `.area-dot`.

### 5.4 Concept (lesson) object

A concept is one lesson card, one lesson page, and one 10-exercise run.

```json
{
  "id": "syn-svo",
  "area": "syntax",
  "title": "Strict SVO order",
  "blurb": "The unmarked sentence is Subject–Verb–Object...",
  "refs": ["Grammar pp. 73–74", "Lessons 4–8"],
  "notes": [
    "Default order: Subject + Verb + Object + other phrases.",
    "The direct object follows the verb with no preposition."
  ],
  "examples": [
    ["Patre mwa matre.", "The father kisses the mother."],
    ["Patre el matre mwa.", "The father kisses the mother. (S-O-V, marked)"]
  ],
  "exercises": [
    { /* exactly 10 exercise objects */ }
  ]
}
```

Fields:

| Field | Required | Notes |
|---|---|---|
| `id` | yes | Unique kebab-case id. Used in URLs, storage keys, and exercise id prefixes. |
| `area` | yes | Must match an `areas[].id`. |
| `title` | yes | Dashboard card and lesson heading. |
| `blurb` | yes | Short description on the card and lesson header. |
| `refs` | yes | At least one display chip; cite grammar pages/lesson numbers. |
| `notes` | yes | At least two bullet points. Rendered as `<li>` text. |
| `examples` | yes | At least two `[Globasa, English]` pairs. |
| `exercises` | yes | **Exactly 10** exercise objects. |

`concepts` order controls dashboard order inside each area and the "continue" fallback. Keep related concepts together.

### 5.5 Exercise objects

There are three types. Every exercise needs a unique `id` and a non-empty `explanation`. Prompts must be globally unique (the validator rejects duplicates).

#### Multiple choice (`mcq`)

```json
{
  "id": "syn-svo-1",
  "type": "mcq",
  "prompt": "How do the two sentences differ in meaning?",
  "passage": "Patre mwa matre. Matre mwa patre.",
  "options": [
    "The first says the father kisses the mother; the second says the mother kisses the father.",
    "Both sentences mean the same thing because Globasa has free word order.",
    "The first is passive and the second is active.",
    "The second is ungrammatical because matre cannot be a subject.",
    "The first has no direct object."
  ],
  "correct": 0,
  "explanation": "With the same verb and no el, changing the positions of patre and matre changes who kisses whom."
}
```

Rules enforced by the validator:

- Exactly **5** options.
- Options must be unique, non-empty, and full sentences: terminal `.`, `!`, or `?`, at least two words.
- `correct` is an integer `0..4`. It is the index into the stored `options` array, not the on-screen position: the UI shuffles options per session and submits the original index, so answers stay correct regardless of display order.
- The options should be plausible distractors, not random words. For grammar drills, use wrong order, wrong word class, missing `da`, wrong correlative, etc.
- At least one MCQ per concept must have a `passage` longer than 20 characters and an interpretive question. The UI shows the passage above the prompt. `passage` may be omitted or `null` for the others.

The design intent is CSAT/ENEM-style interpretation: ask what a short Globasa text means or implies, rather than only "which word is a noun?". Vocabulary/classification MCQs are allowed, but every concept must include at least one passage item.

#### Translation (`translate`)

```json
{
  "id": "syn-svo-6",
  "type": "translate",
  "direction": "en-gl",
  "prompt": "Translate into Globasa: The father kissed the mother.",
  "answer": "Patre le mwa matre.",
  "accept": [],
  "explanation": "Subject patre, verb mwa with past le, object matre."
}
```

- `direction` is `"en-gl"` or `"gl-en"`.
- `answer` is the canonical target.
- `accept` is optional and contains **true equivalents only**. Each alternative is normalized with the same contract as the answer.
- Do not add an alternative that normalizes to the canonical answer; the validator warns about it because it adds no value.
- The prompt should contain the sentence to translate. The UI adds a direction chip and a textarea.

#### Fill in the blank (`fill`)

```json
{
  "id": "syn-copula-9",
  "type": "fill",
  "prompt": "Uma ___ perfetomo ___.",
  "gloss": "The horse is perfectly black.",
  "blanks": [
    { "answer": "sen", "accept": [] },
    { "answer": "syahe", "accept": [] }
  ],
  "explanation": "Sen is the copula; syahe is the adjective complement."
}
```

- Every `___` in `prompt` must have a corresponding entry in `blanks`, in order.
- One or more blanks are allowed. The UI renders an input for each blank inline.
- Each blank can have its own `accept` alternatives.
- All blanks must be correct for the exercise to score.
- `gloss` is the English meaning of the completed sentence. The UI shows it above the fill line, labelled **English**, and changes the instruction to "Complete the sentence so that it means the English line above." Add it whenever the prompt is a Globasa sentence; pure-English meta prompts (for example "The letter ___ is pronounced …") can omit it.

### 5.6 Curriculum invariants (important)

`tools/validate_curriculum.mjs` enforces:

- Exactly **10 exercises per concept**.
- Unique concept ids, unique exercise ids, unique prompts globally.
- Every concept belongs to a known area.
- Every concept has at least 2 notes, 2 examples, and 1 ref.
- Every concept has at least 3 MCQs and at least 3 production exercises (translation + fill).
- Every concept has at least one passage-based MCQ.
- Every MCQ has 5 unique options and a valid `correct` index.
- Options must **not** restate the question. Two shapes are allowed:
  - **Interpretive items** (any MCQ with a `passage`): five full-sentence readings of the passage, each ending in terminal punctuation. This is the reading-comprehension format.
  - **Recall items**: the answer forms themselves — a letter (`c`), a word (`imi`), a phrase (`hu mi le kari da`), or a series (`moyto, moyte, moyloka, moywatu`). No "The pronoun imi means 'we'." scaffolding, because the question already says what is being asked.
- Every fill prompt has matching blank count and non-empty answers.
- Every translation has a valid direction and a non-empty answer.
- At least one multi-blank fill exists in the curriculum.
- The dictionary has 9,527 entries.
- The created curriculum contains exactly 78 concepts and 780 exercises (the explicit total guard in the validator).
- Every area id is unique and every area has at least one concept.
- Reading lessons satisfy the additional provenance checks in §5.7.
- The normalization contract still passes its fixed cases.

If you add a lesson, satisfy all of these before considering it done.

### 5.7 Reading lessons: *Thirty Short Stories in Globasa*

The `reading` area is a distinct content layer built from *Thirty Short Stories in Globasa* ([more-resources-2/Thirty Short Stories in Globasa.md](./more-resources-2/Thirty%20Short%20Stories%20in%20Globasa.md)). The file contains 30 stories plus an author preface, with 930 aligned Globasa/English sentence pairs. The preface (story 0) is not taught.

- **One concept per story**, 30 concepts × 10 exercises = 300 exercises.
- Concept ids encode the source story: `read-s01-balutajozi`, `read-s22-okonenabil-piu`, …, `read-s11-kacupa-ji-piu`. The **concept order** is difficulty order (short, simple narratives first; long, dialogue-heavy stories last), not story order. `refs[0]` must cite `Thirty Short Stories — Story N`.
- **Exercise blueprint** (enforced): 4 interpretive MCQs with a verbatim passage, 1 vocabulary-in-context MCQ, 2 `gl-en` translations, 1 `en-gl` translation, 2 fills.
- **Passages** are exact contiguous runs of one to three story sentences, 25–220 characters, copied without edits. They are pure Globasa, so they carry no `{{…}}` markers.
- **Fills** use a verbatim story sentence with `___` blanks; the canonical answers substituted back into the prompt must reproduce a story sentence. `gloss` is the published English line.
- **Translations** use whole published sentence pairs. `gl-en` answers must equal a published English line and the prompt must quote its Globasa source; `en-gl` answers must equal a published Globasa line and the prompt must quote its English source. Alternatives belong in `accept` only when genuinely equivalent.
- **Vocabulary items** quote the word under test in `{{…}}`; the validator requires it to occur in the cited story.
- The validator parses the markdown source on every run. If a story is edited, the affected passages, fills, or translation answers must be updated in the same change.
- Passages are short excerpts, never whole stories. Keep the source citation in `refs`.

To add a story lesson: add the story to the source file, add a `read-sNN-…` concept with the blueprint above, and run `node tools/validate_curriculum.mjs`. Update the expected concept/exercise totals in the validator and the prose counts in this file and the README.

### 5.8 Grammar summary: `data/grammar.js`

The standalone study page at `#/grammar` is rendered from a separate authored data file, [data/grammar.js](./data/grammar.js). It is intentionally not part of `curriculum.js`: the grammar page is reference prose, while concepts and exercises are scored content.

Shape:

```js
window.GLOBASA_GRAMMAR = {
  title: "Globasa Grammar in Brief",
  subtitle: "...",
  intro: "...",
  coreRules: [
    { title: "...", text: "...", example: ["Globasa example.", "English."] }
  ],
  sections: [
    {
      id: "sounds",
      title: "Sounds, spelling, and stress",
      source: "Grammar pp. 2–11",
      lead: "One-paragraph introduction.",
      rules: [
        { title: "...", text: "...", examples: [["Globasa.", "English."]] }
      ],
      tables: [
        { title: "...", head: ["A", "B"], rows: [["x", "y"]], note: "Optional note." }
      ],
      notes: ["Optional bullet."],
      links: [{ label: "Open another study page", href: "#/tenses" }]
    }
  ],
  studyPlan: {
    title: "A seven-step study path",
    intro: "...",
    steps: [
      { title: "1. ...", text: "...", concepts: ["bas-alphabet"] }
    ]
  }
};
```

Renderer: `Views.grammar()` in [js/views.js](./js/views.js). It generates:

- the hero,
- a sticky table of contents using `data-scroll` links (not `#id` links, because those would collide with hash routing),
- the core-rule cards,
- each section's rules, tables, notes, and optional study-page links,
- the study plan with links to the referenced concept ids.

Editing rules:

- Use `**bold**` and `` `code` `` for inline emphasis; `inlineFormat()` escapes the text first, then applies those two patterns. Do not inject raw HTML.
- Table cells are strings; the renderer escapes and formats them the same way.
- `source` should cite the supplied grammar page range or lesson.
- `studyPlan.steps[].concepts` must contain valid concept ids; the validator rejects unknown ids, and the renderer omits them defensively.
- The page is not scored and has no localStorage state.
- The page exposes no print/PDF action. Print styles remain for users who invoke the browser print command directly; keep navigation and the TOC hidden if you edit them.

### 5.9 Verb-tense study page: `data/tenses.js`

The study page at `#/tenses` is a second authored reference layer. It is separate from `curriculum.js` for the same reason as the grammar summary: the page teaches the tense system, while the linked `tenses` concepts provide scored drills.

Shape:

```js
window.GLOBASA_TENSES = {
  title: "Verb tenses",
  subtitle: "...",
  intro: "...",
  principles: [
    { title: "...", text: "..." }
  ],
  groups: [
    {
      id: "simple",
      title: "Simple tenses",
      lead: "...",
      cards: [
        {
          id: "general-past",
          name: "General past",
          marker: "le",
          formula: "S + le + V + O",
          summary: "...",
          detail: "...",
          examples: [["Mi le doxo gazeta.", "I read the newspaper."]],
          watch: "...",
          practice: "tense-simple"
        }
      ]
    }
  ],
  order: { title: "...", lead: "...", head: ["Position", "Element", "Example"], rows: [["1", "...", "..."]], note: "..." },
  choosing: { title: "...", lead: "...", head: ["English cue", "Globasa pattern", "Example"], rows: [["...", "...", "..."]] },
  traps: ["..."],
  practice: { title: "...", lead: "...", conceptIds: ["tense-simple", "tense-aspect", "tense-compound"] }
};
```

Renderer: `Views.tenses()` in [js/views.js](./js/views.js). It produces:

- a hero,
- a data-driven TOC using `data-scroll` links,
- the three principle cards,
- one card per tense under the `groups`,
- word-order and tense-choice tables,
- common traps,
- practice cards whose counts and best scores come from `Storage`.

Editing rules:

- Each card represents **one tense**. Keep `marker`, `formula`, `summary`, `detail`, `examples`, and `watch` populated; the validator rejects incomplete cards.
- `practice` must be a valid concept id. The card's "Practise this pattern" link points to that lesson; it does not run a separate engine.
- `practice.conceptIds` must all belong to the `tenses` area. The practice cards are rendered from those concepts, so adding a fourth tense lesson automatically adds a practice card.
- The page is not separately scored. Scores shown on the practice cards are the ordinary concept records in `localStorage`.
- Use the same inline formatting as `data/grammar.js`: `**bold**` and backtick code only. Do not inject raw HTML.
- Print styles hide the topbar, TOC, buttons, and footer. Keep `.tense-card` in the print rules when changing the layout, even though the page has no print/PDF button.

---

## 6. Boot and routing

### 6.1 Boot sequence

`index.html` loads the scripts at the end of `<body>`. `js/app.js` then:

1. Reads `GLOBASA_CURRICULUM`, `GlobasaViews`, `GlobasaStorage`, `GlobasaEngine`.
2. Initializes `State`:

   ```js
   {
     session: null,          // in-memory current exercise run
     dict: { query: "", classFilter: "all", categoryFilter: "all", limit: 80 },
     lastHash: null
   }
   ```

3. Applies the saved theme (`auto`, `light`, `dark`) to `<html data-theme="...">`.
4. Renders the current hash route.
5. Registers `hashchange`, form submit, click, input, and change listeners on the `#view` container.
6. Shows a toast if `localStorage` is unavailable.

### 6.2 Hash routes

Hash routing is used so the app works from `file://` without a server rewrite.

| Hash | Screen | Renderer |
|---|---|---|
| `#/` | Dashboard | `Views.dashboard()` |
| `#/lesson/:conceptId` | Lesson overview | `Views.lesson(id)` |
| `#/exercise/:conceptId/:index` | Exercise runner (0-based) | `Views.exercise(id, index, session)` |
| `#/results/:conceptId` | Results | `Views.results(id, session)` |
| `#/grammar` | Standalone grammar summary | `Views.grammar()` |
| `#/tenses` | Verb-tense study page | `Views.tenses()` |
| `#/dictionary` | Dictionary browser | `Views.dictionary(state)` |
| `#/reference` | Quick reference tables | `Views.reference()` |
| anything else | Not found | `Views.notFound()` |

`parseRoute()` in `app.js` is the single place to add a new route. `renderRoute()` chooses the view function and sets `document.title`.

### 6.3 Rendering model

`views.js` returns HTML strings. There is no virtual DOM and no reactive component tree.

- **Escape any data-derived text** with `Views.esc()` before interpolating it into HTML. Curriculum content is authored/trusted, but dictionary words and glosses come from CSV and should still be escaped. Glosses go through `Views.gloss()` instead, which escapes and then restores the CSV's `_italics_`.
- After a route change, `app.js` sets `view.innerHTML`, scrolls to the top, and focuses the main region.
- Interactive elements use `data-action` attributes. `app.js` handles clicks through one delegated listener:

  | `data-action` | Effect |
  |---|---|
  | `start-lesson` | Create a fresh session and navigate to its index |
  | `next-exercise` | Advance, or finish the lesson on the last exercise |
  | `retry-lesson` | Start a fresh run at exercise 0 |
  | `dict-more` | Increase the dictionary render limit by 80 |
  | `reset-progress` | Confirm and clear all local progress |

- Forms are handled by one delegated `submit` listener. Only the form with `id="answer-form"` is processed.
- Dictionary search/filter updates only `#dict-results` so the input keeps focus; it does not re-render the whole page.
- The floating dictionary widget lives outside `#view` in `index.html`, so it survives route changes and keeps its query while the learner moves between exercises.
- The theme button lives outside `#view` and has its own listener.

### 6.3.1 Floating dictionary widget

Learners can look words up without leaving an exercise. The widget is plain markup in [index.html](./index.html) (an `<aside id="dict-widget">` plus a `<button id="dict-widget-toggle">`), outside `#view`, so it is never re-rendered by the router.

- Visibility: `syncWidgetVisibility(route)` in `app.js` shows the toggle only on `lesson` and `exercise` routes and closes the panel when leaving them.
- Shortcut: `Ctrl`/`⌘` + `/` opens the widget (or focuses its search field) on any question type, including while typing. A plain `/` is always left alone so it can be typed normally. The toggle shows a `Ctrl/⌘ + /` key hint (hidden on small screens) and exposes `aria-keyshortcuts`.
- State: `State.widget = { open, query, returnFocus }`. `setWidgetOpen()` toggles `hidden`, `aria-expanded`, and renders results; on open it remembers the focused element, and on `Escape`/close it restores that element (or the current translation box / first blank), falling back to the toggle for MCQ-only views. Leaving lesson context closes the panel without moving focus.
- Results: `Views.dictionaryWidget(query)` in [js/views.js](./js/views.js) filters `GLOBASA_WORDS.entries` by word, class, or gloss (same fields as the full dictionary page), ranks exact word → word prefix → gloss exact → gloss word → word substring → gloss substring, and renders up to `WIDGET_LIMIT` (30) rows.
- Row layout: Globasa word (large serif) with the word class pill, then the English gloss in smaller muted text. No table, no category column — this is a sideline lookup, not the full dictionary.
- Styling: `.dict-widget*` and `.dw-*` in `css/styles.css`. The panel is fixed bottom-right on desktop, full-width above the toggle under 700px, and hidden in print.
- No localStorage: the query resets on reload, and opening the widget has no effect on progress.

### 6.3.2 Keyboard answering

The exercise runner is fully operable without a mouse. Shortcuts are handled by one `document` keydown listener in `app.js` and only act on `exercise` routes:

| Key | Effect |
|---|---|
| `1`–`5` | Select the option at that on-screen position (the same number shown in `.option-key` badges). Ignored while typing in a text field and after submitting. |
| `Enter` | Submit the answer; after feedback, advance to the next exercise or the results screen. |
| `Ctrl`/`⌘` + `Enter` | Submit a translation without inserting a newline. Plain `Enter` in the textarea keeps its normal newline behaviour. |
| `Ctrl`/`⌘` + `/` | Open the in-lesson dictionary and focus its search field; press it again to refocus the field. Works on every question type, including inside text fields, and never interferes with typing a plain `/`. Both modifiers are accepted in code; the visible label is platform-specific (see below). |
| `Esc` | Close the dictionary widget. |

The lesson page (“grammar notes”) binds two keys, again handled before the exercise branch:

| Key | Effect |
|---|---|
| `X` | Start, continue, or retry the lesson — the same action as the primary button (`startLesson`). |
| `Esc` | Back to the dashboard. If the dictionary widget is open, `Esc` closes the widget first. |

Both appear as `.keycap` badges on the header buttons.

The results screen has its own shortcuts, handled by the same listener before the exercise branch:

| Key | Effect |
|---|---|
| `R` | Retry the lesson (`startLesson`), i.e. the primary button. |
| `Esc` | Open the lesson notes (`#/lesson/:id`). |
| `D` | Return to the dashboard (`#/`). |

All three also appear as visible `.keycap` badges inside the buttons and are declared with `aria-keyshortcuts`, so the shortcuts are discoverable without documentation. The branch ignores modified key presses (`Ctrl`/`⌘`/`Alt`), repeated keydowns, and any keystroke typed into a text field.

`Views.shortcutLabel()` decides how that shortcut is written in the UI, so the widget never shows two keyboards at once:

| Detected platform | Label |
|---|---|
| macOS / iOS (`MacIntel`, `macOS`, iPhone, iPad, iPod) | `Ctrl + ⌘ + /` |
| Windows, Linux, ChromeOS, Android | `Ctrl + /` |
| Anything undetected | `Ctrl + ⌘ + /` (Apple style, as the safest default) |

Detection reads `navigator.userAgentData.platform` first, then `navigator.platform`, then the user agent string; Apple is matched before the others so an iPad reporting `MacIntel` stays on the ⌘ label. `applyShortcutLabels()` in `app.js` writes the label into the toggle's `title` and its `.dict-widget-kbd` chip at startup, and `Views.dictionaryWidget()` reuses the same helper for the panel's empty state. `aria-keyshortcuts` stays `Control+/ Meta+/` because both really work.

Implementation notes:

- MCQ options render a numbered badge generated from the *display* index (`order.map(function (optionIndex, displayIndex) ...)`), so badges always match the shuffled presentation and the shortcut keys.
- The native radio is kept for semantics and arrow-key navigation but visually hidden; the badge is the visible selection indicator and is styled by `.is-selected`, `.is-correct`, and `.is-wrong`.
- `focusAnswerControl()` moves the caret into the translation textarea or the first blank input after each render, but never focuses MCQs (which would show a misleading focus ring) and never steals focus from an open dictionary widget.
- The hint beside the buttons (`.key-hint`) states the shortcuts for the current exercise type.

### 6.3.3 Dynamic questions

Off by default. `Storage.setDynamic(true)` is the switch (dashboard → Progress panel), and it is captured **when a session is created**, so a toggle mid-run only applies to the next attempt.

Two authoring shapes live on the exercise as `dyn`:

| Shape | Used for | Runtime behaviour |
|---|---|---|
| `dyn.slots` | fill/translate items whose prompt, gloss and answer share a value | One value per slot is drawn from its pool, then `{name}`, `{name:e}` (English) and `{name:field}` (object slots) are substituted across `prompt`, `passage`, `gloss`, `answer`, `accept`, `blanks`, `options` and `explanation`. |
| `dyn.kind: "definition"` | recall MCQs: "Which pronoun means 'we'?", "Which word means 'never'?" | The pool is `[term|null, option, explanation?]`. A non-null term can be asked; a null term is distractor-only. The chosen entry's option plus the next four become the five options. |

Invariants:

- **`pool[0]` (or the first askable entry) reproduces the authored item byte for byte.** `tmp`-time authoring scripts assert this before writing; keep any new pool in that order so the switch-off text and any future re-authoring stay identical.
- **With the switch off, placeholders are still substituted** — `Engine.instance()` calls the internal `defaults()` helper, which resolves every slot to `pool[0]`. Authored slot items therefore keep `{name}` placeholders in their source text (never in what the learner sees), and `Views`/`evaluate` must keep going through `Engine.instance()` rather than reading the raw exercise.
- **Author `explanation` with the same placeholders.** A hard-coded gloss ("Bax means 'under'") becomes wrong as soon as a slot rotates; write `The word {prep:g} means '{prep:e}'.` and avoid starting with a placeholder, since substitution does not capitalise.
- **Seeding**: `conceptId + ":" + exerciseId + ":" + session.run`, hashed with FNV-1a. Same attempt → same variant, reload included; the next run increments `run` and re-rolls.
- **One instance per exercise per attempt**, cached in `session.variants`. `Views.exercise()` renders it and `submitAnswer()` evaluates the same object, so the checked answer can never belong to a different variant. Never re-materialise inside the evaluator.
- **Definition pools must be unambiguous**: a term's four neighbouring options may not satisfy that term. `validate_curriculum.mjs` checks every askable entry for five distinct options, unique terms, and no unresolved placeholder in the default prompt, gloss, answer or blank.
- Object slots (`{g, e, poss, cap, label}`) exist for coordinated swaps — subject + possessive, or an English noun that differs between the prompt ("ticket") and the gloss ("tickets").

Adding a dynamic item: pick an exercise where the swap cannot change the grammar (no agreement in Globasa, so numbers and subjects are safe), append `dyn`, and re-run the validator.

### 6.3.4 Leaving an unfinished run

A run only exists in memory, so leaving it loses the current attempt's score. `app.js` guards that:

- `activeRun()` is truthy only on an exercise route with a session that has at least one recorded answer and is not finished.
- A capture-phase click listener checks `a[href^="#/"]` and asks for confirmation before following a link; declining calls `preventDefault()` and keeps the learner in place.
- The `hashchange` listener applies the same confirmation for history navigation (Back/Forward or manual URL edits). Declining restores `State.lastHash`. Programmatic navigation (`nextExercise`, `startLesson`) sets `State.skipLeaveGuard` so moving between questions in the same run never prompts.
- `beforeunload` asks the browser's own confirmation when reloading or closing the tab mid-run.
- Confirming the leave clears `State.session`, so the attempt is discarded rather than resumed from an arbitrary question. Submitted answers are still recorded per exercise id, as before.

### 6.4 Exercise session lifecycle

`app.js` keeps one active session in `State.session`:

```js
{
  conceptId: "syn-svo",
  index: 0,                 // authored position of the current exercise
  results: { "syn-svo-1": true, ... }, // current run only
  submitted: false,
  feedback: null,            // {correct, expected, details}
  response: ...,             // user's answer for the current item
  finished: false,
  order: ["syn-svo-3", "syn-svo-1", ...], // this run's question order
  optionOrders: { "syn-svo-1": [2, 0, 4, 1, 3] } // shuffled MCQ display per exercise
}
```

Flow:

1. Entering `#/exercise/:id/:index` creates a fresh session if none exists for that concept/index. `Views.lessonOrder()` supplies `session.order`.
2. **Submit** collects the response, calls `Engine.evaluate`, stores feedback, calls `Engine.recordResult`, and re-renders the same route.
3. **Next** picks the next exercise of the run that has no answer yet in `session.results`, walking `session.order` from the current position and wrapping around at the end (`nextUnansweredIndex()`), then clears `submitted`/`feedback`/`response`. Wrapping means a run that starts mid-order still covers all ten items instead of ending short.
4. The run finalizes on the one condition that matters: **all ten exercises have an answer in `session.results`** (`allAnswered()`), which calls `Storage.finishLesson(...)` once, guarded by `session.finished`. `nextExercise()` sends the user to `#/results/:id` when no unanswered exercise remains. Never compare `session.index` to `exercises.length - 1` (authored order) or to a position in `session.order`: with shuffled runs the entry point varies, and the old position check silently recorded partial scores such as 6/10 after a retry.
5. `startLesson()` **ignores any caller-supplied index**: it builds the order first and opens the run at `order[0]`'s authored index, so Start/Continue/Retry always begin at "Exercise 1 of 10" of the new attempt. Buttons therefore carry only `data-concept`; do not reintroduce `data-index` on them.
6. Reloading mid-run loses the in-memory breakdown, but every submitted answer and the lesson score have already been written to `localStorage`.

### 6.5 Question order

URLs and storage stay keyed by the authored exercise index and id; only the *sequence* is rotated.

- `typeBlocks()` groups the exercises by `type` in authored appearance order (currently MCQ → translate → fill).
- `lessonOrder(concept, attempt)` shuffles each block independently and concatenates them, so the recognition → production ramp is preserved while positions vary.
- The shuffle is seeded from `hashSeed(conceptId + ":" + record.runs)`. It is therefore deterministic: the lesson map, the exercise header ("Exercise n of 10"), the progress bar, and the run sequence always agree, and the order is stable across page reloads.
- `Storage.finishLesson()` increments `runs`, so the next attempt automatically gets a new order. There is no extra storage field to migrate, and resetting progress also resets the order.
- `Views.lessonOrder()` returns ids; `Views.sessionOrder()` prefers the snapshot in `session.order` so the running attempt never reshuffles mid-run (for example after the final submission increments `runs`).
- A run is always ten questions. `startLesson()` opens at position 1 of the order, and `nextUnansweredIndex()` wraps to any exercise still unanswered, so entering from a deep link or the exercise map cannot produce a short run. The "See results" label is derived from the remaining unanswered set, not from a position.

If you add an exercise type, update `submitAnswer()` in `app.js` to collect the new response shape, and update `Views.exercise()` to render it.

---

## 7. Exercise engine and scoring

`js/exercise-engine.js` exposes:

| Function | Purpose |
|---|---|
| `evaluate(exercise, response)` | Returns `{correct, expected, details}` |
| `expectedFor(exercise)` | Canonical answer for display |
| `createSession(concept, startIndex)` | Fresh in-memory run |
| `score(session, concept)` | Number of correct results in the current run |
| `recordResult(session, exercise, correct)` | Stores result and calls `Storage.recordAnswer` |

Per-type evaluation:

- **MCQ**: `Number(response) === exercise.correct`.
- **Translation**: `N.matchesTranslation(response, [answer].concat(accept))` — strict match first, then the tolerant comparison described in §8. `expected` is **not** always the authored answer: `GlobasaDiff.closest()` picks the accepted wording with the smallest edit distance, so the correction shown is the one the learner nearly produced.
- **Fill**: every blank must match its answer or alternatives under the **strict** contract; all-or-nothing for the exercise.

### Wrong-translation diff

Only used on the feedback panel of a wrong translation (`Views.feedbackHtml`). `js/diff.js` produces display segments and `Views` renders them:

1. **Closest candidate** — `GlobasaDiff.closest(response, [answer].concat(accept))` scores each accepted wording with a character edit distance over normalised text, so the correction is the one the learner nearly produced.
2. **Word alignment** — both sentences are split on whitespace and aligned with an LCS over case/punctuation-insensitive word keys; case or punctuation alone never produces a mark.
3. **Character marks** — replaced word pairs are diffed character by character, but only when the two words share at least half their characters; otherwise the whole word is marked, which avoids letter confetti for unrelated words.
4. **Punctuation** is peeled off each word before diffing and re-attached unmarked, because grading ignores it.
5. If nothing at all lines up, the view falls back to the plain "Correct answer" / "Your answer:" pair — a wall of red communicates less than the text itself.

Marks are semantic `<ins>` / `<del>` elements, so screen readers announce them, and all learner text is escaped inside `render()`.

Scoring semantics:

- One point per exercise.
- The **current run's** score is `Object.keys(session.results)` filtered by `true`.
- `Storage.recordAnswer` records the latest attempt's correctness and increments `attempts` for that exercise. This drives the lesson exercise map.
- `Storage.finishLesson` stores `lastScore`, keeps the maximum `bestScore`, increments `runs`, and records `lastRunAt`.
- The tenth answered exercise finalizes the run even if the user never clicks "See results"; `session.finished` prevents double-counting.
- A retry never lowers `bestScore`.
- "Mastered" means `bestScore === 10`.

If you need different scoring (for example, partial credit on multi-blank), change `evaluate` and `score`, and update the results/lesson copy. The current contract is intentionally all-or-nothing.

---

## 8. Answer normalization contract

`js/normalize.js` is the single source of truth for text comparison. Do not duplicate this logic in views or tests.

Algorithm:

1. Convert to string (null/undefined → `""`).
2. Unicode NFC.
3. Lowercase.
4. Remove all Unicode punctuation `\p{P}`.
5. Collapse consecutive whitespace to one space.
6. Trim.

Then compare normalized strings with strict equality.

Examples:

| Input | Normalized |
|---|---|
| `"  NINI DOXO NEO KITABU  "` | `"nini doxo neo kitabu"` |
| `"Don't stop."` | `"dont stop"` |
| `"Mi le doxo, kitabu!"` | `"mi le doxo kitabu"` |
| `"???"` | `""` |

Consequences:

- Case and punctuation are ignored; **word choice and word order are not**.
- Punctuation without adjacent spaces can merge words (`"a,b"` → `"ab"`). Author natural sentences with spaces.
- Do not add fuzzy matching, stemming, or edit-distance matching without changing the product requirement and tests.

### 8.1 Translation tolerance (`relax`)

`matchesTranslation()` (translations only — fills stay strict) accepts the input when the strict forms match **or** when `tolerantMatch()` succeeds. The tolerant comparison works on word lists, in order:

1. **Canonicalisation** (`canonical`) — `CONTRACTIONS` maps the apostrophe-free form (`"dont"`, `"im"`, `"theyre"`, …) to the expanded form, so `"don't"` == `"do not"`; `SPELLINGS` folds UK forms onto US (`colour`→`color`, `travelling`→`traveling`). Only unambiguous mappings are allowed: `"were"`/`"we're"`, `"ill"`/`"I'll"`, `"lets"`/`"let us"` and `"its"`/`"it's"` are deliberately absent because `normalize` erases the apostrophe.
2. **Articles** — `a`, `an`, `the` may be present on either side. If the reference answer uses *both* definite and indefinite articles, definiteness is carrying meaning (subject/object roles), so articles stay mandatory for that item.
3. **Number** — `singularOf()` lets a plural reference accept its singular (`"two books"` ← `"two book"`, `"children"` ← `"child"`). Never the reverse: a learner cannot add number the reference does not have.
4. Everything else is compared word by word with an alignment table, so word order, verb tense and every content word remain significant (`"I live"` ≠ `"I lived"`).

Consequences to keep in mind when authoring:

- Because articles are optional, a learner who reproduces the right content words in the right order is accepted with a different article pattern. That is intentional: the exercise tests comprehension of the Globasa sentence, not English definiteness.
- Nothing extra is needed for `"I do not …"` vs `"I don't …"` or `"two book"` vs `"two books"`; reserve `accept` for genuinely different words (`beneath`/`under`, gendered pronouns).
- To widen tolerance further, add to `CONTRACTIONS`/`SPELLINGS`/`IRREGULAR_PLURALS` — never add stemming or edit distance.

Tests live in [tools/test_normalize.mjs](./tools/test_normalize.mjs); the curriculum validator re-checks a representative subset of both the strict and the tolerant contract. If you intentionally change the contract, update both.

---

## 9. Persistence

`js/storage.js` uses one key:

```text
globasa.progress.v1
```

Shape:

```json
{
  "version": 1,
  "concepts": {
    "syn-svo": {
      "answers": {
        "syn-svo-1": {
          "correct": true,
          "attempts": 1,
          "updatedAt": "2026-11-12T21:00:00.000Z"
        }
      },
      "bestScore": 10,
      "lastScore": 7,
      "runs": 2,
      "lastRunAt": "2026-11-12T21:00:00.000Z",
      "review": {
        "intervalIndex": 2,
        "due": "2026-11-19T21:00:00.000Z",
        "lastReviewedAt": "2026-11-12T21:00:00.000Z",
        "lapses": 0,
        "reps": 3
      }
    }
  },
  "lastConcept": "syn-svo",
  "settings": { "theme": "auto", "dynamic": false }
}
```

API:

| Method | Behaviour |
|---|---|
| `getState()` | Read (and lazily migrate) the stored state |
| `getConcept(id)` | Sanitized concept record or `null` |
| `recordAnswer(conceptId, exerciseId, correct)` | Update last answer and attempt count |
| `finishLesson(conceptId, score, total)` | Update last/best score, run count |
| `setLastConcept(id)` | Set continue-card target |
| `setReview(id, review)` | Write the spaced-review schedule for a lesson |
| `getTheme()` / `setTheme(theme)` | `auto`, `light`, `dark` |
| `reset()` | Clear all progress and reset settings to `auto` |
| `exportState()` | Deep copy for debugging/export |
| `isAvailable()` | False if localStorage access failed |

Fallback behaviour: if `localStorage` throws (private mode, restricted file origin), the module keeps an in-memory state so the app remains usable for the session; the boot code shows a toast that progress cannot be saved.

### Changing the schema safely

- Prefer adding optional fields over renaming existing ones.
- `migrate()` in `storage.js` is the place to upgrade old `concepts` records.
- If IDs change, existing `answers` keys become orphaned. Add a migration that maps old concept/exercise IDs, or accept that users lose that history.
- If you need a breaking change, consider a new key (`globasa.progress.v2`) and a migration from v1.
- Keep the storage key and version in sync with the documentation and `Storage` state.

### Known behaviour

- A run is in memory only. Reloading mid-lesson loses the current run breakdown, but all submitted answers and scores persist.
- Directly opening `#/results/:id` with no active/saved run shows "No run yet" instead of a fake zero.
- The reset button uses `window.confirm`; replace with a modal if you need a richer flow, but keep a confirmation step.
- `review` is absent until a lesson is mastered; `migrate()` copies whole concept records, so it survives upgrades and old records stay valid.

---

## 9b. Spaced review

`js/review.js` owns the scheduler. It never touches the DOM; it reads `Storage`, decides what to ask, and writes the new `review` block for each lesson.

### States

A lesson is in exactly one state, derived from its record on every render (nothing is cached):

| State | Condition | Enters the queue? |
|---|---|---|
| `new` | no answers and no score | No |
| `learning` | answered at least once, `bestScore < 10` | Yes — always eligible, weakest first |
| `due` | `bestScore === 10` and no schedule, or `review.due <= now` | Yes — most overdue first |
| `scheduled` | `bestScore === 10` and `review.due > now` | Only as a top-up when the run is short |

### Ladder

```js
LADDER = [1, 3, 7, 16, 35, 75];   // days
```

- A lesson enters at rung 0 (due tomorrow) the first time a run scores **10/10**. Partial runs never schedule anything (`Review.onLessonFinished`).
- A due lesson that answers every pooled question correctly moves up one rung and is due again after `LADDER[rung]` days.
- Any miss moves it **down one rung** and makes it due tomorrow, whatever rung it fell to (`lapses` counts these).
- The top rung repeats: 75 days is the ceiling, so a well-known lesson is still revisited twice a year.

### Building a run

`Review.buildQueue(concepts, now)`:

1. Split started lessons into `learning` and `due` pools (see states above).
2. `learning` sorts by `bestScore` ascending, then by longest since `lastRunAt`.
3. `due` sorts by `due` ascending, so the longest-waiting lesson is always asked.
4. Take up to **12** questions from `learning` and up to **8** from `due` (`BUDGET`).
5. Within a pool, questions are taken **breadth first**: one per lesson, then a second, up to `QUOTA` (4 for learning, 3 for mastered). A short queue then keeps digging into the same lessons.
6. If the run is still short, the mastered half may exceed 8, then lessons that are `scheduled` (not yet due) are borrowed.
7. Shuffle the whole queue.

Question order inside a lesson comes from `Review.rankExercises`, which weights:

- last answer wrong → +120
- never answered → +80
- attempts ×4 (capped at 5 attempts)
- days since last answer ×1.5 (capped at 60 days)
- answered within the last day → −25
- plus `Math.random() * 25`, so consecutive runs do not ask the same three questions

They hybrid is why per-exercise answers are stored: the *lesson* decides when to review, the *question* weighting decides which questions represent it.

### Running and scoring

A review run reuses the entire exercise pipeline by becoming a synthetic concept:

- `Review.buildConcept(queue)` returns `{id: "__review", review: true, exercises: [...]}`, where each exercise is a shallow copy of the authored one plus `reviewSource` and `reviewSourceTitle`.
- `app.js` stores it as `session.concept`, and `conceptFor()` / `Views.concept()` resolve `__review` through the session. Nothing is written to `data/curriculum.js`.
- `Engine.recordResult` writes the answer under `exercise.reviewSource`, so per-exercise statistics stay with the real lesson.
- Progress labels ("Exercise 3 of 20") and the progress bar reuse `session.order`, which is the queue order.
- When every question is answered, `finishRun()` calls `Review.applyResults()` instead of `Storage.finishLesson()`: a lesson passed only if **all** questions asked from it were correct, then the ladder is applied per lesson and the results screen lists one row per lesson.

A review queue lives only in memory. Reloading or opening a deep link to `#/exercise/__review/:n` renders `Views.reviewExpired()`; submitted answers and the schedule are already saved.

### UI surfaces

- Dashboard `review-card`: due count, mix explanation, ladder legend, and the start button (`data-action="start-review"`).
- Lesson cards: `review due` / `review in N days` chip once mastered.
- Lesson page and lesson results: the same chip, plus a line in the Scoring panel.
- Review results: per-lesson outcome (`next in N days`, `retry tomorrow`, `still learning`).

### Changing the algorithm

| Goal | Where |
|---|---|
| Different intervals | `LADDER` in [js/review.js](./js/review.js) |
| Different session size or mix | `BUDGET`, `QUOTA` |
| Which questions represent a lesson | `weight()` |
| Which lessons are eligible | `status()` and `candidates()` |
| Pass/fail at lesson level | `applyResults()` |

`tools/test_review.mjs` locks the ladder, the state machine, queue composition, ranking and outcome application with an in-memory storage stub. Run it after any change.

---

## 10. Adding a new lesson/concept

This is the most common change. Follow this checklist.

### Step 1 — Choose the concept identity

- Pick a kebab-case `id`, for example `rel-free-choice`.
- Pick an existing `area` (`word-classes`, `syntax`, `tenses`, `relatives`, `correlatives`, `foundations`, `vocabulary`, `nuances`, `reading`) or add a new area (see Section 11).
- Keep the id stable once learners have progress; it is part of the storage keys and exercise ids.

### Step 2 — Write the teaching material

- `title` and `blurb` for the card/header.
- 2–5 `notes` that explain the rule directly. Avoid duplicating an entire grammar chapter.
- 2–4 `examples`, each `[Globasa, English]`. `examples[0]` is a full Globasa line, so it is never marked; the English side may be.
- Wrap every Globasa word quoted inside English notes, prompts, options and explanations in `{{…}}` — see [§16.1](#161-globasa-inside-english-prose). The validator rejects unbalanced markers.
- `refs` pointing to the supplied grammar/lesson sources, e.g. `"Grammar pp. 68–69"` or `"Lesson 20"`.

### Step 3 — Add exactly 10 exercises

Recommended distribution, matching the existing curriculum:

- **5 MCQs** (at least one with a `passage` and interpretive question).
- **3 translations** (mix `en-gl` and `gl-en`).
- **2 fills** (at least one may have two blanks).

The validator only requires ≥3 MCQs and ≥3 production exercises, but keeping the 5/3/2 rhythm makes the lesson consistent with the rest of the app.

Exercise ids should use the concept id prefix plus `-1` … `-10`. The validator warns if not, but uniqueness is what actually matters.

### Step 4 — Insert the concept object

In [data/curriculum.js](./data/curriculum.js), add the concept object to the end of the `concepts` array (or next to related concepts), before the closing `]`. Keep valid JSON syntax.

Minimal skeleton:

```json
{
  "id": "your-concept",
  "area": "syntax",
  "title": "Your concept title",
  "blurb": "One or two sentences for the dashboard card.",
  "refs": ["Grammar p. 00", "Lesson 00"],
  "notes": [
    "First rule, quoting the form it is about: {{na}} + verb.",
    "Second rule or contrast with English, e.g. {{sen}} is required."
  ],
  "examples": [
    ["Globasa example.", "English translation."],
    ["Another Globasa example.", "Another English translation."]
  ],
  "exercises": [
    {
      "id": "your-concept-1",
      "type": "mcq",
      "prompt": "What does the passage imply?",
      "passage": "Short Globasa passage. Another sentence.",
      "options": [
        "First option.",
        "Second option.",
        "Third option.",
        "Fourth option.",
        "Fifth option."
      ],
      "correct": 0,
      "explanation": "Why option 1 is right and the idea being tested."
    },
    {
      "id": "your-concept-2",
      "type": "mcq",
      "prompt": "Which sentence is grammatical?",
      "options": [
        "Sentence one.",
        "Sentence two.",
        "Sentence three.",
        "Sentence four.",
        "Sentence five."
      ],
      "correct": 2,
      "explanation": "Rule-based explanation."
    },
    {
      "id": "your-concept-3",
      "type": "mcq",
      "prompt": "Which form fits?",
      "options": [
        "Sentence one.",
        "Sentence two.",
        "Sentence three.",
        "Sentence four.",
        "Sentence five."
      ],
      "correct": 1,
      "explanation": "Explanation."
    },
    {
      "id": "your-concept-4",
      "type": "mcq",
      "prompt": "Which analysis of the sentence is correct?",
      "options": [
        "Sentence one.",
        "Sentence two.",
        "Sentence three.",
        "Sentence four.",
        "Sentence five."
      ],
      "correct": 3,
      "explanation": "Explanation."
    },
    {
      "id": "your-concept-5",
      "type": "mcq",
      "prompt": "Which translation is correct?",
      "options": [
        "Sentence one.",
        "Sentence two.",
        "Sentence three.",
        "Sentence four.",
        "Sentence five."
      ],
      "correct": 0,
      "explanation": "Explanation."
    },
    {
      "id": "your-concept-6",
      "type": "translate",
      "direction": "en-gl",
      "prompt": "Translate into Globasa: An English sentence to translate.",
      "answer": "Globasa answer.",
      "accept": [],
      "explanation": "Why this wording is correct."
    },
    {
      "id": "your-concept-7",
      "type": "translate",
      "direction": "gl-en",
      "prompt": "Translate into English: Globasa sentence.",
      "answer": "English answer.",
      "accept": [],
      "explanation": "Why this wording is correct."
    },
    {
      "id": "your-concept-8",
      "type": "translate",
      "direction": "en-gl",
      "prompt": "Translate into Globasa: Another English sentence.",
      "answer": "Globasa answer.",
      "accept": [],
      "explanation": "Why this wording is correct."
    },
    {
      "id": "your-concept-9",
      "type": "fill",
      "prompt": "Globasa sentence with ___ blank.",
      "blanks": [
        { "answer": "missing", "accept": [] }
      ],
      "explanation": "Why the missing form is required."
    },
    {
      "id": "your-concept-10",
      "type": "fill",
      "prompt": "Globasa sentence with ___ and ___ blanks.",
      "blanks": [
        { "answer": "first", "accept": [] },
        { "answer": "second", "accept": [] }
      ],
      "explanation": "Why both forms are required."
    }
  ]
}
```

### Step 5 — Validate

```bash
node --check data/curriculum.js
node tools/validate_curriculum.mjs
```

Fix all errors. Warnings should be reviewed, not blindly ignored. In particular, "accepted alternative normalizes to the answer" means the alternative is redundant.

### Step 6 — Test in the browser

1. Open `index.html` (or the local server).
2. Confirm the card appears in the right area with 10 exercises.
3. Open the lesson; check notes, examples, chips, and exercise map.
4. Submit one MCQ, one translation, and one fill (including a multi-blank one if you added it).
5. Confirm feedback, explanation, Next, results, and persistence after reload.
6. Check the dashboard totals update automatically.

### Step 7 — Update documentation counts if needed

- `C.totals` is computed, and the dashboard/hero read from it.
- [README.md](./README.md) contains human-readable counts (78 concepts, 780 exercises). Update that prose if the totals change.
- `package`/build files do not exist, so there is no version bump step.

---

## 11. Adding a new area

1. Append an area object to `areas` in `data/curriculum.js`:

   ```json
   { "id": "pronunciation", "title": "Pronunciation", "blurb": "Sounds, stress, and spelling." }
   ```

2. Set `"area": "pronunciation"` on the concepts that belong to it.
3. The dashboard groups concepts by `area` automatically and computes counts. The area order is the `areas` array order.
4. Optional: give it an accent colour in `css/styles.css`:

   ```css
   .area-pronunciation { --area-accent: #7c3aed; }
   ```

   If the colour is dark, add a `[data-theme="dark"] .area-pronunciation { --area-accent: ...; }` override with a lighter shade; the card tint is mixed into the card surface, so a dark accent on the dark theme disappears.

5. If the new area should be treated as a priority difficulty area, update the README weighting prose; the code does not hard-code area weights anywhere else.

---

## 12. Editing existing lessons and exercises

### Replacing an exercise

Because every concept must have exactly 10 exercises, **replace** an item rather than appending an 11th. Keep the id stable if possible:

- If you change the content but keep the same id, existing learner answers remain associated with that slot. That may be undesirable if the question changed fundamentally, but it preserves progress continuity.
- If you change the id, old answers for the old id become orphaned in storage. That is acceptable for a content fix, but mention it if learners may care.

### Reordering exercises

The order controls the runner and exercise map. Keep a sensible progression: concept recognition → interpretation → production. Moving items is safe, but note that scores are per current run, not per position.

### Changing a concept id or area

- Renaming a concept id breaks URL bookmarks and storage keys. Add a migration in `storage.js` if progress must survive.
- Moving a concept to another area only changes grouping; no storage effect.

### Changing the number of concepts/exercises

- The product requirement is exactly 10 per concept. The validator enforces it.
- `C.totals` and the dashboard/hero update automatically.
- README prose contains static counts; update it manually.
- If you intentionally change the 10-exercise invariant, update:
  - `tools/validate_curriculum.mjs`
  - `Views.lesson()` copy ("Exercise n of 10", "10 exercises")
  - the dashboard card copy
  - results copy and `score` denominators
  - README and this document

---

## 13. Adding a new exercise type

The engine and UI are deliberately small; a new type touches five places.

1. **Schema/content**: define the new fields in `data/curriculum.js`.
2. **Evaluation**: add a branch to `Engine.evaluate()` in [js/exercise-engine.js](./js/exercise-engine.js) returning `{correct, expected, details}`.
3. **Rendering**: add a branch to `Views.exercise()` in [js/views.js](./js/views.js) for the input UI.
4. **Response collection**: add a branch to `submitAnswer()` in [js/app.js](./js/app.js). It must produce the exact response shape your evaluator expects.
5. **Feedback/validation**: update `feedbackHtml()` if the expected answer is not a string/array of strings, add CSS for the input, and extend `tools/validate_curriculum.mjs` with field checks.

If the new type is not all-or-nothing, update `Engine.score()` and the scoring copy in the lesson/results views. If it needs new storage data, extend the concept record migration.

---

## 14. Adding a new view/route

1. Add a renderer to `window.GlobasaViews` in [js/views.js](./js/views.js). Call `navFor()` if the page belongs to a top-level nav item.
2. Add a branch in `parseRoute()` in [js/app.js](./js/app.js).
3. Add a branch in `renderRoute()` to call the renderer, and set a useful `document.title`.
4. Add a nav link in [index.html](./index.html) with `data-nav="yourview"` if needed.
5. Handle interactions through the existing delegated listeners, or add a narrowly scoped listener. Avoid re-rendering the whole view for a local filter change; see the dictionary implementation for the pattern.
6. Test with `file://` as well as a local server: a new route must not depend on server rewrites.

---

## 15. Dictionary pipeline

`tools/build_words.py` is the only code that reads `word-list.csv`.

What it does:

1. Opens the CSV with `utf-8-sig` (handles BOM).
2. Reads `Word`, `WordClass`, `TranslationEng`, and `Category`.
3. Maps word-class codes to display labels via `CLASS_LABELS`.
4. Handles compound codes (`b.oj; il`), `tabel: pn`, `p xfik`, `p jm`, and similar patterns.
5. Sorts entries case-insensitively.
6. Writes `window.GLOBASA_WORDS = { count, classes, categories, entries }` to `data/words.js`.

When the CSV changes:

```bash
python3 tools/build_words.py
node tools/validate_curriculum.mjs
```

Do not hand-edit `data/words.js`; the next generator run will overwrite it. If a new class label is needed, add it to `CLASS_LABELS` and regenerate. If you add a new language gloss later, extend the compact entry shape and update `Views.dictionary()` and the validator's entry checks together.

The dictionary view intentionally renders only 80 rows at a time. Keep the "Show more" pattern if you add columns or sorting; rendering all 9,527 rows at once is unnecessary work.

---

## 16. Styling, theming, and responsiveness

All styling is in [css/styles.css](./css/styles.css). There are no external fonts, icon packs, or CDN assets; the app must remain usable offline.

- Design tokens are at the top of the file (`--bg`, `--ink`, `--accent`, `--gold`, `--danger`, `--success`, `--radius`, `--shadow`, etc.).
- Dark mode is implemented with `[data-theme="dark"]` overrides. The theme is set on `<html>` by `applyTheme()` / `toggleTheme()` in `app.js`; `Storage` persists `auto`, `light`, or `dark`.
- Layout is CSS Grid with breakpoints at `980px` and `700px`.
- `prefers-reduced-motion` is respected.
- Main components: `.topbar`, `.hero`, `.stats-grid`, `.stat`, `.stat--lessons`, `.stat--exercises`, `.stat--perfect`, `.stat-art`, `.stat-value`, `.stat-total`, `.stat-suffix`, `.stat-label`, `.stat-meter`, `.stat-meter-fill`, `.continue-card`, `.concept-grid`, `.concept-card`, `.progress-score`, `.lesson-header`, `.lesson-grid`, `.panel`, `.exercise-card`, `.options`, `.option`, `.option-key`, `.feedback`, `.results-card`, `.score-ring`, `.dict-table`, `.corr-table`.
- Dashboard stats: `statCard({ label, value, total, suffix, tone, icon })` in [js/views.js](./js/views.js) renders `value/total` plus a decorative `role="progressbar"` meter (with `aria-valuemin/max/now`); `.stat-label` already names the card, so the bar needs no extra text and shows no percentage. Each tone sets `--stat-accent` / `--stat-soft`, which tint the card background, border, total, label and meter fill:
  - `lessons` → `--accent` (teal), icon `book`
  - `exercises` → `--gold`, icon `check`
  - `perfect` → `--indigo`, icon `star`
  The `.stat-art` watermark is one of the inline SVGs in `STAT_ICONS` (no external icon pack), positioned bottom-right at `opacity: .16` — add a new icon by adding a path set there and passing its key. There is deliberately no average-score card; record-level detail lives on each concept card.
- Concept cards show `N of 10 answered` plus `scoreLabel(record)`, which prints `best 8/10`, `no score yet`, or `all answers correct` for a mastered lesson (the numbers are dropped because 10/10 is implied). Keep that helper as the single source of score wording.
- Grammar and tense components: `.grammar-hero`, `.grammar-layout`, `.grammar-toc`, `.grammar-section`, `.grammar-core-card`, `.grammar-rule`, `.grammar-table`, `.study-steps`, `.tense-grid`, `.tense-card`, `.tense-marker`, `.tense-practice-card`. The print block hides navigation and the TOC.
- Each area defines one `--area-accent` token (`.area-word-classes`, `.area-syntax`, …). It tints the concept-card background gradient, the card border (stronger on hover), and the `.area-dot`. Dark-theme overrides exist for the four areas whose accent is a dark hex (`tenses`, `foundations`, `vocabulary`, `nuances`). Without a custom rule the `--accent` fallback applies.
- Concept-card titles are centred (`.concept-card h3 { flex: 1; text-align: center }`) so single-line and wrapped titles share one alignment; the area dot sits at the far left and the status pill at the far right.
- The responsive design favours readable serif headings, system sans body text, and high-contrast feedback.

### 16.1 Globasa inside English prose

Globasa words are set in a different face wherever they appear next to English. The rule is *contrast*, because the app uses both families already:

```css
.gl { font-family: var(--serif); font-style: italic; }        /* in sans prose */
h1 .gl, h2 .gl, h3 .gl, h4 .gl { font-family: var(--sans); }  /* in serif headings */
.example .gl, .grammar-example .gl, .corr-table .gl { font-style: normal; }
```

- `.gl` was already the class for a standalone Globasa line (model sentences, correlative cells, grammar examples). Those lines keep their roman face; only inline citations are italic.
- Backticked words in `data/grammar.js` and `data/tenses.js` are Globasa too, so `code` inside `.grammar-section`/`.tense-card` uses the same citation face with a chip background (the `.tense-formula` code block stays sans because it is a structural formula). Headings follow the same contrast rule — `:is(.grammar-section, .tense-card) :is(h1,h2,h3,h4) code` switches back to sans — and `code .gl` inherits, so a markup combination never fights itself.

#### Marking is explicit, never detected

There is **no runtime language detector**. A dictionary lookup cannot decide the words the two languages share — `in`, `no`, `to`, `a`, `or`, `are`, `be`, `day`, `do`, `mesa`, `bus` — so any lexical guess either styles English or leaves a real Globasa word plain, and neither mistake is fixable from data alone. Authors mark instead:

| Data file | Marker | Rendered as |
|---|---|---|
| `data/curriculum.js` | `{{Globasa}}` | `<span class="gl">Globasa</span>` |
| `data/grammar.js`, `data/tenses.js` | `` `Globasa` `` | `<code>Globasa</code>` in the citation face |

`Views.prose(value)` (in [js/views.js](./js/views.js)) escapes the string and rewrites `{{…}}` into the span; `Views.inlineFormat(value)` adds `**bold**` and backtick handling on top of it. Both are the only way authored text reaches the DOM:

```js
// data/curriculum.js
notes: [
  "{{Na}} + verb forms an infinitive: {{na lala}} = to sing.",
  "Auxiliaries {{abil, ingay}}, and {{musi}} are followed by {{na}} + verb."
]
```

Authoring rules:

- Mark inside prose: lesson `notes`, `intro`/`blurb`, MCQ `prompt`, `explanation`, fill `gloss`/hint lines, and any option that mixes the two languages — only the Globasa words get braces (`Use {{un}} to emphasize singularity`).
- Wrap an option that is **entirely** Globasa in one pair: `"{{Mi suki na lala.}}"`. Set as a whole in the citation face, the option reads as target-language text at a glance, which is exactly the contrast the exercise needs. Labels shorter than a word (single letters in the alphabet lesson, numbers, symbols) stay plain.
- Do not mark: `answer`, `accept`, `blanks`, `passage`, and `examples[0]`/model sentences. Those are separate blocks already set in the language's own type; a marker there only adds noise and would break strict answer matching.
- Mark shared words deliberately. If the English sentence really means the Globasa word, mark it; if it is the English word, leave it (`We go to school`).
- Never mark a whole Globasa sentence that merely *starts* an English line — mark the phrase, not the punctuation around it.

`{{…}}` is also off-limits to the slot mechanism: `GlobasaEngine.fillSlots` splits on `/(\{\{.*?\}\})/` and only substitutes placeholders outside markers, so a marker can never be read as `{prep:g}`. `tools/validate_curriculum.mjs` strips markers (`stripMarkers`) before placeholder, blank-count and full-sentence checks, and `markersOk()` fails the build on unbalanced or nested braces.

When you add a Globasa gloss to English copy, add the markers in the same edit. If the string is entirely Globasa, no marker is needed and adding one is a mistake.

When changing layout, verify:

- 390px wide mobile (no horizontal body overflow; exercise options remain readable).
- Desktop 1280px+ dashboard grids.
- Both light and dark themes.
- Focus rings and keyboard operation.
- Long dictionary glosses and long MCQ options wrap rather than overflow.

---

## 17. Accessibility & UX conventions

- Use semantic landmarks: `header`, `nav`, `main`, `footer`, section headings.
- Keep the `aria-live`/`role="status"` feedback region; it announces correct/incorrect results.
- After submitting, focus moves to `#feedback-panel`; preserve that when changing the exercise markup.
- MCQ options are `<label>` + radio; keep the radio group and `fieldset`/`legend` pattern.
- Fill-in inputs have `aria-label="Blank n"`.
- Provide a meaningful `document.title` per route.
- Do not remove the explicit "Back to lesson" paths; mobile users rely on them.
- Keep the normalization explanation visible in the exercise view and Quick reference page. Learners need to know why an answer was marked wrong.
- When adding copy, use direct instructions and explain the Globasa rule, not just "wrong".

---

## 18. Testing and QA

### Automated / static

```bash
node --check data/curriculum.js
for f in js/*.js data/*.js; do node --check "$f"; done
node tools/validate_curriculum.mjs
node tools/test_normalize.mjs
node tools/test_review.mjs
node tools/test_diff.mjs
node tools/test_render.mjs
```

`validate_curriculum.mjs` is the gate for content changes. It loads the data with Node's `vm`, checks every curriculum invariant, validates the grammar summary sections/tables/study links, validates the tense cards/tables/practice links, and exits non-zero on failure. Do not merge content changes that skip it.

`test_normalize.mjs` protects the exact string-matching contract. If you intentionally change normalization, update this test and the corresponding section of the validator.

`test_render.mjs` renders every page, every lesson, and every exercise twice — unanswered and answered wrong — then fails if `{{…}}` or a backtick survives into the markup. It is the guard for the marker convention in §16.1: a view that escapes authored text with `esc()` instead of `prose()`/`inlineFormat()` shows up here, including inside attributes.

`test_diff.mjs` locks the diff contract: character marks inside replaced words, whole-word marks for unrelated words, punctuation never highlighted, HTML escaping, and closest-answer selection.

`test_review.mjs` runs the scheduler against an in-memory storage stub: ladder movement, the four lesson states, mastery initialisation, queue composition and quotas, question ranking, and per-lesson outcomes. It is the gate for any change to `js/review.js`.

### Browser smoke checklist

1. Open `file:///.../index.html` and confirm the dashboard renders all areas/cards.
2. Complete a full lesson using correct answers; confirm 10/10 and results.
3. Submit a wrong MCQ, wrong translation, and wrong fill; confirm red feedback, correct answer, and explanation.
4. Submit a multi-blank fill; confirm partial mismatch is marked incorrect and both expected answers are shown.
5. Reload after completing a lesson; confirm best score, attempt count, and exercise map persist.
6. Use Reset all progress; confirm all counts return to zero and the continue card disappears.
7. Master a lesson (10/10), confirm the results chip reads "review in 1 day" and the dashboard card counts it. Start a review, answer everything correctly, and confirm the results screen advances that lesson one rung.
8. Open a lesson with mixed notes and confirm Globasa words stand in the citation face while English stays in the body face; open a pure-Globasa prompt and confirm nothing switches.
9. Search the rendered page for `{{` / `}}`; confirm no marker leaks into any screen, and that a marker never appears inside a fill-in blank or an answer.
10. Search the dictionary by English and Globasa; filter by word class and category; load more.
11. Check the correlative Quick reference table for horizontal scroll on mobile.
12. Open **Grammar**; verify the TOC scrolls without changing the hash and the study-plan lesson links work.
13. Open **Tenses**; verify all tense cards render, the TOC jumps without changing the hash, and the practice cards show real progress.
14. Toggle theme and reload; confirm the choice persists.
15. Repeat a few routes from `file://` and from `python3 -m http.server`.

### Adding tests for new content

The validator is schema-driven. If you add a new field or exercise type, add the corresponding invariant there. If you add a deterministic content-generation or transformation script, add a test that checks the output.

---

## 19. Common pitfalls

- **Adding an 11th exercise instead of replacing one.** The validator will fail. Exactly 10 is a product requirement.
- **Changing exercise/concept ids after release.** Stored answers use those ids. Add a migration if history matters.
- **Hand-editing `data/words.js`.** It is generated. Change the CSV or `build_words.py` and regenerate.
- **Adding `fetch()` or ES module imports.** These can fail from `file://`; the app is deliberately classic-script based.
- **Forgetting to escape dictionary text.** Use `Views.esc()` for anything from CSV/user data.
- **Padding MCQ options with the question.** Write the alternatives as the answer forms (`oto`, `bax`, `maxmo bon`) rather than sentences that echo the prompt ("The pronoun oto refers to…"). Only passage-based items use full-sentence options, and the validator enforces that split.
- **Leaving a concept without a passage MCQ.** The validator requires at least one passage longer than 20 characters.
- **Using ambiguous distractors.** If two options are both valid translations, the item is unfair. Common cases: plural unmarked nouns, `den`/`den`-pronoun variants, gender-neutral `te`, and English contractions. Add `accept` alternatives where English is genuinely ambiguous, but do not accept wrong Globasa.
- **Adding `accept` variants that normalize identically.** They are redundant; the validator warns.
- **Editing normalization in one place only.** `js/normalize.js`, the validator, and the tests must agree.
- **Adding a CSS class for a new area but forgetting the area object.** The dot styling is optional; the area grouping is not.
- **Assuming a server exists.** All links are hash-based and all data is loaded via `<script>`.
- **Assuming the current run survives reload.** It does not; only submitted answers and scores do. This is intentional and documented in the UI.
- **Changing the storage key without migration.** Old progress silently disappears. Migrate or version intentionally.

---

## 20. Extension ideas

These are deliberately not implemented; the architecture leaves room for them:

- **Audio/pronunciation**: add audio files and a new exercise type; keep them local for offline use. Add a storage/asset-size strategy before shipping.
- **Spaced repetition/review queue**: derive due items from `Storage` attempts and add a dashboard "Review" view. Store scheduling metadata in the concept records.
- **Progress import/export**: `Storage.exportState()` already produces a deep copy; add a JSON download/upload flow and validate the schema on import.
- **Lesson path**: a guided sequence across the 20 beginner lessons, mapping lesson numbers to concepts. Add a `lessonRefs` array or separate path data and a view.
- **More gloss languages**: `word-list.csv` contains Spanish, Esperanto, German, French, Russian, Chinese, Hindi, and Arabic columns; extend `build_words.py` and the dictionary view.
- **Playwright tests**: the app has stable data attributes and hash routes; add browser tests for the three exercise types and persistence.
- **Content linting for Globasa**: optional dictionary/lookup integration to flag words not present in `word-list.csv`, with a curated allowlist for derived forms.
- **Themes**: add a theme selector beyond light/dark, using CSS variables and the existing settings object.

---

## 21. Source and content policy

- The curriculum is an original study aid based on the supplied *Complete Globasa Grammar* and *Globasa Lessons for Beginners*.
- The `nuances` area is built from the author's own follow-up posts, mirrored under `more-resources/`. Lesson sentences taken from those posts are used verbatim; new sentences are original and reuse the same pattern with vocabulary verified against `word-list.csv`.
- The `reading` area quotes short excerpts from *Thirty Short Stories in Globasa* by Vanege and the Globasa community, mirrored under `more-resources-2/`. Passages are one to three sentences, never whole stories; the published English sentence pairs are the translation keys. Every lesson cites its source story in `refs`.
- `refs` for the nuances area cite the note they came from (for example `Author notes: Translating -ing words`) plus the grammar page range that backs it up.
- Canonical upstream URLs, credited in the app footer and inline where the content lives:
  - Globasa home — <https://globasa.net>
  - Complete Globasa Grammar — <https://xwexi.globasa.net/eng/gramati>
  - Official word list — <https://github.com/Globasa-Team/cdn-files/blob/main/api2/word-list.csv>
  - Menalari dictionary — <https://menalari.globasa.net/eng/>
- Credit surfaces are `index.html` (footer), `Views.dictionary()` intro, the grammar and tense heroes (`.grammar-credit`), the lesson Sources panel, and the README. If you add a new page that presents language data, add a credit line there and keep these URLs in one shape.
- All external links use `target="_blank" rel="noopener noreferrer"`; the app must stay fully usable offline, so never load remote assets or fonts.
- `refs` values point to those sources for further reading; they are not runtime dependencies.
- Exercise sentences should be authored or adapted, not copied wholesale from unrelated copyrighted textbooks.
- When adding content, prefer original sentences that test the same pattern. Verify forms against the supplied grammar and `word-list.csv`.
- If a word is not in the supplied CSV but is a valid derived form, either use the derivation or add the word to the dictionary source; do not silently invent unrelated vocabulary.

---

## 22. Change checklist (copy into a PR)

- [ ] Concept id is unique and stable.
- [ ] `area` exists; card appears in the right section.
- [ ] `title`, `blurb`, `refs`, `notes` (≥2), `examples` (≥2) are present.
- [ ] Exactly 10 exercises, ids unique, prompts unique.
- [ ] At least one MCQ with a passage and interpretive question.
- [ ] Every MCQ has exactly 5 unique, plausible options and one valid `correct` index; full sentences only when the item has a passage.
- [ ] Translation directions are valid; `answer` is a full sentence; `accept` only contains true equivalents.
- [ ] Fill `___` count equals `blanks.length`; each blank has an answer.
- [ ] At least one multi-blank fill exists globally.
- [ ] `node --check data/curriculum.js` passes.
- [ ] `node tools/validate_curriculum.mjs` passes.
- [ ] `node tools/test_normalize.mjs` passes.
- [ ] `node tools/test_render.mjs` passes — it fails on any `{{…}}` or backtick that reaches the markup.
- [ ] `node tools/test_review.mjs` passes if the scheduler or storage schema changed.
- [ ] Every Globasa word inside English prose is marked (`{{…}}` in `data/curriculum.js`, backticks in `data/grammar.js`/`data/tenses.js`), and no marker leaks into the UI.
- [ ] Browser smoke test from `file://` and HTTP passes.
- [ ] Light/dark, mobile, and keyboard checks pass.
- [ ] README/doc counts updated if totals or lesson structure changed.
- [ ] No external network dependency introduced.
