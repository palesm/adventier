<template lang="">
  <div class="parent">
    <div class="description">
      Hősök tere (Hungarian pronunciation: [ˈhøːʃøk ˈtɛrɛ]), lit. Heroes'
      Square, is one of the major squares in Budapest, Hungary, noted for its
      iconic Millennium Monument with statues featuring the Seven chieftains of
      the Magyars and other important Hungarian national leaders, as well as the
      Memorial Stone of Heroes, often erroneously referred as the Tomb of the
      Unknown Soldier. The square lies at the outbound end of Andrássy Avenue
      next to City Park (Városliget). It hosts the Museum of Fine Arts and the
      Palace of Art (Műcsarnok).
    </div>
    <div class="vr"></div>
    <div>
      <img src="../assets/heroes-sqr.jpg">
    </div>
  </div>
</template>

<script>
export default {
  name: "HistoryInfo",
};
</script>

<style>
 .parent {
   display: flex;
 }

 img {
   width: 300px;
   padding-left: 20px;
 }

 .description {
   padding-right: 20px;
 }
</style>
