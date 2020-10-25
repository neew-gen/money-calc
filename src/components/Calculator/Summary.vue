<template>
  <div v-if="showSummary">
    <div>Summary: {{ usdSummary }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      hours: (state) => state.calculator.hours,
      minutes: (state) => state.calculator.minutes,
      seconds: (state) => state.calculator.seconds,
      calculatorRate: (state) => state.calculator.calculatorRate,
    }),
    showSummary() {
      if (this.hours || this.minutes || this.seconds) {
        return true;
      }
      return false;
    },
    usdSummary() {
      const perHours = this.hours * this.calculatorRate;
      const perMinute = (this.calculatorRate / 60) * this.minutes;
      const perSecond = (this.calculatorRate / 60 / 60) * this.seconds;
      return (perHours + perMinute + perSecond).toFixed(2);
    },
  },
};
</script>

<style>
</style>
