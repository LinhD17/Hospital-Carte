<template>
    <div class="screen">
        <InpatientOfExamination />
    </div>
  </template>
  
  <script lang="ts">
import { defineComponent } from "vue";
import InpatientOfExamination from '~/components/pages/global/ward/inpatientOfExamination/index.vue'

  export default defineComponent({
     components: { 
        InpatientOfExamination,
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