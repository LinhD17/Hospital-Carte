<template>
    <div class="pa-4 pb-2">
      <v-container fluid class="white">
        <v-row dense style="display: flex; justify-content: space-between">
          <div style="display: flex">
            <v-col md="auto">
              <p>受付日</p>
              <div style="width: 150px">
                <date-picker placeholder="年/月/日" />
              </div>
            </v-col>
            <v-col md="auto">
              <p>担当者</p>
              <div style="width: 150px">
                <v-select
                  dense
                  variant="solo"
                  clearable
                  hide-details
                  placeholder="選択してください"
                  :items="['DC花子', '2']"
                />
              </div>
            </v-col>
            <v-col md="auto">
              <p>グループ</p>
              <div style="width: 150px">
                <v-select
                  dense
                  variant="solo"
                  clearable
                  hide-details
                  placeholder="選択してください"
                  :items="['DC花子', '2']"
                />
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
                  placeholder="入力してください"
                />
              </div>
            </v-col>
            <v-col md="auto">
              <p>状態</p>
              <div style="width: 150px">
                <v-select
                  dense
                  variant="solo"
                  clearable
                  hide-details
                  placeholder="選択してください"
                  :items="['DC花子', '2']"
                />
              </div>
            </v-col>
          </div>
          <div class="mt-8">
            <v-col md="auto" align-self="end">
              <v-btn small width="80" color="primary" rounded>検索</v-btn>
            </v-col>
          </div>
          <div class="mt-0">
            <v-col md="auto" align-self="end">
              <v-data-table-virtual
                :headers="header"
                :items="dummyItems"
                hide-default-footer
              >
              </v-data-table-virtual>
            </v-col>
          </div>
          <div class="mt-8">
            <v-col md="auto" align-self="end">
              <v-btn small width="100" color="primary" rounded>臨時参加</v-btn>
            </v-col>
          </div>
        </v-row>
      </v-container>
    </div>
  </template>
    
    <script lang="ts">
  import { defineComponent, ref } from 'vue'
  import moment from 'moment'
  import DatePicker from '~/components/general/Form/DatePicker.vue'
  
  type HeaderCell = {
    title: string
    key: string
    width?: string | number
    sortable: boolean
    align: string
  }
  
  const header: HeaderCell[] = [
    // { title: 'SC',key: 'sc', width:80, sortable: false, align: 'center'},
    // { title: 'DC',key: 'dc', width:80, sortable: false, align: 'center'},
    // { title: 'DNC',key: 'dnc', width:80, sortable: false, align: 'center'},
    // { title: 'NC',key: 'nc', width:80, sortable: false, align: 'center'},
    // { title: '他',key: 'other', width:80, sortable: false, align: 'center'},
    { title: '合計', key: 'total', width: 80, sortable: false, align: 'center' },
  ]
  const dummyItems = [
    {
      // sc: '10人',
      // dc: '10人',
      // dnc: '10人',
      // nc: '10人',
      // other: '10人',
      total: '10人',
    },
  ]
  export default defineComponent({
    components: {
      DatePicker,
    },
    setup() {
      const rules = ref({
        patient_no_rule: [
          (v: string) => /^\d+$/.test(v) || !v || '番号を入力してください',
        ],
      })
      return {
        date: ref(moment().format('YYYY-MM-DD')),
        rules,
        header,
        dummyItems,
      }
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
    