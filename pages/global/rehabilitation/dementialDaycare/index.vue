<template>
    <div class="screen">
        <dementialDaycare />
    </div>
  </template>
  
  <script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import DementialDaycare from '@/components/pages/global/rehabilitation/dementialDaycare/index.vue'
  export default defineComponent({
    // layout: 'global',
    components: { 
      DementialDaycare,
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