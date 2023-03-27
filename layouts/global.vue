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
import MainMenu from '~/components/pages/global/globalMenu/MainMenu.vue'
import PageHeader from '~/components/pages/mainMenu/pageHeader.vue'
export default {
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
  
}
</script>