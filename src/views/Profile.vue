<template>
  <main class="w-100 h-100 d-flex justify-content-center align-items-center">
    <div>
      <div>Hello, {{ name }}!</div>
      <div>
        <div class="d-flex">
          <div>Your current rate: </div>
          <b-form-input
            type="number"
            size="sm"
            placeholder="Rate"
            v-model="rate"
            class="rateInput"
            @change="sendUpdateRate"
          ></b-form-input>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState({
      isLogged: (state) => state.user.isLogged,
      name: (state) => state.user.name,
    }),
    rate: {
      get() { return this.$store.state.user.rate; },
      set(value) { this.updateRate(value); },
    },
  },
  methods: {
    ...mapActions({
      updateRate: 'user/updateRate',
      sendUpdateRate: 'user/sendUpdateRate',
    }),
  },
  // created() {
  //   if (!this.isLogged) {
  //     this.$router.push('/');
  //   }
  // },
};
</script>

<style lang="scss" scoped>
.rateInput {
  width: 70px !important;
}
</style>
