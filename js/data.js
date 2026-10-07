/**
 * ==============================================================================
 * Moving Up 2: Critical Reading (ม.5) - Master Exercise Dataset
 * Application Version: v1.0.0-bamboo (Book Code: MU-B2)
 * Publisher: สำนักพิมพ์ไทยวัฒนาพานิช (TWP) & WorldCom ELT
 * Author: Brady Fotheringham
 * ------------------------------------------------------------------------------
 * Zero Shared Dependencies | Fully Scoped Dataset | 10 Units x 3 Parts (150 Items)
 * ==============================================================================
 */

const APP_META = {
  bookCode: "MU-B2",
  version: "1.0.0",
  buildTag: "v1.0.0-bamboo",
  title: "Moving Up 2: Critical Reading",
  level: "ชั้นมัธยมศึกษาปีที่ 5 (Grade 11)",
  publisher: "สำนักพิมพ์ไทยวัฒนาพานิช (ทวพ)",
  themePrimary: "#1b4332",
  themeAccent: "#e9c46a",
  totalUnits: 10,
  totalItems: 150
};

const PRODUCT_COVERS = [
  {
    "id": "mu2",
    "title": "Moving Up 2: Critical Reading",
    "level": "ม.5 (Grade 11)",
    "series": "Moving Up",
    "image": "assets/images/covers/mu2.jpg",
    "tag": "เล่มปัจจุบัน"
  },
  {
    "id": "mu1",
    "title": "Moving Up 1: Critical Reading",
    "level": "ม.4 (Grade 10)",
    "series": "Moving Up",
    "image": "assets/images/covers/mu1.jpg",
    "tag": "ม.4 เล่มก่อนหน้า"
  },
  {
    "id": "mu3",
    "title": "Moving Up 3: Critical Reading",
    "level": "ม.6 (Grade 12)",
    "series": "Moving Up",
    "image": "assets/images/covers/mu3.jpg",
    "tag": "ม.6 เล่มถัดไป"
  },
  {
    "id": "nw1",
    "title": "NEW Weaving It Together 1",
    "level": "ม.4 (Grade 10)",
    "series": "New Weaving",
    "image": "assets/images/covers/nw1.jpg",
    "tag": "Bestseller"
  },
  {
    "id": "nw2",
    "title": "NEW Weaving It Together 2",
    "level": "ม.5 (Grade 11)",
    "series": "New Weaving",
    "image": "assets/images/covers/nw2.jpg",
    "tag": "Bestseller"
  },
  {
    "id": "nw3",
    "title": "NEW Weaving It Together 3",
    "level": "ม.6 (Grade 12)",
    "series": "New Weaving",
    "image": "assets/images/covers/nw3.jpg",
    "tag": "Bestseller"
  },
  {
    "id": "step1",
    "title": "Step Up 1: Reading & Writing",
    "level": "ม.1 (Grade 7)",
    "series": "Step Up",
    "image": "assets/images/covers/step1.jpg",
    "tag": "หลักสูตรแกนกลาง"
  },
  {
    "id": "step2",
    "title": "Step Up 2: Reading & Writing",
    "level": "ม.2 (Grade 8)",
    "series": "Step Up",
    "image": "assets/images/covers/step2.jpg",
    "tag": "หลักสูตรแกนกลาง"
  },
  {
    "id": "step3",
    "title": "Step Up 3: Reading & Writing",
    "level": "ม.3 (Grade 9)",
    "series": "Step Up",
    "image": "assets/images/covers/step3.jpg",
    "tag": "หลักสูตรแกนกลาง"
  }
];

const DEFAULT_EXERCISES = [
  {
    "id": 1,
    "unit": 1,
    "title": "How Archaeologists Learn About the Past",
    "skill": "Main Idea",
    "skill_desc": "For main idea, students should be able to identify the most important idea or message of the text.",
    "cover": "assets/images/ex1.jpg",
    "audio": "assets/audio/ex1.mp3",
    "timestamps": [
      {
        "start": 0,
        "end": 27.2
      },
      {
        "start": 27.2,
        "end": 50.5
      },
      {
        "start": 50.5,
        "end": 80.3
      },
      {
        "start": 80.3,
        "end": 100.2
      }
    ],
    "passage": [
      "How do we know how people lived thousands of years ago? There were no photographs, videos, or social media posts to record their daily lives. Instead, archaeologists study objects and places left behind by people from the past. These discoveries provide important clues about ancient societies.",
      "Archaeologists often study objects called artifacts, such as tools, coins, jewelry, and pottery. These objects can reveal how people worked, what they ate, and what they valued. For example, finding cooking tools and animal bones can give researchers information about the food people prepared and ate.",
      "Archaeologists also examine buildings, graves, and other ancient sites. Before removing anything, they carefully record where each object was found. The location of an artifact can be just as important as the object itself because it helps researchers understand how it was used. Modern technology, such as digital maps and special scanning equipment, can also help archaeologists study sites without damaging them.",
      "Each discovery adds another piece to our understanding of history. A single object may not tell the whole story, but many pieces of evidence together can reveal how people lived long ago. Archaeology allows us to learn about societies that may have left few or no written records."
    ],
    "partA": [
      {
        "id": 1,
        "question": "What is the main idea of the passage?",
        "options": [
          "Archaeologists use different kinds of evidence to understand the past.",
          "Ancient people did not know how to write.",
          "Archaeologists mainly collect valuable objects."
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"Archaeologists use different kinds of evidence to understand the past.\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Main Idea"
      },
      {
        "id": 2,
        "question": "What is the main idea of the second paragraph?",
        "options": [
          "Ancient people used many kinds of cooking tools.",
          "Artifacts can provide information about how people lived.",
          "Coins are the most useful archaeological discoveries."
        ],
        "answer": 1,
        "explanation": "คำตอบที่ถูกต้องคือ \"Artifacts can provide information about how people lived.\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Main Idea"
      },
      {
        "id": 3,
        "question": "What is the main point of the third paragraph?",
        "options": [
          "Archaeologists carefully study sites and the locations of objects.",
          "Modern technology has replaced traditional archaeology.",
          "Ancient buildings are difficult to find."
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"Archaeologists carefully study sites and the locations of objects.\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Main Idea"
      },
      {
        "id": 4,
        "question": "Why does the writer mention cooking tools and animal bones?",
        "options": [
          "To explain how ancient people made tools",
          "To show that old objects can provide clues about daily life",
          "To prove that ancient people ate more meat"
        ],
        "answer": 1,
        "explanation": "คำตอบที่ถูกต้องคือ \"To show that old objects can provide clues about daily life\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Main Idea"
      },
      {
        "id": 5,
        "question": "Which statement best summarizes the final paragraph?",
        "options": [
          "Written records are the only reliable way to understand history.",
          "Archaeologists need to find complete objects at every site.",
          "Different pieces of evidence can work together to reveal the past."
        ],
        "answer": 2,
        "explanation": "คำตอบที่ถูกต้องคือ \"Different pieces of evidence can work together to reveal the past.\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Main Idea"
      }
    ],
    "wordBank": {
      "words": [
        "artifacts",
        "evidence",
        "ancient",
        "reveal",
        "Archaeologists"
      ],
      "scrambledWords": [
        "ancient",
        "evidence",
        "artifacts",
        "Archaeologists",
        "reveal"
      ],
      "questions": [
        {
          "id": 1,
          "sentence": "__________ study objects and places to learn about the past.",
          "answer": "Archaeologists"
        },
        {
          "id": 2,
          "sentence": "Tools, coins, and pottery are examples of __________.",
          "answer": "artifacts"
        },
        {
          "id": 3,
          "sentence": "Old objects can __________ information about how people once lived.",
          "answer": "reveal"
        },
        {
          "id": 4,
          "sentence": "Researchers study __________ sites to understand earlier societies.",
          "answer": "ancient"
        },
        {
          "id": 5,
          "sentence": "Many pieces of __________ can help us understand history.",
          "answer": "evidence"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "target": "Archaeologists study ancient objects to understand human history.",
        "tokens": [
          "study",
          "ancient objects",
          "Archaeologists",
          "to understand",
          "human history"
        ],
        "shuffledTokens": [
          "Archaeologists",
          "ancient objects",
          "study",
          "human history.",
          "to understand"
        ]
      },
      {
        "id": 2,
        "target": "Pottery can reveal information about daily life in the past.",
        "tokens": [
          "in the past",
          "can reveal",
          "Pottery",
          "about daily life",
          "information"
        ],
        "shuffledTokens": [
          "Pottery",
          "can reveal",
          "in the past.",
          "information",
          "about daily life"
        ]
      },
      {
        "id": 3,
        "target": "Modern technology helps experts examine ancient sites safely.",
        "tokens": [
          "examine",
          "safely",
          "Modern technology",
          "ancient sites",
          "helps experts"
        ],
        "shuffledTokens": [
          "Modern technology",
          "safely.",
          "examine",
          "helps experts",
          "ancient sites"
        ]
      },
      {
        "id": 4,
        "target": "The location of an artifact can provide valuable information.",
        "tokens": [
          "can provide",
          "information",
          "valuable",
          "The location of",
          "an artifact"
        ],
        "shuffledTokens": [
          "valuable",
          "information.",
          "can provide",
          "an artifact",
          "The location of"
        ]
      },
      {
        "id": 5,
        "target": "Different pieces of evidence can help reconstruct the past.",
        "tokens": [
          "pieces of evidence",
          "reconstruct",
          "Different",
          "the past",
          "can help"
        ],
        "shuffledTokens": [
          "Different",
          "reconstruct",
          "pieces of evidence",
          "can help",
          "the past."
        ]
      }
    ]
  },
  {
    "id": 2,
    "unit": 2,
    "title": "Life on the International Space Station",
    "skill": "Facts and details",
    "skill_desc": "For facts and details, students should be able to find specific facts and details that are directly stated in the text.",
    "cover": "assets/images/ex2.jpg",
    "audio": "assets/audio/ex2.mp3",
    "timestamps": [
      {
        "start": 0,
        "end": 32.2
      },
      {
        "start": 32.2,
        "end": 58.3
      },
      {
        "start": 58.3,
        "end": 86.2
      },
      {
        "start": 86.2,
        "end": 110.2
      }
    ],
    "passage": [
      "The International Space Station (ISS) is a large research station that travels around Earth. It moves at about 28,000 kilometers per hour and completes an orbit around Earth roughly every 90 minutes. Astronauts from different countries live and work there, carrying out scientific experiments and learning more about life in space.",
      "Daily life on the ISS is very different from life on Earth because of microgravity. Astronauts float instead of walking, so everyday activities require special equipment. They sleep in sleeping bags attached to a wall so they do not float around. Their food is specially prepared, and drinks are usually kept in sealed containers.",
      "Exercise is an important part of an astronaut’s daily routine. In microgravity, muscles and bones can become weaker because they do not work against gravity in the same way as on Earth. Astronauts therefore exercise for about two hours each day using special equipment. They also spend much of their working day doing experiments, checking equipment, and communicating with teams on Earth.",
      "Living in space can be challenging, but astronauts also experience things that people on Earth cannot. Because the ISS travels around Earth so quickly, astronauts can see many sunrises and sunsets in a single day. They can also look down at oceans, mountains, cities, and storms from hundreds of kilometers above Earth."
    ],
    "partA": [
      {
        "id": 1,
        "question": "About how long does the ISS take to complete one orbit around Earth?",
        "options": [
          "30 minutes",
          "90 minutes",
          "Two hours"
        ],
        "answer": 1,
        "explanation": "คำตอบที่ถูกต้องคือ \"90 minutes\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Facts and details"
      },
      {
        "id": 2,
        "question": "Why do astronauts attach their sleeping bags to a wall?",
        "options": [
          "To prevent themselves from floating around",
          "To stay warmer during the night",
          "To save space for experiments"
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"To prevent themselves from floating around\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Facts and details"
      },
      {
        "id": 3,
        "question": "How long do astronauts exercise each day?",
        "options": [
          "About 30 minutes",
          "About one hour",
          "About two hours"
        ],
        "answer": 2,
        "explanation": "คำตอบที่ถูกต้องคือ \"About two hours\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Facts and details"
      },
      {
        "id": 4,
        "question": "Why is exercise especially important in space?",
        "options": [
          "Astronauts need to prepare for spacewalks every day.",
          "Muscles and bones can become weaker in microgravity.",
          "Exercise helps the ISS move faster."
        ],
        "answer": 1,
        "explanation": "คำตอบที่ถูกต้องคือ \"Muscles and bones can become weaker in microgravity.\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Facts and details"
      },
      {
        "id": 5,
        "question": "What can astronauts see from the ISS?",
        "options": [
          "Only oceans and clouds",
          "Other planets in detail",
          "Oceans, mountains, cities, and storms"
        ],
        "answer": 2,
        "explanation": "คำตอบที่ถูกต้องคือ \"Oceans, mountains, cities, and storms\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Facts and details"
      }
    ],
    "wordBank": {
      "words": [
        "microgravity",
        "orbit",
        "equipment",
        "exercise",
        "experiments"
      ],
      "scrambledWords": [
        "equipment",
        "orbit",
        "microgravity",
        "experiments",
        "exercise"
      ],
      "questions": [
        {
          "id": 1,
          "sentence": "The ISS completes an __________ around Earth about every 90 minutes.",
          "answer": "orbit"
        },
        {
          "id": 2,
          "sentence": "Astronauts float because they live in __________.",
          "answer": "microgravity"
        },
        {
          "id": 3,
          "sentence": "Astronauts use special __________ to work and live safely in space.",
          "answer": "equipment"
        },
        {
          "id": 4,
          "sentence": "They __________ for about two hours each day to keep their bodies strong.",
          "answer": "exercise"
        },
        {
          "id": 5,
          "sentence": "Astronauts carry out scientific __________ to learn more about life in space.",
          "answer": "experiments"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "target": "Astronauts must adapt to living in a very different environment.",
        "tokens": [
          "living in",
          "Astronauts",
          "a very different",
          "must adapt to",
          "environment"
        ],
        "shuffledTokens": [
          "a very different",
          "Astronauts",
          "living in",
          "environment.",
          "must adapt to"
        ]
      },
      {
        "id": 2,
        "target": "The space station travels around Earth at an extremely high speed.",
        "tokens": [
          "travels",
          "at an extremely",
          "The space station",
          "around Earth",
          "high speed"
        ],
        "shuffledTokens": [
          "The space station",
          "at an extremely",
          "travels",
          "high speed.",
          "around Earth"
        ]
      },
      {
        "id": 3,
        "target": "Special equipment allows astronauts to work safely in space.",
        "tokens": [
          "to work safely",
          "Special equipment",
          "astronauts",
          "in space",
          "allows"
        ],
        "shuffledTokens": [
          "astronauts",
          "Special equipment",
          "to work safely",
          "allows",
          "in space."
        ]
      },
      {
        "id": 4,
        "target": "Scientists use the space station to conduct important research.",
        "tokens": [
          "use",
          "to conduct",
          "Scientists",
          "the space station",
          "important research"
        ],
        "shuffledTokens": [
          "Scientists",
          "to conduct",
          "use",
          "important research.",
          "the space station"
        ]
      },
      {
        "id": 5,
        "target": "Living in space requires careful planning and preparation.",
        "tokens": [
          "requires",
          "planning",
          "Living in space",
          "careful",
          "and preparation"
        ],
        "shuffledTokens": [
          "Living in space",
          "planning",
          "requires",
          "and preparation.",
          "careful"
        ]
      }
    ]
  },
  {
    "id": 3,
    "unit": 3,
    "title": "How Broken Bones Heal",
    "skill": "Sequence of events",
    "skill_desc": "For sequences of events, student should be able to Identify the order in which events or steps happen.",
    "cover": "assets/images/ex3.jpg",
    "audio": "assets/audio/ex3.mp3",
    "timestamps": [
      {
        "start": 0,
        "end": 28.5
      },
      {
        "start": 28.5,
        "end": 48.5
      },
      {
        "start": 48.5,
        "end": 60.7
      },
      {
        "start": 60.7,
        "end": 81.1
      }
    ],
    "passage": [
      "The human body has an amazing ability to repair itself after an injury, especially when bones are damaged. When a bone breaks, blood immediately collects around the injured area to form a protective clot.",
      "Special cells quickly begin removing damaged tissue and debris. Over the following weeks, the body develops a soft structure called a callus between the broken pieces to help hold them together.",
      "As new bone tissue gradually develops, the soft callus becomes harder and more stable. The broken pieces slowly begin to join together and regain their original strength.",
      "Even after the pain disappears, the healing process continues for several months as the body reshapes and remodels the bone into its natural structure."
    ],
    "partA": [
      {
        "id": 1,
        "question": "What happens soon after a bone breaks?",
        "options": [
          "The bone returns to its original shape.",
          "Blood collects around the injured area and forms a clot.",
          "The body removes extra bone."
        ],
        "answer": 1,
        "explanation": "คำตอบที่ถูกต้องคือ \"Blood collects around the injured area and forms a clot.\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Sequence of events"
      },
      {
        "id": 2,
        "question": "What happens after damaged tissue is removed?",
        "options": [
          "The body begins forming new tissue between the broken pieces.",
          "The pain immediately disappears.",
          "The bone becomes completely healed."
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"The body begins forming new tissue between the broken pieces.\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Sequence of events"
      },
      {
        "id": 3,
        "question": "What happens to the soft callus over the following weeks?",
        "options": [
          "It disappears immediately.",
          "It changes into muscle tissue.",
          "It becomes harder as new bone develops."
        ],
        "answer": 2,
        "explanation": "คำตอบที่ถูกต้องคือ \"It becomes harder as new bone develops.\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Sequence of events"
      },
      {
        "id": 4,
        "question": "What happens when the broken pieces become more stable?",
        "options": [
          "They begin to join together.",
          "Another blood clot forms.",
          "The bone becomes weaker."
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"They begin to join together.\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Sequence of events"
      },
      {
        "id": 5,
        "question": "Which shows the correct order of the healing process?",
        "options": [
          "Callus forms → blood clot forms → tissue is removed → bone reshapes",
          "Blood clot forms → damaged tissue is removed → callus develops → bone reshapes",
          "Damaged tissue is removed → bone reshapes → blood clot forms → callus develops"
        ],
        "answer": 1,
        "explanation": "คำตอบที่ถูกต้องคือ \"Blood clot forms → damaged tissue is removed → callus develops → bone reshapes\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Sequence of events"
      }
    ],
    "wordBank": {
      "words": [
        "stable",
        "reshape",
        "clot",
        "damaged",
        "callus"
      ],
      "scrambledWords": [
        "clot",
        "reshape",
        "stable",
        "callus",
        "damaged"
      ],
      "questions": [
        {
          "id": 1,
          "sentence": "Blood collects around the broken bone and forms a __________.",
          "answer": "clot"
        },
        {
          "id": 2,
          "sentence": "Special cells help remove __________ tissue from the injured area.",
          "answer": "damaged"
        },
        {
          "id": 3,
          "sentence": "New tissue forms a soft structure called a __________.",
          "answer": "callus"
        },
        {
          "id": 4,
          "sentence": "As new bone develops, the broken pieces become more __________.",
          "answer": "stable"
        },
        {
          "id": 5,
          "sentence": "The body continues to __________ the repaired bone over several months.",
          "answer": "reshape"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "target": "The human body has an amazing ability to repair damaged bones.",
        "tokens": [
          "to repair",
          "The human body",
          "damaged bones",
          "has an amazing",
          "ability"
        ],
        "shuffledTokens": [
          "damaged bones.",
          "The human body",
          "to repair",
          "ability",
          "has an amazing"
        ]
      },
      {
        "id": 2,
        "target": "Swelling and pain are common after a serious bone injury.",
        "tokens": [
          "after",
          "bone injury",
          "Swelling and pain",
          "are common",
          "a serious"
        ],
        "shuffledTokens": [
          "Swelling and pain",
          "bone injury.",
          "after",
          "a serious",
          "are common"
        ]
      },
      {
        "id": 3,
        "target": "New tissue gradually develops around the injured area.",
        "tokens": [
          "develops",
          "gradually",
          "New tissue",
          "the injured area",
          "around"
        ],
        "shuffledTokens": [
          "New tissue",
          "gradually",
          "develops",
          "around",
          "the injured area."
        ]
      },
      {
        "id": 4,
        "target": "Healthy food can provide important nutrients for bone health.",
        "tokens": [
          "for bone health",
          "can provide",
          "Healthy food",
          "nutrients",
          "important"
        ],
        "shuffledTokens": [
          "Healthy food",
          "can provide",
          "for bone health.",
          "important",
          "nutrients"
        ]
      },
      {
        "id": 5,
        "target": "The healing process may continue even after the pain disappears.",
        "tokens": [
          "the pain",
          "The healing process",
          "disappears",
          "may continue",
          "even after"
        ],
        "shuffledTokens": [
          "disappears.",
          "The healing process",
          "the pain",
          "even after",
          "may continue"
        ]
      }
    ]
  },
  {
    "id": 4,
    "unit": 4,
    "title": "Life in a Noisy City",
    "skill": "Cause and effect",
    "skill_desc": "For cause and effect, students should be able to identify what causes something to happen and what happens as a result.",
    "cover": "assets/images/ex4.jpg",
    "audio": "assets/audio/ex4.mp3",
    "timestamps": [
      {
        "start": 0,
        "end": 27.8
      },
      {
        "start": 27.8,
        "end": 51.6
      },
      {
        "start": 51.6,
        "end": 77.1
      },
      {
        "start": 77.1,
        "end": 97.3
      }
    ],
    "passage": [
      "Cities are full of sounds. Cars, motorcycles, construction work, trains, and crowds can create noise from early morning until late at night. Some city sounds are a normal part of daily life, but when noise becomes too loud or continues for a long time, it becomes noise pollution.",
      "Constant noise can make it difficult for people to relax or concentrate. Someone studying near a busy road, for example, may find it harder to focus because traffic sounds keep interrupting their attention. Loud environments can also make people feel more stressed, especially when they cannot control or escape the noise.",
      "Noise at night can cause another problem: poor sleep. Traffic, music, or construction may wake people up or prevent them from sleeping deeply. As a result, they may feel tired and less alert the following day. Over time, regularly losing sleep can affect a person’s mood, concentration, and overall well-being.",
      "Cities can reduce noise pollution in several ways. Trees and green spaces can help reduce some sound, while quieter roads and better building design can protect people from unwanted noise. Reducing unnecessary noise can make cities more comfortable and healthier places to live."
    ],
    "partA": [
      {
        "id": 1,
        "question": "What can cause noise pollution in a city?",
        "options": [
          "Traffic, construction, and other loud activities",
          "Having too many green spaces",
          "People sleeping at night"
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"Traffic, construction, and other loud activities\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Cause and effect"
      },
      {
        "id": 2,
        "question": "What may happen when traffic noise keeps interrupting someone who is studying?",
        "options": [
          "They may study faster.",
          "They may find it harder to concentrate.",
          "They may become more interested in traffic."
        ],
        "answer": 1,
        "explanation": "คำตอบที่ถูกต้องคือ \"They may find it harder to concentrate.\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Cause and effect"
      },
      {
        "id": 3,
        "question": "What can happen because of loud noise at night?",
        "options": [
          "People may sleep more deeply.",
          "People may wake up earlier by choice.",
          "People may not get enough good-quality sleep."
        ],
        "answer": 2,
        "explanation": "คำตอบที่ถูกต้องคือ \"People may not get enough good-quality sleep.\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Cause and effect"
      },
      {
        "id": 4,
        "question": "How can poor sleep affect people the following day?",
        "options": [
          "They may feel tired and less alert.",
          "They may become more energetic.",
          "They may hear sounds more clearly."
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"They may feel tired and less alert.\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Cause and effect"
      },
      {
        "id": 5,
        "question": "What can be an effect of reducing unnecessary city noise?",
        "options": [
          "Cities may need more construction work.",
          "Cities can become more comfortable places to live.",
          "More people will use motorcycles."
        ],
        "answer": 1,
        "explanation": "คำตอบที่ถูกต้องคือ \"Cities can become more comfortable places to live.\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Cause and effect"
      }
    ],
    "wordBank": {
      "words": [
        "concentrate",
        "pollution",
        "alert",
        "stressed",
        "reduce"
      ],
      "scrambledWords": [
        "alert",
        "pollution",
        "concentrate",
        "reduce",
        "stressed"
      ],
      "questions": [
        {
          "id": 1,
          "sentence": "Too much noise in a city can become noise __________.",
          "answer": "pollution"
        },
        {
          "id": 2,
          "sentence": "Loud traffic can make it difficult for students to __________.",
          "answer": "concentrate"
        },
        {
          "id": 3,
          "sentence": "Constant noise may cause people to feel more __________.",
          "answer": "stressed"
        },
        {
          "id": 4,
          "sentence": "Poor sleep can make people feel less __________ the next day.",
          "answer": "alert"
        },
        {
          "id": 5,
          "sentence": "Trees and green spaces can help __________ some city noise.",
          "answer": "reduce"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "target": "Loud traffic can make it difficult for people to relax at home.",
        "tokens": [
          "to relax",
          "Loud traffic",
          "can make it",
          "at home",
          "difficult",
          "for people"
        ],
        "shuffledTokens": [
          "can make it",
          "Loud traffic",
          "to relax",
          "difficult",
          "for people",
          "at home."
        ]
      },
      {
        "id": 2,
        "target": "A peaceful environment can help people feel more relaxed.",
        "tokens": [
          "A peaceful",
          "can help people",
          "environment",
          "more relaxed",
          "feel"
        ],
        "shuffledTokens": [
          "environment",
          "can help people",
          "A peaceful",
          "feel",
          "more relaxed."
        ]
      },
      {
        "id": 3,
        "target": "Green spaces can make cities more pleasant places to live.",
        "tokens": [
          "more pleasant places",
          "to live",
          "Green spaces",
          "can make",
          "cities"
        ],
        "shuffledTokens": [
          "Green spaces",
          "to live.",
          "more pleasant places",
          "cities",
          "can make"
        ]
      },
      {
        "id": 4,
        "target": "Reducing city noise can create a healthier living environment.",
        "tokens": [
          "city noise",
          "can create",
          "Reducing",
          "living environment",
          "a healthier"
        ],
        "shuffledTokens": [
          "Reducing",
          "can create",
          "city noise",
          "a healthier",
          "living environment."
        ]
      },
      {
        "id": 5,
        "target": "Busy streets are often noisier than residential areas.",
        "tokens": [
          "are often",
          "Busy streets",
          "residential areas",
          "noisier than"
        ],
        "shuffledTokens": [
          "residential areas.",
          "Busy streets",
          "are often",
          "noisier than"
        ]
      }
    ]
  },
  {
    "id": 5,
    "unit": 5,
    "title": "Human Eyes and Cameras",
    "skill": "Compare and contrast",
    "skill_desc": "For Compare and contrast, students should look at the information and identify how the two things are similar or different.",
    "cover": "assets/images/ex5.jpg",
    "audio": "assets/audio/ex5.mp3",
    "timestamps": [
      {
        "start": 0,
        "end": 24.6
      },
      {
        "start": 24.6,
        "end": 47.1
      },
      {
        "start": 47.1,
        "end": 67.1
      },
      {
        "start": 67.1,
        "end": 90.9
      }
    ],
    "passage": [
      "Every time you open your eyes, your body does something similar to taking a photograph. In less than a second, your eyes collect light and send information to your brain, allowing you to see the world around you. A camera also uses light to create an image. Although one is part of the human body and the other is a machine, they work in surprisingly similar ways.",
      "When light enters your eye, it passes through the pupil. In bright sunlight, the pupil becomes smaller, while in a dark room, it becomes larger to let in more light. A lens inside the eye then focuses the light onto the retina at the back of the eye. The retina turns this light into signals and sends them to the brain, which helps you understand what you are seeing.",
      "A camera follows a similar process. Instead of a pupil, it has an opening called an aperture that controls how much light enters. Its lens focuses the light onto a digital sensor, much like the lens in your eye focuses light onto the retina. The camera then processes this information and saves it as a photograph.",
      "There is one important difference. A camera simply records an image, but your eyes work together with your brain to make sense of what you see. You can recognize a friend's face, notice a moving car, or read the words on a screen almost immediately. A camera may copy some of the eye's basic functions, but the human visual system does much more than simply take pictures."
    ],
    "partA": [
      {
        "id": 1,
        "question": "What is one similarity between human eyes and cameras?",
        "options": [
          "Both save photographs.",
          "Both collect light to create images.",
          "Both send information to the brain."
        ],
        "answer": 1,
        "explanation": "คำตอบที่ถูกต้องคือ \"Both collect light to create images.\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Compare and contrast"
      },
      {
        "id": 2,
        "question": "How are the pupil and aperture similar?",
        "options": [
          "Both control the amount of light that enters.",
          "Both store visual information.",
          "Both create light."
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"Both control the amount of light that enters.\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Compare and contrast"
      },
      {
        "id": 3,
        "question": "What is similar about the retina and a camera sensor?",
        "options": [
          "Both control the size of an opening.",
          "Both help the brain understand images.",
          "Both receive focused light."
        ],
        "answer": 2,
        "explanation": "คำตอบที่ถูกต้องคือ \"Both receive focused light.\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Compare and contrast"
      },
      {
        "id": 4,
        "question": "What is an important difference between an eye and a camera?",
        "options": [
          "Only cameras use lenses.",
          "Eyes work with the brain to understand what we see, while cameras record images.",
          "Cameras can see without light."
        ],
        "answer": 1,
        "explanation": "คำตอบที่ถูกต้องคือ \"Eyes work with the brain to understand what we see, while cameras record images.\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Compare and contrast"
      },
      {
        "id": 5,
        "question": "Which statement best compares human eyes and cameras?",
        "options": [
          "They use some similar processes but have different abilities.",
          "They work in completely different ways.",
          "Cameras can do everything that human eyes can do."
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"They use some similar processes but have different abilities.\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Compare and contrast"
      }
    ],
    "wordBank": {
      "words": [
        "sensor",
        "pupil",
        "process",
        "aperture",
        "retina"
      ],
      "scrambledWords": [
        "process",
        "pupil",
        "sensor",
        "retina",
        "aperture"
      ],
      "questions": [
        {
          "id": 1,
          "sentence": "Light enters the human eye through the __________.",
          "answer": "pupil"
        },
        {
          "id": 2,
          "sentence": "The __________ receives light at the back of the eye.",
          "answer": "retina"
        },
        {
          "id": 3,
          "sentence": "A camera uses an __________ to control how much light enters.",
          "answer": "aperture"
        },
        {
          "id": 4,
          "sentence": "A digital __________ receives light to help create a photograph.",
          "answer": "sensor"
        },
        {
          "id": 5,
          "sentence": "The brain can __________ information from the eyes very quickly.",
          "answer": "process"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "target": "Human eyes can quickly adjust to different levels of light.",
        "tokens": [
          "can",
          "quickly adjust to",
          "Human eyes",
          "levels of light",
          "different"
        ],
        "shuffledTokens": [
          "Human eyes",
          "quickly adjust to",
          "can",
          "different",
          "levels of light."
        ]
      },
      {
        "id": 2,
        "target": "The brain helps us understand the images our eyes receive.",
        "tokens": [
          "understand",
          "The brain",
          "the images",
          "helps us",
          "our eyes receive"
        ],
        "shuffledTokens": [
          "the images",
          "The brain",
          "understand",
          "our eyes receive.",
          "helps us"
        ]
      },
      {
        "id": 3,
        "target": "Our vision allows us to recognize people and objects around us.",
        "tokens": [
          "allows us",
          "around us",
          "Our vision",
          "to recognize",
          "people and objects"
        ],
        "shuffledTokens": [
          "Our vision",
          "around us.",
          "allows us",
          "people and objects",
          "to recognize"
        ]
      },
      {
        "id": 4,
        "target": "Digital cameras can store thousands of photographs.",
        "tokens": [
          "can store",
          "Digital cameras",
          "photographs",
          "thousands of"
        ],
        "shuffledTokens": [
          "photographs.",
          "Digital cameras",
          "can store",
          "thousands of"
        ]
      },
      {
        "id": 5,
        "target": "Both eyes and cameras depend on light to create images.",
        "tokens": [
          "depend on",
          "to create images",
          "Both",
          "light",
          "eyes and cameras"
        ],
        "shuffledTokens": [
          "Both",
          "to create images.",
          "depend on",
          "eyes and cameras",
          "light"
        ]
      }
    ]
  },
  {
    "id": 6,
    "unit": 6,
    "title": "The Psychology of Supermarkets",
    "skill": "Inference",
    "skill_desc": "For Inference, students should use clues in a text and what they already know to understand something the writer does not say directly.",
    "cover": "assets/images/ex6.jpg",
    "audio": "assets/audio/ex6.mp3",
    "timestamps": [
      {
        "start": 0,
        "end": 18.6
      },
      {
        "start": 18.6,
        "end": 42.1
      },
      {
        "start": 42.1,
        "end": 61.6
      },
      {
        "start": 61.6,
        "end": 82.4
      }
    ],
    "passage": [
      "Have you ever gone to a supermarket for one thing and left with a full shopping bag? This may not happen by accident. Supermarkets carefully organize their spaces, and even small details can influence how customers move through the store and what they decide to buy.",
      "Popular everyday products, such as milk or eggs, are sometimes placed farther inside the store. To reach them, shoppers may have to walk past many other products. Colorful displays and special offers are also strategically placed where customers can easily see them. Certain products may be placed at eye level to attract attention and encourage shoppers to consider buying them.",
      "Supermarkets also pay attention to what happens near the checkout. While customers wait in line, they often see small, tempting items such as snacks, drinks, or batteries. Because these products are easy to pick up and do not seem very expensive, shoppers may make an impulse purchase—buying something they had not planned to get.",
      "These techniques may seem simple, but together they can have a powerful effect on purchasing decisions. Making a shopping list and becoming more aware of product placement can help customers make more careful choices. The next time you visit a supermarket, look around—you may discover that almost every part of the store has been carefully planned."
    ],
    "partA": [
      {
        "id": 1,
        "question": "Why might supermarkets place everyday products farther inside the store?",
        "options": [
          "To keep these products away from sunlight",
          "To encourage shoppers to pass and notice other products",
          "To make the supermarket easier to clean"
        ],
        "answer": 1,
        "explanation": "คำตอบที่ถูกต้องคือ \"To encourage shoppers to pass and notice other products\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Inference"
      },
      {
        "id": 2,
        "question": "What can you infer about products placed at eye level?",
        "options": [
          "The store may want shoppers to notice them more easily.",
          "They are always the most popular products.",
          "They are usually cheaper than other products."
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"The store may want shoppers to notice them more easily.\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Inference"
      },
      {
        "id": 3,
        "question": "Why are small, tempting products often placed near the checkout?",
        "options": [
          "They need to be protected by supermarket staff.",
          "Customers usually forget to buy them.",
          "Shoppers may make an impulse purchase while waiting."
        ],
        "answer": 2,
        "explanation": "คำตอบที่ถูกต้องคือ \"Shoppers may make an impulse purchase while waiting.\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Inference"
      },
      {
        "id": 4,
        "question": "What can you infer about the way supermarkets organize their stores?",
        "options": [
          "Most products are placed wherever there is enough space.",
          "Store design can influence customers’ purchasing decisions.",
          "Supermarkets mainly organize products by their color."
        ],
        "answer": 1,
        "explanation": "คำตอบที่ถูกต้องคือ \"Store design can influence customers’ purchasing decisions.\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Inference"
      },
      {
        "id": 5,
        "question": "What does the passage suggest about an aware shopper?",
        "options": [
          "They may think more carefully before buying unplanned items.",
          "They are more likely to choose products at eye level.",
          "They usually spend more time shopping."
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"They may think more carefully before buying unplanned items.\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Inference"
      }
    ],
    "wordBank": {
      "words": [
        "tempting",
        "influence",
        "impulse",
        "strategically",
        "aware"
      ],
      "scrambledWords": [
        "impulse",
        "influence",
        "tempting",
        "aware",
        "strategically"
      ],
      "questions": [
        {
          "id": 1,
          "sentence": "Supermarkets can __________ customers’ shopping decisions in different ways.",
          "answer": "influence"
        },
        {
          "id": 2,
          "sentence": "Some products are __________ placed where shoppers can easily see them.",
          "answer": "strategically"
        },
        {
          "id": 3,
          "sentence": "Snacks near the checkout may look __________ to hungry shoppers.",
          "answer": "tempting"
        },
        {
          "id": 4,
          "sentence": "Buying something without planning it is called an __________ purchase.",
          "answer": "impulse"
        },
        {
          "id": 5,
          "sentence": "Shoppers who are __________ of these techniques may make more careful choices.",
          "answer": "aware"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "target": "Attractive displays can encourage shoppers to explore new products.",
        "tokens": [
          "can encourage",
          "to explore",
          "Attractive displays",
          "shoppers",
          "new products"
        ],
        "shuffledTokens": [
          "Attractive displays",
          "to explore",
          "can encourage",
          "new products.",
          "shoppers"
        ]
      },
      {
        "id": 2,
        "target": "Discounts can lead customers to purchase extra items.",
        "tokens": [
          "to purchase",
          "Discounts",
          "customers",
          "extra items",
          "can lead"
        ],
        "shuffledTokens": [
          "customers",
          "Discounts",
          "to purchase",
          "can lead",
          "extra items."
        ]
      },
      {
        "id": 3,
        "target": "Some shoppers make unplanned purchases while waiting at the checkout.",
        "tokens": [
          "make",
          "while waiting",
          "Some shoppers",
          "unplanned purchases",
          "at the checkout"
        ],
        "shuffledTokens": [
          "Some shoppers",
          "while waiting",
          "make",
          "at the checkout.",
          "unplanned purchases"
        ]
      },
      {
        "id": 4,
        "target": "Making a shopping list can help people control their spending.",
        "tokens": [
          "a shopping list",
          "their spending",
          "Making",
          "can help people",
          "control"
        ],
        "shuffledTokens": [
          "Making",
          "their spending.",
          "a shopping list",
          "control",
          "can help people"
        ]
      },
      {
        "id": 5,
        "target": "Product placement can have a strong effect on shopping decisions.",
        "tokens": [
          "can have",
          "Product placement",
          "shopping decisions",
          "a strong effect on"
        ],
        "shuffledTokens": [
          "shopping decisions.",
          "Product placement",
          "can have",
          "a strong effect on"
        ]
      }
    ]
  },
  {
    "id": 7,
    "unit": 7,
    "title": "Inside the World's Largest Garbage Dumps",
    "skill": "Analyzing language",
    "skill_desc": "For Analyzing Language, students should understand how a writer’s choice of words affects meaning and feelings.",
    "cover": "assets/images/ex7.jpg",
    "audio": "assets/audio/ex7.mp3",
    "timestamps": [
      {
        "start": 0,
        "end": 29.1
      },
      {
        "start": 29.1,
        "end": 58.1
      },
      {
        "start": 58.1,
        "end": 83.8
      },
      {
        "start": 83.8,
        "end": 109.9
      }
    ],
    "passage": [
      "Every day, cities around the world produce enormous amounts of rubbish. Much of it is taken to landfills, where waste is collected and buried. Some of the largest landfill sites receive thousands of tons of rubbish each day. Massive piles of plastic bags, food containers, old clothes, broken furniture, and other unwanted items can cover huge areas of land.",
      "A landfill is more than simply a place where rubbish disappears. As more trucks arrive, waste continues to build up, and the piles grow higher. Some materials, especially plastic, can remain there for decades because they break down very slowly. Food and other organic waste decompose and release gases into the air. Landfills can also produce polluted liquid that may harm the surrounding soil and water if it is not carefully managed.",
      "Large landfill sites can have serious consequences for nearby communities. Strong smells, insects, smoke from fires, and polluted water can create difficult living conditions. In some parts of the world, people search through the waste for plastic, metal, and other valuable materials that can be sold or recycled. What looks useless to one person may become a source of income for another.",
      "Looking across a huge landfill can make the amount of waste produced by modern life difficult to ignore. Every bottle, package, or piece of clothing was once something that someone bought and used. Landfills remind us that throwing something “away” does not mean it has truly disappeared. Instead, much of our rubbish remains in the environment, sometimes for many years after we have forgotten about it."
    ],
    "partA": [
      {
        "id": 1,
        "question": "Why does the writer describe the piles of rubbish as “massive”?",
        "options": [
          "To show that the amount of waste is very large",
          "To explain that the rubbish is expensive",
          "To suggest that the rubbish is easy to remove"
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"To show that the amount of waste is very large\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Analyzing language"
      },
      {
        "id": 2,
        "question": "What does the description “the piles grow higher” help the reader understand?",
        "options": [
          "Landfills become cleaner over time.",
          "The amount of waste continues to increase.",
          "Most rubbish disappears quickly."
        ],
        "answer": 1,
        "explanation": "คำตอบที่ถูกต้องคือ \"The amount of waste continues to increase.\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Analyzing language"
      },
      {
        "id": 3,
        "question": "Why does the writer mention strong smells, insects, smoke, and polluted water together?",
        "options": [
          "To explain how landfill workers collect rubbish",
          "To describe the materials that can be recycled",
          "To emphasize the different problems faced by nearby communities"
        ],
        "answer": 2,
        "explanation": "คำตอบที่ถูกต้องคือ \"To emphasize the different problems faced by nearby communities\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Analyzing language"
      },
      {
        "id": 4,
        "question": "What does the sentence “What looks useless to one person may become a source of income for another” suggest?",
        "options": [
          "Waste can have different value to different people.",
          "All rubbish can easily be sold for money.",
          "People should throw away more valuable materials."
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"Waste can have different value to different people.\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Analyzing language"
      },
      {
        "id": 5,
        "question": "How does the final paragraph affect the overall message of the passage?",
        "options": [
          "It suggests that landfills are a temporary problem.",
          "It encourages readers to think about what happens to waste after they throw it away.",
          "It explains that most rubbish is quickly recycled."
        ],
        "answer": 1,
        "explanation": "คำตอบที่ถูกต้องคือ \"It encourages readers to think about what happens to waste after they throw it away.\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Analyzing language"
      }
    ],
    "wordBank": {
      "words": [
        "surrounding",
        "release",
        "waste",
        "environment",
        "polluted"
      ],
      "scrambledWords": [
        "waste",
        "release",
        "surrounding",
        "polluted",
        "environment"
      ],
      "questions": [
        {
          "id": 1,
          "sentence": "Cities around the world produce large amounts of __________ every day.",
          "answer": "waste"
        },
        {
          "id": 2,
          "sentence": "Organic materials can __________ gases as they break down.",
          "answer": "release"
        },
        {
          "id": 3,
          "sentence": "Landfills may produce __________ liquid that can harm soil and water.",
          "answer": "polluted"
        },
        {
          "id": 4,
          "sentence": "Large garbage dumps can affect the __________ communities.",
          "answer": "surrounding"
        },
        {
          "id": 5,
          "sentence": "Plastic can remain in the __________ for many years.",
          "answer": "environment"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "target": "Large amounts of rubbish can create serious environmental problems.",
        "tokens": [
          "rubbish",
          "environmental problems",
          "Large amounts of",
          "can create",
          "serious"
        ],
        "shuffledTokens": [
          "Large amounts of",
          "environmental problems.",
          "rubbish",
          "serious",
          "can create"
        ]
      },
      {
        "id": 2,
        "target": "Poorly managed landfills can seriously harm the surrounding soil and water.",
        "tokens": [
          "can seriously harm",
          "soil and water",
          "Poorly managed landfills",
          "the surrounding"
        ],
        "shuffledTokens": [
          "Poorly managed landfills",
          "soil and water.",
          "can seriously harm",
          "the surrounding"
        ]
      },
      {
        "id": 3,
        "target": "Some communities are affected by increasing amounts of waste.",
        "tokens": [
          "are affected",
          "amounts of waste",
          "Some communities",
          "by increasing"
        ],
        "shuffledTokens": [
          "Some communities",
          "amounts of waste.",
          "are affected",
          "by increasing"
        ]
      },
      {
        "id": 4,
        "target": "Reducing unnecessary packaging can lower the amount of waste produced.",
        "tokens": [
          "the amount of",
          "Reducing",
          "can lower",
          "unnecessary packaging",
          "waste produced"
        ],
        "shuffledTokens": [
          "can lower",
          "Reducing",
          "the amount of",
          "waste produced.",
          "unnecessary packaging"
        ]
      },
      {
        "id": 5,
        "target": "Better waste management can create a cleaner and healthier environment.",
        "tokens": [
          "and healthier",
          "Better waste management",
          "environment",
          "can create",
          "a cleaner"
        ],
        "shuffledTokens": [
          "environment.",
          "Better waste management",
          "and healthier",
          "a cleaner",
          "can create"
        ]
      }
    ]
  },
  {
    "id": 8,
    "unit": 8,
    "title": "When Social Media Information Is Wrong",
    "skill": "Writer’s purpose",
    "skill_desc": "For Writer’s Purpose, students should be able to identify whether a writer wants to inform, explain, persuade, entertain, or warn.",
    "cover": "assets/images/ex8.jpg",
    "audio": "assets/audio/ex8.mp3",
    "timestamps": [
      {
        "start": 0,
        "end": 24.7
      },
      {
        "start": 24.7,
        "end": 47.4
      },
      {
        "start": 47.4,
        "end": 70.8
      },
      {
        "start": 70.8,
        "end": 90.3
      }
    ],
    "passage": [
      "Social media allows information to travel around the world within minutes. A photo, video, or short post can quickly reach thousands of people. However, information that spreads widely is not always accurate. Some posts contain mistakes, while others may leave out important details or present information in a misleading way.",
      "False information can spread especially quickly when a post is surprising, frightening, or emotional. People may share it immediately without checking where it came from. A dramatic headline or a short video can seem convincing, even when it does not show the complete story. Once thousands of people have shared a post, correcting the false information can become difficult.",
      "Before sharing something online, it is important to check the source. Ask who created the information and whether other reliable sources report the same story. The date is also important because old photographs or videos are sometimes shared as if they show a recent event. Taking a few minutes to check these details can prevent inaccurate information from spreading further.",
      "Social media can be a useful way to discover news and ideas, but users also have a responsibility to think carefully about what they share. A popular post is not automatically a trustworthy one. By checking information before passing it on, everyone can help create a more reliable online environment."
    ],
    "partA": [
      {
        "id": 1,
        "question": "What is the writer’s main purpose in this passage?",
        "options": [
          "To entertain readers with stories about social media",
          "To warn readers about inaccurate information and explain how to check it",
          "To persuade readers to stop using social media"
        ],
        "answer": 1,
        "explanation": "คำตอบที่ถูกต้องคือ \"To warn readers about inaccurate information and explain how to check it\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Writer’s purpose"
      },
      {
        "id": 2,
        "question": "Why does the writer mention “surprising, frightening, or emotional” posts?",
        "options": [
          "To explain why some false information spreads quickly",
          "To show which posts are the most entertaining",
          "To encourage people to create more emotional content"
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"To explain why some false information spreads quickly\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Writer’s purpose"
      },
      {
        "id": 3,
        "question": "Why does the writer discuss old photographs and videos?",
        "options": [
          "To explain how to save old social media posts",
          "To show that old content is always unreliable",
          "To give an example of how information can be presented in a misleading way"
        ],
        "answer": 2,
        "explanation": "คำตอบที่ถูกต้องคือ \"To give an example of how information can be presented in a misleading way\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Writer’s purpose"
      },
      {
        "id": 4,
        "question": "What is the purpose of the third paragraph?",
        "options": [
          "To describe how social media was created",
          "To advise readers how to check information before sharing it",
          "To compare different social media platforms"
        ],
        "answer": 1,
        "explanation": "คำตอบที่ถูกต้องคือ \"To advise readers how to check information before sharing it\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Writer’s purpose"
      },
      {
        "id": 5,
        "question": "What does the writer want readers to do after reading the passage?",
        "options": [
          "Think carefully and check information before sharing it",
          "Avoid reading news on the internet completely",
          "Share popular posts as quickly as possible"
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"Think carefully and check information before sharing it\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Writer’s purpose"
      }
    ],
    "wordBank": {
      "words": [
        "accurate",
        "misleading",
        "source",
        "reliable",
        "responsibility"
      ],
      "scrambledWords": [
        "source",
        "misleading",
        "accurate",
        "responsibility",
        "reliable"
      ],
      "questions": [
        {
          "id": 1,
          "sentence": "Information that is correct and true is considered __________.",
          "answer": "accurate"
        },
        {
          "id": 2,
          "sentence": "Some online posts can be __________ because they do not show the complete story.",
          "answer": "misleading"
        },
        {
          "id": 3,
          "sentence": "Always check the __________ to find out where the information came from.",
          "answer": "source"
        },
        {
          "id": 4,
          "sentence": "It is helpful to compare information with other __________ sources.",
          "answer": "reliable"
        },
        {
          "id": 5,
          "sentence": "Social media users have a __________ to think carefully before sharing information.",
          "answer": "responsibility"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "target": "False information can spread rapidly through social media.",
        "tokens": [
          "can spread rapidly",
          "through",
          "False information",
          "social media"
        ],
        "shuffledTokens": [
          "False information",
          "through",
          "can spread rapidly",
          "social media."
        ]
      },
      {
        "id": 2,
        "target": "We should check the original source before sharing information online.",
        "tokens": [
          "before sharing",
          "the original source",
          "We",
          "information online",
          "should check"
        ],
        "shuffledTokens": [
          "We",
          "the original source",
          "before sharing",
          "should check",
          "information online."
        ]
      },
      {
        "id": 3,
        "target": "Emotional headlines can influence how people react to information.",
        "tokens": [
          "can influence",
          "information",
          "Emotional headlines",
          "react to",
          "how people"
        ],
        "shuffledTokens": [
          "Emotional headlines",
          "information.",
          "can influence",
          "how people",
          "react to"
        ]
      },
      {
        "id": 4,
        "target": "Checking multiple sources can help identify false information.",
        "tokens": [
          "identify",
          "Checking",
          "can help",
          "multiple sources",
          "false information"
        ],
        "shuffledTokens": [
          "can help",
          "Checking",
          "identify",
          "false information.",
          "multiple sources"
        ]
      },
      {
        "id": 5,
        "target": "Responsible online behavior can create a safer digital environment.",
        "tokens": [
          "online behavior",
          "can create",
          "Responsible",
          "digital environment",
          "a safer"
        ],
        "shuffledTokens": [
          "Responsible",
          "can create",
          "online behavior",
          "a safer",
          "digital environment."
        ]
      }
    ]
  },
  {
    "id": 9,
    "unit": 9,
    "title": "Life in a Cashless Society",
    "skill": "Recognizing coherence",
    "skill_desc": "For Recognizing Coherence, students should understand how ideas and sentences connect logically.",
    "cover": "assets/images/ex9.jpg",
    "audio": "assets/audio/ex9.mp3",
    "timestamps": [
      {
        "start": 0,
        "end": 24.9
      },
      {
        "start": 24.9,
        "end": 50.2
      },
      {
        "start": 50.2,
        "end": 77.7
      },
      {
        "start": 77.7,
        "end": 95.6
      }
    ],
    "passage": [
      "Imagine leaving home without any cash in your pocket. You buy breakfast with your phone, tap a card to enter the train, and order dinner through an app. For millions of people, this is already part of everyday life. As digital payments become more widely accepted, coins and banknotes are slowly becoming less important in daily transactions.",
      "Going cashless has several advantages. Digital payments are fast and convenient—there is no need to search for the correct change or visit an ATM. Banking apps also allow people to track their spending almost immediately. This can help users understand where their money goes and manage their budget more effectively. Carrying less cash may also reduce the risk of losing physical money.",
      "However, a cashless society is highly dependent on technology. A dead phone battery, a broken payment system, or a poor internet connection can suddenly make paying difficult. There is also a larger social concern. Not everyone owns a smartphone or has easy access to banking services. If cash completely disappears, some people could be excluded from everyday activities simply because they cannot use digital payment methods.",
      "The move toward digital payments is likely to continue, but convenience should not be the only goal. A modern payment system should also be reliable and accessible to everyone. A cashless future may make life easier for many people, but its success will depend on whether everyone is able to take part."
    ],
    "partA": [
      {
        "id": 1,
        "question": "Which sentence best follows this idea?“Digital payments are becoming a common part of everyday life.”",
        "options": [
          "Many people now use phones or cards to pay for daily purchases.",
          "Banknotes are usually made from special materials.",
          "Some people enjoy collecting old coins."
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"Many people now use phones or cards to pay for daily purchases.\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Recognizing coherence"
      },
      {
        "id": 2,
        "question": "Which sentence does NOT belong in a paragraph about the advantages of digital payments?",
        "options": [
          "Banking apps can help people track their spending.",
          "Digital payments can make transactions faster and more convenient.",
          "Smartphones are produced in many different models and colors."
        ],
        "answer": 2,
        "explanation": "คำตอบที่ถูกต้องคือ \"Smartphones are produced in many different models and colors.\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Recognizing coherence"
      },
      {
        "id": 3,
        "question": "Among these sentences, which sentence should come first?",
        "options": [
          "As a result, customers may be unable to complete a transaction.",
          "A digital payment system sometimes stops working.",
          "This can cause difficulties for both customers and businesses."
        ],
        "answer": 1,
        "explanation": "คำตอบที่ถูกต้องคือ \"A digital payment system sometimes stops working.\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Recognizing coherence"
      },
      {
        "id": 4,
        "question": "Which sentence best connects these two ideas?“Digital payments are convenient for many people. __________. This means a completely cashless society could exclude some groups.”",
        "options": [
          "However, not everyone has access to smartphones or banking services.",
          "Digital payments are used in many restaurants and shops.",
          "People have used different forms of money throughout history."
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"However, not everyone has access to smartphones or banking services.\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Recognizing coherence"
      },
      {
        "id": 5,
        "question": "Which sentence is the most logical conclusion to the passage?",
        "options": [
          "Cash will certainly disappear everywhere within a few years.",
          "Digital payment is the only safe way to manage money.",
          "A successful payment system should be both convenient and accessible."
        ],
        "answer": 2,
        "explanation": "คำตอบที่ถูกต้องคือ \"A successful payment system should be both convenient and accessible.\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Recognizing coherence"
      }
    ],
    "wordBank": {
      "words": [
        "accessible",
        "transactions",
        "track",
        "convenient",
        "dependent"
      ],
      "scrambledWords": [
        "track",
        "transactions",
        "accessible",
        "dependent",
        "convenient"
      ],
      "questions": [
        {
          "id": 1,
          "sentence": "Digital payments make everyday __________ faster and easier.",
          "answer": "transactions"
        },
        {
          "id": 2,
          "sentence": "Banking apps allow users to __________ how much money they spend.",
          "answer": "track"
        },
        {
          "id": 3,
          "sentence": "Paying by phone can be more __________ than carrying cash.",
          "answer": "convenient"
        },
        {
          "id": 4,
          "sentence": "Cashless payment systems are highly __________ on technology.",
          "answer": "dependent"
        },
        {
          "id": 5,
          "sentence": "Payment methods should be __________ to people from different groups.",
          "answer": "accessible"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "target": "Digital payments have become increasingly common in everyday life.",
        "tokens": [
          "in everyday life",
          "have become",
          "Digital payments",
          "increasingly common"
        ],
        "shuffledTokens": [
          "Digital payments",
          "have become",
          "in everyday life.",
          "increasingly common"
        ]
      },
      {
        "id": 2,
        "target": "Mobile banking apps can help users manage their spending more effectively.",
        "tokens": [
          "their spending",
          "can help users",
          "manage",
          "Mobile banking apps",
          "more effectively"
        ],
        "shuffledTokens": [
          "manage",
          "can help users",
          "their spending",
          "more effectively.",
          "Mobile banking apps"
        ]
      },
      {
        "id": 3,
        "target": "A cashless system requires reliable technology and internet access.",
        "tokens": [
          "requires",
          "and internet access",
          "technology",
          "reliable",
          "A cashless system"
        ],
        "shuffledTokens": [
          "technology",
          "and internet access.",
          "requires",
          "A cashless system",
          "reliable"
        ]
      },
      {
        "id": 4,
        "target": "Modern payment systems should be accessible to everyone.",
        "tokens": [
          "everyone",
          "Modern payment systems",
          "accessible to",
          "should be"
        ],
        "shuffledTokens": [
          "accessible to",
          "Modern payment systems",
          "everyone.",
          "should be"
        ]
      },
      {
        "id": 5,
        "target": "Digital payments are changing how people handle their money.",
        "tokens": [
          "are changing",
          "their money",
          "Digital payments",
          "how people",
          "handle"
        ],
        "shuffledTokens": [
          "Digital payments",
          "their money.",
          "are changing",
          "handle",
          "how people"
        ]
      }
    ]
  },
  {
    "id": 10,
    "unit": 10,
    "title": "The Disappearing Bees",
    "skill": "Drawing conclusion",
    "skill_desc": "For Drawing Conclusions, students should be able to combine several details from the text to understand something that is not directly stated",
    "cover": "assets/images/ex10.jpg",
    "audio": "assets/audio/ex10.mp3",
    "timestamps": [
      {
        "start": 0,
        "end": 28.5
      },
      {
        "start": 28.5,
        "end": 54.5
      },
      {
        "start": 54.5,
        "end": 78.4
      },
      {
        "start": 78.4,
        "end": 103.8
      }
    ],
    "passage": [
      "Bees may be small insects, but they play a significant role in the natural world. As bees travel from flower to flower collecting nectar, they transfer pollen between plants. This process, known as pollination, allows many plants to produce fruits and seeds. Apples, strawberries, almonds, and many other crops depend heavily on pollinators such as bees.",
      "In some regions, however, bee populations have been declining. Scientists believe several factors may be responsible. Certain chemicals used in agriculture can be harmful to bees, while the destruction of natural habitats leaves them with fewer sources of food. Changes in weather patterns can also affect when flowers bloom, making it more difficult for bees to find enough nectar.",
      "The decline of bees could have serious consequences. If fewer flowers are pollinated, some plants may produce less fruit and fewer seeds. Farmers could experience lower crop production, while animals that rely on these plants for food may also be affected. As a result, a major decrease in bee populations could disrupt entire ecosystems.",
      "People can help by planting a diverse range of flowers, protecting natural habitats, and limiting the use of harmful chemicals. Even small gardens can provide bees with valuable sources of food and shelter. Protecting bees is therefore not only about preserving one species—it can also help maintain the balance of ecosystems and support the food systems that humans depend on."
    ],
    "partA": [
      {
        "id": 1,
        "question": "What can we conclude about the importance of bees to humans?",
        "options": [
          "Bees are mainly important because they produce honey.",
          "Bees help support the production of many foods people eat.",
          "Humans cannot grow any food without bees."
        ],
        "answer": 1,
        "explanation": "คำตอบที่ถูกต้องคือ \"Bees help support the production of many foods people eat.\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Drawing conclusion"
      },
      {
        "id": 2,
        "question": "What is likely to happen if natural habitats continue to disappear?",
        "options": [
          "Bees may have more difficulty finding enough food.",
          "Bees will begin living only on farms.",
          "More flowers will grow in cities."
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"Bees may have more difficulty finding enough food.\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Drawing conclusion"
      },
      {
        "id": 3,
        "question": "What can we conclude about a large decline in bee populations?",
        "options": [
          "It would only affect flowering plants.",
          "Farmers would stop growing fruits completely.",
          "It could affect many parts of an ecosystem."
        ],
        "answer": 2,
        "explanation": "คำตอบที่ถูกต้องคือ \"It could affect many parts of an ecosystem.\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Drawing conclusion"
      },
      {
        "id": 4,
        "question": "Why can small gardens be helpful to bees?",
        "options": [
          "They can provide additional food and shelter.",
          "They protect bees from all harmful chemicals.",
          "They prevent changes in weather patterns."
        ],
        "answer": 0,
        "explanation": "คำตอบที่ถูกต้องคือ \"They can provide additional food and shelter.\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Drawing conclusion"
      },
      {
        "id": 5,
        "question": "What conclusion can be drawn from the passage as a whole?",
        "options": [
          "Only farmers are responsible for protecting bees.",
          "Protecting bees can benefit both nature and people.",
          "Bee populations will naturally recover without help."
        ],
        "answer": 1,
        "explanation": "คำตอบที่ถูกต้องคือ \"Protecting bees can benefit both nature and people.\" สอดคล้องกับเนื้อหาในบทอ่านเกี่ยวกับ Drawing conclusion"
      }
    ],
    "wordBank": {
      "words": [
        "consequences",
        "pollination",
        "declining",
        "diverse",
        "disrupt"
      ],
      "scrambledWords": [
        "declining",
        "pollination",
        "consequences",
        "disrupt",
        "diverse"
      ],
      "questions": [
        {
          "id": 1,
          "sentence": "Bee populations are __________ in some regions of the world.",
          "answer": "declining"
        },
        {
          "id": 2,
          "sentence": "Bees help plants reproduce through a process called __________.",
          "answer": "pollination"
        },
        {
          "id": 3,
          "sentence": "A major decrease in bees could __________ the balance of an ecosystem.",
          "answer": "disrupt"
        },
        {
          "id": 4,
          "sentence": "Environmental changes can have serious __________ for plants and animals.",
          "answer": "consequences"
        },
        {
          "id": 5,
          "sentence": "Planting a __________ range of flowers can provide bees with more food.",
          "answer": "diverse"
        }
      ]
    },
    "partC": [
      {
        "id": 1,
        "target": "Bees play an important role in maintaining healthy ecosystems.",
        "tokens": [
          "an important role",
          "healthy ecosystems",
          "Bees",
          "in maintaining",
          "play"
        ],
        "shuffledTokens": [
          "Bees",
          "healthy ecosystems.",
          "an important role",
          "play",
          "in maintaining"
        ]
      },
      {
        "id": 2,
        "target": "The loss of natural habitats can threaten wildlife populations.",
        "tokens": [
          "can threaten",
          "populations",
          "The loss of",
          "wildlife",
          "natural habitats"
        ],
        "shuffledTokens": [
          "The loss of",
          "populations.",
          "can threaten",
          "natural habitats",
          "wildlife"
        ]
      },
      {
        "id": 3,
        "target": "Harmful chemicals may negatively affect insects and other animals.",
        "tokens": [
          "insects",
          "Harmful",
          "may negatively affect",
          "chemicals",
          "and other animals"
        ],
        "shuffledTokens": [
          "may negatively affect",
          "Harmful",
          "insects",
          "and other animals.",
          "chemicals"
        ]
      },
      {
        "id": 4,
        "target": "A decline in pollinators may affect global food production.",
        "tokens": [
          "food production",
          "in pollinators",
          "global",
          "A decline",
          "may affect"
        ],
        "shuffledTokens": [
          "global",
          "in pollinators",
          "food production.",
          "may affect",
          "A decline"
        ]
      },
      {
        "id": 5,
        "target": "Protecting wildlife helps maintain the balance of nature.",
        "tokens": [
          "the balance of nature",
          "helps maintain",
          "wildlife",
          "Protecting"
        ],
        "shuffledTokens": [
          "wildlife",
          "helps maintain",
          "the balance of nature.",
          "Protecting"
        ]
      }
    ]
  }
];

// Expose globally for script tag loading
if (typeof window !== 'undefined') {
  window.APP_META = APP_META;
  window.PRODUCT_COVERS = PRODUCT_COVERS;
  window.DEFAULT_EXERCISES = DEFAULT_EXERCISES;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { APP_META, PRODUCT_COVERS, DEFAULT_EXERCISES };
}
