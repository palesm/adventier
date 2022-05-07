import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      showModal: false
    }
  },
  mutations: {
    setShowModal (state, show) {
      state.showModal = show;
    }
  },
  getters: {
    showModal (state) {
      return state.showModal
    },

  }
})

export default store;