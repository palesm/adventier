<template>
  <div class="container">
    <i class="fa-solid fa-magnifying-glass"></i>
    <span>
      <font-awesome-icon
        id="halaszbastya"
        icon="magnifying-glass"
        @click="iconClicked(halaszbastya)"
      />
      <font-awesome-icon
        id="baziLIKA"
        icon="magnifying-glass"
        @click="iconClicked(bazilika)"
      />
      <font-awesome-icon
        id="parlament"
        icon="magnifying-glass"
        @click="iconClicked(parlament)"
      />
      <font-awesome-icon
        id="var"
        icon="magnifying-glass"
        @click="iconClicked(budavar)"
      />
    </span>
  </div>
</template>

<script>
export default {
  name: "MapComponent",
  data() {
    return {
      heroes: "heroes",
      halaszbastya: "halaszbastya",
      bazilika: "bazilika",
      parlament: "parlament",
      budavar: "budavar",
    };
  },
  methods: {
    showModal() {
      this.$store.commit("setShowModal", true);
    },
    iconClicked(location) {
      this.showModal();
      this.$store.commit("setLocation", location);
    },
  },
};
</script>

<style scoped>
.container {
  height: 480px;
  background-image: url("@/assets/map.png");
  max-width: 100%;
  text-align: center;
}

span {
  font-size: 3em;
}

#heroes {
  text-align: inherit;
  position: relative;
  right: 50px;
  bottom: 10px;
}
#halaszbastya {
  position: absolute;
  left: 160px;
  top: 160px;
}
#baziLIKA {
  position: absolute;
  left: 540px;
  top: 200px;
}
#parlament {
  position: absolute;
  left: 375px;
  top: 30px;
}
#var {
  position: absolute;
  left: 253px;
  top: 350px;
}
</style>
