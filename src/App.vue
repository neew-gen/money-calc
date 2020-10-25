<template>
  <b-container>
    <b-row class="appRow">
      <Header />
      <router-view />
    </b-row>
    <b-modal id="succeful" centered>
      <p class="my-4">Succeful registration!</p>
    </b-modal>
  </b-container>
</template>

<script>
import Header from '@/components/Header/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
.appRow {
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
}
</style>
