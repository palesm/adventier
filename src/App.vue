<template>
 <div>
  <ModalComponent title='Hello' />
    <router-view></router-view>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css"
import ModalComponent from './components/ModalComponent'

export default {
  name: 'App',
  components: {
    ModalComponent
  }
}
</script>

<style>
#app {
}
</style>
