import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      showModal: false,
      PlayerStats: {
        name: "Myname",
        items: [
          "Lókaki",
          "GoblinHere",
          "Hős péncél",
          "NonBinary kard"
        ],
        Badges: [
          "Butcher",
          "GnomeKiller"
        ],
        Str: 10,
        Def: 10
      }
    }
  },
  mutations: {
    setShowModal (state, show) {
      state.showModal = show;
    },
    setName (state, name) {
      state.name = name;
    },
    AddItem (state, item) {
      state.items.add(item);
    },
    ModifyStr(state, modifyBy) {
      state.Str += modifyBy;
    },
    ModifyDef(state, modifyBy) {
      state.Def += modifyBy;
    }
  },
  getters: {
    showModal (state) {
      return state.showModal
    },
    getName (state) {
      return state.PlayerStats.name
    },
    getItems (state) {
      return state.PlayerStats.items
    },
    getStr (state) {
      return state.PlayerStats.Str
    },
    getDef (state) {
      return state.PlayerStats.Def
    },
    getBadges (state) {
      return state.PlayerStats.Badges
    }
  }
})

export default store;