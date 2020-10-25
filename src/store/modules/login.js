const state = () => ({
  showLoginForm: false,
});

const mutations = {
  changeShowLoginForm(state) {
    state.showLoginForm = !state.showLoginForm;
  },
};

const actions = {
  changeShowLoginForm({ commit }) {
    commit('changeShowLoginForm');
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
