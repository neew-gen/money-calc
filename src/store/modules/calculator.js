const state = () => ({
  hours: '',
  minutes: '',
  seconds: '',
  calculatorRate: '',
});

const mutations = {
  setValue(state, payload) {
    state[payload.timeType] = payload.value;
  },
  updateRate(state, payload) {
    state.calculatorRate = payload;
  },
};

const actions = {
  setValue({ commit }, payload) {
    commit('setValue', payload);
  },
  updateRate({ commit }, payload) {
    commit('updateRate', payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
