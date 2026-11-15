/* Hand-authored Globasa curriculum. Edit the concepts array below. */
window.GLOBASA_CURRICULUM = {
  "version": 1,
  "areas": [
    {
      "id": "foundations",
      "title": "Foundations & expansion",
      "blurb": "Sounds, nouns, pronouns, numbers, prepositions, and derivation."
    },
    {
      "id": "word-classes",
      "title": "Word categorization",
      "blurb": "Nouns, verbs, adjectives, adverbs, and verb transitivity."
    },
    {
      "id": "syntax",
      "title": "Rigid syntax",
      "blurb": "Strict SVO, adjective placement, the copula, tense, and negation."
    },
    {
      "id": "tenses",
      "title": "Verb tenses",
      "blurb": "Past, present, future, aspect, and the common compound tenses."
    },
    {
      "id": "relatives",
      "title": "Relative clauses",
      "blurb": "{{hu}}, resumptive {{da, dasu}}, and correlative adverbs."
    },
    {
      "id": "correlatives",
      "title": "Correlatives",
      "blurb": "The complete correlative table and its sentence behavior."
    },
    {
      "id": "vocabulary",
      "title": "Vocabulary in action",
      "blurb": "High-frequency verbs, objects, and daily situations in realistic sentences."
    },
    {
      "id": "nuances",
      "title": "Nuances & style",
      "blurb": "The author's follow-up notes: -ing forms, number, states and passives, derivation, clause types, and the real sentences behind them."
    },
    {
      "id": "reading",
      "title": "Reading real Globasa",
      "blurb": "Thirty short stories, read closely: comprehension, vocabulary in context, translation, and the grammar that carries the plot."
    }
  ],
  "concepts": [
    {
      "id": "bas-alphabet",
      "area": "foundations",
      "title": "Alphabet and sounds",
      "blurb": "Twenty-four letters, five vowels, and a small set of pronunciation rules.",
      "refs": [
        "Grammar pp. 2–11",
        "Lesson 1"
      ],
      "notes": [
        "The alphabet has 24 letters: a b c d e f g h i j k l m n o p r s t u v w x y z. There is no q.",
        "C is always /t͡ʃʰ/ as in chair; it is never [k] or [s].",
        "X is /ʃ/ as in shop and is never [ks]. J is /d͡ʒ/ as in jazz.",
        "S is always voiceless [s]; vowels are pronounced as in Spanish or Italian."
      ],
      "examples": [
        [
          "cay, cokolate, cudu",
          "tea, chocolate, get — all begin with /t͡ʃʰ/."
        ],
        [
          "xanti, xwexi, broxa",
          "peace, learn, brush — x is /ʃ/."
        ],
        [
          "basa, bete, idi",
          "language, child, go — vowels as in Spanish."
        ]
      ],
      "exercises": [
        {
          "id": "bas-alphabet-1",
          "type": "mcq",
          "prompt": "Which letter is pronounced like 'ch' in chair?",
          "options": [
            "c",
            "k",
            "s",
            "x",
            "j"
          ],
          "correct": 0,
          "explanation": "C is /t͡ʃʰ/. K is /kʰ/, s is /s/, x is /ʃ/, and j is /d͡ʒ/.",
          "passage": null,
          "dyn": {
            "kind": "definition",
            "prompt": "Which letter is {term}?",
            "pool": [
              [
                "pronounced like 'ch' in chair",
                "c",
                "C is /t͡ʃʰ/. K is /kʰ/, s is /s/, x is /ʃ/, and j is /d͡ʒ/."
              ],
              [
                null,
                "k",
                null
              ],
              [
                null,
                "s",
                null
              ],
              [
                null,
                "x",
                null
              ],
              [
                null,
                "j",
                null
              ],
              [
                "pronounced like 'k' in kite",
                "k",
                "K is always /kʰ/."
              ],
              [
                "pronounced like 'sh' in shop",
                "x",
                "X is /ʃ/ and is never [ks]."
              ],
              [
                "pronounced like 'j' in jazz",
                "j",
                "J is /d͡ʒ/, as in jazz."
              ],
              [
                "pronounced like 'y' in yes",
                "y",
                "Y is /j/, as in yes."
              ]
            ]
          }
        },
        {
          "id": "bas-alphabet-2",
          "type": "mcq",
          "prompt": "Which letter is never pronounced [k]?",
          "options": [
            "c",
            "k",
            "g",
            "b",
            "d"
          ],
          "correct": 0,
          "explanation": "C is always /t͡ʃʰ/, never [k] as in cup or [s] as in cent.",
          "passage": null,
          "dyn": {
            "kind": "definition",
            "prompt": "Which letter is {term}?",
            "pool": [
              [
                "never pronounced [k]",
                "c",
                "C is always /t͡ʃʰ/, never [k] as in cup or [s] as in cent."
              ],
              [
                null,
                "k",
                null
              ],
              [
                null,
                "g",
                null
              ],
              [
                null,
                "b",
                null
              ],
              [
                null,
                "d",
                null
              ],
              [
                "always hard [g]",
                "g",
                "G is always hard /g/."
              ],
              [
                "always [b]",
                "b",
                "B is always [b]."
              ],
              [
                "always [d]",
                "d",
                "D is always [d]."
              ],
              [
                "always voiced [z]",
                "z",
                "Z is voiced [z]."
              ]
            ]
          }
        },
        {
          "id": "bas-alphabet-3",
          "type": "mcq",
          "prompt": "Which letter is always voiceless [s]?",
          "options": [
            "s",
            "z",
            "x",
            "j",
            "c"
          ],
          "correct": 0,
          "explanation": "S is always [s]; z is voiced [z], x is [ʃ], j is [d͡ʒ], and c is [t͡ʃʰ].",
          "passage": null,
          "dyn": {
            "kind": "definition",
            "prompt": "Which letter is {term}?",
            "pool": [
              [
                "always voiceless [s]",
                "s",
                "S is always [s]; z is voiced [z], x is [ʃ], j is [d͡ʒ], and c is [t͡ʃʰ]."
              ],
              [
                null,
                "z",
                null
              ],
              [
                null,
                "x",
                null
              ],
              [
                null,
                "j",
                null
              ],
              [
                null,
                "c",
                null
              ],
              [
                "always voiced [z]",
                "z",
                "Z is the voiced counterpart of s."
              ],
              [
                "always [ʃ]",
                "x",
                "X is [ʃ], as in shop."
              ],
              [
                "always [d͡ʒ]",
                "j",
                "J is [d͡ʒ], as in jazz."
              ],
              [
                "always [t͡ʃʰ]",
                "c",
                "C is [t͡ʃʰ], as in chair."
              ]
            ]
          }
        },
        {
          "id": "bas-alphabet-4",
          "type": "mcq",
          "prompt": "Which letter sounds like 'sh' in shop?",
          "options": [
            "x",
            "c",
            "s",
            "h",
            "j"
          ],
          "correct": 0,
          "explanation": "X represents /ʃ/ and is never [ks].",
          "passage": null,
          "dyn": {
            "kind": "definition",
            "prompt": "Which letter {term}?",
            "pool": [
              [
                "sounds like 'sh' in shop",
                "x",
                "X represents /ʃ/ and is never [ks]."
              ],
              [
                null,
                "c",
                null
              ],
              [
                null,
                "s",
                null
              ],
              [
                null,
                "h",
                null
              ],
              [
                null,
                "j",
                null
              ],
              [
                "sounds like 'ch' in chair",
                "c",
                "C is /t͡ʃʰ/."
              ],
              [
                "sounds like 's' in sun",
                "s",
                "S is [s]."
              ],
              [
                "sounds like 'j' in jazz",
                "j",
                "J is [d͡ʒ]."
              ],
              [
                "sounds like 'z' in zoo",
                "z",
                "Z is [z]."
              ]
            ]
          }
        },
        {
          "id": "bas-alphabet-5",
          "type": "mcq",
          "prompt": "Which letter sounds like 'j' in jazz?",
          "options": [
            "j",
            "y",
            "g",
            "z",
            "c"
          ],
          "correct": 0,
          "explanation": "J is /d͡ʒ/. Y is /j/ as in yes, and g is always hard /g/.",
          "passage": null,
          "dyn": {
            "kind": "definition",
            "prompt": "Which letter {term}?",
            "pool": [
              [
                "sounds like 'j' in jazz",
                "j",
                "J is /d͡ʒ/. Y is /j/ as in yes, and g is always hard /g/."
              ],
              [
                null,
                "y",
                null
              ],
              [
                null,
                "g",
                null
              ],
              [
                null,
                "z",
                null
              ],
              [
                null,
                "c",
                null
              ],
              [
                "sounds like 'y' in yes",
                "y",
                "Y is /j/."
              ],
              [
                "sounds like hard 'g' in get",
                "g",
                "G is always hard /g/."
              ],
              [
                "sounds like 'sh' in shop",
                "x",
                "X is [ʃ]."
              ],
              [
                "sounds like 'ch' in chair",
                "c",
                "C is [t͡ʃʰ]."
              ]
            ]
          }
        },
        {
          "id": "bas-alphabet-6",
          "type": "mcq",
          "prompt": "Which statement follows from the passage?",
          "options": [
            "The letters c and x represent different sounds, and q is not used.",
            "The letters c and x represent the same sound, and q is used for /k/.",
            "The letter c represents /k/, and x represents /tʃ/.",
            "The alphabet uses q instead of k.",
            "The letter x represents [ks], as in English taxi."
          ],
          "correct": 0,
          "explanation": "The passage states c = /tʃ/, x = /ʃ/, and no q; /k/ is written k.",
          "passage": "Globasa writes the sound /tʃ/ with c and the sound /ʃ/ with x. The alphabet has no q; the sound /k/ is always written k."
        },
        {
          "id": "bas-alphabet-7",
          "type": "fill",
          "prompt": "The letter ___ is pronounced /t͡ʃʰ/, as in chair.",
          "blanks": [
            {
              "answer": "c",
              "accept": []
            }
          ],
          "explanation": "C represents the voiceless postalveolar affricate."
        },
        {
          "id": "bas-alphabet-8",
          "type": "fill",
          "prompt": "The letter ___ is never pronounced [ks], as in taxi.",
          "blanks": [
            {
              "answer": "x",
              "accept": []
            }
          ],
          "explanation": "X is /ʃ/ in every position."
        },
        {
          "id": "bas-alphabet-9",
          "type": "fill",
          "prompt": "The name of the letter b is ___.",
          "blanks": [
            {
              "answer": "ibe",
              "accept": []
            }
          ],
          "explanation": "Consonant letter names follow the pattern i + consonant + e: {{ibe, ice, ide}}."
        },
        {
          "id": "bas-alphabet-10",
          "type": "fill",
          "prompt": "Globasa has no letter ___.",
          "blanks": [
            {
              "answer": "q",
              "accept": []
            }
          ],
          "explanation": "The alphabet omits q; [k] is written k."
        }
      ]
    },
    {
      "id": "bas-nouns",
      "area": "foundations",
      "title": "Nouns, articles, gender",
      "blurb": "Globasa nouns have no articles and no plural suffix; gender and number are optional and explicit.",
      "refs": [
        "Grammar p. 12",
        "Lesson 1"
      ],
      "notes": [
        "There is no definite or indefinite article: {{janela}} = a window, the window, or the windows.",
        "Nouns are not marked for plural: {{bwaw}} = dog or dogs. Use {{plu}} to emphasize plurality.",
        "Use {{un}} to emphasize singularity: {{un denta}} = one tooth.",
        "{{Fem-}} and {{man-}} emphasize gender: {{femnini}} (girl), {{mannini}} (boy), {{femgami}} (wife), {{mangami}} (husband)."
      ],
      "examples": [
        [
          "Bwaw sen lil. Mi hare dua bwaw.",
          "The dog is small. I have two dogs."
        ],
        [
          "Misu femsodar sen alimyen.",
          "My sister is a teacher."
        ],
        [
          "Mi hare dua bwaw: un manbwaw ji un fembwaw.",
          "I have two dogs: a male dog and a female dog."
        ]
      ],
      "exercises": [
        {
          "id": "bas-nouns-1",
          "type": "mcq",
          "prompt": "What does the passage show about {{bwaw}}?",
          "options": [
            "The same form {{bwaw}} serves as both singular and plural; number comes from context or a numeral.",
            "{{Bwaw}} must become bwaws in the plural.",
            "{{Bwaw}} is always definite and cannot mean 'a dog'.",
            "{{Dua}} changes {{bwaw}} into a verb.",
            "The plural is marked by the article {{den}}."
          ],
          "correct": 0,
          "explanation": "Globasa nouns have no plural suffix; {{dua bwaw}} makes the plurality explicit.",
          "passage": "Bwaw sen lil. Mi hare dua bwaw."
        },
        {
          "id": "bas-nouns-2",
          "type": "mcq",
          "prompt": "Which sentence expresses the generic statement 'Dogs are small'?",
          "options": [
            "{{Bwaw sen lil.}}",
            "{{Bwaws sen lil.}}",
            "{{Bwawes sen lil.}}",
            "{{Den bwaw sen lil.}}",
            "{{Bwaw sen lils.}}"
          ],
          "correct": 0,
          "explanation": "{{Bwaw}} is unmarked for number; the same sentence covers 'the dog' and 'the dogs'.",
          "passage": null
        },
        {
          "id": "bas-nouns-3",
          "type": "mcq",
          "prompt": "Which sentence uses {{un}} correctly to emphasize singularity?",
          "options": [
            "{{Mi hare un kitabu, no dua.}}",
            "{{Mi hare un kitabu sen.}}",
            "{{Un mi hare kitabu.}}",
            "{{Mi hare kitabu un.}}",
            "{{Mi un hare kitabu.}}"
          ],
          "correct": 0,
          "explanation": "{{Un}} is the numeral 'one' and can emphasize a single item, but it is not an indefinite article.",
          "passage": null
        },
        {
          "id": "bas-nouns-4",
          "type": "mcq",
          "prompt": "Which form means 'girl'?",
          "options": [
            "{{femnini}}",
            "{{mannini}}",
            "{{nini fem}}",
            "{{fem nini}}",
            "ninfem"
          ],
          "correct": 0,
          "explanation": "{{Femnini}} uses the gender prefix {{fem-}} with {{nini}}. {{Mannini}} means 'boy'.",
          "passage": null
        },
        {
          "id": "bas-nouns-5",
          "type": "mcq",
          "prompt": "Which form means 'wife'?",
          "options": [
            "{{femgami}}",
            "{{mangami}}",
            "{{gami fem}}",
            "{{gami man}}",
            "femgama"
          ],
          "correct": 0,
          "explanation": "{{Femgami}} is 'wife'; {{mangami}} is 'husband'; {{gami}} alone is 'spouse'.",
          "passage": null
        },
        {
          "id": "bas-nouns-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: The children are in the house.",
          "answer": "Nini sen in baytu.",
          "accept": [],
          "explanation": "{{Nini}} is unmarked for plural; {{sen}} links it to the location phrase."
        },
        {
          "id": "bas-nouns-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: My sister is a teacher.",
          "answer": "Misu femsodar sen alimyen.",
          "accept": [],
          "explanation": "{{Femsodar}} is 'sister'; no article is needed before {{alimyen}}."
        },
        {
          "id": "bas-nouns-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Mi hare dua bwaw}}: {{un manbwaw ji un fembwaw}}.",
          "answer": "I have two dogs: a male dog and a female dog.",
          "accept": [
            "I have two dogs: one male dog and one female dog."
          ],
          "explanation": "{{Manbwaw}} and {{fembwaw}} explicitly mark the dogs' sex."
        },
        {
          "id": "bas-nouns-9",
          "type": "fill",
          "prompt": "Misu ___ sen alimyen.",
          "blanks": [
            {
              "answer": "{who:g}",
              "accept": []
            }
          ],
          "explanation": "The word {who:g} means '{who:e}'.",
          "gloss": "My {who:e} is a teacher.",
          "dyn": {
            "slots": {
              "who": [
                [
                  "sister",
                  "femsodar"
                ],
                [
                  "brother",
                  "mansodar"
                ],
                [
                  "mother",
                  "matre"
                ],
                [
                  "father",
                  "patre"
                ],
                [
                  "aunt",
                  "tia"
                ]
              ]
            }
          }
        },
        {
          "id": "bas-nouns-10",
          "type": "fill",
          "prompt": "Bwaw ___ ___.",
          "blanks": [
            {
              "answer": "sen",
              "accept": []
            },
            {
              "answer": "lil",
              "accept": []
            }
          ],
          "explanation": "{{Sen}} links {{bwaw}} to the adjective {{lil}}.",
          "gloss": "The dog is small."
        }
      ]
    },
    {
      "id": "bas-pronouns",
      "area": "foundations",
      "title": "Pronouns and possession",
      "blurb": "Personal pronouns, the reflexive {{se}}, and possessive adjectives in {{-su}}.",
      "refs": [
        "Grammar pp. 39–41",
        "Lessons 5–7"
      ],
      "notes": [
        "Singular: {{mi, yu, te}} (animate), {{to}} (inanimate). Plural: {{imi, uyu, ete, oto}}.",
        "{{Se}} is the reflexive pronoun for all persons: {{Mi oko se}}.",
        "Possessive adjectives add {{-su}}: {{misu, yusu, tesu, tosu, imisu, uyusu, etesu, otosu}}.",
        "Possessive pronouns add {{te/to}}: {{misu to}} = mine, {{yusu to}} = yours."
      ],
      "examples": [
        [
          "Ete lubi etesu bete.",
          "They love their child."
        ],
        [
          "Mi oko se in ayna.",
          "I see myself in the mirror."
        ],
        [
          "Imi xa idi cel imisu ogar.",
          "We will go to our home."
        ]
      ],
      "exercises": [
        {
          "id": "bas-pronouns-1",
          "type": "mcq",
          "prompt": "What does {{se}} refer to in the passage?",
          "options": [
            "It refers back to the subject {{mi}}: the speaker loves himself or herself.",
            "It refers to a different person.",
            "It is a possessive adjective meaning 'my'.",
            "It is a plural pronoun meaning 'they'.",
            "It is a tense particle."
          ],
          "correct": 0,
          "explanation": "{{Se}} is reflexive and points back to the subject.",
          "passage": "Mi lubi mi? No, mi lubi se."
        },
        {
          "id": "bas-pronouns-2",
          "type": "mcq",
          "prompt": "Which pronoun means 'we'?",
          "options": [
            "{{imi}}",
            "{{uyu}}",
            "{{ete}}",
            "{{oto}}",
            "{{yu}}"
          ],
          "correct": 0,
          "explanation": "{{Imi}} = we; {{uyu}} = you plural; {{ete/oto}} = they.",
          "passage": null,
          "dyn": {
            "kind": "definition",
            "prompt": "Which pronoun means {term}?",
            "pool": [
              [
                "'we'",
                "imi",
                "{{Imi}} = we; {{uyu}} = you plural; {{ete/oto}} = they."
              ],
              [
                "'you' plural",
                "uyu",
                "{{Uyu}} is the plural 'you'."
              ],
              [
                "'they' (animate)",
                "ete",
                "{{Ete}} is the animate plural pronoun."
              ],
              [
                "'they' (inanimate)",
                "oto",
                "{{Oto}} is the inanimate plural pronoun."
              ],
              [
                "'you' singular",
                "yu",
                "{{Yu}} is the singular 'you'."
              ],
              [
                "'I'",
                "mi",
                "{{Mi}} is the first-person singular pronoun."
              ],
              [
                "'he' or 'she'",
                "te",
                "{{Te}} is the animate singular pronoun."
              ],
              [
                "'it'",
                "to",
                "To is the inanimate singular pronoun."
              ]
            ]
          }
        },
        {
          "id": "bas-pronouns-3",
          "type": "mcq",
          "prompt": "Which pronoun refers to 'they' for inanimate things?",
          "options": [
            "{{oto}}",
            "{{ete}}",
            "{{te}}",
            "{{to}}",
            "{{imi}}"
          ],
          "correct": 0,
          "explanation": "{{Oto}} is the inanimate plural pronoun; {{ete}} is for animate beings.",
          "passage": null,
          "dyn": {
            "kind": "definition",
            "prompt": "Which pronoun refers to {term}?",
            "pool": [
              [
                "'they' for inanimate things",
                "oto",
                "{{Oto}} is the inanimate plural pronoun; {{ete}} is for animate beings."
              ],
              [
                "'they' for animate beings",
                "ete",
                "{{Ete}} is the animate plural pronoun."
              ],
              [
                "'he' or 'she'",
                "te",
                "{{Te}} is the animate singular pronoun."
              ],
              [
                "'it'",
                "to",
                "To is the inanimate singular pronoun."
              ],
              [
                "'we'",
                "imi",
                "{{Imi}} is the first-person plural pronoun."
              ],
              [
                "'you' plural",
                "uyu",
                "{{Uyu}} is the plural 'you'."
              ],
              [
                "'I'",
                "mi",
                "{{Mi}} is the first-person singular pronoun."
              ]
            ]
          }
        },
        {
          "id": "bas-pronouns-4",
          "type": "mcq",
          "prompt": "What is the difference between {{misu}} and {{misu to}}?",
          "options": [
            "{{Misu}} is the possessive adjective 'my'; {{misu to}} is the possessive pronoun 'mine'.",
            "{{Misu}} is plural; {{misu to}} is singular.",
            "{{Misu}} is a verb; {{misu to}} is a noun.",
            "There is no difference.",
            "{{Misu}} means 'me'; {{misu to}} means 'my'."
          ],
          "correct": 0,
          "explanation": "Possessive pronouns add {{te}} or {{to}} to the possessive adjective.",
          "passage": null
        },
        {
          "id": "bas-pronouns-5",
          "type": "mcq",
          "prompt": "Which word means 'our'?",
          "options": [
            "{{imisu}}",
            "{{misu}}",
            "{{yusu}}",
            "{{etesu}}",
            "{{otosu}}"
          ],
          "correct": 0,
          "explanation": "{{Imisu}} is 'our'; {{misu}} is 'my'.",
          "passage": null,
          "dyn": {
            "kind": "definition",
            "prompt": "Which word means {term}?",
            "pool": [
              [
                "'our'",
                "imisu",
                "{{Imisu}} is 'our'; {{misu}} is 'my'."
              ],
              [
                "'my'",
                "misu",
                "{{Misu}} is the first-person singular possessive."
              ],
              [
                "'your'",
                "yusu",
                "{{Yusu}} is the second-person possessive."
              ],
              [
                "'their' (animate)",
                "etesu",
                "{{Etesu}} is the animate plural possessive."
              ],
              [
                "'their' (inanimate)",
                "otosu",
                "{{Otosu}} is the inanimate plural possessive."
              ],
              [
                "'his' or 'her'",
                "tesu",
                "{{Tesu}} is the animate singular possessive."
              ],
              [
                "'its'",
                "tosu",
                "{{Tosu}} is the inanimate singular possessive."
              ]
            ]
          }
        },
        {
          "id": "bas-pronouns-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: They love their child.",
          "answer": "Ete lubi etesu bete.",
          "accept": [],
          "explanation": "{{Ete}} is animate plural 'they'; {{etesu}} is 'their'."
        },
        {
          "id": "bas-pronouns-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: I see myself in the mirror.",
          "answer": "Mi oko se in ayna.",
          "accept": [],
          "explanation": "{{Se}} is the reflexive object of {{oko}}; {{ayna}} is 'mirror'."
        },
        {
          "id": "bas-pronouns-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Imi xa idi cel imisu ogar}}.",
          "answer": "We will go to our home.",
          "accept": [
            "We will go to our house."
          ],
          "explanation": "{{Imi}} = we; {{imisu}} = our; {{xa}} marks future."
        },
        {
          "id": "bas-pronouns-9",
          "type": "fill",
          "prompt": "{subj:cap} lubi ___ bete.",
          "blanks": [
            {
              "answer": "{subj:possg}",
              "accept": []
            }
          ],
          "explanation": "The word {subj:possg} is the possessive adjective '{subj:poss}'.",
          "gloss": "{subj:e} love {subj:poss} children.",
          "dyn": {
            "slots": {
              "subj": [
                {
                  "e": "They",
                  "poss": "their",
                  "g": "ete",
                  "possg": "etesu",
                  "cap": "Ete"
                },
                {
                  "e": "I",
                  "poss": "my",
                  "g": "mi",
                  "possg": "misu",
                  "cap": "Mi"
                },
                {
                  "e": "We",
                  "poss": "our",
                  "g": "imi",
                  "possg": "imisu",
                  "cap": "Imi"
                },
                {
                  "e": "You",
                  "poss": "your",
                  "g": "yu",
                  "possg": "yusu",
                  "cap": "Yu"
                },
                {
                  "e": "She",
                  "poss": "her",
                  "g": "te",
                  "possg": "tesu",
                  "cap": "Te"
                }
              ]
            }
          }
        },
        {
          "id": "bas-pronouns-10",
          "type": "fill",
          "prompt": "Mi oko ___ in ___.",
          "blanks": [
            {
              "answer": "se",
              "accept": []
            },
            {
              "answer": "ayna",
              "accept": []
            }
          ],
          "explanation": "{{Se}} is the reflexive object; {{ayna}} is the mirror.",
          "gloss": "I see myself in the mirror."
        }
      ]
    },
    {
      "id": "bas-numbers",
      "area": "foundations",
      "title": "Numbers, ordinals, months",
      "blurb": "Cardinals, ordinals, fractions, and the numbered months.",
      "refs": [
        "Grammar pp. 51–54",
        "Lesson 9"
      ],
      "notes": [
        "0–10: {{nil, un, dua, tiga, care, lima, sisa, sabe, oco, nue, des}}.",
        "Tens add {{-des}}: {{duades}} (20), {{tigades}} (30); hundreds add {{-cen}}: {{duacen}} (200).",
        "Ordinals add {{-yum}}: {{unyum}} (first), {{tigayum}} (third).",
        "Fractions use {{of-}}: {{un ofcare}} (one fourth). Months are {{mesi}} + number: {{mesi lima}} = May."
      ],
      "examples": [
        [
          "Mi hare caredes kitabu ji duades kalamu.",
          "I have forty books and twenty pens."
        ],
        [
          "Misu xencudin sen fe mesi lima.",
          "My birthday is in May."
        ],
        [
          "Mi le kari un ofcare de pingo.",
          "I bought a quarter of an apple."
        ]
      ],
      "exercises": [
        {
          "id": "bas-numbers-1",
          "type": "mcq",
          "prompt": "Which expression means 47?",
          "options": [
            "{{caredes sabe}}",
            "{{sabedes care}}",
            "{{care des sabe}}",
            "{{carecen sabe}}",
            "{{sabe caredes}}"
          ],
          "correct": 0,
          "explanation": "40 is {{caredes}}; add 7 ({{sabe}}) to make 47.",
          "passage": null,
          "dyn": {
            "kind": "definition",
            "prompt": "Which expression means {term}?",
            "pool": [
              [
                "47",
                "caredes sabe",
                "40 is {{caredes}}; add 7 ({{sabe}}) to make 47."
              ],
              [
                null,
                "sabedes care",
                null
              ],
              [
                null,
                "care des sabe",
                null
              ],
              [
                null,
                "carecen sabe",
                null
              ],
              [
                null,
                "sabe caredes",
                null
              ],
              [
                "74",
                "sabedes care",
                "70 is {{sabedes}}; add 4 ({{care}})."
              ],
              [
                "26",
                "duades sisa",
                "20 is {{duades}}; add 6 ({{sisa}})."
              ],
              [
                "62",
                "sisades dua",
                "60 is {{sisades}}; add 2 ({{dua}})."
              ],
              [
                "35",
                "tigades lima",
                "30 is {{tigades}}; add 5 ({{lima}})."
              ]
            ]
          }
        },
        {
          "id": "bas-numbers-2",
          "type": "mcq",
          "prompt": "Which expression means 26?",
          "options": [
            "{{duades sisa}}",
            "{{sisades dua}}",
            "{{dua des sisa}}",
            "{{duacen sisa}}",
            "{{sisa duades}}"
          ],
          "correct": 0,
          "explanation": "20 is {{duades}}; add 6 ({{sisa}}).",
          "passage": null,
          "dyn": {
            "kind": "definition",
            "prompt": "Which expression means {term}?",
            "pool": [
              [
                "26",
                "duades sisa",
                "20 is {{duades}}; add 6 ({{sisa}})."
              ],
              [
                null,
                "sisades dua",
                null
              ],
              [
                null,
                "dua des sisa",
                null
              ],
              [
                null,
                "duacen sisa",
                null
              ],
              [
                null,
                "sisa duades",
                null
              ],
              [
                "62",
                "sisades dua",
                "60 is {{sisades}}; add 2 ({{dua}})."
              ],
              [
                "47",
                "caredes sabe",
                "40 is {{caredes}}; add 7 ({{sabe}})."
              ],
              [
                "58",
                "limades oco",
                "50 is {{limades}}; add 8 ({{oco}})."
              ],
              [
                "93",
                "nuedes tiga",
                "90 is {{nuedes}}; add 3 ({{tiga}})."
              ]
            ]
          }
        },
        {
          "id": "bas-numbers-3",
          "type": "mcq",
          "prompt": "Which word means 'third'?",
          "options": [
            "{{tigayum}}",
            "{{tiga}}",
            "{{tigades}}",
            "{{tigaple}}",
            "{{tigayen}}"
          ],
          "correct": 0,
          "explanation": "Ordinals add {{-yum}}: {{tiga}} + {{yum}} = {{tigayum}}.",
          "passage": null,
          "dyn": {
            "kind": "definition",
            "prompt": "Which word means {term}?",
            "pool": [
              [
                "'third'",
                "tigayum",
                "Ordinals add {{-yum}}: {{tiga}} + {{yum}} = {{tigayum}}."
              ],
              [
                "'three'",
                "tiga",
                "{{Tiga}} is the cardinal number three."
              ],
              [
                "'thirty'",
                "tigades",
                "{{Tigades}} is thirty."
              ],
              [
                "'triple'",
                "tigaple",
                "{{-ple}} multiplies: {{tigaple}} = triple."
              ],
              [
                "'a third'",
                "tigayen",
                "{{-yen}} marks a share: {{tigayen}} = a third."
              ],
              [
                "'fourth'",
                "careyum",
                "care + yum = careyum."
              ],
              [
                "'second'",
                "duayum",
                "dua + yum = duayum."
              ],
              [
                "'fifth'",
                "limayum",
                "lima + yum = limayum."
              ]
            ]
          }
        },
        {
          "id": "bas-numbers-4",
          "type": "mcq",
          "prompt": "Which expression means one fourth?",
          "options": [
            "{{un ofcare}}",
            "{{care}} ofun",
            "{{un careple}}",
            "{{careyum}}",
            "{{un}} decare"
          ],
          "correct": 0,
          "explanation": "Fractions use the numerator plus {{of-}} + denominator: {{un ofcare}}.",
          "passage": null,
          "dyn": {
            "kind": "definition",
            "prompt": "Which expression means {term}?",
            "pool": [
              [
                "one fourth",
                "un ofcare",
                "Fractions use the numerator plus {{of-}} + denominator: {{un ofcare}}."
              ],
              [
                null,
                "{{care}} ofun",
                null
              ],
              [
                null,
                "un careple",
                null
              ],
              [
                null,
                "careyum",
                null
              ],
              [
                null,
                "{{un}} decare",
                null
              ],
              [
                "one third",
                "un oftiga",
                "{{un}} + {{oftiga}}: one third."
              ],
              [
                "two fifths",
                "dua oflima",
                "{{dua}} + {{oflima}}: two fifths."
              ],
              [
                "three tenths",
                "tiga ofdes",
                "{{tiga}} + {{ofdes}}: three tenths."
              ]
            ]
          }
        },
        {
          "id": "bas-numbers-5",
          "type": "mcq",
          "prompt": "Whose birthday comes later in the year?",
          "options": [
            "The sibling's birthday comes later, in June.",
            "The speaker's birthday comes later, in May.",
            "Both birthdays are in May.",
            "The sibling's birthday is in May and the speaker's is in June.",
            "The passage does not mention any months."
          ],
          "correct": 0,
          "explanation": "{{Mesi lima}} is May; {{mesi sisa}} is June. The sibling's birthday is later.",
          "passage": "Misu xencudin sen fe mesi lima. Misu sodar hare xencudin fe mesi sisa."
        },
        {
          "id": "bas-numbers-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: I have three books and two pens.",
          "answer": "Mi hare tiga kitabu ji dua kalamu.",
          "accept": [],
          "explanation": "Numbers precede the nouns; nouns have no plural suffix."
        },
        {
          "id": "bas-numbers-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: My birthday is in May.",
          "answer": "Misu xencudin sen fe mesi lima.",
          "accept": [],
          "explanation": "Months use {{mesi}} + number; May is {{mesi lima}}."
        },
        {
          "id": "bas-numbers-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Mi hare caredes kitabu ji duades kalamu}}.",
          "answer": "I have forty books and twenty pens.",
          "accept": [],
          "explanation": "{{Caredes}} = 40; {{duades}} = 20."
        },
        {
          "id": "bas-numbers-9",
          "type": "fill",
          "prompt": "Misu xencudin sen fe mesi ___.",
          "gloss": "My birthday is in the {ord:e} month.",
          "blanks": [
            {
              "answer": "{ord:g}",
              "accept": []
            }
          ],
          "explanation": "{{Mesi}} {ord:g} is the {ord:e} month.",
          "dyn": {
            "slots": {
              "ord": [
                [
                  "fifth",
                  "lima"
                ],
                [
                  "third",
                  "tiga"
                ],
                [
                  "fourth",
                  "care"
                ],
                [
                  "sixth",
                  "sisa"
                ],
                [
                  "second",
                  "dua"
                ]
              ]
            }
          }
        },
        {
          "id": "bas-numbers-10",
          "type": "fill",
          "prompt": "One fourth is {{un}} ___.",
          "blanks": [
            {
              "answer": "ofcare",
              "accept": []
            }
          ],
          "explanation": "The fraction prefix {{of-}} precedes the denominator {{care}}."
        }
      ]
    },
    {
      "id": "bas-prepositions",
      "area": "foundations",
      "title": "Prepositions and location",
      "blurb": "{{In}}, {{ex, fe, per, bax, ton, har, yon}}, and {{cel}} anchor phrases in space, time, and instrument.",
      "refs": [
        "Grammar pp. 67–68",
        "Lesson 8"
      ],
      "notes": [
        "{{In}} = {{in}}/inside; {{ex}} = out/outside; {{fe}} = at/in/on for time, place, or address.",
        "{{Per}} = on a surface; {{bax}} = under; {{ton}} = together with; {{har}} = having; {{yon}} = by means of.",
        "{{Cel}} marks destination or goal; it is not the same as {{in}}.",
        "{{Ogar}} can be transitive (inhabit a home) or intransitive with {{in}} (live in a place)."
      ],
      "examples": [
        [
          "Myaw sen bax mesa, ji piu sen per drevo.",
          "The cat is under the table, and the bird is in the tree."
        ],
        [
          "Mi eskri yon kalamu.",
          "I write with a pen."
        ],
        [
          "Imi le idi ex baytu.",
          "We went out of the house."
        ]
      ],
      "exercises": [
        {
          "id": "bas-prepositions-1",
          "type": "mcq",
          "prompt": "Where are the cat and the bird?",
          "options": [
            "The cat is under the table, and the bird is on the tree.",
            "The cat is on the table, and the bird is under the tree.",
            "The cat is in the table, and the bird is in the tree.",
            "The cat is beside the table, and the bird is above the tree.",
            "The cat is on the tree, and the bird is under the table."
          ],
          "correct": 0,
          "explanation": "{{Bax}} = under; {{per}} = on a surface.",
          "passage": "Myaw sen bax mesa, ji piu sen per drevo."
        },
        {
          "id": "bas-prepositions-2",
          "type": "mcq",
          "prompt": "Which sentence means 'The cat is under the table'?",
          "options": [
            "{{Myaw sen bax mesa.}}",
            "{{Myaw sen per mesa.}}",
            "{{Myaw sen in mesa.}}",
            "{{Myaw sen ex mesa.}}",
            "{{Myaw sen ton mesa.}}"
          ],
          "correct": 0,
          "explanation": "{{Bax}} means under/below.",
          "passage": null,
          "dyn": {
            "kind": "definition",
            "prompt": "Which sentence means {term}?",
            "pool": [
              [
                "'The cat is under the table'",
                "Myaw sen bax mesa.",
                "{{Bax}} means under/below."
              ],
              [
                null,
                "Myaw sen per mesa.",
                null
              ],
              [
                null,
                "Myaw sen in mesa.",
                null
              ],
              [
                null,
                "Myaw sen ex mesa.",
                null
              ],
              [
                null,
                "Myaw sen ton mesa.",
                null
              ],
              [
                "'The cat is above the table'",
                "Myaw sen supra mesa.",
                "{{Supra}} means above."
              ],
              [
                "'The cat is near the table'",
                "Myaw sen ner fe mesa.",
                "{{Ner fe}} means near."
              ]
            ]
          }
        },
        {
          "id": "bas-prepositions-3",
          "type": "mcq",
          "prompt": "Which sentence means 'I write with a pen'?",
          "options": [
            "{{Mi eskri yon kalamu.}}",
            "{{Mi eskri ton kalamu.}}",
            "{{Mi eskri har kalamu.}}",
            "{{Mi eskri cel kalamu.}}",
            "{{Mi eskri per kalamu.}}"
          ],
          "correct": 0,
          "explanation": "{{Yon}} marks the instrument or means: with a pen.",
          "passage": null,
          "dyn": {
            "kind": "definition",
            "prompt": "Which sentence means {term}?",
            "pool": [
              [
                "'I write with a pen'",
                "Mi eskri yon kalamu.",
                "{{Yon}} marks the instrument or means: with a pen."
              ],
              [
                null,
                "Mi eskri ton kalamu.",
                null
              ],
              [
                null,
                "Mi eskri har kalamu.",
                null
              ],
              [
                null,
                "Mi eskri cel kalamu.",
                null
              ],
              [
                null,
                "Mi eskri per kalamu.",
                null
              ],
              [
                "'I write to a friend'",
                "Mi eskri cel doste.",
                "{{cel}} = to, toward."
              ],
              [
                "'I write about a friend'",
                "Mi eskri tem doste.",
                "{{tem}} = about."
              ],
              [
                "'I write without a pen'",
                "Mi eskri nen kalamu.",
                "{{nen}} = without."
              ]
            ]
          }
        },
        {
          "id": "bas-prepositions-4",
          "type": "mcq",
          "prompt": "Which sentence means 'She lives in the city'?",
          "options": [
            "{{Te ogar in xaher.}}",
            "{{Te ogar cel xaher.}}",
            "{{Te ogar per xaher.}}",
            "{{Te ogar yon xaher.}}",
            "{{Te ogar ex xaher.}}"
          ],
          "correct": 0,
          "explanation": "{{Ogar}} is intransitive with {{in}} for a location: live in a city.",
          "passage": null,
          "dyn": {
            "kind": "definition",
            "prompt": "Which sentence means {term}?",
            "pool": [
              [
                "'She lives in the city'",
                "Te ogar in xaher.",
                "{{Ogar}} is intransitive with {{in}} for a location: live in a city."
              ],
              [
                null,
                "Te ogar cel xaher.",
                null
              ],
              [
                null,
                "Te ogar per xaher.",
                null
              ],
              [
                null,
                "Te ogar yon xaher.",
                null
              ],
              [
                null,
                "Te ogar ex xaher.",
                null
              ],
              [
                "'She lives near the city'",
                "Te ogar ner fe xaher.",
                "{{ner fe}} = near."
              ],
              [
                "'She lives outside the city'",
                "Te ogar ex xaher.",
                "{{ex}} = out of."
              ],
              [
                "'She lives above the city'",
                "Te ogar supra xaher.",
                "{{supra}} = above."
              ]
            ]
          }
        },
        {
          "id": "bas-prepositions-5",
          "type": "mcq",
          "prompt": "Which sentence means 'We went out of the house'?",
          "options": [
            "{{Imi le idi ex baytu.}}",
            "{{Imi le idi in baytu.}}",
            "{{Imi le idi cel baytu.}}",
            "{{Imi le idi per baytu.}}",
            "{{Imi le idi bax baytu.}}"
          ],
          "correct": 0,
          "explanation": "{{Ex}} marks movement out of a place.",
          "passage": null
        },
        {
          "id": "bas-prepositions-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: The bottle is on the table.",
          "answer": "Botela sen per mesa.",
          "accept": [],
          "explanation": "{{Per}} marks position on a surface; {{sen}} is the copula."
        },
        {
          "id": "bas-prepositions-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: He is walking with his friend.",
          "answer": "Te anda ton tesu doste.",
          "accept": [],
          "explanation": "{{Ton}} means 'together with'."
        },
        {
          "id": "bas-prepositions-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Mi le ogar in lil baytu bax drevo}}.",
          "answer": "I lived in a small house under a tree.",
          "accept": [],
          "explanation": "{{Ogar}} + {{in}} marks the residence; {{bax drevo}} is 'under a tree'."
        },
        {
          "id": "bas-prepositions-9",
          "type": "fill",
          "prompt": "Myaw sen ___ mesa.",
          "blanks": [
            {
              "answer": "{prep:g}",
              "accept": []
            }
          ],
          "explanation": "The word {prep:g} means '{prep:e}'.",
          "gloss": "The cat is {prep:e} the table.",
          "dyn": {
            "slots": {
              "prep": [
                [
                  "under",
                  "bax"
                ],
                [
                  "on",
                  "per"
                ],
                [
                  "in",
                  "in"
                ],
                [
                  "above",
                  "supra"
                ],
                [
                  "near",
                  "ner fe"
                ]
              ]
            }
          }
        },
        {
          "id": "bas-prepositions-10",
          "type": "fill",
          "prompt": "Mi eskri ___ {tool:g}.",
          "blanks": [
            {
              "answer": "yon",
              "accept": []
            }
          ],
          "explanation": "{{Yon}} marks the instrument: 'with a {tool:e}'.",
          "gloss": "I write with a {tool:e}.",
          "dyn": {
            "slots": {
              "tool": [
                [
                  "pen",
                  "kalamu"
                ],
                [
                  "brush",
                  "broxa"
                ],
                [
                  "pencil",
                  "pensil"
                ]
              ]
            }
          }
        }
      ]
    },
    {
      "id": "bas-comparatives",
      "area": "foundations",
      "title": "Comparatives",
      "blurb": "{{Max/min}} compare nouns and verbs; {{maxmo/minmo}} compare adjectives and adverbs; {{kom}} introduces the standard.",
      "refs": [
        "Grammar pp. 20–22, 48–50",
        "Lesson 16"
      ],
      "notes": [
        "More/fewer + noun: {{max kitabu kom yu, min kitabu kom mi}}.",
        "More/less + adjective/adverb: {{maxmo bon kom mi, minmo day kom yu}}.",
        "As ... as: {{denmo}} + adjective + {{kom}}; as many/much as: {{dennumer/denkwanti}} + noun + {{kom}}.",
        "{{Folki maxmo}} ... {{maxmo}} ... expresses 'the more ..., the more ...'."
      ],
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
          "Misu baytu sen denmo day kom yusu to.",
          "My house is as big as yours."
        ]
      ],
      "exercises": [
        {
          "id": "bas-comparatives-1",
          "type": "mcq",
          "prompt": "What does the comparison mean in this sentence?",
          "options": [
            "My sibling is bigger than me.",
            "My sibling is smaller than me.",
            "My sibling is as big as me.",
            "I am bigger than my sibling.",
            "My sibling is not big."
          ],
          "correct": 0,
          "explanation": "{{Maxmo day kom mi}} = bigger than me.",
          "passage": "Misu sodar sen maxmo day kom mi."
        },
        {
          "id": "bas-comparatives-2",
          "type": "mcq",
          "prompt": "Which sentence means 'I have more tickets than you'?",
          "options": [
            "{{Mi hare max tiketo kom yu.}}",
            "{{Mi hare maxmo tiketo kom yu.}}",
            "{{Mi hare tiketo max kom yu.}}",
            "{{Mi hare min tiketo kom yu.}}",
            "{{Mi hare denkwanti tiketo kom yu.}}"
          ],
          "correct": 0,
          "explanation": "{{Max}} precedes the noun for 'more tickets'; {{maxmo}} is for adjectives/adverbs.",
          "passage": null
        },
        {
          "id": "bas-comparatives-3",
          "type": "mcq",
          "prompt": "Which sentence means 'She sings better than me'?",
          "options": [
            "{{Te lala maxmo bon kom mi.}}",
            "{{Te lala max bon kom mi.}}",
            "{{Te lala denmo bon kom mi.}}",
            "{{Te lala minmo bon kom mi.}}",
            "{{Te lala bon max kom mi.}}"
          ],
          "correct": 0,
          "explanation": "{{Maxmo}} modifies the adverb {{bon}}: sings better.",
          "passage": null
        },
        {
          "id": "bas-comparatives-4",
          "type": "mcq",
          "prompt": "Which sentence means 'I have as many tickets as you'?",
          "options": [
            "{{Mi hare dennumer tiketo kom yu.}}",
            "{{Mi hare denmo tiketo kom yu.}}",
            "{{Mi hare denkwanti tiketo kom yu.}}",
            "{{Mi hare denpul tiketo kom yu.}}",
            "{{Mi hare max tiketo kom yu.}}"
          ],
          "correct": 0,
          "explanation": "{{Dennumer}} + noun + {{kom}} expresses 'as many ... as'.",
          "passage": null
        },
        {
          "id": "bas-comparatives-5",
          "type": "mcq",
          "prompt": "Which sentence means 'You eat as much rice as me'?",
          "options": [
            "{{Yu yam denkwanti risi kom mi.}}",
            "{{Yu yam dennumer risi kom mi.}}",
            "{{Yu yam denmo risi kom mi.}}",
            "{{Yu yam max risi kom mi.}}",
            "{{Yu yam min risi kom mi.}}"
          ],
          "correct": 0,
          "explanation": "{{Denkwanti}} + noun + {{kom}} expresses 'as much ... as'.",
          "passage": null
        },
        {
          "id": "bas-comparatives-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: I have more tickets than you.",
          "answer": "Mi hare max tiketo kom yu.",
          "accept": [],
          "explanation": "{{Max}} precedes the noun; {{kom}} introduces the standard."
        },
        {
          "id": "bas-comparatives-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: My house is as big as yours.",
          "answer": "Misu baytu sen denmo day kom yusu to.",
          "accept": [],
          "explanation": "{{Denmo}} modifies {{day}}; {{yusu to}} is 'yours'."
        },
        {
          "id": "bas-comparatives-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Te lala maxmo bon kom mi}}.",
          "answer": "She sings better than me.",
          "accept": [],
          "explanation": "{{Maxmo bon}} = better; {{kom mi}} = than me."
        },
        {
          "id": "bas-comparatives-9",
          "type": "fill",
          "prompt": "Mi hare max tiketo ___ yu.",
          "blanks": [
            {
              "answer": "kom",
              "accept": []
            }
          ],
          "explanation": "{{Kom}} introduces the standard of comparison.",
          "gloss": "I have more tickets than you."
        },
        {
          "id": "bas-comparatives-10",
          "type": "fill",
          "prompt": "Te lala maxmo bon ___ mi.",
          "blanks": [
            {
              "answer": "kom",
              "accept": []
            }
          ],
          "explanation": "{{Kom}} means 'than' in this comparative.",
          "gloss": "She sings better than me."
        }
      ]
    },
    {
      "id": "bas-word-formation",
      "area": "foundations",
      "title": "Word formation",
      "blurb": "Affixes change transitivity, state, or degree without creating irregular forms.",
      "refs": [
        "Grammar pp. 82–93",
        "Lessons 13–18"
      ],
      "notes": [
        "{{-gi}} makes a causative/transitive verb: {{haha}} → {{hahagi}} (make someone laugh).",
        "{{-cu}} marks an intransitive change of state: {{buka}} → {{bukacu}} (become open).",
        "{{-ne}} means 'in the active process of': {{bukane dwer}} = the opening door.",
        "{{-do}} means 'in an inactive state': {{klosido dwer}} = the closed door.",
        "Prefixes: {{xor-}} (begin), {{nen-}} (not), {{day-}} (big), {{lil-}} (small)."
      ],
      "examples": [
        [
          "Mi le hahagi nini.",
          "I made the child laugh."
        ],
        [
          "Misu sodar le xorsomno in kursi.",
          "My sibling fell asleep in the chair."
        ],
        [
          "Hin xey sen nenmuhim.",
          "This thing is unimportant."
        ]
      ],
      "exercises": [
        {
          "id": "bas-word-formation-1",
          "type": "mcq",
          "prompt": "What does {{bukane}} mean in {{bukane dwer}}?",
          "options": [
            "It means the opening door, in the active process of opening.",
            "It means the closed door, in an inactive state.",
            "It means the door that was opened by someone.",
            "It means a door that opens itself permanently.",
            "It means a small door."
          ],
          "correct": 0,
          "explanation": "{{-ne}} marks an active state or process; {{-do}} marks an inactive state.",
          "passage": null
        },
        {
          "id": "bas-word-formation-2",
          "type": "mcq",
          "prompt": "What does {{xorsomno}} mean?",
          "options": [
            "It means 'fall asleep'.",
            "It means 'wake up'.",
            "It means 'sleep deeply'.",
            "It means 'dream'.",
            "It means 'sleep in a chair'."
          ],
          "correct": 0,
          "explanation": "{{Xor-}} means 'begin, come to'; {{xorsomno}} = begin to sleep.",
          "passage": null,
          "dyn": {
            "kind": "definition",
            "prompt": "What does {term} mean?",
            "pool": [
              [
                "xorsomno",
                "It means 'fall asleep'.",
                "{{Xor-}} means 'begin, come to'; {{xorsomno}} = begin to sleep."
              ],
              [
                null,
                "It means 'wake up'.",
                null
              ],
              [
                null,
                "It means 'sleep deeply'.",
                null
              ],
              [
                null,
                "It means 'dream'.",
                null
              ],
              [
                null,
                "It means 'sleep in a chair'.",
                null
              ],
              [
                "finsomno",
                "It means 'finish sleeping'.",
                "{{Fin-}} marks the end: {{finsomno}} = finish sleeping."
              ],
              [
                "daypawbu",
                "It means 'sprint'.",
                "{{Day-}} means big; {{daypawbu}} is a big run, a sprint."
              ]
            ]
          }
        },
        {
          "id": "bas-word-formation-3",
          "type": "mcq",
          "prompt": "What does {{nenmuhim}} mean?",
          "options": [
            "It means 'unimportant'.",
            "It means 'very important'.",
            "It means 'important again'.",
            "It means 'important to everyone'.",
            "It means 'not yet important but becoming so'."
          ],
          "correct": 0,
          "explanation": "{{Nen-}} negates: {{muhim}} (important) → {{nenmuhim}} (unimportant).",
          "passage": null,
          "dyn": {
            "kind": "definition",
            "prompt": "What does {term} mean?",
            "pool": [
              [
                "nenmuhim",
                "It means 'unimportant'.",
                "{{Nen-}} negates: {{muhim}} (important) → {{nenmuhim}} (unimportant)."
              ],
              [
                null,
                "It means 'very important'.",
                null
              ],
              [
                null,
                "It means 'important again'.",
                null
              ],
              [
                null,
                "It means 'important to everyone'.",
                null
              ],
              [
                null,
                "It means 'not yet important but becoming so'.",
                null
              ],
              [
                "xormuhim",
                "It means 'becoming important'.",
                "{{Xor-}} marks becoming: {{xormuhim}} = becoming important."
              ]
            ]
          }
        },
        {
          "id": "bas-word-formation-4",
          "type": "mcq",
          "prompt": "What does {{daybaytu}} mean?",
          "options": [
            "It means 'mansion' or 'big house'.",
            "It means 'small house'.",
            "It means 'household'.",
            "It means 'house builder'.",
            "It means 'ruined house'."
          ],
          "correct": 0,
          "explanation": "The prefix {{day-}} means big/large.",
          "passage": null,
          "dyn": {
            "kind": "definition",
            "prompt": "What does {term} mean?",
            "pool": [
              [
                "daybaytu",
                "It means 'mansion' or 'big house'.",
                "The prefix {{day-}} means big/large."
              ],
              [
                null,
                "It means 'small house'.",
                null
              ],
              [
                null,
                "It means 'household'.",
                null
              ],
              [
                null,
                "It means 'house builder'.",
                null
              ],
              [
                null,
                "It means 'ruined house'.",
                null
              ],
              [
                "neobaytu",
                "It means 'new house'.",
                "{{Neo}} means new."
              ]
            ]
          }
        },
        {
          "id": "bas-word-formation-5",
          "type": "mcq",
          "prompt": "What can we infer about the door?",
          "options": [
            "The door makes noise while opening but is silent when closed.",
            "The door is silent while opening but noisy when closed.",
            "Both the opening door and the closed door are silent.",
            "The door is closed because it is opening.",
            "The door is small and quiet."
          ],
          "correct": 0,
          "explanation": "{{Bukane}} uses {{-ne}} for an active process; {{klosido}} uses {{-do}} for an inactive state. {{Sotipul}} means loud; {{sotikal}} means silent.",
          "passage": "Bukane dwer sen sotipul, mas klosido dwer sen sotikal."
        },
        {
          "id": "bas-word-formation-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: I made the child laugh.",
          "answer": "Mi le hahagi nini.",
          "accept": [],
          "explanation": "{{Haha}} + {{-gi}} = {{hahagi}}, 'cause to laugh'."
        },
        {
          "id": "bas-word-formation-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: My sibling fell asleep in the chair.",
          "answer": "Misu sodar le xorsomno in kursi.",
          "accept": [],
          "explanation": "{{Xor-}} + {{somno}} = {{xorsomno}}, 'fall asleep'."
        },
        {
          "id": "bas-word-formation-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Hin xey sen nenmuhim}}.",
          "answer": "This thing is unimportant.",
          "accept": [],
          "explanation": "{{Nen-}} negates {{muhim}}; {{sen}} links the subject to the adjective."
        },
        {
          "id": "bas-word-formation-9",
          "type": "fill",
          "prompt": "Te le ___ nini.",
          "blanks": [
            {
              "answer": "{v:g}",
              "accept": []
            }
          ],
          "explanation": "The word {v:g} means 'made (someone) {v:e}'.",
          "gloss": "She made the child {v:e}.",
          "dyn": {
            "slots": {
              "v": [
                [
                  "laugh",
                  "hahagi"
                ],
                [
                  "cry",
                  "wawagi"
                ],
                [
                  "sleep",
                  "somnogi"
                ]
              ]
            }
          }
        },
        {
          "id": "bas-word-formation-10",
          "type": "fill",
          "prompt": "Hin xey sen ___.",
          "blanks": [
            {
              "answer": "{adj:g}",
              "accept": []
            }
          ],
          "explanation": "The word {adj:g} means '{adj:e}'.",
          "gloss": "This thing is {adj:e}.",
          "dyn": {
            "slots": {
              "adj": [
                [
                  "unimportant",
                  "nenmuhim"
                ],
                [
                  "small",
                  "lil"
                ],
                [
                  "beautiful",
                  "meli"
                ],
                [
                  "new",
                  "neo"
                ]
              ]
            }
          }
        }
      ]
    },
    {
      "id": "bas-infinitive",
      "area": "foundations",
      "title": "Infinitive complements",
      "blurb": "{{Na}} marks infinitive verb phrases in noun/verb complements; auxiliaries take {{na}} + verb.",
      "refs": [
        "Grammar pp. 16, 61–62, 74–75",
        "Lessons 15–16"
      ],
      "notes": [
        "{{Na}} + verb forms an infinitive: {{na lala}} = to sing.",
        "Transitive and intransitive verbs can take infinitive complements: {{Mi suki na lala}}; {{Mi abil na danse}}.",
        "Auxiliaries {{abil, ingay}}, and {{musi}} are followed by {{na}} + verb; {{na}} may be omitted after the first auxiliary.",
        "Negation precedes the auxiliary: {{Mi no abil na danse}}."
      ],
      "examples": [
        [
          "Mi suki na lala.",
          "I like to sing."
        ],
        [
          "Imi musi na idi cel eskol.",
          "We must go to school."
        ],
        [
          "Mi no abil na danse, mas mi vole na xwexi.",
          "I cannot dance, but I want to learn."
        ]
      ],
      "exercises": [
        {
          "id": "bas-infinitive-1",
          "type": "mcq",
          "prompt": "Which sentence means 'I like to sing'?",
          "options": [
            "{{Mi suki na lala.}}",
            "{{Mi suki lala.}}",
            "{{Mi suki na lalala.}}",
            "{{Mi na suki lala.}}",
            "{{Mi suki lala na.}}"
          ],
          "correct": 0,
          "explanation": "The infinitive complement is marked by {{na}} + verb: {{na lala}}.",
          "passage": null
        },
        {
          "id": "bas-infinitive-2",
          "type": "mcq",
          "prompt": "Which sentence means 'I must run' in standard form?",
          "options": [
            "{{Mi musi na pawbu.}}",
            "{{Mi musi pawbu na.}}",
            "{{Mi na musi pawbu.}}",
            "{{Mi pawbu musi na.}}",
            "{{Mi musi na pawbu na.}}"
          ],
          "correct": 0,
          "explanation": "{{Musi}} is an auxiliary; the infinitive complement takes {{na}} + the dictionary verb.",
          "passage": null
        },
        {
          "id": "bas-infinitive-3",
          "type": "mcq",
          "prompt": "Which sentence means 'I cannot dance'?",
          "options": [
            "{{Mi no abil na danse.}}",
            "{{Mi abil no na danse.}}",
            "{{Mi no na abil danse.}}",
            "{{Mi abil na no danse.}}",
            "{{Mi na no abil danse.}}"
          ],
          "correct": 0,
          "explanation": "Negation {{no}} precedes the auxiliary {{abil}}; {{na danse}} follows.",
          "passage": null
        },
        {
          "id": "bas-infinitive-4",
          "type": "mcq",
          "prompt": "Which sentence means 'She wants to learn Globasa'?",
          "options": [
            "{{Te vole na xwexi Globasa.}}",
            "{{Te vole xwexi na Globasa.}}",
            "{{Te na vole xwexi Globasa.}}",
            "{{Te vole Globasa na xwexi.}}",
            "{{Te vole na Globasa xwexi.}}"
          ],
          "correct": 0,
          "explanation": "{{Vole}} takes the infinitive complement {{na xwexi}} Globasa.",
          "passage": null
        },
        {
          "id": "bas-infinitive-5",
          "type": "mcq",
          "prompt": "What does the speaker want?",
          "options": [
            "They want to learn to dance, but they cannot dance now.",
            "They want to dance now, but they cannot learn.",
            "They can dance but do not want to learn.",
            "They want to teach dance but cannot.",
            "They learned to dance and now want to stop."
          ],
          "correct": 0,
          "explanation": "{{Vole na xwexi na danse}} is the infinitive complement; {{no abil na danse}} negates present ability.",
          "passage": "Mi vole na xwexi na danse, mas mi no abil na danse nun."
        },
        {
          "id": "bas-infinitive-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: I like to sing.",
          "answer": "Mi suki na lala.",
          "accept": [],
          "explanation": "{{Na lala}} is the infinitive complement of {{suki}}."
        },
        {
          "id": "bas-infinitive-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: We must go to school.",
          "answer": "Imi musi na idi cel eskol.",
          "accept": [],
          "explanation": "{{Musi}} + {{na idi}}; {{cel}} marks the destination."
        },
        {
          "id": "bas-infinitive-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Mi no abil na danse, mas mi vole na xwexi}}.",
          "answer": "I cannot dance, but I want to learn.",
          "accept": [],
          "explanation": "{{No abil na}} = cannot; {{vole na xwexi}} = want to learn."
        },
        {
          "id": "bas-infinitive-9",
          "type": "fill",
          "prompt": "Mi suki ___ ___.",
          "blanks": [
            {
              "answer": "na",
              "accept": []
            },
            {
              "answer": "lala",
              "accept": []
            }
          ],
          "explanation": "The infinitive complement is {{na}} + verb: {{na lala}}.",
          "gloss": "I like to sing."
        },
        {
          "id": "bas-infinitive-10",
          "type": "fill",
          "prompt": "Imi musi ___ idi cel eskol.",
          "blanks": [
            {
              "answer": "na",
              "accept": []
            }
          ],
          "explanation": "{{Musi}} is followed by {{na}} + verb.",
          "gloss": "We must go to school."
        }
      ]
    },
    {
      "id": "bas-imperative",
      "area": "foundations",
      "title": "Imperative and jussive",
      "blurb": "{{Am}} marks commands, exhortations, and mandative subjunctive clauses.",
      "refs": [
        "Grammar pp. 60–61",
        "Lesson 17"
      ],
      "notes": [
        "{{Am}} + verb gives a command: {{Am yam}}! = Eat!",
        "The subject pronoun may be omitted for commands; {{Imi am yam}}! = Let's eat!",
        "Negative command: {{Am no}} + verb.",
        "With {{kam, am}} makes polite requests: {{Kam yu am sahay mi}}? = Could you help me?"
      ],
      "examples": [
        [
          "Am klosi janela.",
          "Close the window."
        ],
        [
          "Am no wanji misu kitabu.",
          "Don't forget my book."
        ],
        [
          "Kam yu am sahay mi?",
          "Could you help me?"
        ]
      ],
      "exercises": [
        {
          "id": "bas-imperative-1",
          "type": "mcq",
          "prompt": "Which sentence means 'Run!'?",
          "options": [
            "{{Am pawbu!}}",
            "{{Pawbu am!}}",
            "{{Na am pawbu!}}",
            "{{Yu pawbu am!}}",
            "{{Am na pawbu!}}"
          ],
          "correct": 0,
          "explanation": "{{Am}} marks the command and {{pawbu}} is the intransitive verb run.",
          "passage": null
        },
        {
          "id": "bas-imperative-2",
          "type": "mcq",
          "prompt": "Which sentence means 'Let's run!'?",
          "options": [
            "{{Imi am pawbu!}}",
            "{{Am imi pawbu!}}",
            "{{Imi pawbu am!}}",
            "{{Am pawbu imi!}}",
            "{{Na imi pawbu!}}"
          ],
          "correct": 0,
          "explanation": "{{Imi am}} + verb gives a first-person plural command.",
          "passage": null
        },
        {
          "id": "bas-imperative-3",
          "type": "mcq",
          "prompt": "Which sentence means 'Don't drink the juice!'?",
          "options": [
            "{{Am no glu jusu!}}",
            "{{No am glu jusu!}}",
            "{{Am glu no jusu!}}",
            "{{Glu am no jusu!}}",
            "{{No glu am jusu!}}"
          ],
          "correct": 0,
          "explanation": "{{Am}} + {{no}} + verb gives a negative command.",
          "passage": null
        },
        {
          "id": "bas-imperative-4",
          "type": "mcq",
          "prompt": "Which sentence is a polite request 'Could you help me?'",
          "options": [
            "{{Kam yu am sahay mi?}}",
            "{{Kam yu sahay am mi?}}",
            "{{Yu kam am sahay mi?}}",
            "{{Am kam yu sahay mi?}}",
            "{{Kam am yu sahay mi?}}"
          ],
          "correct": 0,
          "explanation": "{{Kam}} + subject + {{am}} + verb forms a polite request.",
          "passage": null
        },
        {
          "id": "bas-imperative-5",
          "type": "mcq",
          "prompt": "What should you do?",
          "options": [
            "Close the window and do not open the door.",
            "Open the window and close the door.",
            "Close the door and do not open the window.",
            "Open both the window and the door.",
            "Do not close the window and do not open the door."
          ],
          "correct": 0,
          "explanation": "{{Am klosi}} is a positive command; {{am no buka}} is a negative command.",
          "passage": "Am klosi janela, ji am no buka dwer."
        },
        {
          "id": "bas-imperative-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: Close the window.",
          "answer": "Am klosi janela.",
          "accept": [],
          "explanation": "{{Am}} marks the command; {{klosi}} takes {{janela}} as object."
        },
        {
          "id": "bas-imperative-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: Don't forget my card.",
          "answer": "Am no wanji misu karta.",
          "accept": [],
          "explanation": "{{Am}} + {{no}} + verb gives a negative command; {{karta}} is the object."
        },
        {
          "id": "bas-imperative-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Mi vole ki te am safegi sesu kamer}}.",
          "answer": "I want him to clean his room.",
          "accept": [
            "I want her to clean her room.",
            "I want them to clean their room."
          ],
          "explanation": "{{Ki}} introduces the clause; {{am}} marks the mandative subjunctive; {{sesu}} = his own."
        },
        {
          "id": "bas-imperative-9",
          "type": "fill",
          "prompt": "___ ___ janela.",
          "blanks": [
            {
              "answer": "Am",
              "accept": [
                "am"
              ]
            },
            {
              "answer": "klosi",
              "accept": []
            }
          ],
          "explanation": "{{Am}} marks the imperative; {{klosi}} is the verb and {{janela}} is its object.",
          "gloss": "Close the window."
        },
        {
          "id": "bas-imperative-10",
          "type": "fill",
          "prompt": "Kam yu ___ sahay mi?",
          "blanks": [
            {
              "answer": "am",
              "accept": []
            }
          ],
          "explanation": "{{Am}} follows the subject in a polite request.",
          "gloss": "Could you help me?"
        }
      ]
    },
    {
      "id": "wc-noun-verb",
      "area": "word-classes",
      "title": "Noun/verb words",
      "blurb": "Many Globasa words are both nouns and verbs without changing form. Context decides the role.",
      "refs": [
        "Grammar p. 97",
        "Lessons 2–4"
      ],
      "notes": [
        "A dictionary class of b means noun/verb: the same word can name a thing or an action.",
        "There is no conjugation and no article, so word order and the object decide the role.",
        "A word before {{sen}} is normally a noun phrase; a word after a subject is normally the predicate verb."
      ],
      "examples": [
        [
          "Mi le doxo lungo kitabu.",
          "I read a long book."
        ],
        [
          "Doxo sen bon.",
          "Reading is good."
        ],
        [
          "Yam sen bon, mas mi no vole yam nun.",
          "The food is good, but I don't want to eat now."
        ]
      ],
      "exercises": [
        {
          "id": "wc-noun-verb-1",
          "type": "mcq",
          "prompt": "In the passage, what is the role of {{doxo}}?",
          "options": [
            "In the first sentence it is a verb taking an object; in the second it is a noun serving as subject.",
            "It is an adjective in both sentences.",
            "It is a preposition in the first sentence and a conjunction in the second.",
            "It is a noun in the first sentence and an adverb in the second.",
            "It is a numeral in both sentences."
          ],
          "correct": 0,
          "explanation": "{{Doxo}} is a b word. In {{Mi le doxo lungo kitabu}} it is the verb; in {{Doxo sen bon}} it is the noun subject.",
          "passage": "Mi le doxo lungo kitabu. Doxo sen bon."
        },
        {
          "id": "wc-noun-verb-2",
          "type": "mcq",
          "prompt": "Which sentence uses {{yam}} as a noun?",
          "options": [
            "{{Mi le yam roti.}}",
            "{{Yam sen bon.}}",
            "{{Imi xa yam in restoran.}}",
            "{{Te yam pingo.}}",
            "{{Yu yam keto?}}"
          ],
          "correct": 1,
          "explanation": "{{Yam sen bon}} means 'The food is good.' The other sentences use {{yam}} as the verb 'eat'.",
          "passage": null
        },
        {
          "id": "wc-noun-verb-3",
          "type": "mcq",
          "prompt": "Which sentence uses {{lala}} as a noun?",
          "options": [
            "{{Te lala meli.}}",
            "{{Lala sen bon.}}",
            "{{Mi lala in banyo.}}",
            "{{Imi xa lala ton uyu.}}",
            "{{Piu lala fe soba.}}"
          ],
          "correct": 1,
          "explanation": "{{Lala sen bon}} means 'The song is good.' The others use {{lala}} as the verb 'sing'.",
          "passage": null
        },
        {
          "id": "wc-noun-verb-4",
          "type": "mcq",
          "prompt": "In {{Misu botela sen per mesa}}, what is {{botela}} doing?",
          "options": [
            "It is a noun acting as the subject of the sentence.",
            "It is a verb taking {{mesa}} as its object.",
            "It is an adjective modifying {{mesa}}.",
            "It is a preposition showing location.",
            "It is a numeral counting the table."
          ],
          "correct": 0,
          "explanation": "{{Botela}} is the subject noun phrase; {{sen}} links it to the prepositional phrase {{per mesa}}.",
          "passage": null
        },
        {
          "id": "wc-noun-verb-5",
          "type": "mcq",
          "prompt": "Which gloss pair fits the b word {{doxo}}?",
          "options": [
            "'reading' / 'read'",
            "'reading' / 'reader'",
            "'reading' / 'readable'",
            "'reading' / 're-read'",
            "'reading' / 'unreadable'"
          ],
          "correct": 0,
          "explanation": "The same form {{doxo}} can be a noun ('reading') or a verb ('read'). Reader is {{doxoyen}}, readable is {{doxoible}}, and re-read is {{ridoxo}}.",
          "passage": null
        },
        {
          "id": "wc-noun-verb-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: The children read the new newspaper.",
          "answer": "Nini doxo neo gazeta.",
          "accept": [],
          "explanation": "{{Doxo}} is the verb; {{neo gazeta}} is its object."
        },
        {
          "id": "wc-noun-verb-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: Food is good, but work is hard.",
          "answer": "Yam sen bon, mas ergo sen katina.",
          "accept": [],
          "explanation": "{{Yam}} and {{ergo}} are b words used here as nouns; both need the copula {{sen}} before an adjective."
        },
        {
          "id": "wc-noun-verb-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Misu lala sen bon, mas misu ergo no sen asan}}.",
          "answer": "My song is good, but my work is not easy.",
          "accept": [
            "My song is good, but my work isn't easy."
          ],
          "explanation": "{{Lala}} is a noun here ('song'), {{ergo}} is a noun ('work'), and {{no}} negates the copula."
        },
        {
          "id": "wc-noun-verb-9",
          "type": "fill",
          "prompt": "___ sen bon, mas ___ no sen asan.",
          "blanks": [
            {
              "answer": "{pair:g}",
              "accept": []
            },
            {
              "answer": "{pair:g2}",
              "accept": []
            }
          ],
          "explanation": "{{Yam}} and {{ergo}} are b words used as nouns; both are subjects of {{sen}}.",
          "gloss": "{pair:e} is good, but {pair:e2} is not easy.",
          "dyn": {
            "slots": {
              "pair": [
                {
                  "e": "Food",
                  "g": "Yam",
                  "e2": "work",
                  "g2": "ergo"
                },
                {
                  "e": "Water",
                  "g": "Sui",
                  "e2": "play",
                  "g2": "yuxi"
                },
                {
                  "e": "Music",
                  "g": "Musika",
                  "e2": "study",
                  "g2": "xwexi"
                }
              ]
            }
          }
        },
        {
          "id": "wc-noun-verb-10",
          "type": "fill",
          "prompt": "Nini le ___ lungo gazeta.",
          "blanks": [
            {
              "answer": "doxo",
              "accept": []
            }
          ],
          "explanation": "{{Doxo}} is the verb; {{lungo gazeta}} is its object.",
          "gloss": "The children read a long newspaper."
        }
      ]
    },
    {
      "id": "wc-adjective-adverb",
      "area": "word-classes",
      "title": "Adjectives vs. adverbs",
      "blurb": "Adjectives sit before nouns; adverbs modify verbs, adjectives, or other adverbs.",
      "refs": [
        "Grammar pp. 12–15, 66–67",
        "Lessons 13–15"
      ],
      "notes": [
        "An adjective precedes the noun it modifies: {{meli kamisa}} = beautiful shirt.",
        "An adverb typically precedes the verb, or follows the verb when there is no object.",
        "The suffix {{-mo}} turns an adjective into an adverb modifier: {{daymo day}} = very big; {{perfetomo syahe}} = perfectly black.",
        "The class t covers adjective/adverb words; the class m covers pure adverbs such as {{pimpan}} (often)."
      ],
      "examples": [
        [
          "Daymo lama alimyen doxo neo kitabu.",
          "The very old teacher reads a new book."
        ],
        [
          "Te lala meli ji danse bon.",
          "She sings beautifully and dances well."
        ],
        [
          "Femyen pimpan doxo in kokikamer.",
          "The woman often reads in the kitchen."
        ]
      ],
      "exercises": [
        {
          "id": "wc-adjective-adverb-1",
          "type": "mcq",
          "prompt": "In the passage, what does {{meli}} modify in each sentence?",
          "options": [
            "It modifies the noun {{kamisa}} in the first sentence and the verb {{danse}} in the second.",
            "It modifies a verb in both sentences.",
            "It is a noun in both sentences.",
            "It is a preposition in the first sentence and a conjunction in the second.",
            "It modifies an adjective in both sentences."
          ],
          "correct": 0,
          "explanation": "Before a noun, {{meli}} is an adjective; after a verb with no object, it is an adverb.",
          "passage": "Meli kamisa sen per lil kursi. Femyen danse meli."
        },
        {
          "id": "wc-adjective-adverb-2",
          "type": "mcq",
          "prompt": "Which sentence places the adjective correctly?",
          "options": [
            "{{Mi le kari meli kamisa.}}",
            "{{Mi le kari kamisa meli.}}",
            "{{Meli mi le kari kamisa.}}",
            "{{Mi meli le kari kamisa.}}",
            "{{Mi le kari kamisa sen meli.}}"
          ],
          "correct": 0,
          "explanation": "Adjectives precede their nouns in Globasa, so {{meli kamisa}} is correct.",
          "passage": null
        },
        {
          "id": "wc-adjective-adverb-3",
          "type": "mcq",
          "prompt": "Which sentence uses {{daymo}} correctly?",
          "options": [
            "{{Hin baytu sen daymo day.}}",
            "{{Hin daymo baytu sen day.}}",
            "{{Hin baytu daymo sen day.}}",
            "{{Hin baytu sen day daymo.}}",
            "{{Daymo hin baytu sen day.}}"
          ],
          "correct": 0,
          "explanation": "{{Daymo}} is an adverb of degree modifying the adjective {{day}}: {{daymo day}} = very big.",
          "passage": null
        },
        {
          "id": "wc-adjective-adverb-4",
          "type": "mcq",
          "prompt": "In {{Te pimpan koki in kokikamer}}, what does {{pimpan}} do?",
          "options": [
            "It is an adverb saying how often the cooking happens.",
            "It is an adjective modifying {{te}}.",
            "It is a noun meaning 'kitchen'.",
            "It is a preposition showing location.",
            "It is a tense particle marking the future."
          ],
          "correct": 0,
          "explanation": "{{Pimpan}} means often and modifies the verb {{koki}}.",
          "passage": null
        },
        {
          "id": "wc-adjective-adverb-5",
          "type": "mcq",
          "prompt": "Which sentence correctly uses an adjective to modify a noun?",
          "options": [
            "{{Te hare day oko.}}",
            "{{Te hare oko day.}}",
            "{{Te hare daymo oko.}}",
            "{{Te hare oko daymo.}}",
            "{{Te hare day oko daymo.}}"
          ],
          "correct": 0,
          "explanation": "{{Day}} is an adjective and must precede {{oko}}: {{day oko}} = big eyes.",
          "passage": null
        },
        {
          "id": "wc-adjective-adverb-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: The very old teacher reads a new book.",
          "answer": "Daymo lama alimyen doxo neo kitabu.",
          "accept": [],
          "explanation": "{{Daymo}} modifies {{lama}}; both adjectives precede {{alimyen}}. {{Neo kitabu}} is the object."
        },
        {
          "id": "wc-adjective-adverb-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: She sings beautifully and dances well.",
          "answer": "Te lala meli ji danse bon.",
          "accept": [],
          "explanation": "With no object, the adverbs follow the verbs. {{Ji}} joins the two predicates."
        },
        {
          "id": "wc-adjective-adverb-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Misu lil sodar pimpan yuxi in day parke}}.",
          "answer": "My little sibling often plays in the big park.",
          "accept": [
            "My little brother often plays in the big park.",
            "My little sister often plays in the big park."
          ],
          "explanation": "{{Pimpan}} is an adverb of frequency; {{lil}} and {{day}} are adjectives before their nouns."
        },
        {
          "id": "wc-adjective-adverb-9",
          "type": "fill",
          "prompt": "Hin sen ___ kamisa.",
          "blanks": [
            {
              "answer": "meli",
              "accept": []
            }
          ],
          "explanation": "The adjective {{meli}} precedes the noun {{kamisa}}; {{sen}} is the copula.",
          "gloss": "This is a beautiful shirt."
        },
        {
          "id": "wc-adjective-adverb-10",
          "type": "fill",
          "prompt": "Te le kari ___ day baytu.",
          "blanks": [
            {
              "answer": "daymo",
              "accept": []
            }
          ],
          "explanation": "{{Daymo}} modifies the adjective day, yielding 'a very big house'.",
          "gloss": "He bought a very big house."
        }
      ]
    },
    {
      "id": "wc-transitive",
      "area": "word-classes",
      "title": "Transitive verbs",
      "blurb": "Transitive verbs take a direct object. Some often omit it; echo-object verbs repeat their own noun.",
      "refs": [
        "Grammar pp. 16–17",
        "Lesson 11"
      ],
      "notes": [
        "Class b.oj marks a transitive verb: {{gibe}} (give), {{kari}} (buy), {{bujo}} (catch).",
        "The direct object follows the verb without a preposition: {{Mi bujo myaw}}.",
        "An indirect object uses {{tas}}: {{Mi gibe kitabu tas te}}.",
        "Echo-object verbs (b.oj.ru) often omit their object or repeat it: {{Mi le somno lungo somno}}."
      ],
      "examples": [
        [
          "Alimyen le gibe neo kitabu tas estudiyen.",
          "The teacher gave the new book to the student."
        ],
        [
          "Bwaw bujo lil mahi.",
          "The dog is catching a small fish."
        ],
        [
          "Mi le somno lungo somno.",
          "I slept a long sleep."
        ]
      ],
      "exercises": [
        {
          "id": "wc-transitive-1",
          "type": "mcq",
          "prompt": "Which verb is transitive?",
          "options": [
            "{{gibe}}",
            "{{idi}}",
            "{{side}}",
            "{{ata}}",
            "{{garaku}}"
          ],
          "correct": 0,
          "explanation": "{{Gibe}} is class b.oj: it takes a direct object. The others are intransitive.",
          "passage": null
        },
        {
          "id": "wc-transitive-2",
          "type": "mcq",
          "prompt": "In {{Alimyen le gibe mesaje tas estudiyen}}, what is the direct object?",
          "options": [
            "{{mesaje}}",
            "{{estudiyen}}",
            "{{Alimyen}}",
            "{{tas}}",
            "no object"
          ],
          "correct": 0,
          "explanation": "{{Mesaje}} is what is given; {{tas}} marks the recipient {{estudiyen}}.",
          "passage": null
        },
        {
          "id": "wc-transitive-3",
          "type": "mcq",
          "prompt": "Which sentence uses {{bujo}} correctly?",
          "options": [
            "{{Bwaw le bujo myaw.}}",
            "{{Bwaw le bujo cel myaw.}}",
            "{{Bwaw le bujo tas myaw.}}",
            "{{Bwaw le bujo in myaw.}}",
            "{{Bwaw le bujo kos myaw.}}"
          ],
          "correct": 0,
          "explanation": "A direct object needs no preposition: {{bujo myaw}} = caught the cat.",
          "passage": null
        },
        {
          "id": "wc-transitive-4",
          "type": "mcq",
          "prompt": "Which sentence shows an echo-object use?",
          "options": [
            "{{Mi le somno lungo somno.}}",
            "{{Mi le somno lungo.}}",
            "{{Mi le somno in lungo.}}",
            "{{Mi le somno tas lungo.}}",
            "{{Mi le somno kos lungo.}}"
          ],
          "correct": 0,
          "explanation": "The object repeats the verb's own noun: {{somno}} ... {{somno}}. {{Lungo}} is an adjective modifying that object.",
          "passage": null
        },
        {
          "id": "wc-transitive-5",
          "type": "mcq",
          "prompt": "What happened to the fish?",
          "options": [
            "The speaker caught it and gave it to a sibling.",
            "The speaker bought it and ate it.",
            "The speaker saw it and left it in the sea.",
            "The sibling caught it and gave it to the speaker.",
            "The speaker gave it to a friend at the bank."
          ],
          "correct": 0,
          "explanation": "{{Bujo}} means catch; {{gibe}} means give; {{tas}} marks the recipient; {{da}} refers back to the fish.",
          "passage": "Mi le bujo lil mahi in bahari, ji mi le gibe da tas misu sodar."
        },
        {
          "id": "wc-transitive-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: The teacher gave the new card to the student.",
          "answer": "Alimyen le gibe neo karta tas estudiyen.",
          "accept": [],
          "explanation": "{{Gibe}} takes {{neo karta}} as its direct object; {{tas estudiyen}} is the recipient phrase."
        },
        {
          "id": "wc-transitive-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: The dog is catching the small fish.",
          "answer": "Bwaw bujo lil mahi.",
          "accept": [],
          "explanation": "{{Bujo}} is transitive, so {{lil mahi}} follows directly with no preposition."
        },
        {
          "id": "wc-transitive-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Mi le kari dua kitabu ji gibe un kitabu tas misu sodar}}.",
          "answer": "I bought two books and gave one book to my sibling.",
          "accept": [
            "I bought two books and gave one to my sibling.",
            "I bought two books and gave one book to my brother.",
            "I bought two books and gave one book to my sister.",
            "I bought two books and gave one to my brother.",
            "I bought two books and gave one to my sister."
          ],
          "explanation": "{{Kari}} and {{gibe}} are transitive; {{un kitabu}} means \"one book\"; {{tas}} marks the recipient."
        },
        {
          "id": "wc-transitive-9",
          "type": "fill",
          "prompt": "Alimyen le ___ karta tas nini.",
          "blanks": [
            {
              "answer": "{v:g}",
              "accept": []
            }
          ],
          "explanation": "The word {v:g} ('{v:e}') is transitive; {{karta}} is its direct object.",
          "gloss": "The teacher {v:e} a card to the child.",
          "dyn": {
            "slots": {
              "v": [
                [
                  "gave",
                  "gibe"
                ],
                [
                  "sent",
                  "irsal"
                ],
                [
                  "carried",
                  "porta"
                ]
              ]
            }
          }
        },
        {
          "id": "wc-transitive-10",
          "type": "fill",
          "prompt": "Mi le ___ misu pingo.",
          "blanks": [
            {
              "answer": "yam",
              "accept": []
            }
          ],
          "explanation": "{{Yam}} is transitive here, with {{misu pingo}} as its direct object.",
          "gloss": "I ate my apple."
        }
      ]
    },
    {
      "id": "wc-intransitive",
      "area": "word-classes",
      "title": "Intransitive verbs",
      "blurb": "Intransitive verbs do not take a direct object; destinations and locations use prepositions.",
      "refs": [
        "Grammar p. 17",
        "Lessons 4–8"
      ],
      "notes": [
        "Class b.nenoj marks intransitive verbs: {{idi}} (go), {{ata}} (come), {{side}} (sit), {{loka}} (be located).",
        "A destination uses {{cel}}: {{Mi idi cel eskol}}.",
        "A location uses {{in}}, {{fe, per, bax}}, and similar prepositions, never a bare object.",
        "Some intransitives become transitive with {{-gi}}: {{garaku}} → {{garakugi}} (cause to drown/sink)."
      ],
      "examples": [
        [
          "Nini side in kokikamer.",
          "The children are sitting in the kitchen."
        ],
        [
          "Mi le idi cel eskol.",
          "I went to school."
        ],
        [
          "Misu kitabu loka per mesa.",
          "My book is on the table."
        ]
      ],
      "exercises": [
        {
          "id": "wc-intransitive-1",
          "type": "mcq",
          "prompt": "Which verb is intransitive?",
          "options": [
            "{{idi}}",
            "{{gibe}}",
            "{{kari}}",
            "{{bujo}}",
            "{{oko}}"
          ],
          "correct": 0,
          "explanation": "{{Idi}} is class b.nenoj. The other verbs are transitive.",
          "passage": null
        },
        {
          "id": "wc-intransitive-2",
          "type": "mcq",
          "prompt": "Which sentence is correct?",
          "options": [
            "{{Mi le idi cel eskol.}}",
            "{{Mi le idi eskol.}}",
            "{{Mi le idi tas eskol.}}",
            "{{Mi le idi kos eskol.}}",
            "{{Mi le idi yon eskol.}}"
          ],
          "correct": 0,
          "explanation": "{{Idi}} is intransitive; the destination is marked with {{cel}}.",
          "passage": null
        },
        {
          "id": "wc-intransitive-3",
          "type": "mcq",
          "prompt": "In {{Nini side in kokikamer}}, what is in {{kokikamer}}?",
          "options": [
            "a prepositional phrase",
            "a direct object",
            "the subject",
            "an adjective phrase",
            "a copula complement"
          ],
          "correct": 0,
          "explanation": "{{Side}} is intransitive, so {{in kokikamer}} is a locative prepositional phrase, not an object.",
          "passage": null
        },
        {
          "id": "wc-intransitive-4",
          "type": "mcq",
          "prompt": "Which sentence uses {{loka}} correctly?",
          "options": [
            "{{Misu botela loka per mesa.}}",
            "{{Misu botela loka mesa.}}",
            "{{Misu botela loka tas mesa.}}",
            "{{Misu botela loka cel mesa.}}",
            "{{Misu botela loka yon mesa.}}"
          ],
          "correct": 0,
          "explanation": "{{Loka}} is intransitive here; {{per mesa}} is a location phrase, not a direct object.",
          "passage": null
        },
        {
          "id": "wc-intransitive-5",
          "type": "mcq",
          "prompt": "Where did the child sit?",
          "options": [
            "The child sat on a chair under a big tree.",
            "The child sat on a chair inside the house.",
            "The child stood under a big tree.",
            "The child went to a chair in the park and stood on it.",
            "The child sat on a big tree in the park."
          ],
          "correct": 0,
          "explanation": "{{Idi cel}} means go to; {{side per}} means sit on; {{bax}} means under.",
          "passage": "Nini le idi cel parke, ji te le side per kursi bax day drevo."
        },
        {
          "id": "wc-intransitive-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: The children are sitting in the kitchen.",
          "answer": "Nini side in kokikamer.",
          "accept": [],
          "explanation": "{{Side}} is intransitive; {{in kokikamer}} tells the location."
        },
        {
          "id": "wc-intransitive-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: We will go to the city tomorrow.",
          "answer": "Imi xa idi cel xaher jaxadin.",
          "accept": [],
          "explanation": "{{Xa}} marks future; {{cel}} marks destination; {{jaxadin}} means tomorrow."
        },
        {
          "id": "wc-intransitive-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Myaw le side per kursi ji oko piu}}.",
          "answer": "The cat sat on the chair and watched a bird.",
          "accept": [
            "The cat was sitting on the chair and watching a bird.",
            "The cat sat on the chair and looked at a bird."
          ],
          "explanation": "Side is intransitive with {{per kursi}}; {{oko}} is transitive with {{piu}}. The past tense is established by {{le}}."
        },
        {
          "id": "wc-intransitive-9",
          "type": "fill",
          "prompt": "Imi le ___ cel parke.",
          "blanks": [
            {
              "answer": "{v:g}",
              "accept": []
            }
          ],
          "explanation": "Here {v:g} is the intransitive verb '{v:e}'.",
          "gloss": "We {v:e} to the park.",
          "dyn": {
            "slots": {
              "v": [
                [
                  "went",
                  "idi"
                ],
                [
                  "came",
                  "ata"
                ],
                [
                  "returned",
                  "preata"
                ]
              ]
            }
          }
        },
        {
          "id": "wc-intransitive-10",
          "type": "fill",
          "prompt": "Bwaw le ___ in lil sanduku.",
          "blanks": [
            {
              "answer": "{v:g}",
              "accept": []
            }
          ],
          "explanation": "The word {v:g} is intransitive and pairs with the location phrase {{in lil sanduku}}.",
          "gloss": "The dog {v:e} in a little box.",
          "dyn": {
            "slots": {
              "v": [
                [
                  "sat",
                  "side"
                ],
                [
                  "stood",
                  "estay"
                ]
              ]
            }
          }
        }
      ]
    },
    {
      "id": "wc-ambitransitive",
      "area": "word-classes",
      "title": "Ambitransitive verbs",
      "blurb": "Patientive ambitransitives can take an object or be used intransitively, often with a change of perspective.",
      "refs": [
        "Grammar pp. 17–19",
        "Grammar p. 97"
      ],
      "notes": [
        "Class b.oro marks patientive ambitransitive verbs; subtypes include feeling ({{hisi}}), state, non-agentive, and motion ({{jotay}}).",
        "Transitive: {{Filme le interes mi}}. Intransitive: {{Mi interes tem filme}}.",
        "The intransitive meaning can also be expressed with {{sen}} + root-do: {{Mi sen interesdo tem filme}}.",
        "For some verbs the intransitive form uses {{-cu}}: {{Dwer le bukacu}} (the door opened)."
      ],
      "examples": [
        [
          "Filme le interes mi.",
          "The movie interested me."
        ],
        [
          "Mi sen interesdo tem filme.",
          "I am interested in the movie."
        ],
        [
          "Dwer le bukacu.",
          "The door opened."
        ]
      ],
      "exercises": [
        {
          "id": "wc-ambitransitive-1",
          "type": "mcq",
          "prompt": "What does the passage demonstrate about {{interes}}?",
          "options": [
            "It is ambitransitive: it takes an object in the first sentence and is used intransitively in the second.",
            "It is intransitive in both sentences.",
            "It is a noun in both sentences.",
            "It is a copula in both sentences.",
            "The second sentence is ungrammatical because {{interes}} needs an object."
          ],
          "correct": 0,
          "explanation": "The same verb can be transitive ({{interes mi}}) or intransitive ({{mi interes tem}} ...).",
          "passage": "Filme le interes mi. Mi interes tem filme."
        },
        {
          "id": "wc-ambitransitive-2",
          "type": "mcq",
          "prompt": "Which sentence uses {{pilo}} transitively?",
          "options": [
            "{{Tesu ergo le pilo te.}}",
            "{{Te le pilo.}}",
            "{{Te sen pilodo.}}",
            "{{Te pilo tem ergo.}}",
            "{{Te le pilo in ergo.}}"
          ],
          "correct": 0,
          "explanation": "{{Tesu ergo}} is the subject and {{te}} is the direct object: 'His work tired him.'",
          "passage": null
        },
        {
          "id": "wc-ambitransitive-3",
          "type": "mcq",
          "prompt": "Which sentence means 'The door opened'?",
          "options": [
            "{{Dwer le bukacu.}}",
            "{{Dwer le bukagi.}}",
            "{{Dwer le buka dwer.}}",
            "{{Dwer le sen buka.}}",
            "{{Dwer le buka tas.}}"
          ],
          "correct": 0,
          "explanation": "{{Bukacu}} is the intransitive form 'become open'. {{Bukagi}} would be causative.",
          "passage": null
        },
        {
          "id": "wc-ambitransitive-4",
          "type": "mcq",
          "prompt": "Which sentence uses {{buka}} transitively?",
          "options": [
            "{{Femyen le buka janela.}}",
            "{{Janela le bukacu.}}",
            "{{Femyen le bukacu janela.}}",
            "{{Femyen le buka cel janela.}}",
            "{{Femyen le buka tas janela.}}"
          ],
          "correct": 0,
          "explanation": "{{Buka}} takes {{janela}} directly as its object: 'The woman opened the window.'",
          "passage": null
        },
        {
          "id": "wc-ambitransitive-5",
          "type": "mcq",
          "prompt": "Which pair is correctly matched?",
          "options": [
            "{{Fini}} is ambitransitive: it can mean 'finish something' or 'end'.",
            "{{Fini}} is only intransitive and never takes an object.",
            "{{Fini}} is only a noun and cannot be a verb.",
            "{{Fini}} is a preposition meaning 'before'.",
            "{{Fini}} is an auxiliary verb meaning 'must'."
          ],
          "correct": 0,
          "explanation": "{{Fini}} is patientive ambitransitive: {{Alimyen fini darsu}} vs {{Darsu fini}}.",
          "passage": null
        },
        {
          "id": "wc-ambitransitive-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: The long lesson tired the students.",
          "answer": "Lungo darsu le pilo estudiyen.",
          "accept": [],
          "explanation": "{{Pilo}} is transitive here: the lesson is the subject, the students are the object."
        },
        {
          "id": "wc-ambitransitive-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: I am interested in Globasa.",
          "answer": "Mi interes tem Globasa.",
          "accept": [
            "Mi sen interesdo tem Globasa."
          ],
          "explanation": "{{Interes}} is used intransitively with {{tem}}. {{Mi sen interesdo tem}} Globasa is also correct."
        },
        {
          "id": "wc-ambitransitive-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Dwer le bukacu, ji nini le idi cel kamer}}.",
          "answer": "The door opened, and the child went into the room.",
          "accept": [
            "The door opened, and the children went into the room."
          ],
          "explanation": "{{Bukacu}} is intransitive 'became open'; {{idi cel}} marks movement into the room."
        },
        {
          "id": "wc-ambitransitive-9",
          "type": "fill",
          "prompt": "Mi sen ___do tem basa.",
          "blanks": [
            {
              "answer": "interes",
              "accept": []
            }
          ],
          "explanation": "The adjective {{interesdo}} is built from {{interes}} + {{-do}}.",
          "gloss": "I am interested in languages."
        },
        {
          "id": "wc-ambitransitive-10",
          "type": "fill",
          "prompt": "Tesu lungo ergo le ___ te.",
          "blanks": [
            {
              "answer": "pilo",
              "accept": []
            }
          ],
          "explanation": "{{Pilo}} is transitive: 'His long work tired him.'",
          "gloss": "Their long work tired him."
        }
      ]
    },
    {
      "id": "wc-function",
      "area": "word-classes",
      "title": "Function words",
      "blurb": "Pronouns, determiners, prepositions, conjunctions, numerals, and particles carry the grammar.",
      "refs": [
        "Grammar pp. 30–41, 97–98",
        "Lessons 3–10"
      ],
      "notes": [
        "Determiners ({{ke, hin, den, ban, moy, nil, alo, sama}}) precede a noun and cannot stand alone.",
        "Prepositions introduce phrases: {{in}} (in), {{cel}} (to), {{ton}} (together with), {{per}} (on), {{bax}} (under).",
        "Conjunctions join words or clauses: {{ji}} (and), {{or}} (or), {{mas}} (but), {{koski}} (because).",
        "Particles mark grammar: {{le}} (past), {{xa}} (future), {{na}} (infinitive), {{am}} (imperative), no (negation)."
      ],
      "examples": [
        [
          "Imi le ata ex eskol ton misu doste.",
          "We came out of school with my friend."
        ],
        [
          "Mi suki kafe ji cay.",
          "I like coffee and tea."
        ],
        [
          "Mi no vole kafe, mas mi vole cay.",
          "I don't want coffee, but I want tea."
        ]
      ],
      "exercises": [
        {
          "id": "wc-function-1",
          "type": "mcq",
          "prompt": "In {{Moy nini doxo}}, what is {{moy}}?",
          "options": [
            "a determiner",
            "a pronoun",
            "a preposition",
            "a tense particle",
            "a numeral"
          ],
          "correct": 0,
          "explanation": "{{Moy}} is a determiner and must be followed by a noun: {{moy nini}} = every child.",
          "passage": null
        },
        {
          "id": "wc-function-2",
          "type": "mcq",
          "prompt": "In {{Mi le idi cel eskol}}, what is {{cel}}?",
          "options": [
            "{{Cel}} is a preposition marking the destination.",
            "{{Cel}} is a direct object marker.",
            "{{Cel}} is a conjunction meaning 'but'.",
            "{{Cel}} is a tense particle marking the past.",
            "{{Cel}} is a pronoun meaning 'we'."
          ],
          "correct": 0,
          "explanation": "{{Cel}} is a preposition: {{cel eskol}} = to school.",
          "passage": null
        },
        {
          "id": "wc-function-3",
          "type": "mcq",
          "prompt": "Which sentence uses a conjunction correctly?",
          "options": [
            "{{Mi suki kafe ji cay.}}",
            "{{Mi suki kafe ton cay.}}",
            "{{Mi suki kafe cel cay.}}",
            "{{Mi suki kafe tas cay.}}",
            "{{Mi suki kafe per cay.}}"
          ],
          "correct": 0,
          "explanation": "{{Ji}} joins the two nouns. {{Ton}} means 'together with' and would change the meaning.",
          "passage": null
        },
        {
          "id": "wc-function-4",
          "type": "mcq",
          "prompt": "What does the passage tell us?",
          "options": [
            "The speaker went to the bank with a sibling but did not find their father.",
            "The speaker went to the bank with their father and found a sibling.",
            "The speaker's sibling went to the bank to find the speaker.",
            "The speaker found their father at the bank with a sibling.",
            "The speaker did not go to the bank because their father was there."
          ],
          "correct": 0,
          "explanation": "{{Le}} marks past; {{cel}} marks destination; {{ton}} means together with; {{mas}} is but; no negates {{ewreka}}.",
          "passage": "Mi le idi cel banko ton misu sodar, mas imi no le ewreka misu patre."
        },
        {
          "id": "wc-function-5",
          "type": "mcq",
          "prompt": "Which word is a pronoun?",
          "options": [
            "{{ete}}",
            "{{cel}}",
            "{{moy}}",
            "{{tiga}}",
            "{{ji}}"
          ],
          "correct": 0,
          "explanation": "{{Ete}} is the animate plural pronoun 'they'. {{Cel}} is a preposition, {{moy}} a determiner, {{tiga}} a numeral, and {{ji}} a conjunction.",
          "passage": null,
          "dyn": {
            "kind": "definition",
            "prompt": "Which word is {term}?",
            "pool": [
              [
                "a pronoun",
                "ete",
                "{{Ete}} is the animate plural pronoun 'they'. {{Cel}} is a preposition, {{moy}} a determiner, {{tiga}} a numeral, and {{ji}} a conjunction."
              ],
              [
                "a preposition",
                "cel",
                "{{Cel}} means 'to, toward' and marks a destination."
              ],
              [
                "a determiner",
                "moy",
                "{{Moy}} means 'every' and must be followed by a noun."
              ],
              [
                "a numeral",
                "tiga",
                "{{Tiga}} is the number three."
              ],
              [
                "a conjunction",
                "ji",
                "{{Ji}} joins words and phrases: 'and'."
              ]
            ]
          }
        },
        {
          "id": "wc-function-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: We will go to the city with my brother.",
          "answer": "Imi xa idi cel xaher ton misu sodar.",
          "accept": [],
          "explanation": "{{Imi}} is the pronoun, {{xa}} marks future, {{cel}} marks destination, and {{ton}} means 'together with'."
        },
        {
          "id": "wc-function-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: The bottle is on the table, not under the chair.",
          "answer": "Botela sen per mesa, no sen bax kursi.",
          "accept": [
            "Botela sen per mesa, no bax kursi."
          ],
          "explanation": "{{Per}} and {{bax}} are prepositions; {{no}} negates the second copula."
        },
        {
          "id": "wc-function-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Mi no vole kafe, mas mi vole cay}}.",
          "answer": "I don't want coffee, but I want tea.",
          "accept": [
            "I do not want coffee, but I want tea."
          ],
          "explanation": "No negates {{vole}}; {{mas}} is the conjunction 'but'."
        },
        {
          "id": "wc-function-9",
          "type": "fill",
          "prompt": "Imi le ata ___ misu doste.",
          "blanks": [
            {
              "answer": "ton",
              "accept": []
            }
          ],
          "explanation": "{{Ton}} is the preposition 'together with'.",
          "gloss": "We came with my friend."
        },
        {
          "id": "wc-function-10",
          "type": "fill",
          "prompt": "Te no yam roti, ___ te glu cay.",
          "blanks": [
            {
              "answer": "mas",
              "accept": []
            }
          ],
          "explanation": "{{Mas}} is the conjunction 'but'.",
          "gloss": "He does not eat bread, but he drinks tea."
        }
      ]
    },
    {
      "id": "syn-svo",
      "area": "syntax",
      "title": "Strict SVO order",
      "blurb": "The unmarked sentence is Subject–Verb–Object. Reordering needs the object marker {{el}} and belongs to marked style.",
      "refs": [
        "Grammar pp. 73–74",
        "Lessons 4–8"
      ],
      "notes": [
        "Default order: Subject + Verb + Object + other phrases.",
        "The direct object follows the verb with no preposition.",
        "S-O-V and O-S-V require {{el}} before the object and are typical of poetry and song lyrics.",
        "Prepositional phrases follow the object: {{Mi le doxo kitabu in kokikamer}}."
      ],
      "examples": [
        [
          "Patre mwa matre.",
          "The father kisses the mother."
        ],
        [
          "Patre el matre mwa.",
          "The father kisses the mother. (S-O-V, marked)"
        ],
        [
          "El matre patre mwa.",
          "The father kisses the mother. (O-S-V, marked)"
        ]
      ],
      "exercises": [
        {
          "id": "syn-svo-1",
          "type": "mcq",
          "prompt": "How do the two sentences differ in meaning?",
          "options": [
            "The first says the father kisses the mother; the second says the mother kisses the father.",
            "Both sentences mean the same thing because Globasa has free word order.",
            "The first is passive and the second is active.",
            "The second is ungrammatical because {{matre}} cannot be a subject.",
            "The first has no direct object."
          ],
          "correct": 0,
          "explanation": "With the same verb and {{no el}}, changing the positions of {{patre}} and {{matre}} changes who kisses whom.",
          "passage": "Patre mwa matre. Matre mwa patre."
        },
        {
          "id": "syn-svo-2",
          "type": "mcq",
          "prompt": "Which sentence means 'The dog caught the cat' in canonical SVO order?",
          "options": [
            "{{Bwaw le bujo myaw.}}",
            "{{Bwaw le myaw bujo.}}",
            "{{Bujo bwaw le myaw.}}",
            "{{Myaw le bujo bwaw.}}",
            "{{El myaw bwaw le bujo.}}"
          ],
          "correct": 0,
          "explanation": "Subject {{bwaw}}, verb {{bujo}}, object {{myaw}}.",
          "passage": null
        },
        {
          "id": "syn-svo-3",
          "type": "mcq",
          "prompt": "Which sentence correctly uses {{el}} for O-S-V order?",
          "options": [
            "{{El matre patre mwa.}}",
            "{{Matre el patre mwa.}}",
            "{{El matre mwa patre.}}",
            "{{Patre mwa el matre.}}",
            "{{Matre mwa patre el.}}"
          ],
          "correct": 0,
          "explanation": "{{El}} marks {{matre}} as the object; {{patre}} remains the subject before the verb.",
          "passage": null
        },
        {
          "id": "syn-svo-4",
          "type": "mcq",
          "prompt": "In {{Alimyen le gibe mesaje tas estudiyen}}, which part is the object?",
          "options": [
            "{{mesaje}} is the direct object and {{tas estudiyen}} is the recipient phrase.",
            "{{estudiyen}} is the direct object and {{mesaje}} is the recipient.",
            "{{Alimyen}} is the object.",
            "{{tas}} is the object.",
            "The sentence has no object."
          ],
          "correct": 0,
          "explanation": "{{Mesaje}} is what is given; {{tas}} marks the recipient {{estudiyen}}.",
          "passage": null
        },
        {
          "id": "syn-svo-5",
          "type": "mcq",
          "prompt": "Which sentence keeps the direct object immediately after the verb?",
          "options": [
            "{{Mi le kari roti in dukan.}}",
            "{{Mi le kari in dukan roti.}}",
            "{{Mi le in dukan kari roti.}}",
            "{{Mi kari roti le in dukan.}}",
            "{{Mi le roti kari in dukan.}}"
          ],
          "correct": 0,
          "explanation": "The object {{roti}} follows {{kari}}; the locative phrase follows the object.",
          "passage": null
        },
        {
          "id": "syn-svo-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: The father kissed the mother.",
          "answer": "Patre le mwa matre.",
          "accept": [],
          "explanation": "Subject {{patre}}, verb {{mwa}} with past {{le}}, object {{matre}}."
        },
        {
          "id": "syn-svo-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: The teacher gave the message to the student in the classroom.",
          "answer": "Alimyen le gibe mesaje tas estudiyen in darsukamer.",
          "accept": [],
          "explanation": "Order is subject, verb, direct object, recipient phrase, location phrase."
        },
        {
          "id": "syn-svo-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Bwaw le bujo lil myaw in day parke}}.",
          "answer": "The dog caught the little cat in the big park.",
          "accept": [
            "The dog caught the small cat in the big park."
          ],
          "explanation": "{{Bwaw}} is subject, {{bujo}} is verb, {{lil myaw}} is object, and {{in day parke}} is a locative phrase."
        },
        {
          "id": "syn-svo-9",
          "type": "fill",
          "prompt": "Patre ___ matre.",
          "blanks": [
            {
              "answer": "{v:g}",
              "accept": []
            }
          ],
          "explanation": "The word {v:g} ('{v:e}') is transitive; {{matre}} is its object.",
          "gloss": "The father {v:e} the mother.",
          "dyn": {
            "slots": {
              "v": [
                [
                  "kisses",
                  "mwa"
                ],
                [
                  "catches",
                  "bujo"
                ],
                [
                  "sees",
                  "oko"
                ],
                [
                  "loves",
                  "lubi"
                ]
              ]
            }
          }
        },
        {
          "id": "syn-svo-10",
          "type": "fill",
          "prompt": "Alimyen le gibe mesaje ___ estudiyen.",
          "blanks": [
            {
              "answer": "tas",
              "accept": []
            }
          ],
          "explanation": "{{Tas}} marks the recipient of {{gibe}}.",
          "gloss": "The teacher gave the message to the student."
        }
      ]
    },
    {
      "id": "syn-adjective",
      "area": "syntax",
      "title": "Mandatory adjective placement",
      "blurb": "Adjectives precede nouns; specifiers and quantifiers come first; complex adjective phrases follow the noun.",
      "refs": [
        "Grammar pp. 64–67",
        "Lesson 13"
      ],
      "notes": [
        "Noun phrase order: determiner / possessive / quantifier + adverb + adjective(s) + noun.",
        "{{Misu, yusu}}, and {{tesu}} are possessive adjectives and precede the noun.",
        "The suffix {{-li}} derives an adjective from a noun: Engli → Englili (English).",
        "A complex adjective phrase (with a preposition) follows its noun: {{kitabu eskrido fal misu doste}}."
      ],
      "examples": [
        [
          "Hin misu care daymo lama kitabu sen per lil mesa.",
          "These four very old books of mine are on the small table."
        ],
        [
          "Kitabu eskrido fal misu doste sen meli.",
          "The book written by my friend is beautiful."
        ],
        [
          "Mi le glu Englili cay.",
          "I drank English tea."
        ]
      ],
      "exercises": [
        {
          "id": "syn-adjective-1",
          "type": "mcq",
          "prompt": "In the sentence, what does {{daymo}} modify?",
          "options": [
            "It modifies lama and means 'very old'.",
            "It modifies {{karta}} and means 'very card'.",
            "It modifies {{mesa}} and means 'very table'.",
            "It modifies {{misu}} and means 'very mine'.",
            "It modifies {{care}} and means 'very four'."
          ],
          "correct": 0,
          "explanation": "{{Daymo}} is an adverb of degree that modifies the adjective {{lama}}.",
          "passage": "Hin misu care daymo lama karta sen per lil mesa."
        },
        {
          "id": "syn-adjective-2",
          "type": "mcq",
          "prompt": "Which noun phrase follows Globasa order?",
          "options": [
            "{{hin misu tiga daymo lama botela}}",
            "{{hin tiga misu lama daymo botela}}",
            "{{tiga hin misu botela lama daymo}}",
            "{{daymo hin misu tiga lama botela}}",
            "{{botela hin misu tiga daymo lama}}"
          ],
          "correct": 0,
          "explanation": "Determiner + possessive + quantifier + degree adverb + adjective + noun.",
          "passage": null
        },
        {
          "id": "syn-adjective-3",
          "type": "mcq",
          "prompt": "Which sentence correctly uses the adjective suffix {{-li}}?",
          "options": [
            "{{Mi le glu Englili cay.}}",
            "{{Mi le glu Engli cay.}}",
            "{{Mi le glu Englisa cay.}}",
            "{{Mi le glu Engliya cay.}}",
            "{{Mi le glu Englil cay.}}"
          ],
          "correct": 0,
          "explanation": "Englili is the adjective 'English' derived from Engli with {{-li}}; it precedes {{cay}}.",
          "passage": null
        },
        {
          "id": "syn-adjective-4",
          "type": "mcq",
          "prompt": "Which sentence places the adjective before its noun?",
          "options": [
            "{{Mi le oko meli piu.}}",
            "{{Mi le oko piu meli.}}",
            "{{Mi le meli oko piu.}}",
            "{{Meli mi le oko piu.}}",
            "{{Mi le oko piu sen meli.}}"
          ],
          "correct": 0,
          "explanation": "{{Meli}} precedes the noun {{piu}}. The other orders split the object or misplace the adjective.",
          "passage": null
        },
        {
          "id": "syn-adjective-5",
          "type": "mcq",
          "prompt": "Which sentence correctly handles a complex adjective phrase?",
          "options": [
            "{{Sayfa eskrido fal misu doste sen meli.}}",
            "{{Eskrido fal misu doste sayfa sen meli.}}",
            "{{Sayfa fal eskrido misu doste sen meli.}}",
            "{{Meli sayfa eskrido fal misu doste sen.}}",
            "{{Sayfa sen meli eskrido fal misu doste.}}"
          ],
          "correct": 0,
          "explanation": "The complex adjective phrase {{eskrido fal misu doste}} follows the noun {{sayfa}}.",
          "passage": null
        },
        {
          "id": "syn-adjective-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: These four very old cards are on the small table.",
          "answer": "Hin care daymo lama karta sen per lil mesa.",
          "accept": [],
          "explanation": "Specifier {{hin}}, quantifier {{care}}, degree {{daymo}}, adjective {{lama}}, noun {{karta}}."
        },
        {
          "id": "syn-adjective-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: The card written by my friend is beautiful.",
          "answer": "Karta eskrido fal misu doste sen meli.",
          "accept": [],
          "explanation": "The complex adjective phrase follows {{karta}}; {{sen}} links it to {{meli}}."
        },
        {
          "id": "syn-adjective-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Hin misu care daymo lama foto sen per lil mesa}}.",
          "answer": "These four very old photos of mine are on the small table.",
          "accept": [
            "These four very old photos of mine are on the little table."
          ],
          "explanation": "{{Hin}} + {{misu}} + {{care}} + {{daymo lama}} modify {{foto}}."
        },
        {
          "id": "syn-adjective-9",
          "type": "fill",
          "prompt": "Mi le kari dua ___ botela.",
          "blanks": [
            {
              "answer": "{adj:g}",
              "accept": []
            }
          ],
          "explanation": "The adjective {adj:g} precedes {{botela}}.",
          "gloss": "I bought two {adj:e} bottles.",
          "dyn": {
            "slots": {
              "adj": [
                [
                  "beautiful",
                  "meli"
                ],
                [
                  "big",
                  "day"
                ],
                [
                  "new",
                  "neo"
                ],
                [
                  "small",
                  "lil"
                ]
              ]
            }
          }
        },
        {
          "id": "syn-adjective-10",
          "type": "fill",
          "prompt": "Karta eskrido ___ misu doste sen meli.",
          "blanks": [
            {
              "answer": "fal",
              "accept": []
            }
          ],
          "explanation": "{{Fal}} is the preposition '(done) by' inside the adjective phrase.",
          "gloss": "The card written by my friend is beautiful."
        }
      ]
    },
    {
      "id": "syn-copula",
      "area": "syntax",
      "title": "Mandatory sen",
      "blurb": "The copula {{sen}} links a subject to a noun, adjective, prepositional phrase, or clause.",
      "refs": [
        "Grammar pp. 73–74",
        "Lessons 4–5"
      ],
      "notes": [
        "Use {{sen}} when the predicate is not a verb phrase: {{Nini sen misu bete}}; {{Uma sen syahe}}.",
        "{{Sen}} is required before noun phrases, adjective phrases, prepositional phrases, and clauses.",
        "Only in informal speech may {{sen}} be omitted before an adjective phrase; standard written Globasa keeps it.",
        "Question words such as {{keloka}} and {{kewatu}} also link to subjects with {{sen}}: {{Myaw sen keloka}}?"
      ],
      "examples": [
        [
          "Uma sen perfetomo syahe.",
          "The horse is perfectly black."
        ],
        [
          "Myaw sen in sanduku.",
          "The cat is in the box."
        ],
        [
          "Yusu problema sen ki yu godo fikir.",
          "Your problem is that you think too much."
        ]
      ],
      "exercises": [
        {
          "id": "syn-copula-1",
          "type": "mcq",
          "prompt": "Which sentence is standard Globasa?",
          "options": [
            "{{Uma sen perfetomo syahe.}}",
            "{{Uma perfetomo syahe.}}",
            "{{Uma sen perfetomo sen syahe.}}",
            "{{Uma syahe sen perfetomo.}}",
            "{{Uma perfetomo sen syahe.}}"
          ],
          "correct": 0,
          "explanation": "The adjective phrase {{perfetomo syahe}} is linked to the subject by {{sen}}.",
          "passage": null
        },
        {
          "id": "syn-copula-2",
          "type": "mcq",
          "prompt": "Which complement type requires {{sen}} in standard Globasa?",
          "options": [
            "All of these require {{sen}}: a noun phrase, an adjective phrase, a prepositional phrase, or a clause.",
            "Only noun phrases require {{sen}}.",
            "Only adjective phrases require {{sen}}.",
            "Only prepositional phrases require {{sen}}.",
            "None of these require {{sen}} because it is always optional."
          ],
          "correct": 0,
          "explanation": "{{Sen}} functions as a predicate marker for every non-verbal complement type.",
          "passage": null
        },
        {
          "id": "syn-copula-3",
          "type": "mcq",
          "prompt": "Which sentence is missing the mandatory copula?",
          "options": [
            "{{Misu sodar daymo hox.}}",
            "{{Misu sodar sen daymo hox.}}",
            "{{Misu sodar sen in parke.}}",
            "{{Misu sodar sen misu doste.}}",
            "{{Misu sodar sen ki te xa ata.}}"
          ],
          "correct": 0,
          "explanation": "{{Misu sodar daymo hox}} lacks {{sen}} before the adjective phrase.",
          "passage": "Misu sodar daymo hox. Te sen in parke."
        },
        {
          "id": "syn-copula-4",
          "type": "mcq",
          "prompt": "Which sentence correctly links a subject to a prepositional phrase?",
          "options": [
            "{{Myaw sen in sanduku.}}",
            "{{Myaw in sanduku.}}",
            "{{Myaw sen sanduku in.}}",
            "{{Myaw in sen sanduku.}}",
            "{{Myaw sanduku sen in.}}"
          ],
          "correct": 0,
          "explanation": "The prepositional phrase {{in sanduku}} is the complement of {{sen}}.",
          "passage": null
        },
        {
          "id": "syn-copula-5",
          "type": "mcq",
          "prompt": "Which sentence correctly links a subject to a clause?",
          "options": [
            "{{Yusu problema sen ki yu godo fikir.}}",
            "{{Yusu problema ki yu godo fikir.}}",
            "{{Yusu problema sen godo fikir ki yu.}}",
            "{{Yusu problema godo fikir sen ki yu.}}",
            "{{Yusu problema ki sen yu godo fikir.}}"
          ],
          "correct": 0,
          "explanation": "{{Sen}} introduces the clause complement {{ki yu godo fikir}}.",
          "passage": null
        },
        {
          "id": "syn-copula-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: The horse is perfectly black.",
          "answer": "Uma sen perfetomo syahe.",
          "accept": [],
          "explanation": "{{Sen}} links {{uma}} to the adjective phrase {{perfetomo syahe}}."
        },
        {
          "id": "syn-copula-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: My problem is that you think too much.",
          "answer": "Misu problema sen ki yu godo fikir.",
          "accept": [],
          "explanation": "{{Ki}} introduces the clause complement; {{godo}} modifies {{fikir}}."
        },
        {
          "id": "syn-copula-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Misu bete sen daymo hox, koski te le ewreka neo doste}}.",
          "answer": "My child is very happy because she found a new friend.",
          "accept": [
            "My child is very happy because he found a new friend.",
            "My child is very happy because they found a new friend."
          ],
          "explanation": "{{Sen}} links {{bete to daymo hox}}; {{koski}} introduces the reason clause."
        },
        {
          "id": "syn-copula-9",
          "type": "fill",
          "prompt": "Uma ___ perfetomo ___.",
          "blanks": [
            {
              "answer": "sen",
              "accept": []
            },
            {
              "answer": "syahe",
              "accept": []
            }
          ],
          "explanation": "{{Sen}} is the copula; {{syahe}} is the adjective complement.",
          "gloss": "The horse is perfectly black."
        },
        {
          "id": "syn-copula-10",
          "type": "fill",
          "prompt": "Misu problema ___ ki yu godo fikir.",
          "blanks": [
            {
              "answer": "sen",
              "accept": []
            }
          ],
          "explanation": "{{Sen}} links the subject to the clause complement.",
          "gloss": "My problem is that you think too much."
        }
      ]
    },
    {
      "id": "syn-copula-verbs",
      "area": "syntax",
      "title": "Copula verbs vs. lexical verbs",
      "blurb": "{{Sen, xorsen, kwasisen, xetocu}}, and related verbs link a subject to a complement; lexical verbs do not.",
      "refs": [
        "Grammar pp. 16–17",
        "Lesson 18"
      ],
      "notes": [
        "{{Sen}} = be; {{xorsen/sencu}} = become; {{sengi}} = cause to be/become.",
        "Perception copulas: {{okocu}} (look), {{orecu}} (sound), {{nasacu}} (smell), {{xetocu}} (taste), {{pifucu}} (feel by touch).",
        "{{Kwasisen}} means 'seem'; {{hisicu}} and {{ganjoncu}} cover physical and emotional feeling.",
        "A lexical verb such as {{doxo}} takes an object; it cannot link to an adjective complement."
      ],
      "examples": [
        [
          "Supa xetocu bon.",
          "The soup tastes good."
        ],
        [
          "Te kwasisen pilodo.",
          "She seems tired."
        ],
        [
          "Te le xorsen alimyen.",
          "She became a teacher."
        ]
      ],
      "exercises": [
        {
          "id": "syn-copula-verbs-1",
          "type": "mcq",
          "prompt": "Which sentence correctly says 'The soup tastes good'?",
          "options": [
            "{{Supa xetocu bon.}}",
            "{{Supa sen xetocu bon.}}",
            "{{Supa xetocu sen bon.}}",
            "{{Supa bon xetocu.}}",
            "{{Supa xetocu in bon.}}"
          ],
          "correct": 0,
          "explanation": "{{Xetocu}} is a copula verb: it links {{supa}} directly to the adjective {{bon}}.",
          "passage": null
        },
        {
          "id": "syn-copula-verbs-2",
          "type": "mcq",
          "prompt": "Which sentence correctly says 'She seems tired'?",
          "options": [
            "{{Te kwasisen pilodo.}}",
            "{{Te kwasisen pilo.}}",
            "{{Te sen kwasisen pilodo.}}",
            "{{Te pilodo kwasisen.}}",
            "{{Te kwasisen sen pilodo.}}"
          ],
          "correct": 0,
          "explanation": "{{Kwasisen}} links {{te}} to the adjective {{pilodo}}.",
          "passage": null
        },
        {
          "id": "syn-copula-verbs-3",
          "type": "mcq",
          "prompt": "What can we infer from the passage?",
          "options": [
            "The soup smells good, and the sibling seems happy.",
            "The soup tastes bad, and the sibling seems tired.",
            "The soup smells good, and the sibling became happy.",
            "The soup is good, and the sibling looks like soup.",
            "The soup seems happy, and the sibling smells good."
          ],
          "correct": 0,
          "explanation": "{{Nasacu}} is the copula 'smell'; {{kwasisen}} is the copula 'seem'. Both link a subject to a complement.",
          "passage": "Supa nasacu bon, ji misu sodar kwasisen hox."
        },
        {
          "id": "syn-copula-verbs-4",
          "type": "mcq",
          "prompt": "Which sentence uses {{sencu}} correctly?",
          "options": [
            "{{Din sencu bardi.}}",
            "{{Din sencu bardi sen.}}",
            "{{Din sen sencu bardi.}}",
            "{{Din bardi sencu.}}",
            "{{Din sencu in bardi.}}"
          ],
          "correct": 0,
          "explanation": "{{Sencu}} is a copula meaning 'become'; it links {{din to bardi}}.",
          "passage": null
        },
        {
          "id": "syn-copula-verbs-5",
          "type": "mcq",
          "prompt": "Which verb is NOT a copula verb?",
          "options": [
            "{{doxo}}",
            "{{sen}}",
            "{{xorsen}}",
            "{{kwasisen}}",
            "{{okocu}}"
          ],
          "correct": 0,
          "explanation": "{{Doxo}} is a transitive lexical verb. The others are copulas.",
          "passage": null
        },
        {
          "id": "syn-copula-verbs-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: The soup smells good.",
          "answer": "Supa nasacu bon.",
          "accept": [],
          "explanation": "{{Nasacu}} is the copula 'smell (have a particular smell)'."
        },
        {
          "id": "syn-copula-verbs-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: She became a teacher.",
          "answer": "Te le xorsen alimyen.",
          "accept": [],
          "explanation": "{{Xorsen}} links {{te}} to the noun complement {{alimyen}}; {{le}} marks past."
        },
        {
          "id": "syn-copula-verbs-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Din xorsen bardi, ji imi xa idi cel ogar}}.",
          "answer": "The day is getting cold, and we will go home.",
          "accept": [
            "The day is turning cold, and we will go home."
          ],
          "explanation": "{{Xorsen}} marks becoming; {{xa}} marks future; {{ogar}} is 'home'."
        },
        {
          "id": "syn-copula-verbs-9",
          "type": "fill",
          "prompt": "Supa ___ bon.",
          "blanks": [
            {
              "answer": "xetocu",
              "accept": []
            }
          ],
          "explanation": "{{Xetocu}} is the copula for taste.",
          "gloss": "The soup tastes good."
        },
        {
          "id": "syn-copula-verbs-10",
          "type": "fill",
          "prompt": "Te le ___ alimyen.",
          "blanks": [
            {
              "answer": "xorsen",
              "accept": []
            }
          ],
          "explanation": "{{Xorsen}} is the copula 'become' before a noun complement.",
          "gloss": "She became a teacher."
        }
      ]
    },
    {
      "id": "syn-tense",
      "area": "syntax",
      "title": "Tense/aspect order",
      "blurb": "Tense and mood particles open the verb phrase; negation and adverbs follow them in a fixed order.",
      "refs": [
        "Grammar pp. 55–59, 65–66",
        "Lessons 6–10"
      ],
      "notes": [
        "Verb-phrase order: tense/mood marker → affirmation/negation → modifying adverb → adverb → passive → durative → verb.",
        "Simple tenses: {{le}} (past), {{xa}} (future), {{nun}} (present), {{jale}} (just), {{jaxa}} (about to).",
        "Compound tenses combine two: {{le nun}} (past progressive), {{nun le}} (present perfect), {{xa le}} (future perfect).",
        "{{Du-}} marks habitual/durative aspect: {{Mi le}} duyam {{pingo}} = I used to eat apples."
      ],
      "examples": [
        [
          "Mi le no yam pingo.",
          "I did not eat the apple."
        ],
        [
          "Mi le nun doxo kitabu.",
          "I was reading a book."
        ],
        [
          "Imi xa le fini ergo.",
          "We will have finished the work."
        ]
      ],
      "exercises": [
        {
          "id": "syn-tense-1",
          "type": "mcq",
          "prompt": "Which sentence places negation in the correct slot?",
          "options": [
            "{{Mi le no kari ovo.}}",
            "{{Mi no le kari ovo.}}",
            "{{Mi le kari no ovo.}}",
            "{{No mi le kari ovo.}}",
            "{{Mi le kari ovo no.}}"
          ],
          "correct": 0,
          "explanation": "The tense particle {{le}} precedes the negating adverb no, which precedes the verb {{kari}}.",
          "passage": null
        },
        {
          "id": "syn-tense-2",
          "type": "mcq",
          "prompt": "Which sentence expresses present perfective 'I have bought the eggs'?",
          "options": [
            "{{Mi nun le kari ovo.}}",
            "{{Mi le nun kari ovo.}}",
            "{{Mi xa le kari ovo.}}",
            "{{Mi le le kari ovo.}}",
            "{{Mi nun xa kari ovo.}}"
          ],
          "correct": 0,
          "explanation": "Present perfective is {{nun le}} + verb: the purchase is complete and the result matters now.",
          "passage": null
        },
        {
          "id": "syn-tense-3",
          "type": "mcq",
          "prompt": "Which sentence expresses future progressive 'I will be writing a message'?",
          "options": [
            "{{Mi xa nun eskri mesaje.}}",
            "{{Mi nun xa eskri mesaje.}}",
            "{{Mi xa le eskri mesaje.}}",
            "{{Mi le xa eskri mesaje.}}",
            "{{Mi xa eskri nun mesaje.}}"
          ],
          "correct": 0,
          "explanation": "Future progressive is {{xa nun}} + verb: the writing will be in progress.",
          "passage": null
        },
        {
          "id": "syn-tense-4",
          "type": "mcq",
          "prompt": "Which sentence means 'I just drank the juice'?",
          "options": [
            "{{Mi jale glu jusu.}}",
            "{{Mi ja glu jusu.}}",
            "{{Mi le ja glu jusu.}}",
            "{{Mi xa ja glu jusu.}}",
            "{{Mi jaxa glu jusu.}}"
          ],
          "correct": 0,
          "explanation": "{{Jale}} is the immediate-past marker and precedes the verb {{glu}}.",
          "passage": null
        },
        {
          "id": "syn-tense-5",
          "type": "mcq",
          "prompt": "What was happening when the friend arrived?",
          "options": [
            "The speaker was cooking soup.",
            "The speaker had finished cooking.",
            "The speaker would cook later.",
            "The friend was cooking when the speaker arrived.",
            "The speaker cooked every day after the friend arrived."
          ],
          "correct": 0,
          "explanation": "{{Le nun}} is past progressive: the cooking was in progress when the friend arrived.",
          "passage": "Mi le nun koki supa, denwatu hu misu doste le ata."
        },
        {
          "id": "syn-tense-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: I was writing a message.",
          "answer": "Mi le nun eskri mesaje.",
          "accept": [],
          "explanation": "Past progressive is {{le nun}} + verb."
        },
        {
          "id": "syn-tense-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: I will be cooking soup when you arrive.",
          "answer": "Mi xa nun koki supa, denwatu hu yu xa ata.",
          "accept": [],
          "explanation": "{{Xa nun}} marks future progressive; {{denwatu hu}} introduces the time clause."
        },
        {
          "id": "syn-tense-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Mi le no abil na danse, mas nun mi abil}}.",
          "answer": "I could not dance, but now I can.",
          "accept": [
            "I couldn't dance, but now I can."
          ],
          "explanation": "{{Le no abil}} is past negation; {{nun}} marks the present contrast."
        },
        {
          "id": "syn-tense-9",
          "type": "fill",
          "prompt": "Mi ___ no kari ovo.",
          "blanks": [
            {
              "answer": "le",
              "accept": []
            }
          ],
          "explanation": "{{Le}} is the past marker and comes before no.",
          "gloss": "I did not buy eggs."
        },
        {
          "id": "syn-tense-10",
          "type": "fill",
          "prompt": "Imi xa ___ kari ovo.",
          "blanks": [
            {
              "answer": "le",
              "accept": []
            }
          ],
          "explanation": "Future perfective is {{xa le}} + verb: will have bought.",
          "gloss": "We will have bought eggs."
        }
      ]
    },
    {
      "id": "syn-negation",
      "area": "syntax",
      "title": "Negation and questions",
      "blurb": "No precedes what it negates; {{kam}} opens yes/no questions; question words replace the questioned phrase.",
      "refs": [
        "Grammar pp. 61–62, 76–81",
        "Lessons 3–4"
      ],
      "notes": [
        "The negating adverb no immediately precedes the word or phrase being negated.",
        "{{Kam}} marks a yes/no question at the start of the sentence: {{Kam yu suki kafe}}?",
        "Question words such as {{keto, kete, keloka}}, and {{kewatu}} occupy the position of the answer.",
        "{{Am no}} + verb gives a negative command: {{Am no yam pingo}}."
      ],
      "examples": [
        [
          "Mi no sen lao.",
          "I am not old."
        ],
        [
          "Kam yu suki kafe or cay?",
          "Do you like coffee or tea?"
        ],
        [
          "Am no yam pingo.",
          "Don't eat the apple."
        ]
      ],
      "exercises": [
        {
          "id": "syn-negation-1",
          "type": "mcq",
          "prompt": "What does the speaker imply?",
          "options": [
            "They are not old, but they cannot run fast.",
            "They are old and cannot run at all.",
            "They are not old and can run very fast.",
            "They are old but can run fast.",
            "They are not old because they can run fast."
          ],
          "correct": 0,
          "explanation": "{{No sen}} negates the adjective {{lao}}; {{no abil na}} negates the ability to run fast.",
          "passage": "Mi no sen lao, mas mi no abil na pawbu velosi."
        },
        {
          "id": "syn-negation-2",
          "type": "mcq",
          "prompt": "Which sentence is a correct yes/no question?",
          "options": [
            "{{Kam yu suki kafe?}}",
            "{{Yu kam suki kafe?}}",
            "{{Yu suki kam kafe?}}",
            "{{Kam suki yu kafe?}}",
            "{{Yu suki kafe kam?}}"
          ],
          "correct": 0,
          "explanation": "{{Kam}} opens the yes/no question.",
          "passage": null
        },
        {
          "id": "syn-negation-3",
          "type": "mcq",
          "prompt": "Which question correctly uses the pronoun {{keto}}?",
          "options": [
            "{{Yu suki keto?}}",
            "{{Yu suki ke?}}",
            "{{Yu keto suki?}}",
            "{{Keto yu suki ke?}}",
            "{{Yu suki ke to?}}"
          ],
          "correct": 0,
          "explanation": "{{Keto}} is the pronoun 'what'; {{ke}} is a determiner and needs a following noun.",
          "passage": null
        },
        {
          "id": "syn-negation-4",
          "type": "mcq",
          "prompt": "Which sentence is a negative command?",
          "options": [
            "{{Am no glu cay.}}",
            "{{No am glu cay.}}",
            "{{Am glu no cay.}}",
            "{{Glu am no cay.}}",
            "{{No glu am cay.}}"
          ],
          "correct": 0,
          "explanation": "{{Am}} marks the command; no follows {{am}} and precedes the verb {{glu}}.",
          "passage": null
        },
        {
          "id": "syn-negation-5",
          "type": "mcq",
          "prompt": "Which sentence means 'The {{man}} doesn't dance too badly'?",
          "options": [
            "{{Manyen no godomo bur danse.}}",
            "{{Manyen godomo no bur danse.}}",
            "{{Manyen no danse godomo bur.}}",
            "{{No manyen godomo bur danse.}}",
            "{{Manyen godomo bur no danse.}}"
          ],
          "correct": 0,
          "explanation": "No precedes the adverb phrase {{godomo bur}}, which it negates.",
          "passage": null
        },
        {
          "id": "syn-negation-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: I am not old.",
          "answer": "Mi no sen lao.",
          "accept": [],
          "explanation": "No precedes the copula {{sen}}."
        },
        {
          "id": "syn-negation-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: Do you like coffee or tea?",
          "answer": "Kam yu suki kafe or cay?",
          "accept": [],
          "explanation": "{{Kam}} opens the question; or joins the alternatives."
        },
        {
          "id": "syn-negation-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Kam yu no vole na idi cel xaher ton imi}}?",
          "answer": "Don't you want to go to the city with us?",
          "accept": [
            "Do you not want to go to the city with us?"
          ],
          "explanation": "{{Kam}} marks the question; no negates {{vole}}; {{na idi}} is the infinitive complement."
        },
        {
          "id": "syn-negation-9",
          "type": "fill",
          "prompt": "___ yu suki kafe?",
          "blanks": [
            {
              "answer": "kam",
              "accept": []
            }
          ],
          "explanation": "{{Kam}} marks a yes/no question.",
          "gloss": "Do you like coffee?"
        },
        {
          "id": "syn-negation-10",
          "type": "fill",
          "prompt": "Mi ___ sen lao.",
          "blanks": [
            {
              "answer": "no",
              "accept": []
            }
          ],
          "explanation": "No immediately precedes {{sen}}.",
          "gloss": "I am not old."
        }
      ]
    },
    {
      "id": "tense-simple",
      "area": "tenses",
      "title": "Past, present & future",
      "blurb": "Use the dictionary present, {{le}} for past, and {{xa}} for future without changing the verb.",
      "refs": [
        "Grammar pp. 55–57",
        "Lessons 6–10"
      ],
      "notes": [
        "Globasa verbs never conjugate; person and number never change the verb.",
        "The dictionary form is the general present. {{Nun}} may make the present explicit.",
        "{{Le}} marks past and {{xa}} marks future. Both stand before the verb; negation follows the tense marker."
      ],
      "examples": [
        [
          "Mi (nun) doxo gazeta.",
          "I read the newspaper. / I am reading the newspaper."
        ],
        [
          "Mi le doxo gazeta.",
          "I read the newspaper."
        ],
        [
          "Mi xa doxo gazeta.",
          "I will read the newspaper."
        ]
      ],
      "exercises": [
        {
          "id": "tense-simple-1",
          "type": "mcq",
          "prompt": "What will the speaker write?",
          "options": [
            "The speaker will write a message tomorrow.",
            "The speaker will read a newspaper tomorrow.",
            "The speaker wrote a message yesterday.",
            "The speaker will write both a message and a newspaper today.",
            "The speaker read a newspaper and wrote a message yesterday."
          ],
          "correct": 0,
          "explanation": "{{Le}} marks the past newspaper; {{xa}} marks the future message; {{jaxadin}} means tomorrow.",
          "passage": "Mi le doxo gazeta jaledin. Mi xa eskri mesaje jaxadin."
        },
        {
          "id": "tense-simple-2",
          "type": "mcq",
          "prompt": "Which sentence expresses a future action?",
          "options": [
            "{{Mi xa eskri mesaje.}}",
            "{{Mi le eskri mesaje.}}",
            "{{Mi eskri mesaje.}}",
            "{{Mi nun le eskri mesaje.}}",
            "{{Mi le nun eskri mesaje.}}"
          ],
          "correct": 0,
          "explanation": "{{Xa}} marks the future viewpoint and stands before the verb {{eskri}}.",
          "passage": null
        },
        {
          "id": "tense-simple-3",
          "type": "mcq",
          "prompt": "Which sentence reports a finished past action?",
          "options": [
            "{{Mi le kari ovo.}}",
            "{{Mi xa kari ovo.}}",
            "{{Mi kari ovo.}}",
            "{{Mi nun le kari ovo.}}",
            "{{Mi le nun kari ovo.}}"
          ],
          "correct": 0,
          "explanation": "{{Le}} is the simple past marker. {{Nun le}} is present perfective, not a simple past.",
          "passage": null
        },
        {
          "id": "tense-simple-4",
          "type": "mcq",
          "prompt": "Which sentence puts the negative in the correct place?",
          "options": [
            "{{Mi le no glu cay.}}",
            "{{Mi no le glu cay.}}",
            "{{Mi le glu no cay.}}",
            "{{No mi le glu cay.}}",
            "{{Mi le glu cay no.}}"
          ],
          "correct": 0,
          "explanation": "The tense marker {{le}} precedes the negating adverb no, which precedes the verb.",
          "passage": null
        },
        {
          "id": "tense-simple-5",
          "type": "mcq",
          "prompt": "What does the passage say about the friend?",
          "options": [
            "The friend came yesterday and will come again tomorrow.",
            "The friend will come yesterday and came tomorrow.",
            "The friend is coming now and will stay until tomorrow.",
            "The friend did not come yesterday but may come tomorrow.",
            "The friend came yesterday and will not come tomorrow."
          ],
          "correct": 0,
          "explanation": "{{Le ata jaledin}} reports the past visit; {{xa ata jaxadin}} reports the future visit.",
          "passage": "Misu doste le ata jaledin. Te xa ata jaxadin."
        },
        {
          "id": "tense-simple-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: I will write a message tomorrow.",
          "answer": "Mi xa eskri mesaje jaxadin.",
          "accept": [],
          "explanation": "{{Xa}} marks the future and {{jaxadin}} means tomorrow."
        },
        {
          "id": "tense-simple-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: I did not buy bread.",
          "answer": "Mi le no kari roti.",
          "accept": [],
          "explanation": "{{Le}} comes first, then no, then the verb {{kari}}."
        },
        {
          "id": "tense-simple-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Misu doste xa safegi sesu kamer}}.",
          "answer": "My friend will clean his room.",
          "accept": [
            "My friend will clean her room.",
            "My friend will clean their room."
          ],
          "explanation": "{{Xa}} marks the future; {{sesu}} means his, her, or their own."
        },
        {
          "id": "tense-simple-9",
          "type": "fill",
          "prompt": "Mi ___ no koki supa.",
          "blanks": [
            {
              "answer": "le",
              "accept": []
            }
          ],
          "explanation": "{{Le}} is the past marker and comes before the negating no.",
          "gloss": "I did not cook soup."
        },
        {
          "id": "tense-simple-10",
          "type": "fill",
          "prompt": "Imi ___ koki supa jaxadin.",
          "blanks": [
            {
              "answer": "xa",
              "accept": []
            }
          ],
          "explanation": "{{Xa}} marks the future; {{jaxadin}} means tomorrow.",
          "gloss": "We will cook soup tomorrow."
        }
      ]
    },
    {
      "id": "tense-aspect",
      "area": "tenses",
      "title": "Habitual, immediate & ongoing",
      "blurb": "Use {{du-, jale, jaxa}}, and {{nun}} to show habit, immediacy, and ongoing action.",
      "refs": [
        "Grammar pp. 55–58",
        "Lessons 6–10"
      ],
      "notes": [
        "{{Du-}} attaches to the verb for habitual or durative aspect: duyam, {{dudoxo, dudanse}}.",
        "{{Jale}} marks the immediate past and {{jaxa}} marks the immediate future.",
        "{{Nun}} stresses an ongoing present; {{nun le}} is present perfective, not a simple present."
      ],
      "examples": [
        [
          "Mi le dudoxo gazeta.",
          "I used to read the newspaper."
        ],
        [
          "Mi jale fini ergo.",
          "I just finished work."
        ],
        [
          "Mi nun le fini ergo.",
          "I have finished work."
        ]
      ],
      "exercises": [
        {
          "id": "tense-aspect-1",
          "type": "mcq",
          "prompt": "What changed for the speaker?",
          "options": [
            "The speaker used to dance in the morning but does not dance now.",
            "The speaker dances every morning now but did not in the past.",
            "The speaker is about to start dancing in the morning.",
            "The speaker has just finished dancing this morning.",
            "The speaker will dance in the morning from now on."
          ],
          "correct": 0,
          "explanation": "{{Le dudanse}} describes a past habit; {{nun no danse}} says the habit has stopped.",
          "passage": "Mi le dudanse fe soba, mas nun mi no danse."
        },
        {
          "id": "tense-aspect-2",
          "type": "mcq",
          "prompt": "Which sentence means 'I just wrote a message'?",
          "options": [
            "{{Mi jale eskri mesaje.}}",
            "{{Mi jaxa eskri mesaje.}}",
            "{{Mi xa eskri mesaje.}}",
            "{{Mi nun le eskri mesaje.}}",
            "{{Mi le nun eskri mesaje.}}"
          ],
          "correct": 0,
          "explanation": "{{Jale}} is the immediate-past marker and precedes the verb {{eskri}}.",
          "passage": null
        },
        {
          "id": "tense-aspect-3",
          "type": "mcq",
          "prompt": "Which sentence means 'I am about to clean the room'?",
          "options": [
            "{{Mi jaxa safegi kamer.}}",
            "{{Mi jale safegi kamer.}}",
            "{{Mi xa le safegi kamer.}}",
            "{{Mi le xa safegi kamer.}}",
            "{{Mi le safegi kamer.}}"
          ],
          "correct": 0,
          "explanation": "{{Jaxa}} marks the immediate future: the action is about to happen.",
          "passage": null
        },
        {
          "id": "tense-aspect-4",
          "type": "mcq",
          "prompt": "Which sentence describes a past habit?",
          "options": [
            "{{Mi le dudoxo gazeta.}}",
            "{{Mi le doxo gazeta.}}",
            "{{Mi jale doxo gazeta.}}",
            "{{Mi xa dudoxo gazeta.}}",
            "{{Mi nun doxo gazeta.}}"
          ],
          "correct": 0,
          "explanation": "{{Le dudoxo}} combines past viewpoint with the habitual prefix {{du-}}.",
          "passage": null
        },
        {
          "id": "tense-aspect-5",
          "type": "mcq",
          "prompt": "What was the speaker doing when the friend arrived?",
          "options": [
            "The speaker was cleaning the room.",
            "The speaker had cleaned the room.",
            "The speaker was about to clean the room.",
            "The speaker cleaned the room after the friend arrived.",
            "The friend was cleaning the room when the speaker arrived."
          ],
          "correct": 0,
          "explanation": "{{Le nun}} marks past progressive: the cleaning was in progress when the friend came.",
          "passage": "Mi le nun safegi kamer, denwatu hu misu doste le ata."
        },
        {
          "id": "tense-aspect-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: I used to read the newspaper.",
          "answer": "Mi le dudoxo gazeta.",
          "accept": [],
          "explanation": "{{Le}} marks the past and {{du-}} marks the habit: {{le dudoxo}}."
        },
        {
          "id": "tense-aspect-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: I am about to send a message.",
          "answer": "Mi jaxa irsal mesaje.",
          "accept": [],
          "explanation": "{{Jaxa}} marks the immediate future and precedes the verb."
        },
        {
          "id": "tense-aspect-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Mi nun le fini misu supa}}.",
          "answer": "I have finished my soup.",
          "accept": [
            "I have finished my soup already."
          ],
          "explanation": "{{Nun le}} is present perfective: the soup is finished and the result is relevant now."
        },
        {
          "id": "tense-aspect-9",
          "type": "fill",
          "prompt": "Complete with the immediate-past marker: {{Mi}} ___ {{glu jusu}}.",
          "blanks": [
            {
              "answer": "jale",
              "accept": []
            }
          ],
          "explanation": "{{Jale}} marks what has just happened.",
          "gloss": "I just drank the juice."
        },
        {
          "id": "tense-aspect-10",
          "type": "fill",
          "prompt": "Complete with the habitual form of {{doxo}}: {{Mi le}} ___ {{gazeta}}.",
          "blanks": [
            {
              "answer": "dudoxo",
              "accept": []
            }
          ],
          "explanation": "The prefix {{du-}} attaches to the verb: {{dudoxo}} = read habitually.",
          "gloss": "I used to read the newspaper."
        }
      ]
    },
    {
      "id": "tense-compound",
      "area": "tenses",
      "title": "Compound tenses",
      "blurb": "Build common two-marker tenses for progressive, perfective, and prospective meaning.",
      "refs": [
        "Grammar pp. 57–58",
        "Lessons 8–10"
      ],
      "notes": [
        "Compound tenses combine two of {{nun, le}}, and {{xa}}. The first marker sets the viewpoint; the second adds aspect.",
        "Common patterns: {{le nun}} (past progressive), {{nun le}} (present perfective), {{xa le}} (future perfective), {{le xa}} (past prospective).",
        "Order is meaningful: {{nun le}} means have done, while {{le nun}} means was doing."
      ],
      "examples": [
        [
          "Mi le nun doxo gazeta.",
          "I was reading the newspaper."
        ],
        [
          "Mi nun le fini ergo.",
          "I have finished work."
        ],
        [
          "Mi xa le fini ergo.",
          "I will have finished work."
        ]
      ],
      "exercises": [
        {
          "id": "tense-compound-1",
          "type": "mcq",
          "prompt": "What had the speaker done before the friend arrived?",
          "options": [
            "The speaker had finished work.",
            "The speaker was buying bread.",
            "The speaker had eaten the bread.",
            "The speaker was about to finish work.",
            "The speaker had not started work."
          ],
          "correct": 0,
          "explanation": "{{Le le}} is past perfective: the work was already finished before the friend arrived.",
          "passage": "Denwatu hu misu doste le ata, mi le le fini misu ergo. Mi le nun kari roti."
        },
        {
          "id": "tense-compound-2",
          "type": "mcq",
          "prompt": "Which sentence reports a completed action with present relevance?",
          "options": [
            "{{Mi nun le glu jusu.}}",
            "{{Mi le nun glu jusu.}}",
            "{{Mi xa le glu jusu.}}",
            "{{Mi le xa glu jusu.}}",
            "{{Mi nun xa glu jusu.}}"
          ],
          "correct": 0,
          "explanation": "{{Nun le}} is present perfective: the drinking is complete and its result matters now.",
          "passage": null
        },
        {
          "id": "tense-compound-3",
          "type": "mcq",
          "prompt": "Which sentence means 'I was writing a message'?",
          "options": [
            "{{Mi le nun eskri mesaje.}}",
            "{{Mi nun le eskri mesaje.}}",
            "{{Mi le le eskri mesaje.}}",
            "{{Mi xa nun eskri mesaje.}}",
            "{{Mi le xa eskri mesaje.}}"
          ],
          "correct": 0,
          "explanation": "{{Le nun}} is past progressive: the writing was in progress in the past.",
          "passage": null
        },
        {
          "id": "tense-compound-4",
          "type": "mcq",
          "prompt": "Which sentence means 'I will have finished the soup'?",
          "options": [
            "{{Mi xa le fini supa.}}",
            "{{Mi xa nun fini supa.}}",
            "{{Mi le xa fini supa.}}",
            "{{Mi nun le fini supa.}}",
            "{{Mi le le fini supa.}}"
          ],
          "correct": 0,
          "explanation": "{{Xa le}} is future perfective: the soup will be finished by a future point.",
          "passage": null
        },
        {
          "id": "tense-compound-5",
          "type": "mcq",
          "prompt": "What happened?",
          "options": [
            "The speaker intended to finish work but did not.",
            "The speaker finished work and then helped a friend.",
            "The speaker was finishing work when the friend arrived.",
            "The speaker will finish work after helping a friend.",
            "The speaker had finished work before helping a friend."
          ],
          "correct": 0,
          "explanation": "{{Le xa}} marks a past plan or intention; {{le no fini}} says the plan was not completed.",
          "passage": "Mi le xa fini ergo, mas mi le no fini. Mi le nun sahay misu doste."
        },
        {
          "id": "tense-compound-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: I was cooking soup.",
          "answer": "Mi le nun koki supa.",
          "accept": [],
          "explanation": "Past progressive is {{le nun}} plus the verb."
        },
        {
          "id": "tense-compound-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: I will have bought the tickets.",
          "answer": "Mi xa le kari tiketo.",
          "accept": [],
          "explanation": "Future perfective is {{xa le}} plus the verb {{kari}}."
        },
        {
          "id": "tense-compound-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Mi nun le kari ovo}}.",
          "answer": "I have bought eggs.",
          "accept": [],
          "explanation": "{{Nun le}} is present perfective: have bought."
        },
        {
          "id": "tense-compound-9",
          "type": "fill",
          "prompt": "Complete with the future-perfective pattern: {{Mi xa}} ___ {{kari tiketo}}.",
          "blanks": [
            {
              "answer": "le",
              "accept": []
            }
          ],
          "explanation": "{{Xa le}} is future perfective: will have bought.",
          "gloss": "I will have bought the tickets."
        },
        {
          "id": "tense-compound-10",
          "type": "fill",
          "prompt": "Complete with the past-progressive pattern: {{Mi}} ___ ___ {{eskri mesaje}}.",
          "blanks": [
            {
              "answer": "le",
              "accept": []
            },
            {
              "answer": "nun",
              "accept": []
            }
          ],
          "explanation": "{{Le nun}} is past progressive: was writing.",
          "gloss": "I was writing a message."
        }
      ]
    },
    {
      "id": "rel-subject",
      "area": "relatives",
      "title": "Subject relatives: hu + da",
      "blurb": "When the relativized noun is the subject of the relative clause, resumptive {{da}} is obligatory.",
      "refs": [
        "Grammar pp. 68–69",
        "Lessons 19–20"
      ],
      "notes": [
        "{{Hu}} introduces every relative clause; it translates who, which, or that.",
        "{{Da}} refers back to the antecedent when the antecedent is the subject of the relative clause.",
        "The relative clause follows the noun it modifies and keeps normal SVO order.",
        "Without {{da}}, the relative clause would have no subject and the reference would be unclear."
      ],
      "examples": [
        [
          "Te sen femixu hu da lubi mi.",
          "She is the woman who loves me."
        ],
        [
          "Bwaw hu da le bujo myaw sen lil.",
          "The dog that caught the cat is small."
        ],
        [
          "Alimyen hu da le gibe kitabu tas mi sen misu doste.",
          "The teacher who gave the book to me is my friend."
        ]
      ],
      "exercises": [
        {
          "id": "rel-subject-1",
          "type": "mcq",
          "prompt": "In the sentence, what does {{da}} refer to?",
          "options": [
            "It refers to {{femixu}} and is the subject of {{lubi mi}}.",
            "It refers to {{mi}} and is the object of {{lubi}}.",
            "It is a determiner meaning 'this'.",
            "It is the copula linking {{femixu}} to the clause.",
            "It refers to the speaker and means 'I'."
          ],
          "correct": 0,
          "explanation": "{{Da}} resumes the antecedent {{femixu}}; it is the subject of the relative clause.",
          "passage": "Te sen femixu hu da lubi mi."
        },
        {
          "id": "rel-subject-2",
          "type": "mcq",
          "prompt": "Which sentence correctly means 'He is the {{man}} who knows me'?",
          "options": [
            "{{Te sen manixu hu da kone mi.}}",
            "{{Te sen manixu hu kone mi.}}",
            "{{Te sen manixu hu mi kone da.}}",
            "{{Te sen manixu hu dasu kone mi.}}",
            "{{Te sen manixu hu da mi kone.}}"
          ],
          "correct": 0,
          "explanation": "{{Da}} is the subject of {{kone mi}}, so it must appear after {{hu}}.",
          "passage": null
        },
        {
          "id": "rel-subject-3",
          "type": "mcq",
          "prompt": "Which sentence means 'She is the woman who loves me'?",
          "options": [
            "{{Te sen femixu hu da lubi mi.}}",
            "{{Te sen femixu hu mi lubi da.}}",
            "{{Te sen femixu hu dasu lubi mi.}}",
            "{{Te sen femixu hu lubi mi da.}}",
            "{{Te sen femixu hu da mi lubi.}}"
          ],
          "correct": 0,
          "explanation": "{{Da}} is the subject of {{lubi}}; {{mi}} is the object.",
          "passage": null
        },
        {
          "id": "rel-subject-4",
          "type": "mcq",
          "prompt": "What is the function of {{hu}} in this sentence?",
          "options": [
            "It introduces the relative clause that modifies {{femixu}}.",
            "It marks the direct object of {{sen}}.",
            "It is a tense particle meaning 'past'.",
            "It is a determiner meaning 'which' before a noun.",
            "It negates the relative clause."
          ],
          "correct": 0,
          "explanation": "{{Hu}} is the relative clause marker; it links the clause to the preceding noun.",
          "passage": null
        },
        {
          "id": "rel-subject-5",
          "type": "mcq",
          "prompt": "When is the resumptive pronoun {{da}} required in a relative clause?",
          "options": [
            "It is required when the antecedent is the subject of the relative clause.",
            "It is required only when the antecedent is inanimate.",
            "It is required only in questions.",
            "It is required only after the copula {{sen}}.",
            "It is never required because {{hu}} alone is always enough."
          ],
          "correct": 0,
          "explanation": "{{Da}} is obligatory when the relativized noun functions as subject inside the relative clause.",
          "passage": null
        },
        {
          "id": "rel-subject-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: She is the woman who loves me.",
          "answer": "Te sen femixu hu da lubi mi.",
          "accept": [],
          "explanation": "{{Hu}} introduces the clause; {{da}} is its subject and {{mi}} is its object."
        },
        {
          "id": "rel-subject-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: The dog that caught the cat is small.",
          "answer": "Bwaw hu da le bujo myaw sen lil.",
          "accept": [],
          "explanation": "{{Da}} is the subject of the relative clause; {{le}} marks past; the main predicate is {{sen lil}}."
        },
        {
          "id": "rel-subject-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Alimyen hu da le gibe kitabu tas mi sen misu doste}}.",
          "answer": "The teacher who gave the book to me is my friend.",
          "accept": [
            "The teacher who gave the book to me is a friend of mine."
          ],
          "explanation": "{{Da}} is the subject of the relative clause; the main clause is {{Alimyen}} ... {{sen misu doste}}."
        },
        {
          "id": "rel-subject-9",
          "type": "fill",
          "prompt": "Te sen femixu hu ___ lubi ___.",
          "blanks": [
            {
              "answer": "da",
              "accept": []
            },
            {
              "answer": "mi",
              "accept": []
            }
          ],
          "explanation": "{{Da}} is the subject of the relative clause; {{mi}} is its object.",
          "gloss": "She is the woman who loves me."
        },
        {
          "id": "rel-subject-10",
          "type": "fill",
          "prompt": "Bwaw hu da le ___ myaw sen lil.",
          "blanks": [
            {
              "answer": "bujo",
              "accept": []
            }
          ],
          "explanation": "{{Bujo}} is the transitive verb 'catch'; {{myaw}} is its object.",
          "gloss": "The dog that caught the cat is small."
        }
      ]
    },
    {
      "id": "rel-object",
      "area": "relatives",
      "title": "Object relatives: hu … da",
      "blurb": "When the relativized noun is the object inside the relative clause, {{da}} still resumes it after the verb.",
      "refs": [
        "Grammar pp. 68–69",
        "Lessons 19–20"
      ],
      "notes": [
        "The relative clause keeps SVO order even when the antecedent is its object.",
        "The resumptive {{da}} appears where the object would normally appear: {{hu mi lubi da}}.",
        "Do not replace {{da}} with {{dasu}}; {{dasu}} is for possession.",
        "The main clause predicate follows the whole relative clause: {{Kitabu hu mi le kari da sen neo}}."
      ],
      "examples": [
        [
          "Te sen femixu hu mi lubi da.",
          "She is the woman whom I love."
        ],
        [
          "Kitabu hu mi le kari da sen neo.",
          "The book that I bought is new."
        ],
        [
          "Kitabu hu mi le doxo da sen misu to.",
          "The book that I read is mine."
        ]
      ],
      "exercises": [
        {
          "id": "rel-object-1",
          "type": "mcq",
          "prompt": "Which phrase correctly means 'the woman whom I love'?",
          "options": [
            "{{femixu hu mi lubi da}}",
            "{{femixu hu da mi lubi}}",
            "{{femixu hu mi lubi}}",
            "{{femixu hu mi lubi dasu}}",
            "{{femixu hu lubi mi da}}"
          ],
          "correct": 0,
          "explanation": "The object gap is filled by {{da}} after {{lubi}}: {{mi lubi da}}.",
          "passage": null
        },
        {
          "id": "rel-object-2",
          "type": "mcq",
          "prompt": "In {{Te sen femixu hu mi lubi da}}, what is {{da}}?",
          "options": [
            "the object of {{lubi}}",
            "the subject of {{lubi}}",
            "a possessive adjective",
            "the copula",
            "a determiner"
          ],
          "correct": 0,
          "explanation": "{{Da}} occupies the object position after {{lubi}} and refers back to {{femixu}}.",
          "passage": null
        },
        {
          "id": "rel-object-3",
          "type": "mcq",
          "prompt": "Which sentence means 'The photo that I bought is new'?",
          "options": [
            "{{Foto hu mi le kari da sen neo.}}",
            "{{Foto hu mi le kari sen neo.}}",
            "{{Foto hu da mi le kari sen neo.}}",
            "{{Foto hu mi le kari dasu sen neo.}}",
            "{{Foto hu mi le kari da neo sen.}}"
          ],
          "correct": 0,
          "explanation": "{{Da}} resumes {{foto}} as the object of {{kari}}; {{sen neo}} is the main predicate.",
          "passage": null
        },
        {
          "id": "rel-object-4",
          "type": "mcq",
          "prompt": "Which thing is new?",
          "options": [
            "The card that the speaker bought is new.",
            "The photo that the speaker saw is new.",
            "Both things are new.",
            "Neither thing is new.",
            "The card that the speaker wrote is new."
          ],
          "correct": 0,
          "explanation": "Both relative clauses use {{da}} for the object; the first ends with {{sen neo}}, the second with {{sen lama}}.",
          "passage": "Karta hu mi le kari da sen neo, mas foto hu mi le oko da sen lama."
        },
        {
          "id": "rel-object-5",
          "type": "mcq",
          "prompt": "Which relative clause has the correct word order?",
          "options": [
            "{{hu mi le kari da}}",
            "{{hu da le kari mi}}",
            "{{hu le mi kari da}}",
            "{{hu mi le da kari}}",
            "{{hu kari mi le da}}"
          ],
          "correct": 0,
          "explanation": "The clause follows SVO: subject {{mi}}, verb {{kari}}, object {{da}}.",
          "passage": null
        },
        {
          "id": "rel-object-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: The woman whom I love is a teacher.",
          "answer": "Femixu hu mi lubi da sen alimyen.",
          "accept": [],
          "explanation": "{{Da}} fills the object slot after {{lubi}}; {{sen alimyen}} is the main predicate."
        },
        {
          "id": "rel-object-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: The card that I bought yesterday is new.",
          "answer": "Karta hu mi le kari da jaledin sen neo.",
          "accept": [],
          "explanation": "{{Jaledin}} means yesterday; the relative clause precedes the main predicate."
        },
        {
          "id": "rel-object-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Sayfa hu mi le doxo da sen misu to}}.",
          "answer": "The page that I read is mine.",
          "accept": [],
          "explanation": "{{Da}} refers to {{sayfa}} as the object of {{doxo}}; {{misu to}} is the possessive pronoun 'mine'."
        },
        {
          "id": "rel-object-9",
          "type": "fill",
          "prompt": "Karta hu mi le kari ___ sen ___.",
          "blanks": [
            {
              "answer": "da",
              "accept": []
            },
            {
              "answer": "neo",
              "accept": []
            }
          ],
          "explanation": "{{Da}} is the resumptive object of {{kari}}; {{neo}} is the main predicate complement.",
          "gloss": "The card that I bought is new."
        },
        {
          "id": "rel-object-10",
          "type": "fill",
          "prompt": "Femixu hu mi lubi ___ sen alimyen.",
          "blanks": [
            {
              "answer": "da",
              "accept": []
            }
          ],
          "explanation": "{{Da}} resumes {{femixu}} as the object of {{lubi}}.",
          "gloss": "The woman whom I love is a teacher."
        }
      ]
    },
    {
      "id": "rel-possessive",
      "area": "relatives",
      "title": "Possessive relatives: hu … dasu",
      "blurb": "{{Dasu}} is the resumptive possessive adjective inside a relative clause; it means whose.",
      "refs": [
        "Grammar p. 69",
        "Lesson 20"
      ],
      "notes": [
        "{{Dasu}} replaces {{tesu/etesu}} inside a relative clause.",
        "Pattern: noun + {{hu}} + {{dasu}} + possessed noun + predicate.",
        "The possessor can be the subject or object of the relative clause; {{dasu}} marks the possessor role.",
        "Do not use {{tesu}} in this position: {{hu dasu sodar}}, not {{hu tesu sodar}}."
      ],
      "examples": [
        [
          "Te sen manixu hu dasu sodar kone mi.",
          "He is the man whose brother knows me."
        ],
        [
          "Femixu hu dasu bete sen misu doste ogar in xaher.",
          "The woman whose child is my friend lives in the city."
        ],
        [
          "Mi kone manixu hu dasu gami lala meli.",
          "I know a man whose spouse sings beautifully."
        ]
      ],
      "exercises": [
        {
          "id": "rel-possessive-1",
          "type": "mcq",
          "prompt": "What does {{dasu}} do in the sentence?",
          "options": [
            "It marks the possessor inside the relative clause and refers back to {{manixu}}.",
            "It marks the direct object of {{kone}}.",
            "It is a tense particle.",
            "It negates the relative clause.",
            "It introduces the main clause."
          ],
          "correct": 0,
          "explanation": "{{Dasu}} is the resumptive possessive: 'whose brother'.",
          "passage": "Te sen manixu hu dasu sodar kone mi."
        },
        {
          "id": "rel-possessive-2",
          "type": "mcq",
          "prompt": "Which sentence correctly says 'He is the {{man}} whose brother knows me'?",
          "options": [
            "{{Te sen manixu hu dasu sodar kone mi.}}",
            "{{Te sen manixu hu tesu sodar kone mi.}}",
            "{{Te sen manixu hu sodar dasu kone mi.}}",
            "{{Te sen manixu hu da sodar kone mi.}}",
            "{{Te sen manixu hu dasu kone sodar mi.}}"
          ],
          "correct": 0,
          "explanation": "{{Dasu}} precedes the possessed noun {{sodar}}; {{kone mi}} is the relative clause predicate.",
          "passage": null
        },
        {
          "id": "rel-possessive-3",
          "type": "mcq",
          "prompt": "Which sentence means 'I know a {{man}} whose spouse sings beautifully'?",
          "options": [
            "{{Mi kone manixu hu dasu gami lala meli.}}",
            "{{Mi kone manixu hu gami dasu lala meli.}}",
            "{{Mi kone manixu hu tesu gami lala meli.}}",
            "{{Mi kone manixu hu da gami lala meli.}}",
            "{{Mi kone manixu hu dasu lala gami meli.}}"
          ],
          "correct": 0,
          "explanation": "{{Dasu gami}} = whose spouse; {{lala meli}} = sings beautifully.",
          "passage": null
        },
        {
          "id": "rel-possessive-4",
          "type": "mcq",
          "prompt": "Why is {{tesu}} wrong in {{hu tesu sodar kone mi}}?",
          "options": [
            "Relative clauses require the resumptive possessive {{dasu}}, not the ordinary possessive {{tesu}}.",
            "{{Tesu}} is only used for inanimate possession.",
            "{{Tesu}} cannot precede a noun.",
            "{{Tesu}} marks a direct object.",
            "{{Tesu}} is a tense particle."
          ],
          "correct": 0,
          "explanation": "{{Dasu}} is the dedicated relative-clause possessive adjective.",
          "passage": null
        },
        {
          "id": "rel-possessive-5",
          "type": "mcq",
          "prompt": "Which phrase means 'the woman whose child is my friend'?",
          "options": [
            "{{femixu hu dasu bete sen misu doste}}",
            "{{femixu hu bete dasu sen misu doste}}",
            "{{femixu hu da bete sen misu doste}}",
            "{{femixu hu tesu bete sen misu doste}}",
            "{{femixu hu dasu sen bete misu doste}}"
          ],
          "correct": 0,
          "explanation": "{{Dasu bete}} is 'whose child'; {{sen misu doste}} is the relative clause predicate.",
          "passage": null
        },
        {
          "id": "rel-possessive-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: He is the {{man}} whose brother knows me.",
          "answer": "Te sen manixu hu dasu sodar kone mi.",
          "accept": [],
          "explanation": "{{Dasu sodar}} is 'whose brother'; {{kone mi}} is the relative clause."
        },
        {
          "id": "rel-possessive-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: The woman whose child is my friend lives in the city.",
          "answer": "Femixu hu dasu bete sen misu doste ogar in xaher.",
          "accept": [],
          "explanation": "The relative clause ends with {{sen misu doste}}; {{ogar in xaher}} is the main predicate."
        },
        {
          "id": "rel-possessive-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Mi kone manixu hu dasu gami lala meli}}.",
          "answer": "I know a man whose spouse sings beautifully.",
          "accept": [],
          "explanation": "{{Dasu gami}} = whose spouse; {{lala meli}} = sings beautifully."
        },
        {
          "id": "rel-possessive-9",
          "type": "fill",
          "prompt": "Te sen manixu hu ___ sodar kone mi.",
          "blanks": [
            {
              "answer": "dasu",
              "accept": []
            }
          ],
          "explanation": "The relative possessive {{dasu}} is required.",
          "gloss": "He is the {{man}} whose brother knows me."
        },
        {
          "id": "rel-possessive-10",
          "type": "fill",
          "prompt": "Femixu hu ___ bete sen misu doste ogar in xaher.",
          "blanks": [
            {
              "answer": "dasu",
              "accept": []
            }
          ],
          "explanation": "{{Dasu bete}} means 'whose child'.",
          "gloss": "The woman whose child is my friend lives in the city."
        }
      ]
    },
    {
      "id": "rel-adjunct",
      "area": "relatives",
      "title": "Adverbial relatives",
      "blurb": "Place, time, manner, and reason relatives use resumptive correlative adverbs such as {{denloka}} and {{denwatu}}.",
      "refs": [
        "Grammar pp. 69–70",
        "Lesson 20"
      ],
      "notes": [
        "Pattern: noun + {{hu}} + clause + {{denloka/denwatu/denmaner/denseba}}.",
        "The correlative adverb may follow the clause or be fronted: {{hu denloka mi ergo}}.",
        "A prepositional alternative uses {{da}}: {{hu mi ergo in da}}.",
        "Use {{denloka}} for place, {{denwatu}} for time, {{denmaner}} for manner, {{denseba}} for reason."
      ],
      "examples": [
        [
          "Kitabudom hu mi ergo denloka sen day.",
          "The library where I work is big."
        ],
        [
          "Din hu mi xa preata denwatu sen lunadin.",
          "The day when I will arrive is Monday."
        ],
        [
          "Mi no suki to hu yu ergo denmaner.",
          "I don't like the way you work."
        ]
      ],
      "exercises": [
        {
          "id": "rel-adjunct-1",
          "type": "mcq",
          "prompt": "What does {{denloka}} refer back to?",
          "options": [
            "It refers to {{kitabudom}} and marks the place of {{xwexi}}.",
            "It refers to {{mi}} and marks the subject.",
            "It refers to day and marks degree.",
            "It is a determiner before {{kitabudom}}.",
            "It is the main-clause predicate."
          ],
          "correct": 0,
          "explanation": "{{Denloka}} is the resumptive place adverb: 'the library where I study'.",
          "passage": "Kitabudom hu mi xwexi denloka sen day."
        },
        {
          "id": "rel-adjunct-2",
          "type": "mcq",
          "prompt": "Which sentence means 'The library where I study is big'?",
          "options": [
            "{{Kitabudom hu mi xwexi denloka sen day.}}",
            "{{Kitabudom hu mi xwexi sen day denloka.}}",
            "{{Kitabudom hu denloka mi xwexi sen day.}}",
            "{{Kitabudom hu mi xwexi da sen day.}}",
            "{{Kitabudom hu mi xwexi denwatu sen day.}}"
          ],
          "correct": 0,
          "explanation": "{{Denloka}} resumes the place; {{sen day}} is the main predicate. {{Hu denloka mi xwexi}} is also correct.",
          "passage": null
        },
        {
          "id": "rel-adjunct-3",
          "type": "mcq",
          "prompt": "Which sentence means 'The day when I will arrive is Monday'?",
          "options": [
            "{{Din hu mi xa preata denwatu sen lunadin.}}",
            "{{Din hu mi xa preata denloka sen lunadin.}}",
            "{{Din hu mi xa preata denseba sen lunadin.}}",
            "{{Din hu mi xa preata da sen lunadin.}}",
            "{{Din hu mi xa preata denwatu lunadin sen.}}"
          ],
          "correct": 0,
          "explanation": "{{Denwatu}} marks the time relative; {{lunadin}} is Monday.",
          "passage": null
        },
        {
          "id": "rel-adjunct-4",
          "type": "mcq",
          "prompt": "Which sentence is the prepositional alternative to 'the library where I study'?",
          "options": [
            "{{Kitabudom hu mi xwexi in da sen day.}}",
            "{{Kitabudom hu mi xwexi da in sen day.}}",
            "{{Kitabudom hu in mi xwexi da sen day.}}",
            "{{Kitabudom hu mi xwexi denloka da sen day.}}",
            "{{Kitabudom hu mi xwexi in denloka sen day.}}"
          ],
          "correct": 0,
          "explanation": "The prepositional phrase {{in da}} resumes the place; {{da}} is the object of {{in}}.",
          "passage": null
        },
        {
          "id": "rel-adjunct-5",
          "type": "mcq",
          "prompt": "Which resumptive adverb expresses reason?",
          "options": [
            "{{denseba}}",
            "{{denloka}}",
            "{{denwatu}}",
            "{{denmaner}}",
            "{{denpul}}"
          ],
          "correct": 0,
          "explanation": "{{Denseba}} means 'for that reason'; the others cover place, time, and manner.",
          "passage": null,
          "dyn": {
            "kind": "definition",
            "prompt": "Which resumptive adverb expresses {term}?",
            "pool": [
              [
                "reason",
                "denseba",
                "{{Denseba}} means 'for that reason'; the others cover place, time, and manner."
              ],
              [
                "place",
                "denloka",
                "{{Denloka}} means 'there / in that place'."
              ],
              [
                "time",
                "denwatu",
                "{{Denwatu}} means 'then / at that time'."
              ],
              [
                "manner",
                "denmaner",
                "{{Denmaner}} means 'in that way'."
              ],
              [
                "kind or quality",
                "denpul",
                "{{Denpul}} means 'that kind of'."
              ]
            ]
          }
        },
        {
          "id": "rel-adjunct-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: The library where I study is big.",
          "answer": "Kitabudom hu mi xwexi denloka sen day.",
          "accept": [],
          "explanation": "{{Denloka}} is the resumptive place adverb; {{sen day}} is the main predicate."
        },
        {
          "id": "rel-adjunct-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: The day when I will arrive is Monday.",
          "answer": "Din hu mi xa preata denwatu sen lunadin.",
          "accept": [],
          "explanation": "{{Xa}} marks future; {{denwatu}} resumes the time noun {{din}}."
        },
        {
          "id": "rel-adjunct-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Mi no suki to hu yu ergo denmaner}}.",
          "answer": "I don't like the way you work.",
          "accept": [
            "I do not like the way you work."
          ],
          "explanation": "To is the non-specific antecedent; {{denmaner}} resumes the manner."
        },
        {
          "id": "rel-adjunct-9",
          "type": "fill",
          "prompt": "Kitabudom hu mi xwexi ___ sen day.",
          "blanks": [
            {
              "answer": "denloka",
              "accept": []
            }
          ],
          "explanation": "{{Denloka}} marks the place inside the relative clause.",
          "gloss": "The library where I study is big."
        },
        {
          "id": "rel-adjunct-10",
          "type": "fill",
          "prompt": "Din hu mi xa preata ___ sen lunadin.",
          "blanks": [
            {
              "answer": "denwatu",
              "accept": []
            }
          ],
          "explanation": "{{Denwatu}} marks the time inside the relative clause.",
          "gloss": "The day when I will arrive is Monday."
        }
      ]
    },
    {
      "id": "rel-feki",
      "area": "relatives",
      "title": "Non-specific and feki clauses",
      "blurb": "{{To}}/{{te}} + {{hu}} handles non-specific antecedents; {{feki}} replaces {{hu}} plus a resumptive adverb in shorter clauses.",
      "refs": [
        "Grammar pp. 70–72",
        "Lesson 20"
      ],
      "notes": [
        "Non-specific noun phrases use {{to}} or {{te}} as a placeholder: {{to hu mi vole da}} = what I want.",
        "{{Feki}} introduces a noun-modifying clause without a resumptive element.",
        "{{Feki}} can replace {{hu}} + {{denloka/denwatu/denmaner/denseba}}: {{restoran feki imi le yam}}.",
        "Do not confuse {{feki}} (noun-modifying 'that') with {{ki}} (clause complement 'that')."
      ],
      "examples": [
        [
          "Mi no suki restoran feki imi le yam.",
          "I don't like the restaurant where we ate."
        ],
        [
          "Am gibe tas mi to hu mi vole da.",
          "Give me what I want."
        ],
        [
          "Mi suki maner feki yu broxa misu tofa.",
          "I like the way you brush my hair."
        ]
      ],
      "exercises": [
        {
          "id": "rel-feki-1",
          "type": "mcq",
          "prompt": "What does the sentence mean?",
          "options": [
            "I don't like the restaurant where we met.",
            "I don't like the restaurant that met us.",
            "I don't like meeting in restaurants.",
            "We don't like the restaurant that I chose.",
            "I don't like the restaurant because we met."
          ],
          "correct": 0,
          "explanation": "{{Feki}} replaces {{hu}} plus a resumptive adverb; {{denloka}} is understood as the place where we met.",
          "passage": "Mi no suki restoran feki imi le randevu."
        },
        {
          "id": "rel-feki-2",
          "type": "mcq",
          "prompt": "Which sentence correctly uses {{feki}}?",
          "options": [
            "{{Mi no suki restoran feki imi le randevu.}}",
            "{{Mi no suki restoran hu imi le randevu.}}",
            "{{Mi no suki restoran ki imi le randevu.}}",
            "{{Mi no suki restoran feki da imi le randevu.}}",
            "{{Mi no suki feki restoran imi le randevu.}}"
          ],
          "correct": 0,
          "explanation": "{{Feki}} is the compact non-specific relative marker; {{hu randevu}} would need a resumptive adverb.",
          "passage": null
        },
        {
          "id": "rel-feki-3",
          "type": "mcq",
          "prompt": "What does {{Mi no suki to hu mi ergo denloka}} mean?",
          "options": [
            "I don't like where I work.",
            "I don't like the work that I do there.",
            "I don't like working in a library.",
            "I don't like the place that likes me.",
            "I don't work there and I don't like it."
          ],
          "correct": 0,
          "explanation": "To is a non-specific antecedent; {{hu mi ergo denloka}} means 'where I work'.",
          "passage": null
        },
        {
          "id": "rel-feki-4",
          "type": "mcq",
          "prompt": "What does {{Seba feki yu no xwexi sen koski yu no abyasa}} mean?",
          "options": [
            "The reason you don't learn is that you don't practice.",
            "You don't learn because the reason practices.",
            "You practice because you don't learn.",
            "The reason to learn is practice.",
            "You don't learn the reason and you don't practice."
          ],
          "correct": 0,
          "explanation": "{{Seba}} is the reason; {{feki}} introduces its modifying clause; {{koski}} introduces the predicate reason.",
          "passage": null
        },
        {
          "id": "rel-feki-5",
          "type": "mcq",
          "prompt": "Which sentence means 'Give me what I want'?",
          "options": [
            "{{Am gibe tas mi to hu mi vole da.}}",
            "{{Am gibe tas mi to hu mi vole.}}",
            "{{Am gibe tas mi hu mi vole da.}}",
            "{{Am gibe tas mi ki mi vole da.}}",
            "{{Am gibe tas mi feki mi vole da.}}"
          ],
          "correct": 0,
          "explanation": "To is the non-specific object; {{da}} resumes it inside the relative clause.",
          "passage": null
        },
        {
          "id": "rel-feki-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: I don't like the restaurant where we met.",
          "answer": "Mi no suki restoran feki imi le randevu.",
          "accept": [],
          "explanation": "{{Feki}} expresses the place where the meeting happened."
        },
        {
          "id": "rel-feki-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: Give me what I want.",
          "answer": "Am gibe tas mi to hu mi vole da.",
          "accept": [],
          "explanation": "{{Am}} marks the command; {{to hu mi vole da}} is the non-specific object."
        },
        {
          "id": "rel-feki-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Mi suki maner feki yu broxa misu tofa}}.",
          "answer": "I like the way you brush my hair.",
          "accept": [],
          "explanation": "{{Maner}} is the noun modified by {{feki}}; {{broxa}} is the verb 'brush'."
        },
        {
          "id": "rel-feki-9",
          "type": "fill",
          "prompt": "Mi no suki restoran ___ imi le randevu.",
          "blanks": [
            {
              "answer": "feki",
              "accept": []
            }
          ],
          "explanation": "{{Feki}} is the compact relative marker for the place where we met.",
          "gloss": "I don't like the restaurant where we met."
        },
        {
          "id": "rel-feki-10",
          "type": "fill",
          "prompt": "Am gibe tas mi to hu mi ___ da.",
          "blanks": [
            {
              "answer": "vole",
              "accept": []
            }
          ],
          "explanation": "{{Vole}} is the verb 'want' inside the relative clause.",
          "gloss": "Give me what I want."
        }
      ]
    },
    {
      "id": "cor-ke",
      "area": "correlatives",
      "title": "Interrogative correlatives",
      "blurb": "The {{ke-}} row asks questions: what, who, whose, what kind, how much, how many, where, when, why, how.",
      "refs": [
        "Grammar pp. 42–50",
        "Lessons 10–14"
      ],
      "notes": [
        "{{Ke}} is a determiner and must precede a noun: {{ke kitabu}} = which book.",
        "{{Keto, kete, keoto}}, and {{keete}} are pronouns and stand alone.",
        "{{Kesu}} precedes a noun (whose book); {{kepul}} and {{kemo}} ask about kind and degree.",
        "{{Kekwanti}} asks 'how much'; {{kenumer}} asks 'how many' before a noun."
      ],
      "examples": [
        [
          "Yu ogar keloka?",
          "Where do you live?"
        ],
        [
          "Yu hare kenumer kitabu?",
          "How many books do you have?"
        ],
        [
          "Yu xa idi cel xaher kewatu?",
          "When will you go to the city?"
        ]
      ],
      "exercises": [
        {
          "id": "cor-ke-1",
          "type": "mcq",
          "prompt": "What does {{keloka}} ask for in the passage?",
          "options": [
            "It asks for a place, and the answer is {{in xaher}}.",
            "It asks for a time, and the answer is {{in xaher}}.",
            "It asks for a person, and the answer is {{mi}}.",
            "It asks for a reason, and the answer is {{ogar}}.",
            "It asks for a quantity, and the answer is {{xaher}}."
          ],
          "correct": 0,
          "explanation": "{{Keloka}} is the place interrogative; {{in xaher}} supplies the location.",
          "passage": "Yu ogar keloka? Mi ogar in xaher."
        },
        {
          "id": "cor-ke-2",
          "type": "mcq",
          "prompt": "Which question means 'How many tickets do you have?'",
          "options": [
            "{{Yu hare kenumer tiketo?}}",
            "{{Yu hare kekwanti tiketo?}}",
            "{{Yu hare kepul tiketo?}}",
            "{{Yu hare kemo tiketo?}}",
            "{{Yu hare keloka tiketo?}}"
          ],
          "correct": 0,
          "explanation": "{{Kenumer}} asks 'how many' and precedes the counted noun.",
          "passage": null,
          "dyn": {
            "kind": "definition",
            "prompt": "Which question means '{term}'",
            "pool": [
              [
                "How many tickets do you have?",
                "Yu hare kenumer tiketo?",
                "{{Kenumer}} asks 'how many' and precedes the counted noun."
              ],
              [
                null,
                "Yu hare kekwanti tiketo?",
                null
              ],
              [
                "What kind of ticket do you have?",
                "Yu hare kepul tiketo?",
                "{{Kepul}} asks for a kind."
              ],
              [
                null,
                "Yu hare kemo tiketo?",
                null
              ],
              [
                "Where do you have the ticket?",
                "Yu hare keloka tiketo?",
                "{{Keloka}} asks for a place."
              ],
              [
                "When do you have the ticket?",
                "Yu hare tiketo kewatu?",
                "{{Kewatu}} asks for a time."
              ]
            ]
          }
        },
        {
          "id": "cor-ke-3",
          "type": "mcq",
          "prompt": "Which question means 'How much water do you want?'",
          "options": [
            "{{Yu vole kekwanti sui?}}",
            "{{Yu vole kenumer sui?}}",
            "{{Yu vole kepul sui?}}",
            "{{Yu vole kemaner sui?}}",
            "{{Yu vole kesu sui?}}"
          ],
          "correct": 0,
          "explanation": "{{Kekwanti}} asks about an amount or quantity.",
          "passage": null
        },
        {
          "id": "cor-ke-4",
          "type": "mcq",
          "prompt": "Which pair correctly distinguishes degree from manner?",
          "options": [
            "{{kemo}} asks 'to what degree'; {{kemaner}} asks 'by what manner'.",
            "{{kemo}} asks 'by what manner'; {{kemaner}} asks 'to what degree'.",
            "Both ask only about time.",
            "{{Kemo}} is a pronoun; {{kemaner}} is a determiner.",
            "{{Kemaner}} means 'whose'; {{kemo}} means 'where'."
          ],
          "correct": 0,
          "explanation": "{{Kemo}} is degree ('how beautiful?'); {{kemaner}} is manner ('how did you do it?').",
          "passage": null
        },
        {
          "id": "cor-ke-5",
          "type": "mcq",
          "prompt": "Which question means 'Whose bottle is this?'",
          "options": [
            "{{Kesu botela sen hinto?}}",
            "{{Kesu sen botela hinto?}}",
            "{{Kesu hinto sen botela?}}",
            "{{Kesu botela hinto sen?}}",
            "{{Kesu sen hinto botela?}}"
          ],
          "correct": 0,
          "explanation": "{{Kesu}} is a possessive adjective before {{botela}}; {{hinto}} is the pronoun 'this thing'.",
          "passage": null
        },
        {
          "id": "cor-ke-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: Where do you live?",
          "answer": "Yu ogar keloka?",
          "accept": [],
          "explanation": "{{Keloka}} is the interrogative place adverb."
        },
        {
          "id": "cor-ke-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: Why did the child cry?",
          "answer": "Nini le wawa keseba?",
          "accept": [],
          "explanation": "{{Keseba}} asks for a reason; {{wawa}} is the echo-object verb 'cry'."
        },
        {
          "id": "cor-ke-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Yu xa idi cel xaher kewatu}}?",
          "answer": "When will you go to the city?",
          "accept": [],
          "explanation": "{{Kewatu}} asks for the time; {{xa}} marks future."
        },
        {
          "id": "cor-ke-9",
          "type": "fill",
          "prompt": "Yu ogar ___?",
          "blanks": [
            {
              "answer": "keloka",
              "accept": []
            }
          ],
          "explanation": "{{Keloka}} is the place question word.",
          "gloss": "Where do you live?"
        },
        {
          "id": "cor-ke-10",
          "type": "fill",
          "prompt": "Yu hare ___ tiketo?",
          "blanks": [
            {
              "answer": "kenumer",
              "accept": []
            }
          ],
          "explanation": "{{Kenumer}} before a noun asks 'how many'.",
          "gloss": "How many tickets do you have?"
        }
      ]
    },
    {
      "id": "cor-hin-den",
      "area": "correlatives",
      "title": "Demonstrative correlatives",
      "blurb": "{{Hin-}} points to what is near; {{den-}} points to what is farther away, in space, time, or discourse.",
      "refs": [
        "Grammar pp. 42–50",
        "Lessons 4–6"
      ],
      "notes": [
        "{{Hin/den}} are determiners and need a noun: {{hin kitabu, den kitabu}}.",
        "{{Hinto/dento}} are pronouns: {{Hinto sen kitabu}}.",
        "{{Hinte/dente}} refer to animate beings; {{hinete/denete}} are plural.",
        "{{Hinloka}} = here; {{denloka}} = there; {{hinwatu}} = now; {{denwatu}} = then."
      ],
      "examples": [
        [
          "Hin kitabu sen neo, ji den kitabu sen lama.",
          "This book is new, and that book is old."
        ],
        [
          "Hinto sen kitabu, ji dente sen misu doste.",
          "This is a book, and that is my friend."
        ],
        [
          "Mi ergo hinloka.",
          "I work here."
        ]
      ],
      "exercises": [
        {
          "id": "cor-hin-den-1",
          "type": "mcq",
          "prompt": "What does {{den}} refer to in the passage?",
          "options": [
            "It points to {{karta}} as a card that is farther away or previously mentioned.",
            "It refers to the speaker.",
            "It is a question word meaning 'which'.",
            "It means 'no card'.",
            "It refers to a place."
          ],
          "correct": 0,
          "explanation": "{{Den}} is the demonstrative determiner 'that'; it modifies {{karta}}.",
          "passage": "Hin karta sen neo, ji den karta sen lama."
        },
        {
          "id": "cor-hin-den-2",
          "type": "mcq",
          "prompt": "Which sentence correctly says 'This is a basket'?",
          "options": [
            "{{Hinto sen basketo.}}",
            "{{Hin sen basketo.}}",
            "{{Hin basketo sen hinto.}}",
            "{{Basketo sen hin.}}",
            "{{Hinto basketo sen.}}"
          ],
          "correct": 0,
          "explanation": "{{Hin}} is a determiner and cannot stand alone; {{hinto}} is the pronoun.",
          "passage": null
        },
        {
          "id": "cor-hin-den-3",
          "type": "mcq",
          "prompt": "Which sentence means 'These baskets are new'?",
          "options": [
            "{{Hin basketo sen neo.}}",
            "{{Hin basketos sen neo.}}",
            "{{Hinto basketo sen neo.}}",
            "{{Hin basketo sen neos.}}",
            "{{Hinete basketo sen neo.}}"
          ],
          "correct": 0,
          "explanation": "Globasa does not mark plural nouns; {{hin basketo}} can mean 'these baskets'.",
          "passage": null
        },
        {
          "id": "cor-hin-den-4",
          "type": "mcq",
          "prompt": "Which sentence means 'That is my friend' when the friend is animate?",
          "options": [
            "{{Dente sen misu doste.}}",
            "{{Dento sen misu doste.}}",
            "{{Den sen misu doste.}}",
            "{{Dente misu doste sen.}}",
            "{{Denete doste sen misu.}}"
          ],
          "correct": 0,
          "explanation": "{{Dente}} is the animate demonstrative pronoun; {{dento}} is for inanimate things.",
          "passage": null
        },
        {
          "id": "cor-hin-den-5",
          "type": "mcq",
          "prompt": "Which word means 'in this way'?",
          "options": [
            "{{hinmaner}}",
            "{{hinloka}}",
            "{{hinwatu}}",
            "{{hinseba}}",
            "{{hinkwanti}}"
          ],
          "correct": 0,
          "explanation": "{{Hinmaner}} is manner; {{hinloka}} is place, {{hinwatu}} time, {{hinseba}} reason, and {{hinkwanti}} amount.",
          "passage": null,
          "dyn": {
            "kind": "definition",
            "prompt": "Which word means {term}?",
            "pool": [
              [
                "'in this way'",
                "hinmaner",
                "{{Hinmaner}} is manner; {{hinloka}} is place, {{hinwatu}} time, {{hinseba}} reason, and {{hinkwanti}} amount."
              ],
              [
                "'here'",
                "hinloka",
                "{{Hin-}} + {{loka}} (place)."
              ],
              [
                "'now, at this time'",
                "hinwatu",
                "{{Hin-}} + {{watu}} (time)."
              ],
              [
                "'for this reason'",
                "hinseba",
                "{{Hin-}} + {{seba}} (reason)."
              ],
              [
                "'this much'",
                "hinkwanti",
                "{{Hin-}} + {{kwanti}} (amount)."
              ]
            ]
          }
        },
        {
          "id": "cor-hin-den-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: This is a card, and that is my friend.",
          "answer": "Hinto sen karta, ji dente sen misu doste.",
          "accept": [],
          "explanation": "Use pronoun forms {{hinto}} and {{dente}} when no noun follows."
        },
        {
          "id": "cor-hin-den-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: I work here.",
          "answer": "Mi ergo hinloka.",
          "accept": [],
          "explanation": "{{Hinloka}} is the place correlative 'here'."
        },
        {
          "id": "cor-hin-den-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Denwatu hu mi le sen juni, mi le ogar in deha}}.",
          "answer": "When I was young, I lived in a village.",
          "accept": [],
          "explanation": "{{Denwatu hu}} introduces the time clause; {{le}} marks past."
        },
        {
          "id": "cor-hin-den-9",
          "type": "fill",
          "prompt": "___ basketo sen neo.",
          "blanks": [
            {
              "answer": "Hin",
              "accept": []
            }
          ],
          "explanation": "{{Hin}} is the near demonstrative determiner before {{basketo}}.",
          "gloss": "This basket is new."
        },
        {
          "id": "cor-hin-den-10",
          "type": "fill",
          "prompt": "Hinto sen karta, ji ___ sen misu doste.",
          "blanks": [
            {
              "answer": "dente",
              "accept": []
            }
          ],
          "explanation": "{{Dente}} is the animate demonstrative pronoun.",
          "gloss": "This is a card, and that is my friend."
        }
      ]
    },
    {
      "id": "cor-ban-moy-nil",
      "area": "correlatives",
      "title": "Indefinite, universal, negative",
      "blurb": "{{Ban-}} means some/certain, {{moy-}} means every/all, and {{nil-}} means no/none.",
      "refs": [
        "Grammar pp. 42–50",
        "Lesson 9"
      ],
      "notes": [
        "Determiners {{ban, moy}}, and {{nil}} require a following noun: {{ban nini, moy nini, nil nini}}.",
        "Pronouns end in -to (thing) or {{-te}} (animate): {{banto, bante}}; {{nilto, nilte}}.",
        "{{Moyun}} means 'each (one)' and is distinct from {{moy}} 'all'.",
        "{{Nil-}} also combines with time, place, manner, and reason: {{nilwatu, nilloka, nilmaner, nilseba}}."
      ],
      "examples": [
        [
          "Bante le ata, mas nilte le gibe sahay.",
          "Somebody came, but nobody gave help."
        ],
        [
          "Moyte doxo in kitabudom.",
          "Everybody reads in the library."
        ],
        [
          "Nilto sen asan.",
          "Nothing is easy."
        ]
      ],
      "exercises": [
        {
          "id": "cor-ban-moy-nil-1",
          "type": "mcq",
          "prompt": "What does the passage mean?",
          "options": [
            "Somebody came, but nobody gave help.",
            "Everybody came, but somebody gave help.",
            "Nobody came, but somebody gave help.",
            "Somebody came and gave help.",
            "Some people gave help, but nobody came."
          ],
          "correct": 0,
          "explanation": "{{Bante}} = somebody; {{nilte}} = nobody; {{mas}} = but.",
          "passage": "Bante le ata, mas nilte le gibe sahay."
        },
        {
          "id": "cor-ban-moy-nil-2",
          "type": "mcq",
          "prompt": "Which sentence means 'Everyone runs'?",
          "options": [
            "{{Moyte pawbu.}}",
            "{{Moy pawbu.}}",
            "{{Moyto pawbu.}}",
            "{{Moyete pawbu te.}}",
            "{{Moy nini pawbu.}}"
          ],
          "correct": 0,
          "explanation": "{{Moyte}} is the animate universal pronoun; {{pawbu}} is intransitive.",
          "passage": null
        },
        {
          "id": "cor-ban-moy-nil-3",
          "type": "mcq",
          "prompt": "Which sentence means 'Nothing is easy'?",
          "options": [
            "{{Nilto sen asan.}}",
            "{{Nil sen asan.}}",
            "{{Nilte sen asan.}}",
            "{{Nilloka sen asan.}}",
            "{{Nilto asan sen.}}"
          ],
          "correct": 0,
          "explanation": "{{Nilto}} is the inanimate negative pronoun; {{nil}} alone is a determiner.",
          "passage": null
        },
        {
          "id": "cor-ban-moy-nil-4",
          "type": "mcq",
          "prompt": "Which sentence means 'Some children play in the park'?",
          "options": [
            "{{Ban nini yuxi in parke.}}",
            "{{Bante nini yuxi in parke.}}",
            "{{Banto nini yuxi in parke.}}",
            "{{Ban yuxi nini in parke.}}",
            "{{Ban nini yuxi parke in.}}"
          ],
          "correct": 0,
          "explanation": "{{Ban}} is a determiner modifying {{nini}}; {{yuxi}} is the verb.",
          "passage": null
        },
        {
          "id": "cor-ban-moy-nil-5",
          "type": "mcq",
          "prompt": "What is the difference between {{moy nini}} and {{moyun nini}}?",
          "options": [
            "{{Moy nini}} means 'all the children'; {{moyun nini}} means 'each child'.",
            "There is no difference.",
            "{{Moy nini}} means 'some children'; {{moyun nini}} means 'no children'.",
            "{{Moy nini}} is a pronoun; {{moyun nini}} is a preposition.",
            "{{Moy nini}} is past tense; {{moyun nini}} is future tense."
          ],
          "correct": 0,
          "explanation": "{{Moyun}} singles out each member; {{moy}} refers to the whole group.",
          "passage": null
        },
        {
          "id": "cor-ban-moy-nil-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: Somebody is waiting for you.",
          "answer": "Bante intizar yu.",
          "accept": [],
          "explanation": "{{Bante}} is the animate indefinite pronoun; {{intizar}} takes {{yu}} as object."
        },
        {
          "id": "cor-ban-moy-nil-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: Nobody knows the answer.",
          "answer": "Nilte jixi jawabu.",
          "accept": [],
          "explanation": "{{Nilte}} is 'nobody'; {{jixi}} is transitive 'know'."
        },
        {
          "id": "cor-ban-moy-nil-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Moywatu mi le vole na xwexi}} Globasa.",
          "answer": "I always wanted to learn Globasa.",
          "accept": [],
          "explanation": "{{Moywatu}} = always; {{na xwexi}} is the infinitive complement."
        },
        {
          "id": "cor-ban-moy-nil-9",
          "type": "fill",
          "prompt": "___ nini yuxi in parke.",
          "blanks": [
            {
              "answer": "Ban",
              "accept": []
            }
          ],
          "explanation": "{{Ban}} means 'some' before a noun.",
          "gloss": "Some children play in the park."
        },
        {
          "id": "cor-ban-moy-nil-10",
          "type": "fill",
          "prompt": "___te jixi jawabu.",
          "blanks": [
            {
              "answer": "Nil",
              "accept": []
            }
          ],
          "explanation": "{{Nilte}} is the negative animate pronoun 'nobody'.",
          "gloss": "Nobody knows the answer."
        }
      ]
    },
    {
      "id": "cor-alo-sama",
      "area": "correlatives",
      "title": "Alternative and identical",
      "blurb": "{{Alo-}} means other/another/different; {{sama-}} means same.",
      "refs": [
        "Grammar pp. 42–50",
        "Lesson 17"
      ],
      "notes": [
        "{{Alo}} and {{sama}} are determiners and need a noun: {{alo kitabu, sama kitabu}}.",
        "{{Alote}} means 'somebody else' or 'the other one'; {{samato}} means 'the same thing'.",
        "Manner, place, time, and reason forms: {{alomaner/samamaner, aloloka/samaloka, alowatu/samawatu, aloseba/samaseba}}.",
        "{{Sama kom}} introduces comparison: {{sama kom mi}} = the same as me."
      ],
      "examples": [
        [
          "Mi le kari alo kitabu, no sama kitabu.",
          "I bought another book, not the same book."
        ],
        [
          "Alote le gibe tas mi sama kitabu.",
          "Someone else gave me the same book."
        ],
        [
          "Imi sen samaloka.",
          "We are in the same place."
        ]
      ],
      "exercises": [
        {
          "id": "cor-alo-sama-1",
          "type": "mcq",
          "prompt": "What is the difference between the two sentences in the passage?",
          "options": [
            "The first says another card was bought; the second says it was not the same card.",
            "Both say the same card was bought twice.",
            "The first says no card was bought; the second says one was.",
            "The second says another person bought the card.",
            "The first is future and the second is past."
          ],
          "correct": 0,
          "explanation": "{{Alo}} means another; {{sama}} means the same.",
          "passage": "Mi le kari alo karta. Mi no le kari sama karta."
        },
        {
          "id": "cor-alo-sama-2",
          "type": "mcq",
          "prompt": "Which sentence means 'Someone else gave me the same photo'?",
          "options": [
            "{{Alote le gibe tas mi sama foto.}}",
            "{{Alote le gibe tas mi alo foto.}}",
            "{{Samate le gibe tas mi alo foto.}}",
            "{{Alo le gibe tas mi samate foto.}}",
            "{{Alote le gibe sama tas mi foto.}}"
          ],
          "correct": 0,
          "explanation": "{{Alote}} = somebody else; {{sama foto}} = the same photo.",
          "passage": null
        },
        {
          "id": "cor-alo-sama-3",
          "type": "mcq",
          "prompt": "Which word means 'in a different way'?",
          "options": [
            "{{alomaner}}",
            "{{aloloka}}",
            "{{alowatu}}",
            "{{aloseba}}",
            "{{alokwanti}}"
          ],
          "correct": 0,
          "explanation": "{{Alomaner}} is manner; the others are place, time, reason, and amount.",
          "passage": null,
          "dyn": {
            "kind": "definition",
            "prompt": "Which word means {term}?",
            "pool": [
              [
                "'in a different way'",
                "alomaner",
                "{{Alomaner}} is manner; the others are place, time, reason, and amount."
              ],
              [
                "'elsewhere'",
                "aloloka",
                "{{Alo-}} + {{loka}} (place)."
              ],
              [
                "'at another time'",
                "alowatu",
                "{{Alo-}} + {{watu}} (time)."
              ],
              [
                "'for another reason'",
                "aloseba",
                "{{Alo-}} + {{seba}} (reason)."
              ],
              [
                "'another amount'",
                "alokwanti",
                "{{Alo-}} + {{kwanti}} (amount)."
              ]
            ]
          }
        },
        {
          "id": "cor-alo-sama-4",
          "type": "mcq",
          "prompt": "Which word means 'at the same time'?",
          "options": [
            "{{samawatu}}",
            "{{samaloka}}",
            "{{samamaner}}",
            "{{samaseba}}",
            "{{samato}}"
          ],
          "correct": 0,
          "explanation": "{{Samawatu}} combines {{sama}} with {{watu}} 'time'.",
          "passage": null,
          "dyn": {
            "kind": "definition",
            "prompt": "Which word means {term}?",
            "pool": [
              [
                "'at the same time'",
                "samawatu",
                "{{Samawatu}} combines {{sama}} with {{watu}} 'time'."
              ],
              [
                "'in the same place'",
                "samaloka",
                "Sama + loka."
              ],
              [
                "'in the same way'",
                "samamaner",
                "Sama + maner."
              ],
              [
                "'for the same reason'",
                "samaseba",
                "Sama + seba."
              ],
              [
                "'the same thing'",
                "samato",
                "{{Sama}} + {{to}}: the same inanimate thing."
              ]
            ]
          }
        },
        {
          "id": "cor-alo-sama-5",
          "type": "mcq",
          "prompt": "Which phrase means 'the same thing'?",
          "options": [
            "{{samato}}",
            "{{sama}}",
            "{{samate}}",
            "{{samaloka}}",
            "{{samapul}}"
          ],
          "correct": 0,
          "explanation": "{{Samato}} is the inanimate identical pronoun 'the same thing'.",
          "passage": null,
          "dyn": {
            "kind": "definition",
            "prompt": "Which phrase means {term}?",
            "pool": [
              [
                "'the same thing'",
                "samato",
                "{{Samato}} is the inanimate identical pronoun 'the same thing'."
              ],
              [
                "'same' as an adjective",
                "sama",
                "{{Sama}} is the bare determiner/adjective."
              ],
              [
                "'the same person'",
                "samate",
                "{{Samate}} is the animate identical pronoun."
              ],
              [
                "'the same place'",
                "samaloka",
                "Sama + loka."
              ],
              [
                "'of the same kind'",
                "samapul",
                "{{-pul}} marks 'full of the same quality'."
              ]
            ]
          }
        },
        {
          "id": "cor-alo-sama-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: I want another photo.",
          "answer": "Mi vole alo foto.",
          "accept": [],
          "explanation": "{{Alo}} is a determiner before {{foto}}."
        },
        {
          "id": "cor-alo-sama-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: We are in the same place.",
          "answer": "Imi sen samaloka.",
          "accept": [],
          "explanation": "{{Samaloka}} is the place correlative 'in the same place'; {{sen}} links {{imi}} to it."
        },
        {
          "id": "cor-alo-sama-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Alote le gibe tas mi sama foto}}.",
          "answer": "Someone else gave me the same photo.",
          "accept": [],
          "explanation": "{{Alote}} is animate 'someone else'; {{sama foto}} is 'the same photo'."
        },
        {
          "id": "cor-alo-sama-9",
          "type": "fill",
          "prompt": "Mi vole ___ foto.",
          "blanks": [
            {
              "answer": "alo",
              "accept": []
            }
          ],
          "explanation": "{{Alo}} means 'another/different' before a noun.",
          "gloss": "I want another photo."
        },
        {
          "id": "cor-alo-sama-10",
          "type": "fill",
          "prompt": "Imi sen ___loka.",
          "blanks": [
            {
              "answer": "sama",
              "accept": []
            }
          ],
          "explanation": "{{Samaloka}} means 'in the same place'.",
          "gloss": "We are in the same place."
        }
      ]
    },
    {
      "id": "cor-table",
      "area": "correlatives",
      "title": "Full correlative table",
      "blurb": "Rote recall of all eight columns across thing, being, possession, kind, degree, quantity, number, place, time, reason, and manner.",
      "refs": [
        "Grammar pp. 42–50"
      ],
      "notes": [
        "Columns: {{ke-}} (which), {{hin-}} (this), {{den-}} (that), {{ban-}} (some), {{moy-}} (every), {{nil-}} (no), {{alo-}} (other), {{sama-}} (same).",
        "Rows add -to (thing), {{-te}} (animate), {{-su}} (possessive), {{-pul}} (kind), {{-mo}} (degree), {{-kwanti}} (amount), {{-numer}} (number), {{-loka}} (place), {{-watu}} (time), {{-seba}} (reason), {{-maner}} (manner).",
        "Plural pronouns add {{-oto or -ete}}: {{hinoto, denete}}.",
        "Learn the pattern, not isolated words: the stem gives the column and the suffix gives the row."
      ],
      "examples": [
        [
          "moyto, moyte, moyloka, moywatu",
          "everything, everyone, everywhere, always"
        ],
        [
          "nilto, nilte, nilloka, nilwatu",
          "nothing, nobody, nowhere, never"
        ],
        [
          "aloto, alote, aloloka, alowatu",
          "something else, somebody else, elsewhere, at other times"
        ]
      ],
      "exercises": [
        {
          "id": "cor-table-1",
          "type": "mcq",
          "prompt": "Which series correctly gives 'everything, everyone, everywhere, always'?",
          "options": [
            "{{moyto, moyte, moyloka, moywatu}}",
            "{{moyto, moyte, moywatu, moyloka}}",
            "{{moyte, moyto, moyloka, moywatu}}",
            "{{moyto, moyloka, moyte, moywatu}}",
            "{{moypul, moyte, moyloka, moywatu}}"
          ],
          "correct": 0,
          "explanation": "The {{moy-}} stem takes {{-to}}, {{-te, -loka}}, and {{-watu}}.",
          "passage": null
        },
        {
          "id": "cor-table-2",
          "type": "mcq",
          "prompt": "Which word means 'everywhere'?",
          "options": [
            "{{moyloka}}",
            "{{moywatu}}",
            "{{moyto}}",
            "{{moymaner}}",
            "{{moyseba}}"
          ],
          "correct": 0,
          "explanation": "{{Moyloka}} combines {{moy-}} with {{loka}} 'place'.",
          "passage": null,
          "dyn": {
            "kind": "definition",
            "prompt": "Which word means {term}?",
            "pool": [
              [
                "'everywhere'",
                "moyloka",
                "{{Moyloka}} combines {{moy-}} with {{loka}} 'place'."
              ],
              [
                "'always'",
                "moywatu",
                "{{Moy-}} + {{watu}} 'time'."
              ],
              [
                "'everything'",
                "moyto",
                "{{Moy-}} + {{to}} 'thing'."
              ],
              [
                "'in every way'",
                "moymaner",
                "{{Moy-}} + {{maner}} 'manner'."
              ],
              [
                "'for every reason'",
                "moyseba",
                "{{Moy-}} + {{seba}} 'reason'."
              ],
              [
                "'everyone'",
                "moyte",
                "{{Moy-}} + {{te}} 'person'."
              ]
            ]
          }
        },
        {
          "id": "cor-table-3",
          "type": "mcq",
          "prompt": "Which word means 'never'?",
          "options": [
            "{{nilwatu}}",
            "{{nilloka}}",
            "{{nilto}}",
            "{{nilmaner}}",
            "{{nilkwanti}}"
          ],
          "correct": 0,
          "explanation": "{{Nilwatu}} combines {{nil-}} with {{watu}} 'time'.",
          "passage": null,
          "dyn": {
            "kind": "definition",
            "prompt": "Which word means {term}?",
            "pool": [
              [
                "'never'",
                "nilwatu",
                "{{Nilwatu}} combines {{nil-}} with {{watu}} 'time'."
              ],
              [
                "'nowhere'",
                "nilloka",
                "Nil- + loka."
              ],
              [
                "'nothing'",
                "nilto",
                "Nil- + to."
              ],
              [
                "'in no way'",
                "nilmaner",
                "Nil- + maner."
              ],
              [
                "'to no extent'",
                "nilkwanti",
                "{{Nil-}} + {{kwanti}} 'amount'."
              ],
              [
                "'nobody'",
                "nilte",
                "Nil- + te."
              ]
            ]
          }
        },
        {
          "id": "cor-table-4",
          "type": "mcq",
          "prompt": "Which word means 'some amount'?",
          "options": [
            "{{bankwanti}}",
            "{{bannumer}}",
            "{{banpul}}",
            "{{banmo}}",
            "{{banloka}}"
          ],
          "correct": 0,
          "explanation": "{{Bankwanti}} uses {{kwanti}} 'quantity/amount'.",
          "passage": null,
          "dyn": {
            "kind": "definition",
            "prompt": "Which word means {term}?",
            "pool": [
              [
                "'some amount'",
                "bankwanti",
                "{{Bankwanti}} uses {{kwanti}} 'quantity/amount'."
              ],
              [
                "'some number (of)'",
                "bannumer",
                "Ban- + numer."
              ],
              [
                "'of some kind'",
                "banpul",
                "{{Ban-}} + the suffix {{-pul}}."
              ],
              [
                "'some extent'",
                "banmo",
                "{{Ban-}} + {{-mo}} 'degree'."
              ],
              [
                "'somewhere'",
                "banloka",
                "Ban- + loka."
              ],
              [
                "'sometimes'",
                "banwatu",
                "Ban- + watu."
              ]
            ]
          }
        },
        {
          "id": "cor-table-5",
          "type": "mcq",
          "prompt": "What does the passage say about places?",
          "options": [
            "The speaker found an apple somewhere and saw flowers everywhere.",
            "The speaker found an apple everywhere and saw flowers somewhere.",
            "The speaker found nothing anywhere and saw no flowers.",
            "The speaker found an apple nowhere and saw flowers elsewhere.",
            "The speaker found the same apple in every place and saw one flower."
          ],
          "correct": 0,
          "explanation": "{{Banloka}} means somewhere; {{moyloka}} means everywhere.",
          "passage": "Banloka mi le ewreka pingo, ji moyloka mi le oko flura."
        },
        {
          "id": "cor-table-6",
          "type": "mcq",
          "prompt": "Which series correctly gives 'nothing, nobody, nowhere, never'?",
          "options": [
            "{{nilto, nilte, nilloka, nilwatu}}",
            "{{nilto, nilte, nilwatu, nilloka}}",
            "{{nilte, nilto, nilloka, nilwatu}}",
            "{{nilto, nilloka, nilte, nilwatu}}",
            "{{nilpul, nilte, nilloka, nilwatu}}"
          ],
          "correct": 0,
          "explanation": "The {{nil-}} stem takes {{-to}}, {{-te, -loka}}, and {{-watu}}.",
          "passage": null
        },
        {
          "id": "cor-table-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: I did it for the same reason.",
          "answer": "Mi le fale to samaseba.",
          "accept": [],
          "explanation": "{{Sama-}} + {{seba}} gives {{samaseba}}, \"for the same reason\"."
        },
        {
          "id": "cor-table-8",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: How many books did you buy?",
          "answer": "Yu le kari kenumer kitabu?",
          "accept": [],
          "explanation": "{{Kenumer}} asks \"how many\" before the counted noun {{kitabu}}."
        },
        {
          "id": "cor-table-9",
          "type": "fill",
          "prompt": "Te ergo ___.",
          "blanks": [
            {
              "answer": "moyloka",
              "accept": []
            }
          ],
          "explanation": "{{Moyloka}} means \"everywhere\"; it is the {{moy-}} form of {{loka}} \"place\".",
          "gloss": "He works everywhere."
        },
        {
          "id": "cor-table-10",
          "type": "fill",
          "prompt": "Mi le ___ idi cel xaher.",
          "blanks": [
            {
              "answer": "nilwatu",
              "accept": []
            }
          ],
          "explanation": "{{Nilwatu}} means \"never\"; the tense marker {{le}} precedes it.",
          "gloss": "I never went to the city."
        }
      ]
    },
    {
      "id": "cor-usage",
      "area": "correlatives",
      "title": "Correlative usage rules",
      "blurb": "Determiners must modify a noun; comparative correlatives use {{kom}}; {{daydenpul}} and {{daydenmo}} add exclamation.",
      "refs": [
        "Grammar pp. 48–50"
      ],
      "notes": [
        "{{Ke, hin, den, ban, moy, nil, alo}}, and {{sama}} must always be followed by a noun; use {{-to}}/{{-te}} pronouns when standing alone.",
        "Comparisons with {{-pul, -mo, -kwanti}}, and {{-numer}} use {{kom}}: {{denpul kom mi, denmo day kom misu to}}.",
        "{{Daydenpul}} introduces exclamations: {{Daydenpul din}}! = What a day!",
        "{{Moyun}} distinguishes 'each one' from {{moy}} 'all'."
      ],
      "examples": [
        [
          "Hin kitabu sen neo, ji den kitabu sen lama.",
          "This book is new, and that book is old."
        ],
        [
          "Hin baytu sen denmo day kom misu to.",
          "This house is as big as mine."
        ],
        [
          "Daydenpul din!",
          "What a day!"
        ]
      ],
      "exercises": [
        {
          "id": "cor-usage-1",
          "type": "mcq",
          "prompt": "Why does the passage use {{den mesaje}} instead of {{dento}}?",
          "options": [
            "{{Den}} is a determiner and must be followed by a noun; {{dento}} would stand alone as a pronoun.",
            "{{Dento}} is only for animate beings.",
            "{{Den mesaje}} is a question form.",
            "{{Dento}} is past tense and {{den mesaje}} is present.",
            "There is no difference; the two are always interchangeable."
          ],
          "correct": 0,
          "explanation": "Determiners require a noun. {{Dento}} is the pronoun used when no noun follows.",
          "passage": "Hin mesaje sen neo, den mesaje sen lama."
        },
        {
          "id": "cor-usage-2",
          "type": "mcq",
          "prompt": "Which sentence correctly uses a determiner?",
          "options": [
            "{{Moy nini pawbu.}}",
            "{{Moy pawbu.}}",
            "{{Moyto nini pawbu.}}",
            "{{Moy nini pawbu to.}}",
            "{{Moy pawbu nini.}}"
          ],
          "correct": 0,
          "explanation": "{{Moy}} is a determiner and must be followed by a noun; {{pawbu}} is the verb.",
          "passage": null
        },
        {
          "id": "cor-usage-3",
          "type": "mcq",
          "prompt": "Which phrase means 'like me'?",
          "options": [
            "{{denpul kom mi}}",
            "{{denpul mi}}",
            "{{denmo mi}}",
            "{{kom denpul mi}}",
            "{{denpul in mi}}"
          ],
          "correct": 0,
          "explanation": "Comparative correlatives use {{kom}}: {{denpul kom mi}}.",
          "passage": null
        },
        {
          "id": "cor-usage-4",
          "type": "mcq",
          "prompt": "Which sentence means 'This house is as big as mine'?",
          "options": [
            "{{Hin baytu sen denmo day kom misu to.}}",
            "{{Hin baytu sen denpul day kom misu to.}}",
            "{{Hin baytu sen denmo day misu to.}}",
            "{{Hin baytu sen kom denmo day misu to.}}",
            "{{Hin baytu sen denkwanti day kom misu to.}}"
          ],
          "correct": 0,
          "explanation": "Degree comparison uses {{denmo}} + adjective + {{kom}}.",
          "passage": null
        },
        {
          "id": "cor-usage-5",
          "type": "mcq",
          "prompt": "Which sentence is an exclamation meaning 'What a day!'?",
          "options": [
            "{{Daydenpul din!}}",
            "{{Daydenmo din!}}",
            "{{Denpul day din!}}",
            "{{Din daydenpul!}}",
            "{{Daydenkwanti din!}}"
          ],
          "correct": 0,
          "explanation": "{{Daydenpul}} precedes a noun in exclamations: {{Daydenpul din}}!",
          "passage": null
        },
        {
          "id": "cor-usage-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: This house is as big as mine.",
          "answer": "Hin baytu sen denmo day kom misu to.",
          "accept": [],
          "explanation": "{{Denmo}} modifies {{day}}; {{kom}} introduces the standard of comparison."
        },
        {
          "id": "cor-usage-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: Some people like coffee, others like tea.",
          "answer": "Ban yen suki kafe, alo yen suki cay.",
          "accept": [],
          "explanation": "{{Ban yen}} and {{alo yen}} are determiner + noun phrases."
        },
        {
          "id": "cor-usage-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Moyte hu da le ata le gibe hadya tas imi}}.",
          "answer": "Everyone who came gave a gift to us.",
          "accept": [],
          "explanation": "{{Moyte}} is the universal animate pronoun; {{hu da le ata}} is a subject relative clause."
        },
        {
          "id": "cor-usage-9",
          "type": "fill",
          "prompt": "Hin baytu sen denmo day ___ misu to.",
          "blanks": [
            {
              "answer": "kom",
              "accept": []
            }
          ],
          "explanation": "{{Kom}} introduces the standard in a comparative correlative.",
          "gloss": "This house is as big as mine."
        },
        {
          "id": "cor-usage-10",
          "type": "fill",
          "prompt": "___ nini suki yuxi.",
          "blanks": [
            {
              "answer": "Moy",
              "accept": []
            }
          ],
          "explanation": "{{Moy}} is a determiner meaning 'every/all' before {{nini}}.",
          "gloss": "Every child likes playing."
        }
      ]
    },
    {
      "id": "vocab-actions",
      "area": "vocabulary",
      "title": "Everyday actions",
      "blurb": "Use common verbs such as {{eskri, koki, glu, oko, ore}}, and {{diskusi}} in full sentences.",
      "refs": [
        "Top 500 word list",
        "Grammar pp. 73–81"
      ],
      "notes": [
        "Many everyday verbs are transitive when they take a direct object: {{eskri mesaje, koki supa, diskusi plani}}.",
        "Use {{tas}} for the recipient of {{gibe}} and {{irsal}}: {{gibe karta tas doste}}.",
        "Time and place phrases usually follow the object: {{Mi eskri mesaje in kamer}}."
      ],
      "examples": [
        [
          "Mi eskri mesaje tas misu doste.",
          "I write a message to my friend."
        ],
        [
          "Imi koki supa in kokikamer.",
          "We cook soup in the kitchen."
        ],
        [
          "Te ore musika fe noce.",
          "He or she listens to music in the evening."
        ]
      ],
      "exercises": [
        {
          "id": "vocab-actions-1",
          "type": "mcq",
          "prompt": "What will the friend do tomorrow?",
          "passage": "Mi eskri mesaje tas misu doste. Te xa jawabu mesaje jaxadin.",
          "options": [
            "The friend will answer the message.",
            "The friend will write a message.",
            "The friend will read a book.",
            "The friend will buy a card.",
            "The friend will visit the speaker."
          ],
          "correct": 0,
          "explanation": "{{Xa}} marks the future, {{jawabu}} means answer, and {{mesaje}} is the object."
        },
        {
          "id": "vocab-actions-2",
          "type": "mcq",
          "prompt": "Which sentence means 'I am cooking eggs'?",
          "options": [
            "{{Mi koki ovo.}}",
            "{{Mi glu jusu.}}",
            "{{Mi kari ovo.}}",
            "{{Mi oko filme.}}",
            "{{Mi eskri mesaje.}}"
          ],
          "correct": 0,
          "explanation": "{{Koki}} is the verb 'cook' and {{ovo}} is its direct object."
        },
        {
          "id": "vocab-actions-3",
          "type": "mcq",
          "prompt": "Which sentence means 'We discuss the plan in the room'?",
          "options": [
            "{{Imi diskusi plani in kamer.}}",
            "{{Imi koki plani in kamer.}}",
            "{{Imi glu plani in kamer.}}",
            "{{Imi oko plani in kamer.}}",
            "{{Imi kari plani in kamer.}}"
          ],
          "correct": 0,
          "explanation": "{{Diskusi}} takes {{plani}} as its direct object; {{in kamer}} is the location."
        },
        {
          "id": "vocab-actions-4",
          "type": "mcq",
          "prompt": "Which sentence means 'She listens to music'?",
          "options": [
            "{{Te ore musika.}}",
            "{{Te oko filme.}}",
            "{{Te pala tem musika.}}",
            "{{Te eskri mesaje.}}",
            "{{Te koki supa.}}"
          ],
          "correct": 0,
          "explanation": "{{Ore}} means hear or listen; {{musika}} is the object."
        },
        {
          "id": "vocab-actions-5",
          "type": "mcq",
          "prompt": "What are the siblings doing?",
          "passage": "Misu sodar koki supa, ji mi glu jusu.",
          "options": [
            "One is cooking soup and the other is drinking juice.",
            "One is buying soup and the other is cooking juice.",
            "Both are drinking soup in the kitchen.",
            "One is writing a message and the other is reading a book.",
            "Both are eating bread at the table."
          ],
          "correct": 0,
          "explanation": "{{Koki supa}} is 'cook soup'; {{glu jusu}} is 'drink juice'; {{ji}} joins the two clauses."
        },
        {
          "id": "vocab-actions-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: I am writing a message to my friend.",
          "answer": "Mi eskri mesaje tas misu doste.",
          "accept": [],
          "explanation": "{{Eskri}} takes {{mesaje}} as its object; {{tas}} introduces the recipient."
        },
        {
          "id": "vocab-actions-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: We buy bread and eggs at the store.",
          "answer": "Imi kari roti ji ovo in dukan.",
          "accept": [],
          "explanation": "{{Kari}} takes {{roti ji ovo}} as its object; {{in dukan}} is the location."
        },
        {
          "id": "vocab-actions-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Te xa foto drevo in parke}}.",
          "answer": "He will photograph a tree in the park.",
          "accept": [
            "She will photograph a tree in the park.",
            "They will photograph a tree in the park."
          ],
          "explanation": "{{Foto}} means photograph; {{xa}} marks the future; {{in parke}} is the location."
        },
        {
          "id": "vocab-actions-9",
          "type": "fill",
          "prompt": "Complete with the verb for {v:label}: {{Mi}} ___ {{mesaje tas misu doste}}.",
          "blanks": [
            {
              "answer": "{v:g}",
              "accept": []
            }
          ],
          "explanation": "{{Eskri}} means write; {{mesaje}} is the object.",
          "gloss": "I {v:e} a message to my friend.",
          "dyn": {
            "slots": {
              "v": [
                {
                  "label": "writing",
                  "e": "write",
                  "g": "eskri"
                },
                {
                  "label": "reading",
                  "e": "read",
                  "g": "doxo"
                },
                {
                  "label": "sending",
                  "e": "send",
                  "g": "irsal"
                }
              ]
            }
          }
        },
        {
          "id": "vocab-actions-10",
          "type": "fill",
          "prompt": "Complete with the verb for {v:label}: {{Imi}} ___ {{supa in kokikamer}}.",
          "blanks": [
            {
              "answer": "{v:g}",
              "accept": []
            }
          ],
          "explanation": "{{Koki}} means cook; {{supa}} is the object.",
          "gloss": "We {v:e} soup in the kitchen.",
          "dyn": {
            "slots": {
              "v": [
                {
                  "label": "cooking",
                  "e": "cook",
                  "g": "koki"
                },
                {
                  "label": "eating",
                  "e": "eat",
                  "g": "yam"
                }
              ]
            }
          }
        }
      ]
    },
    {
      "id": "vocab-objects",
      "area": "vocabulary",
      "title": "Everyday objects",
      "blurb": "Practise concrete objects and useful location phrases: {{karta, botela, basketo, kaxa, tiketo}}, and more.",
      "refs": [
        "Top 500 word list",
        "Grammar pp. 73–81"
      ],
      "notes": [
        "Everyday objects are often n/v words: {{karta, botela, basketo, kaxa}}.",
        "Location phrases follow the object: {{Harita sen per mesa}}.",
        "{{Xerca}} means look for; {{ewreka}} means find."
      ],
      "examples": [
        [
          "Misu karta sen in kaxa.",
          "My card is in the box."
        ],
        [
          "Mi le kari botela jusu.",
          "I bought a bottle of juice."
        ],
        [
          "Te xerca sesu tiketo.",
          "He or she is looking for his or her ticket."
        ]
      ],
      "exercises": [
        {
          "id": "vocab-objects-1",
          "type": "mcq",
          "prompt": "What is the speaker looking for?",
          "passage": "Mi xerca misu tiketo in basketo, mas mi no ewreka to.",
          "options": [
            "The speaker is looking for a ticket in the basket.",
            "The speaker is looking for a basket in the ticket.",
            "The speaker found a ticket in the basket.",
            "The speaker is buying a ticket for a basket.",
            "The speaker is looking for a map in the box."
          ],
          "correct": 0,
          "explanation": "{{Xerca}} means look for and {{tiketo}} is the object; {{basketo}} is the location."
        },
        {
          "id": "vocab-objects-2",
          "type": "mcq",
          "prompt": "Which sentence means 'The map is on the table'?",
          "options": [
            "{{Harita sen per mesa.}}",
            "{{Harita sen in mesa.}}",
            "{{Harita sen bax mesa.}}",
            "{{Harita sen supra mesa.}}",
            "{{Harita sen ton mesa.}}"
          ],
          "correct": 0,
          "explanation": "{{Per}} means on or upon; {{bax}} is under, in is inside, and {{supra}} is above."
        },
        {
          "id": "vocab-objects-3",
          "type": "mcq",
          "prompt": "Which sentence means 'I bought a bottle of juice'?",
          "options": [
            "{{Mi le kari botela jusu.}}",
            "{{Mi le glu botela jusu.}}",
            "{{Mi le koki supa.}}",
            "{{Mi le oko botela jusu.}}",
            "{{Mi le xerca botela jusu.}}"
          ],
          "correct": 0,
          "explanation": "{{Kari}} means buy; {{botela jusu}} is a bottle of juice."
        },
        {
          "id": "vocab-objects-4",
          "type": "mcq",
          "prompt": "What is in the box?",
          "passage": "Misu karta ji dua foto sen in kaxa.",
          "options": [
            "A card and two photos are in the box.",
            "Two cards and a photo are in the box.",
            "A card and two boxes are in the photo.",
            "Only a card is in the box.",
            "The box is on the card and the photos."
          ],
          "correct": 0,
          "explanation": "{{Karta ji dua foto}} is the subject; {{in kaxa}} is the location."
        },
        {
          "id": "vocab-objects-5",
          "type": "mcq",
          "prompt": "What did the mother buy?",
          "passage": "Misu matre le kari neo dyex ji botela jusu. Imi xa yam fe noce.",
          "options": [
            "A new plate and a bottle of juice.",
            "A new bottle and a plate of juice.",
            "A new table and a plate.",
            "A bottle of soup and a new card.",
            "A new photo and a bottle of juice."
          ],
          "correct": 0,
          "explanation": "{{Neo dyex}} is a new plate; {{botela jusu}} is a bottle of juice."
        },
        {
          "id": "vocab-objects-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: I keep the map in the box.",
          "answer": "Mi hifazi harita in kaxa.",
          "accept": [],
          "explanation": "{{Hifazi}} means keep or store; {{harita}} is the object and {{in kaxa}} is the location."
        },
        {
          "id": "vocab-objects-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: She is looking for her ticket.",
          "answer": "Te xerca sesu tiketo.",
          "accept": [],
          "explanation": "{{Xerca}} means look for; {{sesu}} means her own."
        },
        {
          "id": "vocab-objects-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Misu foto sen per mesa}}.",
          "answer": "My photo is on the table.",
          "accept": [],
          "explanation": "{{Per}} means on; {{foto}} is the subject."
        },
        {
          "id": "vocab-objects-9",
          "type": "fill",
          "prompt": "Complete with the object '{obj:one}': {{Mi le kari dua}} ___.",
          "blanks": [
            {
              "answer": "{obj:g}",
              "accept": []
            }
          ],
          "explanation": "{{Dua tiketo}} means two tickets; Globasa does not add a plural ending.",
          "gloss": "I bought two {obj:e}.",
          "dyn": {
            "slots": {
              "obj": [
                {
                  "one": "ticket",
                  "e": "tickets",
                  "g": "tiketo"
                },
                {
                  "one": "card",
                  "e": "cards",
                  "g": "karta"
                },
                {
                  "one": "bottle",
                  "e": "bottles",
                  "g": "botela"
                },
                {
                  "one": "book",
                  "e": "books",
                  "g": "kitabu"
                }
              ]
            }
          }
        },
        {
          "id": "vocab-objects-10",
          "type": "fill",
          "prompt": "Complete with the object '{obj:one}': {{Mi xerca misu}} ___ {{in kaxa}}.",
          "blanks": [
            {
              "answer": "{obj:g}",
              "accept": []
            }
          ],
          "explanation": "{{Karta}} is the object being looked for; {{in kaxa}} is the location.",
          "gloss": "I am looking for my {obj:e} in the box.",
          "dyn": {
            "slots": {
              "obj": [
                {
                  "one": "card",
                  "e": "card",
                  "g": "karta"
                },
                {
                  "one": "photo",
                  "e": "photo",
                  "g": "foto"
                },
                {
                  "one": "book",
                  "e": "book",
                  "g": "kitabu"
                },
                {
                  "one": "ticket",
                  "e": "ticket",
                  "g": "tiketo"
                }
              ]
            }
          }
        }
      ]
    },
    {
      "id": "vocab-routines",
      "area": "vocabulary",
      "title": "Plans & daily life",
      "blurb": "Talk about routines, meetings, visits, and messages with common everyday verbs.",
      "refs": [
        "Top 500 word list",
        "Grammar pp. 73–81"
      ],
      "notes": [
        "Use {{xoru}} and {{fini}} with an object to start or finish something: {{xoru ergo, fini supa}}.",
        "{{Plani na}} + verb expresses a plan; {{visita, invita}}, and {{randevu}} are already verbs.",
        "Time phrases such as {{fe soba}} and {{jaxadin}} can open or close the sentence."
      ],
      "examples": [
        [
          "Mi xoru ergo fe soba.",
          "I start work in the morning."
        ],
        [
          "Imi xa randevu in kafe fe noce.",
          "We will meet at the cafe in the evening."
        ],
        [
          "Te plani na visita sesu famil jaxadin.",
          "He or she plans to visit his or her family tomorrow."
        ]
      ],
      "exercises": [
        {
          "id": "vocab-routines-1",
          "type": "mcq",
          "prompt": "What will the speaker do tomorrow?",
          "passage": "Mi xoru misu ergo fe soba, ji mi fini to fe noce. Jaxadin mi xa visita misu famil.",
          "options": [
            "The speaker will visit family.",
            "The speaker will start work in the morning.",
            "The speaker will finish work in the evening.",
            "The speaker will meet a friend at a cafe.",
            "The speaker will send a message to a friend."
          ],
          "correct": 0,
          "explanation": "{{Jaxadin mi xa visita misu famil}} is the future action; the earlier sentences describe today's routine."
        },
        {
          "id": "vocab-routines-2",
          "type": "mcq",
          "prompt": "Which sentence means 'We will meet at the cafe'?",
          "options": [
            "{{Imi xa randevu in kafe.}}",
            "{{Imi xa visita in kafe.}}",
            "{{Imi xa invita in kafe.}}",
            "{{Imi xa intizar in kafe.}}",
            "{{Imi xa koki in kafe.}}"
          ],
          "correct": 0,
          "explanation": "{{Randevu}} means meet; {{xa}} marks the future and {{in kafe}} is the location."
        },
        {
          "id": "vocab-routines-3",
          "type": "mcq",
          "prompt": "Which sentence means 'She invites us to her house'?",
          "options": [
            "{{Te invita imi cel sesu baytu.}}",
            "{{Te visita imi cel sesu baytu.}}",
            "{{Te randevu imi cel sesu baytu.}}",
            "{{Te intizar imi cel sesu baytu.}}",
            "{{Te gida imi cel sesu baytu.}}"
          ],
          "correct": 0,
          "explanation": "{{Invita}} takes {{imi}} as object and {{cel sesu baytu}} as the destination."
        },
        {
          "id": "vocab-routines-4",
          "type": "mcq",
          "prompt": "Which sentence means 'I need a new bottle'?",
          "options": [
            "{{Mi haja neo botela.}}",
            "{{Mi vole neo botela.}}",
            "{{Mi kari neo botela.}}",
            "{{Mi hifazi neo botela.}}",
            "{{Mi xerca neo botela.}}"
          ],
          "correct": 0,
          "explanation": "{{Haja}} means need; {{vole}} means want, {{kari}} means buy, and {{xerca}} means look for."
        },
        {
          "id": "vocab-routines-5",
          "type": "mcq",
          "prompt": "What are they doing?",
          "passage": "Imi intizar bus in dolo. Bus xa ata hanman.",
          "options": [
            "They are waiting for a bus on the street.",
            "They are buying a bus on the street.",
            "They are driving a car in the city.",
            "They are waiting for a train at the station.",
            "They are walking to the bus."
          ],
          "correct": 0,
          "explanation": "{{Intizar bus}} means wait for a bus; in {{dolo}} is the location."
        },
        {
          "id": "vocab-routines-6",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: I start work in the morning.",
          "answer": "Mi xoru ergo fe soba.",
          "accept": [],
          "explanation": "{{Xoru}} means start; {{ergo}} is the object and {{fe soba}} is the time phrase."
        },
        {
          "id": "vocab-routines-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: We plan to visit our family tomorrow.",
          "answer": "Imi plani na visita imisu famil jaxadin.",
          "accept": [],
          "explanation": "{{Plani na visita}} expresses the plan; {{imisu}} means our."
        },
        {
          "id": "vocab-routines-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Misu doste xa irsal karta tas mi}}.",
          "answer": "My friend will send a card to me.",
          "accept": [],
          "explanation": "{{Irsal}} means send; {{tas mi}} marks the recipient."
        },
        {
          "id": "vocab-routines-9",
          "type": "fill",
          "prompt": "Complete with the verb for {v:label}: {{Imi xa}} ___ {{in kafe fe noce}}.",
          "blanks": [
            {
              "answer": "{v:g}",
              "accept": []
            }
          ],
          "explanation": "{{Randevu}} means meet; {{xa}} marks the future.",
          "gloss": "We will {v:e} at the cafe in the evening.",
          "dyn": {
            "slots": {
              "v": [
                {
                  "label": "meeting",
                  "e": "meet",
                  "g": "randevu"
                },
                {
                  "label": "visiting",
                  "e": "visit",
                  "g": "visita"
                },
                {
                  "label": "inviting",
                  "e": "invite",
                  "g": "invita"
                }
              ]
            }
          }
        },
        {
          "id": "vocab-routines-10",
          "type": "fill",
          "prompt": "Complete with the verb for {v:label}: {{Te plani na}} ___ {{sesu matre jaxadin}}.",
          "blanks": [
            {
              "answer": "{v:g}",
              "accept": []
            }
          ],
          "explanation": "After {{na}}, use the dictionary verb {{visita}}.",
          "gloss": "She plans to {v:e} her mother tomorrow.",
          "dyn": {
            "slots": {
              "v": [
                {
                  "label": "visiting",
                  "e": "visit",
                  "g": "visita"
                },
                {
                  "label": "inviting",
                  "e": "invite",
                  "g": "invita"
                },
                {
                  "label": "meeting",
                  "e": "meet",
                  "g": "randevu"
                }
              ]
            }
          }
        }
      ]
    },
    {
      "id": "nuance-ing",
      "area": "nuances",
      "title": "-ing forms: gerunds, adjectives, participles",
      "blurb": "English piles four jobs onto -ing; Globasa splits them across {{du-, na, -ne}}, and compounds.",
      "refs": [
        "Author notes: Translating -ing words",
        "Grammar pp. 82–94"
      ],
      "notes": [
        "{{du-}} plus a root makes a gerund noun: {{Dudanse ji dulala sen amusane}}. When the action is a count noun, the bare root can stand alone: {{Doxo sen interesne}}.",
        "Only the infinitive works when the -ing word keeps a direct object: {{Na lala meli lala sen amusane}}, never {{Dulala meli lala}}.",
        "{{-ne}} makes an active adjective ({{dansene femwangu}}), while a compound or {{-li}} makes a 'for doing X' adjective: {{somnobao or somnoli bao}}, glusui or gluli {{sui}}.",
        "An -ing phrase attached to the main verb uses {{fe na}} plus a predicate, and {{fe na le}} for a completed action: {{Te le sungay janu fe na danse}}."
      ],
      "examples": [
        [
          "Dudanse ji dulala sen amusane.",
          "Dancing and singing are fun."
        ],
        [
          "Na lala meli lala sen amusane.",
          "Singing beautiful songs is fun."
        ],
        [
          "Te le sungay janu fe na danse.",
          "She hurt her knee dancing."
        ],
        [
          "Te sen yampul fe na le yam total pitza.",
          "She is full, having eaten a whole pizza."
        ]
      ],
      "exercises": [
        {
          "id": "nuance-ing-1",
          "type": "mcq",
          "prompt": "Why do both sentences in the passage use {{dudanse}} and {{dulala}}?",
          "passage": "Dudanse ji dulala in barix sen amusane. Mi suki dudanse ji dulala in barix.",
          "options": [
            "Both words act as nouns here, so the gerund prefix {{du-}} is added to each root.",
            "Both words are verbs in this sentence, so they carry the past particle {{le}}.",
            "Both words are adjectives describing {{barix}}.",
            "Both words are count nouns naming single dances and songs.",
            "Both words form one compound with {{barix}} and must keep the prefix."
          ],
          "correct": 0,
          "explanation": "A gerund used as a noun takes {{du-}}: {{dudanse}} (dancing), {{dulala}} (singing). The prepositional phrase {{in barix}} can stay inside the noun phrase."
        },
        {
          "id": "nuance-ing-2",
          "type": "mcq",
          "prompt": "Why does the passage use {{na}} instead of {{du-}}?",
          "passage": "Na lala meli lala sen amusane. Mi suki na lala meli lala.",
          "options": [
            "Because the -ing word keeps its direct object {{meli lala}}, so only the verb form works.",
            "Because the sentence is negative, and {{du-}} cannot follow a negative.",
            "Because {{lala}} is an intransitive verb that never takes an object.",
            "Because {{amusane}} requires an infinitive before it.",
            "Because {{du-}} may only be prefixed to nouns, not to verbs."
          ],
          "correct": 0,
          "explanation": "With a direct object the phrase is a verb phrase, so the infinitive is required: {{Mi suki na lala meli lala}}."
        },
        {
          "id": "nuance-ing-3",
          "type": "mcq",
          "prompt": "Which compound names a bag for sleeping?",
          "options": [
            "{{somnobao}}",
            "baosomno",
            "{{somnoya}}",
            "banyobao",
            "{{dusomno}}"
          ],
          "correct": 0,
          "explanation": "The head noun is {{bao}}, so the qualifier comes first: {{somnobao}}. The suffix {{-li}} gives the equivalent phrase {{somnoli bao}}."
        },
        {
          "id": "nuance-ing-4",
          "type": "mcq",
          "prompt": "What do {{somnone}} and {{somnobao}} each describe in the passage?",
          "passage": "Somnone meliyen side in kamer. Somnobao side per bistar.",
          "options": [
            "{{Somnone}} describes a person who is sleeping; {{somnobao}} is a compound naming a bag meant for sleeping.",
            "Both describe a person who is asleep at this moment.",
            "{{Somnone}} names an object and {{somnobao}} names a person.",
            "Both are gerunds built with the prefix {{du-}}.",
            "{{Somnone}} is a verb form and {{somnobao}} is a past participle."
          ],
          "correct": 0,
          "explanation": "The {{-ne}} adjective describes what the person is doing now; the compound names the purpose of the object."
        },
        {
          "id": "nuance-ing-5",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: Dancing and singing are fun.",
          "answer": "Dudanse ji dulala sen amusane.",
          "accept": [
            "Na danse ji na lala sen amusane."
          ],
          "explanation": "A gerund used as a subject takes {{du-}}, and the two gerunds are joined with {{ji}}."
        },
        {
          "id": "nuance-ing-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Te le sungay janu fe na danse}}.",
          "answer": "She hurt her knee dancing.",
          "accept": [
            "She hurt her knee while dancing."
          ],
          "explanation": "{{fe na}} plus a predicate expresses the -ing clause attached to the main verb."
        },
        {
          "id": "nuance-ing-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: Singing beautiful songs is fun.",
          "answer": "Na lala meli lala sen amusane.",
          "accept": [],
          "explanation": "Because {{meli lala}} is a direct object, the idiomatic form is the infinitive {{na lala}}, not {{dulala}}."
        },
        {
          "id": "nuance-ing-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Te sen}} yampul {{fe na le yam total pitza}}.",
          "answer": "She is full, having eaten a whole pizza.",
          "accept": [
            "She is full because she ate a whole pizza."
          ],
          "explanation": "{{fe na le}} marks a perfect participial clause: the eating happened before the state of being full."
        },
        {
          "id": "nuance-ing-9",
          "type": "fill",
          "prompt": "Add the prefix that turns the verb into a gerund noun: ___{{lala sen amusane}}.",
          "blanks": [
            {
              "answer": "du",
              "accept": []
            }
          ],
          "explanation": "{{Dulala}} (singing) is the gerund noun formed with {{du-}}.",
          "gloss": "Singing is fun."
        },
        {
          "id": "nuance-ing-10",
          "type": "fill",
          "prompt": "Complete the participial clause: {{Te le yao labya fe}} ___ {{yam pitza}}.",
          "blanks": [
            {
              "answer": "na",
              "accept": []
            }
          ],
          "explanation": "The present participial clause is {{fe na}} plus the predicate, so the missing word is {{na}}.",
          "gloss": "She bit her lip eating pizza."
        }
      ]
    },
    {
      "id": "nuance-number",
      "area": "nuances",
      "title": "One, some, or just the root",
      "blurb": "Globasa does not mark plural; {{plu, un}}, and {{ban}} appear only when the number really carries meaning.",
      "refs": [
        "Author notes: Singularity vs plurality",
        "Grammar pp. 12–19"
      ],
      "notes": [
        "The bare root is the default. On first mention it reads as singular; afterwards it may be singular or plural, decided by context: {{Plu prince pala in kastilo}}. {{Prince no ogar in kastilo}}.",
        "{{plu}} means multiple and appears only when plurality matters. {{ban}} is number-neutral, and {{ban plu}} makes the plural explicit: {{Ban insan abil na bon fale hinto, banete no abil}}.",
        "{{un}} means 'one, a certain one' rather than an obligatory indefinite article: {{Un din, mi le loga tas te satiya}}.",
        "For a general collective English uses the plural and Globasa keeps the bare root: {{Mi suki historili novela}}, but {{Mi le kari plu historili novela}}."
      ],
      "examples": [
        [
          "Plu prince pala in kastilo.",
          "Some princes were speaking in a castle."
        ],
        [
          "Prince no ogar in kastilo.",
          "The princes did not live in the castle."
        ],
        [
          "Mi suki historili novela.",
          "I like historical novels."
        ],
        [
          "Mi le kari plu historili novela.",
          "I bought some historical novels."
        ]
      ],
      "exercises": [
        {
          "id": "nuance-number-1",
          "type": "mcq",
          "prompt": "Why does the second sentence use {{prince}} without {{plu}}?",
          "passage": "Plu prince le pala in kastilo. Prince no le ogar in kastilo. Fe fato, plu prince le ata of teli loka.",
          "options": [
            "Because it refers back to the princes already introduced, so the number need not be repeated.",
            "Because the second sentence speaks of only one prince.",
            "Because {{plu}} may only appear in the first sentence of a text.",
            "Because {{ogar}} is intransitive and blocks any plural marking.",
            "Because prince became a proper noun in the second sentence."
          ],
          "correct": 0,
          "explanation": "Once a plural count noun is established, the bare root refers back to the same set. {{plu}} returns at the end only to say 'some of the princes'."
        },
        {
          "id": "nuance-number-2",
          "type": "mcq",
          "prompt": "Why does only the second sentence take {{plu}}?",
          "passage": "Mi suki historili novela. Mi le kari plu historili novela.",
          "options": [
            "Because the first sentence speaks of novels as a general collective and the second of specific copies bought.",
            "Because the first sentence is negative and negative sentences never take {{plu}}.",
            "Because {{kari}} is a verb of motion and needs a plural object.",
            "Because {{novela}} only becomes a count noun in the past tense.",
            "Because {{plu}} must follow every past-tense verb."
          ],
          "correct": 0,
          "explanation": "A general collective keeps the bare root even where English uses the plural. {{plu}} appears when the sentence is about specific multiple items."
        },
        {
          "id": "nuance-number-3",
          "type": "mcq",
          "prompt": "Which sentence says 'Some people can do this well, some cannot'?",
          "options": [
            "{{Ban insan abil na bon fale hinto, banete no abil.}}",
            "{{Moy insan no abil na bon fale hinto, banete abil.}}",
            "{{Un insan abil na bon fale hinto, un banete no abil.}}",
            "{{Plu insan abil na bon fale hinto, plu banete no abil.}}",
            "{{Nilte abil na bon fale hinto, moy insan no abil.}}"
          ],
          "correct": 0,
          "explanation": "{{ban}} is number-neutral ('some'), and {{banete}} is the animate pronoun 'some of them'. {{un}} would mean 'a certain one'."
        },
        {
          "id": "nuance-number-4",
          "type": "mcq",
          "prompt": "Which rendering of 'One day, I told him the truth' follows the author's guideline?",
          "options": [
            "{{Un din, mi le loga tas te satiya.}}",
            "{{Plu din, mi le loga tas te satiya.}}",
            "{{Moy din, mi le loga tas te satiya.}}",
            "{{Ban plu din, mi le loga tas te satiya.}}",
            "{{Nil din, mi le loga tas te satiya.}}"
          ],
          "correct": 0,
          "explanation": "{{un}} marks 'one, a certain one' without adding a word, so {{un din}} is the recommended way to say 'one day'."
        },
        {
          "id": "nuance-number-5",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: Some days I wake up late.",
          "answer": "Ban din, mi jagecu dyer.",
          "accept": [
            "Plu din, mi jagecu dyer."
          ],
          "explanation": "An habitual plural needs no {{plu}}: the present verb already shows that the situation repeats."
        },
        {
          "id": "nuance-number-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Prince no ogar in kastilo}}.",
          "answer": "The princes did not live in the castle.",
          "accept": [
            "The prince did not live in the castle."
          ],
          "explanation": "With no number word the root refers back to the princes already mentioned; the context decides."
        },
        {
          "id": "nuance-number-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: I like historical novels.",
          "answer": "Mi suki historili novela.",
          "accept": [],
          "explanation": "A general collective takes the bare root, with no {{plu}}."
        },
        {
          "id": "nuance-number-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Mi le kari plu historili novela}}.",
          "answer": "I bought some historical novels.",
          "accept": [
            "I bought several historical novels."
          ],
          "explanation": "Here {{plu}} is meaningful: specific multiple copies were bought."
        },
        {
          "id": "nuance-number-9",
          "type": "fill",
          "prompt": "Complete with the word that marks a real plural on first mention: ___ {{kargux ogar in hin jarden}}.",
          "blanks": [
            {
              "answer": "Plu",
              "accept": []
            }
          ],
          "explanation": "A first mention of several rabbits needs {{plu}} because the number matters.",
          "gloss": "Several rabbits live in this garden."
        },
        {
          "id": "nuance-number-10",
          "type": "fill",
          "prompt": "Complete with the number that means 'a certain one': ___ {{din, mi xa loga tas te satiya}}.",
          "blanks": [
            {
              "answer": "Un",
              "accept": []
            }
          ],
          "explanation": "{{un din}} means 'one day, a certain day' without adding an extra word.",
          "gloss": "One day, I will tell him the truth."
        }
      ]
    },
    {
      "id": "nuance-state",
      "area": "nuances",
      "title": "States, results, and passives",
      "blurb": "{{sen}} X-do describes a state; be-X describes an event. {{-pul}} and {{-do}} split inherent states from caused ones.",
      "refs": [
        "Author notes: Stative vs passive",
        "Grammar pp. 16–19"
      ],
      "notes": [
        "{{sen}} plus X-do is a state, be-X is the passive event: {{Dwer le sen klosido fe satu}} 7 means it was in a closed state, while {{Dwer le beklosi fe satu}} 7 means somebody closed it.",
        "Two tests find the passive: if English 'got' fits, or if an agent with {{fal}} can be added, use {{be-}}. {{Dwer le beklosi fal kwanliyen}}.",
        "X-do means 'which has been X-ed' ({{yongudo mobil}}); be-X-ne means 'which is being X-ed' ({{mobil}} beyongune {{fal misu gami}}).",
        "Verbs of state behave like verbs of feeling: {{Mi pilo}} equals {{Mi sen pilopul}}, and {{To xorbardi}} equals {{To sencu bardipul}}. {{-pul}} is a state with no stated cause, {{-do}} a state caused by something."
      ],
      "examples": [
        [
          "Dwer le sen klosido fe satu 7.",
          "The door was closed at 7 o'clock. (state)"
        ],
        [
          "Dwer le beklosi fe satu 7.",
          "The door was closed at 7 o'clock. (passive)"
        ],
        [
          "Mi le kari yongudo mobil.",
          "I bought a used car."
        ],
        [
          "To xorbardi.",
          "It gets cold."
        ]
      ],
      "exercises": [
        {
          "id": "nuance-state-1",
          "type": "mcq",
          "prompt": "What does the passage contrast?",
          "passage": "Dwer le sen klosido fe satu 7. Dwer le beklosi fe satu 7.",
          "options": [
            "A resulting state in the first sentence and a passive event in the second.",
            "Two passive events with different agents.",
            "A habit in the first sentence and a future action in the second.",
            "An intransitive verb in the first sentence and a noun in the second.",
            "Two equally good translations of the same stative sentence."
          ],
          "correct": 0,
          "explanation": "{{sen klosido}} reports the state of the door; {{beklosi}} reports the event with an implied agent."
        },
        {
          "id": "nuance-state-2",
          "type": "mcq",
          "prompt": "Why does the first sentence use {{pilodo}} and the second {{pilopul}}?",
          "passage": "Mi sen pilodo xafe lungo ergo. Mi sen pilopul hinwatu.",
          "options": [
            "The tiredness has a stated cause in the first sentence and none in the second.",
            "The first sentence is passive and the second is active.",
            "{{pilodo}} is a verb and {{pilopul}} is a noun.",
            "The first sentence is past and the second is present.",
            "{{pilodo}} may only follow a copula and never another verb."
          ],
          "correct": 0,
          "explanation": "{{-do}} marks a state brought about by something identifiable; {{-pul}} marks a state with no particular cause."
        },
        {
          "id": "nuance-state-3",
          "type": "mcq",
          "prompt": "Which sentence says 'The car used by my wife is new'?",
          "options": [
            "{{Mobil beyongune fal misu gami sen neo.}}",
            "{{Mobil yongudo fal misu gami sen neo.}}",
            "{{Mobil le yongu fal misu gami sen neo.}}",
            "{{Mobil sen yongu fal misu gami neo.}}",
            "{{Mobil yongune sen neo fal misu gami.}}"
          ],
          "correct": 0,
          "explanation": "be-X-ne means 'which is being X-ed', and {{fal}} marks the agent."
        },
        {
          "id": "nuance-state-4",
          "type": "mcq",
          "prompt": "Which sentence says 'The door was open at 7 o'clock'?",
          "options": [
            "{{Dwer le sen bukado fe satu 7.}}",
            "{{Dwer le bebuka fe satu 7.}}",
            "{{Dwer le buka fe satu 7.}}",
            "{{Dwer le sen bebuka fe satu 7.}}",
            "{{Dwer le bukacu fe satu 7.}}"
          ],
          "correct": 0,
          "explanation": "{{bukado}} is the state ('open'); {{bebuka}} is the passive event ('was opened')."
        },
        {
          "id": "nuance-state-5",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: The door was closed at 7 o'clock (passive).",
          "answer": "Dwer le beklosi fe satu 7.",
          "accept": [],
          "explanation": "An agent could be added with {{fal}}, so this is the passive {{be-}} form."
        },
        {
          "id": "nuance-state-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Mobil}} beyongune {{fal misu gami sen neo}}.",
          "answer": "The car used by my wife is new.",
          "accept": [
            "The car being used by my wife is new."
          ],
          "explanation": "beyongune is 'which is used or being used', with {{fal}} introducing the agent."
        },
        {
          "id": "nuance-state-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: It gets cold.",
          "answer": "To xorbardi.",
          "accept": [
            "To sencu bardipul.",
            "To xorsen bardipul."
          ],
          "explanation": "Becoming cold is {{xor-}} or sen-cu plus the state adjective; the root {{bardi}} alone would mean 'be cold'."
        },
        {
          "id": "nuance-state-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Te cinon}}.",
          "answer": "He is intelligent.",
          "accept": [
            "He has intelligence."
          ],
          "explanation": "Verbs of state work like verbs of feeling: {{Te cinon}} equals {{Te sen cinonpul}}."
        },
        {
          "id": "nuance-state-9",
          "type": "fill",
          "prompt": "Complete the result adjective: {{Mi le kari}} ___do {{mobil}}.",
          "blanks": [
            {
              "answer": "yongu",
              "accept": []
            }
          ],
          "explanation": "{{yongudo}} means 'which has been used'.",
          "gloss": "I bought a used car."
        },
        {
          "id": "nuance-state-10",
          "type": "fill",
          "prompt": "Complete with the adjective meaning 'which is being used': {{Mobil}} ___ {{fal misu gami sen neo}}.",
          "blanks": [
            {
              "answer": "beyongune",
              "accept": []
            }
          ],
          "explanation": "The {{be-}} + root + {{-ne}} circumfix marks something still undergoing the action.",
          "gloss": "The car used by my wife is new."
        }
      ]
    },
    {
      "id": "nuance-derivation",
      "area": "nuances",
      "title": "Causatives, -gi/-cu, and echo verbs",
      "blurb": "How {{-gi}} and {{-cu}} change who acts, and why {{lilhaha}} still counts as transitive.",
      "refs": [
        "Author notes: -gi and -cu with ambitransitive verbs",
        "Grammar pp. 82–94"
      ],
      "notes": [
        "With non-agentive and motion verbs, {{-gi}} makes the meaning causative: {{kasiru}} (to break) versus {{kasirugi}} (to cause to break).",
        "Noun-only roots need {{-gi}} and {{-cu}} for 'turn into X' and 'become X': teogi and teocu, {{fosilgi}} and {{fosilcu}}.",
        "Placement keeps the preposition and adds {{-gi or -cu}}: {{inbotelagi}} (to bottle), {{inlabascu}} (to get dressed), {{pergeocu}} (to land), {{exdexagi}} (to exile).",
        "Echo-object verbs repeat a qualifying noun or root in the object slot and stay transitive: {{na lala lala, daypawbu}} (sprint), {{lilhaha}} (giggle), {{innafasu}} (inhale). Prefixes of direction such as {{fron-}} and {{xor-}} make the verb intransitive instead: {{fronkadam, xorfley}}."
      ],
      "examples": [
        [
          "Mi le inbotelagi sui.",
          "I bottled the water."
        ],
        [
          "Te le inlabascu.",
          "He got dressed."
        ],
        [
          "Te le lilhaha.",
          "She giggled."
        ],
        [
          "Te le kasirugi janela.",
          "He caused the window to break."
        ]
      ],
      "exercises": [
        {
          "id": "nuance-derivation-1",
          "type": "mcq",
          "prompt": "What does {{-gi}} add in the second sentence?",
          "passage": "Janela le kasiru fal mi. Te le kasirugi janela.",
          "options": [
            "It marks the action as caused, so the subject deliberately brings the breaking about.",
            "It marks the action as passive, with no agent at all.",
            "It turns the verb into a noun meaning 'breakage'.",
            "It marks the action as habitual rather than single.",
            "It turns the verb into a verb of feeling."
          ],
          "correct": 0,
          "explanation": "With non-agentive verbs, the root is already transitive, so {{-gi}} adds the causative reading: to cause to break."
        },
        {
          "id": "nuance-derivation-2",
          "type": "mcq",
          "prompt": "Why do both verbs carry a preposition and {{-gi or -cu}}?",
          "passage": "Mi le inlabascu. Mi le inbotelagi sui.",
          "options": [
            "Because placement verbs keep the preposition and add {{-gi or -cu}} for 'put into' and 'get into'.",
            "Because {{in-}} is a mood particle that requires {{-gi}} on the verb.",
            "Because {{labas}} and {{botela}} are noun-only roots.",
            "Because both verbs are echo-object verbs.",
            "Because both sentences are in the past tense."
          ],
          "correct": 0,
          "explanation": "{{in-}} alone would be read as 'inner', as in {{exdexayen}}, so the placement meaning needs the affixes: {{inbotelagi, inlabascu}}."
        },
        {
          "id": "nuance-derivation-3",
          "type": "mcq",
          "prompt": "Which form means 'to cause somebody to laugh'?",
          "options": [
            "{{Na hahagi bante.}}",
            "{{Na haha bante.}}",
            "{{Na hahacu bante.}}",
            "{{Na behaha bante.}}",
            "{{Na hahayen bante.}}"
          ],
          "correct": 0,
          "explanation": "For echo-object verbs {{-gi}} is obligatory when a causer is added: {{na hahagi bante}}."
        },
        {
          "id": "nuance-derivation-4",
          "type": "mcq",
          "prompt": "Which derived verb is intransitive, unlike its root?",
          "options": [
            "{{fronkadam}}, because a prefix of direction changes the verb's transitivity.",
            "{{innafasu}}, because {{in-}} marks a container.",
            "{{daypawbu}}, because {{day-}} is a degree prefix.",
            "{{lilhaha}}, because {{lil-}} makes the action small.",
            "ayse-eskeyti, because the first element is a noun."
          ],
          "correct": 0,
          "explanation": "A qualifying root keeps the echo-object pattern, but directional prefixes such as {{fron-, xor-}}, and {{fin-}} make the verb intransitive."
        },
        {
          "id": "nuance-derivation-5",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: I bottled the water.",
          "answer": "Mi le inbotelagi sui.",
          "accept": [],
          "explanation": "Placement of a substance needs {{in-}} plus the container plus {{-gi}}: {{inbotelagi}}."
        },
        {
          "id": "nuance-derivation-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Te le inlabascu}}.",
          "answer": "He got dressed.",
          "accept": [
            "He dressed himself.",
            "She got dressed."
          ],
          "explanation": "The {{-cu}} form marks 'get into' clothing, the intransitive side of the placement verb."
        },
        {
          "id": "nuance-derivation-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: She giggled.",
          "answer": "Te le lilhaha.",
          "accept": [],
          "explanation": "{{lilhaha}} is a derived echo-object verb: a type of laugh."
        },
        {
          "id": "nuance-derivation-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Te le kasirugi janela}}.",
          "answer": "He caused the window to break.",
          "accept": [
            "He made the window break."
          ],
          "explanation": "{{kasirugi}} is the causative derivation of {{kasiru}}."
        },
        {
          "id": "nuance-derivation-9",
          "type": "fill",
          "prompt": "Add the causative suffix that means 'to cause to break': {{kasiru}}___.",
          "blanks": [
            {
              "answer": "gi",
              "accept": []
            }
          ],
          "explanation": "{{kasirugi}} means to cause to break; the {{-gi}} suffix marks the causative.",
          "gloss": "To cause to break."
        },
        {
          "id": "nuance-derivation-10",
          "type": "fill",
          "prompt": "Complete with the verb for 'to land': {{Te le}} ___.",
          "blanks": [
            {
              "answer": "pergeocu",
              "accept": []
            }
          ],
          "explanation": "{{pergeocu}} is the {{-cu}} placement verb meaning to land, parallel to {{ofgeocu}} (to take off).",
          "gloss": "It landed."
        }
      ]
    },
    {
      "id": "nuance-that",
      "area": "nuances",
      "title": "That-clauses: ki, feki, hu",
      "blurb": "English 'that' splits into four Globasa words, and choosing the wrong one changes the sentence.",
      "refs": [
        "Author notes: (fe)ki and (fe folo) ki",
        "Grammar pp. 68–72"
      ],
      "notes": [
        "{{ki}} introduces complement clauses: {{Mi jixi ki yu nilwatu bimarcu}}. It can also front as a subject: {{Ki yu nilwatu bimarcu sen imanunenible}}.",
        "{{hu}} belongs to relative clauses only, where it describes a noun: {{Te sen nini hu da nilwatu bimarcu}}.",
        "{{feki}} marks appositive clauses and can always be simplified to {{ki}}: {{Mi no suki idey feki mi finikal ergo}}.",
        "The resultative conjunction is ({{fe folo}}) {{ki}}, usually after {{daydenmo}}: {{Te sen daydenmo bala}} ({{fe folo}}) {{ki te abil na lifti mobil}}. {{fe folo ki}} on its own means 'as a consequence of' and points at the cause."
      ],
      "examples": [
        [
          "Mi jixi ki yu nilwatu bimarcu.",
          "I know that you never get sick."
        ],
        [
          "Te sen nini hu da nilwatu bimarcu.",
          "He's the boy who never gets sick."
        ],
        [
          "Mi no suki idey feki mi finikal ergo.",
          "I don't like the idea that I work endlessly."
        ],
        [
          "Te sen daydenmo bala fe folo ki te abil na lifti mobil.",
          "He's so strong that he can lift a car."
        ]
      ],
      "exercises": [
        {
          "id": "nuance-that-1",
          "type": "mcq",
          "prompt": "Why does the first sentence use {{ki}} and the second {{hu}}?",
          "passage": "Mi jixi ki yu nilwatu bimarcu. Te sen nini hu da nilwatu bimarcu.",
          "options": [
            "The first clause is the object of {{jixi}}, so it is a complement; the second describes {{nini}}, so it is relative.",
            "The first clause is relative and the second is a complement.",
            "{{ki}} is used for animate subjects and {{hu}} for inanimate ones.",
            "{{ki}} marks a question and {{hu}} marks a statement.",
            "{{hu}} is the past-tense form of {{ki}}."
          ],
          "correct": 0,
          "explanation": "{{ki}} follows verbs such as {{jixi}} and takes a whole clause; {{hu}} attaches to a noun and needs the resumptive {{da}}."
        },
        {
          "id": "nuance-that-2",
          "type": "mcq",
          "prompt": "What does each conjunction point at in the passage?",
          "passage": "Fe folo ki mi le sen bimar, mi le no idi cel ergo. Mi le sen daydenmo bimar ki (, fe folo,) mi le no idi cel ergo.",
          "options": [
            "{{fe folo ki}} points at the cause, the illness; {{ki}} (, {{fe folo}},) points at the effect, missing work.",
            "Both point at the effect, and the comma is only cosmetic.",
            "{{fe folo ki}} points at the effect and {{ki}} points at the cause.",
            "Both are relative pronouns describing {{bimar}}.",
            "Both mark a question about work."
          ],
          "correct": 0,
          "explanation": "{{fe folo ki}} mirrors {{fe folo fe}} and takes the cause, while {{ki}} (, {{fe folo}},) introduces the result of the degree clause."
        },
        {
          "id": "nuance-that-3",
          "type": "mcq",
          "prompt": "Which sentence marks the appositive clause correctly?",
          "options": [
            "{{Mi no suki idey feki mi finikal ergo.}}",
            "{{Mi no suki feki idey mi finikal ergo.}}",
            "{{Mi no suki idey fe folo mi finikal ergo.}}",
            "{{Mi no suki idey hu mi finikal ergo da.}}",
            "{{Mi no suki idey ki hu mi finikal ergo.}}"
          ],
          "correct": 0,
          "explanation": "{{feki}} introduces the clause that spells out what the idea is; ({{fe}}){{ki}} would also be acceptable here."
        },
        {
          "id": "nuance-that-4",
          "type": "mcq",
          "prompt": "Which sentence says 'That you never get sick is incredible'?",
          "options": [
            "{{Ki yu nilwatu bimarcu sen imanunenible.}}",
            "{{Hu yu nilwatu bimarcu sen imanunenible.}}",
            "{{Feki yu nilwatu bimarcu sen imanunenible.}}",
            "{{Ki yu nilwatu bimarcu le imanunenible sen.}}",
            "{{Yu nilwatu bimarcu ki sen imanunenible.}}"
          ],
          "correct": 0,
          "explanation": "A complement clause can stand as the subject with {{ki}}, without the extraposition to {{sen imanunenible ki}} ..."
        },
        {
          "id": "nuance-that-5",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: I know that you never get sick.",
          "answer": "Mi jixi ki yu nilwatu bimarcu.",
          "accept": [],
          "explanation": "The clause after a verb of knowing is a complement, so it takes {{ki}}."
        },
        {
          "id": "nuance-that-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Te sen nini hu da nilwatu bimarcu}}.",
          "answer": "He's the boy who never gets sick.",
          "accept": [
            "He is the boy who never gets sick.",
            "He's the boy that never gets sick."
          ],
          "explanation": "{{hu}} plus resumptive {{da}} marks the relative clause describing {{nini}}."
        },
        {
          "id": "nuance-that-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: That you never get sick is incredible.",
          "answer": "Ki yu nilwatu bimarcu sen imanunenible.",
          "accept": [
            "To sen imanunenible ki yu nilwatu bimarcu."
          ],
          "explanation": "The ki-clause can be the subject, or move to the end with the placeholder to."
        },
        {
          "id": "nuance-that-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Te sen daydenmo bala fe folo ki te abil na lifti mobil}}.",
          "answer": "He's so strong that he can lift a car.",
          "accept": [
            "He is so strong that he can lift a car."
          ],
          "explanation": "{{daydenmo}} pairs with the resultative ({{fe folo}}) {{ki}}."
        },
        {
          "id": "nuance-that-9",
          "type": "fill",
          "prompt": "Complete with the conjunction for a complement clause: {{Mi jixi}} ___ {{yu nilwatu bimarcu}}.",
          "blanks": [
            {
              "answer": "ki",
              "accept": []
            }
          ],
          "explanation": "{{jixi}} takes a ki-clause as its object.",
          "gloss": "I know that you never get sick."
        },
        {
          "id": "nuance-that-10",
          "type": "fill",
          "prompt": "Complete with the appositive marker: {{Mi no suki idey}} ___ {{mi finikal ergo}}.",
          "blanks": [
            {
              "answer": "feki",
              "accept": [
                "ki"
              ]
            }
          ],
          "explanation": "{{feki}} spells out the content of {{idey}}; the simpler {{ki}} is also allowed.",
          "gloss": "I don't like the idea that I work endlessly."
        }
      ]
    },
    {
      "id": "nuance-where",
      "area": "nuances",
      "title": "Where: hu denloka vs denloka hu",
      "blurb": "The same two words in the other order decide whether you live in churches or in a town.",
      "refs": [
        "Author notes: denloka hu vs hu denloka",
        "Grammar pp. 68–72"
      ],
      "notes": [
        "{{hu denloka}} (or {{hu in da}}) is a relative clause that describes the noun just before it: {{Hay multi dinidom hu denloka ren lala ji danse}}.",
        "{{denloka hu}} is a subordinate clause and does not modify the preceding noun: {{Hay multi dinidom denloka hu mi ogar}}.",
        "Only the subordinate clause can move to the front: {{Denloka hu mi ogar, hay multi dinidom}}.",
        "Swapping the two changes the claim: {{Hay multi dinidom hu denloka mi ogar}} says that you live in churches."
      ],
      "examples": [
        [
          "Hay multi dinidom hu denloka ren lala ji danse.",
          "There are many churches where people sing and dance."
        ],
        [
          "Hay multi dinidom denloka hu mi ogar.",
          "There are many churches where I live."
        ],
        [
          "Denloka hu mi ogar, hay multi dinidom.",
          "Where I live, there are many churches."
        ],
        [
          "Denloka hu ren lala ji danse, hay multi dinidom.",
          "Where people sing and dance, there are many churches."
        ]
      ],
      "exercises": [
        {
          "id": "nuance-where-1",
          "type": "mcq",
          "prompt": "Which clause describes the churches?",
          "passage": "Hay multi dinidom hu denloka ren lala ji danse. Hay multi dinidom denloka hu mi ogar.",
          "options": [
            "The first one, because {{hu denloka}} is a relative clause attached to {{dinidom}}.",
            "The second one, because {{denloka hu}} is a relative clause attached to {{dinidom}}.",
            "Both of them, since the two orders mean the same thing.",
            "Neither, because both are subordinate clauses.",
            "The second one, because it names a place."
          ],
          "correct": 0,
          "explanation": "{{hu denloka}} (= {{hu in da}}) modifies {{dinidom}}, so the singing and dancing happen in the churches."
        },
        {
          "id": "nuance-where-2",
          "type": "mcq",
          "prompt": "What does the contrast in the passage show?",
          "passage": "Denloka hu mi ogar, hay multi dinidom. Hay multi dinidom hu denloka mi ogar.",
          "options": [
            "The subordinate clause can move to the front, but with {{hu denloka}} the sentence claims I live in churches.",
            "Both sentences mean that I live in a town with many churches.",
            "Both sentences are ungrammatical, because the order is fixed.",
            "The relative clause can move to the front, but the subordinate cannot.",
            "Moving the clause to the front turns the sentence into a question."
          ],
          "correct": 0,
          "explanation": "Only subordinate clauses can be fronted, and {{hu denloka}} binds to the noun before it, so the meaning changes completely."
        },
        {
          "id": "nuance-where-3",
          "type": "mcq",
          "prompt": "Which sentence says 'In the place where I live, there are many churches'?",
          "options": [
            "{{Denloka hu mi ogar, hay multi dinidom.}}",
            "{{Hu denloka mi ogar, hay multi dinidom.}}",
            "{{Hay multi dinidom hu denloka mi ogar.}}",
            "{{Hay multi dinidom denloka hu ogar mi.}}",
            "{{Mi ogar denloka hu hay multi dinidom.}}"
          ],
          "correct": 0,
          "explanation": "The subordinate clause {{denloka hu mi ogar}} can move to the front and leaves the churches undescribed."
        },
        {
          "id": "nuance-where-4",
          "type": "mcq",
          "prompt": "Which sentence says 'There are many churches in which people sing and dance'?",
          "options": [
            "{{Hay multi dinidom hu denloka ren lala ji danse.}}",
            "{{Hay multi dinidom denloka hu ren lala ji danse.}}",
            "{{Denloka hu ren lala ji danse hay multi dinidom.}}",
            "{{Hay multi dinidom hu ren lala ji danse denloka.}}",
            "{{Ren lala ji danse hu denloka hay multi dinidom.}}"
          ],
          "correct": 0,
          "explanation": "{{hu denloka}}, like {{hu in da}}, makes the clause relative to {{dinidom}}."
        },
        {
          "id": "nuance-where-5",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: There are many churches where I live.",
          "answer": "Hay multi dinidom denloka hu mi ogar.",
          "accept": [
            "Denloka hu mi ogar, hay multi dinidom."
          ],
          "explanation": "'Where I live' describes the town, not the churches, so the subordinate {{denloka hu}} is required."
        },
        {
          "id": "nuance-where-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Hay multi dinidom hu denloka ren lala ji danse}}.",
          "answer": "There are many churches where people sing and dance.",
          "accept": [
            "There are many churches in which people sing and dance."
          ],
          "explanation": "{{hu denloka}} makes the clause relative: the singing and dancing happen in the churches."
        },
        {
          "id": "nuance-where-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: Where I live, there are many churches.",
          "answer": "Denloka hu mi ogar, hay multi dinidom.",
          "accept": [],
          "explanation": "A subordinate clause may be moved to the front of the sentence."
        },
        {
          "id": "nuance-where-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Denloka hu ren lala ji danse, hay multi dinidom}}.",
          "answer": "Where people sing and dance, there are many churches.",
          "accept": [
            "In places where people sing and dance, there are many churches."
          ],
          "explanation": "The fronted subordinate clause sets the scene; the churches are simply located there."
        },
        {
          "id": "nuance-where-9",
          "type": "fill",
          "prompt": "Complete the relative clause: {{Hay multi dinidom hu}} ___ {{ren lala ji danse}}.",
          "blanks": [
            {
              "answer": "denloka",
              "accept": []
            }
          ],
          "explanation": "{{hu denloka}} is the relative 'where', equivalent to {{hu in da}}.",
          "gloss": "There are many churches where people sing and dance."
        },
        {
          "id": "nuance-where-10",
          "type": "fill",
          "prompt": "Complete the fronted subordinate clause: ___ {{hu mi ogar, hay multi dinidom}}.",
          "blanks": [
            {
              "answer": "Denloka",
              "accept": []
            }
          ],
          "explanation": "{{denloka hu mi ogar}} is the subordinate clause, and it may open the sentence.",
          "gloss": "Where I live, there are many churches."
        }
      ]
    },
    {
      "id": "nuance-ji",
      "area": "nuances",
      "title": "Parsing long sentences with ji",
      "blurb": "Hearing where a noun phrase ends and a verb phrase begins.",
      "refs": [
        "Author notes: Disambiguating complex sentences with ji",
        "Grammar pp. 30–35"
      ],
      "notes": [
        "After {{ji}} the reader expects a phrase of the same kind. When a noun phrase precedes {{ji}} and a verb follows, mark the new clause.",
        "Adding the subject pronoun is the simplest marker: {{Mama lala meli lala ji te danse}}.",
        "Repeating the verb particle works too, and it signals the switch on its own: {{Mama le lala meli lala ji le danse}}.",
        "Before a brand-new subject, put a comma after {{ji}}, and repeat the preposition when {{ji}} joins two prepositional phrases: {{in bujotul ji in alo loka}}."
      ],
      "examples": [
        [
          "Mama lala meli lala ji te danse.",
          "Mom sings beautiful songs and she dances."
        ],
        [
          "Mama le lala meli lala ji le danse.",
          "Mom sang beautiful songs and danced."
        ],
        [
          "Te lala ji danse.",
          "She sings and dances."
        ],
        [
          "Mi le kari kitabu ji mi le doxo to.",
          "I bought a book and I read it."
        ]
      ],
      "exercises": [
        {
          "id": "nuance-ji-1",
          "type": "mcq",
          "prompt": "Why is {{te}} added in the second clause?",
          "passage": "Mama lala meli lala ji te danse.",
          "options": [
            "Because a noun phrase precedes {{ji}}, so the pronoun marks {{danse}} as a new verb phrase.",
            "Because {{te}} is the direct object of {{danse}}.",
            "Because {{ji}} always requires a pronoun immediately after it.",
            "Because {{danse}} is a noun here and needs a possessive.",
            "Because the sentence would otherwise be in the future tense."
          ],
          "correct": 0,
          "explanation": "{{meli lala}} is a noun phrase, so the reader expects another noun after {{ji}}; {{te}} signals that a verb phrase follows."
        },
        {
          "id": "nuance-ji-2",
          "type": "mcq",
          "prompt": "What does the repeated {{le}} show in the passage?",
          "passage": "Mama le lala meli lala ji le danse.",
          "options": [
            "That the second clause is a verb phrase, so the reader does not expect another noun phrase.",
            "That the second action happened before the first.",
            "That the subject of the second clause is different.",
            "That {{le}} replaces the pronoun {{te}} in every coordinated clause.",
            "That the sentence has become passive."
          ],
          "correct": 0,
          "explanation": "The particle alone is enough to identify the verb phrase, so the pronoun may be dropped."
        },
        {
          "id": "nuance-ji-3",
          "type": "mcq",
          "prompt": "Which version follows the author's style recommendation?",
          "options": [
            "{{Mama lala meli lala ji te danse.}}",
            "{{Mama lala meli lala ji danse.}}",
            "{{Mama lala ji meli lala danse.}}",
            "{{Mama lala meli lala, danse ji.}}",
            "{{Mama ji lala meli lala danse.}}"
          ],
          "correct": 0,
          "explanation": "A bare verb after a noun phrase is the ambiguous case, so the pronoun or the particle is added."
        },
        {
          "id": "nuance-ji-4",
          "type": "mcq",
          "prompt": "When is no marker needed after {{ji}}?",
          "options": [
            "When both sides are already verb phrases, as in {{Te lala ji danse}}.",
            "Never, because {{ji}} always takes a pronoun.",
            "Only in the past tense.",
            "Only when the second verb is a copula.",
            "Only when {{ji}} joins two nouns."
          ],
          "correct": 0,
          "explanation": "The recommendation only applies when the phrase type changes across {{ji}}."
        },
        {
          "id": "nuance-ji-5",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: Mom sings beautiful songs and she dances.",
          "answer": "Mama lala meli lala ji te danse.",
          "accept": [],
          "explanation": "The pronoun after {{ji}} marks the new verb phrase."
        },
        {
          "id": "nuance-ji-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Mama le lala meli lala ji le danse}}.",
          "answer": "Mom sang beautiful songs and danced.",
          "accept": [
            "Mom sang beautiful songs and she danced."
          ],
          "explanation": "The repeated past particle {{le}} carries the switch from noun phrase to verb phrase."
        },
        {
          "id": "nuance-ji-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: She sings and dances.",
          "answer": "Te lala ji danse.",
          "accept": [],
          "explanation": "Both sides are verb phrases, so no marker is needed after {{ji}}."
        },
        {
          "id": "nuance-ji-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Mi le kari kitabu ji mi le doxo to}}.",
          "answer": "I bought a book and I read it.",
          "accept": [
            "I bought a book and read it."
          ],
          "explanation": "{{kitabu}} is a direct object, so the second clause repeats the subject and particle to stay clear."
        },
        {
          "id": "nuance-ji-9",
          "type": "fill",
          "prompt": "Add the marker that shows a new verb phrase: {{Mama lala meli lala ji}} ___ {{danse}}.",
          "blanks": [
            {
              "answer": "te",
              "accept": []
            }
          ],
          "explanation": "The subject pronoun {{te}} marks {{danse}} as the start of a new clause.",
          "gloss": "Mom sings beautiful songs and she dances."
        },
        {
          "id": "nuance-ji-10",
          "type": "fill",
          "prompt": "Add the marker that shows a new verb phrase: {{Mama le lala meli lala ji}} ___ {{danse}}.",
          "blanks": [
            {
              "answer": "le",
              "accept": [
                "te le"
              ]
            }
          ],
          "explanation": "Repeating the past particle {{le}} is enough to signal the verb phrase.",
          "gloss": "Mom sang beautiful songs and danced."
        }
      ]
    },
    {
      "id": "nuance-space",
      "area": "nuances",
      "title": "Where things are: position and sides",
      "blurb": "{{supra, infra, ner, tras}}, and the places built on {{inya, fronta}}, and {{comen}}.",
      "refs": [
        "Author notes: 150 canonical sentences",
        "Grammar pp. 30–35"
      ],
      "notes": [
        "Position words follow the noun and introduce the reference point: {{Kapi sen supra alo mon de jismu}}. {{Peda sen infra alo mon de jismu}}.",
        "{{teli}} and {{ner}} take {{fe}} when they measure distance: {{Baytu sen ner fe nahir}}. {{Kam to sen teli fe hinloka}}?",
        "{{inya, fronta}}, and {{comen}} are nouns of place, so they need {{fe}}: {{Hay koncun fe inya de hin pingo}}. {{Ban insan le sen fe fronta de baytu}}.",
        "Sides use {{comen}} with a possessive: Mary {{le estay fe misu kanan comen}}. {{hinloka, denloka}}, and {{aloloka}} mean here, there, and elsewhere."
      ],
      "examples": [
        [
          "Baytu sen ner fe nahir.",
          "The house is near the river."
        ],
        [
          "Hay koncun fe inya de hin pingo.",
          "There is an insect inside this apple."
        ],
        [
          "Ete ogar tras nahir.",
          "They live across the river."
        ],
        [
          "To le okur aloloka.",
          "It happened somewhere else."
        ]
      ],
      "exercises": [
        {
          "id": "nuance-space-1",
          "type": "mcq",
          "prompt": "What does the passage demonstrate about position words?",
          "passage": "Kapi sen supra alo mon de jismu. Peda sen infra alo mon de jismu.",
          "options": [
            "A position word follows the noun it relates to and comes before the reference point.",
            "A position word must always open the sentence.",
            "{{supra}} and {{infra}} are verbs that take a direct object.",
            "The sentences are passive because of {{supra}} and {{infra}}.",
            "{{alo mon de jismu}} is the subject of both sentences."
          ],
          "correct": 0,
          "explanation": "The order is subject + {{sen}} + position + reference point, with {{alo mon de jismu}} as the phrase being anchored."
        },
        {
          "id": "nuance-space-2",
          "type": "mcq",
          "prompt": "Where were the other people in the passage?",
          "passage": "Ban insan le sen fe fronta de baytu; aloete le sen fe inya.",
          "options": [
            "Inside the house, because {{fe inya}} means 'inside'.",
            "In front of the house, because {{inya}} repeats {{fronta}}.",
            "Across the road, because {{aloete}} implies distance.",
            "On both sides of the house, because of {{fe}}.",
            "Nowhere, because the sentence is negative."
          ],
          "correct": 0,
          "explanation": "{{fe inya de}} X means inside X, contrasting with {{fe fronta de}} X (in front of X)."
        },
        {
          "id": "nuance-space-3",
          "type": "mcq",
          "prompt": "Which sentence says 'It is far above the ground'?",
          "options": [
            "{{To sen teli supra geo.}}",
            "{{To sen teli fe geo.}}",
            "{{To sen supra teli geo.}}",
            "{{To sen fe supra geo teli.}}",
            "{{To sen geo supra teli.}}"
          ],
          "correct": 0,
          "explanation": "{{teli}} measures the distance and {{supra}} gives the position relative to {{geo}}."
        },
        {
          "id": "nuance-space-4",
          "type": "mcq",
          "prompt": "Which sentence says 'Mary was standing on my right-hand side'?",
          "options": [
            "{{Mary le estay fe misu kanan comen.}}",
            "{{Mary le estay fe misu suo comen.}}",
            "{{Mary le estay fe kanan misu comen.}}",
            "{{Mary le estay kanan comen fe misu.}}",
            "{{Mary le kanan estay fe misu comen.}}"
          ],
          "correct": 0,
          "explanation": "The side is expressed as {{fe}} plus a possessive plus {{comen}}: {{fe misu kanan comen}}."
        },
        {
          "id": "nuance-space-5",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: The house is near the river.",
          "answer": "Baytu sen ner fe nahir.",
          "accept": [],
          "explanation": "{{ner}} takes {{fe}} before the reference point."
        },
        {
          "id": "nuance-space-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Hay koncun fe inya de hin pingo}}.",
          "answer": "There is an insect inside this apple.",
          "accept": [
            "There's an insect inside this apple."
          ],
          "explanation": "{{fe inya de}} marks the interior of the apple."
        },
        {
          "id": "nuance-space-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: It didn't happen here. It happened somewhere else.",
          "answer": "To le no okur hinloka. To le okur aloloka.",
          "accept": [],
          "explanation": "{{hinloka, denloka}}, and {{aloloka}} are ready-made place words, so no preposition is needed."
        },
        {
          "id": "nuance-space-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Ete ogar tras nahir}}.",
          "answer": "They live across the river.",
          "accept": [
            "They live on the other side of the river."
          ],
          "explanation": "{{tras}} marks the far side of the reference point."
        },
        {
          "id": "nuance-space-9",
          "type": "fill",
          "prompt": "Complete with the position word for 'below': {{Peda sen}} ___ {{alo mon de jismu}}.",
          "blanks": [
            {
              "answer": "infra",
              "accept": []
            }
          ],
          "explanation": "{{infra}} is the opposite of {{supra}}.",
          "gloss": "The feet are below other parts of the body."
        },
        {
          "id": "nuance-space-10",
          "type": "fill",
          "prompt": "Complete with the position word for 'above': {{To sen teli}} ___ {{geo}}.",
          "blanks": [
            {
              "answer": "supra",
              "accept": []
            }
          ],
          "explanation": "{{supra}} gives the position and {{teli}} measures how far.",
          "gloss": "It is far above the ground."
        }
      ]
    },
    {
      "id": "nuance-time",
      "area": "nuances",
      "title": "Before, after, and when-clauses",
      "blurb": "{{lefe}} and {{xafe}} anchor one event to another; {{denwatu hu}} opens the clause that frames it.",
      "refs": [
        "Author notes: 150 canonical sentences",
        "Grammar pp. 55–63"
      ],
      "notes": [
        "{{lefe}} points to a time before the reference point and {{xafe}} to a time after it: To {{le okur lefe dento}}. To {{le okur xafe dento}}.",
        "{{denwatu hu}} opens a when-clause, while {{denwatu}} alone means 'at that time': {{Denwatu hu moyte somno, mi le fale to}}.",
        "{{dur}} plus a quantity marks duration: {{Te le fikir tem to dur lungo watu}}. {{Kacupa jiwa dur lungo watu}}.",
        "Time adverbs such as {{jaledin, jaxadin, telileli}}, and {{jaleli}} need no preposition: {{Te le awidi jaledin}}."
      ],
      "examples": [
        [
          "To le okur lefe dento.",
          "It happened beforehand."
        ],
        [
          "Denwatu hu moyte somno, mi le fale to.",
          "I did it when everyone was asleep."
        ],
        [
          "Te le fikir tem to dur lungo watu.",
          "She thought about it for a long time."
        ],
        [
          "Te le awidi jaledin.",
          "She left yesterday."
        ]
      ],
      "exercises": [
        {
          "id": "nuance-time-1",
          "type": "mcq",
          "prompt": "Which time relation does each sentence in the passage mark?",
          "passage": "To le okur lefe dento. To le okur xafe dento.",
          "options": [
            "An event before a reference point and an event after it.",
            "Two events that happened at the same moment.",
            "A completed action and an unfinished one.",
            "A habitual action and a single action.",
            "A passive sentence and a stative one."
          ],
          "correct": 0,
          "explanation": "{{lefe}} means before and {{xafe}} after the point named by {{dento}}."
        },
        {
          "id": "nuance-time-2",
          "type": "mcq",
          "prompt": "What does each {{denwatu}} form do in the passage?",
          "passage": "Denwatu hu yu oko estare fe noce, yu ganjon keto? Denwatu, mi le ganjon nilto.",
          "options": [
            "{{denwatu hu}} opens a when-clause, while {{denwatu}} alone means 'at that time'.",
            "Both forms open a when-clause and mean exactly the same thing.",
            "{{denwatu}} alone opens a when-clause and {{denwatu hu}} means 'why'.",
            "Both are question words meaning 'where'.",
            "{{denwatu hu}} introduces a relative clause describing {{estare}}."
          ],
          "correct": 0,
          "explanation": "{{hu}} turns {{denwatu}} into a clause opener; on its own it is an adverb of time."
        },
        {
          "id": "nuance-time-3",
          "type": "mcq",
          "prompt": "Which sentence says 'I did it when everyone was asleep'?",
          "options": [
            "{{Mi le fale to denwatu hu moyte somno.}}",
            "{{Mi le fale to denwatu moyte somno hu.}}",
            "{{Mi le fale to hu denwatu moyte somno.}}",
            "{{Mi le fale to fe denwatu moyte hu somno.}}",
            "{{Mi le fale to denwatu hu somno moyte le.}}"
          ],
          "correct": 0,
          "explanation": "The when-clause is {{denwatu hu}} plus a full predicate: {{moyte somno}}."
        },
        {
          "id": "nuance-time-4",
          "type": "mcq",
          "prompt": "Which sentence says 'She doesn't live here anymore'?",
          "options": [
            "{{Te no haji ogar hinloka.}}",
            "{{Te no haji ogar denloka.}}",
            "{{Te no xali ogar hinloka.}}",
            "{{Te no le haji ogar hinloka.}}",
            "{{Te no ogar haji hinloka.}}"
          ],
          "correct": 0,
          "explanation": "{{haji}} with a negative means 'no longer'; {{xali}} means 'later', which reverses the meaning."
        },
        {
          "id": "nuance-time-5",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: She left yesterday.",
          "answer": "Te le awidi jaledin.",
          "accept": [],
          "explanation": "{{jaledin}} is a time adverb, so it needs no preposition."
        },
        {
          "id": "nuance-time-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Te le fikir tem to dur lungo watu}}.",
          "answer": "She thought about it for a long time.",
          "accept": [
            "She thought about it for a long time.",
            "He thought about it for a long time."
          ],
          "explanation": "{{dur}} marks how long the state or action lasted."
        },
        {
          "id": "nuance-time-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: It happened some time ago.",
          "answer": "To le okur lefe bankwanti watu.",
          "accept": [],
          "explanation": "{{lefe}} plus {{bankwanti watu}} places the event before a vague past point."
        },
        {
          "id": "nuance-time-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Denwatu, mi le ganjon nilto}}.",
          "answer": "At that time, I felt nothing.",
          "accept": [
            "At that time, I didn't feel anything."
          ],
          "explanation": "{{denwatu}} alone is the adverb 'at that time'; {{nilto}} is 'nothing'."
        },
        {
          "id": "nuance-time-9",
          "type": "fill",
          "prompt": "Complete with the word for 'before' a reference point: {{To le okur}} ___ {{dento}}.",
          "blanks": [
            {
              "answer": "lefe",
              "accept": []
            }
          ],
          "explanation": "{{lefe dento}} means before that; {{xafe dento}} would mean after it.",
          "gloss": "It happened beforehand."
        },
        {
          "id": "nuance-time-10",
          "type": "fill",
          "prompt": "Complete with the time adverb for 'yesterday': {{Te le awidi}} ___.",
          "blanks": [
            {
              "answer": "jaledin",
              "accept": []
            }
          ],
          "explanation": "{{jaledin}} already carries the past reference, so only the verb particle {{le}} is needed.",
          "gloss": "She left yesterday."
        }
      ]
    },
    {
      "id": "nuance-manner",
      "area": "nuances",
      "title": "Like this: manner, similarity, degree",
      "blurb": "{{denpul kom, sim kom, hinmaner}}, and the degree words that stack.",
      "refs": [
        "Author notes: 150 canonical sentences",
        "Grammar pp. 42–50"
      ],
      "notes": [
        "{{denpul kom}} compares kinds, while {{sim kom}} compares appearance: {{Te okocu denpul kom sama tipo}}. {{Hinto sen sim kom limon mas to no sen limon}}.",
        "{{hinmaner}} and {{denmaner}} describe the manner of an action: {{Te le danse hinmaner}}.",
        "{{daymo}} intensifies and can be repeated for emphasis: {{To sen daymo daymo teli}}.",
        "{{max, haji}}, and {{ible}} carry 'more', 'still, anymore', and 'maybe' without any extra grammar: {{Mi vole na jixi max}}. {{Te no haji ogar hinloka}}. {{Ible, te xa ata jaxadin}}."
      ],
      "examples": [
        [
          "Te okocu denpul kom sama tipo.",
          "It looks like the same kind."
        ],
        [
          "Hinto sen sim kom limon mas to no sen limon.",
          "This is like a lemon but it is not a lemon."
        ],
        [
          "Estare sen daymo daymo teli.",
          "The stars are very very far."
        ],
        [
          "Mi vole na jixi max.",
          "I want to know more."
        ]
      ],
      "exercises": [
        {
          "id": "nuance-manner-1",
          "type": "mcq",
          "prompt": "What does the repeated {{daymo}} do in the passage?",
          "passage": "To sen daymo bon. Estare sen daymo daymo teli.",
          "options": [
            "It intensifies twice over, giving 'very very' rather than a new grammatical relation.",
            "It turns the adjective into a noun.",
            "It marks the superlative, as in 'the farthest of all'.",
            "It changes {{teli}} into a verb.",
            "It compares the stars with another set of stars."
          ],
          "correct": 0,
          "explanation": "{{daymo}} is an intensifier and can simply be repeated; it does not create a superlative."
        },
        {
          "id": "nuance-manner-2",
          "type": "mcq",
          "prompt": "What does the passage say?",
          "passage": "Hinto sen sim kom limon mas to no sen limon.",
          "options": [
            "It looks like a lemon but it is a different thing.",
            "It is a lemon and also something else.",
            "It is not like a lemon at all.",
            "It is a lemon that does not taste good.",
            "It might become a lemon later."
          ],
          "correct": 0,
          "explanation": "{{sim kom}} compares appearance only, and {{mas}} introduces the contrast: it is not actually a lemon."
        },
        {
          "id": "nuance-manner-3",
          "type": "mcq",
          "prompt": "Which sentence says 'He danced like this'?",
          "options": [
            "{{Te le danse hinmaner.}}",
            "{{Te le danse hinpul.}}",
            "{{Te le danse denpul kom.}}",
            "{{Te le danse hinloka.}}",
            "{{Te le danse fe hinmaner to.}}"
          ],
          "correct": 0,
          "explanation": "{{hinmaner}} is the adverb 'like this, in this manner' and needs no preposition."
        },
        {
          "id": "nuance-manner-4",
          "type": "mcq",
          "prompt": "Which sentence says 'I want one more'?",
          "options": [
            "{{Mi vole un max to.}}",
            "{{Mi vole max un to.}}",
            "{{Mi vole un to max.}}",
            "{{Mi max vole un to.}}",
            "{{Mi vole haji un to.}}"
          ],
          "correct": 0,
          "explanation": "{{max}} follows the quantifier phrase: {{un max to}} means one additional thing."
        },
        {
          "id": "nuance-manner-5",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: This child is not like other children.",
          "answer": "Hin nini no sen denpul kom alo nini.",
          "accept": [],
          "explanation": "{{denpul kom}} compares kinds, here negated."
        },
        {
          "id": "nuance-manner-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Ible, te xa ata jaxadin}}.",
          "answer": "Maybe he will come tomorrow.",
          "accept": [
            "Perhaps he will come tomorrow."
          ],
          "explanation": "{{ible}} is the adverb 'maybe, perhaps', and {{xa}} marks the future."
        },
        {
          "id": "nuance-manner-7",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: I can't do it now, but I can do it later.",
          "answer": "Mi no abil na fale to nunli, mas mi abil na fale to xali.",
          "accept": [],
          "explanation": "{{nunli}} is 'now, currently' and {{xali}} 'later, afterwards'."
        },
        {
          "id": "nuance-manner-8",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Mi daymo multi vole na fale hinto}}.",
          "answer": "I very much want to do this.",
          "accept": [
            "I really want to do this."
          ],
          "explanation": "{{daymo}} multiplies the degree before {{multi}}, giving 'very much'."
        },
        {
          "id": "nuance-manner-9",
          "type": "fill",
          "prompt": "Complete the comparison: {{Hin nini no sen}} ___ {{kom alo nini}}.",
          "blanks": [
            {
              "answer": "denpul",
              "accept": []
            }
          ],
          "explanation": "{{denpul kom}} means 'like, of that kind'.",
          "gloss": "This child is not like other children."
        },
        {
          "id": "nuance-manner-10",
          "type": "fill",
          "prompt": "Complete with the word for 'anymore': {{Te no}} ___ {{ogar hinloka}}.",
          "blanks": [
            {
              "answer": "haji",
              "accept": []
            }
          ],
          "explanation": "{{no haji}} means 'not anymore'.",
          "gloss": "She doesn't live here anymore."
        }
      ]
    },
    {
      "id": "read-s01-balutajozi",
      "area": "reading",
      "title": "Balutajozi — Acorn",
      "blurb": "A tiny squirrel loses his winter store of acorns, searches the forest with his friends, and learns that kindness and teamwork can solve a hard problem.",
      "refs": [
        "Thirty Short Stories — Story 1",
        "Reading practice"
      ],
      "notes": [
        "The narration is mostly in the present, with {{le}} marking the completed loss of the acorns: {{moy tesu balutajozi le awcu}}.",
        "{{-pul}} turns feelings and qualities into adjectives: {{xukrapul}} 'grateful', {{lutufpul}} 'kind'."
      ],
      "examples": [
        [
          "In xantipul drevogeo, daylil sinjabu namedo Espayk ogar.",
          "In a quiet forest, there was a tiny squirrel named Espayk."
        ],
        [
          "Borsuke dishadya balutajozi tas Espayk ji tesu dostetim.",
          "The badger shared the acorns with Espayk and his friends."
        ]
      ],
      "exercises": [
        {
          "id": "read-s01-balutajozi-1",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Espayk's home and appearance in {{Balutajozi}}?",
          "passage": "In xantipul drevogeo, daylil sinjabu namedo Espayk ogar. Espayk hare day brilapul oko ji belonarem koda.",
          "options": [
            "In a quiet forest, there was a tiny squirrel named Espayk.",
            "One morning, Espayk woke up to find that all his acorns were gone.",
            "Espayk decided to search for acorns.",
            "Just as the sun was setting, they found a hidden stash of acorns.",
            "That winter, Espayk and his friends stayed warm and happy, enjoying their acorns together."
          ],
          "correct": 0,
          "explanation": "The passage says {{In xantipul drevogeo, daylil sinjabu namedo Espayk ogar.}} — 'In a quiet forest, there was a tiny squirrel named Espayk.'"
        },
        {
          "id": "read-s01-balutajozi-2",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about why Espayk is worried in {{Balutajozi}}?",
          "passage": "Un soba, Espayk jagecu ji xorjui ki moy tesu balutajozi le awcu. Te oko fe jowey, mas oto sen okoible nilloka. Espayk yolyu.",
          "options": [
            "One morning, Espayk woke up to find that all his acorns were gone.",
            "Winter was coming, and he needed food.",
            "He asked his friends for help.",
            "The badger shared the acorns with Espayk and his friends.",
            "He realized that teamwork and kindness could solve any problem."
          ],
          "correct": 0,
          "explanation": "The passage says {{Un soba, Espayk jagecu ji xorjui ki moy tesu balutajozi le awcu.}} — 'One morning, Espayk woke up to find that all his acorns were gone.'"
        },
        {
          "id": "read-s01-balutajozi-3",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the search for acorns in {{Balutajozi}}?",
          "passage": "Moy piu, kargux ji hirxa toncu ton te in xerca. Ete xerca dur total nuru. Preciso denwatu hu sola infracu, ete ewreka sangudo estoka fe balutajozi.",
          "options": [
            "Just as the sun was setting, they found a hidden stash of acorns.",
            "He loved to collect acorns.",
            "The badger saw Espayk's worry and decided to help.",
            "He and his friends filled their burrows with acorns.",
            "That winter, Espayk and his friends stayed warm and happy, enjoying their acorns together."
          ],
          "correct": 0,
          "explanation": "The passage says {{Preciso denwatu hu sola infracu, ete ewreka sangudo estoka fe balutajozi.}} — 'Just as the sun was setting, they found a hidden stash of acorns.'"
        },
        {
          "id": "read-s01-balutajozi-4",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the badger's help in {{Balutajozi}}?",
          "passage": "Lutufpul lao borsuke le dupul hifazi oto. Borsuke oko yolyu de Espayk, ji te karar na sahay. Borsuke dishadya balutajozi tas Espayk ji tesu dostetim.",
          "options": [
            "The badger shared the acorns with Espayk and his friends.",
            "Winter was coming, and he needed food.",
            "He ran through the forest, looking under bushes and in trees.",
            "They searched all day.",
            "They were ready for winter."
          ],
          "correct": 0,
          "explanation": "The passage says {{Borsuke dishadya balutajozi tas Espayk ji tesu dostetim.}} — 'The badger shared the acorns with Espayk and his friends.'"
        },
        {
          "id": "read-s01-balutajozi-5",
          "type": "mcq",
          "prompt": "In {{Balutajozi}}, what does {{ewreka}} mean?",
          "options": [
            "to find",
            "to lose",
            "to hide",
            "to eat",
            "to share"
          ],
          "correct": 0,
          "explanation": "{{ewreka}} means 'to find'. The story says {{Preciso denwatu hu sola infracu, ete ewreka sangudo estoka fe balutajozi.}} — 'Just as the sun was setting, they found a hidden stash of acorns.'",
          "passage": null
        },
        {
          "id": "read-s01-balutajozi-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Te peti sesu dostetim na sahay.}}",
          "answer": "He asked his friends for help.",
          "accept": [],
          "explanation": "The sentence reads {{Te peti sesu dostetim na sahay.}} — 'He asked his friends for help.' {{peti}} means 'ask', and {{sahay}} is the noun 'help'."
        },
        {
          "id": "read-s01-balutajozi-7",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Borsuke dishadya balutajozi tas Espayk ji tesu dostetim.}}",
          "answer": "The badger shared the acorns with Espayk and his friends.",
          "accept": [],
          "explanation": "The sentence reads {{Borsuke dishadya balutajozi tas Espayk ji tesu dostetim.}} — 'The badger shared the acorns with Espayk and his friends.' {{dishadya}} is 'share'; {{tas}} marks the recipient."
        },
        {
          "id": "read-s01-balutajozi-8",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: Winter was coming, and he needed food.",
          "answer": "Bardimosem nun ata ji te haja yam.",
          "accept": [],
          "explanation": "The sentence reads {{Bardimosem nun ata ji te haja yam.}} — 'Winter was coming, and he needed food.' {{nun}} marks the immediate present, and {{haja}} means 'need'."
        },
        {
          "id": "read-s01-balutajozi-9",
          "type": "fill",
          "prompt": "Un soba, Espayk jagecu ji xorjui ki moy tesu balutajozi ___ awcu.",
          "gloss": "One morning, Espayk woke up to find that all his acorns were gone.",
          "blanks": [
            {
              "answer": "le",
              "accept": []
            }
          ],
          "explanation": "The missing word is {{le}}. {{le}} marks past tense before {{awcu}}."
        },
        {
          "id": "read-s01-balutajozi-10",
          "type": "fill",
          "prompt": "Te ji tesu doste ___ sesu goyuogar ___ balutajozi.",
          "gloss": "He and his friends filled their burrows with acorns.",
          "blanks": [
            {
              "answer": "pulgi",
              "accept": []
            },
            {
              "answer": "yon",
              "accept": []
            }
          ],
          "explanation": "The missing words are {{pulgi}}, {{yon}}. {{pulgi}} is 'fill', and {{yon}} marks the instrument."
        }
      ]
    },
    {
      "id": "read-s03-sofipul-lao-huhu",
      "area": "reading",
      "title": "Sofipul Lao Huhu — The Wise Old Owl",
      "blurb": "A lost mouse asks a wise old owl for help, follows a guiding star home, and discovers that a friend can make the dark forest feel safe.",
      "refs": [
        "Thirty Short Stories — Story 3",
        "Reading practice"
      ],
      "notes": [
        "Direct speech is set off with quotation marks; the reporting verb stays outside the quote: {{te loga}}, {{te swal}}.",
        "The star is described with {{denpul kom}} 'like, of that kind', and {{-pul}} builds adjectives such as {{sofipul}} 'wise'."
      ],
      "examples": [
        [
          "In amiku luminkal drevogeo, hay sofipul lao huhu namedo Oliver.",
          "In a deep, dark forest, there was a wise old owl named Oliver."
        ],
        [
          "Estare sen denpul kom doste, to lumin tesu dao.",
          "The star was like a friend, shining its light on her path."
        ]
      ],
      "exercises": [
        {
          "id": "read-s03-sofipul-lao-huhu-1",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Oliver and his forest in {{Sofipul Lao Huhu}}?",
          "passage": "In amiku luminkal drevogeo, hay sofipul lao huhu namedo Oliver. Oliver ogar in maxim gao drevo ji te jawgu drevogeo.",
          "options": [
            "In a deep, dark forest, there was a wise old owl named Oliver.",
            "She didn't know how to find her home.",
            "Soon, Mili found her way back to her cozy nest.",
            "Mili was grateful for Oliver's help.",
            "From that night, she was never afraid of getting lost."
          ],
          "correct": 0,
          "explanation": "The passage says {{In amiku luminkal drevogeo, hay sofipul lao huhu namedo Oliver.}} — 'In a deep, dark forest, there was a wise old owl named Oliver.'"
        },
        {
          "id": "read-s03-sofipul-lao-huhu-2",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Mili's problem in {{Sofipul Lao Huhu}}?",
          "passage": "Un bardipul axam, lil maux namedo Mili sonxicu. Te ganjon fobido ji bardipul. Te no jixi ku te xa ewreka sesu ogar kemaner.",
          "options": [
            "She didn't know how to find her home.",
            "She climbed up the tree, trembling a little.",
            "He felt kind and wanted to help.",
            "She thanked Oliver and started her journey back home, following the star.",
            "Mili was grateful for Oliver's help."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te no jixi ku te xa ewreka sesu ogar kemaner.}} — 'She didn't know how to find her home.'"
        },
        {
          "id": "read-s03-sofipul-lao-huhu-3",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Oliver's reaction to Mili in {{Sofipul Lao Huhu}}?",
          "passage": "Oliver infraoko hoy lil maux. Te ganjon lutuf ji te vole na sahay.",
          "options": [
            "He felt kind and wanted to help.",
            "One chilly evening, a small mouse named Mili lost her way.",
            "Mili looked up at the star.",
            "The star was like a friend, shining its light on her path.",
            "She knew she had a friend in the wise old owl."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te ganjon lutuf ji te vole na sahay.}} — 'He felt kind and wanted to help.'"
        },
        {
          "id": "read-s03-sofipul-lao-huhu-4",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the star guiding Mili home in {{Sofipul Lao Huhu}}?",
          "passage": "Folki te anda, drevogeo sencu minmo fobine. Estare sen denpul kom doste, to lumin tesu dao. Nerxali, Mili ewreka sesu dao cel sesu konfortane kyota.",
          "options": [
            "Soon, Mili found her way back to her cozy nest.",
            "It was bright and steady.",
            "Mili was grateful for Oliver's help.",
            "From that night, she was never afraid of getting lost.",
            "The forest felt like home, and the stars always guided her."
          ],
          "correct": 0,
          "explanation": "The passage says {{Nerxali, Mili ewreka sesu dao cel sesu konfortane kyota.}} — 'Soon, Mili found her way back to her cozy nest.'"
        },
        {
          "id": "read-s03-sofipul-lao-huhu-5",
          "type": "mcq",
          "prompt": "In {{Sofipul Lao Huhu}}, what does {{fobido}} mean?",
          "options": [
            "scared",
            "angry",
            "tired",
            "hungry",
            "happy"
          ],
          "correct": 0,
          "explanation": "{{fobido}} means 'scared'. The story says {{Te ganjon fobido ji bardipul.}} — 'She felt scared and cold.'",
          "passage": null
        },
        {
          "id": "read-s03-sofipul-lao-huhu-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Mili oko drevo de Oliver, ji te karar na peti sahay.}}",
          "answer": "Mili saw Oliver's tree and decided to ask for help.",
          "accept": [],
          "explanation": "The sentence reads {{Mili oko drevo de Oliver, ji te karar na peti sahay.}} — 'Mili saw Oliver's tree and decided to ask for help.' {{peti sahay}} is 'ask for help'; {{karar na}} introduces the decision."
        },
        {
          "id": "read-s03-sofipul-lao-huhu-7",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Te xukra Oliver ji te xoru sesu dao cel ogar, yon na folo estare.}}",
          "answer": "She thanked Oliver and started her journey back home, following the star.",
          "accept": [],
          "explanation": "The sentence reads {{Te xukra Oliver ji te xoru sesu dao cel ogar, yon na folo estare.}} — 'She thanked Oliver and started her journey back home, following the star.' {{xoru}} means 'begin, start'; {{yon na folo}} gives the means."
        },
        {
          "id": "read-s03-sofipul-lao-huhu-8",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: The star was like a friend, shining its light on her path.",
          "answer": "Estare sen denpul kom doste, to lumin tesu dao.",
          "accept": [],
          "explanation": "The sentence reads {{Estare sen denpul kom doste, to lumin tesu dao.}} — 'The star was like a friend, shining its light on her path.' {{denpul kom}} compares the star to a friend; {{lumin}} is 'shine on'."
        },
        {
          "id": "read-s03-sofipul-lao-huhu-9",
          "type": "fill",
          "prompt": "Te no jixi ku te xa ewreka sesu ogar ___.",
          "gloss": "She didn't know how to find her home.",
          "blanks": [
            {
              "answer": "kemaner",
              "accept": []
            }
          ],
          "explanation": "The missing word is {{kemaner}}. {{kemaner}} means 'how, in what way'."
        },
        {
          "id": "read-s03-sofipul-lao-huhu-10",
          "type": "fill",
          "prompt": "Xorfe den noce, te ___ ___ na sonxicu.",
          "gloss": "From that night, she was never afraid of getting lost.",
          "blanks": [
            {
              "answer": "nilwatu",
              "accept": []
            },
            {
              "answer": "befobi",
              "accept": []
            }
          ],
          "explanation": "The missing words are {{nilwatu}}, {{befobi}}. {{nilwatu}} is 'never', and {{befobi}} is 'be afraid'."
        }
      ]
    },
    {
      "id": "read-s22-okonenabil-piu",
      "area": "reading",
      "title": "Okonenabil piu ji hufax — The Blind Bird and the Bats",
      "blurb": "A blind bird alone in a dark forest learns echolocation from a group of bats and finds friendship, safety, and a new way to see the world.",
      "refs": [
        "Thirty Short Stories — Story 22",
        "Reading practice"
      ],
      "notes": [
        "{{no abil na}} + verb expresses inability: {{te no abil na oko}} 'she cannot see'.",
        "The story names the means with {{yon}} and the purpose with {{cel na}}: {{yongu soti cel na oko}} 'use sound to see'."
      ],
      "examples": [
        [
          "Te no abil na oko, fe folo, to sen katina na fley ji na ewreka yam.",
          "She cannot see, so she finds it hard to fly and find food."
        ],
        [
          "Te jixi ki te no haji sen solo.",
          "She knows she is no longer alone."
        ]
      ],
      "exercises": [
        {
          "id": "read-s22-okonenabil-piu-1",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Wilo's life in the dark forest in {{Okonenabil piu ji hufax}}?",
          "passage": "In luminkal drevogeo, okonenabil piu namedo Wilo jiwa solo. Te no abil na oko, fe folo, to sen katina na fley ji na ewreka yam.",
          "options": [
            "She cannot see, so she finds it hard to fly and find food.",
            "Wilo feels scared but hopeful.",
            "Wilo listens carefully.",
            "They guide her to food and water.",
            "The forest is dark, but Wilo is not afraid."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te no abil na oko, fe folo, to sen katina na fley ji na ewreka yam.}} — 'She cannot see, so she finds it hard to fly and find food.'"
        },
        {
          "id": "read-s22-okonenabil-piu-2",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Eko approaching Wilo in {{Okonenabil piu ji hufax}}?",
          "passage": "Hufax yongu rusoti cel na navi in luminkalya. Lideyen de hufaxlari, namedo Eko, nercu cel Wilo.",
          "options": [
            "The leader of the bats, named Eko, approaches Wilo.",
            "She has never had friends before.",
            "They show her how to use sound to understand her surroundings.",
            "She feels safe and happy with her new friends.",
            "She knows she is no longer alone."
          ],
          "correct": 0,
          "explanation": "The passage says {{Lideyen de hufaxlari, namedo Eko, nercu cel Wilo.}} — 'The leader of the bats, named Eko, approaches Wilo.'"
        },
        {
          "id": "read-s22-okonenabil-piu-3",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about what the bats teach Wilo in {{Okonenabil piu ji hufax}}?",
          "passage": "Hufax alim Wilo na juiore rusoti. Ete onexa tas te na yongu soti cel na aham sesu jowey.",
          "options": [
            "They show her how to use sound to understand her surroundings.",
            "One night, a group of bats hears Wilo's soft cries.",
            "She feels safe and happy with her new friends.",
            "Wilo feels like she belongs.",
            "She flies with the bats, her new family."
          ],
          "correct": 0,
          "explanation": "The passage says {{Ete onexa tas te na yongu soti cel na aham sesu jowey.}} — 'They show her how to use sound to understand her surroundings.'"
        },
        {
          "id": "read-s22-okonenabil-piu-4",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Wilo's new sense of belonging in {{Okonenabil piu ji hufax}}?",
          "passage": "Wilo ganjon termo lumin in se. Te jixi ki te no haji sen solo. Drevogeo sen luminkal, mas Wilo no sen fobipul.",
          "options": [
            "She knows she is no longer alone.",
            "Days pass, and Wilo becomes better at using sound.",
            "They guide her to food and water.",
            "She flies with the bats, her new family.",
            "Together, they navigate the night, using sound to see the world."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te jixi ki te no haji sen solo.}} — 'She knows she is no longer alone.'"
        },
        {
          "id": "read-s22-okonenabil-piu-5",
          "type": "mcq",
          "prompt": "In {{Okonenabil piu ji hufax}}, what does {{ore}} mean?",
          "options": [
            "to hear",
            "to see",
            "to fly",
            "to speak",
            "to help"
          ],
          "correct": 0,
          "explanation": "{{ore}} means 'to hear'. The story says {{Un noce, hufaxlari ore lil wawa de Wilo.}} — 'One night, a group of bats hears Wilo's soft cries.'",
          "passage": null
        },
        {
          "id": "read-s22-okonenabil-piu-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Hufax alim Wilo na juiore rusoti.}}",
          "answer": "The bats teach Wilo how to listen for echoes.",
          "accept": [],
          "explanation": "The sentence reads {{Hufax alim Wilo na juiore rusoti.}} — 'The bats teach Wilo how to listen for echoes.' {{alim}} is 'teach'; {{na juiore}} is 'to listen'."
        },
        {
          "id": "read-s22-okonenabil-piu-7",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Te ganjon anjen ji hox ton sesu neo dostetim.}}",
          "answer": "She feels safe and happy with her new friends.",
          "accept": [],
          "explanation": "The sentence reads {{Te ganjon anjen ji hox ton sesu neo dostetim.}} — 'She feels safe and happy with her new friends.' {{anjen}} means 'safe', and {{ton}} marks accompaniment."
        },
        {
          "id": "read-s22-okonenabil-piu-8",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: Wilo feels like she belongs.",
          "answer": "Wilo ganjon kwas te deya famil.",
          "accept": [],
          "explanation": "The sentence reads {{Wilo ganjon kwas te deya famil.}} — 'Wilo feels like she belongs.' {{ganjon kwas}} is 'feel as if'; {{deya famil}} is 'belong'."
        },
        {
          "id": "read-s22-okonenabil-piu-9",
          "type": "fill",
          "prompt": "Un noce, hufaxlari ___ lil wawa de Wilo.",
          "gloss": "One night, a group of bats hears Wilo's soft cries.",
          "blanks": [
            {
              "answer": "ore",
              "accept": []
            }
          ],
          "explanation": "The missing word is {{ore}}. {{abil na}} + verb expresses ability; here it is negated."
        },
        {
          "id": "read-s22-okonenabil-piu-10",
          "type": "fill",
          "prompt": "Te fley ton hufax fe noce, fe na ___ cel na ___ rusoti.",
          "gloss": "She flies with the bats at night, chirping softly to create echoes.",
          "blanks": [
            {
              "answer": "lilpiusa",
              "accept": []
            },
            {
              "answer": "krea",
              "accept": []
            }
          ],
          "explanation": "The missing words are {{lilpiusa}}, {{krea}}. {{lilpiusa}} is 'chirp softly'; {{krea}} is 'create'."
        }
      ]
    },
    {
      "id": "read-s02-bursolo-lil-megu",
      "area": "reading",
      "title": "Bursolo lil megu — The Lonely Little Cloud",
      "blurb": "A small lonely cloud drifts over a city, delights children with his shapes, and discovers that his presence brings happiness to others.",
      "refs": [
        "Thirty Short Stories — Story 2",
        "Reading practice"
      ],
      "notes": [
        "The comparative uses {{maxmo … kom}}: {{maxmo lil kom alo megu}} 'smaller than the other clouds'.",
        "Relative clauses with {{hu da}} identify people and things: {{insan hu da ajela}} 'people who rush about'."
      ],
      "examples": [
        [
          "Ban mara, gao in asman, hay bursolo lil megu har name Flafi.",
          "Once, high in the sky, there was a lonely little cloud named Flafi."
        ],
        [
          "Te aham ki tesu presen in asman pregi hoxya tas alo ete.",
          "He understood that his presence in the sky brought happiness to others."
        ]
      ],
      "exercises": [
        {
          "id": "read-s02-bursolo-lil-megu-1",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Flafi the little cloud in {{Bursolo lil megu}}?",
          "passage": "Ban mara, gao in asman, hay bursolo lil megu har name Flafi. Flafi sen maxmo lil kom alo megu ji te le moywatu levita solo.",
          "options": [
            "Flafi was smaller than the other clouds and always drifted alone.",
            "Flafi wished he could be part of something exciting.",
            "The children were excited to see a cloud shaped like a bunny.",
            "Everywhere he went, people smiled and pointed at his unique shapes.",
            "He had found his purpose."
          ],
          "correct": 0,
          "explanation": "The passage says {{Flafi sen maxmo lil kom alo megu ji te le moywatu levita solo.}} — 'Flafi was smaller than the other clouds and always drifted alone.'"
        },
        {
          "id": "read-s02-bursolo-lil-megu-2",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about what Flafi sees above the city in {{Bursolo lil megu}}?",
          "passage": "Un solapul din, Flafi levita supra ixgalupul xaher. Of super, te oko insan hu da ajela fe jowey. Ete kwasisen ixgalupul ji hox.",
          "options": [
            "From above, he watched people rushing around.",
            "As Flafi drifted, he saw a group of children playing in a park.",
            "Flafi realized they were pointing at him!",
            "He floated over a beach, a forest, and even a mountain.",
            "From that day, Flafi was never really alone."
          ],
          "correct": 0,
          "explanation": "The passage says {{Of super, te oko insan hu da ajela fe jowey.}} — 'From above, he watched people rushing around.'"
        },
        {
          "id": "read-s02-bursolo-lil-megu-3",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the children in the park in {{Bursolo lil megu}}?",
          "passage": "Ete supraoko ji ixara hoy asman. Flafi levita maxmo ner. Nini sen joxudo kos na oko megu hu da hare figura fe kargux.",
          "options": [
            "The children were excited to see a cloud shaped like a bunny.",
            "They seemed busy and happy.",
            "He felt happy to bring excitement to the children.",
            "Flafi no longer felt lonely.",
            "He understood that his presence in the sky brought happiness to others."
          ],
          "correct": 0,
          "explanation": "The passage says {{Nini sen joxudo kos na oko megu hu da hare figura fe kargux.}} — 'The children were excited to see a cloud shaped like a bunny.'"
        },
        {
          "id": "read-s02-bursolo-lil-megu-4",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about how Flafi changes in {{Bursolo lil megu}}?",
          "passage": "Flafi no haji ganjon bursolo. Te aham ki tesu presen in asman pregi hoxya tas alo ete. Te le ewreka sesu cele.",
          "options": [
            "He understood that his presence in the sky brought happiness to others.",
            "Flafi floated closer.",
            "Feeling inspired, Flafi decided to drift over more places.",
            "Everywhere he went, people smiled and pointed at his unique shapes.",
            "He had the whole world to share his shapes with, and he loved making people smile."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te aham ki tesu presen in asman pregi hoxya tas alo ete.}} — 'He understood that his presence in the sky brought happiness to others.'"
        },
        {
          "id": "read-s02-bursolo-lil-megu-5",
          "type": "mcq",
          "prompt": "In {{Bursolo lil megu}}, what does {{levita}} mean?",
          "options": [
            "to float",
            "to fall",
            "to run",
            "to shine",
            "to hide"
          ],
          "correct": 0,
          "explanation": "{{levita}} means 'to float'. The story says {{Flafi sen maxmo lil kom alo megu ji te le moywatu levita solo.}} — 'Flafi was smaller than the other clouds and always drifted alone.'",
          "passage": null
        },
        {
          "id": "read-s02-bursolo-lil-megu-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Flafi xiwon ki te abil na sen mon de joxune banto.}}",
          "answer": "Flafi wished he could be part of something exciting.",
          "accept": [],
          "explanation": "The sentence reads {{Flafi xiwon ki te abil na sen mon de joxune banto.}} — 'Flafi wished he could be part of something exciting.' {{xiwon ki}} introduces a wish; {{mon de}} is 'part of'."
        },
        {
          "id": "read-s02-bursolo-lil-megu-7",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Har ganjon fe ilhamu, Flafi karar na levita supra maxpul loka.}}",
          "answer": "Feeling inspired, Flafi decided to drift over more places.",
          "accept": [],
          "explanation": "The sentence reads {{Har ganjon fe ilhamu, Flafi karar na levita supra maxpul loka.}} — 'Feeling inspired, Flafi decided to drift over more places.' {{har ganjon fe ilhamu}} is a participial phrase: 'feeling inspired'."
        },
        {
          "id": "read-s02-bursolo-lil-megu-8",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: He understood that his presence in the sky brought happiness to others.",
          "answer": "Te aham ki tesu presen in asman pregi hoxya tas alo ete.",
          "accept": [],
          "explanation": "The sentence reads {{Te aham ki tesu presen in asman pregi hoxya tas alo ete.}} — 'He understood that his presence in the sky brought happiness to others.' {{aham ki}} introduces the understood clause; {{presen}} is 'presence'."
        },
        {
          "id": "read-s02-bursolo-lil-megu-9",
          "type": "fill",
          "prompt": "Flafi sen ___ lil ___ alo megu ji te le moywatu levita solo.",
          "gloss": "Flafi was smaller than the other clouds and always drifted alone.",
          "blanks": [
            {
              "answer": "maxmo",
              "accept": []
            },
            {
              "answer": "kom",
              "accept": []
            }
          ],
          "explanation": "The missing words are {{maxmo}}, {{kom}}. {{maxmo … kom}} forms the comparative."
        },
        {
          "id": "read-s02-bursolo-lil-megu-10",
          "type": "fill",
          "prompt": "Te le ewreka sesu ___.",
          "gloss": "He had found his purpose.",
          "blanks": [
            {
              "answer": "cele",
              "accept": []
            }
          ],
          "explanation": "The missing word is {{cele}}. {{cele}} means 'goal, purpose'."
        }
      ]
    },
    {
      "id": "read-s26-xansebon-orenenabil-maymun",
      "area": "reading",
      "title": "Xansebon orenenabil maymun — The Lucky Deaf Monkey",
      "blurb": "A deaf monkey enjoys a peaceful inner world while the other monkeys suffer the jungle's noise, and they begin to see that his difference is a kind of luck.",
      "refs": [
        "Thirty Short Stories — Story 26",
        "Reading practice"
      ],
      "notes": [
        "{{no abil na ore}} states the monkey's deafness without a special adjective; ability is expressed with {{abil na}}.",
        "{{walaganjon}} means 'miss something one no longer has', and {{nilwatu}} 'never' pairs with it in the lesson."
      ],
      "examples": [
        [
          "Te no abil na ore.",
          "He cannot hear."
        ],
        [
          "Hoxya precu of inya, ji ren no abil na walaganjon banto hu ren le nilwatu hare da.",
          "Happiness comes from within, and you cannot miss what you never had."
        ]
      ],
      "exercises": [
        {
          "id": "read-s26-xansebon-orenenabil-maymun-1",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Ap and the other monkeys in {{Xansebon orenenabil maymun}}?",
          "passage": "In centro de jungla, espesyal maymun namedo Ap ogar. Ap sen alopul fe alo maymun. Te no abil na ore.",
          "options": [
            "He cannot hear.",
            "Ap enjoys his life.",
            "He loves to play and eat the juicy fruits that grow high up in the branches.",
            "Ap is always happy and full of energy.",
            "But Ap does not have this problem."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te no abil na ore.}} — 'He cannot hear.'"
        },
        {
          "id": "read-s26-xansebon-orenenabil-maymun-2",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the noisy jungle in {{Xansebon orenenabil maymun}}?",
          "passage": "Te no walaganjon banto hu te le nilwatu hare da. Jungla sen daymo sotibur. Piu piusa, koncun koncunsa, ji alo hewan dayhewansa dur total nuru ji noce.",
          "options": [
            "Birds chirp, insects buzz, and other animals roar and howl all day and night.",
            "But Ap is not sad at all.",
            "Ap is always happy and full of energy.",
            "They cover their ears and try to find quiet spots to rest.",
            "Some monkeys begin to understand that Ap is actually lucky."
          ],
          "correct": 0,
          "explanation": "The passage says {{Piu piusa, koncun koncunsa, ji alo hewan dayhewansa dur total nuru ji noce.}} — 'Birds chirp, insects buzz, and other animals roar and howl all day and night.'"
        },
        {
          "id": "read-s26-xansebon-orenenabil-maymun-3",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about how the other monkeys react to noise in {{Xansebon orenenabil maymun}}?",
          "passage": "Bursoti dumarali lawfen alo maymun. Ete koberi sesu ore ji ete xidu na ewreka sotikal loka cel na rahatu. Mas Ap no hare hin problema.",
          "options": [
            "They cover their ears and try to find quiet spots to rest.",
            "The other monkeys feel sorry for Ap.",
            "The jungle is very noisy.",
            "He sleeps soundly and is never disturbed.",
            "He only sees the beauty around him."
          ],
          "correct": 0,
          "explanation": "The passage says {{Ete koberi sesu ore ji ete xidu na ewreka sotikal loka cel na rahatu.}} — 'They cover their ears and try to find quiet spots to rest.'"
        },
        {
          "id": "read-s26-xansebon-orenenabil-maymun-4",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the lesson of the story in {{Xansebon orenenabil maymun}}?",
          "passage": "Hoxya precu of inya, ji ren no abil na walaganjon banto hu ren le nilwatu hare da. Jungla sen sotibur, mas globa de Ap sen trankwilo ji hoxyapul. Ji dento sengi te maxim xansebon maymun of moyte.",
          "options": [
            "Happiness comes from within, and you cannot miss what you never had.",
            "He swings from tree to tree with great joy.",
            "The other monkeys watch Ap and wonder how he can be so happy.",
            "He only sees the beauty around him.",
            "Ap teaches the other monkeys an important lesson."
          ],
          "correct": 0,
          "explanation": "The passage says {{Hoxya precu of inya, ji ren no abil na walaganjon banto hu ren le nilwatu hare da.}} — 'Happiness comes from within, and you cannot miss what you never had.'"
        },
        {
          "id": "read-s26-xansebon-orenenabil-maymun-5",
          "type": "mcq",
          "prompt": "In {{Xansebon orenenabil maymun}}, what does {{hazuni}} mean?",
          "options": [
            "sad",
            "happy",
            "lucky",
            "quiet",
            "deaf"
          ],
          "correct": 0,
          "explanation": "{{hazuni}} means 'sad'. The story says {{Ete fikir ki te yakin sen hazuni koski te no abil na ore soti de jungla.}} — 'They think he must be sad because he cannot hear the sounds of the jungle.'",
          "passage": null
        },
        {
          "id": "read-s26-xansebon-orenenabil-maymun-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Te urjuha of drevo cel drevo har day hoxya.}}",
          "answer": "He swings from tree to tree with great joy.",
          "accept": [],
          "explanation": "The sentence reads {{Te urjuha of drevo cel drevo har day hoxya.}} — 'He swings from tree to tree with great joy.' {{urjuha}} is 'swing'; {{har day hoxya}} is 'with great joy'."
        },
        {
          "id": "read-s26-xansebon-orenenabil-maymun-7",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Te ogar in globa fe xanti ji sotikalya.}}",
          "answer": "He lives in a world of peace and quiet.",
          "accept": [],
          "explanation": "The sentence reads {{Te ogar in globa fe xanti ji sotikalya.}} — 'He lives in a world of peace and quiet.' {{globa}} is 'world', and {{xanti}} means 'peaceful'."
        },
        {
          "id": "read-s26-xansebon-orenenabil-maymun-8",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: The other monkeys watch Ap and wonder how he can be so happy.",
          "answer": "Alo maymun oko Ap ji ete jixivole ku te sen daydenmo hox kemaner.",
          "accept": [],
          "explanation": "The sentence reads {{Alo maymun oko Ap ji ete jixivole ku te sen daydenmo hox kemaner.}} — 'The other monkeys watch Ap and wonder how he can be so happy.' {{jixivole}} is 'wonder'; {{kemaner}} is 'how'."
        },
        {
          "id": "read-s26-xansebon-orenenabil-maymun-9",
          "type": "fill",
          "prompt": "Te no ___ banto hu te le nilwatu hare da.",
          "gloss": "He does not miss what he never had.",
          "blanks": [
            {
              "answer": "walaganjon",
              "accept": []
            }
          ],
          "explanation": "The missing word is {{walaganjon}}. {{walaganjon}} means 'miss (something lost)'."
        },
        {
          "id": "read-s26-xansebon-orenenabil-maymun-10",
          "type": "fill",
          "prompt": "Mas Ap no hare hin ___.",
          "gloss": "But Ap does not have this problem.",
          "blanks": [
            {
              "answer": "problema",
              "accept": []
            }
          ],
          "explanation": "The missing word is {{problema}}. {{hin}} is 'this'; {{problema}} is the noun 'problem'."
        }
      ]
    },
    {
      "id": "read-s23-kroa-in-nederili-deha",
      "area": "reading",
      "title": "Kroa in Nederili deha — The Frog in the Dutch Village",
      "blurb": "A frog moves to a small Dutch village, tours it with a kind duck, and finds windmills, tulips, canals, and a new home.",
      "refs": [
        "Thirty Short Stories — Story 23",
        "Reading practice"
      ],
      "notes": [
        "The tour is sequenced with {{unyum}}, {{jaxali}}, {{xali}}, and {{finili}}; notice how each one opens a new stop.",
        "{{trasogar cel}} means 'move to a place', while {{visita}} is a temporary visit."
      ],
      "examples": [
        [
          "Kroa namedo Fredi trasogar cel lil Nederili deha.",
          "A frog named Fredi moves to a small Dutch village."
        ],
        [
          "Fredi ganjon hox ji konfortapul.",
          "Fredi feels happy and at home."
        ]
      ],
      "exercises": [
        {
          "id": "read-s23-kroa-in-nederili-deha-1",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Fredi arriving in the village in {{Kroa in Nederili deha}}?",
          "passage": "Kroa namedo Fredi trasogar cel lil Nederili deha. Te sen joxupul ji jixifil. Fredi tyao of tren ji te oko fe jowey.",
          "options": [
            "Fredi hops off the train and looks around.",
            "Fredi agrees and they start their journey.",
            "It spins slowly in the wind.",
            "The fields are full of colorful flowers.",
            "Fredi and Daisy sit by the canal and watch the boats pass by."
          ],
          "correct": 0,
          "explanation": "The passage says {{Fredi tyao of tren ji te oko fe jowey.}} — 'Fredi hops off the train and looks around.'"
        },
        {
          "id": "read-s23-kroa-in-nederili-deha-2",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Daisy welcoming Fredi in {{Kroa in Nederili deha}}?",
          "passage": "Lutufpul kwake namedo Deyzi bonatagi Fredi. Te teyan na gibe tas te turi fe deha. Fredi dongwi ji ete xoru sesu turi.",
          "options": [
            "She offers to give him a tour of the village.",
            "The windmill is tall and strong.",
            "Daisy explains how the windmill helps grind grain into flour.",
            "Fredi loves the bright red, yellow, and pink tulips.",
            "The water is clear and calm."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te teyan na gibe tas te turi fe deha.}} — 'She offers to give him a tour of the village.'"
        },
        {
          "id": "read-s23-kroa-in-nederili-deha-3",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the tulip fields in {{Kroa in Nederili deha}}?",
          "passage": "Jaxali, ete visita tulipageo. Geo sen pul fe kolorpul flura. Fredi lubi brilapulmo roso, jalo, ji pinku tulipa.",
          "options": [
            "Fredi loves the bright red, yellow, and pink tulips.",
            "First, Daisy takes Fredi to the windmill.",
            "Daisy tells Fredi that tulips are a symbol of the Netherlands.",
            "Boats float gently on the water.",
            "There is a bakery, a café, and a toy store."
          ],
          "correct": 0,
          "explanation": "The passage says {{Fredi lubi brilapulmo roso, jalo, ji pinku tulipa.}} — 'Fredi loves the bright red, yellow, and pink tulips.'"
        },
        {
          "id": "read-s23-kroa-in-nederili-deha-4",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the village square in {{Kroa in Nederili deha}}?",
          "passage": "Gwancan sen pul fe insan ji dukan. Hay rotidukan, kafedom, ji yuxituldukan. Fredi ganjon hox ji konfortapul.",
          "options": [
            "The square is full of people and shops.",
            "The village is peaceful and pretty.",
            "Fredi is amazed by its size and beauty.",
            "The view is peaceful and relaxing.",
            "He is glad to move to such a lovely village."
          ],
          "correct": 0,
          "explanation": "The passage says {{Gwancan sen pul fe insan ji dukan.}} — 'The square is full of people and shops.'"
        },
        {
          "id": "read-s23-kroa-in-nederili-deha-5",
          "type": "mcq",
          "prompt": "In {{Kroa in Nederili deha}}, what does {{trasogar}} mean?",
          "options": [
            "to move house",
            "to visit",
            "to leave",
            "to return",
            "to travel"
          ],
          "correct": 0,
          "explanation": "{{trasogar}} means 'to move house'. The story says {{Kroa namedo Fredi trasogar cel lil Nederili deha.}} — 'A frog named Fredi moves to a small Dutch village.'",
          "passage": null
        },
        {
          "id": "read-s23-kroa-in-nederili-deha-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Te teyan na gibe tas te turi fe deha.}}",
          "answer": "She offers to give him a tour of the village.",
          "accept": [],
          "explanation": "The sentence reads {{Te teyan na gibe tas te turi fe deha.}} — 'She offers to give him a tour of the village.' {{teyan na gibe}} is 'offer to give'; {{turi}} is 'tour'."
        },
        {
          "id": "read-s23-kroa-in-nederili-deha-7",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Deyzi xomin ki vento-muledom sahay na mule danyam cel farina.}}",
          "answer": "Daisy explains how the windmill helps grind grain into flour.",
          "accept": [],
          "explanation": "The sentence reads {{Deyzi xomin ki vento-muledom sahay na mule danyam cel farina.}} — 'Daisy explains how the windmill helps grind grain into flour.' {{xomin}} is 'explain'; {{sahay na mule}} is 'help grind'."
        },
        {
          "id": "read-s23-kroa-in-nederili-deha-8",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: Fredi feels happy and at home.",
          "answer": "Fredi ganjon hox ji konfortapul.",
          "accept": [],
          "explanation": "The sentence reads {{Fredi ganjon hox ji konfortapul.}} — 'Fredi feels happy and at home.' {{konfortapul}} means 'comfortable, at home'."
        },
        {
          "id": "read-s23-kroa-in-nederili-deha-9",
          "type": "fill",
          "prompt": "Fredi ___ ___ tren ji te oko fe jowey.",
          "gloss": "Fredi hops off the train and looks around.",
          "blanks": [
            {
              "answer": "tyao",
              "accept": []
            },
            {
              "answer": "of",
              "accept": []
            }
          ],
          "explanation": "The missing words are {{tyao}}, {{of}}. {{tyao}} is 'hop'; {{of}} marks the source."
        },
        {
          "id": "read-s23-kroa-in-nederili-deha-10",
          "type": "fill",
          "prompt": "Fredi ganjon ___ ji ___.",
          "gloss": "Fredi feels happy and at home.",
          "blanks": [
            {
              "answer": "hox",
              "accept": []
            },
            {
              "answer": "konfortapul",
              "accept": []
            }
          ],
          "explanation": "The missing words are {{hox}}, {{konfortapul}}. {{hox}} is 'happy', and {{konfortapul}} is 'comfortable'."
        }
      ]
    },
    {
      "id": "read-s04-kitabudom-de-oliver",
      "area": "reading",
      "title": "Kitabudom de Oliver — Oliver's Library",
      "blurb": "A curious rabbit finds a hidden library inside an oak tree, befriends a wise owl, and brings the stories home to his friends.",
      "refs": [
        "Thirty Short Stories — Story 4",
        "Reading practice"
      ],
      "notes": [
        "{{xor-}} verbs describe a change of state or a new discovery: {{xorjui}} 'notice', {{xorewreka}} 'stumble upon', {{xorhare}} 'make (a friend)'.",
        "The library is described with {{-pul}} and {{-fil}} words: {{jixifil}} 'curious', {{sofipul}} 'wise', {{dostefil}} 'friendly'."
      ],
      "examples": [
        [
          "Banwatu, in bio-ativo drevogeo, jixifil juni kargux har name Beni ogar.",
          "Once upon a time, in a vibrant forest, there lived a curious young rabbit named Beni."
        ],
        [
          "Te sencu maxmo sofipul yon moyun hikaye ji te xorhare bala linku ton lutufpul lao huhu.",
          "He grew wiser with each story and formed a deep bond with the kind old owl."
        ]
      ],
      "exercises": [
        {
          "id": "read-s04-kitabudom-de-oliver-1",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Beni in the forest in {{Kitabudom de Oliver}}?",
          "passage": "Banwatu, in bio-ativo drevogeo, jixifil juni kargux har name Beni ogar. Beni daysuki na kentan drevogeo ji na xorhare neo doste fe durya.",
          "options": [
            "Once upon a time, in a vibrant forest, there lived a curious young rabbit named Beni.",
            "As he got closer, he noticed a small door at the base of the tree.",
            "Beni was thrilled by the invitation and eagerly accepted.",
            "He thanked Oliver for his hospitality and the wonderful stories.",
            "Together, they embarked on adventures, guided by the wisdom gained from Oliver's stories."
          ],
          "correct": 0,
          "explanation": "The passage says {{Banwatu, in bio-ativo drevogeo, jixifil juni kargux har name Beni ogar.}} — 'Once upon a time, in a vibrant forest, there lived a curious young rabbit named Beni.'"
        },
        {
          "id": "read-s04-kitabudom-de-oliver-2",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the hidden grove and the oak in {{Kitabudom de Oliver}}?",
          "passage": "Un solapul din, dur na tyao in drevogeo, Beni xorewreka sangudo drevolari. In centro de drevolari, wangusim baluta estay, har sesu xube daygao hoy asman. Beni nercu cel baluta, fe na daykefuku tesu meliya ji dayje.",
          "options": [
            "In the center of the grove stood a majestic oak tree, its branches reaching high into the sky.",
            "To his surprise, the door slowly creaked open, revealing a cozy interior.",
            "As Beni browsed through the books, Oliver shared stories of the forest's history and its inhabitants.",
            "Oliver smiled and told Beni that he was always welcome to visit.",
            "Beni shared his newfound knowledge with his friends in the forest."
          ],
          "correct": 0,
          "explanation": "The passage says {{In centro de drevolari, wangusim baluta estay, har sesu xube daygao hoy asman.}} — 'In the center of the grove stood a majestic oak tree, its branches reaching high into the sky.'"
        },
        {
          "id": "read-s04-kitabudom-de-oliver-3",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Oliver and his library in {{Kitabudom de Oliver}}?",
          "passage": "Fe inya, Beni ewreka sofipul lao huhu Oliver, hu da beweygi kitabu ji papergulun. Oliver bonatagi Beni dostefil ji te invita te na kentan tesu kitabudom.",
          "options": [
            "Inside, Beni found a wise old owl named Oliver, surrounded by books and scrolls.",
            "Beni loved exploring the forest and making new friends along the way.",
            "Curiosity got the better of him, and he gently knocked on the door.",
            "Beni listened intently, fascinated by the tales of bravery, friendship, and adventure.",
            "He grew wiser with each story and formed a deep bond with the kind old owl."
          ],
          "correct": 0,
          "explanation": "The passage says {{Fe inya, Beni ewreka sofipul lao huhu Oliver, hu da beweygi kitabu ji papergulun.}} — 'Inside, Beni found a wise old owl named Oliver, surrounded by books and scrolls.'"
        },
        {
          "id": "read-s04-kitabudom-de-oliver-4",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about what Beni gains from the library in {{Kitabudom de Oliver}}?",
          "passage": "Xorfe den din, Beni regulapul visita kitabudom de Oliver. Te sencu maxmo sofipul yon moyun hikaye ji te xorhare bala linku ton lutufpul lao huhu. Beni diskonegi sesu neo jixi ton sesu dostetim in drevogeo.",
          "options": [
            "He grew wiser with each story and formed a deep bond with the kind old owl.",
            "Beni approached the tree, marveling at its beauty and size.",
            "Oliver greeted Beni warmly and invited him to explore his library.",
            "Hours passed, and Beni realized it was time to head home.",
            "And so, the legacy of the wise old owl lived on through the adventures of Beni and his friends."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te sencu maxmo sofipul yon moyun hikaye ji te xorhare bala linku ton lutufpul lao huhu.}} — 'He grew wiser with each story and formed a deep bond with the kind old owl.'"
        },
        {
          "id": "read-s04-kitabudom-de-oliver-5",
          "type": "mcq",
          "prompt": "In {{Kitabudom de Oliver}}, what does {{jixifil}} mean?",
          "options": [
            "curious",
            "afraid",
            "wise",
            "kind",
            "tired"
          ],
          "correct": 0,
          "explanation": "{{jixifil}} means 'curious'. The story says {{Banwatu, in bio-ativo drevogeo, jixifil juni kargux har name Beni ogar.}} — 'Once upon a time, in a vibrant forest, there lived a curious young rabbit named Beni.'",
          "passage": null
        },
        {
          "id": "read-s04-kitabudom-de-oliver-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Oliver bonatagi Beni dostefil ji te invita te na kentan tesu kitabudom.}}",
          "answer": "Oliver greeted Beni warmly and invited him to explore his library.",
          "accept": [],
          "explanation": "The sentence reads {{Oliver bonatagi Beni dostefil ji te invita te na kentan tesu kitabudom.}} — 'Oliver greeted Beni warmly and invited him to explore his library.' {{bonatagi}} is 'greet'; {{invita}} is 'invite'."
        },
        {
          "id": "read-s04-kitabudom-de-oliver-7",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Beni ore juipul, carmedo fal hikaye fe yunki, dosteya, ji aventur.}}",
          "answer": "Beni listened intently, fascinated by the tales of bravery, friendship, and adventure.",
          "accept": [],
          "explanation": "The sentence reads {{Beni ore juipul, carmedo fal hikaye fe yunki, dosteya, ji aventur.}} — 'Beni listened intently, fascinated by the tales of bravery, friendship, and adventure.' {{carmedo}} is 'fascinated'; {{fal}} marks the cause."
        },
        {
          "id": "read-s04-kitabudom-de-oliver-8",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: Beni shared his newfound knowledge with his friends in the forest.",
          "answer": "Beni diskonegi sesu neo jixi ton sesu dostetim in drevogeo.",
          "accept": [],
          "explanation": "The sentence reads {{Beni diskonegi sesu neo jixi ton sesu dostetim in drevogeo.}} — 'Beni shared his newfound knowledge with his friends in the forest.' {{diskonegi}} is 'share'; {{neo jixi}} is 'new knowledge'."
        },
        {
          "id": "read-s04-kitabudom-de-oliver-9",
          "type": "fill",
          "prompt": "Folki te max nercu, te ___ lil dwer fe peda de drevo.",
          "gloss": "As he got closer, he noticed a small door at the base of the tree.",
          "blanks": [
            {
              "answer": "xorjui",
              "accept": []
            }
          ],
          "explanation": "The missing word is {{xorjui}}. {{xorjui}} means 'notice'."
        },
        {
          "id": "read-s04-kitabudom-de-oliver-10",
          "type": "fill",
          "prompt": "Multi satu pasa, ji Beni xorjui ki to ___ sen watu na ___ cel ogar.",
          "gloss": "Hours passed, and Beni realized it was time to head home.",
          "blanks": [
            {
              "answer": "nun",
              "accept": []
            },
            {
              "answer": "xoridi",
              "accept": []
            }
          ],
          "explanation": "The missing words are {{nun}}, {{xoridi}}. {{nun}} marks the immediate present; {{xoridi}} is 'return'."
        }
      ]
    },
    {
      "id": "read-s12-sofipul-seleti",
      "area": "reading",
      "title": "Sofipul Seleti — A Wise Choice",
      "blurb": "A young squirrel refuses to join a raid on a pigeon's nest, warns the birds, and learns that good company matters more than fitting in.",
      "refs": [
        "Thirty Short Stories — Story 12",
        "Reading practice"
      ],
      "notes": [
        "{{ganjon}} introduces feelings, and {{nentrankwilo}} 'uneasy' negates {{trankwilo}} 'calm'.",
        "The story contrasts two choices with {{maxmo bon … kom}}: {{maxmo bon na sen solo kom na sen ton bur grupo}}."
      ],
      "examples": [
        [
          "Ete pimpan cudu yam of maxmo lil piu, ji ete haha tem to.",
          "They often take food from smaller birds and laugh about it."
        ],
        [
          "Te xwexi ki to sen maxmo bon na sen solo kom na sen ton bur grupo.",
          "He learns that it's better to be alone than with the wrong crowd."
        ]
      ],
      "exercises": [
        {
          "id": "read-s12-sofipul-seleti-1",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Sami in the city park in {{Sofipul Seleti}}?",
          "passage": "In ixgalupul xaherparke, juni sinjabu har name Sami tyao of drevo cel drevo. Te sen energipul ji jixifil, fe na moywatu xerca doste cel na tonyuxi.",
          "options": [
            "He's energetic and curious, always looking for friends to play with.",
            "One sunny afternoon, the leader of the squirrel gang, Roki, plans to raid a pigeon's nest.",
            "A tiny voice inside tells him that this is wrong.",
            "He watches sadly as the others sneak towards the nest.",
            "From that day, Sami decides to explore the park on his own."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te sen energipul ji jixifil, fe na moywatu xerca doste cel na tonyuxi.}} — 'He's energetic and curious, always looking for friends to play with.'"
        },
        {
          "id": "read-s12-sofipul-seleti-2",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the city squirrels' behavior in {{Sofipul Seleti}}?",
          "passage": "Mas dostetim de Sami, grupo fe xaherli sinjabu, no sen daymo lutufpul. Ete pimpan cudu yam of maxmo lil piu, ji ete haha tem to.",
          "options": [
            "They often take food from smaller birds and laugh about it.",
            "Sami feels uneasy.",
            "He watches sadly as the others sneak towards the nest.",
            "Sami darts towards the human picnic area and starts chattering loudly, jumping on the tables.",
            "He learns that it's better to be alone than with the wrong crowd."
          ],
          "correct": 0,
          "explanation": "The passage says {{Ete pimpan cudu yam of maxmo lil piu, ji ete haha tem to.}} — 'They often take food from smaller birds and laugh about it.'"
        },
        {
          "id": "read-s12-sofipul-seleti-3",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Sami's inner conflict in {{Sofipul Seleti}}?",
          "passage": "Sami ganjon nentrankwilo. Te oko matrekabutar hu da gardi sesu kyota. Lil voka in te loga tas te ki hinto sen bur.",
          "options": [
            "A tiny voice inside tells him that this is wrong.",
            "But Sami's friends, a group of city squirrels, are not very kind.",
            "Roki scoffs and the gang scampers off, leaving Sami alone on his branch.",
            "People turn their heads, surprised by the noisy squirrel.",
            "The mother pigeon nods gratefully at Sami, who feels a warm glow inside."
          ],
          "correct": 0,
          "explanation": "The passage says {{Lil voka in te loga tas te ki hinto sen bur.}} — 'A tiny voice inside tells him that this is wrong.'"
        },
        {
          "id": "read-s12-sofipul-seleti-4",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about what Sami learns in {{Sofipul Seleti}}?",
          "passage": "Matrekabutar xukrapul kapi-siya hoy Sami, hu da ganjon termopul brila in se. Xorfe den din, Sami karar na solo kentan parke. Te xwexi ki to sen maxmo bon na sen solo kom na sen ton bur grupo.",
          "options": [
            "He learns that it's better to be alone than with the wrong crowd.",
            "Just then, he has an idea.",
            "People turn their heads, surprised by the noisy squirrel.",
            "His antics make the pigeons alert, and the squirrels are forced to cancel their raid.",
            "And so, Sami enjoys his days, finding joy in the right kind of company, even if it means sometimes being by himself."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te xwexi ki to sen maxmo bon na sen solo kom na sen ton bur grupo.}} — 'He learns that it's better to be alone than with the wrong crowd.'"
        },
        {
          "id": "read-s12-sofipul-seleti-5",
          "type": "mcq",
          "prompt": "In {{Sofipul Seleti}}, what does {{nentrankwilo}} mean?",
          "options": [
            "uneasy",
            "excited",
            "angry",
            "grateful",
            "proud"
          ],
          "correct": 0,
          "explanation": "{{nentrankwilo}} means 'uneasy'. The story says {{Sami ganjon nentrankwilo.}} — 'Sami feels uneasy.'",
          "passage": null
        },
        {
          "id": "read-s12-sofipul-seleti-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Roki coxo te, ji grupo velosi xoridi, fe na restagi Sami solo per tesu xube.}}",
          "answer": "Roki scoffs and the gang scampers off, leaving Sami alone on his branch.",
          "accept": [],
          "explanation": "The sentence reads {{Roki coxo te, ji grupo velosi xoridi, fe na restagi Sami solo per tesu xube.}} — 'Roki scoffs and the gang scampers off, leaving Sami alone on his branch.' {{coxo}} is 'scoff'; {{restagi}} is 'leave behind'."
        },
        {
          "id": "read-s12-sofipul-seleti-7",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Tesu ajabuxey juinegi kabutar, ji sinjabutim musi na esto sesu ganima.}}",
          "answer": "His antics make the pigeons alert, and the squirrels are forced to cancel their raid.",
          "accept": [],
          "explanation": "The sentence reads {{Tesu ajabuxey juinegi kabutar, ji sinjabutim musi na esto sesu ganima.}} — 'His antics make the pigeons alert, and the squirrels are forced to cancel their raid.' {{ajabuxey}} is 'antics'; {{esto}} is 'stop'."
        },
        {
          "id": "read-s12-sofipul-seleti-8",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: He learns that it's better to be alone than with the wrong crowd.",
          "answer": "Te xwexi ki to sen maxmo bon na sen solo kom na sen ton bur grupo.",
          "accept": [],
          "explanation": "The sentence reads {{Te xwexi ki to sen maxmo bon na sen solo kom na sen ton bur grupo.}} — 'He learns that it's better to be alone than with the wrong crowd.' {{maxmo bon … kom}} forms the comparative; {{bur grupo}} is 'bad crowd'."
        },
        {
          "id": "read-s12-sofipul-seleti-9",
          "type": "fill",
          "prompt": "Sami ganjon ___.",
          "gloss": "Sami feels uneasy.",
          "blanks": [
            {
              "answer": "nentrankwilo",
              "accept": []
            }
          ],
          "explanation": "The missing word is {{nentrankwilo}}. {{nentrankwilo}} is 'uneasy'."
        },
        {
          "id": "read-s12-sofipul-seleti-10",
          "type": "fill",
          "prompt": "Tesu ajabuxey ___ kabutar, ji sinjabutim musi na ___ sesu ganima.",
          "gloss": "His antics make the pigeons alert, and the squirrels are forced to cancel their raid.",
          "blanks": [
            {
              "answer": "juinegi",
              "accept": []
            },
            {
              "answer": "esto",
              "accept": []
            }
          ],
          "explanation": "The missing words are {{juinegi}}, {{esto}}. {{juinegi}} is 'alert'; {{esto}} is 'stop'."
        }
      ]
    },
    {
      "id": "read-s27-balena-ji-tesu-lilsoxo",
      "area": "reading",
      "title": "Balena ji tesu lilsoxo — The Whale and Her Figurines",
      "blurb": "A whale chases an ever-growing collection of figurines across distant conventions until she realizes the collection is a trap.",
      "refs": [
        "Thirty Short Stories — Story 27",
        "Reading practice"
      ],
      "notes": [
        "{{kompletogi}} means 'complete (a collection)'; {{-gi}} adds a causative sense to {{kompleto}}.",
        "The story uses {{le}} for completed past events and {{nun}} for the present situation: {{Walis le sencu pesakal}}."
      ],
      "examples": [
        [
          "Tesu maxim day roya sen na kompletogi lari.",
          "Her biggest dream is to complete the entire collection."
        ],
        [
          "Walis le sen fahuri fe sesu day lari, mas fe nunya, te ganjon bujodo denpul kom burdavayen.",
          "Walis was proud of her large collection, but now she feels trapped like an addict."
        ]
      ],
      "exercises": [
        {
          "id": "read-s27-balena-ji-tesu-lilsoxo-1",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Walis and her collection in {{Balena ji tesu lilsoxo}}?",
          "passage": "Balena Walis daysuki na lari lilsoxo. Moy din, te xerca neo oto.",
          "options": [
            "Every day, she searches for new ones.",
            "Her collection keeps growing.",
            "She swims for many days to get there.",
            "Walis knows she needs it to complete her collection.",
            "Walis realizes she doesn't have enough money to buy it or travel to the convention."
          ],
          "correct": 0,
          "explanation": "The passage says {{Moy din, te xerca neo oto.}} — 'Every day, she searches for new ones.'"
        },
        {
          "id": "read-s27-balena-ji-tesu-lilsoxo-2",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the rare figurine at the convention in {{Balena ji tesu lilsoxo}}?",
          "passage": "Un din, Walis ewreka nadir lilsoxo hu da bemaydo sol in teli konferensi. Te suyon dur multi din cel na xorata denloka. Denwatu hu te preata, te kari nadir lilsoxo, ji te ganjon daymo fahuri.",
          "options": [
            "One day, Walis finds a rare figurine that is only sold at a faraway convention.",
            "She swims to many stores and buys the ones she wants.",
            "But just before, the company releases a new, more exclusive, and expensive figurine.",
            "The journey is long and tiring, but Walis is determined.",
            "She worked hard to collect all the figurines, but her money is gone, and her collection is still incomplete."
          ],
          "correct": 0,
          "explanation": "The passage says {{Un din, Walis ewreka nadir lilsoxo hu da bemaydo sol in teli konferensi.}} — 'One day, Walis finds a rare figurine that is only sold at a faraway convention.'"
        },
        {
          "id": "read-s27-balena-ji-tesu-lilsoxo-3",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the limited-edition figurine in {{Balena ji tesu lilsoxo}}?",
          "passage": "Preciso denwatu hu Walis jaxa kari neo lilsoxo, firma gongaw maxpul watulimitedo lilsoxo. Hinto sen maxim nadir to finfe nunya. Walis xorjui ki te no hare kufi pesa cel na kari to or cel na dao cel konferensi.",
          "options": [
            "This one is the most exclusive yet.",
            "Her biggest dream is to complete the entire collection.",
            "She saves her money and swims to another distant convention.",
            "Walis became poor.",
            "Walis was proud of her large collection, but now she feels trapped like an addict."
          ],
          "correct": 0,
          "explanation": "The passage says {{Hinto sen maxim nadir to finfe nunya.}} — 'This one is the most exclusive yet.'"
        },
        {
          "id": "read-s27-balena-ji-tesu-lilsoxo-4",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about how Walis feels at the end in {{Balena ji tesu lilsoxo}}?",
          "passage": "Te ganjon cipendo koski firma duregi na krea neo lilsoxo cel na cudu max pesa of te. Walis le sen fahuri fe sesu day lari, mas fe nunya, te ganjon bujodo denpul kom burdavayen.",
          "options": [
            "Walis was proud of her large collection, but now she feels trapped like an addict.",
            "When she arrives, she buys the rare figurine and feels very proud.",
            "Just as Walis is about to buy the new figurine, the company announces another limited edition.",
            "Walis became poor.",
            "She still wants to complete the collection, but she has lost the will to keep trying."
          ],
          "correct": 0,
          "explanation": "The passage says {{Walis le sen fahuri fe sesu day lari, mas fe nunya, te ganjon bujodo denpul kom burdavayen.}} — 'Walis was proud of her large collection, but now she feels trapped like an addict.'"
        },
        {
          "id": "read-s27-balena-ji-tesu-lilsoxo-5",
          "type": "mcq",
          "prompt": "In {{Balena ji tesu lilsoxo}}, what does {{kompletogi}} mean?",
          "options": [
            "to complete",
            "to sell",
            "to collect",
            "to buy",
            "to lose"
          ],
          "correct": 0,
          "explanation": "{{kompletogi}} means 'to complete'. The story says {{Tesu maxim day roya sen na kompletogi lari.}} — 'Her biggest dream is to complete the entire collection.'",
          "passage": null
        },
        {
          "id": "read-s27-balena-ji-tesu-lilsoxo-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Denwatu hu te preata, te kari nadir lilsoxo, ji te ganjon daymo fahuri.}}",
          "answer": "When she arrives, she buys the rare figurine and feels very proud.",
          "accept": [],
          "explanation": "The sentence reads {{Denwatu hu te preata, te kari nadir lilsoxo, ji te ganjon daymo fahuri.}} — 'When she arrives, she buys the rare figurine and feels very proud.' {{preata}} is 'arrive'; {{fahuri}} is 'proud'."
        },
        {
          "id": "read-s27-balena-ji-tesu-lilsoxo-7",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Te le dayergo cel na lari moy lilsoxo, mas tesu pesa le awcu, ji tesu lari sen haji nenkompleto.}}",
          "answer": "She worked hard to collect all the figurines, but her money is gone, and her collection is still incomplete.",
          "accept": [],
          "explanation": "The sentence reads {{Te le dayergo cel na lari moy lilsoxo, mas tesu pesa le awcu, ji tesu lari sen haji nenkompleto.}} — 'She worked hard to collect all the figurines, but her money is gone, and her collection is still incomplete.' {{dayergo}} is 'work hard'; {{nenkompleto}} is 'incomplete'."
        },
        {
          "id": "read-s27-balena-ji-tesu-lilsoxo-8",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: Walis realizes she doesn't have enough money to buy it or travel to the convention.",
          "answer": "Walis xorjui ki te no hare kufi pesa cel na kari to or cel na dao cel konferensi.",
          "accept": [],
          "explanation": "The sentence reads {{Walis xorjui ki te no hare kufi pesa cel na kari to or cel na dao cel konferensi.}} — 'Walis realizes she doesn't have enough money to buy it or travel to the convention.' {{kufi}} means 'enough'; {{or}} joins the two alternatives."
        },
        {
          "id": "read-s27-balena-ji-tesu-lilsoxo-9",
          "type": "fill",
          "prompt": "Te suyon cel multi dukan ji te ___ to hu te vole da.",
          "gloss": "She swims to many stores and buys the ones she wants.",
          "blanks": [
            {
              "answer": "kari",
              "accept": []
            }
          ],
          "explanation": "The missing word is {{kari}}. {{kari}} means 'buy'."
        },
        {
          "id": "read-s27-balena-ji-tesu-lilsoxo-10",
          "type": "fill",
          "prompt": "Te le dayergo cel na lari moy lilsoxo, mas tesu pesa le ___, ji tesu lari sen ___ nenkompleto.",
          "gloss": "She worked hard to collect all the figurines, but her money is gone, and her collection is still incomplete.",
          "blanks": [
            {
              "answer": "awcu",
              "accept": []
            },
            {
              "answer": "haji",
              "accept": []
            }
          ],
          "explanation": "The missing words are {{awcu}}, {{haji}}. {{awcu}} is 'gone'; {{haji}} is 'still'."
        }
      ]
    },
    {
      "id": "read-s25-folsomnoli-huhu",
      "area": "reading",
      "title": "Folsomnoli huhu — Sleepwise Owls",
      "blurb": "A father owl who sleeps on a strict schedule learns from his daughter that rest works best when the body asks for it.",
      "refs": [
        "Thirty Short Stories — Story 25",
        "Reading practice"
      ],
      "notes": [
        "{{eger … xa}} forms a real condition: {{eger yu no somno fe noce, yu xa sen pilodo}}.",
        "{{denwatu hu}} introduces a time clause, and {{preciso kom}} means 'just like'."
      ],
      "examples": [
        [
          "Oliver loga, \"Luna, eger yu no somno fe noce, yu xa sen pilodo.\"",
          "\"Luna, if you do not sleep at night, you will be tired,\" Oliver says."
        ],
        [
          "Moydua ete le xwexi ki maxim bon satu cel na somno sen denwatu hu etesu jismu loga tas ete na fale to.",
          "They both learn that the best time to sleep is when their bodies tell them to."
        ]
      ],
      "exercises": [
        {
          "id": "read-s25-folsomnoli-huhu-1",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Oliver and Luna's habits in {{Folsomnoli huhu}}?",
          "passage": "In xantipul drevogeo, dua huhu ogar in day baluta. Name de huhupatre sen Oliver, ji name de tesu fembete sen Luna. Oliver suki na ergo fe noce ji na somno dur nuru.",
          "options": [
            "Oliver likes to work at night and sleep during the day.",
            "Luna, however, wants to stay awake all night.",
            "He spends the whole day flying around, catching mice, and watching over the forest.",
            "As Oliver lands on the tree branch, he sees Luna.",
            "Oliver thinks about this."
          ],
          "correct": 0,
          "explanation": "The passage says {{Oliver suki na ergo fe noce ji na somno dur nuru.}} — 'Oliver likes to work at night and sleep during the day.'"
        },
        {
          "id": "read-s25-folsomnoli-huhu-2",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Oliver letting Luna choose in {{Folsomnoli huhu}}?",
          "passage": "Luna jawabu, \"Mas mi suki na ergo fe noce, Papa. Mi sen energipul.\" Oliver kapi-noya mas te karar na izin ki Luna awtonom seleti.",
          "options": [
            "Oliver shakes his head but decides to let Luna make her own choice.",
            "The father owl's name is Oliver, and his daughter's name is Luna.",
            "He spends the whole day flying around, catching mice, and watching over the forest.",
            "She is wide awake and full of energy.",
            "Oliver thinks about this."
          ],
          "correct": 0,
          "explanation": "The passage says {{Oliver kapi-noya mas te karar na izin ki Luna awtonom seleti.}} — 'Oliver shakes his head but decides to let Luna make her own choice.'"
        },
        {
          "id": "read-s25-folsomnoli-huhu-3",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Luna after a full day in {{Folsomnoli huhu}}?",
          "passage": "Denwatu hu Oliver finfley per drevoxube, te xoroko Luna. Te sen daymo jage ji energipul. Oliver swal, \"Luna, yu no sen pilodo keseba?\"",
          "options": [
            "She is wide awake and full of energy.",
            "Oliver likes to work at night and sleep during the day.",
            "After work, he returns home, feeling very tired.",
            "He always sleeps at the same time every day, but Luna listens to her body and sleeps when she needs to.",
            "Together, they work happily, day or night, listening to their own rhythms."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te sen daymo jage ji energipul.}} — 'She is wide awake and full of energy.'"
        },
        {
          "id": "read-s25-folsomnoli-huhu-4",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about what the owls learn in {{Folsomnoli huhu}}?",
          "passage": "Xorfe den din, Oliver xidu na rahatu denwatu hu te sen pilodo, preciso kom Luna. Moydua ete le xwexi ki maxim bon satu cel na somno sen denwatu hu etesu jismu loga tas ete na fale to.",
          "options": [
            "They both learn that the best time to sleep is when their bodies tell them to.",
            "He spends the whole day flying around, catching mice, and watching over the forest.",
            "As Oliver lands on the tree branch, he sees Luna.",
            "He always sleeps at the same time every day, but Luna listens to her body and sleeps when she needs to.",
            "Together, they work happily, day or night, listening to their own rhythms."
          ],
          "correct": 0,
          "explanation": "The passage says {{Moydua ete le xwexi ki maxim bon satu cel na somno sen denwatu hu etesu jismu loga tas ete na fale to.}} — 'They both learn that the best time to sleep is when their bodies tell them to.'"
        },
        {
          "id": "read-s25-folsomnoli-huhu-5",
          "type": "mcq",
          "prompt": "In {{Folsomnoli huhu}}, what does {{pilodo}} mean?",
          "options": [
            "tired",
            "awake",
            "happy",
            "hungry",
            "quiet"
          ],
          "correct": 0,
          "explanation": "{{pilodo}} means 'tired'. The story says {{Oliver loga, \"Luna, eger yu no somno fe noce, yu xa sen pilodo.\"}} — '\"Luna, if you do not sleep at night, you will be tired,\" Oliver says.'",
          "passage": null
        },
        {
          "id": "read-s25-folsomnoli-huhu-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Te pasa total nuru fe na fley fe jowey, na bujo maux, ji na jawgu drevogeo.}}",
          "answer": "He spends the whole day flying around, catching mice, and watching over the forest.",
          "accept": [],
          "explanation": "The sentence reads {{Te pasa total nuru fe na fley fe jowey, na bujo maux, ji na jawgu drevogeo.}} — 'He spends the whole day flying around, catching mice, and watching over the forest.' {{pasa}} is 'spend (time)'; {{jawgu}} is 'watch over'."
        },
        {
          "id": "read-s25-folsomnoli-huhu-7",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Xorfe den din, Oliver xidu na rahatu denwatu hu te sen pilodo, preciso kom Luna.}}",
          "answer": "From that day on, Oliver tries to rest when he feels tired, just like Luna.",
          "accept": [],
          "explanation": "The sentence reads {{Xorfe den din, Oliver xidu na rahatu denwatu hu te sen pilodo, preciso kom Luna.}} — 'From that day on, Oliver tries to rest when he feels tired, just like Luna.' {{xidu na}} is 'try to'; {{preciso kom}} is 'just like'."
        },
        {
          "id": "read-s25-folsomnoli-huhu-8",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: Luna, however, wants to stay awake all night.",
          "answer": "Mas Luna vole na resta jage dur total noce.",
          "accept": [],
          "explanation": "The sentence reads {{Mas Luna vole na resta jage dur total noce.}} — 'Luna, however, wants to stay awake all night.' {{mas}} contrasts Luna with her father; {{resta jage}} is 'stay awake'."
        },
        {
          "id": "read-s25-folsomnoli-huhu-9",
          "type": "fill",
          "prompt": "Xafe ergo, te ruata cel ogar. Te sen ___.",
          "gloss": "After work, he returns home, feeling very tired.",
          "blanks": [
            {
              "answer": "daypilodo",
              "accept": []
            }
          ],
          "explanation": "The missing word is {{daypilodo}}. {{day-}} intensifies the adjective {{pilodo}}."
        },
        {
          "id": "read-s25-folsomnoli-huhu-10",
          "type": "fill",
          "prompt": "Te ___ xorsomno fe sama satu fe moy din, mas Luna ___ sesu jismu ji te somno denwatu hu te haja na fale to.",
          "gloss": "He always sleeps at the same time every day, but Luna listens to her body and sleeps when she needs to.",
          "blanks": [
            {
              "answer": "moywatu",
              "accept": []
            },
            {
              "answer": "jui",
              "accept": []
            }
          ],
          "explanation": "The missing words are {{moywatu}}, {{jui}}. {{moywatu}} is 'always'; {{jui}} is 'listen to'."
        }
      ]
    },
    {
      "id": "read-s06-nuru-in-xaher",
      "area": "reading",
      "title": "Nuru in xaher — A Day in the City",
      "blurb": "A girl loses her city map to the wind, borrows a pencil, and draws a new one that turns a day of sightseeing into a personal adventure.",
      "refs": [
        "Thirty Short Stories — Story 6",
        "Reading practice"
      ],
      "notes": [
        "The day is sequenced with {{unyum}}, {{xafe}}, and {{fe nurufini}}; each phrase anchors a new stage.",
        "{{abil na}} + verb expresses ability, and {{no abil na intizar}} is 'cannot wait'."
      ],
      "examples": [
        [
          "Ana exgi sesu harita cel na ewreka hosu, mas abruto lilvento fleygi harita of tesu hanta.",
          "Ana takes out her map to find the pond, but a sudden breeze sweeps the map out of her hands."
        ],
        [
          "Moyloka hu te visita, te maxusgi max detale tas sesu harita, fe na sengi to solunpul ji personli.",
          "Each place she visits, she adds more details to her map, making it unique and personal."
        ]
      ],
      "exercises": [
        {
          "id": "read-s06-nuru-in-xaher-1",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Ana starting her city day in {{Nuru in xaher}}?",
          "passage": "Ana jagecu joxudo. Nundin, te plani na kentan xaher. Xafe sobayam, te cudu sesu xaher-harita ji te anda cel bus-estodom.",
          "options": [
            "Today, she plans to explore the city.",
            "The park is large with many paths.",
            "Now, Ana is lost without her map.",
            "She walks over and asks if she can borrow their pencil.",
            "With her new map, Ana finds her way to the café she read about."
          ],
          "correct": 0,
          "explanation": "The passage says {{Nundin, te plani na kentan xaher.}} — 'Today, she plans to explore the city.'"
        },
        {
          "id": "read-s06-nuru-in-xaher-2",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the crowded bus and the park in {{Nuru in xaher}}?",
          "passage": "Bus sen daymo insanpul, mas te ewreka sidetul ner fe janela. Unyum, te visita parke. Parke sen day har multi dao.",
          "options": [
            "The bus is crowded, but she finds a seat near the window.",
            "She chases it, but it flies into a pond.",
            "Then, she sees children playing a game with a paper and pencil.",
            "Ana returns to the bench and tears a piece of paper from her notebook.",
            "She orders a sandwich and orange juice."
          ],
          "correct": 0,
          "explanation": "The passage says {{Bus sen daymo insanpul, mas te ewreka sidetul ner fe janela.}} — 'The bus is crowded, but she finds a seat near the window.'"
        },
        {
          "id": "read-s06-nuru-in-xaher-3",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the map flying into the pond in {{Nuru in xaher}}?",
          "passage": "Ana exgi sesu harita cel na ewreka hosu, mas abruto lilvento fleygi harita of tesu hanta. Te takibu to, mas to fley cel in lilhosu. Fe nunya, Ana sen sonxido wal sesu harita.",
          "options": [
            "She chases it, but it flies into a pond.",
            "First, she visits the park.",
            "Ana has an idea.",
            "She starts drawing the park and the paths she remembers.",
            "While eating, she adds more to her map, planning her next stops."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te takibu to, mas to fley cel in lilhosu.}} — 'She chases it, but it flies into a pond.'"
        },
        {
          "id": "read-s06-nuru-in-xaher-4",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the café and the new map in {{Nuru in xaher}}?",
          "passage": "To sen lil, bonatagine dom. Te peti sandwici ji bortokal-jusu. Dur na yam, te maxusgi max to tas sesu harita, ji te plani sesu jaxali celedom.",
          "options": [
            "While eating, she adds more to her map, planning her next stops.",
            "She sits on a bench, thinking.",
            "As she sketches, a friendly old man notices and comes over.",
            "After lunch, Ana visits the library and the museum, using her handmade map to guide her.",
            "She solved her problem creatively and learned more about the city than she ever would have with her old map."
          ],
          "correct": 0,
          "explanation": "The passage says {{Dur na yam, te maxusgi max to tas sesu harita, ji te plani sesu jaxali celedom.}} — 'While eating, she adds more to her map, planning her next stops.'"
        },
        {
          "id": "read-s06-nuru-in-xaher-5",
          "type": "mcq",
          "prompt": "In {{Nuru in xaher}}, what does {{sonxido}} mean?",
          "options": [
            "lost",
            "crowded",
            "proud",
            "curious",
            "hungry"
          ],
          "correct": 0,
          "explanation": "{{sonxido}} means 'lost'. The story says {{Fe nunya, Ana sen sonxido wal sesu harita.}} — 'Now, Ana is lost without her map.'",
          "passage": null
        },
        {
          "id": "read-s06-nuru-in-xaher-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Fe nunya, Ana sen sonxido wal sesu harita.}}",
          "answer": "Now, Ana is lost without her map.",
          "accept": [],
          "explanation": "The sentence reads {{Fe nunya, Ana sen sonxido wal sesu harita.}} — 'Now, Ana is lost without her map.' {{wal}} means 'without'; {{sonxido}} is 'lost'."
        },
        {
          "id": "read-s06-nuru-in-xaher-7",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Te bon kone parke ji te sahay Ana na maxusgi plu detale tas tesu harita.}}",
          "answer": "He knows the park well and helps her add details to her map.",
          "accept": [],
          "explanation": "The sentence reads {{Te bon kone parke ji te sahay Ana na maxusgi plu detale tas tesu harita.}} — 'He knows the park well and helps her add details to her map.' {{bon kone}} is 'know well'; {{maxusgi}} is 'add'."
        },
        {
          "id": "read-s06-nuru-in-xaher-8",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: She feels proud.",
          "answer": "Te ganjon fahuri.",
          "accept": [],
          "explanation": "The sentence reads {{Te ganjon fahuri.}} — 'She feels proud.' {{fahuri}} means 'proud'."
        },
        {
          "id": "read-s06-nuru-in-xaher-9",
          "type": "fill",
          "prompt": "Ana ___ sesu harita cel na ewreka hosu, mas abruto lilvento fleygi harita ___ tesu hanta.",
          "gloss": "Ana takes out her map to find the pond, but a sudden breeze sweeps the map out of her hands.",
          "blanks": [
            {
              "answer": "exgi",
              "accept": []
            },
            {
              "answer": "of",
              "accept": []
            }
          ],
          "explanation": "The missing words are {{exgi}}, {{of}}. {{exgi}} is 'take out'; {{of}} marks the source."
        },
        {
          "id": "read-s06-nuru-in-xaher-10",
          "type": "fill",
          "prompt": "Te ___ ___ sesu problema ji te xwexi max tem xaher kom te ger jixi yon sesu lama harita.",
          "gloss": "She solved her problem creatively and learned more about the city than she ever would have with her old map.",
          "blanks": [
            {
              "answer": "kreaabil",
              "accept": []
            },
            {
              "answer": "hala",
              "accept": []
            }
          ],
          "explanation": "The missing words are {{kreaabil}}, {{hala}}. {{kreaabil}} means 'creatively'; {{hala}} is 'solve'."
        }
      ]
    },
    {
      "id": "read-s14-tyojan-de-bwaw",
      "area": "reading",
      "title": "Tyojan de bwaw — A Dog's Challenge",
      "blurb": "A small dog outwits a food-stealing cat by burying his bowl and leaving a decoy, then keeps his trick a happy secret.",
      "refs": [
        "Thirty Short Stories — Story 14",
        "Reading practice"
      ],
      "notes": [
        "{{denwatu hu}} introduces a time clause: {{denwatu hu Wiskers ata}} 'when Wiskers comes'.",
        "The story uses {{le}} for completed actions and {{xidu na}} for attempts: {{Maks xidu na gardi}}."
      ],
      "examples": [
        [
          "Wiskers sangu-inidi denwatu hu Maks no oko, ji yam moy tesu yam.",
          "She sneaks in when Maks is not looking and eats all his food."
        ],
        [
          "Te le hala sesu day tyojan yon aselpul metode.",
          "He has solved his big challenge in an original way."
        ]
      ],
      "exercises": [
        {
          "id": "read-s14-tyojan-de-bwaw-1",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Maks and his family in {{Tyojan de bwaw}}?",
          "passage": "Maks sen lil bruno bwaw. Te ogar ton lutufpul famil. Maks lubi sesu famil, ji ete lubi te.",
          "options": [
            "Maks loves his family, and they love him.",
            "The neighbor's cat, Wiskers, always steals Maks's food.",
            "One sunny morning, Maks has an idea.",
            "When Wiskers comes, she sees the food and starts eating.",
            "Maks then digs up his food bowl."
          ],
          "correct": 0,
          "explanation": "The passage says {{Maks lubi sesu famil, ji ete lubi te.}} — 'Maks loves his family, and they love him.'"
        },
        {
          "id": "read-s14-tyojan-de-bwaw-2",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Wiskers stealing Maks's food in {{Tyojan de bwaw}}?",
          "passage": "Myaw de jara, Wiskers, moywatu cori yam de Maks. Maks xidu na gardi sesu pyale, mas Wiskers sen godomo gomyo. Wiskers sangu-inidi denwatu hu Maks no oko, ji yam moy tesu yam.",
          "options": [
            "She sneaks in when Maks is not looking and eats all his food.",
            "Maks loves his family, and they love him.",
            "Maks feels sad and hungry.",
            "Maks leaves just a bit of food to trick Wiskers.",
            "Wiskers gets bored and leaves."
          ],
          "correct": 0,
          "explanation": "The passage says {{Wiskers sangu-inidi denwatu hu Maks no oko, ji yam moy tesu yam.}} — 'She sneaks in when Maks is not looking and eats all his food.'"
        },
        {
          "id": "read-s14-tyojan-de-bwaw-3",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Maks's plan in {{Tyojan de bwaw}}?",
          "passage": "Un solapul soba, Maks xorhare idey. Te karar na goyu hongu in rukejarden. Te goyu amiku hongu, ji te inturangi sesu yampyale in to.",
          "options": [
            "He digs a deep hole and buries his food bowl in it.",
            "Every day, Maks faces a big challenge.",
            "Maks leaves just a bit of food to trick Wiskers.",
            "But soon, she notices there is not enough food.",
            "Every day, he buries his food and leaves a bit out for Wiskers."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te goyu amiku hongu, ji te inturangi sesu yampyale in to.}} — 'He digs a deep hole and buries his food bowl in it.'"
        },
        {
          "id": "read-s14-tyojan-de-bwaw-4",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about how Maks's family sees him in {{Tyojan de bwaw}}?",
          "passage": "Famil de Maks xorjui ki Maks sen maxmo hox ji ki te no haji sen daydenmo yamkal. Ete nilwatu ewreka siri de Maks, mas ete sen hox ki te ganjon bon. Maks ganjon fahuri.",
          "options": [
            "Maks's family notices that Maks is happier and not as hungry anymore.",
            "Maks watches from behind a bush, wagging his tail.",
            "He eats his food happily.",
            "Maks always gets his meal.",
            "Life is not always easy for a dog, but Maks proves that with a little creativity, any problem can be solved."
          ],
          "correct": 0,
          "explanation": "The passage says {{Famil de Maks xorjui ki Maks sen maxmo hox ji ki te no haji sen daydenmo yamkal.}} — 'Maks's family notices that Maks is happier and not as hungry anymore.'"
        },
        {
          "id": "read-s14-tyojan-de-bwaw-5",
          "type": "mcq",
          "prompt": "In {{Tyojan de bwaw}}, what does {{goyu}} mean?",
          "options": [
            "to dig",
            "to steal",
            "to bury",
            "to eat",
            "to guard"
          ],
          "correct": 0,
          "explanation": "{{goyu}} means 'to dig'. The story says {{Te karar na goyu hongu in rukejarden.}} — 'He decides to dig a hole in the backyard.'",
          "passage": null
        },
        {
          "id": "read-s14-tyojan-de-bwaw-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Te karar na goyu hongu in rukejarden.}}",
          "answer": "He decides to dig a hole in the backyard.",
          "accept": [],
          "explanation": "The sentence reads {{Te karar na goyu hongu in rukejarden.}} — 'He decides to dig a hole in the backyard.' {{goyu hongu}} is 'dig a hole'; {{rukejarden}} is 'backyard'."
        },
        {
          "id": "read-s14-tyojan-de-bwaw-7",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Wiskers posamusacu ji awidi.}}",
          "answer": "Wiskers gets bored and leaves.",
          "accept": [],
          "explanation": "The sentence reads {{Wiskers posamusacu ji awidi.}} — 'Wiskers gets bored and leaves.' {{posamusacu}} is 'get bored'; {{awidi}} is 'leave'."
        },
        {
          "id": "read-s14-tyojan-de-bwaw-8",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: He has solved his big challenge in an original way.",
          "answer": "Te le hala sesu day tyojan yon aselpul metode.",
          "accept": [],
          "explanation": "The sentence reads {{Te le hala sesu day tyojan yon aselpul metode.}} — 'He has solved his big challenge in an original way.' {{aselpul}} means 'original'; {{metode}} is 'method'."
        },
        {
          "id": "read-s14-tyojan-de-bwaw-9",
          "type": "fill",
          "prompt": "Te goyu amiku hongu, ji te ___ sesu yampyale in to.",
          "gloss": "He digs a deep hole and buries his food bowl in it.",
          "blanks": [
            {
              "answer": "inturangi",
              "accept": []
            }
          ],
          "explanation": "The missing word is {{inturangi}}. {{inturangi}} is 'bury'."
        },
        {
          "id": "read-s14-tyojan-de-bwaw-10",
          "type": "fill",
          "prompt": "Wiskers ___ ewreka ___ pyale.",
          "gloss": "Wiskers never finds the buried bowl.",
          "blanks": [
            {
              "answer": "nilwatu",
              "accept": []
            },
            {
              "answer": "inturangido",
              "accept": []
            }
          ],
          "explanation": "The missing words are {{nilwatu}}, {{inturangido}}. {{nilwatu}} is 'never'; {{inturangido}} is the passive participle 'buried'."
        }
      ]
    },
    {
      "id": "read-s07-magikali-drevo",
      "area": "reading",
      "title": "Magikali drevo fe mosem — The Magic Tree of Seasons",
      "blurb": "When a magic tree stops changing and winter loses its snow, a girl paints one leaf white and starts a chain of small actions.",
      "refs": [
        "Thirty Short Stories — Story 7",
        "Reading practice"
      ],
      "notes": [
        "{{fe}} + season names time: {{fe bijamosem}} 'in spring', {{fe bardimosem}} 'in winter'.",
        "{{fol}} means 'with, according to': {{alocu fol mosem}} 'change with the seasons'."
      ],
      "examples": [
        [
          "In lil deha, hay magikali drevo.",
          "In a small village, there is a magic tree."
        ],
        [
          "Mia xwexi ki dumara, lil aksyon abil na fale day alogi.",
          "Mia learns that sometimes, a small action can make a big difference."
        ]
      ],
      "exercises": [
        {
          "id": "read-s07-magikali-drevo-1",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the magic tree in spring in {{Magikali drevo fe mosem}}?",
          "passage": "In lil deha, hay magikali drevo. Hin drevo alocu fol mosem. Fe bijamosem, to hare pinku flura.",
          "options": [
            "In spring, it has pink flowers.",
            "In winter, it has no leaves, only snow.",
            "The villagers miss the snow.",
            "Mia talks to the tree.",
            "She paints a single leaf white."
          ],
          "correct": 0,
          "explanation": "The passage says {{Fe bijamosem, to hare pinku flura.}} — 'In spring, it has pink flowers.'"
        },
        {
          "id": "read-s07-magikali-drevo-2",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the winter without snow in {{Magikali drevo fe mosem}}?",
          "passage": "Un nyan, drevo esto na alocu. To sen bardimosem, mas drevo haji hare orange dahun. Dehatim walaganjon taluji.",
          "options": [
            "The villagers miss the snow.",
            "In summer, it has green leaves.",
            "A young girl, Mia, decides to help.",
            "The tree does not answer.",
            "First one leaf, then more, turn white."
          ],
          "correct": 0,
          "explanation": "The passage says {{Dehatim walaganjon taluji.}} — 'The villagers miss the snow.'"
        },
        {
          "id": "read-s07-magikali-drevo-3",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Mia's plan to bring color in {{Magikali drevo fe mosem}}?",
          "passage": "Te preporta kolor of ogar. Te hare roso, kijawi, orange, ji sefide kolorente. Te kolor un solo dahun sefide.",
          "options": [
            "She paints a single leaf white.",
            "She loves the tree and visits it every day.",
            "The tree does not answer.",
            "Slowly, the tree starts to change.",
            "Snow begins to fall."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te kolor un solo dahun sefide.}} — 'She paints a single leaf white.'"
        },
        {
          "id": "read-s07-magikali-drevo-4",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about what Mia learns in {{Magikali drevo fe mosem}}?",
          "passage": "Dehatim sen hox. Bardimosem ruata! Mia xwexi ki dumara, lil aksyon abil na fale day alogi.",
          "options": [
            "Mia learns that sometimes, a small action can make a big difference.",
            "Slowly, the tree starts to change.",
            "It is a miracle!",
            "The villagers learn that they can always help each other.",
            "They remember Mia's lesson and celebrate the magic tree together."
          ],
          "correct": 0,
          "explanation": "The passage says {{Mia xwexi ki dumara, lil aksyon abil na fale day alogi.}} — 'Mia learns that sometimes, a small action can make a big difference.'"
        },
        {
          "id": "read-s07-magikali-drevo-5",
          "type": "mcq",
          "prompt": "In {{Magikali drevo fe mosem}}, what does {{mosem}} mean?",
          "options": [
            "season",
            "tree",
            "snow",
            "color",
            "village"
          ],
          "correct": 0,
          "explanation": "{{mosem}} means 'season'. The story says {{Hin drevo alocu fol mosem.}} — 'This tree changes with the seasons.'",
          "passage": null
        },
        {
          "id": "read-s07-magikali-drevo-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Juni femyen, Mia, karar na sahay.}}",
          "answer": "A young girl, Mia, decides to help.",
          "accept": [],
          "explanation": "The sentence reads {{Juni femyen, Mia, karar na sahay.}} — 'A young girl, Mia, decides to help.' {{karar na sahay}} is 'decide to help'."
        },
        {
          "id": "read-s07-magikali-drevo-7",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Unyum, un dahun, xali, max to alocu sefide.}}",
          "answer": "First one leaf, then more, turn white.",
          "accept": [],
          "explanation": "The sentence reads {{Unyum, un dahun, xali, max to alocu sefide.}} — 'First one leaf, then more, turn white.' {{unyum}}, {{xali}}, {{max to}} sequence the change."
        },
        {
          "id": "read-s07-magikali-drevo-8",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: Mia learns that sometimes, a small action can make a big difference.",
          "answer": "Mia xwexi ki dumara, lil aksyon abil na fale day alogi.",
          "accept": [],
          "explanation": "The sentence reads {{Mia xwexi ki dumara, lil aksyon abil na fale day alogi.}} — 'Mia learns that sometimes, a small action can make a big difference.' {{dumara}} is 'sometimes'; {{alogi}} is 'difference'."
        },
        {
          "id": "read-s07-magikali-drevo-9",
          "type": "fill",
          "prompt": "Hin drevo ___ fol mosem.",
          "gloss": "This tree changes with the seasons.",
          "blanks": [
            {
              "answer": "alocu",
              "accept": []
            }
          ],
          "explanation": "The missing word is {{alocu}}. {{fol}} means 'with, according to'."
        },
        {
          "id": "read-s07-magikali-drevo-10",
          "type": "fill",
          "prompt": "To sen ___!",
          "gloss": "It is a miracle!",
          "blanks": [
            {
              "answer": "mujeza",
              "accept": []
            }
          ],
          "explanation": "The missing word is {{mujeza}}. {{mujeza}} means 'miracle'."
        }
      ]
    },
    {
      "id": "read-s10-bursolo-danseyen",
      "area": "reading",
      "title": "Bursolo danseyen — The Lonely Dancer",
      "blurb": "A boy hides his love of dancing after his friends laugh, then performs at a talent show and learns to dance for himself.",
      "refs": [
        "Thirty Short Stories — Story 10",
        "Reading practice"
      ],
      "notes": [
        "{{xoru na}} marks the start of an action: {{te xoru na dudanse}} 'he starts to dance'.",
        "{{denmaner hu}} introduces a manner clause: {{te danse denmaner hu te le nilwatu fale to}}."
      ],
      "examples": [
        [
          "Ete fikir ki to sen bobo ji nensuprem.",
          "They think it is silly and not cool."
        ],
        [
          "Te xoraham ki to hu te lubi da sen espesyal koski to sen tesu to, no koski alo ete suki to.",
          "He realizes that what he loves is special because it is his, not because others like it."
        ]
      ],
      "exercises": [
        {
          "id": "read-s10-bursolo-danseyen-1",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Sam and his dancing in {{Bursolo danseyen}}?",
          "passage": "In lil deha, hay nini har name Sam. Te lubi na danse. Moy din, xafe eskol, Sam danse in sesu kamer.",
          "options": [
            "Every day, after school, Sam dances in his room.",
            "They laugh about dancing.",
            "He starts to wonder if he should stop dancing.",
            "He misses the joy of dancing, but he remembers his friends' laughter.",
            "As he watches, Sam feels a spark inside him."
          ],
          "correct": 0,
          "explanation": "The passage says {{Moy din, xafe eskol, Sam danse in sesu kamer.}} — 'Every day, after school, Sam dances in his room.'"
        },
        {
          "id": "read-s10-bursolo-danseyen-2",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about what Sam's friends think in {{Bursolo danseyen}}?",
          "passage": "Un din, Sam ore sesu dostetim fe na pala. Ete haha tem danse. Ete fikir ki to sen bobo ji nensuprem.",
          "options": [
            "They think it is silly and not cool.",
            "Every day, after school, Sam dances in his room.",
            "The next day, Sam does not dance.",
            "On Saturday, there is a talent show at the school.",
            "He wants to dance."
          ],
          "correct": 0,
          "explanation": "The passage says {{Ete fikir ki to sen bobo ji nensuprem.}} — 'They think it is silly and not cool.'"
        },
        {
          "id": "read-s10-bursolo-danseyen-3",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the school talent show in {{Bursolo danseyen}}?",
          "passage": "Sam idi cel na oko. Multi estudiyen onexa. Ete lala, ete soti musikatul, ji ete hata loga humorxey.",
          "options": [
            "They sing, play instruments, and even tell jokes.",
            "His room is quiet.",
            "He misses the joy of dancing, but he remembers his friends' laughter.",
            "Everyone is sharing what they love.",
            "He knows his friends might not understand, but it does not matter anymore."
          ],
          "correct": 0,
          "explanation": "The passage says {{Ete lala, ete soti musikatul, ji ete hata loga humorxey.}} — 'They sing, play instruments, and even tell jokes.'"
        },
        {
          "id": "read-s10-bursolo-danseyen-4",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about how Sam changes in {{Bursolo danseyen}}?",
          "passage": "Sam ganjon fahuri. Te xoraham ki to hu te lubi da sen espesyal koski to sen tesu to, no koski alo ete suki to. Xorfe den din, Sam nilwatu esto na dudanse.",
          "options": [
            "He realizes that what he loves is special because it is his, not because others like it.",
            "He wants to show everyone the joy he feels when he moves to the music.",
            "His name is called, and he steps onto the stage.",
            "He dances like never before, with all his heart.",
            "He dances not for others, but for himself."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te xoraham ki to hu te lubi da sen espesyal koski to sen tesu to, no koski alo ete suki to.}} — 'He realizes that what he loves is special because it is his, not because others like it.'"
        },
        {
          "id": "read-s10-bursolo-danseyen-5",
          "type": "mcq",
          "prompt": "In {{Bursolo danseyen}}, what does {{konhwokudo}} mean?",
          "options": [
            "confused",
            "proud",
            "excited",
            "heavy",
            "quiet"
          ],
          "correct": 0,
          "explanation": "{{konhwokudo}} means 'confused'. The story says {{Sam ganjon hazuni ji konhwokudo.}} — 'Sam feels sad and confused.'",
          "passage": null
        },
        {
          "id": "read-s10-bursolo-danseyen-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Te xoru na jixivole kama te ingay na esto na dudanse.}}",
          "answer": "He starts to wonder if he should stop dancing.",
          "accept": [],
          "explanation": "The sentence reads {{Te xoru na jixivole kama te ingay na esto na dudanse.}} — 'He starts to wonder if he should stop dancing.' {{jixivole}} is 'wonder'; {{ingay na esto}} is 'should stop'."
        },
        {
          "id": "read-s10-bursolo-danseyen-7",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Te danse denmaner hu te le nilwatu fale to fe leya, yon sesu total tutum.}}",
          "answer": "He dances like never before, with all his heart.",
          "accept": [],
          "explanation": "The sentence reads {{Te danse denmaner hu te le nilwatu fale to fe leya, yon sesu total tutum.}} — 'He dances like never before, with all his heart.' {{denmaner hu}} is 'in the way that'; {{yon total tutum}} is 'with all his heart'."
        },
        {
          "id": "read-s10-bursolo-danseyen-8",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: He realizes that what he loves is special because it is his, not because others like it.",
          "answer": "Te xoraham ki to hu te lubi da sen espesyal koski to sen tesu to, no koski alo ete suki to.",
          "accept": [],
          "explanation": "The sentence reads {{Te xoraham ki to hu te lubi da sen espesyal koski to sen tesu to, no koski alo ete suki to.}} — 'He realizes that what he loves is special because it is his, not because others like it.' {{espesyal}} means 'special'; {{koski}} is 'because'."
        },
        {
          "id": "read-s10-bursolo-danseyen-9",
          "type": "fill",
          "prompt": "Moy din, ___ eskol, Sam danse in sesu kamer.",
          "gloss": "Every day, after school, Sam dances in his room.",
          "blanks": [
            {
              "answer": "xafe",
              "accept": []
            }
          ],
          "explanation": "The missing word is {{xafe}}. {{xafe}} means 'after'."
        },
        {
          "id": "read-s10-bursolo-danseyen-10",
          "type": "fill",
          "prompt": "Te jixi ki tesu doste ___ no aham, mas to no haji sen ___.",
          "gloss": "He knows his friends might not understand, but it does not matter anymore.",
          "blanks": [
            {
              "answer": "ible",
              "accept": []
            },
            {
              "answer": "muhim",
              "accept": []
            }
          ],
          "explanation": "The missing words are {{ible}}, {{muhim}}. {{ible}} is 'maybe'; {{muhim}} is 'important'."
        }
      ]
    },
    {
      "id": "read-s05-baytu-fe-multi-kamer",
      "area": "reading",
      "title": "Baytu fe multi kamer — The House of Many Rooms",
      "blurb": "Every room in a little village house has its own magic, and the house waits to share its secrets with anyone who needs them.",
      "refs": [
        "Thirty Short Stories — Story 5",
        "Reading practice"
      ],
      "notes": [
        "Relative clauses with {{hu in da}} and {{hu da}} identify the rooms and the people: {{familkamer hu in da kusen …}}.",
        "{{eger …}} introduces a condition, and the main clause follows without a special marker: {{eger bante ganjon hazuni, kusen sencu blue}}."
      ],
      "examples": [
        [
          "Ban mara, in xantipul deha, hay lil baytu hu da sen alopul nenkom moy alo baytu.",
          "Once upon a time, in a quiet village, there stood a little house that was different from all the others."
        ],
        [
          "Moy kamer in baytu pregi hoxya ji wao tas moyte hu da inkadam.",
          "Each room in the house brought joy and wonder to those who entered."
        ]
      ],
      "exercises": [
        {
          "id": "read-s05-baytu-fe-multi-kamer-1",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the little house in the village in {{Baytu fe multi kamer}}?",
          "passage": "Ban mara, in xantipul deha, hay lil baytu hu da sen alopul nenkom moy alo baytu. Moy kamer in baytu hare sesu suli magikali siri.",
          "options": [
            "Once upon a time, in a quiet village, there stood a little house that was different from all the others.",
            "The old kettle would whistle tunes that made the teacups spin joyfully around.",
            "This room knew how to cheer up anyone who walked in.",
            "It told stories of faraway lands and taught lessons about kindness and courage.",
            "At night, they came alive."
          ],
          "correct": 0,
          "explanation": "The passage says {{Ban mara, in xantipul deha, hay lil baytu hu da sen alopul nenkom moy alo baytu.}} — 'Once upon a time, in a quiet village, there stood a little house that was different from all the others.'"
        },
        {
          "id": "read-s05-baytu-fe-multi-kamer-2",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the kitchen's music in {{Baytu fe multi kamer}}?",
          "passage": "In kokikamer, kaxoke ji forke danse denwatu hu nilte oko. Oto toka ji cundotu cel na krea musika hu sol baytu abil na ore da. Lama boyletul fale plu melodi hu da kosa ki cayfenjan hox rota.",
          "options": [
            "The old kettle would whistle tunes that made the teacups spin joyfully around.",
            "Each room in the house had its own magical secret.",
            "If someone felt sad, the cushions turned blue.",
            "The mirror on the wall could talk.",
            "It was like having a new adventure every time you looked outside."
          ],
          "correct": 0,
          "explanation": "The passage says {{Lama boyletul fale plu melodi hu da kosa ki cayfenjan hox rota.}} — 'The old kettle would whistle tunes that made the teacups spin joyfully around.'"
        },
        {
          "id": "read-s05-baytu-fe-multi-kamer-3",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the living room cushions in {{Baytu fe multi kamer}}?",
          "passage": "Jaxali, hay familkamer hu in da kusen per sofa pimpan alocu fe kolor. Eger bante ganjon hazuni, kusen sencu blue. Eger te sen hox, oto brila yon luminpul jalo ji roso kolor.",
          "options": [
            "If someone felt sad, the cushions turned blue.",
            "They tapped and clinked to make music that only the house could hear.",
            "The bathroom was the most magical of all.",
            "Upstairs, there was a bedroom where the window showed different views every day.",
            "They played games and told each other stories of the days they were loved by children now grown."
          ],
          "correct": 0,
          "explanation": "The passage says {{Eger bante ganjon hazuni, kusen sencu blue.}} — 'If someone felt sad, the cushions turned blue.'"
        },
        {
          "id": "read-s05-baytu-fe-multi-kamer-4",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about what the house really is in {{Baytu fe multi kamer}}?",
          "passage": "Moy kamer in baytu pregi hoxya ji wao tas moyte hu da inkadam. Hin lil baytu in deha le nilwatu sen sol baytu; to sen magikapul ogar hu da intizar na diskonegi sesu siri tas he bante hu da haja oto.",
          "options": [
            "This little house in the village was never just a house; it was a home filled with magic, waiting to share its secrets with anyone who needed them.",
            "If they are happy, they sparkled with bright yellows and reds.",
            "It gave wise advice and always knew the right thing to say.",
            "One day it might display a sunny beach, and the next, a snowy mountain peak.",
            "At night, they came alive."
          ],
          "correct": 0,
          "explanation": "The passage says {{Hin lil baytu in deha le nilwatu sen sol baytu; to sen magikapul ogar hu da intizar na diskonegi sesu siri tas he bante hu da haja oto.}} — 'This little house in the village was never just a house; it was a home filled with magic, waiting to share its secrets with anyone who needed them.'"
        },
        {
          "id": "read-s05-baytu-fe-multi-kamer-5",
          "type": "mcq",
          "prompt": "In {{Baytu fe multi kamer}}, what does {{nasiha}} mean?",
          "options": [
            "advice",
            "story",
            "secret",
            "lesson",
            "music"
          ],
          "correct": 0,
          "explanation": "{{nasiha}} means 'advice'. The story says {{To gibe sofipul nasiha ji to moywatu jixi na loga nasibune xey.}} — 'It gave wise advice and always knew the right thing to say.'",
          "passage": null
        },
        {
          "id": "read-s05-baytu-fe-multi-kamer-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Hin kamer jixi ku kemaner na hoxgi he bante hu da inkadam.}}",
          "answer": "This room knew how to cheer up anyone who walked in.",
          "accept": [],
          "explanation": "The sentence reads {{Hin kamer jixi ku kemaner na hoxgi he bante hu da inkadam.}} — 'This room knew how to cheer up anyone who walked in.' {{hoxgi}} is 'cheer up'; {{inkadam}} is 'enter'."
        },
        {
          "id": "read-s05-baytu-fe-multi-kamer-7",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{To sen denpul kom na hare neo aventur moywatu hu yu oko hoy exya.}}",
          "answer": "It was like having a new adventure every time you looked outside.",
          "accept": [],
          "explanation": "The sentence reads {{To sen denpul kom na hare neo aventur moywatu hu yu oko hoy exya.}} — 'It was like having a new adventure every time you looked outside.' {{denpul kom}} is 'like'; {{hoy exya}} is 'outside'."
        },
        {
          "id": "read-s05-baytu-fe-multi-kamer-8",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: Each room in the house brought joy and wonder to those who entered.",
          "answer": "Moy kamer in baytu pregi hoxya ji wao tas moyte hu da inkadam.",
          "accept": [],
          "explanation": "The sentence reads {{Moy kamer in baytu pregi hoxya ji wao tas moyte hu da inkadam.}} — 'Each room in the house brought joy and wonder to those who entered.' {{pregi}} is 'bring'; {{wao}} is 'wonder'."
        },
        {
          "id": "read-s05-baytu-fe-multi-kamer-9",
          "type": "fill",
          "prompt": "Eger bante ganjon ___, kusen sencu blue.",
          "gloss": "If someone felt sad, the cushions turned blue.",
          "blanks": [
            {
              "answer": "hazuni",
              "accept": []
            }
          ],
          "explanation": "The missing word is {{hazuni}}. {{hazuni}} means 'sad'."
        },
        {
          "id": "read-s05-baytu-fe-multi-kamer-10",
          "type": "fill",
          "prompt": "Oto yuxi ji soho loga tas se hikaye tem watu ___ oto le ___ nini, hu da nun sen baligu.",
          "gloss": "They played games and told each other stories of the days they were loved by children now grown.",
          "blanks": [
            {
              "answer": "feki",
              "accept": []
            },
            {
              "answer": "belubi",
              "accept": []
            }
          ],
          "explanation": "The missing words are {{feki}}, {{belubi}}. {{feki}} introduces a non-specific time clause; {{belubi}} is the passive 'were loved'."
        }
      ]
    },
    {
      "id": "read-s24-dragon",
      "area": "reading",
      "title": "Dragon hu da no abil na exhawa atex — The Dragon Who Could Not Breathe Fire",
      "blurb": "A dragon who cannot breathe fire is mocked until his water breath saves the forest, and he learns that being different is useful.",
      "refs": [
        "Thirty Short Stories — Story 24",
        "Reading practice"
      ],
      "notes": [
        "{{no abil na}} + verb expresses inability, and {{hinto sengi}} introduces a result: {{Hinto sengi Drako hazuni}}.",
        "The passive-like {{na sen alopul}} names a state: {{Na sen alopul no sen bur}} 'being different is not bad'."
      ],
      "examples": [
        [
          "Te no abil na exhawa atex.",
          "He cannot breathe fire."
        ],
        [
          "Na sen alopul no sen bur.",
          "Being different is not bad."
        ]
      ],
      "exercises": [
        {
          "id": "read-s24-dragon-1",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Drako's difference in {{Dragon hu da no abil na exhawa atex}}?",
          "passage": "In xantipul drevogeo te jiwa, dragon har name Drako. Drako sen alopul fe moy alo dragon. Te no abil na exhawa atex.",
          "options": [
            "He cannot breathe fire.",
            "The other dragons laugh at him.",
            "One day, while Drako is by the lake, he hears a loud noise.",
            "The other dragons are far away.",
            "Drako flies back and forth, bringing water to the fire."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te no abil na exhawa atex.}} — 'He cannot breathe fire.'"
        },
        {
          "id": "read-s24-dragon-2",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the fire in the forest in {{Dragon hu da no abil na exhawa atex}}?",
          "passage": "Un din, durki Drako sen jali fe hosu, te ore day bursoti. Te oko hoy super ji te oko dudan. Drevogeo atex!",
          "options": [
            "The forest is on fire!",
            "He tries hard every day, but only water comes out of his mouth.",
            "He sits by the lake and looks at his reflection.",
            "Drako feels scared but knows he must do something.",
            "The animals come out of hiding."
          ],
          "correct": 0,
          "explanation": "The passage says {{Drevogeo atex!}} — 'The forest is on fire!'"
        },
        {
          "id": "read-s24-dragon-3",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Drako fighting the fire in {{Dragon hu da no abil na exhawa atex}}?",
          "passage": "Te fley cel atexne drevogeo. Te buka sesu munte ji te esprey sui cel atexxeto. Atex xoru na lilcu.",
          "options": [
            "He opens his mouth and sprays water on the flames.",
            "He looks up and sees smoke.",
            "The other dragons are far away.",
            "Slowly, the flames disappear.",
            "The other dragons return and see what Drako has done."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te buka sesu munte ji te esprey sui cel atexxeto.}} — 'He opens his mouth and sprays water on the flames.'"
        },
        {
          "id": "read-s24-dragon-4",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about what Drako realizes in {{Dragon hu da no abil na exhawa atex}}?",
          "passage": "Drako xoraham muhim banto. Na sen alopul no sen bur. Tesu sui-exhawa sen espesyal ji faydapul.",
          "options": [
            "Being different is not bad.",
            "They cannot help.",
            "They cheer for Drako.",
            "They no longer laugh at him.",
            "He helps keep the forest safe."
          ],
          "correct": 0,
          "explanation": "The passage says {{Na sen alopul no sen bur.}} — 'Being different is not bad.'"
        },
        {
          "id": "read-s24-dragon-5",
          "type": "mcq",
          "prompt": "In {{Dragon hu da no abil na exhawa atex}}, what does {{exhawa}} mean?",
          "options": [
            "to breathe",
            "to fly",
            "to spray",
            "to burn",
            "to hide"
          ],
          "correct": 0,
          "explanation": "{{exhawa}} means 'to breathe'. The story says {{Te no abil na exhawa atex.}} — 'He cannot breathe fire.'",
          "passage": null
        },
        {
          "id": "read-s24-dragon-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Te sidecu jali fe hosu ji te oko sesu aynaya.}}",
          "answer": "He sits by the lake and looks at his reflection.",
          "accept": [],
          "explanation": "The sentence reads {{Te sidecu jali fe hosu ji te oko sesu aynaya.}} — 'He sits by the lake and looks at his reflection.' {{sidecu}} is 'sit down'; {{aynaya}} is 'reflection'."
        },
        {
          "id": "read-s24-dragon-7",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Drako fley fronpul ji rupul, fe na preporta sui cel atex.}}",
          "answer": "Drako flies back and forth, bringing water to the fire.",
          "accept": [],
          "explanation": "The sentence reads {{Drako fley fronpul ji rupul, fe na preporta sui cel atex.}} — 'Drako flies back and forth, bringing water to the fire.' {{fronpul ji rupul}} is 'back and forth'; {{preporta}} is 'bring'."
        },
        {
          "id": "read-s24-dragon-8",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: From that day on, Drako is proud of who he is.",
          "answer": "Xorfe den din, Drako sen fahuri tem se.",
          "accept": [],
          "explanation": "The sentence reads {{Xorfe den din, Drako sen fahuri tem se.}} — 'From that day on, Drako is proud of who he is.' {{xorfe}} means 'from, since'; {{fahuri tem se}} is 'proud of himself'."
        },
        {
          "id": "read-s24-dragon-9",
          "type": "fill",
          "prompt": "Te no abil na ___ atex.",
          "gloss": "He cannot breathe fire.",
          "blanks": [
            {
              "answer": "exhawa",
              "accept": []
            }
          ],
          "explanation": "The missing word is {{exhawa}}. {{exhawa atex}} is 'breathe fire'."
        },
        {
          "id": "read-s24-dragon-10",
          "type": "fill",
          "prompt": "Atex xoru na ___.",
          "gloss": "The fire starts to die down.",
          "blanks": [
            {
              "answer": "lilcu",
              "accept": []
            }
          ],
          "explanation": "The missing word is {{lilcu}}. {{lilcu}} means 'die down'."
        }
      ]
    },
    {
      "id": "read-s29-day-problema",
      "area": "reading",
      "title": "Day problema — A Big Problem",
      "blurb": "A bear too big for his favorite restaurant tries one diet after another, hides in a cave, and finally discovers what really happened.",
      "refs": [
        "Thirty Short Stories — Story 29",
        "Reading practice"
      ],
      "notes": [
        "{{eger … xa}} forms a real condition: {{Eger mi yam … mi xa sencu maxmo dambo}}.",
        "{{hata maxmo}} means 'even more': {{Mas Big sencu hata maxmo day}}."
      ],
      "examples": [
        [
          "Fe fato, te sen maxim day baru hu da sonzay.",
          "Actually, he is the biggest bear that exists."
        ],
        [
          "Mas Big sencu hata maxmo day!",
          "But Big grows even bigger!"
        ]
      ],
      "exercises": [
        {
          "id": "read-s29-day-problema-1",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Big the bear in {{Day problema}}?",
          "passage": "Big sen daymo day baru. Fe fato, te sen maxim day baru hu da sonzay. Big no sen tesu real name.",
          "options": [
            "Actually, he is the biggest bear that exists.",
            "People rarely see Big because he has grown so large he can hardly fit through the door.",
            "He wants to start a diet!",
            "They are delivered to his house.",
            "One month passes."
          ],
          "correct": 0,
          "explanation": "The passage says {{Fe fato, te sen maxim day baru hu da sonzay.}} — 'Actually, he is the biggest bear that exists.'"
        },
        {
          "id": "read-s29-day-problema-2",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Big's problem in {{Day problema}}?",
          "passage": "Insan nadir oko Big koski te le sencu daydenmo day ki te eskaso abil na pasa pas dwer. Dento sen day problema, koski Big no haji abil na visita sesu preferido restoran. Fe folo, Big karar na sencu minmo day.",
          "options": [
            "That's a big problem, because Big can't visit his favorite restaurant anymore.",
            "Big is not his real name.",
            "On television, Big sees many ads.",
            "For a whole month, Big eats only light food.",
            "Big is even bigger."
          ],
          "correct": 0,
          "explanation": "The passage says {{Dento sen day problema, koski Big no haji abil na visita sesu preferido restoran.}} — 'That's a big problem, because Big can't visit his favorite restaurant anymore.'"
        },
        {
          "id": "read-s29-day-problema-3",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the result of Big's first diet in {{Day problema}}?",
          "passage": "Dur un total mesi, Big yam sol wazenlil yamxey. Mas Big sencu hata maxmo day!",
          "options": [
            "But Big grows even bigger!",
            "But everyone calls him Big, and everyone knows him as Big.",
            "Big's voice is muffled by the fat in his throat.",
            "A full season passes.",
            "Big becomes very thirsty and goes outside the cave to find some water."
          ],
          "correct": 0,
          "explanation": "The passage says {{Mas Big sencu hata maxmo day!}} — 'But Big grows even bigger!'"
        },
        {
          "id": "read-s29-day-problema-4",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Big's decision to hide in {{Day problema}}?",
          "passage": "Fe hin fase, te fikir ki tesu jiwa fe baru sen tahamulnenible. \"Mi xa sol sangu in gufa, teli of sosyaltim.\" Ji Big fale preciso dento.",
          "options": [
            "And Big does just that.",
            "So, Big decided to become less big.",
            "For a whole month, Big eats only light food.",
            "If his round face were the moon, his belly would be a planet.",
            "A full season passes."
          ],
          "correct": 0,
          "explanation": "The passage says {{Ji Big fale preciso dento.}} — 'And Big does just that.'"
        },
        {
          "id": "read-s29-day-problema-5",
          "type": "mcq",
          "prompt": "In {{Day problema}}, what does {{dyeta}} mean?",
          "options": [
            "diet",
            "food",
            "weight",
            "sugar",
            "restaurant"
          ],
          "correct": 0,
          "explanation": "{{dyeta}} means 'diet'. The story says {{Te vole na xoru dyeta!}} — 'He wants to start a diet!'",
          "passage": null
        },
        {
          "id": "read-s29-day-problema-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Dento sen day problema, koski Big no haji abil na visita sesu preferido restoran.}}",
          "answer": "That's a big problem, because Big can't visit his favorite restaurant anymore.",
          "accept": [],
          "explanation": "The sentence reads {{Dento sen day problema, koski Big no haji abil na visita sesu preferido restoran.}} — 'That's a big problem, because Big can't visit his favorite restaurant anymore.' {{no haji abil na}} is 'can no longer'; {{preferido}} is 'favorite'."
        },
        {
          "id": "read-s29-day-problema-7",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Mas Big sencu hata maxmo day!}}",
          "answer": "But Big grows even bigger!",
          "accept": [],
          "explanation": "The sentence reads {{Mas Big sencu hata maxmo day!}} — 'But Big grows even bigger!' {{hata maxmo}} is 'even more'; {{day}} is 'big'."
        },
        {
          "id": "read-s29-day-problema-8",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: And Big does just that.",
          "answer": "Ji Big fale preciso dento.",
          "accept": [],
          "explanation": "The sentence reads {{Ji Big fale preciso dento.}} — 'And Big does just that.' {{preciso dento}} means 'just that'."
        },
        {
          "id": "read-s29-day-problema-9",
          "type": "fill",
          "prompt": "Fe folo, Big karar na sencu ___ day.",
          "gloss": "So, Big decided to become less big.",
          "blanks": [
            {
              "answer": "minmo",
              "accept": []
            }
          ],
          "explanation": "The missing word is {{minmo}}. {{minmo}} is 'less'."
        },
        {
          "id": "read-s29-day-problema-10",
          "type": "fill",
          "prompt": "Mas Big sencu ___ ___ day!",
          "gloss": "But Big grows even bigger!",
          "blanks": [
            {
              "answer": "hata",
              "accept": []
            },
            {
              "answer": "maxmo",
              "accept": []
            }
          ],
          "explanation": "The missing words are {{hata}}, {{maxmo}}. {{hata maxmo}} means 'even more'."
        }
      ]
    },
    {
      "id": "read-s09-tom-lubi-na-pala",
      "area": "reading",
      "title": "Tom lubi na pala — Tom Loves to Talk",
      "blurb": "A talkative squirrel loses his friends to his own opinions, then learns from a quiet old lady that listening brings people back.",
      "refs": [
        "Thirty Short Stories — Story 9",
        "Reading practice"
      ],
      "notes": [
        "{{max}} and {{maxmo}} mark degree: {{pala max}}, {{maxmo bon kom ijen}}.",
        "{{fe dumara}} means 'sometimes': {{fe dumara, sotikalya sen maxmo bon kom ijen}}."
      ],
      "examples": [
        [
          "Mas sidetul fe jowey de te sencu kal.",
          "But the seats around him become empty."
        ],
        [
          "Tom xwexi ki fe dumara, sotikalya sen maxmo bon kom ijen.",
          "Tom learns that sometimes, silence is better than an opinion."
        ]
      ],
      "exercises": [
        {
          "id": "read-s09-tom-lubi-na-pala-1",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Tom's constant talking in {{Tom lubi na pala}}?",
          "passage": "Te pala fe sobayam, midiyam, ji axamyam. Te hare ijen tem moyto: yamxey, klima, kitabu, ji hata kolor.",
          "options": [
            "He has an opinion about everything: food, weather, books, and even colors.",
            "They are too busy to meet him, they say.",
            "But the seats around him become empty.",
            "An old lady sits beside him.",
            "The lady just listens."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te hare ijen tem moyto: yamxey, klima, kitabu, ji hata kolor.}} — 'He has an opinion about everything: food, weather, books, and even colors.'"
        },
        {
          "id": "read-s09-tom-lubi-na-pala-2",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Tom's friends making excuses in {{Tom lubi na pala}}?",
          "passage": "Un din, Tom xorjui ban ajabu to. Tesu doste xoru na fatmin benge. Ete loga ki ete sen godomo ixgalupul cel na randevu te.",
          "options": [
            "His friends start making excuses.",
            "He has an opinion about everything: food, weather, books, and even colors.",
            "He gives more opinions.",
            "He misses his friends.",
            "Tom nods but doesn't understand."
          ],
          "correct": 0,
          "explanation": "The passage says {{Tesu doste xoru na fatmin benge.}} — 'His friends start making excuses.'"
        },
        {
          "id": "read-s09-tom-lubi-na-pala-3",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the old lady in the park in {{Tom lubi na pala}}?",
          "passage": "Un axam, te side in parke, fe na oko alo ete hu da haha ji bla. Lao femixu side fe comen de te. Te yamgi piu, wal na loga he ban lexi.",
          "options": [
            "She feeds the birds without a word.",
            "Tom talks more to fill the silence.",
            "He talks about his problem.",
            "He talks and talks.",
            "He looks at the lady."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te yamgi piu, wal na loga he ban lexi.}} — 'She feeds the birds without a word.'"
        },
        {
          "id": "read-s09-tom-lubi-na-pala-4",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about what Tom learns in {{Tom lubi na pala}}?",
          "passage": "Tom xwexi ki fe dumara, sotikalya sen maxmo bon kom ijen. Hanman, tesu doste ruata. Tom haji hare ijen, mas fe nunya, te dishadya aloto: sesu watu cel na ore.",
          "options": [
            "Tom learns that sometimes, silence is better than an opinion.",
            "He talks and talks.",
            "The next day, he tries something new.",
            "His friends talk more.",
            "They laugh and stay longer."
          ],
          "correct": 0,
          "explanation": "The passage says {{Tom xwexi ki fe dumara, sotikalya sen maxmo bon kom ijen.}} — 'Tom learns that sometimes, silence is better than an opinion.'"
        },
        {
          "id": "read-s09-tom-lubi-na-pala-5",
          "type": "mcq",
          "prompt": "In {{Tom lubi na pala}}, what does {{sotikalya}} mean?",
          "options": [
            "silence",
            "opinion",
            "excuse",
            "park",
            "story"
          ],
          "correct": 0,
          "explanation": "{{sotikalya}} means 'silence'. The story says {{Tom pala max cel na pulgi sotikalya.}} — 'Tom talks more to fill the silence.'",
          "passage": null
        },
        {
          "id": "read-s09-tom-lubi-na-pala-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Te walaganjon sesu doste.}}",
          "answer": "He misses his friends.",
          "accept": [],
          "explanation": "The sentence reads {{Te walaganjon sesu doste.}} — 'He misses his friends.' {{walaganjon}} is 'miss (someone)'."
        },
        {
          "id": "read-s09-tom-lubi-na-pala-7",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Te kapi-siya, tabasum, ji ore.}}",
          "answer": "He nods, smiles, and listens.",
          "accept": [],
          "explanation": "The sentence reads {{Te kapi-siya, tabasum, ji ore.}} — 'He nods, smiles, and listens.' {{kapi-siya}} is 'nod'; the three verbs share the subject Tom."
        },
        {
          "id": "read-s09-tom-lubi-na-pala-8",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: Tom learns that sometimes, silence is better than an opinion.",
          "answer": "Tom xwexi ki fe dumara, sotikalya sen maxmo bon kom ijen.",
          "accept": [],
          "explanation": "The sentence reads {{Tom xwexi ki fe dumara, sotikalya sen maxmo bon kom ijen.}} — 'Tom learns that sometimes, silence is better than an opinion.' {{fe dumara}} is 'sometimes'; {{maxmo bon kom}} is 'better than'."
        },
        {
          "id": "read-s09-tom-lubi-na-pala-9",
          "type": "fill",
          "prompt": "Ete loga ki ete sen ___ ___ cel na randevu te.",
          "gloss": "They are too busy to meet him, they say.",
          "blanks": [
            {
              "answer": "godomo",
              "accept": []
            },
            {
              "answer": "ixgalupul",
              "accept": []
            }
          ],
          "explanation": "The missing words are {{godomo}}, {{ixgalupul}}. {{godomo}} is 'too much'; {{ixgalupul}} is 'busy'."
        },
        {
          "id": "read-s09-tom-lubi-na-pala-10",
          "type": "fill",
          "prompt": "Tom haji hare ijen, mas fe nunya, te ___ aloto: sesu ___ cel na ore.",
          "gloss": "Tom still has opinions, but now, he shares something else: his time to listen.",
          "blanks": [
            {
              "answer": "dishadya",
              "accept": []
            },
            {
              "answer": "watu",
              "accept": []
            }
          ],
          "explanation": "The missing words are {{dishadya}}, {{watu}}. {{dishadya}} is 'share'; {{watu}} is 'time'."
        }
      ]
    },
    {
      "id": "read-s28-jixifil-swini",
      "area": "reading",
      "title": "Jixifil swini — The Curious Pigs",
      "blurb": "Pigs in a battery farm hear rumors of cows, chickens, and green grass, and curiosity turns their pen into a place of dreams.",
      "refs": [
        "Thirty Short Stories — Story 28",
        "Reading practice"
      ],
      "notes": [
        "{{kam}} introduces an embedded yes/no question: {{Te jixivole ku kam to sen sati}}.",
        "The story quotes direct speech, but the reporting clauses stay outside the quotation marks."
      ],
      "examples": [
        [
          "Te xorjixi ki alo tipo fe hewan sonzay.",
          "He hears that other animals exist."
        ],
        [
          "Fe hataya ki ete le nilwatu oko hin plu xey, swini duregi na onxala.",
          "Though they have never seen these things, the pigs keep hoping."
        ]
      ],
      "exercises": [
        {
          "id": "read-s28-jixifil-swini-1",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about life in the pig farm in {{Jixifil swini}}?",
          "passage": "In day serye-nongyodom, hay swinilari. Ete ogar in lil kafas. Ete duoko sol insan ji alo swini.",
          "options": [
            "They live in small pens.",
            "He hears that other animals exist.",
            "He wants to know more.",
            "0044 is wise.",
            "1112 tells his friends what 0044 said."
          ],
          "correct": 0,
          "explanation": "The passage says {{Ete ogar in lil kafas.}} — 'They live in small pens.'"
        },
        {
          "id": "read-s28-jixifil-swini-2",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the rumor about other animals in {{Jixifil swini}}?",
          "passage": "Un din, swini har name 1112 ore fumbun. Te xorjixi ki alo tipo fe hewan sonzay. Te jixivole ku kam to sen sati.",
          "options": [
            "He hears that other animals exist.",
            "They live in small pens.",
            "He wants to know more.",
            "1112's eyes widen.",
            "They start asking more questions."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te xorjixi ki alo tipo fe hewan sonzay.}} — 'He hears that other animals exist.'"
        },
        {
          "id": "read-s28-jixifil-swini-3",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about 0044's response in {{Jixifil swini}}?",
          "passage": "1112 swal tas te, \"0044, kam alo hewan sonzay?\" 0044 hanman kapi-siya.",
          "options": [
            "0044 nods slowly.",
            "He wonders if it is true.",
            "But 1112 is curious.",
            "0044 smiles.",
            "Now, they are curious too."
          ],
          "correct": 0,
          "explanation": "The passage says {{0044 hanman kapi-siya.}} — '0044 nods slowly.'"
        },
        {
          "id": "read-s28-jixifil-swini-4",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the farm's new mood in {{Jixifil swini}}?",
          "passage": "Nongyodom sencu loka fe roya ji jixifilya. Fe hataya ki ete le nilwatu oko hin plu xey, swini duregi na onxala. Mas xafe bankwanti watu, swini xoru na fikir ki to sen sol komploto-teori.",
          "options": [
            "Though they have never seen these things, the pigs keep hoping.",
            "1112 tells his friends what 0044 said.",
            "They have never seen the color green.",
            "The pigs continue to talk about other animals and the color green.",
            "They spread the rumors."
          ],
          "correct": 0,
          "explanation": "The passage says {{Fe hataya ki ete le nilwatu oko hin plu xey, swini duregi na onxala.}} — 'Though they have never seen these things, the pigs keep hoping.'"
        },
        {
          "id": "read-s28-jixifil-swini-5",
          "type": "mcq",
          "prompt": "In {{Jixifil swini}}, what does {{fumbun}} mean?",
          "options": [
            "rumor",
            "truth",
            "dream",
            "question",
            "story"
          ],
          "correct": 0,
          "explanation": "{{fumbun}} means 'rumor'. The story says {{Un din, swini har name 1112 ore fumbun.}} — 'One day, a pig named 1112 hears a rumor.'",
          "passage": null
        },
        {
          "id": "read-s28-jixifil-swini-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Te jixivole ku kam to sen sati.}}",
          "answer": "He wonders if it is true.",
          "accept": [],
          "explanation": "The sentence reads {{Te jixivole ku kam to sen sati.}} — 'He wonders if it is true.' {{jixivole ku kam}} is 'wonder whether'."
        },
        {
          "id": "read-s28-jixifil-swini-7",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Swini imaje hin kijawi gras.}}",
          "answer": "The pigs imagine this green grass.",
          "accept": [],
          "explanation": "The sentence reads {{Swini imaje hin kijawi gras.}} — 'The pigs imagine this green grass.' {{imaje}} is 'imagine'; {{kijawi gras}} is 'green grass'."
        },
        {
          "id": "read-s28-jixifil-swini-8",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: Though they have never seen these things, the pigs keep hoping.",
          "answer": "Fe hataya ki ete le nilwatu oko hin plu xey, swini duregi na onxala.",
          "accept": [],
          "explanation": "The sentence reads {{Fe hataya ki ete le nilwatu oko hin plu xey, swini duregi na onxala.}} — 'Though they have never seen these things, the pigs keep hoping.' {{fe hataya ki}} is 'although'; {{onxala}} is 'hope'."
        },
        {
          "id": "read-s28-jixifil-swini-9",
          "type": "fill",
          "prompt": "Ete duoko ___ insan ji alo swini.",
          "gloss": "They only see humans and other pigs.",
          "blanks": [
            {
              "answer": "sol",
              "accept": []
            }
          ],
          "explanation": "The missing word is {{sol}}. {{sol}} means 'only'."
        },
        {
          "id": "read-s28-jixifil-swini-10",
          "type": "fill",
          "prompt": "Ete le ___ oko kolor ___.",
          "gloss": "They have never seen the color green.",
          "blanks": [
            {
              "answer": "nilwatu",
              "accept": []
            },
            {
              "answer": "kijawi",
              "accept": []
            }
          ],
          "explanation": "The missing words are {{nilwatu}}, {{kijawi}}. {{nilwatu}} is 'never'; {{kijawi}} is 'green'."
        }
      ]
    },
    {
      "id": "read-s30-na-seleti-keto",
      "area": "reading",
      "title": "Na seleti keto — What to Choose",
      "blurb": "A young man weighs five careers, sees the drawbacks of each, and wishes for a job that would not force him to choose.",
      "refs": [
        "Thirty Short Stories — Story 30",
        "Reading practice"
      ],
      "notes": [
        "{{na}} + verb turns the verb into a noun phrase: {{Na alim sen katina ergo}} 'teaching is hard work'.",
        "The careers are sequenced with {{unyum}}, {{jaxali}}, {{xafe dento}}, and {{fe fini}}."
      ],
      "examples": [
        [
          "Te jixivole ku te ingay na ergo fe ke ergoxey.",
          "He wonders which job he should do."
        ],
        [
          "Te jixi ki te musi na seleti.",
          "He knows he has to choose."
        ]
      ],
      "exercises": [
        {
          "id": "read-s30-na-seleti-keto-1",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Olaf's list of jobs in {{Na seleti keto}}?",
          "passage": "Olaf side fe mesa de kokikamer. Te jixivole ku te ingay na ergo fe ke ergoxey. Te oko hoy sesu lista fe ible seleti.",
          "options": [
            "He wonders which job he should do.",
            "Each one is different.",
            "He remembers his favorite teachers from school.",
            "Next, Olaf thinks about being a doctor.",
            "He loves telling stories."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te jixivole ku te ingay na ergo fe ke ergoxey.}} — 'He wonders which job he should do.'"
        },
        {
          "id": "read-s30-na-seleti-keto-2",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Olaf considering teaching in {{Na seleti keto}}?",
          "passage": "Unyum, Olaf kolyo na sencu alimyen. Te suki na sahay aloete na xwexi. Te memori sesu preferido alimyen of eskol.",
          "options": [
            "He likes helping others learn.",
            "There are many jobs to consider.",
            "But he worries about the long hours.",
            "He imagines himself in a white coat, caring for patients.",
            "But he knows it can be a lonely job."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te suki na sahay aloete na xwexi.}} — 'He likes helping others learn.'"
        },
        {
          "id": "read-s30-na-seleti-keto-3",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Olaf considering medicine in {{Na seleti keto}}?",
          "passage": "Jaxali, Olaf kolyo na sencu medisyen. Te vole na sahay insan na resta seha. Te imaje se in sefide kotu, fe na kanho bemedisyen.",
          "options": [
            "He wants to help people stay healthy.",
            "They made learning fun.",
            "Becoming a doctor is not easy.",
            "Writing lets him use his imagination.",
            "He enjoys cooking."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te vole na sahay insan na resta seha.}} — 'He wants to help people stay healthy.'"
        },
        {
          "id": "read-s30-na-seleti-keto-4",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Olaf's final feeling in {{Na seleti keto}}?",
          "passage": "Olaf amiku innafasu. Te jixi ki te musi na seleti. Mas te no suki dento.",
          "options": [
            "He knows he has to choose.",
            "Writers often work alone for long hours.",
            "Being a chef is not always fun.",
            "Engineers make things work better.",
            "But he worries about the math and science."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te jixi ki te musi na seleti.}} — 'He knows he has to choose.'"
        },
        {
          "id": "read-s30-na-seleti-keto-5",
          "type": "mcq",
          "prompt": "In {{Na seleti keto}}, what does {{seleti}} mean?",
          "options": [
            "to choose",
            "to work",
            "to study",
            "to imagine",
            "to worry"
          ],
          "correct": 0,
          "explanation": "{{seleti}} means 'to choose'. The story says {{Te oko hoy sesu lista fe ible seleti.}} — 'He looks at his list of choices.'",
          "passage": null
        },
        {
          "id": "read-s30-na-seleti-keto-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Moyun to teyan neo banto.}}",
          "answer": "Each one offers something new.",
          "accept": [],
          "explanation": "The sentence reads {{Moyun to teyan neo banto.}} — 'Each one offers something new.' {{moyun to}} is 'each one'; {{teyan}} is 'offer'."
        },
        {
          "id": "read-s30-na-seleti-keto-7",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Mas te jixi ki to abil na sen bursolo ergoxey.}}",
          "answer": "But he knows it can be a lonely job.",
          "accept": [],
          "explanation": "The sentence reads {{Mas te jixi ki to abil na sen bursolo ergoxey.}} — 'But he knows it can be a lonely job.' {{bursolo ergoxey}} is 'a lonely job'."
        },
        {
          "id": "read-s30-na-seleti-keto-8",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: He knows he has to choose.",
          "answer": "Te jixi ki te musi na seleti.",
          "accept": [],
          "explanation": "The sentence reads {{Te jixi ki te musi na seleti.}} — 'He knows he has to choose.' {{musi na}} is 'must'; {{seleti}} is 'choose'."
        },
        {
          "id": "read-s30-na-seleti-keto-9",
          "type": "fill",
          "prompt": "Te suki na ___ aloete na ___.",
          "gloss": "He likes helping others learn.",
          "blanks": [
            {
              "answer": "sahay",
              "accept": []
            },
            {
              "answer": "xwexi",
              "accept": []
            }
          ],
          "explanation": "The missing words are {{sahay}}, {{xwexi}}. {{sahay}} is 'help'; {{xwexi}} is 'learn'."
        },
        {
          "id": "read-s30-na-seleti-keto-10",
          "type": "fill",
          "prompt": "Mas kokikamer sen ___, ___ loka.",
          "gloss": "But the kitchen is a busy, stressful place.",
          "blanks": [
            {
              "answer": "bursotipul",
              "accept": []
            },
            {
              "answer": "estresne",
              "accept": []
            }
          ],
          "explanation": "The missing words are {{bursotipul}}, {{estresne}}. {{bursotipul}} is 'busy'; {{estresne}} is 'stressful'."
        }
      ]
    },
    {
      "id": "read-s19-bursolo-yuxiyen",
      "area": "reading",
      "title": "Bursolo yuxiyen — The Lonely Gamer",
      "blurb": "A boy whose life revolves around video games loses his online friends when his parents set limits, then slowly finds balance offline.",
      "refs": [
        "Thirty Short Stories — Story 19",
        "Reading practice"
      ],
      "notes": [
        "{{xidu na}} marks an attempt: {{Johan xidu na pasa watu fe exya}} 'Johan tries to spend time outside'.",
        "{{minmo}} and {{maxmo}} track gradual change: {{lilmo maxmo bon}}, {{minmo muhim}}."
      ],
      "examples": [
        [
          "Ete awcudu komputer ji ete limite yuxiwatu de Johan cel un satu fe moyun din.",
          "They take away the computer and limit Johan's game time to one hour a day."
        ],
        [
          "Johan xwexi ki egalwazen sen muhim, ji ki jiwa abil na sen amusane iji in neto ji ex neto.",
          "Johan learns that balance is key, and life can be fun both online and offline."
        ]
      ],
      "exercises": [
        {
          "id": "read-s19-bursolo-yuxiyen-1",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Johan's gaming routine in {{Bursolo yuxiyen}}?",
          "passage": "Johan daysuki na yuxi videoyuxi. Fe moy din xafe eskol, Johan side fe fronta de komputer ji te yuxi dur plu satu. Johan hare multi netodoste.",
          "options": [
            "Every day after school, Johan sits in front of the computer and plays for hours.",
            "Johan's parents do not like this.",
            "Johan's parents decide to set strict rules.",
            "Johan misses playing with friends.",
            "Johan's parents notice the change."
          ],
          "correct": 0,
          "explanation": "The passage says {{Fe moy din xafe eskol, Johan side fe fronta de komputer ji te yuxi dur plu satu.}} — 'Every day after school, Johan sits in front of the computer and plays for hours.'"
        },
        {
          "id": "read-s19-bursolo-yuxiyen-2",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about what Johan's parents think in {{Bursolo yuxiyen}}?",
          "passage": "Atre de Johan no suki hinto. Ete oko ki Johan moywatu yuxi ji ki te nilwatu exidi. Ete loga, \"Johan, yu godo yuxi.\"",
          "options": [
            "They see Johan always playing and never going outside.",
            "Johan has many online friends.",
            "They take away the computer and limit Johan's game time to one hour a day.",
            "They find other people to play with.",
            "They try to help by suggesting new activities."
          ],
          "correct": 0,
          "explanation": "The passage says {{Ete oko ki Johan moywatu yuxi ji ki te nilwatu exidi.}} — 'They see Johan always playing and never going outside.'"
        },
        {
          "id": "read-s19-bursolo-yuxiyen-3",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the new rules in {{Bursolo yuxiyen}}?",
          "passage": "Atre de Johan karar na establi xucyofil regula. Ete awcudu komputer ji ete limite yuxiwatu de Johan cel un satu fe moyun din. Fe xoru, Johan sen gadibu.",
          "options": [
            "They take away the computer and limit Johan's game time to one hour a day.",
            "They laugh, chat, and play together.",
            "Slowly, Johan's online friends stop talking to him.",
            "Johan's classmates do not share the same interests.",
            "They see Johan becoming more isolated."
          ],
          "correct": 0,
          "explanation": "The passage says {{Ete awcudu komputer ji ete limite yuxiwatu de Johan cel un satu fe moyun din.}} — 'They take away the computer and limit Johan's game time to one hour a day.'"
        },
        {
          "id": "read-s19-bursolo-yuxiyen-4",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about what Johan learns in {{Bursolo yuxiyen}}?",
          "passage": "Te membrocu in basketoboltim ji te xorhare plu neo doste. Videoyuxi sencu minmo muhim, ji Johan xoru na befuraha alo xey. Johan xwexi ki egalwazen sen muhim, ji ki jiwa abil na sen amusane iji in neto ji ex neto.",
          "options": [
            "Johan learns that balance is key, and life can be fun both online and offline.",
            "But Johan does not feel excited about these things.",
            "It is not easy.",
            "Johan still misses his online friends.",
            "But day by day, Johan starts to feel a little better."
          ],
          "correct": 0,
          "explanation": "The passage says {{Johan xwexi ki egalwazen sen muhim, ji ki jiwa abil na sen amusane iji in neto ji ex neto.}} — 'Johan learns that balance is key, and life can be fun both online and offline.'"
        },
        {
          "id": "read-s19-bursolo-yuxiyen-5",
          "type": "mcq",
          "prompt": "In {{Bursolo yuxiyen}}, what does {{egalwazen}} mean?",
          "options": [
            "balance",
            "friendship",
            "school",
            "game",
            "rule"
          ],
          "correct": 0,
          "explanation": "{{egalwazen}} means 'balance'. The story says {{\"Imi vole ki yu hare egalwazen.\"}} — '\"We want you to have a balance.\"'",
          "passage": null
        },
        {
          "id": "read-s19-bursolo-yuxiyen-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Johan walaganjon na yuxi ton doste.}}",
          "answer": "Johan misses playing with friends.",
          "accept": [],
          "explanation": "The sentence reads {{Johan walaganjon na yuxi ton doste.}} — 'Johan misses playing with friends.' {{walaganjon}} is 'miss'; the verb follows {{na yuxi}}."
        },
        {
          "id": "read-s19-bursolo-yuxiyen-7",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Videoyuxi sencu minmo muhim, ji Johan xoru na befuraha alo xey.}}",
          "answer": "The games become less important, and Johan begins to enjoy other things.",
          "accept": [],
          "explanation": "The sentence reads {{Videoyuxi sencu minmo muhim, ji Johan xoru na befuraha alo xey.}} — 'The games become less important, and Johan begins to enjoy other things.' {{minmo muhim}} is 'less important'; {{befuraha}} is 'enjoy'."
        },
        {
          "id": "read-s19-bursolo-yuxiyen-8",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: Johan learns that balance is key, and life can be fun both online and offline.",
          "answer": "Johan xwexi ki egalwazen sen muhim, ji ki jiwa abil na sen amusane iji in neto ji ex neto.",
          "accept": [],
          "explanation": "The sentence reads {{Johan xwexi ki egalwazen sen muhim, ji ki jiwa abil na sen amusane iji in neto ji ex neto.}} — 'Johan learns that balance is key, and life can be fun both online and offline.' {{iji … ji …}} is 'both … and …'."
        },
        {
          "id": "read-s19-bursolo-yuxiyen-9",
          "type": "fill",
          "prompt": "Ete ___ komputer ji ete ___ yuxiwatu de Johan cel un satu fe moyun din.",
          "gloss": "They take away the computer and limit Johan's game time to one hour a day.",
          "blanks": [
            {
              "answer": "awcudu",
              "accept": []
            },
            {
              "answer": "limite",
              "accept": []
            }
          ],
          "explanation": "The missing words are {{awcudu}}, {{limite}}. {{awcudu}} is 'take away'; {{limite}} is 'limit'."
        },
        {
          "id": "read-s19-bursolo-yuxiyen-10",
          "type": "fill",
          "prompt": "Un din, patre de Johan ___ ton te.",
          "gloss": "One day, Johan's dad sits down with him.",
          "blanks": [
            {
              "answer": "sidecu",
              "accept": []
            }
          ],
          "explanation": "The missing word is {{sidecu}}. {{sidecu}} means 'sit down'."
        }
      ]
    },
    {
      "id": "read-s17-wanjido-basa",
      "area": "reading",
      "title": "Wanjido basa — The Forgotten Language",
      "blurb": "A girl finds a book in a forgotten script, learns it from the village scholar, and brings the old language back to life.",
      "refs": [
        "Thirty Short Stories — Story 17",
        "Reading practice"
      ],
      "notes": [
        "{{te no esto}} means 'she does not give up'; {{esto}} can mean 'stop' or 'quit'.",
        "The passive-like {{ahamible}} 'understandable' uses {{-ible}}, and {{linkudo}} 'connected' uses {{-do}}."
      ],
      "examples": [
        [
          "Oto sen in wanjido basa.",
          "They are in a forgotten language."
        ],
        [
          "Lama basa rujiwa.",
          "The old language comes alive again."
        ]
      ],
      "exercises": [
        {
          "id": "read-s17-wanjido-basa-1",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Ana's old book in {{Wanjido basa}}?",
          "passage": "In lil deha, Ana ewreka lama kitabu. To sen gubarpul ji bangura. Lexi in to sen ajabu.",
          "options": [
            "The words inside are strange.",
            "Ana wants to read the book.",
            "He knows many languages.",
            "Few people can read it now.",
            "Some look like animals, others like plants."
          ],
          "correct": 0,
          "explanation": "The passage says {{Lexi in to sen ajabu.}} — 'The words inside are strange.'"
        },
        {
          "id": "read-s17-wanjido-basa-2",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Senyor Ley the scholar in {{Wanjido basa}}?",
          "passage": "Ana visita Senyor Ley, jixipulyen de deha. Te jixi multi basa. Senyor Ley oko kitabu.",
          "options": [
            "Ana visits Mr. Ley, the village scholar.",
            "The words inside are strange.",
            "He says it is in an ancient script.",
            "They meet every day after school.",
            "She repeats their sounds."
          ],
          "correct": 0,
          "explanation": "The passage says {{Ana visita Senyor Ley, jixipulyen de deha.}} — 'Ana visits Mr. Ley, the village scholar.'"
        },
        {
          "id": "read-s17-wanjido-basa-3",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about learning the letters in {{Wanjido basa}}?",
          "passage": "Unyum, Senyor Ley alim harufi tas Ana. Oto no sen sim kom he ban harufi hu te kone da. Bannumer harufi okocu kom hewan, aloete okocu kom planta.",
          "options": [
            "Some look like animals, others like plants.",
            "They are in a forgotten language.",
            "Mr. Ley looks at the book.",
            "But Mr. Ley agrees to help Ana.",
            "It is hard at first, but she does not give up."
          ],
          "correct": 0,
          "explanation": "The passage says {{Bannumer harufi okocu kom hewan, aloete okocu kom planta.}} — 'Some look like animals, others like plants.'"
        },
        {
          "id": "read-s17-wanjido-basa-4",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the language coming back in {{Wanjido basa}}?",
          "passage": "Te xoru lil darsulari. Max nini preata fe moyun safta. Lama basa rujiwa.",
          "options": [
            "The old language comes alive again.",
            "She reads simple sentences.",
            "One day, Ana reads a whole page by herself.",
            "They are amazed.",
            "The village remembers its past."
          ],
          "correct": 0,
          "explanation": "The passage says {{Lama basa rujiwa.}} — 'The old language comes alive again.'"
        },
        {
          "id": "read-s17-wanjido-basa-5",
          "type": "mcq",
          "prompt": "In {{Wanjido basa}}, what does {{wanjido}} mean?",
          "options": [
            "forgotten",
            "ancient",
            "strange",
            "dusty",
            "fragile"
          ],
          "correct": 0,
          "explanation": "{{wanjido}} means 'forgotten'. The story says {{Oto sen in wanjido basa.}} — 'They are in a forgotten language.'",
          "passage": null
        },
        {
          "id": "read-s17-wanjido-basa-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Xosu insan abil na doxo to fe nunya.}}",
          "answer": "Few people can read it now.",
          "accept": [],
          "explanation": "The sentence reads {{Xosu insan abil na doxo to fe nunya.}} — 'Few people can read it now.' {{xosu}} is 'few'; {{fe nunya}} is 'now'."
        },
        {
          "id": "read-s17-wanjido-basa-7",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Te ganjon linkudo tas sesu lefeatrelari.}}",
          "answer": "She feels connected to her ancestors.",
          "accept": [],
          "explanation": "The sentence reads {{Te ganjon linkudo tas sesu lefeatrelari.}} — 'She feels connected to her ancestors.' {{linkudo}} is 'connected'; {{lefeatrelari}} is 'ancestors'."
        },
        {
          "id": "read-s17-wanjido-basa-8",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: The old language comes alive again.",
          "answer": "Lama basa rujiwa.",
          "accept": [],
          "explanation": "The sentence reads {{Lama basa rujiwa.}} — 'The old language comes alive again.' {{rujiwa}} is 'come alive again'."
        },
        {
          "id": "read-s17-wanjido-basa-9",
          "type": "fill",
          "prompt": "Lexi in to sen ___.",
          "gloss": "The words inside are strange.",
          "blanks": [
            {
              "answer": "ajabu",
              "accept": []
            }
          ],
          "explanation": "The missing word is {{ajabu}}. {{ajabu}} means 'strange'."
        },
        {
          "id": "read-s17-wanjido-basa-10",
          "type": "fill",
          "prompt": "To sen ___ fe xoru, mas te no ___.",
          "gloss": "It is hard at first, but she does not give up.",
          "blanks": [
            {
              "answer": "katina",
              "accept": []
            },
            {
              "answer": "esto",
              "accept": []
            }
          ],
          "explanation": "The missing words are {{katina}}, {{esto}}. {{katina}} is 'hard'; {{esto}} is 'give up/stop'."
        }
      ]
    },
    {
      "id": "read-s08-sonxido-tiketo",
      "area": "reading",
      "title": "Sonxido tiketo — The Lost Ticket",
      "blurb": "A girl loses her bus ticket in a crowded bus, remembers a stranger touching her bag, and recovers it through a lost-items app.",
      "refs": [
        "Thirty Short Stories — Story 8",
        "Reading practice"
      ],
      "notes": [
        "{{hisi ki}} reports a felt event: {{Ana hisi ki bante lamese tesu bao}}.",
        "{{ible}} marks a possibility: {{Ible, tiketo le exsokutu}} 'Maybe the ticket fell out'."
      ],
      "examples": [
        [
          "Ana hisi ki bante lamese tesu bao.",
          "Ana feels someone touch her bag."
        ],
        [
          "Lutufpul femixu le ewreka tiketo in bus.",
          "A kind woman has found the ticket on the bus."
        ]
      ],
      "exercises": [
        {
          "id": "read-s08-sonxido-tiketo-1",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Ana on the bus in {{Sonxido tiketo}}?",
          "passage": "Ana sen in bus. Te idi cel xahercentro. Te hare lil bao ji bus-tiketo.",
          "options": [
            "She has a small bag and a bus ticket.",
            "People are everywhere.",
            "A man stands very close to Ana.",
            "Ana feels someone touch her bag.",
            "Ana gets off the bus."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te hare lil bao ji bus-tiketo.}} — 'She has a small bag and a bus ticket.'"
        },
        {
          "id": "read-s08-sonxido-tiketo-2",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about someone touching Ana's bag in {{Sonxido tiketo}}?",
          "passage": "Ana hisi ki bante lamese tesu bao. Te oko mas te oko nil bur xey. Ana fikir tem sesu din.",
          "options": [
            "Ana feels someone touch her bag.",
            "The bus is very full.",
            "At the next stop, many people get on the bus.",
            "The bus moves again.",
            "They want to see a new movie."
          ],
          "correct": 0,
          "explanation": "The passage says {{Ana hisi ki bante lamese tesu bao.}} — 'Ana feels someone touch her bag.'"
        },
        {
          "id": "read-s08-sonxido-tiketo-3",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the missing ticket in {{Sonxido tiketo}}?",
          "passage": "Te xerca sesu tiketo cel na moni watu fe sesu rudao. Mas tiketo no sen denloka! Te xerca moyloka in sesu bao.",
          "options": [
            "She looks everywhere in her bag.",
            "Ana stands because there are no free seats.",
            "Ana smiles and nods.",
            "She is going to meet her friend, Sara.",
            "Ana is worried."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te xerca moyloka in sesu bao.}} — 'She looks everywhere in her bag.'"
        },
        {
          "id": "read-s08-sonxido-tiketo-4",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Ana's idea in {{Sonxido tiketo}}?",
          "passage": "Denwatu, Ana xorhare idey. Te exgi sesu telifon ji te yongu aplikaxey fe sonxido xey in bus. Te taypu, \"Sonxido bus-tiketo, dao de xahercentro.\"",
          "options": [
            "She takes out her phone and opens an app for lost items on buses.",
            "She looks but sees nothing wrong.",
            "No ticket.",
            "She does not know what to do.",
            "The woman gives her the ticket."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te exgi sesu telifon ji te yongu aplikaxey fe sonxido xey in bus.}} — 'She takes out her phone and opens an app for lost items on buses.'"
        },
        {
          "id": "read-s08-sonxido-tiketo-5",
          "type": "mcq",
          "prompt": "In {{Sonxido tiketo}}, what does {{exsokutu}} mean?",
          "options": [
            "to fall out",
            "to steal",
            "to find",
            "to touch",
            "to reply"
          ],
          "correct": 0,
          "explanation": "{{exsokutu}} means 'to fall out'. The story says {{Ible, tiketo le exsokutu.}} — 'Maybe the ticket fell out.'",
          "passage": null
        },
        {
          "id": "read-s08-sonxido-tiketo-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Ana yolyu.}}",
          "answer": "Ana is worried.",
          "accept": [],
          "explanation": "The sentence reads {{Ana yolyu.}} — 'Ana is worried.' {{yolyu}} means 'worried'."
        },
        {
          "id": "read-s08-sonxido-tiketo-7",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Lutufpul femixu le ewreka tiketo in bus.}}",
          "answer": "A kind woman has found the ticket on the bus.",
          "accept": [],
          "explanation": "The sentence reads {{Lutufpul femixu le ewreka tiketo in bus.}} — 'A kind woman has found the ticket on the bus.' {{lutufpul}} is 'kind'; {{le ewreka}} is past 'has found'."
        },
        {
          "id": "read-s08-sonxido-tiketo-8",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: She learns to be careful with her ticket next time.",
          "answer": "Te xwexi na sen juipul tem tiketo jaxali mara.",
          "accept": [],
          "explanation": "The sentence reads {{Te xwexi na sen juipul tem tiketo jaxali mara.}} — 'She learns to be careful with her ticket next time.' {{juipul}} means 'careful'."
        },
        {
          "id": "read-s08-sonxido-tiketo-9",
          "type": "fill",
          "prompt": "Ana ___ ki bante ___ tesu bao.",
          "gloss": "Ana feels someone touch her bag.",
          "blanks": [
            {
              "answer": "hisi",
              "accept": []
            },
            {
              "answer": "lamese",
              "accept": []
            }
          ],
          "explanation": "The missing words are {{hisi}}, {{lamese}}. {{hisi}} is 'feel'; {{lamese}} is 'touch'."
        },
        {
          "id": "read-s08-sonxido-tiketo-10",
          "type": "fill",
          "prompt": "Mas tiketo no sen ___!",
          "gloss": "But the ticket is not there!",
          "blanks": [
            {
              "answer": "denloka",
              "accept": []
            }
          ],
          "explanation": "The missing word is {{denloka}}. {{denloka}} means 'there'."
        }
      ]
    },
    {
      "id": "read-s16-fleyabil-mumu",
      "area": "reading",
      "title": "Fleyabil Mumu — The Flying Cow",
      "blurb": "A cow facing slaughter wishes to fly, becomes a balloon cow, and chooses a free life in the sky.",
      "refs": [
        "Thirty Short Stories — Story 16",
        "Reading practice"
      ],
      "notes": [
        "{{xiwon ki}} introduces a wish: {{Mu xiwon ki te abil na awfley}}.",
        "{{yon na onexa}} expresses means: {{Ete sahay Mu yon na onexa tas te sahi dao}}."
      ],
      "examples": [
        [
          "Te oko piu in asman ji te roya tem huruya.",
          "She sees birds in the sky and dreams of freedom."
        ],
        [
          "Mu karar na resta balon.",
          "Mu decides to stay a balloon."
        ]
      ],
      "exercises": [
        {
          "id": "read-s16-fleyabil-mumu-1",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Mu on the farm in {{Fleyabil Mumu}}?",
          "passage": "Mumu Mu ogar in lil nongyodom. Te befuraha kijawi gras ji termopul sola. Un din, Mu ore nongyoyen fe na pala.",
          "options": [
            "She enjoys the green grass and the warm sun.",
            "Mu feels scared and sad.",
            "The fairy hears Mu's wish.",
            "She starts to float in the air.",
            "But soon, she faces a challenge."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te befuraha kijawi gras ji termopul sola.}} — 'She enjoys the green grass and the warm sun.'"
        },
        {
          "id": "read-s16-fleyabil-mumu-2",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the farmer's news in {{Fleyabil Mumu}}?",
          "passage": "Te loga ki Mu ner xa bemasogi. Mu ganjon fobipul ji hazuni. Mu xiwon ki te abil na awfley.",
          "options": [
            "He says Mu will be butchered soon.",
            "Mu the cow lives on a small farm.",
            "One evening, a kind fairy visits Mu.",
            "The fairy waves her wand and says magic words.",
            "She sees the fields and the river from high up."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te loga ki Mu ner xa bemasogi.}} — 'He says Mu will be butchered soon.'"
        },
        {
          "id": "read-s16-fleyabil-mumu-3",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the fairy's magic in {{Fleyabil Mumu}}?",
          "passage": "Peari harka sesu magikagumbo ji te loga magikapul lexi. Abruto, Mu hisicu wazenlil. Te xoru na levita in hawa.",
          "options": [
            "Suddenly, Mu feels light.",
            "Mu wishes she can fly away.",
            "She decides to help Mu.",
            "Mu is now a balloon cow!",
            "The wind is strong."
          ],
          "correct": 0,
          "explanation": "The passage says {{Abruto, Mu hisicu wazenlil.}} — 'Suddenly, Mu feels light.'"
        },
        {
          "id": "read-s16-fleyabil-mumu-4",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Mu's choice in {{Fleyabil Mumu}}?",
          "passage": "Te loga tas Mu ki te abil na resta kom balon or na rupul sen mumu. Mu karar na resta balon. Te lubi sesu neo jiwa in asman.",
          "options": [
            "Mu decides to stay a balloon.",
            "Mu worries she might get lost or hurt.",
            "The birds understand.",
            "She floats gently down and rests.",
            "She watches over the farm from afar, free and safe."
          ],
          "correct": 0,
          "explanation": "The passage says {{Mu karar na resta balon.}} — 'Mu decides to stay a balloon.'"
        },
        {
          "id": "read-s16-fleyabil-mumu-5",
          "type": "mcq",
          "prompt": "In {{Fleyabil Mumu}}, what does {{awfley}} mean?",
          "options": [
            "to fly away",
            "to run away",
            "to float",
            "to fall",
            "to rest"
          ],
          "correct": 0,
          "explanation": "{{awfley}} means 'to fly away'. The story says {{Mu xiwon ki te abil na awfley.}} — 'Mu wishes she can fly away.'",
          "passage": null
        },
        {
          "id": "read-s16-fleyabil-mumu-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Te oko piu in asman ji te roya tem huruya.}}",
          "answer": "She sees birds in the sky and dreams of freedom.",
          "accept": [],
          "explanation": "The sentence reads {{Te oko piu in asman ji te roya tem huruya.}} — 'She sees birds in the sky and dreams of freedom.' {{roya tem}} is 'dream of'; {{huruya}} is 'freedom'."
        },
        {
          "id": "read-s16-fleyabil-mumu-7",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Ete sahay Mu yon na onexa tas te sahi dao.}}",
          "answer": "They help Mu by showing her the way.",
          "accept": [],
          "explanation": "The sentence reads {{Ete sahay Mu yon na onexa tas te sahi dao.}} — 'They help Mu by showing her the way.' {{yon na onexa}} is 'by showing'; {{sahi dao}} is 'the right way'."
        },
        {
          "id": "read-s16-fleyabil-mumu-8",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: Mu's wish comes true, and she never fears farmers again.",
          "answer": "Xiwon de Mu realcu, ji te nilwatu ripul befobi nongyoyen.",
          "accept": [],
          "explanation": "The sentence reads {{Xiwon de Mu realcu, ji te nilwatu ripul befobi nongyoyen.}} — 'Mu's wish comes true, and she never fears farmers again.' {{realcu}} is 'come true'; {{ripul}} is 'again'."
        },
        {
          "id": "read-s16-fleyabil-mumu-9",
          "type": "fill",
          "prompt": "Abruto, Mu hisicu ___.",
          "gloss": "Suddenly, Mu feels light.",
          "blanks": [
            {
              "answer": "wazenlil",
              "accept": []
            }
          ],
          "explanation": "The missing word is {{wazenlil}}. {{wazenlil}} means 'light (weight)'."
        },
        {
          "id": "read-s16-fleyabil-mumu-10",
          "type": "fill",
          "prompt": "Mu yolyu ki te xa ible ___ or ___.",
          "gloss": "Mu worries she might get lost or hurt.",
          "blanks": [
            {
              "answer": "sonxicu",
              "accept": []
            },
            {
              "answer": "sungaycu",
              "accept": []
            }
          ],
          "explanation": "The missing words are {{sonxicu}}, {{sungaycu}}. {{sonxicu}} is 'get lost'; {{sungaycu}} is 'get hurt'."
        }
      ]
    },
    {
      "id": "read-s15-ambisipul-letuka",
      "area": "reading",
      "title": "Ambisipul letuka — The Ambitious Lettuce",
      "blurb": "A lettuce sets out to conquer the world, gains a rabbit companion, and wins people over with words and kindness rather than force.",
      "refs": [
        "Thirty Short Stories — Story 15",
        "Reading practice"
      ],
      "notes": [
        "{{abil na suyon}} expresses ability, and its negative is {{no abil na suyon}}.",
        "{{yon}} names the instrument: {{krasi to yon sesu lexi ji lutuf}} 'conquer it with words and kindness'."
      ],
      "examples": [
        [
          "Te roya tem na krasi globa.",
          "He dreams of conquering the world."
        ],
        [
          "Te krasi to yon sesu lexi ji lutuf.",
          "He conquers it with his words and kindness."
        ]
      ],
      "exercises": [
        {
          "id": "read-s15-ambisipul-letuka-1",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Letus and his dream in {{Ambisipul letuka}}?",
          "passage": "Hay letuka namedo Letus. Letus ogar in lil jarden. Te roya tem na krasi globa.",
          "options": [
            "He dreams of conquering the world.",
            "He rolls out of the garden and onto the road.",
            "Konen laughs but decides to help.",
            "The cows laugh at Letus's dream.",
            "Konen thinks for a moment."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te roya tem na krasi globa.}} — 'He dreams of conquering the world.'"
        },
        {
          "id": "read-s15-ambisipul-letuka-2",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Letus meeting Konen in {{Ambisipul letuka}}?",
          "passage": "Te ewreka kargux har name Konen. \"Yu idi cel keloka?\" Konen swal. \"Mi xa krasi globa,\" Letus jawabu.",
          "options": [
            "He meets a rabbit named Konen.",
            "Letus lives in a small garden.",
            "They start traveling together.",
            "Letus does not listen.",
            "They enter a big city."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te ewreka kargux har name Konen.}} — 'He meets a rabbit named Konen.'"
        },
        {
          "id": "read-s15-ambisipul-letuka-3",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about crossing the river in {{Ambisipul letuka}}?",
          "passage": "Letus no abil na suyon. Konen fikir dur momento. Te ewreka day dahun ji te krea navi tas Letus.",
          "options": [
            "She finds a big leaf and makes a boat for Letus.",
            "One morning, Letus decides to start his journey.",
            "They pass by a farm.",
            "They cross the river safely.",
            "Letus feels small but determined."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te ewreka day dahun ji te krea navi tas Letus.}} — 'She finds a big leaf and makes a boat for Letus.'"
        },
        {
          "id": "read-s15-ambisipul-letuka-4",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about how Letus conquers the world in {{Ambisipul letuka}}?",
          "passage": "Letuka Letus no krasi globa yon kowa. Te krasi to yon sesu lexi ji lutuf. Te jenmin ki hata lil letuka abil na fale day alogi.",
          "options": [
            "He conquers it with his words and kindness.",
            "He finds a stage in the park.",
            "His words touch their hearts.",
            "Letus becomes famous.",
            "People start to eat healthier and become kinder."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te krasi to yon sesu lexi ji lutuf.}} — 'He conquers it with his words and kindness.'"
        },
        {
          "id": "read-s15-ambisipul-letuka-5",
          "type": "mcq",
          "prompt": "In {{Ambisipul letuka}}, what does {{krasi}} mean?",
          "options": [
            "to conquer",
            "to travel",
            "to dream",
            "to speak",
            "to cheer"
          ],
          "correct": 0,
          "explanation": "{{krasi}} means 'to conquer'. The story says {{Te roya tem na krasi globa.}} — 'He dreams of conquering the world.'",
          "passage": null
        },
        {
          "id": "read-s15-ambisipul-letuka-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Te duregi na frongulun.}}",
          "answer": "He keeps rolling forward.",
          "accept": [],
          "explanation": "The sentence reads {{Te duregi na frongulun.}} — 'He keeps rolling forward.' {{duregi na}} is 'keep on'; {{frongulun}} is 'roll forward'."
        },
        {
          "id": "read-s15-ambisipul-letuka-7",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Ete xoru na hura Letus.}}",
          "answer": "They start to cheer for Letus.",
          "accept": [],
          "explanation": "The sentence reads {{Ete xoru na hura Letus.}} — 'They start to cheer for Letus.' {{hura}} is 'cheer for'."
        },
        {
          "id": "read-s15-ambisipul-letuka-8",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: He conquers it with his words and kindness.",
          "answer": "Te krasi to yon sesu lexi ji lutuf.",
          "accept": [],
          "explanation": "The sentence reads {{Te krasi to yon sesu lexi ji lutuf.}} — 'He conquers it with his words and kindness.' {{yon}} marks the instrument; {{lexi}} is 'words'."
        },
        {
          "id": "read-s15-ambisipul-letuka-9",
          "type": "fill",
          "prompt": "Letus no abil na ___.",
          "gloss": "Letus cannot swim.",
          "blanks": [
            {
              "answer": "suyon",
              "accept": []
            }
          ],
          "explanation": "The missing word is {{suyon}}. {{suyon}} means 'swim'."
        },
        {
          "id": "read-s15-ambisipul-letuka-10",
          "type": "fill",
          "prompt": "Letus ganjon ___, mas te sen ___.",
          "gloss": "Letus feels small but determined.",
          "blanks": [
            {
              "answer": "lil",
              "accept": []
            },
            {
              "answer": "kararpul",
              "accept": []
            }
          ],
          "explanation": "The missing words are {{lil}}, {{kararpul}}. {{kararpul}} means 'determined'."
        }
      ]
    },
    {
      "id": "read-s20-maxim-bon-fruta",
      "area": "reading",
      "title": "Maxim bon fruta — The Best Fruit",
      "blurb": "An apple, a banana, and a grape campaign to be named the best fruit, and the election ends in a tie that teaches them what 'best' really means.",
      "refs": [
        "Thirty Short Stories — Story 20",
        "Reading practice"
      ],
      "notes": [
        "{{maxim bon}} is the superlative of {{bon}}; {{maxmo … kom}} compares two things.",
        "{{tem}} means 'about': {{na sen maxim bon fruta no sen tem na sen maxmo bon kom aloete}}."
      ],
      "examples": [
        [
          "Moy ete vole na sen maxim bon fruta.",
          "They all want to be the best fruit."
        ],
        [
          "Ete aham ki na sen maxim bon fruta no sen tem na sen maxmo bon kom aloete.",
          "They understand that being the best fruit is not about being better than others."
        ]
      ],
      "exercises": [
        {
          "id": "read-s20-maxim-bon-fruta-1",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the fruits in the garden in {{Maxim bon fruta}}?",
          "passage": "In jarden, hay multi fruta. Hay pingo, banana, ji puto. Moy ete vole na sen maxim bon fruta.",
          "options": [
            "They all want to be the best fruit.",
            "The apple is red and shiny.",
            "The banana is yellow and sweet.",
            "The grape is small but juicy.",
            "The fruits gather in the garden."
          ],
          "correct": 0,
          "explanation": "The passage says {{Moy ete vole na sen maxim bon fruta.}} — 'They all want to be the best fruit.'"
        },
        {
          "id": "read-s20-maxim-bon-fruta-2",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about preparing the election in {{Maxim bon fruta}}?",
          "passage": "Un din, ete karar na organisa tupyo-seleti. Moy fruta tonata in jarden. Ete establi sahnidom ji ete jumbicu cel na hotuba.",
          "options": [
            "The fruits gather in the garden.",
            "Each fruit believes it is the best.",
            "The apple goes first.",
            "Next, the banana takes the stage.",
            "Then, the grape steps up."
          ],
          "correct": 0,
          "explanation": "The passage says {{Moy fruta tonata in jarden.}} — 'The fruits gather in the garden.'"
        },
        {
          "id": "read-s20-maxim-bon-fruta-3",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about what the fruits remember in {{Maxim bon fruta}}?",
          "passage": "Alo fruta ore ji fikir. Ete memori moyun mara feki ete le befuraha na yam moyun fruta. Ete xoraham ki moyun fruta sen espesyal fe sesu suli maner.",
          "options": [
            "They remember all the times they enjoyed eating each fruit.",
            "There is an apple, a banana, and a grape.",
            "They set up a stage and prepare to give speeches.",
            "The results surprise everyone.",
            "The garden cheers."
          ],
          "correct": 0,
          "explanation": "The passage says {{Ete memori moyun mara feki ete le befuraha na yam moyun fruta.}} — 'They remember all the times they enjoyed eating each fruit.'"
        },
        {
          "id": "read-s20-maxim-bon-fruta-4",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about what the fruits understand in {{Maxim bon fruta}}?",
          "passage": "Ete aham ki na sen maxim bon fruta no sen tem na sen maxmo bon kom aloete. To sen tem na sen maxim bon fe na sen se. Moyun fruta sen maxim bon fe sesu suli maner.",
          "options": [
            "They understand that being the best fruit is not about being better than others.",
            "Each fruit believes it is the best.",
            "The apple, the banana, and the grape all win.",
            "The fruits celebrate together.",
            "The garden is happy and full of love."
          ],
          "correct": 0,
          "explanation": "The passage says {{Ete aham ki na sen maxim bon fruta no sen tem na sen maxmo bon kom aloete.}} — 'They understand that being the best fruit is not about being better than others.'"
        },
        {
          "id": "read-s20-maxim-bon-fruta-5",
          "type": "mcq",
          "prompt": "In {{Maxim bon fruta}}, what does {{tupyo}} mean?",
          "options": [
            "to vote",
            "to win",
            "to speak",
            "to gather",
            "to celebrate"
          ],
          "correct": 0,
          "explanation": "{{tupyo}} means 'to vote'. The story says {{Un din, ete karar na organisa tupyo-seleti.}} — 'One day, they decide to have an election.'",
          "passage": null
        },
        {
          "id": "read-s20-maxim-bon-fruta-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Ete xoraham ki moyun fruta sen espesyal fe sesu suli maner.}}",
          "answer": "They realize each fruit is special in its own way.",
          "accept": [],
          "explanation": "The sentence reads {{Ete xoraham ki moyun fruta sen espesyal fe sesu suli maner.}} — 'They realize each fruit is special in its own way.' {{suli maner}} is 'own way'; {{espesyal}} is 'special'."
        },
        {
          "id": "read-s20-maxim-bon-fruta-7",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Ete aham ki na sen maxim bon fruta no sen tem na sen maxmo bon kom aloete.}}",
          "answer": "They understand that being the best fruit is not about being better than others.",
          "accept": [],
          "explanation": "The sentence reads {{Ete aham ki na sen maxim bon fruta no sen tem na sen maxmo bon kom aloete.}} — 'They understand that being the best fruit is not about being better than others.' {{tem}} is 'about'; the {{na}} phrase is the subject."
        },
        {
          "id": "read-s20-maxim-bon-fruta-8",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: Each fruit is the best in its own way.",
          "answer": "Moyun fruta sen maxim bon fe sesu suli maner.",
          "accept": [],
          "explanation": "The sentence reads {{Moyun fruta sen maxim bon fe sesu suli maner.}} — 'Each fruit is the best in its own way.' {{maxim bon fe}} is 'the best at'."
        },
        {
          "id": "read-s20-maxim-bon-fruta-9",
          "type": "fill",
          "prompt": "Moy fruta ___ in jarden.",
          "gloss": "The fruits gather in the garden.",
          "blanks": [
            {
              "answer": "tonata",
              "accept": []
            }
          ],
          "explanation": "The missing word is {{tonata}}. {{tonata}} is 'gather'."
        },
        {
          "id": "read-s20-maxim-bon-fruta-10",
          "type": "fill",
          "prompt": "Pingo, banana, ji puto, moyte ___.",
          "gloss": "The apple, the banana, and the grape all win.",
          "blanks": [
            {
              "answer": "triunfa",
              "accept": []
            }
          ],
          "explanation": "The missing word is {{triunfa}}. {{triunfa}} means 'win'."
        }
      ]
    },
    {
      "id": "read-s13-perfetofil-pentuyen",
      "area": "reading",
      "title": "Perfetofil pentuyen — The Perfectionist Painter",
      "blurb": "A painter who cannot finish anything invites his friends to help, and their mixed styles teach him that art is expression, not perfection.",
      "refs": [
        "Thirty Short Stories — Story 13",
        "Reading practice"
      ],
      "notes": [
        "{{nilwatu fini}} is a strong 'never finish'; {{duregi na}} is 'keep on'.",
        "{{perfetofilya}} and {{nenperfetoxey}} are abstract nouns built from {{perfeto}}."
      ],
      "examples": [
        [
          "Tesu artedom sen pul fe nenfinido pentu.",
          "His studio is full of unfinished paintings."
        ],
        [
          "Te xoraham ki arte sen tem vyata, no tem perfetoya.",
          "He realizes that art is about expression, not perfection."
        ]
      ],
      "exercises": [
        {
          "id": "read-s13-perfetofil-pentuyen-1",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Edi the painter in {{Perfetofil pentuyen}}?",
          "passage": "Edi sen pentuyen. Te lubi sesu ergo. Te vole ki moy detale sen perfeto.",
          "options": [
            "He wants every detail to be perfect.",
            "He starts many projects but never finishes them.",
            "Edi feels excited and scared.",
            "Edi starts the painting.",
            "He adds more trees and then erases them."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te vole ki moy detale sen perfeto.}} — 'He wants every detail to be perfect.'"
        },
        {
          "id": "read-s13-perfetofil-pentuyen-2",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the gallery's request in {{Perfetofil pentuyen}}?",
          "passage": "Un din, Edi cudu day tyojan. Xohrapul arte-onexadom peti pentu of te. Ete haja to xafe un safta.",
          "options": [
            "A famous art gallery asks him for a painting.",
            "He loves his work.",
            "He worries about every small mistake.",
            "He knows this is a big chance.",
            "He works day and night."
          ],
          "correct": 0,
          "explanation": "The passage says {{Xohrapul arte-onexadom peti pentu of te.}} — 'A famous art gallery asks him for a painting.'"
        },
        {
          "id": "read-s13-perfetofil-pentuyen-3",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Edi's struggle with details in {{Perfetofil pentuyen}}?",
          "passage": "Mas te duregi na xuli plu lil xey. Te alogi kolor de asman multi mara. Te maxusgi max drevo, ji xali, te awmotsu oto.",
          "options": [
            "He adds more trees and then erases them.",
            "His studio is full of unfinished paintings.",
            "But he also knows his problem.",
            "He paints a beautiful landscape.",
            "Three days before the deadline, Edi is nowhere near finished."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te maxusgi max drevo, ji xali, te awmotsu oto.}} — 'He adds more trees and then erases them.'"
        },
        {
          "id": "read-s13-perfetofil-pentuyen-4",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about what Edi realizes in {{Perfetofil pentuyen}}?",
          "passage": "Edi xoroko meliya in nenperfetoxey. Te xoraham ki arte sen tem vyata, no tem perfetoya. Fe finili din, Edi ji tesu doste kompletogi pentu.",
          "options": [
            "He realizes that art is about expression, not perfection.",
            "He feels stressed.",
            "His friends start painting with him.",
            "It looks vibrant and lively.",
            "They deliver it to the gallery."
          ],
          "correct": 0,
          "explanation": "The passage says {{Te xoraham ki arte sen tem vyata, no tem perfetoya.}} — 'He realizes that art is about expression, not perfection.'"
        },
        {
          "id": "read-s13-perfetofil-pentuyen-5",
          "type": "mcq",
          "prompt": "In {{Perfetofil pentuyen}}, what does {{perfeto}} mean?",
          "options": [
            "perfect",
            "famous",
            "finished",
            "beautiful",
            "stressed"
          ],
          "correct": 0,
          "explanation": "{{perfeto}} means 'perfect'. The story says {{Te vole ki moy detale sen perfeto.}} — 'He wants every detail to be perfect.'",
          "passage": null
        },
        {
          "id": "read-s13-perfetofil-pentuyen-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Te moywatu awyongu godomo multi watu fe detale.}}",
          "answer": "He always spends too much time on details.",
          "accept": [],
          "explanation": "The sentence reads {{Te moywatu awyongu godomo multi watu fe detale.}} — 'He always spends too much time on details.' {{godomo multi}} is 'too much'; {{detale}} is 'details'."
        },
        {
          "id": "read-s13-perfetofil-pentuyen-7",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Edi xoroko meliya in nenperfetoxey.}}",
          "answer": "Edi sees beauty in the imperfections.",
          "accept": [],
          "explanation": "The sentence reads {{Edi xoroko meliya in nenperfetoxey.}} — 'Edi sees beauty in the imperfections.' {{xoroko}} is 'see, notice'; {{nenperfetoxey}} is 'imperfections'."
        },
        {
          "id": "read-s13-perfetofil-pentuyen-8",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: He realizes that art is about expression, not perfection.",
          "answer": "Te xoraham ki arte sen tem vyata, no tem perfetoya.",
          "accept": [],
          "explanation": "The sentence reads {{Te xoraham ki arte sen tem vyata, no tem perfetoya.}} — 'He realizes that art is about expression, not perfection.' {{vyata}} is 'expression'; {{tem}} is 'about'."
        },
        {
          "id": "read-s13-perfetofil-pentuyen-9",
          "type": "fill",
          "prompt": "Te xoru multi projeto mas te ___ ___ oto.",
          "gloss": "He starts many projects but never finishes them.",
          "blanks": [
            {
              "answer": "nilwatu",
              "accept": []
            },
            {
              "answer": "fini",
              "accept": []
            }
          ],
          "explanation": "The missing words are {{nilwatu}}, {{fini}}. {{nilwatu}} is 'never'; {{fini}} is 'finish'."
        },
        {
          "id": "read-s13-perfetofil-pentuyen-10",
          "type": "fill",
          "prompt": "Edi esto sesu ___.",
          "gloss": "Edi lets go of his perfectionism.",
          "blanks": [
            {
              "answer": "perfetofilya",
              "accept": []
            }
          ],
          "explanation": "The missing word is {{perfetofilya}}. {{perfetofilya}} is 'perfectionism'."
        }
      ]
    },
    {
      "id": "read-s21-uma-su-xerca",
      "area": "reading",
      "title": "Uma su xerca fe medisente — The Horse's Search for Medicine",
      "blurb": "A troubled horse searches pharmacy after pharmacy for a medicine nobody has, and his story ends in darkness.",
      "refs": [
        "Thirty Short Stories — Story 21",
        "Reading practice"
      ],
      "notes": [
        "{{no haji hare}} means 'no longer have', and {{nilte hare}} means 'nobody has'.",
        "The story builds intensity with {{xoru na}} + verb: {{Te xoru na ore voka}} 'he starts to hear voices'."
      ],
      "examples": [
        [
          "Hin medisente abil na ganjongi te maxmo bon.",
          "This medicine can make him feel better."
        ],
        [
          "Medisente nilwatu beewreka.",
          "The medicine is never found."
        ]
      ],
      "exercises": [
        {
          "id": "read-s21-uma-su-xerca-1",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Part's trouble in {{Uma su xerca fe medisente}}?",
          "passage": "Hay uma har name Part. Part no ganjon bon. Tesu siko sen problemapul.",
          "options": [
            "His mind is troubled.",
            "Part knows he needs help.",
            "He goes to the first pharmacy.",
            "Part goes to a second pharmacy.",
            "Part tries a third pharmacy."
          ],
          "correct": 0,
          "explanation": "The passage says {{Tesu siko sen problemapul.}} — 'His mind is troubled.'"
        },
        {
          "id": "read-s21-uma-su-xerca-2",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the special medicine in {{Uma su xerca fe medisente}}?",
          "passage": "Te ore tem espesyal medisente. Hin medisente abil na ganjongi te maxmo bon. Part karar na xerca medisente.",
          "options": [
            "This medicine can make him feel better.",
            "Part is not feeling well.",
            "The answer is the same.",
            "The pharmacist looks sad.",
            "Part visits more pharmacies."
          ],
          "correct": 0,
          "explanation": "The passage says {{Hin medisente abil na ganjongi te maxmo bon.}} — 'This medicine can make him feel better.'"
        },
        {
          "id": "read-s21-uma-su-xerca-3",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the search across pharmacies in {{Uma su xerca fe medisente}}?",
          "passage": "Part visita max davadukan. Moy mara, jawabu sen sama to. Nilte hare medisente.",
          "options": [
            "Every time, the answer is the same.",
            "The pharmacist shakes his head.",
            "Part feels his mind getting darker.",
            "He sees shadows that scare him.",
            "He runs from pharmacy to pharmacy."
          ],
          "correct": 0,
          "explanation": "The passage says {{Moy mara, jawabu sen sama to.}} — 'Every time, the answer is the same.'"
        },
        {
          "id": "read-s21-uma-su-xerca-4",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about how Part's story ends in {{Uma su xerca fe medisente}}?",
          "passage": "Te klosi sesu oko, ji finili tesu siko sencu sotikal. Dao de Part esto hinloka. Medisente nilwatu beewreka.",
          "options": [
            "The medicine is never found.",
            "He feels trapped in his own head.",
            "His mind is full of chaos.",
            "Part does not get up.",
            "Part's story ends in darkness."
          ],
          "correct": 0,
          "explanation": "The passage says {{Medisente nilwatu beewreka.}} — 'The medicine is never found.'"
        },
        {
          "id": "read-s21-uma-su-xerca-5",
          "type": "mcq",
          "prompt": "In {{Uma su xerca fe medisente}}, what does {{medisente}} mean?",
          "options": [
            "medicine",
            "pharmacy",
            "help",
            "mind",
            "journey"
          ],
          "correct": 0,
          "explanation": "{{medisente}} means 'medicine'. The story says {{Te ore tem espesyal medisente.}} — 'He hears about a special medicine.'",
          "passage": null
        },
        {
          "id": "read-s21-uma-su-xerca-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Te xukra davadukanyen ji te awidi.}}",
          "answer": "He thanks the pharmacist and leaves.",
          "accept": [],
          "explanation": "The sentence reads {{Te xukra davadukanyen ji te awidi.}} — 'He thanks the pharmacist and leaves.' {{xukra}} is 'thank'; {{awidi}} is 'leave'."
        },
        {
          "id": "read-s21-uma-su-xerca-7",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Te pawbu of davadukan cel davadukan.}}",
          "answer": "He runs from pharmacy to pharmacy.",
          "accept": [],
          "explanation": "The sentence reads {{Te pawbu of davadukan cel davadukan.}} — 'He runs from pharmacy to pharmacy.' {{of … cel …}} is 'from … to …'."
        },
        {
          "id": "read-s21-uma-su-xerca-8",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: The medicine is never found.",
          "answer": "Medisente nilwatu beewreka.",
          "accept": [],
          "explanation": "The sentence reads {{Medisente nilwatu beewreka.}} — 'The medicine is never found.' {{nilwatu}} is 'never'; {{beewreka}} is the passive 'be found'."
        },
        {
          "id": "read-s21-uma-su-xerca-9",
          "type": "fill",
          "prompt": "Te ___ ganjon fobi ji hazuniya.",
          "gloss": "He often feels scared and sad.",
          "blanks": [
            {
              "answer": "pimpan",
              "accept": []
            }
          ],
          "explanation": "The missing word is {{pimpan}}. {{pimpan}} means 'often'."
        },
        {
          "id": "read-s21-uma-su-xerca-10",
          "type": "fill",
          "prompt": "Te sen ___ ___.",
          "gloss": "He is too tired.",
          "blanks": [
            {
              "answer": "godomo",
              "accept": []
            },
            {
              "answer": "pilodo",
              "accept": []
            }
          ],
          "explanation": "The missing words are {{godomo}}, {{pilodo}}. {{godomo}} is 'too much'; {{pilodo}} is 'tired'."
        }
      ]
    },
    {
      "id": "read-s18-godo-kafe",
      "area": "reading",
      "title": "Godo kafe — Too Much Coffee",
      "blurb": "An office worker drinks more and more coffee until the jitters and mistakes force him to cut back to one cup a day.",
      "refs": [
        "Thirty Short Stories — Story 18",
        "Reading practice"
      ],
      "notes": [
        "{{xor-}} marks the onset of a state: {{Tesu hanta xosu xortreme}} 'his hands start to shake a little'.",
        "{{daydenmo multi}} is 'so much'; {{godo}} alone means 'too much'."
      ],
      "examples": [
        [
          "Mas te glu godo to.",
          "But he drinks too much."
        ],
        [
          "Godo kafe no sen bon.",
          "Too much coffee is not good."
        ]
      ],
      "exercises": [
        {
          "id": "read-s18-godo-kafe-1",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Jon's coffee habit in {{Godo kafe}}?",
          "passage": "Jon ergo in ofisikamer. Te hare ixgalupul ergo. Moy din, te glu multi kafe.",
          "options": [
            "Every day, he drinks a lot of coffee.",
            "He thinks it helps him stay awake.",
            "He sips it slowly.",
            "He makes a second cup of coffee.",
            "Before lunch, Jon drinks a third cup."
          ],
          "correct": 0,
          "explanation": "The passage says {{Moy din, te glu multi kafe.}} — 'Every day, he drinks a lot of coffee.'"
        },
        {
          "id": "read-s18-godo-kafe-2",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the first cup in {{Godo kafe}}?",
          "passage": "Fe soba, Jon jumbigi sesu unyum fenjan. To sen termopul ji bala. Te hanman glu to.",
          "options": [
            "In the morning, Jon makes his first cup.",
            "He likes the taste.",
            "After the first cup, he feels good.",
            "He drinks it quickly.",
            "Now, his heart races."
          ],
          "correct": 0,
          "explanation": "The passage says {{Fe soba, Jon jumbigi sesu unyum fenjan.}} — 'In the morning, Jon makes his first cup.'"
        },
        {
          "id": "read-s18-godo-kafe-3",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about the third cup in {{Godo kafe}}?",
          "passage": "Lefe midiyam, Jon glu tigayum fenjan. Tesu tutum nun velosi nabiza. Tesu oko sen daymo bukado.",
          "options": [
            "Now, his heart races.",
            "By mid-morning, Jon feels tired again.",
            "His hands start to shake a little.",
            "He talks fast.",
            "He loses count of how many cups."
          ],
          "correct": 0,
          "explanation": "The passage says {{Tesu tutum nun velosi nabiza.}} — 'Now, his heart races.'"
        },
        {
          "id": "read-s18-godo-kafe-4",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about what Jon learns in {{Godo kafe}}?",
          "passage": "Jon le xwexi alimxey. Godo kafe no sen bon. Fe nunya, te glu sol un fenjan fe moyun din.",
          "options": [
            "Too much coffee is not good.",
            "He makes mistakes.",
            "He is jittery and anxious.",
            "It is not the same, but he feels better.",
            "They see the change."
          ],
          "correct": 0,
          "explanation": "The passage says {{Godo kafe no sen bon.}} — 'Too much coffee is not good.'"
        },
        {
          "id": "read-s18-godo-kafe-5",
          "type": "mcq",
          "prompt": "In {{Godo kafe}}, what does {{fenjan}} mean?",
          "options": [
            "cup",
            "coffee",
            "office",
            "boss",
            "tea"
          ],
          "correct": 0,
          "explanation": "{{fenjan}} means 'cup'. The story says {{Fe soba, Jon jumbigi sesu unyum fenjan.}} — 'In the morning, Jon makes his first cup.'",
          "passage": null
        },
        {
          "id": "read-s18-godo-kafe-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Te hisicu estonenible.}}",
          "answer": "He feels unstoppable.",
          "accept": [],
          "explanation": "The sentence reads {{Te hisicu estonenible.}} — 'He feels unstoppable.' {{estonenible}} is 'unstoppable'."
        },
        {
          "id": "read-s18-godo-kafe-7",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Te sen tremepeldo ji ansyapul.}}",
          "answer": "He is jittery and anxious.",
          "accept": [],
          "explanation": "The sentence reads {{Te sen tremepeldo ji ansyapul.}} — 'He is jittery and anxious.' {{tremepeldo}} is 'jittery'; {{ansyapul}} is 'anxious'."
        },
        {
          "id": "read-s18-godo-kafe-8",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: Too much coffee is not good.",
          "answer": "Godo kafe no sen bon.",
          "accept": [],
          "explanation": "The sentence reads {{Godo kafe no sen bon.}} — 'Too much coffee is not good.' {{godo}} means 'too much'."
        },
        {
          "id": "read-s18-godo-kafe-9",
          "type": "fill",
          "prompt": "Tesu hanta xosu ___.",
          "gloss": "His hands start to shake a little.",
          "blanks": [
            {
              "answer": "xortreme",
              "accept": []
            }
          ],
          "explanation": "The missing word is {{xortreme}}. {{xortreme}} means 'start to shake'."
        },
        {
          "id": "read-s18-godo-kafe-10",
          "type": "fill",
          "prompt": "Te karar na ___ na glu ___ multi kafe.",
          "gloss": "He decides to stop drinking so much coffee.",
          "blanks": [
            {
              "answer": "esto",
              "accept": []
            },
            {
              "answer": "daydenmo",
              "accept": []
            }
          ],
          "explanation": "The missing words are {{esto}}, {{daydenmo}}. {{esto na}} is 'stop'; {{daydenmo}} is 'so much'."
        }
      ]
    },
    {
      "id": "read-s11-kacupa-ji-piu",
      "area": "reading",
      "title": "Kacupa ji piu — The Turtle and the Bird",
      "blurb": "A restless bird searches the whole forest for the tallest tree while a wise turtle stays put, and the best view turns out to be right where she is.",
      "refs": [
        "Thirty Short Stories — Story 11",
        "Reading practice"
      ],
      "notes": [
        "{{fe kompara ki}} introduces a contrast: {{Tim harkacu hanman … fe kompara ki Bela velosi fley}}.",
        "{{denloka hu in da}} is a relative place clause: {{preciso denloka hu in da yu sen}} 'exactly where you are'."
      ],
      "examples": [
        [
          "Tim harkacu hanman mas te befuraha moyun momento, fe kompara ki Bela velosi fley of drevo cel drevo; te moywatu xerca neo banto.",
          "Tim moves slowly but enjoys every moment, while Bela flies quickly from tree to tree, always looking for something new."
        ],
        [
          "Bela tabasum, te xoraham meliya de sesu ogar. Te karar ki te sen preciso denloka hu in da te haja na sen.",
          "Bela smiles, realizing the beauty of her home. She decides she is exactly where she needs to be."
        ]
      ],
      "exercises": [
        {
          "id": "read-s11-kacupa-ji-piu-1",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Tim and Bela in the forest in {{Kacupa ji piu}}?",
          "passage": "In day xantipul drevogeo, sofipul lao kacupa namedo Tim ji juni nensabar piu namedo Bela ogar.",
          "options": [
            "In a large, peaceful forest, there lives a wise old turtle named Tim and a young, restless bird named Bela.",
            "Tim moves slowly but enjoys every moment, while Bela flies quickly from tree to tree, always looking for something new.",
            "Excited, Bela takes off into the sky, searching every corner of the forest.",
            "Tim, however, stays right where he is, watching the sky change colors as the day goes by.",
            "Bela smiles, realizing the beauty of her home. She decides she is exactly where she needs to be."
          ],
          "correct": 0,
          "explanation": "The passage says {{In day xantipul drevogeo, sofipul lao kacupa namedo Tim ji juni nensabar piu namedo Bela ogar.}} — 'In a large, peaceful forest, there lives a wise old turtle named Tim and a young, restless bird named Bela.'"
        },
        {
          "id": "read-s11-kacupa-ji-piu-2",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about how Tim and Bela move in {{Kacupa ji piu}}?",
          "passage": "Tim harkacu hanman mas te befuraha moyun momento, fe kompara ki Bela velosi fley of drevo cel drevo; te moywatu xerca neo banto.",
          "options": [
            "Tim moves slowly but enjoys every moment, while Bela flies quickly from tree to tree, always looking for something new.",
            "In a large, peaceful forest, there lives a wise old turtle named Tim and a young, restless bird named Bela.",
            "Excited, Bela takes off into the sky, searching every corner of the forest.",
            "Tim, however, stays right where he is, watching the sky change colors as the day goes by.",
            "Bela smiles, realizing the beauty of her home. She decides she is exactly where she needs to be."
          ],
          "correct": 0,
          "explanation": "The passage says {{Tim harkacu hanman mas te befuraha moyun momento, fe kompara ki Bela velosi fley of drevo cel drevo; te moywatu xerca neo banto.}} — 'Tim moves slowly but enjoys every moment, while Bela flies quickly from tree to tree, always looking for something new.'"
        },
        {
          "id": "read-s11-kacupa-ji-piu-3",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about Tim waiting while Bela searches in {{Kacupa ji piu}}?",
          "passage": "Mas Tim resta preciso samaloka, fe na oko asman na alocu fe kolor dur nurupasa.",
          "options": [
            "Tim, however, stays right where he is, watching the sky change colors as the day goes by.",
            "In a large, peaceful forest, there lives a wise old turtle named Tim and a young, restless bird named Bela.",
            "Excited, Bela takes off into the sky, searching every corner of the forest.",
            "Tim nods and asks her to look around from where they are. Bela gazes out and sees the whole forest bathed in golden light.",
            "Bela smiles, realizing the beauty of her home. She decides she is exactly where she needs to be."
          ],
          "correct": 0,
          "explanation": "The passage says {{Mas Tim resta preciso samaloka, fe na oko asman na alocu fe kolor dur nurupasa.}} — 'Tim, however, stays right where he is, watching the sky change colors as the day goes by.'"
        },
        {
          "id": "read-s11-kacupa-ji-piu-4",
          "type": "mcq",
          "prompt": "Which sentence best matches the passage about what Bela decides in {{Kacupa ji piu}}?",
          "passage": "Bela tabasum, te xoraham meliya de sesu ogar. Te karar ki te sen preciso denloka hu in da te haja na sen.",
          "options": [
            "Bela smiles, realizing the beauty of her home. She decides she is exactly where she needs to be.",
            "In a large, peaceful forest, there lives a wise old turtle named Tim and a young, restless bird named Bela.",
            "Tim moves slowly but enjoys every moment, while Bela flies quickly from tree to tree, always looking for something new.",
            "Tim, however, stays right where he is, watching the sky change colors as the day goes by.",
            "Tim nods and asks her to look around from where they are. Bela gazes out and sees the whole forest bathed in golden light."
          ],
          "correct": 0,
          "explanation": "The passage says {{Bela tabasum, te xoraham meliya de sesu ogar. Te karar ki te sen preciso denloka hu in da te haja na sen.}} — 'Bela smiles, realizing the beauty of her home. She decides she is exactly where she needs to be.'"
        },
        {
          "id": "read-s11-kacupa-ji-piu-5",
          "type": "mcq",
          "prompt": "In {{Kacupa ji piu}}, what does {{hanman}} mean?",
          "options": [
            "slowly",
            "quickly",
            "gently",
            "suddenly",
            "often"
          ],
          "correct": 0,
          "explanation": "{{hanman}} means 'slowly'. The story says {{Tim harkacu hanman mas te befuraha moyun momento, fe kompara ki Bela velosi fley of drevo cel drevo; te moywatu xerca neo banto.}} — 'Tim moves slowly but enjoys every moment, while Bela flies quickly from tree to tree, always looking for something new.'",
          "passage": null
        },
        {
          "id": "read-s11-kacupa-ji-piu-6",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Joxupul, Bela xorfley cel asman, fe na ofxerca moy gona de drevogeo.}}",
          "answer": "Excited, Bela takes off into the sky, searching every corner of the forest.",
          "accept": [],
          "explanation": "The sentence reads {{Joxupul, Bela xorfley cel asman, fe na ofxerca moy gona de drevogeo.}} — 'Excited, Bela takes off into the sky, searching every corner of the forest.' {{xorfley}} is 'take off'; {{ofxerca}} is 'search all over'."
        },
        {
          "id": "read-s11-kacupa-ji-piu-7",
          "type": "translate",
          "direction": "gl-en",
          "prompt": "Translate into English: {{Bela tabasum, te xoraham meliya de sesu ogar. Te karar ki te sen preciso denloka hu in da te haja na sen.}}",
          "answer": "Bela smiles, realizing the beauty of her home. She decides she is exactly where she needs to be.",
          "accept": [],
          "explanation": "The sentence reads {{Bela tabasum, te xoraham meliya de sesu ogar. Te karar ki te sen preciso denloka hu in da te haja na sen.}} — 'Bela smiles, realizing the beauty of her home. She decides she is exactly where she needs to be.' {{xoraham}} is 'realize'; {{preciso denloka hu in da}} is 'exactly where'."
        },
        {
          "id": "read-s11-kacupa-ji-piu-8",
          "type": "translate",
          "direction": "en-gl",
          "prompt": "Translate into Globasa: Tim, however, stays right where he is, watching the sky change colors as the day goes by.",
          "answer": "Mas Tim resta preciso samaloka, fe na oko asman na alocu fe kolor dur nurupasa.",
          "accept": [],
          "explanation": "The sentence reads {{Mas Tim resta preciso samaloka, fe na oko asman na alocu fe kolor dur nurupasa.}} — 'Tim, however, stays right where he is, watching the sky change colors as the day goes by.' {{preciso samaloka}} is 'right in the same place'."
        },
        {
          "id": "read-s11-kacupa-ji-piu-9",
          "type": "fill",
          "prompt": "Joxupul, Bela ___ cel asman, fe na ___ moy gona de drevogeo.",
          "gloss": "Excited, Bela takes off into the sky, searching every corner of the forest.",
          "blanks": [
            {
              "answer": "xorfley",
              "accept": []
            },
            {
              "answer": "ofxerca",
              "accept": []
            }
          ],
          "explanation": "The missing words are {{xorfley}}, {{ofxerca}}. {{xorfley}} is 'take off'; {{ofxerca}} is 'search all over'."
        },
        {
          "id": "read-s11-kacupa-ji-piu-10",
          "type": "fill",
          "prompt": "Mas Tim resta ___ ___, fe na oko asman na alocu fe kolor dur nurupasa.",
          "gloss": "Tim, however, stays right where he is, watching the sky change colors as the day goes by.",
          "blanks": [
            {
              "answer": "preciso",
              "accept": []
            },
            {
              "answer": "samaloka",
              "accept": []
            }
          ],
          "explanation": "The missing words are {{preciso}}, {{samaloka}}. {{preciso}} is 'exactly'; {{samaloka}} is 'in the same place'."
        }
      ]
    }
  ],
  "totals": {
    "concepts": 78,
    "exercises": 780
  }
};
window.GLOBASA_CURRICULUM.byId = {};
window.GLOBASA_CURRICULUM.concepts.forEach(function (c) { window.GLOBASA_CURRICULUM.byId[c.id] = c; });
window.GLOBASA_CURRICULUM.totals = {
  concepts: window.GLOBASA_CURRICULUM.concepts.length,
  exercises: window.GLOBASA_CURRICULUM.concepts.reduce(function (n, c) { return n + c.exercises.length; }, 0)
};
