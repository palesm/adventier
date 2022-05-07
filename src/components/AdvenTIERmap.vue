<template>
  <MapComponent />
  <ModalComponent />
</template>

<script>
import MapComponent from './/MapComponent.vue'
import ModalComponent from './/ModalComponent.vue'

export default {
  name: 'AdvenTIERmap',
  components: {
    MapComponent,
    ModalComponent,
  }
}
</script>