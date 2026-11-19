# Bonpala

*Bonpala* is `bon` (good) + `pala` (speech, speaking) — "good speech". It is a practice companion, not a coursebook: the name is the thing you build by using it.

An offline-first, no-build web app for learning Globasa through 860 exercises. It runs directly from `index.html` in a browser; no server, bundler, or package manager is required. Local practice works without a network connection, and optional Firebase auth/sync enables cloud-backed progress.

## Run it

Open `index.html` in a modern browser (Chrome, Firefox, Edge, or Safari). Double-clicking the file works because all data is loaded with classic `<script>` tags rather than `fetch()`.

If you prefer a local server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Progress is cached in `localStorage` under `globasa.progress.v1`, then synced to Firestore (`users/{uid}`) after sign-in. Use **Reset all progress** on the dashboard or the Quick reference page to clear local progress. Clearing site data for the page has the same effect for local cache.

### Firebase setup (required for sign-in and cloud sync)

1. Edit `js/firebase-config.js` and replace all `REPLACE_WITH_*` placeholders with your Firebase web app config values.
2. Enable Email/Password sign-in in Firebase Authentication and create your user account there (the app has no sign-up UI).
3. Configure Firestore security rules to allow only your intended UID to read/write `users/{uid}`.
4. Sign in from the app. The first successful sync writes your current local state to Firestore if no remote document exists yet.

## What is included

- **86 concepts, exactly 10 exercises each (860 total)**, grouped into nine areas:
  - Foundations & expansion (10 concepts): alphabet, nouns/gender, pronouns, numbers, prepositions, comparatives, derivation, infinitives, imperatives, plus a **Challenge**.
  - Word categorization (7): noun/verb words, adjectives vs. adverbs, transitivity, ambitransitivity, function words, plus a **Challenge**.
  - Rigid syntax (7): strict SVO, adjective placement, mandatory `sen`, copula verbs, tense/aspect order, negation and questions, plus a **Challenge**.
  - Verb tenses (4): past/present/future, habitual/immediate/ongoing forms, common compound tenses, plus a **Challenge**.
  - Relative clauses (6): `hu` + resumptive `da`, object relatives, `dasu`, adverbial relatives, `feki`, plus a **Challenge**.
  - Correlatives (7): every column and row, including rote table recall and usage rules, plus a **Challenge**.
  - Vocabulary in action (4): everyday actions, everyday objects, plans/daily routines using words from the supplied 500-word frequency list, plus a **Challenge**.
  - Nuances & style (11): the author's follow-up notes on `-ing` forms, number and `plu`, states versus passives, `-gi`/`-cu` derivation, `ki`/`feki`/`hu` clauses, `hu denloka` versus `denloka hu`, parsing with `ji`, and three lessons built from the 150 canonical sentences (position, time, manner), plus a **Challenge**.
  - Reading real Globasa (30): one close-reading lesson per story in *Thirty Short Stories in Globasa*, ordered from short, simple narratives to long, dialogue-heavy ones. Each lesson uses verbatim story excerpts for four comprehension items, one vocabulary-in-context item, two glossed fill-ins, and three translations drawn from the published sentence pairs.
- **One Challenge per area**: each non-reading area ends with a 10-question Challenge built from the advanced specification: five passage-based, all-Globasa interpretive questions with Globasa answer options, three complex translations, and two two-blank fills. Challenge passages and options are verified against the local word list.
- **Three exercise mechanics**: multiple choice (five options in shuffled order, one correct answer), text translation in both directions, and fill-in-the-blank with one or more blanks plus an English meaning line as a prompt. Reading-comprehension items keep five full-sentence interpretations of a short passage; recall items give the answer forms themselves (`imi`, `bax`, `moyto, moyte, moyloka, moywatu`) instead of repeating the question inside every option.
- **Weighted toward the hard parts**: 270 of the 860 exercises (31%) target word categorization, rigid syntax, relative clauses, and correlatives, and a further 110 drill advanced nuances; every one of the 86 concepts includes at least one interpretative passage. The reading area adds 300 exercises whose passages, fills, and translation answers are checked against the story source.
- **Vocabulary balance**: the grammar drills reuse a controlled core, while the vocabulary area adds 40 exercises built from high-frequency actions, objects, and daily situations. A broad set of existing prompts also uses varied everyday vocabulary instead of relying on the same few nouns.
- **Globasa set apart from English**: anywhere a Globasa word sits inside English prose — grammar notes, lesson blurbs, question prompts, answer options, explanations, the grammar summary and the tense cards — it is set in a different face (serif italic in sans prose, sans italic inside serif headings). Lines that are entirely Globasa already read as their own thing and keep their normal type.
- **Immediate feedback** with the correct answer and an explanation. A wrong translation is shown as a **diff against the closest accepted wording**, so a typo appears as a marked character instead of two sentences to compare by eye.
- **Dynamic questions (optional)**: flip *Dynamic questions* in the Progress panel and 47 items start swapping their numbers, subjects, objects or paradigm rows on every attempt — a retry asks about a different pronoun, a different number, a different correlative. The variant is seeded per attempt, so it stays put across reloads and scoring always checks the same wording the question showed. With the switch off every item renders exactly as authored.
- **Safe leaving**: if you navigate away (or reload the tab) in the middle of a run, the app asks for confirmation before discarding the attempt.
- **Keyboard answering**: `1`–`5` pick a multiple-choice option, `Enter` checks the answer and then advances, `Ctrl/⌘ + Enter` checks a translation, and fill-in blanks submit with `Enter`. Press the dictionary shortcut (`Ctrl + /`, or `Ctrl + ⌘ + /` on Apple devices) to open the widget and `Esc` to close it. On a lesson page, `X` starts or retries the lesson and `Esc` goes back to the dashboard; on the results screen, `R` retries the lesson, `Esc` opens the lesson notes, and `D` returns to the dashboard. Every one of those buttons shows its key.
- **Fresh order on every attempt**: MCQ options shuffle each session, and the ten questions reshuffle within their blocks (MCQs, then translations, then fill-ins) while keeping the exercise map and numbering in sync.
- **Spaced review**: once a lesson is mastered it rejoins a review rotation — a 20-question mixed run pulls up to 12 questions from lessons you have not mastered and up to 8 from mastered lessons that have fallen due, then moves each lesson up or down a shared interval ladder (1, 3, 7, 16, 35, 75 days) depending on whether every question asked from it was answered correctly.
- **Progress persistence**: completed exercises, per-exercise attempt counts, last run, best score, attempt count, review schedule, last-opened lesson, and theme.
- **Dashboard meters**: three stat cards (lessons complete, exercises answered, perfect lessons) read `value/total` with a bar and a watermark icon, each in its own accent colour. Per-lesson best scores and attempt counts stay on the lesson cards, where the wording reads `best 8/10` — or just `all answers correct` once a lesson is mastered.
- **Dictionary browser** for all **9,527** entries from `word-list.csv`, searchable by Globasa word, English gloss, or word class, and filterable by class and source category.
- **In-lesson dictionary widget**: a floating panel available on lesson and exercise pages. It searches the same data by Globasa or English and shows compact rows (word, word class, gloss) so you can check a word without leaving the exercise.
- **Grammar summary** (`Grammar`): a standalone study page with core rules, tense tables, pronoun and correlative grids, word formation, common traps, and a seven-step study path with lesson links.
- **Verb tense lab** (`Tenses`): 15 individual tense cards with markers, formulas, examples, and common traps, plus three linked practice lessons.
- **Quick reference** view with the complete correlative table, the word-class legend, relative-clause patterns, and the rigid-syntax checklist.
- Responsive layout, keyboard-accessible controls, light/dark theme, and reduced-motion support.

## Scoring

Every exercise is worth one point. The first answer in a run sets that run's score; the best run is kept. A lesson counts as **mastered** when your best score reaches 10/10 — it does not have to be the first attempt. The dashboard summarises lessons complete, exercises answered, and perfect lessons; each lesson card shows its own answered count and best score.

### Answer normalization

Translation and fill-in answers are checked after normalizing both the user input and the target:

1. Unicode NFC and lowercase.
2. Remove all punctuation (`\p{P}`).
3. Collapse consecutive whitespace to a single space.
4. Trim.

Fill-in blanks require a strict match after normalization.

Translations are a little more forgiving, because a comprehension check should not fail on English style. On top of the steps above, the comparison also ignores:

- articles — `a`, `an` and `the` (except when the answer itself contrasts "a … the …", where definiteness carries the meaning);
- contractions — `don't` = `do not`, `they're` = `they are`;
- UK/US spelling — `colour` = `color`, `travelling` = `traveling`;
- number on an English noun, one way only: if the reference says *books*, *tickets* or *children*, the singular is also accepted, because Globasa has no plural ending.

Word order, verb tense and every other word still have to match, and some items list accepted alternatives (for example, a gender-neutral English pronoun). The tolerance rules are listed in `js/normalize.js`.

### Globasa inside English

Prose text marks its Globasa with `{{…}}`; the renderer turns each marker into a `<span class="gl">` and never shows the braces. Authoring is deliberate rather than automatic, because a dictionary lookup cannot decide the words the two languages share — `in`, `no`, `to`, `a`, `or`, `are`, `day`, `mesa`, `bus` — and guessing wrong in either direction cannot be fixed from data:

```json
{
  "prompt": "Which sentence uses {{un}} correctly to emphasize singularity?",
  "explanation": "{{Un}} is the numeral 'one' and can emphasize a single item, but it is not an indefinite article."
}
```

An answer option that is entirely Globasa is wrapped in a single pair, so the whole option reads as target-language text.

Separate blocks — the correct-answer line, `accept` alternatives, fill-in blanks, passages, and model sentences — are left plain. In `data/grammar.js` and `data/tenses.js` the same job is done with backticks (`` `sen` ``), which render as `<code>` in the same citation face.

### Wrong-translation diff

When a translation is marked wrong, the feedback shows your sentence and the reference side by side with the difference marked in place — green for what the correction adds, red strikethrough for what you typed instead:

| | |
|---|---|
| **Correct answer** | Mis**u** ba**y**tu sen denmo day kom yusu to. |
| **Your answer** | Mis~~o~~ ba~~l~~tu sen denmo day kom yusu to. |

The comparison is made against the **closest accepted wording** (the answer or any listed alternative), and only the characters that differ are marked. Case, punctuation and spacing never produce a mark, since the checker ignores them. If the two sentences have nothing in common, the app shows the plain correct answer and your text instead.

### Spaced review

Mastering a lesson starts a clock rather than finishing it. The dashboard shows a **Spaced review** card whenever anything is waiting, and one run asks 20 questions mixed from many lessons:

| | |
|---|---|
| Still learning | up to 12 questions, weakest lessons first, then the ones that have waited longest |
| Mastered and due | up to 8 questions, most overdue lesson first |
| Question choice | questions you missed lead; the rest are weighted by attempts and time since you last saw them, with a little randomness so a retry asks something new |
| Pass a lesson | every question asked from it was correct → one rung up the ladder, due again after 1, 3, 7, 16, 35 or 75 days |
| Miss a lesson | one rung down, back tomorrow — a lapse never wipes the whole ladder, and the lesson is not marked unmastered |

When nothing is due the card says so and still offers a practice run, which counts. A review run lives for one sitting: reloading it mid-run shows a "that review run has ended" screen, while all submitted answers and the schedule are already saved.

## For developers

See [ARCHITECTURE.md](./ARCHITECTURE.md) for the full developer guide: data schemas, routing, scoring, persistence, normalization, styling, and a step-by-step recipe for adding lessons and exercises.

## Project structure

```text
ARCHITECTURE.md             Developer guide: schemas, extension recipes, invariants
index.html                  App shell
globasa.svg                 Header logo and SVG favicon
globasa-1867x2000.png       Apple touch icon
css/styles.css              Responsive design system, light/dark themes
js/normalize.js             Exact normalization contract
js/diff.js                  Word/character diff for wrong translations
js/firebase-config.js       Firebase placeholders + auth/firestore service wrapper
js/storage.js               Versioned localStorage store
js/exercise-engine.js       Per-type answer checking and session scoring
js/review.js                Spaced-review scheduler (ladder, queue building, outcomes)
js/views.js                 Dashboard, lesson, exercise, results, grammar, tenses, dictionary, quick reference
js/app.js                   Hash router, theme, event wiring
data/words.js               Generated compact dictionary (9,527 entries)
data/curriculum.js          Authored 86-concept, 860-exercise curriculum
data/grammar.js             Authored standalone grammar summary
data/tenses.js              Authored verb-tense reference cards and practice links
tools/build_words.py        Regenerates data/words.js from word-list.csv
tools/validate_curriculum.mjs  Schema/count/content checks and normalization contract
tools/check_lexicon.mjs     Token-level Globasa lexicon/derivation check for Challenge content
tools/lookup_words.mjs      Word-class/gloss lookup against resources/word-list.csv
tools/test_normalize.mjs    Focused normalization tests
tools/test_review.mjs       Spaced-review scheduler tests
tools/test_diff.mjs         Translation diff tests
tools/test_render.mjs       Marker-leak tests across every rendered screen
word-list.csv               Source dictionary
ENG_KompletoGramati_mesi8_nyan2026.pdf   Source grammar
ENG_Darsulari.pdf           Source beginner lessons
more-resources-2/           Thirty Short Stories in Globasa (reading source)
```

## Regenerate or validate

Regenerate the dictionary after changing `word-list.csv`:

```bash
python3 tools/build_words.py
```

Run the content, normalization and scheduler checks:

```bash
node tools/validate_curriculum.mjs
node tools/check_lexicon.mjs
node tools/test_normalize.mjs
node tools/test_review.mjs
node tools/test_diff.mjs
node tools/test_render.mjs
```

The validator enforces exactly 10 exercises per concept, unique IDs and prompts, five unique options per MCQ with one valid index (full sentences whenever the item has a passage), placeholder/blank parity, the normalization contract, the grammar summary schema/study-plan links, and the tense-card schema/practice links. For the reading area it also parses `more-resources-2/Thirty Short Stories in Globasa.md` and verifies that every passage, completed fill, and translation answer is verbatim text from the cited story, with the intended 4 + 1 + 2 + 3 exercise mix. The lexicon check verifies every Globasa token in the Challenge concepts against `resources/word-list.csv`, accepting only exact roots, hyphenated compounds, and official affix derivations. Challenge concept blurbs are written in Globasa because the checker validates each blurb token.

## Sources & credits

Bonpala is an unofficial practice companion. All language material belongs to the Globasa project.

- **Globasa home** — <https://globasa.net> for the language, community, and learning resources.
- **Complete Globasa Grammar** — <https://xwexi.globasa.net/eng/gramati>. The bundled `ENG_KompletoGramati_mesi8_nyan2026.pdf` is the source for the grammar summary, the tense lab, and the page references on every lesson (correlative table p. 42, relative clauses pp. 68–72, sentence structure pp. 73–81, word classes p. 97).
- **Official word list** — <https://github.com/Globasa-Team/cdn-files/blob/main/api2/word-list.csv>. `word-list.csv` (word class, English gloss, source category) generates `data/words.js` and both dictionary views.
- **Menalari** — <https://menalari.globasa.net/eng/> for authoritative word lookups.
- **Author follow-up notes** — the *Nuances & style* area is built from the language author's own posts on `-ing` forms, number, states and passives, derivation, clause types, style, and the 150 canonical sentences. The mirrored copies live in [`more-resources/`](./more-resources).
- **Thirty Short Stories in Globasa** — the *Reading real Globasa* area quotes short excerpts from the thirty stories by Vanege and the Globasa community, mirrored in [`more-resources-2/`](./more-resources-2). The published English sentence pairs are used as the translation keys.
- `ENG_Darsulari.pdf` — *Globasa Lessons for Beginners*, used for vocabulary progression and lesson references.
- The official *500 maxim pimpan genlexi ji fiko* list, used to select high-frequency vocabulary for the vocabulary area.

These URLs also appear in the app footer and next to the content they support (dictionary intro, grammar and tense heroes, lesson Sources panel), so the credits stay visible without a dedicated page.

The app is a study aid; for authoritative usage questions, consult the grammar and the official dictionary.
