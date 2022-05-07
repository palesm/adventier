<template>
  <div>
    <div class="parent">
      <div class="description">{{ constants[location].question }}</div>
      <div
        v-for="(answer, index) in constants[location].answers"
        :key="`answer-${index}`"
      >
        <button @click="answerQuestion(index)" :disabled="isAnswered">
          {{ answer }}
        </button>
      </div>
      <div class="vr"></div>
      <div>
        <img :src="src" />
      </div>
    </div>
  </div>
  <div v-if="resolution">
    {{ resolution }}
  </div>
</template>

<script>
import ChallengeConstants from "../ChallengeConstants";

export default {
  name: "ChallengeComponent",
  data() {
    return {
      resolution: null,
      isAnswered: false,
    };
  },
  methods: {
    closeModal() {
      this.$store.commit("setShowModal", false);
    },
    answerQuestion(index) {
      this.resolution = this.constants[this.location].resolutions[index];
      this.isAnswered = true;
    },
  },
  computed: {
    location() {
      return this.$store.getters.location;
    },
    constants() {
      return ChallengeConstants;
    },
    src() {
      return this.constants[this.location].challengePhoto
    }
  },
};
</script>

<style scoped></style>
