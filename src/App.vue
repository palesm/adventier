<template>
  <CCMenu />
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css"
import CCMenu from "./components/CCMenu.vue"


export default {
  name: 'App',
  components: {
    CCMenu
  }
}
</script>

<style>
#app {
  height: 480px;
  background-image: url('@/assets/map.png');
  text-align: center;
}
</style>
