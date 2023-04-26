import colors from 'vuetify/es5/util/colors'

export default {
  target: 'static',
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // titleTemplate: '%s - HK-Reform',
    title: 'HK-Reform',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/plugins/mock.js',
    // '~/plugins/wysiwyg',
    // '~/plugins/vuetify.js',
    // '~/filters',
    // '~/plugins/axios.ts',
    // '~/plugins/apiBase.ts',
    // {
    //   src: '@/plugins/fabric',
    //   mode: 'client',
    // },
    // { src: '~/plugins/infiniteloading', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    ['@nuxt/typescript-build',
      {
        typeCheck: false,
      },
    ],
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: false, //background-color 
      themes: {
        light: {
          primary: '#1ea0dc',
        }
        // dark: {
        //   primary: colors.blue.darken2,
        //   accent: colors.grey.darken3,
        //   secondary: colors.amber.darken3,
        //   info: colors.teal.lighten1,
        //   warning: colors.amber.base,
        //   error: colors.deepOrange.accent4,
        //   success: colors.green.accent3
        // }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vuetify/lib', 'tiptap-vuetify'],
    extend(config, ctx) {
      config.node = {
        fs: 'empty',
      }
    },
  }, 
  env: {
    apiKey: process.env.API_KEY,
    iotEndpoint: process.env.AWSIOT_ENDPOINT,
    iotIamAccesskey: process.env.AWSIOT_IAM_ACCESSKEY,
    iotIamSecretkey: process.env.AWSIOT_IAM_SECRETKEY,
    // 開発用
    devApiURL: process.env.DEV_API_URL,
    devApiORG: process.env.DEV_API_ORG,
  },
}
