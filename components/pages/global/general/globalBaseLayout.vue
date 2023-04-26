<template>
    <div class="global-deader">
      <screen-header 
          :page-title="pageTitle"
          :title-icon="titleIcon"
      >
          <slot name="header"></slot>
      </screen-header>
      <div class="screen-contents-card">
          <slot></slot>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from '@nuxtjs/composition-api'
  import ScreenHeader from '~/components/general/globalHeader.vue'
  export default defineComponent({
    components: { 
      ScreenHeader,
    },
    props: {
      pageTitle: String,
      titleIcon: String,
    },
    setup() {
      return {}
    },
  })
  </script>
  
  <style lang="scss" scoped>
  
  .screen-contents-card {
    // margin: 10px;
    padding-bottom: 0 !important;
    border-radius: 10px;
    height: calc(100vh - 135px);
  }
  </style>