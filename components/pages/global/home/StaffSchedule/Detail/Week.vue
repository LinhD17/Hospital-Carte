<template>
    <v-layout>
        <h1>Rescho Calendar Week</h1>
        <v-calendar v-model="selectedDate" />
    </v-layout>
</template>
<script>
export default {
  data() {
    return {
      selectedDate: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
  left: 4px;
  margin-right: 8px;
  position: relative;

  &.with-time {
    position: absolute;
    right: 4px;
    margin-right: 0px;
  }
}
</style>