<template>
  <div class="CCMenu">
    <!-- <div class="container">
      <h1>{{ name }}</h1>
      <h2 style="padding-top: 10px;">Nearby cities</h2>
      <div class="ShowHide">
        <div><span style="padding-right: 10px; font-size: 22px;">Budapest</span><button @click="onBpClick">\/</button>
        </div>
        <div id="Budapest" style="margin-top: 0px;display: none;">
          <div style="color: green;">
            <div style="margin-top: 5px">Újpest felszabadítása <button @click="onUjClick" id="UjpestButton">\/</button>
            </div>
             Make look züd and az mint budapestnél
            <div id="Ujpest" style="display: none; font-size: 10px;">
              Team: Újpesti Barmok
              <br />
              Badges: {{getPlayerBadges}}
              <br />
              Items: Goblin Bal Here
            </div>
          </div>
          <a  @click="this.$router.push('/map')" id="ZugloButton" style="margin-top: 5px">Zugló szörnye</a>
           Normal on click thingie go to map
          <div style="margin-top: 5px; color:darkgrey; opacity: 50%;">A vár réme</div>
        Make gray and low opacity so it's not available yet
        </div>
      </div>
    </div> -->


    <div id="parent">
      <h1 id="Title">Budapest</h1>
      <h2 id="PName">{{ getPlayerName }}</h2>
    </div>

    <div class="RescueThePricess">
      <h3 id="RescueHer" @click="this.$router.push('/map2')">Rescue The Princess</h3>
      <img class="img1" src="./../../public/img/dragon1.png" alt="" width="52" height="52">
      <img class="img1" src="./../../public/img/dragon2.png" alt="" width="52" height="52">
      <img class="img1" src="./../../public/img/dragon3.png" alt="" width="52" height="52">
    </div>

    <div class="Challange2">
      <h3 id="Second" @click="this.$router.push('/map')">Retrieve the stolen relic</h3>
      <img class="img1" src="./../../public/img/dragon1.png" alt="" width="52" height="52">
      <img class="img1" src="./../../public/img/dragon2.png" alt="" width="52" height="52">
      <img class="img1" src="./../../public/img/dragon4.png" alt="" width="52" height="52">
    </div>

    <div class="Challange2">
      <h3 id="Third">Challange 3</h3>
      <img class="img2" src="./../../public/img/dragon1.png" alt="" width="52" height="52">
      <img class="img1" src="./../../public/img/dragon2.png" alt="" width="52" height="52">
      <img class="img2" src="./../../public/img/dragon4.png" alt="" width="52" height="52">
    </div>

  </div>
</template>

<script>

export default {
  name: 'CCMenu',
  components: {

  },
  computed: {
    getPlayerBadges() {
      var result = "";
      var list = this.$store.getters.getBadges;
      list.forEach(element => {
        result += element;
        result += ", ";
      });
      return result;
    },
    getPlayerName() {
      return this.$store.getters.getName;
    }
  },
  methods: {

  }
}
</script>
<style scoped>
.CCMenu {
  background-image: url(@/../public/img/bg.png);
  width: 100%;
  height: 480px;
}
#parent {
  /* margin-top: 15px; */
  width: 100%;
  height: 90px;
  white-space: nowrap;
  overflow-x: auto;
}

#Title {
  margin-top: 15px;
  text-align: right;
  display: inline-block;
  width: 55%;
  height: 100%;
}

#PName {
  margin-top: 15px;
  text-align: right;
  display: inline-block;
  width: 45%;
  height: 100%;
}

.RescueThePricess {
  padding-left: 20px;
  width: 100%;
  height: 90px;
  white-space: nowrap;
  overflow-x: auto;
}

#RescueHer {
  padding-top: 5px;
  display: inline-block;
  width: 40%;
  text-align:center;
}

.img1 {
  display: inline-block;
  width: 110px;
  height: 90px;
  opacity: 25%;
}

.Challange2 {
  padding-top: 10px;
  padding-left: 20px;
  width: 100%;
  height: 100px;
  white-space: nowrap;
  overflow-x: auto;
}

#Second {
  padding-top: 5px;
  display: inline-block;
  width: 40%;
  text-align: center;
  padding-right: 100px;
}

#Third {
  padding-top: 5px;
  display: inline-block;
  width: 40%;
  text-align: center;
  padding-right: 100px;
}
.img2 {
  display: inline-block;
  width: 110px;
  height: 90px;
  opacity: 100%;
}
</style>

