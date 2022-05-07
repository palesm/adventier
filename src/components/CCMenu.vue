<template>
  <div class="CCMenu">
    <div class="container">
      <h1>{{ name }}</h1>
      <h2 style="padding-top: 10px;">Nearby cities</h2>
      <div class="ShowHide">
        <div><span style="padding-right: 10px; font-size: 22px;">Budapest</span><button @click="onBpClick">\/</button>
        </div>
        <div id="Budapest" style="margin-top: 0px;display: none;">
          <div style="color: green;">
            <div style="margin-top: 5px">Újpest felszabadítása <button @click="onUjClick" id="UjpestButton">\/</button>
            </div>
            <!-- Make look züd and az mint budapestnél -->
            <div id="Ujpest" style="display: none; font-size: 10px;">
              Team: Újpesti Barmok
              <br />
              Badges: {{getPlayerBadges}}
              <br />
              Items: Goblin Bal Here
            </div>
          </div>
          <a  @click="this.$router.push('/map')" id="ZugloButton" style="margin-top: 5px">Zugló szörnye</a>
          <!-- Normal on click thingie go to map -->
          <div style="margin-top: 5px; color:darkgrey; opacity: 50%;">A vár réme</div>
          <!-- Make gray and low opacity so it's not available yet -->
        </div>
      </div>
    </div>
    <div id="MAp" style="display: none;">
      <AdvenTIERmap />
    </div>
  </div>
</template>

<script>
var BpHidden = true;
var UjpestHidden = true;

window.onload = function () {

    document.getElementById("ZugloButton").onclick = function () {
    document.getElementsByClassName("container")[0].remove();
    document.getElementById("MAp").style.display = "inline";
  }
}

import AdvenTIERmap from './AdvenTIERmap.vue';

export default {
  name: 'CCMenu',
  props: {
    name: String
  },
  components: {
    AdvenTIERmap
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
    }
  },
  methods: {
    onBpClick() {
      if (BpHidden == false) {
        document.getElementById("Budapest").style.display = "none"; //Make it disappear
        BpHidden = true;
      } else {
        document.getElementById("Budapest").style.display = "inline"; //Make it appear
        BpHidden = false;
      }
    },
    onUjClick() {
      if (UjpestHidden == false) {
        document.getElementById("Ujpest").style.display = "none"; //Make it disappear
        UjpestHidden = true;
      } else {
        document.getElementById("Ujpest").style.display = "inline"; //Make it appear
        UjpestHidden = false;
      }
    }
  }
}
</script>

