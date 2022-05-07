import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      showModal: false,
      showHistoryInfo: false,
      location: ''
    }
  },
  mutations: {
    setShowModal (state, show) {
      state.showModal = show;
    },
    setShowHistoryInfo (state, show) {
      state.showHistoryInfo = show;
    },
    setLocation (state, location) {
      state.location = location;
    }
  },
  getters: {
    showModal (state) {
      return state.showModal
    },
    showHistoryInfo (state) {
      return state.showHistoryInfo
    },
    location (state) {
      return state.location
    },
    
  }
})

export default store;