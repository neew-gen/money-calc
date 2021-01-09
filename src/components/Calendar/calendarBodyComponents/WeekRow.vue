<template>
  <div class="week-row">
    <ul class="week-row-list">
      <li
        class="week-row-list-item"
        v-for="(date, index) in data.weekDays"
        :key="index"
      >
        <div>{{ date }}</div>
      </li>
    </ul>
    <div>{{ data.weekIndex }}</div>
  </div>
</template>

<script>
export default {
  methods: {
  },
  props: {
    data: Object,
  },
};
</script>

<style lang="scss" scoped>
.week-row {
  border: 3px black solid;
  &-list {
    list-style-type: none;
    display: flex;
    padding: 0;
    &-item {
      height: 50px;
      width: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px black solid;
    }
  }
}

</style>
