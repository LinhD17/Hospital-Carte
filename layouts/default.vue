<template>
  <v-app>
    <page-header/>
  </v-app>
</template>

<script lang="ts">
import PageHeader from '~/components/pages/mainMenu/pageHeader.vue'
export default {
  components: {
    PageHeader,
  },
  name: 'DefaultLayout',
  data() {
    return {
       PageHeader,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  
}
</script>
