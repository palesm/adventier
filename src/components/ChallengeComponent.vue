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
    <button @click="handleNext">Next</button>
  </div>
</template>

<script>
import ChallengeConstants from "../ChallengeConstants";

export default {
  name: "ChallengeComponent",
  data() {
    return {
      resolution: null,
      answerNumber: -1,
    };
  },
  methods: {
    closeModal() {
      this.$store.commit("setShowModal", false);
    },
    answerQuestion(index) {
      this.resolution = this.constants[this.location].resolutions[index];
      this.answerNumber = index;
    },
    handleNext() {
      this.$store.commit("", this.constants[this.location].nextModal[this.answerNumber]);
    }
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
