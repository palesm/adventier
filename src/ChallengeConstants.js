
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
  bazilika2: {
    title: "Szent István Bazilika",
    wikiInfo: `Hősök tere (Hungarian pronunciation: [ˈhøːʃøk ˈtɛrɛ]), lit. Heroes'
    Square, is one of the major squares in Budapest, Hungary, noted for its
    iconic Millennium Monument with statues featuring the Seven chieftains of
    the Magyars and other important Hungarian national leaders, as well as the
    Memorial Stone of Heroes, often erroneously referred as the Tomb of the
    Unknown Soldier. The square lies at the outbound end of Andrássy Avenue
    next to City Park (Városliget). It hosts the Museum of Fine Arts and the
    Palace of Art (Műcsarnok).`,
    wikiPhoto: '/assets/heroes-sqr',
    question: "meghágod-e a sárkányt?",
    answers: ["naná", "persze", "hogyne"],
    resolutions: ["ügyi voltál", "meghaltál", "szexelhetsz a sárkánnyal"],
    nextModal: ["end","end", "end" ],
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
    photo: '@assets/fuligjimmy',
    question: "feladat",
    password: "pw",
    scenePhoto: '@assets/fisherman'
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
          photo: '@assets/senkialfonz',
          question: "feladat",
          password: "pw",
          scenePhoto: '/assets/ststephen.jpg'
  },
  parlament: {
    title: "Parlament",
    wikiInfo: `The Hungarian Parliament Building (Hungarian: Országház 
      [ˈorsaːkhaːz], which translates to "House of the Country" or "House 
      of the Nation"), also known as the Parliament of Budapest after 
      its location,[5] is the seat of the National Assembly of Hungary, 
      a notable landmark of Hungary, and a popular tourist destination 
      in Budapest.`,
    wikiPhoto: '/assets/piszkosfred.jpg',
    question: "feladat",
    password: "pw",
    challengePhoto: '/assets/parlament.jpg'
  },
  budavar: {
    title: "Budavári Palota",
    wikiInfo: `Buda Castle (Hungarian: Budavári Palota, German: Burgpalast)
     is the historical castle and palace complex of the Hungarian kings 
     in Budapest. It was first completed in 1265, although the massive 
     Baroque palace today occupying most of the site was built between
      1749 and 1769.`,
      photo: '@assets/piszkosfred',
      question: "feladat",
      password: "pw",
      scenePhoto: '@assets/parlament'
  }

}

export default ChallengeConstants;