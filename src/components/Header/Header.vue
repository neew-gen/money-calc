<template>
  <b-navbar toggleable="sm" type="dark" variant="info">
    <router-link class="title" to="/">MoneyCalc</router-link
    ><b-navbar-nav class="ml-auto">
      <HeaderLogin />
      <HeaderUser />
      <HeaderMenu />
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import HeaderLogin from './headerComponents/HeaderLogin.vue';
import HeaderUser from './headerComponents/HeaderUser.vue';
import HeaderMenu from './headerComponents/HeaderMenu.vue';

export default {
  components: {
    HeaderLogin,
    HeaderUser,
    HeaderMenu,
  },
};
</script>

<style lang="scss" scoped>
.title {
  color: white;
}
</style>
