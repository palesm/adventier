<template>
  <div class="container">
    <button type="button" class="btn btn-primary" @click='showModal'>show modal!</button>
  </div>
</template>

<script>
export default {
  name: "MapComponent",
  data() {
    return {
    };
  },
  methods: {
    showModal() {
      this.$store.commit('setShowModal', true)
    }
  }
};
</script>

<style scoped>
  .container {
    height: 480px;
    background-image: url("@/assets/map.png");
    text-align: center;
  }
</style>
