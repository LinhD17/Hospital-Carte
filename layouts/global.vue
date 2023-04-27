<template>
    <v-app>
      <!-- header chung cua moi man hinh  -->
      <main-header />
      <!-- menu chung cua moi man hinh (mainMenu, subMenu ) -->
      <main-menu />
      <v-main>
        <v-container fluid>
          <Nuxt />
        </v-container>
      </v-main>
      <SnackBar /> 
    </v-app>
  </template>
  
  <script lang = "ts">
  import { defineComponent, useRouter, watch } from '@nuxtjs/composition-api'
  import MainHeader from '~/components/pages/header/MainHeader.vue'
  import MainMenu from '~/components/pages/global/globalMenu/MainMenu.vue'
  import { useLoggedIn } from '~/hooks/login/useLoggedIn'
  import Snackbar from '~/components/general/Snackbar.vue'
  
  export default defineComponent({
    components: {
      MainHeader,
      MainMenu,
      Snackbar,
    },
    middleware: 'global',
    setup() {
      const router = useRouter()
      const { isLoggedIn } = useLoggedIn()

      //quan sat
      watch(
        //lấy giá trị của isLoggedIn và đưa vào ()
        () => isLoggedIn.value,
        //nếu ko có gía trị nào (!isLoggedIn.value) => chưa được login =>  đưa lại về trang login cho người dùng đăng nhập vào 
        () => {
          if (!isLoggedIn.value) {
            router.push('/login')
          }
        }
      )
      return {}
    }
  })
  </script>
  
  <style lang="scss" scoped>
  // global
  .container--fluid {
    height: calc(100vh - 44px) !important;
    width: calc(100% - 54px) !important;
    margin-left: 54px !important;
    margin-right: -54px !important;
    padding: 0 !important;
    background-color: #f0f0f0 !important;
    overflow: hidden !important;
  }
  .v-application--wrap {
    z-index: 0 !important;
  }
  .v-main {
    z-index: -1;
  }
  </style>