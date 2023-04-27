<template>
  <v-app>
    <!-- header chung cua moi man hinh  -->
    <main-header />
    <!-- this file doesn't need main-menu -->
    <main-menu />
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang = "ts">
import { defineComponent, provide } from '@nuxtjs/composition-api'
import MainHeader from '~/components/pages/header/MainHeader.vue'
import MainMenu from '~/components/pages/global/globalMenu/MainMenu.vue'
import { useAccountsHeader, UserAccountsHeadersStateKey } from '~/hooks/header/useAccountsHeader'

export default defineComponent({
  components: {
    MainHeader,
    MainMenu
  },
  setup () {
    provide(UserAccountsHeadersStateKey, useAccountsHeader())
    return {}
  }
})
</script>

<style lang="scss">
// global
.v-application--wrap {
  z-index: 0 !important;
}
.v-main {
  z-index: -1;
}
</style>
