import _ from 'lodash';
import eventBus from '@/bus/eventBus';

const state = () => ({
  date: null,
});

const mutations = {
  setDate(state, payload) {
    state.date = payload;
  },
};

const actions = {
  setDefaultDate({ commit }) {
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    commit('setDate', { month, year });
  },
  changeMonth({ commit, state }, actionType) {
    let month = _.cloneDeep(state.date.month);
    let year = _.cloneDeep(state.date.year);
    if (actionType === 'decrease') {
      month -= 1;
      if (month < 0) {
        month = 11;
        year -= 1;
      }
    }
    if (actionType === 'increase') {
      month += 1;
      if (month > 11) {
        month = 0;
        year += 1;
      }
    }
    commit('setDate', { month, year });
    eventBus.$emit('changeMonth');
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
