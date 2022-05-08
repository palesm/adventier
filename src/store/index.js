import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      showModal: false,
      showHistoryInfo: false,
      location: "",
      PlayerStats: {
        name: "CraftHacker",
        Might: 0,
        Wit: 0,
        Constitution: 0,
        SecretWeakness: 0,
        SecretMotive: 0,
        SecretFear: 0
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
    setMight(state, modifyBy) {
      state.PlayerStats.Might += modifyBy;
    },
    setWit(state, modifyBy) {
      state.PlayerStats.Wit += modifyBy;
    },
    setConstitution(state, modifyBy) {
      state.PlayerStats.Constitution += modifyBy;
    },
    setSecretWeakness(state, modifyBy) {
      state.PlayerStats.SecretWeakness += modifyBy;
    },
    setSecretMotive(state, modifyBy) {
      state.PlayerStats.SecretMotive += modifyBy;
    },
    setSecretFear(state, modifyBy) {
      state.PlayerStats.SecretFear += modifyBy;
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
    getMight (state) {
      return state.PlayerStats.Might
    },
    getWit (state) {
      return state.PlayerStats.Wit
    },
    getConstitution (state) {
      return state.PlayerStats.Constitution
    },
    getSecretWeakness (state) {
      return state.PlayerStats.SecretWeakness
    },
    getSecretMotive (state) {
      return state.PlayerStats.SecretMotive
    },
    getSecretFear (state) {
      return state.PlayerStats.SecretFear
    }
  }
});

export default store;
