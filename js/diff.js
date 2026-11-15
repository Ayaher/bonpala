/* Word and character diff for wrong translations.
   Produces display-ready segments; rendering stays in js/views.js. */
(function () {
  "use strict";

  var WORD_PUNCTUATION = /[^\p{L}\p{N}']/gu;

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }

  /* Case and punctuation are ignored when lining words up, exactly like grading. */
  function wordKey(word) {
    return word.toLowerCase().replace(WORD_PUNCTUATION, "");
  }

  function words(text) {
    var trimmed = String(text == null ? "" : text).trim();
    return trimmed ? trimmed.split(/\s+/) : [];
  }

  /* Longest common subsequence of two key arrays, as [indexA, indexB] pairs. */
  function lcs(a, b) {
    var n = a.length;
    var m = b.length;
    var table = [];
    var i;
    var j;
    for (i = 0; i <= n; i += 1) table.push(new Array(m + 1).fill(0));
    for (i = 1; i <= n; i += 1) {
      for (j = 1; j <= m; j += 1) {
        table[i][j] = a[i - 1] === b[j - 1]
          ? table[i - 1][j - 1] + 1
          : Math.max(table[i - 1][j], table[i][j - 1]);
      }
    }
    var pairs = [];
    i = n;
    j = m;
    while (i > 0 && j > 0) {
      if (a[i - 1] === b[j - 1]) {
        pairs.push([i - 1, j - 1]);
        i -= 1;
        j -= 1;
      } else if (table[i - 1][j] >= table[i][j - 1]) {
        i -= 1;
      } else {
        j -= 1;
      }
    }
    return pairs.reverse();
  }

  function same(text) {
    return { type: "same", text: text };
  }

  function isWordChar(ch) {
    return Boolean(ch) && /[\p{L}\p{N}]/u.test(ch);
  }

  /* Split surrounding punctuation off a word: it is ignored by grading, so it
     must never be highlighted as a difference. */
  function peel(word) {
    var start = 0;
    var end = word.length;
    while (start < end && !isWordChar(word.charAt(start))) start += 1;
    while (end > start && !isWordChar(word.charAt(end - 1))) end -= 1;
    return { lead: word.slice(0, start), core: word.slice(start, end), trail: word.slice(end) };
  }

  function marked(parts) {
    /* A word with no shared characters is still a single marked segment. */
    return { type: "marked", parts: parts };
  }

  /* Character-level marks for one replaced word pair. Words that share little
     are marked whole, so unrelated words do not produce letter confetti. */
  function markWords(yours, correct) {
    var y = peel(yours);
    var c = peel(correct);
    var keyA = y.core.toLowerCase().split("");
    var keyB = c.core.toLowerCase().split("");
    var pairs = lcs(keyA, keyB);
    var shared = (2 * pairs.length) / Math.max(1, keyA.length + keyB.length);
    if (shared < 0.5 || !keyA.length || !keyB.length) {
      return {
        yours: marked([{ type: "del", text: yours }]),
        correct: marked([{ type: "ins", text: correct }])
      };
    }
    var yoursParts = [];
    var correctParts = [];
    var ai = 0;
    var bi = 0;

    function push(list, type, text) {
      if (!text) return;
      if (list.length && list[list.length - 1].type === type) list[list.length - 1].text += text;
      else list.push({ type: type, text: text });
    }

    push(yoursParts, "same", y.lead);
    push(correctParts, "same", c.lead);

    pairs.forEach(function (pair) {
      if (pair[0] > ai) push(yoursParts, "del", y.core.slice(ai, pair[0]));
      if (pair[1] > bi) push(correctParts, "ins", c.core.slice(bi, pair[1]));
      push(yoursParts, "same", y.core.charAt(pair[0]));
      push(correctParts, "same", c.core.charAt(pair[1]));
      ai = pair[0] + 1;
      bi = pair[1] + 1;
    });
    if (ai < y.core.length) push(yoursParts, "del", y.core.slice(ai));
    if (bi < c.core.length) push(correctParts, "ins", c.core.slice(bi));
    push(yoursParts, "same", y.trail);
    push(correctParts, "same", c.trail);
    return { yours: marked(yoursParts), correct: marked(correctParts) };
  }

  /* Compare a learner's sentence with a reference sentence.
     Returns { yours: [word], correct: [word] } where each word is either
     {type:"same", text} or {type:"marked", parts:[{type:"same"|"del"|"ins", text}]}. */
  function compare(yours, correct) {
    var a = words(yours);
    var b = words(correct);
    var pairs = lcs(a.map(wordKey), b.map(wordKey));
    var out = { yours: [], correct: [] };
    var ai = 0;
    var bi = 0;

    function flush(gapA, gapB) {
      var shared = Math.min(gapA.length, gapB.length);
      for (var k = 0; k < shared; k += 1) {
        var pair = markWords(gapA[k], gapB[k]);
        out.yours.push(pair.yours);
        out.correct.push(pair.correct);
      }
      for (k = shared; k < gapA.length; k += 1) out.yours.push(marked([{ type: "del", text: gapA[k] }]));
      for (k = shared; k < gapB.length; k += 1) out.correct.push(marked([{ type: "ins", text: gapB[k] }]));
    }

    pairs.forEach(function (pair) {
      flush(a.slice(ai, pair[0]), b.slice(bi, pair[1]));
      out.yours.push(same(a[pair[0]]));
      out.correct.push(same(b[pair[1]]));
      ai = pair[0] + 1;
      bi = pair[1] + 1;
    });
    flush(a.slice(ai), b.slice(bi));
    return out;
  }

  /* Edit distance over normalised text, used to pick the closest accepted answer. */
  function distance(yours, correct) {
    var N = window.GlobasaNormalize;
    var a = (N ? N.normalize(yours) : String(yours || "").toLowerCase()).split("");
    var b = (N ? N.normalize(correct) : String(correct || "").toLowerCase()).split("");
    return a.length + b.length - 2 * lcs(a, b).length;
  }

  function closest(input, candidates) {
    var list = (candidates || []).filter(function (candidate) {
      return typeof candidate === "string" && candidate.length;
    });
    if (!list.length) return "";
    var best = list[0];
    var bestDistance = distance(input, best);
    for (var i = 1; i < list.length && bestDistance > 0; i += 1) {
      var current = distance(input, list[i]);
      if (current < bestDistance) {
        bestDistance = current;
        best = list[i];
      }
    }
    return best;
  }

  /* One sentence with its differences wrapped in <ins> or <del>. */
  function render(segments) {
    return (segments || []).map(function (word) {
      if (word.type === "same") return escapeHtml(word.text);
      return word.parts.map(function (part) {
        if (part.type === "same") return escapeHtml(part.text);
        return "<" + part.type + ">" + escapeHtml(part.text) + "</" + part.type + ">";
      }).join("");
    }).join(" ");
  }

  window.GlobasaDiff = {
    compare: compare,
    render: render,
    distance: distance,
    closest: closest
  };
})();
