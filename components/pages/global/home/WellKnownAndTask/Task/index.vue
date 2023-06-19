<template>
    <v-sheet class="root">
      <div>
        <h1 class="title text-left">業務タスク</h1>
        <PagesGlobalHomeWellKnownAndTaskTaskSearch class="mt-2" />
      </div>
      <PagesGlobalHomeWellKnownAndTaskTaskTable /> 
    </v-sheet>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
// .root {
//   padding: 5px 10px;
// }

.root {
  padding: 10px 10px 0;
  margin: 10px 5px 0;
  background-color: #ffffff;
  border-radius: 10px;
}

  .title {
    font-size: 20px !important;
    font-weight: bold;
  }
  </style>