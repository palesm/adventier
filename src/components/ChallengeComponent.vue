<template>
  <div v-if="constants">
    <div class="parent">
      <div class="description">{{ constants[location].question }}</div>
      <div v-for="(answer, index) in constants[location].answers" :key="`answer-${index}`">
        <button>answer</button>
      </div>
      <div class="vr"></div>
      <div>
        <img src="../assets/heroes-sqr.jpg" />
      </div>
    </div>
    <button @click="setShowHistoryInfo(true)">Show history info</button>
  </div>
</template>

<script>
import ChallengeConstants from "../ChallengeConstants"

export default {
  name: "ChallengeComponent",
  methods: {
    closeModal() {
      this.$store.commit("setShowModal", false);
    },
    setShowHistoryInfo(show) {
      this.$store.commit("setShowHistoryInfo", show);
    },
  },
  computed: {
    location() {
      return this.$store.getters.location
    },
    constants() {
      return ChallengeConstants;
    }
  },
};
</script>

<style scoped></style>
