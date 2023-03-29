<template>
    <div class="well-known">
        <global-base-layout
            page-title="入院患者一覧" 
            title-icon="ward.svg"
        >
            <template #header>
                <v-btn color="teal darken-2" class="bt-basic h-middle w-auto">
                    病棟マップ
                </v-btn>
            </template>
            <div class="contents">
                <h1>nguyen thi dieu linh</h1>
            </div>
        </global-base-layout>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, } from '@nuxtjs/composition-api'
  import GlobalBaseLayout from '../../general/globalBaseLayout.vue'
  
  export default defineComponent({
    components: { 
      GlobalBaseLayout,
    },
    setup() {
    },
  })
  </script>
  
  <style lang="scss" scoped>
  .well-known {
    width: 98.6%;
    height: 100%;
  }
  .contents {
    display: flex;
    height: calc(100vh - 150px);
  }
  </style>