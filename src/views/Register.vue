<template>
  <main class="w-100 h-100 d-flex justify-content-center align-items-center">
    <b-form @submit.prevent="registerUser">
      <b-form-group
        id="input-group-name"
        label="Your Name:"
        label-for="input-name"
      >
        <b-form-input
          id="input-name"
          required
          placeholder="Enter name"
          v-model="name"
          :state="nameState"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-rate"
        label="Your current Rate:"
        label-for="input-rate"
      >
        <b-form-input
          id="input-rate"
          required
          placeholder="Enter current Rate"
          v-model="rate"
          :state="rateState"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-email"
        label="Email address:"
        label-for="input-email"
        :description="emailDescription"
      >
        <b-form-input
          id="input-email"
          type="email"
          required
          placeholder="Enter email"
          v-model="email"
          :state="emailState"
          @change="checkEmail"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-password"
        label="Password:"
        label-for="input-password"
        :description="passwordDescription"
      >
        <b-form-input
          id="input-password"
          type="password"
          required
          placeholder="Enter password"
          v-model="password"
          :state="passwordState"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-retype"
        label="Retype password:"
        label-for="input-retype"
        :description="retypeDescription"
      >
        <b-form-input
          id="input-retype"
          type="password"
          required
          placeholder="Retype password"
          :state="retypeState"
          v-model="retypePassword"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary" v-if="showRegisterButton"
        >Register</b-button
      >
    </b-form>
  </main>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      name: '',
      rate: '',
      email: '',
      password: '',
      emailState: false,
      emailDescription: '',
      retypePassword: '',
    };
  },
  computed: {
    nameState() {
      if (this.name) return true;
      return false;
    },
    rateState() {
      if (this.rate) return true;
      return false;
    },
    retypeDescription() {
      if (!this.retypePassword) {
        return 'Enter password';
      }
      if (this.password !== this.retypePassword) {
        return 'Password does not match';
      }
      return '';
    },
    passwordState() {
      if (this.password.length >= 6) {
        return true;
      }
      return false;
    },
    passwordDescription() {
      if (this.password.length < 6) {
        return 'Password must contains 6 symbols';
      }
      return '';
    },
    retypeState() {
      if (this.password === this.retypePassword && this.retypePassword) return true;
      return false;
    },
    showRegisterButton() {
      if (
        this.nameState
        && this.rateState
        && this.emailState
        && this.passwordState
        && this.retypeState
      ) return true;
      return false;
    },
  },
  methods: {
    ...mapActions({
      setLogged: 'user/setLogged',
      getUserData: 'user/getUserData',
    }),
    async checkEmail() {
      const res = await axios({
        method: 'post',
        url: '/api/checkEmail',
        data: { email: this.email },
      });
      if (!res.data) {
        this.emailState = true;
      } else {
        this.emailState = false;
        this.emailDescription = 'The user with such email already exists';
      }
    },
    async registerUser() {
      const res = await axios({
        method: 'post',
        url: '/api/registerUser',
        data: {
          name: this.name,
          rate: this.rate,
          email: this.email,
          password: this.password,
        },
      });
      if (res.data) {
        this.name = '';
        this.rate = '';
        this.email = '';
        this.password = '';
        this.emailState = false;
        this.emailDescription = '';
        this.retypePassword = '';
        this.$bvModal.show('succeful');
        this.$router.push('/');
        this.setLogged();
        this.getUserData(res.data);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
