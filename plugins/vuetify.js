import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as labs from 'vuetify/labs/components'
import { VDataTable } from 'vuetify/labs/VDataTable'

//Directivesはユーザーのアクションに反応してUIが変化するような機能です。
import * as directives from 'vuetify/directives' // 追加
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components: {
      ...components,
      ...labs,
      VDataTable,
      ...directives,
    }, 
    theme: {
      themes: {
        light: {
          colors: {
            primary: '#1867C0',
            secondary: '#5CBBF6',
          },
        },
      },
    },
    directives // 追加

  })

  nuxtApp.vueApp.use(vuetify)
})
