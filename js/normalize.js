/* Answer comparison shared by the app and the validator.
   `normalize` is the strict contract; `matchesTranslation` adds the bounded
   tolerance described in ARCHITECTURE.md section 8.1. */
(function () {
  "use strict";

  var PUNCTUATION = /\p{P}/gu;

  function normalize(value) {
    return String(value == null ? "" : value)
      .normalize("NFC")
      .toLowerCase()
      .replace(PUNCTUATION, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  /* Keys are written without apostrophes because normalize() strips them. */
  var CONTRACTIONS = {
    dont: "do not",
    doesnt: "does not",
    didnt: "did not",
    isnt: "is not",
    arent: "are not",
    wasnt: "was not",
    werent: "were not",
    hasnt: "has not",
    havent: "have not",
    cant: "can not",
    cannot: "can not",
    couldnt: "could not",
    shouldnt: "should not",
    wouldnt: "would not",
    wont: "will not",
    mustnt: "must not",
    im: "i am",
    youre: "you are",
    hes: "he is",
    shes: "she is",
    theyre: "they are",
    thats: "that is",
    theres: "there is",
    ive: "i have"
  };

  /* Same meaning, different spelling convention. */
  var SPELLINGS = {
    colour: "color",
    colours: "colors",
    coloured: "colored",
    favourite: "favorite",
    behaviour: "behavior",
    centre: "center",
    metre: "meter",
    litre: "liter",
    grey: "gray",
    realise: "realize",
    realised: "realized",
    organise: "organize",
    organised: "organized",
    travelling: "traveling",
    travelled: "traveled",
    towards: "toward",
    learnt: "learned",
    whilst: "while"
  };

  var ARTICLES = { a: true, an: true, the: true };
  var DEFINITE = /\bthe\b/;
  var INDEFINITE = /\b(?:a|an)\b/;
  var WORDS = /[a-z']+/g;
  var IRREGULAR_PLURALS = {
    children: "child",
    people: "person",
    men: "man",
    women: "woman",
    feet: "foot",
    teeth: "tooth",
    mice: "mouse",
    oxen: "ox",
    lives: "life",
    leaves: "leaf",
    knives: "knife",
    wives: "wife"
  };

  /* Canonical spelling for one translation: applies contraction and spelling
     convention but keeps every word, including articles. */
  function canonical(value) {
    return normalize(value).replace(WORDS, function (word) {
      return CONTRACTIONS[word] || SPELLINGS[word] || word;
    });
  }

  function words(value) {
    var text = canonical(value);
    return text ? text.split(" ") : [];
  }

  function contrastsArticles(value) {
    var text = normalize(value);
    return DEFINITE.test(text) && INDEFINITE.test(text);
  }

  /* Globasa does not mark number, so an English plural in the reference may be
     answered in the singular ("two books" -> "two book"). The reverse never
     matches: a learner cannot add plurality the reference does not have. */
  function singularOf(word) {
    if (!word) return null;
    if (IRREGULAR_PLURALS[word]) return IRREGULAR_PLURALS[word];
    if (word.length >= 4 && word.slice(-3) === "ies") return word.slice(0, -3) + "y";
    if (word.length >= 4 && /(?:s|x|z|ch|sh)es$/.test(word)) return word.slice(0, -2);
    if (word.length >= 4 && word.slice(-1) === "s" && word.slice(-2) !== "ss") return word.slice(0, -1);
    return null;
  }

  function wordMatches(input, reference) {
    if (input === reference) return true;
    var singular = singularOf(reference);
    return Boolean(singular) && input === singular;
  }

  /* Order-preserving comparison: the words must line up one by one, but an
     article may be present on either side, and a plural reference accepts its
     singular. Articles stay mandatory when the reference contrasts them. */
  function tolerantMatch(input, reference, keepArticles) {
    var a = words(input);
    var b = words(reference);
    var rows = [];
    for (var i = 0; i <= a.length; i += 1) {
      rows.push(new Array(b.length + 1).fill(false));
    }
    rows[0][0] = true;
    for (i = 0; i <= a.length; i += 1) {
      for (var j = 0; j <= b.length; j += 1) {
        if (!rows[i][j]) continue;
        if (i < a.length && j < b.length && wordMatches(a[i], b[j])) rows[i + 1][j + 1] = true;
        if (!keepArticles && i < a.length && ARTICLES[a[i]]) rows[i + 1][j] = true;
        if (!keepArticles && j < b.length && ARTICLES[b[j]]) rows[i][j + 1] = true;
      }
    }
    return rows[a.length][b.length];
  }

  function matches(input, expected) {
    return normalize(input) === normalize(expected);
  }

  function matchesAny(input, candidates) {
    var target = normalize(input);
    return (candidates || []).some(function (candidate) {
      return normalize(candidate) === target;
    });
  }

  function matchesTranslation(input, candidates) {
    var exact = normalize(input);
    return (candidates || []).some(function (candidate) {
      if (normalize(candidate) === exact) return true;
      return tolerantMatch(input, candidate, contrastsArticles(candidate));
    });
  }

  window.GlobasaNormalize = {
    normalize: normalize,
    matches: matches,
    matchesAny: matchesAny,
    matchesTranslation: matchesTranslation
  };
})();
