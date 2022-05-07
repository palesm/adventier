<template>
  <div class="hello">
  <button type="button" class="btn btn-primary" @click='showModal'>show modal!</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    doneTodosCount() {
      return this.$store.getters.doneTodosCount
    },
  },
  methods: {
    showModal() {
      this.$store.commit('setShowModal', true)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
