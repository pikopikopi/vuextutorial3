/* eslint no-shadow:
  ["error", { "allow": ["state", "action", "data"] }] */

/* eslint no-param-reassign:
  ["error", { "props": true, "ignorePropertyModificationsFor": ["state", "actions", "student"] }] */

import Vuex from 'vuex';
import Vue from 'vue';
import data from '../api/data';
import state from './state';
import actions from './actions';
import info from './modules/info';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    info,
  },
  state,
  getters: {
    studetCount(state) {
      return state.students.length;
    },
  },
  actions,
  mutations: {
    setStudents(state) {
      state.students = data.getStudents();
    },
    pushMemberToTeam(state, data) {
      if (data.type === 'A') {
        state.teamA.push(state.students[data.index]);
      } else {
        state.teamB.push(state.students[data.index]);
      }
    },
    eableSelectedState(state, index) {
      state.students[index].selected = true;
    },
    disableSelectedState(state, memberId) {
      state.students.forEach((student) => {
        switch (student.id) {
          case memberId:
            student.selected = false;
            break;
          default:
            break;
        }
      });
    },
    spliceFromTeam(state, data) {
      if (data.type === 'A') {
        state.teamA.splice(data.index, 1);
      } else {
        state.teamB.splice(data.index, 1);
      }
    },
  },
});
