<template>
    <v-sheet class="root">
      <div>
          <h1 class="title">業務タスク</h1>
          <task-search  class="mt-2"/>
  
      </div>
      <task-table /> 
    </v-sheet>
  </template>
  
  <script>
  import TaskTable from './TaskTable.vue';
  import TaskSearch from './TaskSearch.vue';
  export default {
    components: {
      TaskSearch,
      TaskTable 
      },
  
  }
  </script>
  
  <style lang="scss" scoped>
  .root {
      padding: 5px 10px;
  }
  .title {
    font-size: 20px !important;
    font-weight: bold;
  }
  </style>