<!-- xử lý khi gặp error -->
<template>
    <v-container>
    <v-row class="mt-16" justify="center" align-content="center">
        <v-col cols="6">
            <v-card color="#b30f0f" class="pa-2"> 
                <v-card-title>
                    <div v-if="error.statusCode === 404">
                    <h1>
                        <i class="icon">
                        <img 
                        :src="require(`@/assets/icon/important_circle.svg`)"
                        alt="" />
                        <img src="" alt="">
                        </i>
                        {{ pageNotFound }}
                    </h1>
                    </div>
                    <div v-else>
                    <h1>
                        {{  otherError }}
                    </h1>
                    </div>
                </v-card-title>
                <v-card-text v-if="error.statusCode === 404">
                    <h2>処理が完了できなかった可能性があります。もう一度やり直してください。</h2>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
    <v-row justify="center" class="mt-8">
      <v-btn
        x-large
        rounded
        color="primary"
        class="btn px-16"
        @click="$router.back()"
      >直前のページへ戻る</v-btn>
    </v-row>
    </v-container>
</template>
<script setup lang="ts"> 
    // cách viết điển hình của props trong Nuxt3 
    const props = defineProps({
        error: {
            type: Object,
            default: null,
        },
    })

    const pageNotFound = ref('404: Not Found')
    const otherError = ref('An error occurred')

    onMounted(() => {
        const title = props.error.statusCode === 404 ? pageNotFound : otherError
        return {
            title,
        }
    })
</script>

<style lang="scss" scoped>
h1 {
  font-size: 24px;
  color: #ffff;
  font-family: sans-serif;
  font-weight: 100;
}

h2 {
  font-size: 12px;
  font-family: sans-serif;
  font-weight: 100;
}

.btn {
  font-weight: bold;
}
</style>]
