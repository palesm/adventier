<template>
  <div class="container">
    <button type="button" class="btn btn-primary" @click='showModal'>show modal!</button>
    <i class="fa-solid fa-magnifying-glass"></i>
    <span>
      <font-awesome-icon icon="magnifying-glass" @click="iconClicked(heroes)" />
      <font-awesome-icon icon="magnifying-glass" @click="iconClicked(halaszbastya)" />
      <font-awesome-icon icon="magnifying-glass" @click="iconClicked(bazilika)" />
      <font-awesome-icon icon="magnifying-glass" @click="iconClicked(parlament)" />
      <font-awesome-icon icon="magnifying-glass" @click="iconClicked(budavar)" />
    </span>
  </div>
</template>

<script>
export default {
  name: "MapComponent",
  data() {
    return {
      heroes: 'heroes',
      halaszbastya: 'halaszbastya',
      bazilika: 'bazilika',
      parlament: 'parlament',
      budavar: 'budavar',
    };
  },
  methods: {
    showModal() {
      this.$store.commit('setShowModal', true)
    },
    iconClicked(location) {
      this.showModal();
      this.$store.commit('setLocation', location)
    }
  }
};
</script>

<style scoped>
  .container {
    height: 480px;
    background-image: url("@/assets/map.png");
    text-align: center;
    max-width: 100%;
  }

  span {
    font-size: 3em; 
  }
</style>
