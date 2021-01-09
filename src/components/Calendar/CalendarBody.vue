<template>
  <ul class="calendar-body">
    <li
      v-for="(row, index) in rowData"
      :key="index"
    >
      <WeekRow :data="row" />
    </li>
  </ul>
</template>

<script>
import WeekRow from '@/components/Calendar/calendarBodyComponents/WeekRow.vue';
import axios from 'axios';
import { mapState } from 'vuex';
import eventBus from '@/bus/eventBus';

export default {
  data() {
    return {
      rowData: [],
    };
  },
  computed: {
    ...mapState({
      date: (state) => state.calendar.date,
    }),
  },
  methods: {
    async createCalendarMatrix() {
      const res = await axios({
        method: 'post',
        url: '/api/createCalendarMatrix',
        data: this.date,
      });
      this.rowData = res.data;
    },
  },
  async mounted() {
    await this.createCalendarMatrix();
    eventBus.$on('changeMonth', async () => {
      await this.createCalendarMatrix();
    });
  },
  components: {
    WeekRow,
  },
};
</script>

<style scoped>
.calendar-body {
  list-style-type: none;
}
</style>
