<template>
    <div>
        <v-data-table
            :headers="header"
            :items="dummyItems"
            :items-per-page="5"
            class="elevation-1"
            fixed-header
        >
            <template #[`header.status`] = "{}">
                <th class="th-custom" style="text-align: center">
                    <div class="d-flex">
                        <a class="mt-1 mr-2 span-custom">文例</a>
                        <span class="mt-1 mr-2 span-custom">テンプレート</span>
                        <v-select
                        class="mt-3"
                        dense
                        placeholder="タグ登録"
                        style="width: 156px"
                        background-color="white"
                        ></v-select>
                    </div>
                </th>
            </template>
            <template #[`item.check`] = "{}">
                <v-btn icon small @click.stop="checkVerifiedAll">
                    <v-icon v-if="checkVerifiedAllFlg">mdi-check</v-icon>
                    <v-icon v-else>mdi-checkbox-blank-outline</v-icon>
                </v-btn>
            </template>
            <template #[`item.status`] = "{}">
                <div class="mt-1">
                    <v-btn dense outlined rounded small color="primary">文例</v-btn>
                    <v-btn dense outlined rounded small color="primary">テンプレート</v-btn>
                    <v-btn dense outlined rounded small color="primary">評価取込</v-btn>
                </div>
                <div class="mt-1">
                    <v-select
                          placeholder="タグを選択"
                          outlined
                          style="width:250px"
                    >
                    </v-select>
                </div>
            </template>
        </v-data-table>
    </div>
  </template>
  
  <script>
  import { defineComponent } from '@vue/composition-api'
  
  export default defineComponent({
    setup() {
      const header = [
        {text: '患者選択', value:'check',sorttable: true},
        { text: '受付番号', value: 'id', sortable: true },
        { text: '患者番号', value: 'patientNo', sortable: true },
        { text: '患者情報', value: 'name', sortable: true },
        { text: '外来患者状態', value: 'status', sortable: true },
        { text: '診察予定日時', value: 'consultDate', sortable: true },
        { text: '診療科', value: 'department', sortable: true },
        { text: '診察医', value: 'doctor', sortable: true },
        { text: 'コメント', value: 'comment', sortable: true },
      ]
  
      const dummyItems = [
        {
          id: "6",
          patientNo: "123456",
          name: "わろく タロウ",
          // status: ,
          // consultDate: ,
          // waitHour: ,
          // receptionStatus: ,
          // hasRemarks: ,
          // hasReserved: ,
          // department: ,
          doctor: "doctor taro",
        },
      ]
      return { header, dummyItems }
    },
  })
  </script>