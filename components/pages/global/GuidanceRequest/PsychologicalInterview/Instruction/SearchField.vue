<template>
  <div class="pa-4 pb-2">
    <v-container fluid class="white">
      <v-row dense style="display: flex; justify-content: space-between">
        <div style="display: flex">
          <v-col md="auto">
            <p>記載日</p>
            <div style="width: 150px">
              <date-picker placeholder="年/月/日" />
            </div>
          </v-col>
          <v-col md="auto">
            <v-menu offset-y :close-on-content-click="false">
                    <template #activator="{ on, attrs }">
                        <v-btn
                            dense
                            class="mt-7 ml-10"
                            rounded
                            style="background-color: #1ea0dc; color: #ffffff"
                        >
                            検索
                        </v-btn>
                    </template>
                    <PagesGlobalRehabilitationDementialdayCareDescriptionInputPopup />
                </v-menu>
          </v-col>
        </div>
      </v-row>
    </v-container>
  </div>
</template>
  
  <script lang="ts">
import { defineComponent } from 'vue'
import DatePicker from '~/components/general/Form/DatePicker.vue'

export default defineComponent({
  components: {
    DatePicker,
  },
})
</script>
  
  <style lang="scss" scoped>
.col {
  p {
    font-weight: bold;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  .v-btn {
    top: 0;
    bottom: 0;
    margin: auto;
  }
}
</style>
  