<template>
  <CCMenu name="ÉN" />
  <MapComponent />
  <HelloWorld />
  <ModalComponent title='Hello' />

</template>

<script>
import MapComponent from './components/MapComponent.vue'
import ModalComponent from './components/ModalComponent.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import HelloWorld from './components/HelloWorld.vue'
import CCMenu from './components/CCMenu.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    MapComponent,
    ModalComponent,
    CCMenu
  }
}
</script>

<style>
#app {}
</style>
