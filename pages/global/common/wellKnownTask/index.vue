<template>
    <div class="screen">
      <ScreenContent />
    </div>
  </template>
  
  <script lang="ts">
  import  ScreenContent from '~/components/pages/global/home/wellKnownTask/index.vue';
  export default {
     components: { 
        ScreenContent,
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .screen {
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
  }
  </style>