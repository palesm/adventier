import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0,
      todos: [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: false }
      ]
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  getters: {
    doneTodosCount (state) {
      debugger
      return state.todos.filter(todo => todo.done)
    }
  }
})

export default store;