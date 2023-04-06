
<template>
    <div>
      <v-data-table
        :headers="header"
        :items="dummyItems"
        :items-per-page="5"
        class="elevation-1"
        fixed-header
      />
    </div>
  </template>
  
  <script>
  import { defineComponent } from '@vue/composition-api'
  
  export default defineComponent({
    setup() {
      const header = [
        { text: '受付番号', value: 'id', sortable: true },
        { text: '患者番号', value: 'patientNo', sortable: true },
        { text: '患者情報', value: 'name', sortable: true },
        { text: '外来患者状態', value: 'status', sortable: true },
        { text: '診察予定日時', value: 'consultDate', sortable: true },
        { text: '滞在時間', value: 'waitHour', sortable: true },
        { text: '診療内容', value: 'treatments', sortable: false },
        { text: '受付状態', value: 'receptionStatus', sortable: true },
        { text: '備考', value: 'hasRemarks', sortable: true },
        { text: '併科有無', value: 'hasReserved', sortable: true },
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