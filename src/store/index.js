import Vue from 'vue';
import Vuex from 'vuex';
import calculator from './modules/calculator';
import user from './modules/user';
import login from './modules/login';
import calendar from './modules/calendar';

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
    calendar,
  },
});
