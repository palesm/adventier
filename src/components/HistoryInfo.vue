<template lang="">
  <div class="parent">
    <div class="description">{{ constants[location].wikiInfo }}</div>
    <div class="vr"></div>
    <div>
      <img :src="constants[location].wikiPhoto" />
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
  }
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
