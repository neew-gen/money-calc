<template>
  <div>
    <input
      v-model="vModel"
      class="input"
      :placeholder="timeType"
      type="number"
      @change="updateValue"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  props: {
    timeType: String,
  },
  data() {
    return {
      vModel: '',
    };
  },
  computed: {
    ...mapState({
      hours: (state) => state.calculator.hours,
      minutes: (state) => state.calculator.minutes,
      seconds: (state) => state.calculator.seconds,
    }),
  },
  methods: {
    ...mapActions({
      setValue: 'calculator/setValue',
    }),
    updateValue() {
      this.setValue({
        timeType: this.timeType, value: this.vModel,
      });
    },
  },
  mounted() {
    this.vModel = this[this.timeType];
  },
};
</script>
