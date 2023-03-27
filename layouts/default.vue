<template>
  <v-app>
    <page-header/>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import PageHeader from '~/components/pages/mainMenu/pageHeader.vue'
import MainMenu from '~/components/pages/global/globalMenu/MainMenu.vue'
export default {
  components: {
    PageHeader,MainMenu,
  },
  name: 'DefaultLayout',
  data() {
    return {
       PageHeader,MainMenu,
    }
  },
  
}
</script>
