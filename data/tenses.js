/* Authored tense reference for the standalone Verb tenses page. */
window.GLOBASA_TENSES = {
  "title": "Verb tenses",
  "subtitle": "One verb form, a handful of particles, and a clear timeline.",
  "intro": "Globasa does not conjugate verbs. The dictionary form handles the general present, while particles such as `le` and `xa` place an action in time. This section gives every common tense its own card, then points you to mixed drills in the curriculum.",
  "principles": [
    {
      "title": "The verb never changes",
      "text": "Person and number do not add endings. `Mi yam`, `yu yam`, `te yam`, and `imi yam` all use the same verb form."
    },
    {
      "title": "Particles open the verb phrase",
      "text": "Tense and mood markers stand before the verb: `Mi le yam`, `Mi xa yam`. Negation follows the tense marker: `Mi le no yam`."
    },
    {
      "title": "Order creates meaning",
      "text": "Compound tenses combine two markers. `Nun le` is present perfective (`have done`), while `le nun` is past progressive (`was doing`)."
    }
  ],
  "groups": [
    {
      "id": "simple",
      "title": "Simple tenses",
      "lead": "Start with the three viewpoints: present, past, and future. The dictionary form is already a complete present tense; `nun` only makes the present explicit. Add `du-` when the action is a habit or a state that lasts.",
      "cards": [
        {
          "id": "general-present",
          "name": "General present",
          "marker": "(`nun`)",
          "formula": "S + (nun) + V + O",
          "summary": "A general truth, a current state, or an action happening now.",
          "detail": "The dictionary verb form is the default present. Adding `nun` makes the present viewpoint explicit, especially when contrasting with another time.",
          "examples": [
            [
              "Mi (nun) doxo gazeta.",
              "I read the newspaper. / I am reading the newspaper."
            ],
            [
              "Te (nun) yam pingo.",
              "He or she eats the apple. / He or she is eating the apple."
            ]
          ],
          "watch": "Do not add a present-tense ending. `Nun` is optional when the context is already clear.",
          "practice": "tense-simple"
        },
        {
          "id": "habitual-present",
          "name": "Habitual present",
          "marker": "(`nun`) `du-`",
          "formula": "S + (nun) + du-V + O",
          "summary": "A habit, repeated action, or state that extends over time.",
          "detail": "The prefix `du-` attaches directly to the verb. With the present, it is usually omitted when the habitual meaning is obvious, but it may be used for clarity.",
          "examples": [
            [
              "Mi duyam pingo.",
              "I eat apples. (habitually)"
            ],
            [
              "Imi dudanse fe soba.",
              "We dance in the morning. (habitually)"
            ]
          ],
          "watch": "`du-` is a prefix, not a separate word: `duyam`, not `du yam`. It makes the gerund when attached to a noun: `dudanse` = dancing.",
          "practice": "tense-aspect"
        },
        {
          "id": "general-past",
          "name": "General past",
          "marker": "`le`",
          "formula": "S + le + V + O",
          "summary": "A completed action or a state viewed from the past.",
          "detail": "Place `le` before the verb. The verb itself stays in dictionary form, and `le` is the same for every person.",
          "examples": [
            [
              "Mi le doxo gazeta.",
              "I read the newspaper."
            ],
            [
              "Te le fini ergo.",
              "He or she finished work."
            ]
          ],
          "watch": "The past marker comes before negation: `Mi le no yam`, not `Mi no le yam`.",
          "practice": "tense-simple"
        },
        {
          "id": "habitual-past",
          "name": "Habitual past",
          "marker": "`le du-`",
          "formula": "S + le + du-V + O",
          "summary": "A past habit or a state that lasted through a past period.",
          "detail": "Combine the past viewpoint `le` with the durative/habitual prefix `du-`. This is the natural way to say `used to` without a separate verb.",
          "examples": [
            [
              "Mi le dudoxo gazeta.",
              "I used to read the newspaper."
            ],
            [
              "Imi le dudanse fe soba.",
              "We used to dance in the morning."
            ]
          ],
          "watch": "Keep the order: tense first, then the prefixed verb. `Le dudoxo`, not `du le doxo`.",
          "practice": "tense-aspect"
        },
        {
          "id": "general-future",
          "name": "General future",
          "marker": "`xa`",
          "formula": "S + xa + V + O",
          "summary": "An action or state located in the future.",
          "detail": "Place `xa` before the verb. Like `le`, it does not change for person or number.",
          "examples": [
            [
              "Mi xa doxo kitabu.",
              "I will read the book."
            ],
            [
              "Te xa ata jaxadin.",
              "He or she will come tomorrow."
            ]
          ],
          "watch": "`Xa` is a particle before the verb, not a suffix. Time words such as `jaxadin` can appear in the same sentence.",
          "practice": "tense-simple"
        },
        {
          "id": "habitual-future",
          "name": "Habitual future",
          "marker": "`xa du-`",
          "formula": "S + xa + du-V + O",
          "summary": "A future habit or a state expected to last.",
          "detail": "The future viewpoint `xa` combines with `du-` on the verb. Use it when the repetition or duration matters, not for a single future event.",
          "examples": [
            [
              "Mi xa dudoxo gazeta.",
              "I will read the newspaper regularly."
            ],
            [
              "Imi xa dudanse fe soba.",
              "We will dance in the morning regularly."
            ]
          ],
          "watch": "For one future event, use plain `xa`: `Mi xa doxo gazeta`. Add `du-` only for habit or duration.",
          "practice": "tense-aspect"
        }
      ]
    },
    {
      "id": "immediate",
      "title": "Immediate tenses",
      "lead": "`Jale` and `jaxa` put an action right next to the present moment. They are single particles, not combinations of `ja` plus another marker.",
      "cards": [
        {
          "id": "immediate-past",
          "name": "Immediate past",
          "marker": "`jale`",
          "formula": "S + jale + V + O",
          "summary": "Something that has just happened.",
          "detail": "`Jale` is the immediate-past marker. It is more precise than plain `le` when the action happened moments ago.",
          "examples": [
            [
              "Mi jale fini ergo.",
              "I just finished work."
            ],
            [
              "Te jale ata.",
              "He or she just arrived."
            ]
          ],
          "watch": "Write `jale` as one word. It is not `ja le`.",
          "practice": "tense-aspect"
        },
        {
          "id": "immediate-future",
          "name": "Immediate future",
          "marker": "`jaxa`",
          "formula": "S + jaxa + V + O",
          "summary": "Something that is about to happen.",
          "detail": "`Jaxa` is the immediate-future marker. It signals that the action is on the edge of happening now.",
          "examples": [
            [
              "Mi jaxa fini ergo.",
              "I am about to finish work."
            ],
            [
              "Te jaxa ata.",
              "He or she is about to arrive."
            ]
          ],
          "watch": "`Jaxa` is not a general future. For a later event, use `xa`.",
          "practice": "tense-aspect"
        }
      ]
    },
    {
      "id": "compound",
      "title": "Common compound tenses",
      "lead": "A compound tense combines two of the viewpoint markers `nun`, `le`, and `xa`. The first marker sets the viewpoint; the second adds progressive or perfective aspect. The rare prospective combinations are omitted here, but the same logic applies.",
      "cards": [
        {
          "id": "present-progressive",
          "name": "Present progressive",
          "marker": "(`nun`) `nun`",
          "formula": "S + (nun) nun + V + O",
          "summary": "An action explicitly in progress now.",
          "detail": "The second `nun` marks progressive aspect. The first is optional and may be omitted when the present is already clear.",
          "examples": [
            [
              "Mi nun doxo gazeta.",
              "I am reading the newspaper."
            ],
            [
              "Imi nun danse.",
              "We are dancing."
            ]
          ],
          "watch": "The dictionary form can also translate `I am reading`; the explicit progressive stresses that the action is ongoing.",
          "practice": "tense-aspect"
        },
        {
          "id": "present-perfective",
          "name": "Present perfective",
          "marker": "`nun le`",
          "formula": "S + nun le + V + O",
          "summary": "A completed action with present relevance.",
          "detail": "Present viewpoint plus perfective aspect: the action is finished, but the result matters now. English often uses `have` or `has`.",
          "examples": [
            [
              "Mi nun le fini ergo.",
              "I have finished work."
            ],
            [
              "Te nun le yam pingo.",
              "He or she has eaten the apple."
            ]
          ],
          "watch": "Do not reverse the markers. `Nun le` = have done; `le nun` = was doing.",
          "practice": "tense-aspect"
        },
        {
          "id": "past-progressive",
          "name": "Past progressive",
          "marker": "`le nun`",
          "formula": "S + le nun + V + O",
          "summary": "An action that was in progress at a past moment.",
          "detail": "Past viewpoint plus progressive aspect. It commonly sets the background for another past event.",
          "examples": [
            [
              "Mi le nun doxo gazeta.",
              "I was reading the newspaper."
            ],
            [
              "Imi le nun danse.",
              "We were dancing."
            ]
          ],
          "watch": "`Le nun` is one verb phrase, not two separate actions. The order carries the progressive meaning.",
          "practice": "tense-compound"
        },
        {
          "id": "past-perfective",
          "name": "Past perfective",
          "marker": "`le le`",
          "formula": "S + le le + V + O",
          "summary": "An action completed before another past moment.",
          "detail": "Past viewpoint plus perfective aspect: the action was already finished at the reference point in the past. English often uses `had`.",
          "examples": [
            [
              "Mi le le fini ergo.",
              "I had finished work."
            ],
            [
              "Te le le yam pingo.",
              "He or she had eaten the apple."
            ]
          ],
          "watch": "`Le le` is not a typo. The first `le` is the viewpoint; the second marks completion.",
          "practice": "tense-compound"
        },
        {
          "id": "future-progressive",
          "name": "Future progressive",
          "marker": "`xa nun`",
          "formula": "S + xa nun + V + O",
          "summary": "An action that will be in progress at a future moment.",
          "detail": "Future viewpoint plus progressive aspect. Use it for an ongoing action seen from the future.",
          "examples": [
            [
              "Mi xa nun doxo gazeta.",
              "I will be reading the newspaper."
            ],
            [
              "Imi xa nun danse.",
              "We will be dancing."
            ]
          ],
          "watch": "`Xa nun` is `will be doing`; `xa le` is `will have done`.",
          "practice": "tense-compound"
        },
        {
          "id": "future-perfective",
          "name": "Future perfective",
          "marker": "`xa le`",
          "formula": "S + xa le + V + O",
          "summary": "An action that will be completed before a future moment.",
          "detail": "Future viewpoint plus perfective aspect. English usually says `will have` plus a past participle.",
          "examples": [
            [
              "Mi xa le fini ergo.",
              "I will have finished work."
            ],
            [
              "Te xa le yam pingo.",
              "He or she will have eaten the apple."
            ]
          ],
          "watch": "Do not use `xa le` for a simple future. `Mi xa fini` = I will finish; `Mi xa le fini` = I will have finished.",
          "practice": "tense-compound"
        },
        {
          "id": "past-prospective",
          "name": "Past prospective",
          "marker": "`le xa`",
          "formula": "S + le xa + V + O",
          "summary": "A past intention or expectation about a later action.",
          "detail": "Past viewpoint plus prospective aspect: from a past moment, the action was going to happen. It does not guarantee that it happened.",
          "examples": [
            [
              "Mi le xa fini ergo.",
              "I was going to finish work."
            ],
            [
              "Te le xa ata.",
              "He or she was going to come."
            ]
          ],
          "watch": "`Le xa` is about a plan from the past. If the action actually happened, use a past tense instead.",
          "practice": "tense-compound"
        }
      ]
    }
  ],
  "order": {
    "title": "Word order inside the verb phrase",
    "lead": "Tense sits at the front of the predicate. The rest follows in a fixed order, so changing the order changes the meaning or produces an ungrammatical sentence.",
    "head": [
      "Position",
      "Element",
      "Example"
    ],
    "rows": [
      [
        "1",
        "Tense or mood marker",
        "`Mi` **`le`** ... / `Mi` **`xa`** ..."
      ],
      [
        "2",
        "Negation",
        "`Mi le` **no** ..."
      ],
      [
        "3",
        "Modifying adverb and adverb",
        "`Mi le` no **`pimpan`** ..."
      ],
      [
        "4",
        "Passive prefix `be-`",
        "... **beyam** ..."
      ],
      [
        "5",
        "Durative prefix `du-`",
        "... **duyam** ..."
      ],
      [
        "6",
        "Verb",
        "... **`yam`** `pingo`."
      ]
    ],
    "note": "A full example is `Mi le no pimpan dudanse.` = I did not often dance. The passive slot is empty there; the pattern still runs tense → negation → adverb → verb."
  },
  "choosing": {
    "title": "Choose the tense from the meaning",
    "lead": "Start with the English cue, then choose the Globasa pattern. Do not translate the English auxiliary word by word.",
    "head": [
      "English cue",
      "Globasa pattern",
      "Example"
    ],
    "rows": [
      [
        "General truth or current action",
        "dictionary form or `(nun)`",
        "`Mi` (`nun`) `doxo gazeta`."
      ],
      [
        "Habit or state over time",
        "`(nun) du-`",
        "`Mi` duyam `pingo`."
      ],
      [
        "Finished past event",
        "`le`",
        "`Mi le fini ergo`."
      ],
      [
        "Past habit or `used to`",
        "`le du-`",
        "`Mi le dudoxo gazeta`."
      ],
      [
        "Future event",
        "`xa`",
        "`Mi xa doxo kitabu`."
      ],
      [
        "Future habit",
        "`xa du-`",
        "`Mi xa dudoxo gazeta`."
      ],
      [
        "Just happened",
        "`jale`",
        "`Mi jale fini ergo`."
      ],
      [
        "About to happen",
        "`jaxa`",
        "`Mi jaxa fini ergo`."
      ],
      [
        "Explicitly happening now",
        "`(nun) nun`",
        "`Mi nun doxo gazeta`."
      ],
      [
        "Have or has done",
        "`nun le`",
        "`Mi nun le fini ergo`."
      ],
      [
        "Was doing",
        "`le nun`",
        "`Mi le nun doxo gazeta`."
      ],
      [
        "Had done",
        "`le le`",
        "`Mi le le fini ergo`."
      ],
      [
        "Will be doing",
        "`xa nun`",
        "`Mi xa nun doxo gazeta`."
      ],
      [
        "Will have done",
        "`xa le`",
        "`Mi xa le fini ergo`."
      ],
      [
        "Was going to do",
        "`le xa`",
        "`Mi le xa fini ergo`."
      ]
    ]
  },
  "traps": [
    "Do not conjugate the verb: say `mi le yam`, `yu le yam`, and `te le yam`, never a person-specific ending.",
    "Negation follows the tense marker: `Mi le no yam`, not `Mi no le yam`.",
    "Compound order is meaningful: `nun le` is `have done`, while `le nun` is `was doing`.",
    "`Jale` and `jaxa` are single particles, not `ja le` and `ja xa`.",
    "Do not use `du-` for a single event. Use it for a habit, repeated action, or lasting state.",
    "A time word does not replace the tense marker. `Xadin` can appear with `xa`, and `jaledin` can appear with `le`."
  ],
  "practice": {
    "title": "Practise the tenses",
    "lead": "The curriculum drills these patterns with mixed multiple-choice, translation, and fill-in items. Start with the simple timeline, then add aspect and compound forms.",
    "conceptIds": [
      "tense-simple",
      "tense-aspect",
      "tense-compound"
    ]
  }
};
