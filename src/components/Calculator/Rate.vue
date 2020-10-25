<template>
  <div class="d-flex">
    <div class="mr-1">Your current rate:</div>
    <div>
      <input placeholder="Rate" type="number" v-model="rate"/>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      isLogged: (state) => state.user.isLogged,
      rate: (state) => state.user.rate,
      calculatorRate: (state) => state.calculator.calculatorRate,
    }),
    rate: {
      get() {
        if (this.isLogged) {
          this.updateRate(this.$store.state.user.rate);
          return this.$store.state.user.rate;
        }
        return this.calculatorRate;
      },
      set(value) { this.updateRate(value); },
    },
  },
  methods: {
    ...mapActions({
      updateRate: 'calculator/updateRate',
    }),
  },
};
</script>
