<template>
    <div class="date-layout">
      <DateTimeForm />
    </div>
  </template>
  
  <script lang="ts">
  import DateTimeForm from '~/components/general/form/DateTimeForm.vue';
  
  
  export default {
     components: {
    DateTimeForm
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