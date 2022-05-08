<template>
    <div class="container">
        <i class="fa-solid fa-magnifying-glass"></i>
        <span>
            <font-awesome-icon id="heroes" icon="magnifying-glass" @click="iconClicked(heroesSquare)" />
            <font-awesome-icon id="Chapel" icon="magnifying-glass" @click="iconClicked(Chapel)" />
            <font-awesome-icon id="Anonymus" icon="magnifying-glass" @click="iconClicked(Anonymus)" />
            <!-- <font-awesome-icon id="var" icon="magnifying-glass" @click="iconClicked(budavar)" /> -->
        </span>
    </div>
</template>


<script>
export default {
    name: "Map2Component",
    data() {
    return {
      heroesSquare: "heroesSquare",
      Chapel: "Chapel",
      Anonymus: "Anonymus",
      budavar: "budavar",
    };
  },
    methods: {
        showModal() {
            this.$store.commit("setShowModal", true);
        },
        iconClicked(location) {
            this.showModal();
            this.$store.commit('setLocation', location)
        }
    }
}
</script>

<style scoped>
.container {
    height: 480px;
    background-image: url("@/assets/map2.png");
    max-width: 100%;
    text-align: center;
}

span {
    font-size: 3em;
}

#heroes {
    position: absolute;
    left: 171px;
    top: 322px;
}

#Chapel {
    position: absolute;
    left: 491px;
    top: 293px;
}

#Anonymus {
    position: absolute;
    left: 467px;
    top: 259px;
}
</style>
