import { defineNuxtConfig } from 'nuxt/config'
import vuetify from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: [
    'vuetify/lib/styles/main.sass',
    // 'mdi/css/materialdesignicons.min.css'
  ],

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    }
  },
  app: {
    head: {
      title: 'HK-Replica-Nuxt3',
    }
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
  }
})