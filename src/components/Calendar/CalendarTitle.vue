<template>
  <div class="d-flex align-items-center calendar-title">
    <b-button @click="changeMonth('decrease')">
      &lt;
    </b-button>
    <h2 class="calendar-title__date">
      {{ `${monthNames[date.month]}, ${date.year}` }}
    </h2>
    <b-button @click="changeMonth('increase')">
      &gt;
    </b-button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
      ],
    };
  },
  computed: {
    ...mapState({
      date: (state) => state.calendar.date,
    }),
  },
  methods: {
    ...mapActions({
      setDefaultDate: 'calendar/setDefaultDate',
      changeMonth: 'calendar/changeMonth',
    }),
  },
  created() {
    this.setDefaultDate();
  },
};
</script>

<style lang="scss">
.calendar-title {
  height: 60px;
  &__date {
    width: 250px;
    text-align: center;
  }
}
</style>
