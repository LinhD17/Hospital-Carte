<template>
  <v-app>
    <page-header/>
    <main-menu />
    <v-container fluid class="container">
      <Nuxt />
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import PageHeader from '~/components/pages/mainMenu/pageHeader.vue'
import MainMenu from '~/components/pages/global/globalMenu/MainMenu.vue'

export default defineComponent({
  components: {
    PageHeader,
    MainMenu,
  },
  name: 'DefaultLayout',
  data() {
    return {
       PageHeader,
       MainMenu,
    }
  },
})
</script>
<style lang="scss">
.v-application--wrap {
  z-index: 0 !important;
}

.container {
  margin-left: 42px;
  height: 100% !important; 
  padding-top: 0 !important;
  width: 100%;
}
</style>
