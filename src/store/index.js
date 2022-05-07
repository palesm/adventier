import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0,
      todos: [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: false }
      ],
      showModal: false
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    setShowModal (state, show) {
      state.showModal = show;
    }
  },
  getters: {
    doneTodosCount (state) {
      return state.todos.filter(todo => todo.done)
    },
    showModal (state) {
      return state.showModal
    },

  }
})

export default store;