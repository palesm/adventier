<template>
  <MapComponent />
  <HelloWorld />
  <ModalComponent title='Hello' />

</template>

<script>
import MapComponent from './/MapComponent.vue'
import ModalComponent from './/ModalComponent.vue'
import HelloWorld from './/HelloWorld.vue'

export default {
  name: 'AdvenTIERmap',
  components: {
    HelloWorld,
    MapComponent,
    ModalComponent,
  }
}
</script>