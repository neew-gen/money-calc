<template>
  <div v-if="isLogged">
    <b-nav-item-dropdown :text="name" right>
      <b-dropdown-item><router-link to="profile">Profile</router-link></b-dropdown-item>
      <b-dropdown-item><router-link to="user-settings">Settings</router-link></b-dropdown-item>
      <b-dropdown-item @click="logOut"><router-link to="/">Log Out</router-link></b-dropdown-item>
    </b-nav-item-dropdown>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState({
      isLogged: (state) => state.user.isLogged,
      name: (state) => state.user.name,
    }),
  },
  methods: {
    ...mapActions({
      setLoggedOut: 'user/setLoggedOut',
      changeShowLoginForm: 'login/changeShowLoginForm',
    }),
    logOut() {
      this.setLoggedOut();
      this.changeShowLoginForm();
    },
  },
};
</script>

<style>
</style>
