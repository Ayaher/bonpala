/* Standalone study summary of the main Globasa grammar rules.
   Content is authored from the supplied grammar and beginner lessons. */
window.GLOBASA_GRAMMAR = {
  "title": "Globasa Grammar in Brief",
  "subtitle": "A standalone study summary of the main rules, with examples you can read in one sitting.",
  "intro": "This page summarizes the core grammar needed to read, write, and speak everyday Globasa. It is intentionally shorter than the full grammar: use it to learn the system, then practise the patterns in the exercise curriculum. Page references point to the supplied Complete Globasa Grammar.",
  "coreRules": [
    {
      "title": "Words never change form",
      "text": "Globasa has no articles, no plural suffix, and no verb conjugation. One form covers singular and plural, present and habitual, and every subject.",
      "example": [
        "Bwaw sen lil. Mi hare dua bwaw.",
        "The dog is small. I have two dogs."
      ]
    },
    {
      "title": "Default order is SVO",
      "text": "Subject → Verb → Object. The object follows the verb with no preposition. Use `el` only for the marked S-O-V and O-S-V orders.",
      "example": [
        "Patre mwa matre.",
        "The father kisses the mother."
      ]
    },
    {
      "title": "Adjectives before nouns",
      "text": "Adjectives precede the noun they modify. Complex adjective phrases follow the noun. Adverbs normally precede the verb, or follow the verb when there is no object.",
      "example": [
        "Meli kamisa sen per lil kursi.",
        "The beautiful shirt is on the small chair."
      ]
    },
    {
      "title": "`sen` links non-verbal predicates",
      "text": "Use the copula `sen` before a noun phrase, adjective phrase, prepositional phrase, or clause. Without a lexical verb, the predicate needs `sen`.",
      "example": [
        "Uma sen perfetomo syahe.",
        "The horse is perfectly black."
      ]
    },
    {
      "title": "Tense comes before negation",
      "text": "The verb phrase opens with tense/mood markers (`nun, le, xa, ger, am, na`). Negation `no` follows the tense marker and precedes the verb and its adverbs.",
      "example": [
        "Mi le no yam pingo.",
        "I did not eat the apple."
      ]
    },
    {
      "title": "Relative clauses recycle the gap",
      "text": "Use `hu` to introduce a relative clause. The resumptive `da` is obligatory when the antecedent is the subject or object inside the clause; `dasu` marks possession.",
      "example": [
        "Te sen femixu hu da lubi mi.",
        "She is the woman who loves me."
      ]
    },
    {
      "title": "Correlatives are stem + suffix",
      "text": "The eight stems (`ke, hin, den, ban, moy, nil, alo, sama`) combine with suffixes such as `-to, -te, -loka, -watu`, and `-maner`. Determiners must be followed by a noun.",
      "example": [
        "Moy nini doxo, ji moyte sen hox.",
        "Every child reads, and everyone is happy."
      ]
    },
    {
      "title": "Transitivity controls the object pattern",
      "text": "Transitive verbs take a direct object; intransitive verbs use prepositions for destination or location; ambitransitive verbs can do both. Learn each verb's class with the word.",
      "example": [
        "Mi bujo myaw. Mi idi cel eskol.",
        "I catch the cat. I go to school."
      ]
    },
    {
      "title": "Pronouns take `-su`; `se` is reflexive",
      "text": "Add `-su` to a pronoun for a possessive adjective. Add `te/to` for a possessive pronoun. `Se` refers back to the subject.",
      "example": [
        "Mi oko se in ayna. Misu kitabu sen neo.",
        "I see myself in the mirror. My book is new."
      ]
    },
    {
      "title": "Derivation is regular",
      "text": "Affixes are productive. `-gi` makes a causative/transitive verb, `-cu` marks change, `-ne` describes an active state, and `-do` an inactive state.",
      "example": [
        "Mi le hahagi nini.",
        "I made the child laugh."
      ]
    }
  ],
  "sections": [
    {
      "id": "sounds",
      "title": "Sounds, spelling, and stress",
      "source": "Grammar pp. 2–11",
      "lead": "The alphabet has 24 letters and no q. Vowels are pronounced as in Spanish or Italian. Most letters have one stable value, so spelling is predictable once the values are learned.",
      "rules": [
        {
          "title": "Key consonant values",
          "text": "c = /tʃ/ as in chair; x = /ʃ/ as in shop; j = /dʒ/ as in jazz; g is always hard /g/; s is always voiceless /s/; h is /x/ (or a permissible [h]); r is a single tap/flap.",
          "examples": [
            [
              "cay, cokolate, cudu",
              "tea, chocolate, get"
            ],
            [
              "xanti, xwexi, broxa",
              "peace, learn, brush"
            ]
          ]
        },
        {
          "title": "Stress",
          "text": "Every monosyllabic content word is stressed. In polysyllabic words: if the word ends in a consonant, stress the last vowel; if it ends in a vowel, stress the second-to-last vowel.",
          "examples": [
            [
              "barix, kitabudom",
              "ba-RIX, ki-ta-bu-DOM"
            ],
            [
              "piu, harita",
              "PI-u, ha-RI-ta"
            ]
          ]
        },
        {
          "title": "No silent letters",
          "text": "Every written vowel is pronounced. Double vowels and consonants are held longer; w and y may be pronounced as unstressed u and i.",
          "examples": [
            [
              "Ewropa, pyano",
              "Europe, piano"
            ]
          ]
        }
      ],
      "tables": [
        {
          "title": "Letters that differ from English habits",
          "head": [
            "Letter",
            "Value",
            "Example"
          ],
          "rows": [
            [
              "c",
              "/tʃ/ — never [k] or [s]",
              "`cay` (tea)"
            ],
            [
              "x",
              "/ʃ/ — never [ks]",
              "`xanti` (peace)"
            ],
            [
              "j",
              "/dʒ/ — as in jazz",
              "`juni` (young)"
            ],
            [
              "g",
              "always hard /g/",
              "`globa` (world)"
            ],
            [
              "s",
              "always voiceless /s/",
              "`sui` (water)"
            ],
            [
              "h",
              "/x/ or permissible [h]",
              "`hawa` (air)"
            ],
            [
              "r",
              "single tap/flap",
              "`risi` (rice)"
            ],
            [
              "q",
              "not used",
              "write k instead"
            ]
          ],
          "note": "C is never [k] as in cup or [s] as in cent. X is never [ks] as in taxi. S is never [z] as in visit."
        }
      ],
      "notes": [
        "The vowels are a, e, i, o, u. There are no true diphthongs, though `aw, ew, ow, ay, ey, oy` are allowed.",
        "The letter z is a single voiced [z], never [ts] as in pizza.",
        "Globasa does not use upper-case letters to mark grammar; capitalization is a style choice."
      ]
    },
    {
      "id": "words",
      "title": "Content words and word classes",
      "source": "Grammar pp. 12–19, 97–98",
      "lead": "Content words carry meaning; function words carry grammar. The dictionary uses short class codes. The most important distinction is whether a word is a noun/verb, a verb subtype, an adjective/adverb, or a function word.",
      "rules": [
        {
          "title": "Noun/verb words (b)",
          "text": "Many words can be either a noun or a verb without changing form. Context and the object decide the role. `Doxo` can mean 'reading' or 'read'; `lala` can mean 'song' or 'sing'.",
          "examples": [
            [
              "Mi le doxo longo kitabu.",
              "I read a long book."
            ],
            [
              "Doxo sen bon.",
              "Reading is good."
            ]
          ]
        },
        {
          "title": "No articles and no plural suffix",
          "text": "`Kitabu` means 'a book', 'the book', or 'the books'. Use `un` to emphasize one and `plu` to emphasize several. `Fem-` and `man-` emphasize gender: `femnini` (girl), `mannini` (boy), `femgami` (wife), `mangami` (husband).",
          "examples": [
            [
              "Mi hare un kitabu, no dua.",
              "I have one book, not two."
            ],
            [
              "Femnini lala.",
              "The girl sings."
            ]
          ]
        },
        {
          "title": "Adjectives and adverbs",
          "text": "Adjectives precede nouns. Adverbs normally precede verbs; with no object they may follow the verb. `-mo` turns an adjective into an adverb modifier (`daymo` = very), `-li` derives an adjective from a noun, and `-ya` derives an abstract noun.",
          "examples": [
            [
              "daymo lama kitabu",
              "a very old book"
            ],
            [
              "Te danse bon.",
              "She dances well."
            ],
            [
              "Englili cay",
              "English tea"
            ]
          ]
        },
        {
          "title": "Comparison",
          "text": "`Max` and `min` precede nouns or verbs for 'more/fewer'. `Maxmo` and `minmo` precede adjectives or adverbs. `Kom` introduces the standard of comparison.",
          "examples": [
            [
              "Mi hare max kitabu kom yu.",
              "I have more books than you."
            ],
            [
              "Te lala maxmo bon kom mi.",
              "She sings better than me."
            ],
            [
              "Hin baytu sen denmo day kom misu to.",
              "This house is as big as mine."
            ]
          ]
        }
      ],
      "tables": [
        {
          "title": "Dictionary class codes",
          "head": [
            "Code",
            "Meaning",
            "Example"
          ],
          "rows": [
            [
              "b",
              "noun/verb",
              "`kitabu` (book)"
            ],
            [
              "b.oj",
              "transitive verb",
              "`gibe` (give)"
            ],
            [
              "b.nenoj",
              "intransitive verb",
              "`idi` (go)"
            ],
            [
              "b.oro",
              "ambitransitive verb",
              "`buka` (open)"
            ],
            [
              "b.lin",
              "copula verb",
              "`sen` (be)"
            ],
            [
              "b.sah",
              "auxiliary verb",
              "`musi` (must)"
            ],
            [
              "t",
              "adjective/adverb",
              "`meli` (beautiful/beautifully)"
            ],
            [
              "m",
              "adverb",
              "`pimpan` (often)"
            ],
            [
              "pn",
              "pronoun",
              "`mi` (I)"
            ],
            [
              "d",
              "determiner",
              "`hin` (this)"
            ],
            [
              "p",
              "preposition",
              "in (in)"
            ],
            [
              "l",
              "conjunction",
              "`ji` (and)"
            ],
            [
              "num",
              "numeral",
              "`tiga` (three)"
            ],
            [
              "par",
              "particle",
              "`le` (past)"
            ]
          ],
          "note": "The full appendix also lists proper nouns, possessive forms, affixes, and phrase classes."
        }
      ],
      "notes": [
        "When a word is used as a noun or verb, its form does not change. The dictionary class tells you which roles are normal.",
        "A derived word's class is determined by its suffix; prefixes do not change the word class."
      ]
    },
    {
      "id": "verbs",
      "title": "Verb categories and transitivity",
      "source": "Grammar pp. 16–19",
      "lead": "Every verb belongs to a category that determines whether it takes an object, a prepositional phrase, or a complement. Learning the category with the word prevents most word-order and case errors.",
      "rules": [
        {
          "title": "Auxiliaries",
          "text": "There are three auxiliaries: `abil` (can), `ingay` (should), and `musi` (must). They are followed by `na` + verb; `na` may be omitted after the first auxiliary.",
          "examples": [
            [
              "Mi musi na ergo.",
              "I must work."
            ],
            [
              "Mi no abil na danse.",
              "I cannot dance."
            ]
          ]
        },
        {
          "title": "Copulas",
          "text": "Copulas link a subject to a complement. `Sen` = be; `xorsen/sencu` = become; `sengi` = cause to be/become; `kwasisen` = seem; `okocu` = look; `orecu` = sound; `nasacu` = smell; `xetocu` = taste; `pifucu` = feel by touch; `hisi`(`cu`)/`ganjon`(`cu`) = feel.",
          "examples": [
            [
              "Supa xetocu bon.",
              "The soup tastes good."
            ],
            [
              "Te kwasisen pilodo.",
              "She seems tired."
            ]
          ]
        },
        {
          "title": "Transitive, intransitive, ambitransitive",
          "text": "Transitive verbs take a direct object. Intransitive verbs do not; use prepositions for destination or location. Ambitransitive verbs can be used with or without an object, often with a change of perspective.",
          "examples": [
            [
              "Mi bujo myaw.",
              "I catch the cat."
            ],
            [
              "Mi idi cel eskol.",
              "I go to school."
            ],
            [
              "Dwer le bukacu.",
              "The door opened."
            ]
          ]
        },
        {
          "title": "Echo-object verbs and `-gi/-cu`",
          "text": "Echo-object verbs may repeat their own noun as an optional object: `Mi le somno lungo somno`. `-gi` makes a causative/transitive verb; `-cu` marks an intransitive change of state.",
          "examples": [
            [
              "Mi le somno lungo somno.",
              "I slept a long sleep."
            ],
            [
              "Mi fleygi hawanavi.",
              "I fly an aircraft."
            ],
            [
              "Dwer le bukacu.",
              "The door opened."
            ]
          ]
        }
      ],
      "tables": [
        {
          "title": "Verb patterns",
          "head": [
            "Category",
            "Pattern",
            "Example"
          ],
          "rows": [
            [
              "Auxiliary",
              "auxiliary + (`na`) + verb",
              "`Mi musi na ergo`."
            ],
            [
              "Copula",
              "subject + copula + complement",
              "`Uma sen syahe`."
            ],
            [
              "Transitive",
              "subject + verb + direct object",
              "`Mi bujo myaw`."
            ],
            [
              "Intransitive",
              "subject + verb (+ prepositional phrase)",
              "`Mi idi cel eskol`."
            ],
            [
              "Ambitransitive",
              "direct object or no object",
              "`Femyen buka janela / Dwer bukacu`."
            ],
            [
              "Echo-object",
              "optional object repeats verb noun",
              "`Mi le somno lungo somno`."
            ]
          ]
        }
      ]
    },
    {
      "id": "function",
      "title": "Function words: conjunctions and prepositions",
      "source": "Grammar pp. 30–35",
      "lead": "Function words do the grammatical work. Prepositions introduce phrases; conjunctions join words or clauses; particles mark tense, mood, questions, and negation.",
      "rules": [
        {
          "title": "Conjunctions",
          "text": "`ji` = and; `or` = or; `nor` = `nor`; `mas` = but; `eger` = if; `koski` = because; `kam` = yes/no question particle; `ki` = clause 'that'; `feki` = noun-modifying 'that'; `hu` = relative 'who/which/that'; `kom` = as/than.",
          "examples": [
            [
              "Mi suki kafe ji cay.",
              "I like coffee and tea."
            ],
            [
              "Mi no vole kafe, mas mi vole cay.",
              "I don't want coffee, but I want tea."
            ]
          ]
        },
        {
          "title": "Possession",
          "text": "Use `de` for possession by a noun (`Baytu de` Maria), the separate particle `su` after a noun (Maria `su baytu`), or the suffix `-su` on pronouns (`misu kitabu`).",
          "examples": [
            [
              "Baytu de Maria sen day.",
              "Mary's house is big."
            ],
            [
              "Maria su to sen day.",
              "Mary's is big."
            ]
          ]
        },
        {
          "title": "Function adverbs",
          "text": "`No` negates; `si` affirms; `pia` = also; `sol` = only; `hata` = even; `uje` = already; `haji` = still; `kriban` = almost; `pimpan` = often; `nadir` = rarely.",
          "examples": [
            [
              "Mi no sen lao.",
              "I am not old."
            ],
            [
              "Mi haji ergo.",
              "I am still working."
            ]
          ]
        }
      ],
      "tables": [
        {
          "title": "Core prepositions",
          "head": [
            "Word",
            "Meaning",
            "Example"
          ],
          "rows": [
            [
              "in",
              "in, inside of",
              "in `kokikamer` (in the kitchen)"
            ],
            [
              "`ex`",
              "out of, outside",
              "`ex baytu` (out of the house)"
            ],
            [
              "`per`",
              "on, upon",
              "`per mesa` (on the table)"
            ],
            [
              "`bax`",
              "under, below",
              "`bax drevo` (under the tree)"
            ],
            [
              "`cel`",
              "to, toward (destination)",
              "`cel eskol` (to school)"
            ],
            [
              "`fe`",
              "at/in/on (time or general)",
              "`fe mesi lima` (in May)"
            ],
            [
              "`ton`",
              "together with",
              "`ton misu doste` (with my friend)"
            ],
            [
              "`har`",
              "with (having)",
              "`har pesa` (with money)"
            ],
            [
              "`yon`",
              "with (using), by means of",
              "`yon kalamu` (with a pen)"
            ],
            [
              "`tas`",
              "to (recipient), for",
              "`tas mi` (to me)"
            ],
            [
              "`de`",
              "of, belonging to",
              "`baytu de` Maria (Mary's house)"
            ],
            [
              "`kos`",
              "because of, due to",
              "`kos barix` (because of rain)"
            ],
            [
              "`fal`",
              "done by",
              "`eskrido fal mi` (written by me)"
            ],
            [
              "`tem`",
              "about, regarding",
              "`tem` Globasa (about Globasa)"
            ],
            [
              "`el`",
              "direct object marker",
              "`Patre el matre mwa` (S-O-V)"
            ]
          ],
          "note": "`El` is normally omitted in ordinary SVO. The other prepositions are not interchangeable: learn the destination/location/instrument distinction."
        }
      ],
      "notes": [
        "Prepositions are followed by a noun phrase, not by a clause. Use `ki/feki` constructions for clauses.",
        "`Fe` is a general-purpose preposition; it is optional with many time expressions: (`fe`) `lunadin` = on Monday."
      ]
    },
    {
      "id": "pronouns",
      "title": "Pronouns and possession",
      "source": "Grammar pp. 39–42",
      "lead": "Third-person pronouns do not mark gender. `Te` covers he, she, it, and singular they for animate beings; `to` is for inanimate things. Plural forms are `ete` and `oto`.",
      "rules": [
        {
          "title": "Reflexive and impersonal",
          "text": "`Se` refers back to the subject for all persons: `Mi oko se`. `Ren` is the impersonal 'one/you' pronoun. `Da` is the relative pronoun used inside `hu` clauses.",
          "examples": [
            [
              "Mi oko se in ayna.",
              "I see myself in the mirror."
            ],
            [
              "Ren no abil na fale moy xey.",
              "One cannot do everything."
            ]
          ]
        },
        {
          "title": "Possessive adjectives and pronouns",
          "text": "Add `-su` to a pronoun for a possessive adjective. Add `te` or to for the independent possessive pronoun. For nouns, use `su` as a separate word or `de` as a preposition.",
          "examples": [
            [
              "Misu kitabu sen neo; yusu to sen lama.",
              "My book is new; yours is old."
            ],
            [
              "Maria su baytu sen day.",
              "Mary's house is big."
            ]
          ]
        }
      ],
      "tables": [
        {
          "title": "Personal pronouns",
          "head": [
            "Person",
            "Singular",
            "Plural"
          ],
          "rows": [
            [
              "1st",
              "`mi` (I, me)",
              "`imi` (we, us)"
            ],
            [
              "2nd",
              "`yu` (you)",
              "`uyu` (you all)"
            ],
            [
              "3rd animate",
              "`te` (he/she/it/they)",
              "`ete` (they)"
            ],
            [
              "3rd inanimate",
              "to (it)",
              "`oto` (they)"
            ],
            [
              "Reflexive",
              "`se`",
              "`se`"
            ],
            [
              "Impersonal",
              "`ren` (one)",
              "`ren`"
            ],
            [
              "Relative",
              "`da`",
              "`da`"
            ]
          ]
        },
        {
          "title": "Possession",
          "head": [
            "Person",
            "Adjective (singular)",
            "Adjective (plural)",
            "Pronoun (singular)",
            "Pronoun (plural)"
          ],
          "rows": [
            [
              "1st",
              "`misu`",
              "`imisu`",
              "`misu` to",
              "`imisu` to"
            ],
            [
              "2nd",
              "`yusu`",
              "`uyusu`",
              "`yusu` to",
              "`uyusu` to"
            ],
            [
              "3rd animate",
              "`tesu`",
              "`etesu`",
              "`tesu te`",
              "`etesu te`"
            ],
            [
              "3rd inanimate",
              "`tosu`",
              "`otosu`",
              "`tosu` to",
              "`otosu` to"
            ],
            [
              "Reflexive",
              "`sesu`",
              "`sesu`",
              "`sesu te`/to",
              "`sesu te`/to"
            ]
          ],
          "note": "In a relative clause, use `dasu` instead of `tesu/etesu`: `manixu hu dasu sodar kone mi` = the `man` whose brother knows me."
        }
      ]
    },
    {
      "id": "correlatives",
      "title": "The correlative system",
      "source": "Grammar pp. 42–50",
      "lead": "Correlatives are a regular grid: eight stems for the kind of reference, plus suffixes for the row. Learn the stems and suffixes, not forty-eight unrelated words.",
      "rules": [
        {
          "title": "Stems and suffixes",
          "text": "Stems: `ke-` (which), `hin-` (this), `den-` (that), `ban-` (some), `moy-` (every), `nil-` (no), `alo-` (other), `sama-` (same). Rows add -to (thing), `-te` (animate), `-su` (possession), `-pul` (kind), `-mo` (degree), `-kwanti` (amount), `-numer` (number), `-loka` (place), `-watu` (time), `-seba` (reason), `-maner` (manner).",
          "examples": [
            [
              "keto, kete, keloka, kewatu",
              "what, who, where, when"
            ],
            [
              "moyto, moyte, moyloka, moywatu",
              "everything, everyone, everywhere, always"
            ]
          ]
        },
        {
          "title": "Determiners need a noun",
          "text": "`Ke, hin, den, ban, moy, nil, alo`, and `sama` are determiners and must be followed by a noun. Use the `-to/-te` pronoun forms when standing alone.",
          "examples": [
            [
              "Moy nini doxo.",
              "Every child reads."
            ],
            [
              "Moyte doxo.",
              "Everyone reads."
            ]
          ]
        },
        {
          "title": "Comparison",
          "text": "Use `kom` after `-pul, -mo, -kwanti`, and `-numer` forms: `denpul kom mi` (like me), `denmo` day `kom misu` to (as big as mine), `denkwanti risi kom yu` (as much rice as you).",
          "examples": [
            [
              "Hin baytu sen denmo day kom misu to.",
              "This house is as big as mine."
            ],
            [
              "Mi hare dennumer kitabu kom yu.",
              "I have as many books as you."
            ]
          ]
        }
      ],
      "tables": [
        {
          "title": "The correlative grid (forms only)",
          "head": [
            "Row",
            "`ke-`",
            "`hin-`",
            "`den-`",
            "`ban-`",
            "`moy-`",
            "`nil-`",
            "`alo-`",
            "`sama-`"
          ],
          "rows": [
            [
              "thing (-to)",
              "`keto`",
              "`hinto`",
              "`dento`",
              "`banto`",
              "`moyto`",
              "`nilto`",
              "`aloto`",
              "`samato`"
            ],
            [
              "animate (`-te`)",
              "`kete`",
              "`hinte`",
              "`dente`",
              "`bante`",
              "`moyte`",
              "`nilte`",
              "`alote`",
              "`samate`"
            ],
            [
              "possession (`-su`)",
              "`kesu`",
              "`hinsu`",
              "`densu`",
              "`bansu`",
              "`moysu`",
              "`nilsu`",
              "`alosu`",
              "`samasu`"
            ],
            [
              "kind (`-pul`)",
              "`kepul`",
              "`hinpul`",
              "`denpul`",
              "`banpul`",
              "`moypul`",
              "`nilpul`",
              "`alopul`",
              "`samapul`"
            ],
            [
              "degree (`-mo`)",
              "`kemo`",
              "`hinmo`",
              "`denmo`",
              "`banmo`",
              "`moymo`",
              "`nilmo`",
              "`alomo`",
              "`samamo`"
            ],
            [
              "quantity (`-kwanti`)",
              "`kekwanti`",
              "`hinkwanti`",
              "`denkwanti`",
              "`bankwanti`",
              "`moykwanti`",
              "`nilkwanti`",
              "`alokwanti`",
              "`samakwanti`"
            ],
            [
              "number (`-numer`)",
              "`kenumer`",
              "`hinnumer`",
              "`dennumer`",
              "`bannumer`",
              "`moynumer`",
              "`nilnumer`",
              "`alonumer`",
              "`samanumer`"
            ],
            [
              "place (`-loka`)",
              "`keloka`",
              "`hinloka`",
              "`denloka`",
              "`banloka`",
              "`moyloka`",
              "`nilloka`",
              "`aloloka`",
              "`samaloka`"
            ],
            [
              "time (`-watu`)",
              "`kewatu`",
              "`hinwatu`",
              "`denwatu`",
              "`banwatu`",
              "`moywatu`",
              "`nilwatu`",
              "`alowatu`",
              "`samawatu`"
            ],
            [
              "reason (`-seba`)",
              "`keseba`",
              "`hinseba`",
              "`denseba`",
              "`banseba`",
              "`moyseba`",
              "`nilseba`",
              "`aloseba`",
              "`samaseba`"
            ],
            [
              "manner (`-maner`)",
              "`kemaner`",
              "`hinmaner`",
              "`denmaner`",
              "`banmaner`",
              "`moymaner`",
              "`nilmaner`",
              "`alomaner`",
              "`samamaner`"
            ]
          ],
          "note": "Determiners: `ke, hin, den, ban, moy, nil, alo, sama` + noun. Full English glosses are in Quick reference."
        }
      ]
    },
    {
      "id": "numbers",
      "title": "Numbers, ordinals, and months",
      "source": "Grammar pp. 51–54",
      "lead": "Numbers are regular and combine by place value. Dates use `fe` when a time phrase needs a preposition, and the months are numbered rather than named.",
      "rules": [
        {
          "title": "Building numbers",
          "text": "Tens add `-des`: `duades` (20), `tigades` (30). Hundreds add `-cen`: `duacen` (200). Thousands use `kilo`: `dua kilo` (2,000). Combine place values in order: `caredes sabe` = 47.",
          "examples": [
            [
              "caredes sabe kitabu",
              "forty-seven books"
            ],
            [
              "dua kilo duades sisa",
              "2,026"
            ]
          ]
        },
        {
          "title": "Ordinals and fractions",
          "text": "Ordinals add `-yum`: `unyum` (first), `tigayum` (third). Fractions use the numerator plus `of-` + denominator: `un ofcare` = one fourth.",
          "examples": [
            [
              "limayum din",
              "the fifth day"
            ],
            [
              "un ofcare de pingo",
              "a quarter of an apple"
            ]
          ]
        },
        {
          "title": "Months",
          "text": "Months are `mesi` + number: `mesi un` = January, `mesi lima` = May, `mesi des dua` = December.",
          "examples": [
            [
              "Misu xencudin sen fe mesi lima.",
              "My birthday is in May."
            ]
          ]
        }
      ],
      "tables": [
        {
          "title": "Numbers at a glance",
          "head": [
            "Range",
            "Forms"
          ],
          "rows": [
            [
              "0–10",
              "`nil, un, dua, tiga, care, lima, sisa, sabe, oco, nue, des`"
            ],
            [
              "Tens",
              "`duades` 20, `tigades` 30, `caredes` 40, `limades` 50, `sisades` 60, `sabedes` 70, `ocodes` 80, `nuedes` 90"
            ],
            [
              "Hundreds",
              "`cen` 100, `duacen` 200, `tigacen` 300, `carecen` 400, `limacen` 500"
            ],
            [
              "Thousands",
              "`kilo` 1,000; `dua kilo` 2,000; `tiga kilo` 3,000"
            ],
            [
              "Ordinals",
              "`unyum, duayum, tigayum, careyum, limayum, sisayum, sabeyum, ocoyum, nueyum, desyum`"
            ],
            [
              "Fractions",
              "`un ofdua, un oftiga, un ofcare, un oflima, un ofsisa, un ofsabe, un ofoco, un ofnue, un ofdes`"
            ],
            [
              "Months",
              "`mesi un` (Jan), `mesi dua` (Feb), `mesi tiga` (Mar), `mesi care` (Apr), `mesi lima` (May), `mesi sisa` (Jun), `mesi sabe` (`Jul`), `mesi oco` (Aug), `mesi nue` (Sep), `mesi des` (Oct), `mesi des un` (Nov), `mesi des dua` (Dec)"
            ]
          ]
        }
      ]
    },
    {
      "id": "verbforms",
      "title": "Tense, aspect, and mood",
      "source": "Grammar pp. 55–63",
      "lead": "Tense and mood markers open the verb phrase. Compound tenses combine two markers; aspect prefixes add duration or habit. Negation follows the tense marker.",
      "rules": [
        {
          "title": "Simple tenses",
          "text": "The dictionary verb form can express the general present. `Le` marks past, `xa` marks future, and `nun` may explicitly mark present. `Jale` and `jaxa` mark immediate past and future.",
          "examples": [
            [
              "Mi (nun) yam pingo.",
              "I eat / I am eating the apple."
            ],
            [
              "Mi le yam pingo.",
              "I ate the apple."
            ],
            [
              "Mi xa yam pingo.",
              "I will eat the apple."
            ]
          ]
        },
        {
          "title": "Compound tenses",
          "text": "Combine two markers: `le nun` (past progressive), `nun le` (present perfect), `xa le` (future perfect), `xa nun` (future progressive), `le xa` (past prospective). Context decides whether the combination is natural.",
          "examples": [
            [
              "Mi le nun doxo.",
              "I was reading."
            ],
            [
              "Mi xa le fini ergo.",
              "I will have finished the work."
            ]
          ]
        },
        {
          "title": "Negation and questions",
          "text": "No follows the tense/mood marker and precedes the verb and its adverbs. `Kam` opens a yes/no question. `Am` no gives a negative command.",
          "examples": [
            [
              "Mi le no yam pingo.",
              "I did not eat the apple."
            ],
            [
              "Kam yu suki kafe?",
              "Do you like coffee?"
            ],
            [
              "Am no yam pingo!",
              "Don't eat the apple!"
            ]
          ]
        },
        {
          "title": "Passive, conditional, imperative, infinitive",
          "text": "`Be-` marks passive voice; the agent is expressed as a direct object without a preposition. `Ger` marks conditional. `Am` marks imperative/jussive. `Na` marks the infinitive.",
          "examples": [
            [
              "Pingo le beyam mi.",
              "The apple was eaten by me."
            ],
            [
              "Mi ger yam pingo eger mi sen yamkal.",
              "I would eat the apple if I were hungry."
            ],
            [
              "Am klosi janela.",
              "Close the window."
            ],
            [
              "Mi suki na lala.",
              "I like to sing."
            ]
          ]
        }
      ],
      "tables": [
        {
          "title": "Tense and aspect markers",
          "head": [
            "Form",
            "Marker(s)",
            "Example"
          ],
          "rows": [
            [
              "General present",
              "(`nun`)",
              "`Mi` (`nun`) `yam pingo`."
            ],
            [
              "Past",
              "`le`",
              "`Mi le yam pingo`."
            ],
            [
              "Future",
              "`xa`",
              "`Mi xa yam pingo`."
            ],
            [
              "Immediate past",
              "`jale`",
              "`Mi jale yam pingo`."
            ],
            [
              "Immediate future",
              "`jaxa`",
              "`Mi jaxa yam pingo`."
            ],
            [
              "Present progressive",
              "(`nun`) `nun`",
              "`Mi nun yam pingo`."
            ],
            [
              "Present perfect",
              "`nun le`",
              "`Mi nun le yam pingo`."
            ],
            [
              "Past progressive",
              "`le nun`",
              "`Mi le nun yam pingo`."
            ],
            [
              "Past perfect",
              "`le le`",
              "`Mi le le yam pingo`."
            ],
            [
              "Future progressive",
              "`xa nun`",
              "`Mi xa nun yam pingo`."
            ],
            [
              "Future perfect",
              "`xa le`",
              "`Mi xa le yam pingo`."
            ],
            [
              "Habitual/durative",
              "`du-`",
              "`Mi le` duyam `pingo`."
            ],
            [
              "Conditional",
              "`ger`",
              "`Mi ger yam pingo`."
            ],
            [
              "Passive",
              "`be-`",
              "`Pingo` beyam `mi`."
            ],
            [
              "Imperative/jussive",
              "`am`",
              "`Am yam`! / `Te am yam`."
            ],
            [
              "Infinitive",
              "`na`",
              "`Mi suki na lala`."
            ]
          ],
          "note": "The particle order is tense/mood → negation → modifying adverb → adverb → passive `be-` → durative `du-` → verb."
        }
      ],
      "notes": [
        "Tense may be established once and omitted on later verbs in the same clause.",
        "In conditional sentences, the if-clause uses the dictionary verb form; other subordinate clauses keep obligatory tense marking."
      ],
      "links": [
        {
          "label": "Open the Verb tense lab",
          "href": "#/grammar/tenses"
        }
      ]
    },
    {
      "id": "wordorder",
      "title": "Phrase and sentence word order",
      "source": "Grammar pp. 64–81",
      "lead": "Globasa has strict phrase order. Once the noun-phrase and verb-phrase slots are learned, most sentence errors disappear.",
      "rules": [
        {
          "title": "Noun phrase order",
          "text": "Determiner / possessive / quantifier + adverb + adjective(s) + noun. A complex adjective phrase with a preposition follows the noun.",
          "examples": [
            [
              "hin misu care daymo lama kitabu",
              "these four very old books of mine"
            ],
            [
              "kitabu eskrido fal misu doste",
              "the book written by my friend"
            ]
          ]
        },
        {
          "title": "Verb phrase order",
          "text": "Tense/mood marker + affirmation/negation + modifying adverb + adverb + passive + durative + verb. Adverbs normally precede the verb; with an object they follow the object.",
          "examples": [
            [
              "Mi le no velosi yam pingo.",
              "I did not eat the apple quickly."
            ],
            [
              "Mi le gibe kitabu tas te voluntirli.",
              "I gave the book to him willingly."
            ]
          ]
        },
        {
          "title": "SVO and marked orders",
          "text": "Default: Subject + Verb + Object. S-O-V and O-S-V are possible with `el` before the object, but are marked/poetic. Prepositional phrases follow the object.",
          "examples": [
            [
              "Patre mwa matre.",
              "The father kisses the mother."
            ],
            [
              "Patre el matre mwa.",
              "The father kisses the mother. (S-O-V)"
            ],
            [
              "El matre patre mwa.",
              "The father kisses the mother. (O-S-V)"
            ]
          ]
        },
        {
          "title": "Copula and infinitive complements",
          "text": "`Sen` links subjects to noun, adjective, prepositional, or clausal complements. `Na` + verb forms infinitive complements after verbs and auxiliaries.",
          "examples": [
            [
              "Myaw sen in sanduku.",
              "The cat is in the box."
            ],
            [
              "Mi suki na lala.",
              "I like to sing."
            ],
            [
              "Imi musi na idi cel eskol.",
              "We must go to school."
            ]
          ]
        },
        {
          "title": "Questions",
          "text": "`Kam` opens a yes/no question. Question words occupy the position of the answer. A colon question presents alternatives after the questioned phrase.",
          "examples": [
            [
              "Kam yu suki kafe?",
              "Do you like coffee?"
            ],
            [
              "Yu ogar keloka?",
              "Where do you live?"
            ],
            [
              "Yu suki keto: kafe or cay?",
              "Do you like coffee or tea?"
            ]
          ]
        }
      ],
      "tables": [
        {
          "title": "Phrase order",
          "head": [
            "Phrase",
            "Order"
          ],
          "rows": [
            [
              "Noun phrase",
              "determiner / possessive / quantifier + adverb + adjective(s) + noun"
            ],
            [
              "Verb phrase",
              "tense/mood + negation + modifying adverb + adverb + passive + durative + verb"
            ],
            [
              "Prepositional phrase",
              "preposition + noun phrase"
            ],
            [
              "Complex adjective",
              "noun + adjective phrase (+ prepositional phrase)"
            ],
            [
              "Core sentence",
              "subject + verb + object + other phrases"
            ]
          ]
        }
      ]
    },
    {
      "id": "relatives",
      "title": "Relative clauses",
      "source": "Grammar pp. 68–72",
      "lead": "Relative clauses are one of Globasa's signature structures. `Hu` introduces the clause; a resumptive element marks the role of the antecedent inside it.",
      "rules": [
        {
          "title": "Subject and object relatives",
          "text": "Use `da` when the antecedent is the subject or object inside the clause. The relative clause keeps normal order: `hu da lubi mi` (who loves me) vs `hu mi lubi da` (whom I love).",
          "examples": [
            [
              "Te sen femixu hu da lubi mi.",
              "She is the woman who loves me."
            ],
            [
              "Te sen femixu hu mi lubi da.",
              "She is the woman whom I love."
            ]
          ]
        },
        {
          "title": "Possessive relatives",
          "text": "Use `dasu` for the possessor inside the clause: `manixu hu dasu sodar kone mi` = the `man` whose brother knows me. `Tesu` is not used in this position.",
          "examples": [
            [
              "Te sen manixu hu dasu sodar kone mi.",
              "He is the man whose brother knows me."
            ]
          ]
        },
        {
          "title": "Place, time, manner, reason",
          "text": "Use `denloka, denwatu, denmaner`, or `denseba` as the resumptive adverb. A prepositional alternative uses `da`: `hu mi ergo` in `da`.",
          "examples": [
            [
              "Kitabudom hu mi ergo denloka sen day.",
              "The library where I work is big."
            ],
            [
              "Din hu mi xa preata denwatu sen lunadin.",
              "The day when I will arrive is Monday."
            ]
          ]
        },
        {
          "title": "Non-specific and `feki` clauses",
          "text": "To/`te` + `hu` handles non-specific antecedents: to `hu mi vole da` = what I want. `Feki` introduces a shorter noun-modifying clause and can replace `hu` plus a resumptive adverb.",
          "examples": [
            [
              "Am gibe tas mi to hu mi vole da.",
              "Give me what I want."
            ],
            [
              "Mi no suki restoran feki imi le yam.",
              "I don't like the restaurant where we ate."
            ]
          ]
        }
      ],
      "tables": [
        {
          "title": "Relative-clause patterns",
          "head": [
            "Role of antecedent",
            "Pattern",
            "Example"
          ],
          "rows": [
            [
              "Subject",
              "`hu` + `da` + predicate",
              "`femixu hu da lubi mi`"
            ],
            [
              "Object",
              "`hu` + subject + predicate + `da`",
              "`femixu hu mi lubi da`"
            ],
            [
              "Possessor",
              "`hu` + `dasu` + possessed noun",
              "`manixu hu dasu sodar kone mi`"
            ],
            [
              "Place",
              "`hu` + clause + `denloka / hu` + in `da`",
              "`kitabudom hu mi ergo denloka`"
            ],
            [
              "Time",
              "`hu` + clause + `denwatu`",
              "`din hu mi xa preata denwatu`"
            ],
            [
              "Manner",
              "`hu` + clause + `denmaner`",
              "`maner hu yu ergo denmaner`"
            ],
            [
              "Reason",
              "`hu` + clause + `denseba`",
              "`seba hu yu` no `xwexi denseba`"
            ],
            [
              "Non-specific",
              "to/`te` + `hu` + clause + `da`",
              "to `hu mi vole da`"
            ],
            [
              "Short modifier",
              "noun + `feki` + clause",
              "`restoran feki imi le yam`"
            ]
          ]
        }
      ]
    },
    {
      "id": "formation",
      "title": "Word formation",
      "source": "Grammar pp. 82–94",
      "lead": "Globasa derivation is regular. Prefixes do not change word class; suffixes do. The most useful affixes cover possession, adjectives, adverbs, transitivity, state, and direction.",
      "rules": [
        {
          "title": "Core suffixes",
          "text": "`-su` makes a possessive adjective; `-li` makes an adjective from a noun; `-mo` makes an adverb modifier; `-ya` makes an abstract noun. `-gi` makes a causative/transitive verb; `-cu` marks an intransitive change.",
          "examples": [
            [
              "Englili cay",
              "English tea"
            ],
            [
              "daymo day",
              "very big"
            ],
            [
              "Mi le hahagi nini.",
              "I made the child laugh."
            ],
            [
              "Dwer le bukacu.",
              "The door opened."
            ]
          ]
        },
        {
          "title": "Active vs. inactive state",
          "text": "`-ne` describes the active process or state: `bukane dwer` = the opening door. `-do` describes an inactive state: `klosido dwer` = the closed door.",
          "examples": [
            [
              "bukane dwer",
              "the opening door"
            ],
            [
              "klosido dwer",
              "the closed door"
            ]
          ]
        },
        {
          "title": "Useful prefixes",
          "text": "`xor-` = begin/come to; `nen-` = not/`un-`; `ri-` = again; `ru-` = back; `aw-` = away; `pre-` = here/there, arrival; `pos-` = opposite; `day-` = big; `lil-` = small; `ja-` = immediate.",
          "examples": [
            [
              "xorsomno",
              "fall asleep"
            ],
            [
              "nenmuhim",
              "unimportant"
            ],
            [
              "ridoxo",
              "reread"
            ],
            [
              "daybaytu",
              "mansion"
            ]
          ]
        }
      ],
      "tables": [
        {
          "title": "High-value affixes",
          "head": [
            "Affix",
            "Function",
            "Example"
          ],
          "rows": [
            [
              "`-su`",
              "possessive adjective",
              "`misu` (my)"
            ],
            [
              "`-li`",
              "of, relating to",
              "Englili (English)"
            ],
            [
              "`-mo`",
              "adverb modifier",
              "`daymo` (very)"
            ],
            [
              "`-ya`",
              "abstract noun",
              "`dosteya` (friendship)"
            ],
            [
              "`-gi`",
              "causative/transitive",
              "`hahagi` (make laugh)"
            ],
            [
              "`-cu`",
              "intransitive change",
              "`bukacu` (become open)"
            ],
            [
              "`-ne`",
              "active state/process",
              "`bukane` (opening)"
            ],
            [
              "`-do`",
              "inactive state",
              "`klosido` (closed)"
            ],
            [
              "`be-`",
              "passive voice",
              "beyam (be eaten)"
            ],
            [
              "`du-`",
              "habitual/durative; gerund",
              "duyam (eating habitually)"
            ],
            [
              "`xor-`",
              "begin, come to",
              "`xorsomno` (fall asleep)"
            ],
            [
              "`nen-`",
              "not, `un-`",
              "`nenmuhim` (unimportant)"
            ],
            [
              "`ri-`",
              "again",
              "`ridoxo` (reread)"
            ],
            [
              "`ru-`",
              "back",
              "`ruata` (return)"
            ],
            [
              "`aw-`",
              "away",
              "`awidi` (leave)"
            ],
            [
              "`day-`",
              "big, much",
              "`daybaytu` (mansion)"
            ],
            [
              "`lil-`",
              "small, little",
              "`lilbaytu` (cottage)"
            ]
          ]
        }
      ]
    },
    {
      "id": "traps",
      "title": "Common traps",
      "source": "Grammar pp. 12–98",
      "lead": "These are the errors English speakers make most often. Check them before translating a sentence.",
      "rules": [],
      "tables": [
        {
          "title": "Avoid → say instead",
          "head": [
            "Avoid",
            "Say instead",
            "Why"
          ],
          "rows": [
            [
              "the dog / dogs",
              "`bwaw`",
              "No articles and no plural suffix."
            ],
            [
              "`Mi hox`.",
              "`Mi sen hox`.",
              "Use `sen` before an adjective predicate."
            ],
            [
              "`Mi idi eskol`.",
              "`Mi idi cel eskol`.",
              "`Idi` is intransitive; `cel` marks destination."
            ],
            [
              "`Mi le gibe kitabu te`.",
              "`Mi le gibe kitabu tas te`.",
              "`Tas` marks the recipient."
            ],
            [
              "`Bwaw le bujo tas myaw`.",
              "`Bwaw le bujo myaw`.",
              "A direct object takes no preposition."
            ],
            [
              "`femixu hu lubi mi`",
              "`femixu hu da lubi mi`",
              "The subject gap needs resumptive `da`."
            ],
            [
              "`Kitabu hu mi le kari sen neo`.",
              "`Kitabu hu mi le kari da sen neo`.",
              "The object gap needs resumptive `da`."
            ],
            [
              "`Moy doxo`.",
              "`Moy nini doxo`. / `Moyte doxo`.",
              "Determiners need a noun; use a pronoun form to stand alone."
            ],
            [
              "`Mi` no `le yam pingo`.",
              "`Mi le` no `yam pingo`.",
              "Tense marker precedes negation."
            ],
            [
              "`Mi sen samaloka`?",
              "`Mi sen samaloka`.",
              "`Samaloka` is a place adverb; questions need `kam` or a question word."
            ]
          ]
        }
      ]
    }
  ],
  "studyPlan": {
    "title": "A seven-step study path",
    "intro": "Read the summary in this order. After each step, practise the linked concepts from the dashboard; the grammar is small enough to cycle through in a week.",
    "steps": [
      {
        "title": "1. Sounds and stress",
        "text": "Read the alphabet and stress rules aloud. Practise the words with c, x, j, and h until the values are automatic.",
        "concepts": [
          "bas-alphabet"
        ]
      },
      {
        "title": "2. Words and phrase order",
        "text": "Learn noun/verb words, adjectives vs. adverbs, and the noun-phrase order.",
        "concepts": [
          "wc-noun-verb",
          "wc-adjective-adverb",
          "syn-adjective"
        ]
      },
      {
        "title": "3. The verb phrase",
        "text": "Learn tense markers, negation, transitivity, and copulas. Say one sentence in the present, past, and future.",
        "concepts": [
          "syn-tense",
          "syn-negation",
          "wc-transitive",
          "wc-intransitive"
        ]
      },
      {
        "title": "4. The sentence core",
        "text": "Drill strict SVO, mandatory `sen`, and the copula verbs until the patterns are automatic.",
        "concepts": [
          "syn-svo",
          "syn-copula",
          "syn-copula-verbs"
        ]
      },
      {
        "title": "5. Pronouns and correlatives",
        "text": "Learn the pronoun table and the correlative grid. Use the full table in Quick reference while memorizing.",
        "concepts": [
          "bas-pronouns",
          "cor-ke",
          "cor-hin-den",
          "cor-ban-moy-nil"
        ]
      },
      {
        "title": "6. Relative clauses",
        "text": "Practise `hu` + `da, dasu`, and the adverbial relatives. These are the most distinctive Globasa structures.",
        "concepts": [
          "rel-subject",
          "rel-object",
          "rel-possessive",
          "rel-adjunct"
        ]
      },
      {
        "title": "7. Derivation and review",
        "text": "Learn the high-value affixes, then return to the dashboard and mix concepts. Read the common-traps table before each translation session.",
        "concepts": [
          "bas-word-formation",
          "bas-infinitive",
          "bas-imperative"
        ]
      }
    ]
  }
};
