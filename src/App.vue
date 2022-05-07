<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <CCMenu name=Én />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import CCMenu from './components/CCMenu.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    CCMenu
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
