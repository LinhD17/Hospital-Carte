<template>
  <div class="task-table">
    <v-data-table-virtual
      :headers="headers" 
      :items="dummyItems" 
      class="elevation-1"
    >
      <!-- patient-info -->
      <template v-slot:item.patient_info = "{ item }">
          <div class="d-flex" style="justify-content: space-between">
              <div class="info-cell">
                  <img
                      v-if="item.raw.patient_info.patient_gender === 1"
                      src="@/assets/icon/man.svg"
                      style="width: 25px; height: 25px"
                  />
                  <img
                      v-else
                      style="width: 25px; height: 25px"
                      src="@/assets/icon/female.svg"
                  />
                  <a>
                      <ruby class="info-cell__content ml-2" style="min-width: 80px">
                          <rt class="text-no-wrap" style="font-size: 10px">
                              {{ item.raw.patient_info.patient_name_katakana }}
                          </rt>
                          <!-- <nuxt-link
                              :to="`/karte?patient_uuid=${item.raw.patient_name.patient_uuid}`"
                              target="_blank"
                          >
                              {{ item.raw.patient_info.patient_name }}
                          </nuxt-link> -->
                          {{ item.raw.patient_info.patient_name }}
                      </ruby>
                  </a>
                  <div
                      v-if="item.raw.patient_info.is_name_duplicated === true"
                      class="same-name-field"
                  >
                      <img src="@/assets/icon/important_triangle.svg" />
                      <span>同姓</span>
                  </div>
              </div>
          </div>
      </template>
      <template v-slot:item.patient_birthday="{ item }">
        <div class="d-block">
          <div>{{  item.raw.patient_birthday }}</div>
          <div>
            (27歳<!-- ({{ moment().diff(item.raw.patient_info.patient_birthday, 'years', false) }}) -->)
          </div>
        </div>
      </template>
      <template v-slot:item.status="{ item }"> 
        <v-chip 
          v-if="item.raw.status"
          class="justify-center white"
          style="background-color: black; color: white;"
        >
        {{ item.raw.status }}
        </v-chip>
      </template>
      <template v-slot:item.treatments="{ item }">
        <div 
          v-for="staff in item.raw.treatments"
          :key="staff"
          class="d-flex ma-1"
        >
          <v-btn rounded class="ml-1" style="background-color: #1ea0dc; color: #ffffff;">
            {{ staff }}
          </v-btn>
      </div>
      </template>
      <template v-slot:item.medical_condition="{ item }">
        <v-btn
          variant="outline"
          dense
          style="background-color: #1ea0dc; color: #ffffff;"
        >
          {{ item.raw.medical_condition }}
        </v-btn>
      </template>
    </v-data-table-virtual>
    <div class="table-footer text-center">
      <span>全 {{ totalCount }} 件</span>
      <v-pagination
        v-model="page"
        circle
        :length="pageCount"
        :total-visible="pageCount"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { title: "受付番号", key: "id", align: "center", sortable: true },
        { title: "患者番号", key: "patient_no", align: "center", sortable: false,},
        { title: "患者情報", key: "patient_info", align: "center", sortable: false,},
        { title: "生年月日",  key: "patient_birthday", align: "center", sortable: false,},
        { title: "外来患者状態", key: "status", align: "center", sortable: false,},
        { title: "診療科", key: "department", align: "center", sortable: false, },
        { title: "受付時刻", key: "waitHour",  align: "center", sortable: false,},
        { title: "診療内容", key: "treatments", align: "center", sortable: false, },
        { title: "診療予定時刻", key: "estimated_time", align: "center", sortable: false,},
        { title: "初/再", key: "start_repeat", align: "center", sortable: false,},
        { title: "診療状況", key: "medical_condition", align: "center", sortable: false,},
        { title: "診療担当医", key: "doctor", align: "center", sortable: false,},
        { title: "コメント", key: "comment", align: "center", sortable: false, },
        { title: "プロファイル注意事項", key: "", align: "center", sortable: false,},
      ],
      dummyItems: [
        {
          id: "",
          patient_no: "00029",
          patient_info: {
            patient_uuid: "123",
            patient_name: "患者 太郎",
            patient_name_katakana: "カンジャ タロウ",
            patient_gender: 1,
            is_name_duplicated: true,
          },
          patient_birthday: "1996年07月17日",
          status: "未来院",
          department: "精神内科",
          waitHour: "17:00",
          treatments: ['診察', '処方',] ,
          //treatments: ['診察', '処方', '注射','検査', '画像', '心理','予診', '処置', '手術','汎用', 'リハビリ', '指導依頼', ] ,
          estimated_time: "11:00",
          start_repeat: "再", 
          medical_condition: "予約",
          doctor: " 医師　太郎",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.task-table {
  border: 0 !important;
  white-space: nowrap;

  a {
    margin-top: 0;
    text-decoration: none;
    color: #333333;
  }

  //   :deep(.td) {
  //     height: 36px !important;
  //     font-size: 12px !important;
  //     padding: 0 6px !important;
  //     text-align: center !important;
  //     cursor: pointer !important;
  //   }
}
.table-footer {
  display: flex;
  position: sticky;
  bottom: 0;
  padding: 5px 0;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
.info-cell {
    a {
    text-decoration: none;
    font-size: 12px;
    }
    display: flex;
    * {
    margin-right: 2px;
    }
    &__content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        a:hover {
            text-decoration: underline;
        }
    }
    .same-name-field {
    color: red;
    font-size: 80%;
    display: inline-block;
    }
  }
</style>