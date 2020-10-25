import axios from 'axios';

const state = () => ({
  isLogged: false,
  name: null,
  email: null,
  rate: null,
  id: null,
});

const mutations = {
  setLogged(state) {
    state.isLogged = true;
  },
  setLoggedOut(state) {
    state.isLogged = false;
  },
  getUserData(state, payload) {
    if (state.isLogged) {
      state.name = payload.name;
      state.email = payload.email;
      state.rate = payload.data.rate;
      // eslint-disable-next-line no-underscore-dangle
      state.id = payload._id;
    }
  },
  updateRate(state, payload) {
    state.rate = payload;
  },
};

const actions = {
  setLogged({ commit }) {
    commit('setLogged');
  },
  setLoggedOut({ commit }) {
    commit('setLoggedOut');
  },
  getUserData({ commit }, payload) {
    commit('getUserData', payload);
  },
  async updateRate({ commit }, payload) {
    commit('updateRate', payload);
  },
  async sendUpdateRate({ state }) {
    const { rate } = state;
    const { id } = state;
    await axios({
      method: 'patch',
      url: '/api/updateRate',
      data: { id, rate },
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
