<template>
  <v-row class="mt-10 ml-10">
    <v-dialog v-model="dialog" width="800">
      <template v-slot:activator="{ props }">
        <v-btn icon small color="primary" class="btn-plus" v-bind="props">
          <v-icon color="white">mdi-plus</v-icon>
        </v-btn>
      </template>
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
          <!-- Modal body content-->
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
    </v-dialog>
  </v-row>
</template>
  
  <script>
export default {
  data() {
    return {
      dialog: false,
    }
  },
}
</script>
  
  <style lang="scss" scoped>
.btn-style {
  font-family: Meiryo;
  font-weight: bold;
  font-size: 12px;
  width: 78px;
  top: 4px !important;
  height: 30px !important;
  margin-left: 20px;
}
</style>