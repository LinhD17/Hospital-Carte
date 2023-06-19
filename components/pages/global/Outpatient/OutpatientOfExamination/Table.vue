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
              <span>
                  {{ item.raw.patient_info.patient_birthday }}
                  <!-- ({{ moment().diff(item.raw.patient_info.patient_birthday, 'years', false) }}) -->
              </span> 
          </div>
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
        { title: "受付番号", value: "id", align: "center", sortable: true },
        {
          title: "患者番号",
          key: "patient_no",
          align: "center",
          sortable: true,
        },
        {
          title: "患者情報",
          key: "patient_info",
          align: "center",
          sortable: false,
        },
        {
          title: "外来患者状態",
          key: "status",
          align: "center",
          sortable: false,
        },
        {
          title: "診察予定日時",
          key: "consultDate",
          align: "center",
          sortable: false,
        },
        {
          title: "滞在時間",
          key: "waitHour",
          align: "center",
          sortable: false,
        },
        {
          title: "診療内容",
          key: "treatments",
          align: "center",
          sortable: false,
        },
        {
          title: "受付状態",
          key: "receptionStatus",
          align: "center",
          sortable: false,
        },
        {
          title: "備考",
          key: "hasRemarks",
          align: "center",
          sortable: false,
        },
        {
          title: "併科有無",
          key: "hasReserved",
          align: "center",
          sortable: false,
        },
        {
          title: "診療科",
          key: "department",
          align: "center",
          sortable: false,
        },
        { title: "診察医", key: "doctor", align: "center", sortable: false },
        {
          title: "コメント",
          key: "comment",
          align: "center",
          sortable: false,
        },
      ],
      dummyItems: [
        {
          id: "6",
          patient_no: "12345",
          patient_info: {
            patient_uuid: "123",
            patient_name: "患者 太郎",
            patient_name_katakana: "カンジャ タロウ",
            patient_gender: 1,
            patient_birthday: "1996年07月17日",
            is_name_duplicated: true,
          },
          status: 1,
          consultDate: "2021/10/22",
          waitHour: "17:00",
          receptionStatus: 1,
          hasRemarks: "",
          hasReserved: "",
          department: "",
          doctor: "doctor taro",
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