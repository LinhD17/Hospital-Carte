<template>
  <div class="date-layout">
    <DatePicker />
  </div>
</template>

<script lang="ts">
import DatePicker from '~/components/general/form/DatePicker.vue'


export default {
   components: {
      DatePicker 
  }
}
</script>

<style lang="scss" scoped>
.date-layout {
//   padding-bottom: 150px;
//   text-align: center !important;
//   background-color: #e8f5fb;
}
</style>