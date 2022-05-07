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
        might: 0,
        wit: 0,
        const:0
      },
    };
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
    setName(state, name) {
      state.name = name;
    },
    AddItem(state, item) {
      state.items.add(item);
    },
    ModifyMight(state, modifyBy) {
      state.Might += modifyBy;
    },
    ModifyWit(state, modifyBy) {
      state.wit += modifyBy;
    },
    ModifyConst(state, modifyBy) {
      state.const += modifyBy;
    },
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

    getName(state) {
      return state.PlayerStats.name;
    },
    getItems(state) {
      return state.PlayerStats.items;
    },
    getMight(state) {
      return state.PlayerStats.might;
    },
    getWit(state) {
      return state.PlayerStats.wit;
    },
    getConst(state) {
      return state.PlayerStats.const;
    },
    getBadges(state) {
      return state.PlayerStats.Badges;
    },
  },
});

export default store;
