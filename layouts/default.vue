<template>
  <v-app>
    <PageHeader />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
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
    }
  },
  
}
</script>
