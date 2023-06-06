<template>
  <div class="task-table">
    <v-data-table :headers="headers" :items="dummyItems" class="elevation-1">
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

      <!-- registeredperson -->
      <template #[`item.registeredperson`]="{ item }">
        <div class="d-flex centered-cell">
          <p class="mr-2">{{ item.raw.registeredperson }}</p>
          <a href="http://" style="color: #2196f3; text-decoration: underline"
            >選択する</a
          >
        </div>
      </template>
    </v-data-table>
    <div class="table-footer text-center pt-2">
      <span>全 {{ totalCount }} 件</span>
      <v-pagination
          v-model="page"
          class="ml-4"
          circle
          :length="pageCount"
          :total-visible="pageCount"
      ></v-pagination>
      <div style="position: absolute; right: 0">
        <v-btn rounded class="mr-5" style="background-color: #1ea0dc; color: #ffffff">検索</v-btn>
      </div>
    </div>
  </div>
</template>
    
    <script>
export default {
  data() {
    return {
      headers: [
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
      ],
      dummyItems: [
        {
          patient_no: '0001',
          patient_info: {
            patient_uuid: '123',
            patient_name: '患者 太郎',
            patient_name_katakana: 'カンジャ タロウ',
            patient_gender: 1,
            patient_birthday: '1996年07月17日',
            is_name_duplicated: true,
          },
          hospitaloroutpatient: '1病棟/xxx',
          descriptioncontent:
            '患者の症状について共感支持的に傾聴するとともに、患者の治療計画に基づき危険介入について支持、助言などの働きかけを行った。',
          registeredperson: '医師 次郎',
        },
        {
          patient_no: '0002',
          patient_info: {
            patient_uuid: '123',
            patient_name: '患者 太郎',
            patient_name_katakana: 'カンジャ タロウ',
            patient_gender: 1,
            patient_birthday: '1996年07月17日',
            is_name_duplicated: true,
          },
          hospitaloroutpatient: '1病棟/xxx',
          descriptioncontent:
            '患者の症状について指摘するとともに、患者の治療計画に基づき病気との付き合い方について支持、助言などの働きかけを行った。',
          registeredperson: '医師 次郎',
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