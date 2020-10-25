<template>
  <main class="w-100 h-100 d-flex justify-content-center align-items-center">
    <div>
      <Rate />
      <WorkedTime />
      <Summary />
    </div>
  </main>
</template>

<script>
import Rate from '@/components/Calculator/Rate.vue';
import WorkedTime from '@/components/Calculator/WorkedTime.vue';
import Summary from '@/components/Calculator/Summary.vue';

export default {
  components: {
    Rate,
    WorkedTime,
    Summary,
  },
};
</script>

<style>
</style>
