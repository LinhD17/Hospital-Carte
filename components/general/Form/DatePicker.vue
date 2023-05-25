<template>
    <div>
      <datepicker v-model="selectedDate"></datepicker>
    </div>
  </template>
  
  <script>
  import { Datepicker } from 'vue3-datepicker';
  
  export default {
    components: {
      Datepicker
    },
    data() {
      return {
        selectedDate: null
      };
    }
  };
  </script>