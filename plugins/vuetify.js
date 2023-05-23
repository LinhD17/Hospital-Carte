import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
//Directivesはユーザーのアクションに反応してUIが変化するような機能です。
import * as directives from 'vuetify/directives' // 追加
//import { VDataTable } from 'vuetify/labs/VDataTable'
import * as labs from 'vuetify/labs/components'



export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    srr: true, 
    components: {
      ...labs,
    }, 
    directives // 追加

  })

  nuxtApp.vueApp.use(vuetify)
})