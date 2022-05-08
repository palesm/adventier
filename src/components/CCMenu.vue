<template>
  <div class="CCMenu">
    <div id="parent">
      <h3 id="Title">Budapest</h3>
      <h3 id="PName">{{ getPlayerName }}</h3>
    </div>

    <div class="RescueThePricess" @click="this.$router.push('/map2')">
      <h4 id="RescueHer">Rescue The Princess</h4>
      <img class="img1" src="./../../public/img/dragon1.png" alt="" width="26" height="26">
      <img class="img1" src="./../../public/img/dragon2.png" alt="" width="26" height="26">
      <img class="img1" src="./../../public/img/dragon3.png" alt="" width="26" height="26">
    </div>

    <div class="Challange2" @click="this.$router.push('/map')">
      <h4 id="Second">Challange2</h4>
      <img class="img1" src="./../../public/img/dragon1.png" alt="" width="26" height="26">
      <img class="img1" src="./../../public/img/dragon2.png" alt="" width="26" height="26">
      <img class="img1" src="./../../public/img/dragon4.png" alt="" width="26" height="26">
    </div>

    <div class="Challange2">
      <h4 id="Third">Challange3</h4>
      <img class="img2" src="./../../public/img/dragon1.png" alt="" width="26" height="26">
      <img class="img1" src="./../../public/img/dragon2.png" alt="" width="26" height="26">
      <img class="img2" src="./../../public/img/dragon4.png" alt="" width="26" height="26">
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
  height: 335px;
}
#parent {
  /* margin-top: 15px; */
  width: 100%;
  height: 90px;
  white-space: nowrap;
}

#Title {
  margin-top: 5px;
  text-align: right;
  display: inline-block;
  width: 55%;
  height: 100%;
}

#PName {
  margin-top: 5px;
  text-align: right;
  display: inline-block;
  width: 45%;
  height: 100%;
}

.RescueThePricess {
  padding-left: 5px;
  width: 100%;
  height: 70px;
  white-space: nowrap;
}

#RescueHer {
  padding-top: 1px;
  margin-right: 8px;
  display: inline-block;
  width: 40%;
  text-align:center;
}

.img1 {
  display: inline-block;
  width: 80px;
  height: 70px;
  opacity: 25%;
}

.Challange2 {
  padding-top: 5px;
  padding-left: 20px;
  width: 100%;
  height: 75px;
  white-space: nowrap;
}

#Second {
  padding-top: 1px;
  display: inline-block;
  width: 40%;
  text-align: center;
  padding-right: 120px;
}

#Third {
  padding-top: 1px;
  display: inline-block;
  width: 40%;
  text-align: center;
  padding-right: 120px;
}
.img2 {
  display: inline-block;
  width: 80px;
  height: 70px;
  opacity: 100%;
}
</style>

