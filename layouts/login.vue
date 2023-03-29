<template>
  <v-app style="background-color: #e8f5fb">
    <Nuxt />
    <no-ssr>
        <v-snackbar absolute top right v-model="state.token" color="#C83232">
            ログインの有効期限が切れました。
        </v-snackbar>
    </no-ssr>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, reactive, useRoute } from '@nuxtjs/composition-api'

export default defineComponent({
    components: {},
    setup() {
        const state = reactive({
            token: false,
        })

        // assces token kill 
        const route = useRoute() 
        if (route.value.query.code === '401') {
            state.token = true
        }
        return {state}
    }
})
</script>