<template>
  <div>
    <div class="parent">
      <div class="description">{{ constants[location].question }}</div>
      <div v-if="!constants[location].password">
        <div
          v-for="(answer, index) in constants[location].answers"
          :key="`answer-${index}`"
        >
          <button
            @click="answerQuestion(index)"
            :disabled="isDisabledByCondition(index)"
          >
            {{ answer.buttonText }}
          </button>
        </div>
      </div>
      <div class="vr"></div>
      <div>
        <img :src="src" />
      </div>
    </div>
    <div v-if="constants[location].password">
        <input v-model="text" />
        <button @click="handlePasswordSubmit(text)" :disabled="isAnswered" class="btn btn-primary password-btn">
          Submit password
        </button>
      </div>
  </div>
  <div v-if="resolution">
    {{ resolution }}
  </div>
  <button
    v-if="!constants[location].password && resolution"
    @click="handleNext"
  >
    Next
  </button>
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
      text: "",
    };
  },
  methods: {
    closeModal() {
      this.$store.commit("setShowModal", false);
    },
    answerQuestion(index) {
      this.resolution = this.constants[this.location].answers[index].resolution;
      this.answerNumber = index;
      this.isAnswered = true;
      if (this.constants[this.location].answers[index].item) {
        this.$store.commit(
          `set${this.constants[this.location].answers[index].item}`,
          true
        );
      }
      if (this.constants[this.location].answers[index].skill) {
        this.$store.commit(
          `set${this.constants[this.location].answers[index].skill}`,
          this.constants[this.location].answers[index].value
        );
      }
    },
    handleNext() {
      this.$store.commit(
        "setLocation",
        this.constants[this.location].nextModal[this.answerNumber]
      );
    },
    handlePasswordSubmit(password) {
      if (this.constants[this.location].password == password) {
        this.resolution = "Good job!";
      } else {
        this.resolution = "Wrong password, try again!";
      }
    },
    isDisabledByCondition(index) {
      const condition = this.constants[this.location].answers[index].condition;
      if (condition) {
        const getKey = `get${condition.key}`;
        const userProp = this.$store.getters[getKey];
        if (condition.operator === "<") {
          return userProp < condition.value;
        }
        if (condition.operator === ">") {
          return userProp > condition.value;
        }
      }
      return false;
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
      return this.constants[this.location].challengePhoto;
    },
  },
};
</script>

<style scoped>
.parent {
  display: flex;
}

img {
  max-heigth: 200px;
  max-width: 200px;
  padding-left: 20px;
}

.password-btn {
  margin-left: 1rem;
}


.description {
  padding-right: 20px;
}
</style>
