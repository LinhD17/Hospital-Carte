<template>
    <div class="pa-4 pb-2">
      <v-container fluid class="white">
        <v-row dense style="display: flex; justify-content: space-between;">
            <div style="display: flex;">
                <v-col md="auto">
            <p>確定日期間(開始)</p>
            <div style="width: 150px">
              <date-picker placeholder="年/月/日" />
            </div>
          </v-col>
          <v-col md="auto">
            <p>確定日期間(終了)</p>
            <div style="width: 150px">
              <date-picker placeholder="年/月/日" />
            </div>
          </v-col>
          <v-col md="auto" mx="auto">
            <p>患者番号</p>
            <div style="width: 150px">
              <v-text-field
                dense
                variant="solo"
                clearable
                hide-details
                placeholder="患者番号を入力"
              />
            </div>
          </v-col>
          <v-col md="auto">
            <p>患者氏名</p>
            <div style="width: 150px">
              <v-text-field
              dense
                variant="solo"
                clearable
                hide-details
                placeholder="患者名を入力"
              />
            </div>
          </v-col>
          <v-col md="auto">
            <p>患者性別</p>
            <div style="width: 80px">
              <v-select
                densedense
                variant="solo"
                clearable
                hide-details
                placeholder="すべて"
                :items="['男', '女']"
              />
            </div>
          </v-col>
            </div>
        <div class="mt-8">
            <v-col md="auto" align-self="end">
            <v-btn small width="80" color="primary" rounded
              >検索</v-btn
            >
          </v-col>
        </div>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent} from 'vue'
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
  