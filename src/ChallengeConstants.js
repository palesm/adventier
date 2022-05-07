const ChallengeConstants = {
  end: {
    title: "Challenge at this location ended",
    //wiki data
    wikiInfo: ``,
    photo: '@assets/heroes-sqr',
    //challenge data
    question: "close this modal",
    answers: [],
    resolutions: [],
    scenePhoto: '@assets/heroes-sqr',
  },
  heroes: {
    title: "Hősök tere",
    //wiki data
    wikiInfo: `Hősök tere (Hungarian pronunciation: [ˈhøːʃøk ˈtɛrɛ]), lit. Heroes'
    Square, is one of the major squares in Budapest, Hungary, noted for its
    iconic Millennium Monument with statues featuring the Seven chieftains of
    the Magyars and other important Hungarian national leaders, as well as the
    Memorial Stone of Heroes, often erroneously referred as the Tomb of the
    Unknown Soldier. The square lies at the outbound end of Andrássy Avenue
    next to City Park (Városliget). It hosts the Museum of Fine Arts and the
    Palace of Art (Műcsarnok).`,
    photo: '@assets/heroes-sqr',
    //challenge data
    question: "meghágod-e a sárkányt?",
    answers: ["naná", "persze", "hogyne"],
    scenePhoto: '@assets/heroes-sqr',
  },
  halaszbastya: {
    title: "Halászbástya",
    wikiInfo: `Hősök tere (Hungarian pronunciation: [ˈhøːʃøk ˈtɛrɛ]), lit. Heroes'
    Square, is one of the major squares in Budapest, Hungary, noted for its
    iconic Millennium Monument with statues featuring the Seven chieftains of
    the Magyars and other important Hungarian national leaders, as well as the
    Memorial Stone of Heroes, often erroneously referred as the Tomb of the
    Unknown Soldier. The square lies at the outbound end of Andrássy Avenue
    next to City Park (Városliget). It hosts the Museum of Fine Arts and the
    Palace of Art (Műcsarnok).`,
    photo: '@assets/heroes-sqr',
    question: "meghágod-e a sárkányt?",
    answers: ["naná", "persze", "hogyne"],
    resolutions: ["ügyi voltál", "meghaltál", "szexelhetsz a sárkánnyal"],
    nextModal: ["end","end", "end" ],
  },
  bazilika: {
    title: "Szent István Bazilika",
    wikiInfo: `Hősök tere (Hungarian pronunciation: [ˈhøːʃøk ˈtɛrɛ]), lit. Heroes'
    Square, is one of the major squares in Budapest, Hungary, noted for its
    iconic Millennium Monument with statues featuring the Seven chieftains of
    the Magyars and other important Hungarian national leaders, as well as the
    Memorial Stone of Heroes, often erroneously referred as the Tomb of the
    Unknown Soldier. The square lies at the outbound end of Andrássy Avenue
    next to City Park (Városliget). It hosts the Museum of Fine Arts and the
    Palace of Art (Műcsarnok).`,
    photo: '@assets/heroes-sqr',
    question: "meghágod-e a sárkányt?",
    answers: ["naná", "persze", "hogyne"],
    resolutions: ["naná", "persze", "hogyne"],
    condition: {
      answerNumber: 0,
      
    }
  },
  parlament: {
    title: "Parlament",
    wikiInfo: `Hősök tere (Hungarian pronunciation: [ˈhøːʃøk ˈtɛrɛ]), lit. Heroes'
    Square, is one of the major squares in Budapest, Hungary, noted for its
    iconic Millennium Monument with statues featuring the Seven chieftains of
    the Magyars and other important Hungarian national leaders, as well as the
    Memorial Stone of Heroes, often erroneously referred as the Tomb of the
    Unknown Soldier. The square lies at the outbound end of Andrássy Avenue
    next to City Park (Városliget). It hosts the Museum of Fine Arts and the
    Palace of Art (Műcsarnok).`,
    photo: '@assets/heroes-sqr',
    question: "meghágod-e a sárkányt?",
    answers: ["naná", "persze", "hogyne"]
  },
  budavar: {
    title: "Budavári Palota",
    wikiInfo: `Hősök tere (Hungarian pronunciation: [ˈhøːʃøk ˈtɛrɛ]), lit. Heroes'
    Square, is one of the major squares in Budapest, Hungary, noted for its
    iconic Millennium Monument with statues featuring the Seven chieftains of
    the Magyars and other important Hungarian national leaders, as well as the
    Memorial Stone of Heroes, often erroneously referred as the Tomb of the
    Unknown Soldier. The square lies at the outbound end of Andrássy Avenue
    next to City Park (Városliget). It hosts the Museum of Fine Arts and the
    Palace of Art (Műcsarnok).`,
    photo: '@assets/heroes-sqr',
    question: "meghágod-e a sárkányt?",
    answers: ["naná", "persze", "hogyne"]
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
    photo: '@assets/heroes-sqr',
    //challenge data
    question: `he greatest kings, leaders and statesman of Hungary. 
    Their might pours over you as you stand before them. Jhon Hunyadi, the champion of Christ steps forward, raising his sword, he questions you:
    "Who brought God’s voice to this land? Whom among us was crowned on the ice of Danube?"
    `,
    answers: [
      "Saint Ladislas",
      "King Saint Stephen",
      "Coloman the Learned"],
    scenePhoto: '@assets/heroes-sqr',
    resolutions: [
      `“It was King Saint Stephen. Gather all your wits together, young knight, you will need it” He seathes his sword and steps back to his original position.`,
      `"You face a great Foe, may all of our might be with You!” says John, and hands over his sword to you.`,
      `“It was King Saint Stephen. Gather all your wits together, young knight, you will need it” He seathes his sword and steps back to his original position.`],
    nextModal: ["end", "end", "end"],
  },
  Chapel: {
    title: "Chapel",
    //wiki data
    wikiInfo: `TODO`,
    photo: '@assets/heroes-sqr',
    //challenge data
    question: `The Priest offers his blessings to you as you tell him your goals.
    `,
    answers: [
      "Boon of the Knight", 
      "Boon of the Scholar", 
      "Boon of the Ascetic"],
    scenePhoto: '@assets/heroes-sqr',
    resolutions: [
     "You fell stronger",
     "You fell wiser", 
     "You feel more durable"],
    nextModal: ["end", "end", "end"]
  },
  Anonymus: {
    title: "Anonymus",
    //wiki data
    wikiInfo: `TODO`,
    photo: '@assets/heroes-sqr',
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
      "How can one slay the dragon with one strike", 
      "Why the dragon kidnapped princess Matilda", 
      "Whats the dragon greatest fear"],
    scenePhoto: '@assets/heroes-sqr',
    resolutions: [
     " Her scales is damaged under her front right leg, one good strike, and you can easily reach the beasts heart.",
     "Her name is Parga and she is lonely, our princess helped a lot of maiden to find true love, and Parga seek her council", 
     "She is afraid of goats, as their eyes are mirror of the evil"],
    nextModal: ["end", "end", "end"]
  },

}

export default ChallengeConstants;