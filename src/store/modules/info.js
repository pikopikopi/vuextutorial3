export default {
  namespaced: true,
  state: {
    matchDate: '01/01/2021',
  },
  getters: {
    teamACount(state, getters, rootState) {
      return rootState.teamA.length;
    },
  },
  actions: {},
  mutations: {},
};
