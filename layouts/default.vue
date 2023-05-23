<template>
    <v-app>
        <HeaderMainHeader />
        <v-main >
            <v-container fluid>
                <slot />
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
const router = useRouter()
</script>

<style lang="scss" scoped>
// global
.v-application--wrap {
  z-index: 0 !important;
}
.v-main {
  z-index: -1;
}
</style>