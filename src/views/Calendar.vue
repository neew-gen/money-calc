<template>
  <main class="w-100 h-100 d-flex flex-column align-items-center">
    <CalendarTitle />
    <CalendarBody />
  </main>
</template>

<script>
import CalendarTitle from '@/components/Calendar/CalendarTitle.vue';
import CalendarBody from '@/components/Calendar/CalendarBody.vue';

export default {
  components: {
    CalendarTitle,
    CalendarBody,
  },
};
</script>
