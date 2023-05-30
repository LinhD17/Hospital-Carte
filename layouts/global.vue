<template>
    <v-app>
        <HeaderMainHeader />
        <PagesGlobalGlobalMenuMainMenu />
        <v-main class="mt-14">
            <v-container fluid class="pl-4">
                <slot />
            </v-container>
        </v-main>
        <!-- <SnackBar /> -->
    </v-app>
</template>

<script setup lang="ts">
const router = useRouter()
</script>

<style lang="scss" scoped>
//global
.v-container {
    padding-right: 0 !important;
}
.container--fluid {
  height: calc(100vh - 44px) !important;
  width: calc(100% - 50px) !important;
  margin-left: 100px !important;
  margin-right: -54px !important;
  padding: 0 !important;
  background-color: #f0f0f0 !important;
  overflow: hidden !important;
}
// .v-application--wrap {
//   z-index: 0 !important;
// }
// .v-main {
//   z-index: -1;
// }

</style>