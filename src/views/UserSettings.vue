<template>
  <main class="w-100 h-100 d-flex justify-content-center align-items-center">
    <div>
      settings
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex';

export default {
  components: {
  },
  computed: {
    ...mapState({
      isLogged: (state) => state.user.isLogged,
    }),
  },
  mounted() {
    if (!this.isLogged) {
      this.$router.push('/');
    }
  },
};
</script>

<style>
</style>
