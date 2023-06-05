<template>
  <div class="task-table">
    <v-data-table :headers="headers" :items="dummyItems" class="elevation-1">
      <!-- label -->
      <template v-slot:item.treatments="{ item }">
        <div
          v-for="(treatment, index) in item.treatments"
          :key="index"
          style="display: inline-flex; margin-right: 5px"
        >
          <v-chip
            v-if="treatment.name === '診察'"
            color="#FFB53E"
            small
            text-color="white"
            >診察</v-chip
          >
          <v-chip
            v-if="treatment.name === '検査'"
            color="#86E31A"
            small
            text-color="white"
            >検査</v-chip
          >
          <v-chip
            v-if="treatment.name === '栄養'"
            color="#F87F7F"
            small
            text-color="white"
            >栄養</v-chip
          >
          <v-chip
            v-if="treatment.name === '処方'"
            color="#79D2FF"
            small
            text-color="white"
            >処方</v-chip
          >
          <v-chip
            v-if="treatment.name === '画像'"
            color="#ADADAD"
            small
            text-color="white"
            >画像</v-chip
          >
        </div>
      </template>

      <!-- patient-info -->
      <template v-slot:item.patient_info="{ item }">
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
    </v-data-table>
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
        {
          title: 'レベル',
          value: 'treatments',
          align: 'center',
          sortable: true,
        },
        {
          title: '患者番号',
          key: 'patient_no',
          align: 'center',
          sortable: true,
        },
        {
          title: '患者情報',
          key: 'patient_info',
          align: 'center',
          sortable: false,
        },
        {
          title: '病院/外来',
          key: 'hospitaloroutpatient',
          align: 'center',
          sortable: false,
        },
        {
          title: '記載内容',
          key: 'descriptioncontent',
          align: 'center',
          sortable: false,
        },
        {
          title: '登録者',
          key: 'registeredperson',
          align: 'center',
          sortable: false,
        },
        {
          title: '診察予定日時',
          key: 'scheduleddateofexamination',
          align: 'center',
          sortable: false,
        },
      ],
      dummyItems: [
        {
          treatments: [
            {
              name: '検査',
              progress: '',
            },
          ],
          patient_no: '1001',
          patient_info: {
            patient_uuid: '123',
            patient_name: '患者 太郎',
            patient_name_katakana: 'カンジャ タロウ',
            patient_gender: 1,
            patient_birthday: '1996年07月17日',
            is_name_duplicated: true,
          },
          hospitaloroutpatient: 'デモ東病東',
          descriptioncontent: '発症リスク低',
          registeredperson: '医師 次郎',
          scheduleddateofexamination: '2023年06月05日 09時00分',
        },
        {
          patient_no: '1002',
          patient_info: {
            patient_uuid: '123',
            patient_name: '患者 太郎',
            patient_name_katakana: 'カンジャ タロウ',
            patient_gender: 1,
            patient_birthday: '1996年07月17日',
            is_name_duplicated: true,
          },
          hospitaloroutpatient: 'デモ東病東',
          descriptioncontent: '褥瘡Ⅰ度（発赤のみ）',
          registeredperson: '医師 次郎',
          scheduleddateofexamination: '2023年06月05日 09時00分',
        },
      ],
    }
  },
}
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