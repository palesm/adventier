import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      showModal: false,
      showHistoryInfo: false,
      location: "",
      PlayerStats: {
        name: "Myname",
        items: [
          //dump
          "Lókaki", "GoblinHere", "Hős péncél", "NonBinary kard"
          //S(l)ay the dragon
        ],
        Badges: [
          "Butcher", "GnomeKiller"
        
        ],
        Might: 10,
        Wit: 10,
        Constitution: 10
      }
    }
  },
  mutations: {
    setShowModal(state, show) {
      state.showModal = show;
    },
    setShowHistoryInfo(state, show) {
      state.showHistoryInfo = show;
    },
    setLocation(state, location) {
      state.location = location;
    },
    setName (state, name) {
      state.PlayerStats.name = name;
    },
    AddItem (state, item) {
      state.PlayerStats.items.add(item);
    },
    ModifyMight(state, modifyBy) {
      state.PlayerStats.Might += modifyBy;
    },
    ModifyWit(state, modifyBy) {
      state.PlayerStats.Wit += modifyBy;
    },
    ModifyConstitution(state, modifyBy) {
      state.PlayerStats.Constitution += modifyBy;
    }
  },
  getters: {
    showModal(state) {
      return state.showModal;
    },
    showHistoryInfo(state) {
      return state.showHistoryInfo;
    },
    location(state) {
      return state.location;
    },
    
    getName (state) {
      return state.PlayerStats.name
    },
    getItems (state) {
      return state.PlayerStats.items
    },
    getMight (state) {
      return state.PlayerStats.Might
    },
    getWit (state) {
      return state.PlayerStats.Wit
    },
    getConstitution (state) {
      return state.PlayerStats.Constitution
    },
    getBadges (state) {
      return state.PlayerStats.Badges
    }
  }
});

export default store;
