<template>
  <div>
    <div class="parent">
      <div class="description">{{ constants[location].question }}</div>
      <div v-if="!constants[location].password">
        <div
          v-for="(answer, index) in constants[location].answers"
          :key="`answer-${index}`"
        >
          <button @click="answerQuestion(index)" :disabled="isAnswered">
            {{ answer }}
          </button>
        </div>
      </div>
      <div v-else>
        <input v-model="text">
        <button @click="handlePasswordSubmit(text)" :disabled="isAnswered">
          Submit password
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
  <button v-if="!constants[location].password && resolution" @click="handleNext">Next</button>
</template>

<script>
import ChallengeConstants from "../ChallengeConstants";

export default {
  name: "ChallengeComponent",
  data() {
    return {
      resolution: null,
      answerNumber: -1,
      isAnswered: false,
      text: '',
    };
  },
  methods: {
    closeModal() {
      this.$store.commit("setShowModal", false);
    },
    answerQuestion(index) {
      this.resolution = this.constants[this.location].resolutions[index];
      this.answerNumber = index;
      this.isAnswered = true;
    },
    handleNext() {
      this.$store.commit(
        "setLocation",
        this.constants[this.location].nextModal[this.answerNumber]
      );
    },
    handlePasswordSubmit(password) {
      console.log(this.text);
      console.log(password);
      debugger
      if (this.constants[this.location].password == password) {
        this.resolution = "Good job!";
      } else {
        this.resolution = "Wrong password, try again!";
      }
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
      return this.constants[this.location].challengePhoto;
    },
  },
};
</script>

<style scoped></style>
