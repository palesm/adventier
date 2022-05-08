<template lang="">
  <div class="parent">
    <div class="description">{{ constants[location].wikiInfo }}</div>
    <div class="vr"></div>
    <div>
      <img :src="src" />
    </div>
  </div>
</template>

<script>
import ChallengeConstants from "../ChallengeConstants";

export default {
  name: "HistoryInfo",
  methods: {},
  computed: {
    location() {
      return this.$store.getters.location;
    },
    constants() {
      return ChallengeConstants;
    },
    src() {
      return this.constants[this.location].wikiPhoto;
    },
  },
};
</script>

<style>
.parent {
  display: flex;
}

img {
  max-heigth: 200px;
  max-width: 200px;
  padding-left: 20px;
}

.description {
  padding-right: 20px;
}
</style>
