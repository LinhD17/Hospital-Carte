import { createVuetify } from 'vuetify'
import { defineNuxtPlugin } from '#app'
import * as components from 'vuetify/components'
//import * as appAll from 'vuetify/components'
//Directivesはユーザーのアクションに反応してUIが変化するような機能です。
import * as directives from 'vuetify/directives' // 追加
//import { VDataTable } from 'vuetify/labs/VDataTable'
import * as labs from 'vuetify/labs/components'
//đăng ký toàn cầu
import  Datepicker  from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'



export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    srr: true, 
    components: {
      ...labs,
      //...appAll,
    }, 
    directives // 追加

  })
  nuxtApp.vueApp.use(vuetify)
  nuxtApp.vueApp.component('Datepicker', Datepicker)
});