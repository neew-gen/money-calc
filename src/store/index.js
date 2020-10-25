import Vue from 'vue';
import Vuex from 'vuex';
import calculator from './modules/calculator';
import user from './modules/user';
import login from './modules/login';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    calculator,
    user,
    login,
  },
});
