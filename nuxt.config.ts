import { defineNuxtConfig } from 'nuxt/config'
import vuetify from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //css
  css: [
    '~/assets/main.scss',
    'vuetify/lib/styles/main.sass',
    'mdi/css/materialdesignicons.min.css'
  ],

  //build
  build: {
    transpile: ['vuetify'],
  },

  //vite 
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
    define: {
      'process.env.DEBUG': false,
    }
  },
  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins!.push(vuetify())
    },
  },
  app: {
    head: {
      // titleTemplate: '%s - nuxt',
      title: 'HK-Replica-Nuxt3', //head-title, instead of header write localhost:3001/...
      meta: [
        { charset: 'utf-8'},
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
      '~/plugins/vuetify.js',
      '~/plugins/apiBase.ts',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
      customVariables: ['~/assets/variables.scss'],
      treeShake: true,
      theme: {
        dark: false,
        themes: {
          light: {
            primary: '#1ea0dc',
            //     accent: colors.grey.darken3,
            //     secondary: colors.amber.darken3,
            //     info: colors.teal.lighten1,
            //     warning: colors.amber.base,
            //     error: colors.deepOrange.accent4,
            //     success: colors.green.accent3,
            //     background: '#f5f5f5',
          },
        },
      },
    }

  }
})