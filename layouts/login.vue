<template>
    <v-app style="background-color: #e8f5fb">
        <Nuxt />
        <no-ssr>
            <v-snackbar 
                v-model="state.token" 
                absolute 
                top 
                right 
                style="color: #C83232"
            >
                ログインの有効期限が切れました。
            </v-snackbar>
        </no-ssr>
    </v-app>
</template>

<script setup lang="ts">
    const state = reactive({
        token: false,
    })
    // アクセストークン切れ
    const route = useRoute()
    if (route.value.query.code === '401') {
        state.token = true
    }
</script>