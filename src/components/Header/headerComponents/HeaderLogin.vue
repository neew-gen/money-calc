<template>
  <div class="d-flex align-items-center">
    <b-nav-form v-if="showLoginForm && !isLogged" @submit.prevent="login">
      <b-form-input
        size="sm"
        class="mr-sm-2"
        placeholder="Email"
        v-model="email"
        :state="correctEmail"
        @change="clearCorrect"
      ></b-form-input>
      <b-form-input
        size="sm"
        class="mr-sm-2"
        placeholder="Password"
        v-model="password"
        :state="correctPassword"
        @change="clearCorrect"
      ></b-form-input>
      <b-button size="sm" class="my-2 my-sm-0" type="submit">Log In</b-button>
      <b-button size="sm" class="my-2 my-sm-0 ml-1" @click="changeShowLoginForm"
        >Cancel</b-button
      >
    </b-nav-form>
    <div class="loginBtns" v-if="!showLoginForm && !isLogged">
      <b-button
        size="sm"
        class="my-2 my-sm-0"
        @click="changeShowLoginForm"
        >Log In</b-button
      >
      or
      <b-button size="sm" class="my-2 my-sm-0" @click="linkToRegister">Register</b-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: '',
      correctEmail: null,
      correctPassword: null,
    };
  },
  methods: {
    ...mapActions({
      setLogged: 'user/setLogged',
      getUserData: 'user/getUserData',
      changeShowLoginForm: 'login/changeShowLoginForm',
    }),
    async login() {
      this.clearCorrect();
      const res = await axios({
        method: 'post',
        url: '/api/login',
        data: { email: this.email, password: this.password },
      });
      if (res.data === 'WrongEmail') {
        this.correctEmail = false;
        return;
      }
      if (res.data === 'WrongPassword') {
        this.correctPassword = false;
        return;
      }
      this.setLogged();
      this.getUserData(res.data);
    },
    clearCorrect() {
      this.correctEmail = null;
      this.correctPassword = null;
    },
    linkToRegister() {
      this.$router.push('/register');
    },
  },
  computed: {
    ...mapState({
      isLogged: (state) => state.user.isLogged,
      showLoginForm: (state) => state.login.showLoginForm,
    }),
  },
};
</script>

<style>
</style>
