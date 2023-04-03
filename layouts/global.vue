<template>
    <v-app>
        <page-header/>
        <main-menu/>
        <v-main>
          <v-container fluid>
            <Nuxt />
          </v-container>
        </v-main>
    </v-app>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import MainMenu from '~/components/pages/global/globalMenu/MainMenu.vue'
import PageHeader from '~/components/pages/mainMenu/pageHeader.vue'
export default defineComponent({
  components: {
    PageHeader,
    MainMenu
  },
  name: 'DefaultLayout',
  data() {
    return {
       PageHeader,MainMenu
    }
  },
})
</script>
<style lang="scss" scoped>
.container--fluid {
  height: calc(100vh - 44px) !important;
  width: calc(100% - 54px) !important;
  margin-left: 54px !important;
  margin-right: -54px !important;
  padding: 0 !important;
  background-color: #f0f0f0 !important;
  overflow: hidden !important;
}
 .v-application--wrap {
  z-index: 0 !important;
}
.v-main {
  z-index: -1;
}
 </style>