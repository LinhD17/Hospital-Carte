<template>
    <div class="screen">
      <well-known-task />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from '@nuxtjs/composition-api'
import  WellKnownTask from '~/components/pages/global/home/wellKnownTask/index.vue';
  export default defineComponent({
    // layout: 'global',
    // middleware: ['guard/auth'], // y nghia la gi?? tao sao can them o day 
    components: { 
        WellKnownTask,
    }
  })
  </script>
  
  <style lang="scss" scoped>
  .screen {
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
  }
  </style>