<template>
  <MapComponent />
  <HelloWorld />
  <ModalComponent title='Hello' />
</template>

<script>
import MapComponent from './components/MapComponent.vue'
import HelloWorld from './components/HelloWorld.vue'
import ModalComponent from './components/ModalComponent.vue'
import "bootstrap/dist/css/bootstrap.min.css"

export default {
  name: 'App',
  components: {
    MapComponent,
    HelloWorld,
    ModalComponent
  }
}
</script>

<style>
#app {
  height: 480px;
  background-image: url('@/assets/map.png');
}
</style>
