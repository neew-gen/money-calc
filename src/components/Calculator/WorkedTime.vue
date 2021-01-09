<template>
  <div class="worked-time">
    <div class="title">Worked on this week:</div>
    <ul class="input-list">
      <li v-for="(time, index) in timeTypes" :key="index">
        <TimeInput :timeType="time"/>
      </li>
    </ul>
  </div>
</template>

<script>
import TimeInput from '@/components/Calculator/workedTimeComponents/TimeInput.vue';

export default {
  components: {
    TimeInput,
  },
  data() {
    return {
      timeTypes: ['hours', 'minutes', 'seconds'],
    };
  },
};
</script>

<style lang="scss" scoped>
.worked-time {
  display: flex;
  flex-direction: column;
}
.input-list {
  display: flex;
  list-style-type: none;
}
</style>
