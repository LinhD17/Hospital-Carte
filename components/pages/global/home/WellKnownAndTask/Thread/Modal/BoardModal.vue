<template>
    <v-card>
        <v-card-title class="d-flex">
          <span style="color: #1ea0dc">掲示板の新規登録</span>
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false" color="#51565b">
            <v-icon style="color: white">mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text
          style="background-color: #f1f3f4; width: 800px; height: 500px"
        >
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-toolbar-items variant="elevated">
            <v-btn
              @click="dialog = false"
              min-width="100"
              dense
              rounded="xl"
              style="color: white; background-color: #1ea0dc"
              >保存</v-btn
            >
          </v-toolbar-items>
        </v-card-actions>
      </v-card>
</template>
<style lang="scss" scoped>
// 
</style>