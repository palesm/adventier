<template lang="">
  <div>
    <div class="parent">
      <div class="description">im the challenge description</div>
      <div class="vr"></div>
      <div>
        <img src="../assets/heroes-sqr.jpg" />
      </div>
    </div>
    <button @click="setShowHistoryInfo(true)">show history info</button>
  </div>
</template>
<script>
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
};
</script>

<style scoped></style>
