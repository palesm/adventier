const ChallengeConstants = {
  end: {
    title: "Challenge at this location ended",
    //wiki data
    wikiInfo: ``,
    wikiPhoto: "../img/close-modal.png",
    //challenge data
    question: "close this modal",
    answers: [],
    resolutions: [],
    challengePhoto: "../img/close-modal.png",
  },
  //ANDRIS
  halaszbastya: {
    title: "Fisherman's Bastion",
    wikiInfo: `Fisherman’s Bastion in Budapest is one of the top Budapest 
    attractions without a doubt. The present day lovely lookout towers / 
    decorative fortification of Fisherman’s Bastion were built in the 19th 
    century to serve as a lookout tower for the best panoramic views in 
    Budapest, Hungary. Needless to say, there used to be real castle walls
     where now you can take fantastic photos from, but the present day 
     structure has never served as an actual fortification in Buda.`,
    challengePhoto: "../img/fuligjimmy.jpg",
    question: `As you approach the Fisherman Bastion, 
    you meet a young gentlemen, who claims to be Don Fülig di St. James. His lean,   
      shouldered figure is matched by an adolescently smooth, yet bony and broad face. \n - I heard
       nothing about this so called crown, but I guess you can gather some info here.  
       Anyway, I am just here for my knife - \nClues to be gathered at this spot: 
       something from the view from the bastion (mock question)`,
    password: "pw",
    wikiPhoto: "../img/fisherman.jpg",
  },
  bazilika: {
    title: "St. Stephen Basilica",
    wikiInfo: `St. Stephen's Basilica (Hungarian: Szent István-bazilika 
      [sɛnt ˈiʃtvaːn ˈbɒzilikɒ]) is a Roman Catholic basilica in Budapest,
       Hungary. It is named in honour of Stephen, the first King of
        Hungary (c 975–1038), whose right hand is housed in the reliquary.
         It was the sixth largest church building in Hungary before 1920.
          Since the renaming of the primatial see, it has been the 
          co-cathedral of the Roman Catholic Archdiocese of 
          Esztergom-Budapest. Today, it is the third largest church 
          building in present-day Hungary.`,
    challengePhoto: "../img/senkialfonz.jpg",
    wikiPhoto: "../img/ststephen.jpg",
    question: `At the basilica you meet a very interesting person. All that is to
    known about Alfonso Nobody is that he has been forever expelled from
     every state in the world, and has long been allowed to remain on
      Earth only in the greatest secrecy. \nIn this spot there  are many clues for your
      investigation - they might be pointing towards a fourth person, who 
      hasn't been in your scope yet.  `,
    password: "pw",
  },
  parlament: {
    title: "Parlament",
    wikiInfo: `The Hungarian Parliament Building (Hungarian: Országház 
      [ˈorsaːkhaːz], which translates to "House of the Country" or "House 
      of the Nation"), also known as the Parliament of Budapest after 
      its location,[5] is the seat of the National Assembly of Hungary, 
      a notable landmark of Hungary, and a popular tourist destination 
      in Budapest.`,
    challengePhoto: "../img/piszkosfred.jpg",
    question: `He's in his fifties, with a long, dirty, coffee-coloured,
     unkempt beard and black-fringed sasquatches. His skin is tanned and
      wrinkled, his eyes have a small, sly glint. His face has a few 
      large round warts, a distinctive, hawk-like nose, and a wide, 
      curved mouth. Messy, greyish-white hairs cascading over his 
      forehead. He could only be forced to bathe under threat of death, 
      his tanned face guarding the date of his last ablution as a great
       mystery. \nIf you have gathered the password from the other sites
       Now you have won the game. CONGRATULATIONS`,
    password: "pw",
    wikiPhoto: "../img/parlament.jpg",
  },
  budavar: {
    title: "Budavári Palota",
    wikiInfo: `Buda Castle (Hungarian: Budavári Palota, German: Burgpalast)
    is the historical castle and palace complex of the Hungarian kings 
    in Budapest. It was first completed in 1265, although the massive 
    Baroque palace today occupying most of the site was built between
      1749 and 1769.`,
    challengePhoto: "../img/tuskohopkins.jpg",
    question: `When you arrive to this spot, you see a man who is 
    chubby but not fat, always walking with a stumpy walk,
     his nose is small and quite red. I have no clue about your issue, but there
     is a nice riddle that you would like: \n What kind of room has no doors or windows?
     \n You are at the mighty Buda Castle. You should check the the sights here, and even 
     if you remain clueless, you might get some awesome experiences`,
    password: "mushroom",
    wikiPhoto: "../img/budavar.jpg",
  },
  //(S)lay the Dragon

  heroesSquare: {
    title: "Heroes Square",
    //wiki data
    wikiInfo: `Hősök tere (Hungarian pronunciation: [ˈhøːʃøk ˈtɛrɛ]), lit. Heroes'
    Square, is one of the major squares in Budapest, Hungary, noted for its
    iconic Millennium Monument with statues featuring the Seven chieftains of
    the Magyars and other important Hungarian national leaders, as well as the
    Memorial Stone of Heroes, often erroneously referred as the Tomb of the
    Unknown Soldier. The square lies at the outbound end of Andrássy Avenue
    next to City Park (Városliget). It hosts the Museum of Fine Arts and the
    Palace of Art (Műcsarnok).`,
    wikiPhoto: "../img/heroes-sqr.jpg",
    //challenge data
    question: `The greatest kings, leaders and statesman of Hungary. 
    Their might pours over you as you stand before them. Jhon Hunyadi, the champion of Christ steps forward, raising his sword, he questions you:
    "Who brought God’s voice to this land?"
    `,
    answers:
      [
        {
          buttonText: "Saint Ladislas",
          resolution: `“It was King Saint Stephen. Gather all your wits together, young knight, you will need it” He seathes his sword and steps back to his original position.`,
          item: null,
          skill: null,
          value: 0
        },
        {
          buttonText: "King Saint Stephen",
          resolution: `"You face a great Foe, may all of our might be with You!” says John, and hands over his sword to you.`,
          item: null,
          skill: "Might",
          value: 3
        },
        {
          buttonText: "Coloman the Learned",
          resolution: `“It was King Saint Stephen. Gather all your wits together, young knight, you will need it” He seathes his sword and steps back to his original position.`,
          item: null,
          skill: null,
          value: 0
        }
      ],
    challengePhoto: "../img/hunyadi.png",
    nextModal: ["end", "end", "end"],
  },
  Chapel: {
    title: "Chapel",
    //wiki data
    wikiInfo: `Hungary has many wonders; this is why one should explore as many as possible. 
    Based on the article of magyarorszagom.hu, we introduce you the amazing Church of Ják. The church of Ják is the monumental 
    basilica of the long-ago Benedictine Abbey of Ják. It was built in the Roman style and is an essential part of the Hungarian
     architecture. It is the only undamaged survivor of the Hungarian ethnical monasteries of the Middle Ages.
    .`,
    wikiPhoto: "../img/Chapel.png",
    //challenge data
    question: `The Priest offers his blessings to you as you tell him your goals.`,
    answers: [
      {
        buttonText: "Boon of the Knight",
        resolution: "You fell stronger",
        item: null,
        skill: "Might",
        value: 3
      },
      {
        buttonText: "Boon of the Scholar",
        resolution: "You fell wiser",
        item: null,
        skill: "Wit",
        value: 3
      },
      {
        buttonText: "Boon of the Ascetic",
        resolution: "You feel more durable",
        item: null,
        skill: "Constitution",
        value: 3
      }
    ],
    challengePhoto: "../img/chapelInner.png",
    nextModal: ["end", "end", "end"],
  },
  Anonymus: {
    title: "Anonymus",
    //wiki data
    wikiInfo: `Anonymous is the name given to authors whose names have not survived. The word itself means anonymous in Latin.
    The best known in Hungary is Anonymus, the anonymous scribe of King Béla III, author of the Gesta Hungarorum.`,
    wikiPhoto: "../img/Anonymus.png",
    //challenge data
    question: `Before you a hooded figure, Bele Regis Notarius, 
    the great chronicler stands. As you approach, he leans forward, 
    turns his head to you:
    “You are here the defeat the Black Dragon. 
    But do you know why she kidnapped the Princess? Do you know the Whys?”  
    After a long moment of silence, he continues. 
    “I tell you one secret , but choose wisely as your life depends on it”
    `,
    answers: [
      {
        buttonText: "How can one slay the dragon with one strike",
        resolution:
          "Her scales is damaged under her front right leg, one good strike, and you can easily reach the beasts heart.",
        item: null,
        skill: "SecretWeakness",
        value: 1,
      },
      {
        buttonText: "Why the dragon kidnapped princess Matilda",
        resolution:
          "Her name is Parga and she is lonely, our princess helped a lot of maiden to find true love, and Parga seek her council",
        item: null,
        skill: "SecretMotive",
        value: 1
      },
      {
        buttonText: "Whats the dragon greatest fear",
        resolution:
          "She is afraid of goats, as their eyes are mirror of the evil.",
        item: null,
        skill: "SecretFear",
        value: 1
      },
    ],
    challengePhoto: "../img/anonkerdez.png",
    nextModal: ["end", "end", "GoatForeshadow"],
  },
  GoatForeshadow: {
    title: "You leave Anonymus!",
    //wiki data
    wikiInfo: ``,
    wikiPhoto: "../img/goatappears.png",
    //challenge data
    question: "As you turn away from the scholar a goat appears in front of you. The animal chewing on sometinh and stares you. It follows you in your path from now on, always staring at you.",
    answers: [],
    resolutions: [],
    challengePhoto: "../img/goatappears.png",
  },
  Castle: {
    title: "Castle Vajdahunyad",
    wikiInfo: "TODO",
    wikiPhoto: "../img/TODO",
    question: "The Black Dragon. Her claws deeply embedded in the stone wall as her long body wrapped around the tallest tower. She rests her head on the roof of the tower, small puffs of smoke emerges from her nostrils.\n Are you ready to face the dragon?",
    answers: [
      {
        buttonText: "Yes, challenge the dragon",
        resolution: "You decided to take action",
        item: null,
        skill: null,
        value: 0
      },
      {
        buttonText: "No, prepare a bit more.",
        resolution: "You decided to gather more stuff",
        item: null,
        skill: null,
        value: 0
      }
    ],
    nextModal: ["ChallengeDragon", "end"],
    challengePhoto: ""
  },
  ChallengeDragon: {
    title: "Challenge the Dragon",
    question: "You decided to challenge the dragon and free the princess. Now or never.\n How do you approach?",
    answers: [
      {
        buttonText: "Draw sword, yell: “Foul beast, fight me and die!” ",
        resolution:
          "You engage in fight with the dragon, click next.",
        item: null,
        skill: null,
        value: 0,
        condition: {}
      },
      {
        buttonText: "Draw sword, approach silently. Ambush the beast while its not aware , you know where to strike.",
        resolution:
          "You engage in fight with the dragon, click next.",
        item: null,
        skill: null,
        value: 0,
        condition: {key: "SecretWeakness", operator: "<", value: 1}
      },
      {
        buttonText: " Dear Parga, your smouldering eyes ignites my heart. Leave the princess and be mine!",
        resolution:
          "You engage the dragon, click next.",
        item: null,
        skill: null,
        value: 0,
        condition: {key: "SecretMotive", operator: "<", value: 1}
      },
      {
        buttonText: " Release the goat",
        resolution:
          "The goat slowly walks toward the tower",
        item: null,
        skill: null,
        value: 0,
        condition: {key: "SecretFear", operator: "<", value: 1}
      },
      {
        buttonText: "This dragon is Huge, like really, and has teeth as big as your sword. No princess is worth dying in vain. Flee, never to return!",
        resolution:
          "You flee, abadon your honor and glory. ",
        item: null,
        skill: null,
        value: 0
      }
    ],
    nextModal: ["Dragon", "end","LayEnd","GoatEnd","ChickenEnd"],
    challengePhoto: "../img/towerdragon.png",
    wikiInfo: "We don't have much accurate historical info about dragons",
    wikiPhoto: "../img/towerdragon.png",
  },
  ChickenEnd: {
    title: "You finished your AdvenTier!",
    //wiki data
    wikiInfo: ``,
    wikiPhoto: "../img/chicken.png",
    //challenge data
    question: "You ran. But hey, at least you can live to tell the tale",
    answers: [],
    resolutions: [],
    challengePhoto: "../img/chicken.png",
  },
  LayEnd: {
    title: "You finished your AdvenTier!",
    //wiki data
    wikiInfo: ``,
    wikiPhoto: "../img/layDragon.png",
    //challenge data
    question: "You got the greatest prize! The princess is safe, the townsfolk are cheering to you! You fly away on the shoulders of Parga, the great black dragon!",
    answers: [],
    resolutions: [],
    challengePhoto: "../img/layDragon.png",
  },
  GoatEnd: {
    title: "You finished your AdvenTier!",
    //wiki data
    wikiInfo: ``,
    wikiPhoto: "../img/goataco.png",
    //challenge data
    question: "The dragon flies away in terror! The goat bites the princess who starts to shake and scream... maybe you shouldn't have do that!",
    answers: [],
    resolutions: [],
    challengePhoto: "../img/goataco.png",
  },
};

export default ChallengeConstants;
