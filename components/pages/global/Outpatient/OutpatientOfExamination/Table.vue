<template>
  <div class="table-content">
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
              v-if="item.raw.patient_info.gender === 1"
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
                  {{ item.raw.patient_info.name_kana }}
                </rt>
                <!-- <nuxt-link
                  :to="`/karte?patient_uuid=${item.raw.name.uuid}`"
                  target="_blank"
                >
                  {{ item.raw.patient_info.name }}
                </nuxt-link> -->
                {{ item.raw.patient_info.name }}
              </ruby>
            </a>
            <div
              v-if="item.raw.patient_info.isSameName === true"
              class="same-name-field"
            >
              <img src="@/assets/icon/important_triangle.svg" />
              <span>同姓</span>
            </div>
          </div>
          <span>
            {{ item.raw.patient_info.birthday }}
            <!-- ({{ moment().diff(item.raw.patient_info.birthday, 'years', false) }}) -->
          </span> 
        </div>
      </template>

      <!-- outpatient_progress -->
      <template v-slot:item.outpatient_progress = "{ }">
        <div>
          <v-btn rounded style="background-color: #696969; color: #FFFFFF;" small>未来院</v-btn>
        </div>
      </template>

      <!-- examination_Details -->
      <template v-slot:item.examination_Details="{ item }">
        <div class="d-flex">
          <div 
            v-for="c in item.raw.examination_Details"
            :key="c"
          >
            <v-chip color="red"
            small
            variant="outlined"
>{{ c }}</v-chip>
          </div>
        </div>
      </template>

      <!-- examination_status -->
      <template v-slot:item.examination_status = "{ }">
        <div>
          <v-btn 
          color="#1ea0dc"
            small
            variant="outlined"
          >予約</v-btn>
        </div>
      </template>

      <!-- examining_physician_profile_notes -->
      <template v-slot:item.examining_physician_profile_notes = "{ }">
        <div>
          <v-icon color="red"
            small
            variant="outlined">mdi-alert-circle-outline</v-icon>
        </div>
      </template>

    </v-data-table-virtual>
    <div class="table-footer text-center pt-2">
      <span>全 {{ totalCount }} 件</span>
      <v-pagination
          v-model="page"
          class="ml-4"
          circle
          :length="pageCount"
          :total-visible="pageCount"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
    export default {
      data () {
        return {
          headers: [
            { title: '受付番号', key: 'receipt_no', align:'center', sortable: false, width: 100},
            { title: '患者番号', key: 'patient_no', align:'center', sortable: false, width: 100},
            { title: '患者情報', key: 'patient_info', align:'center', sortable: false, width: 320},
            { title: '外来進行状況', key: 'outpatient_progress', align:'center', sortable: false, width: 100},
            { title: '診察料', key: 'medical_fee', align:'center', sortable: false},
            { title: '受付時刻', key: 'reception_time', align:'center', sortable: false, width: 100},
            { title: '診察内容', key: 'examination_Details', align:'center', sortable: false},
            { title: '診察予定時刻', key: 'scheduled_consultation_time', align:'center', sortable: false},
            { title: '初/再', key: 'first_repeat', align:'center', sortable: false},
            { title: '診察状況', key: 'examination_status', align:'center', sortable: false},
            { title: '診察担当医', key: 'doctor_in_charge', align:'center', sortable: false},
            { title: 'コメント', key: 'comment', align:'center', sortable: false, width: 100},
            { title: 'プロファイル注意事項', key: 'examining_physician_profile_notes', align:'center', sortable: false},
          ],
          dummyItems: [
            {
              receipt_no: '',
              patient_no: '00070',
              patient_info: {
                name: 'テスト患者',
                name_kana: 'テストカンジャ',
                birthday: '1993年04月08日',
                gender: 1,
                isSameName: true,
              },
              outpatient_progress: '未来院',
              medical_fee: '神経内科',
              reception_time: '',
              examination_Details: [
                '診察','処方','注射'
              ],
              scheduled_consultation_time: '10:00',
              doctor_in_charge: '保険指定医 テスト10',
              comment: '', 
              examining_physician_profile_notes: '',
            },
            {
              receipt_no: '',
              patient_no: '00070',
              patient_info: {
                name: 'テスト患者',
                name_kana: 'テストカンジャ',
                birthday: '1993年04月08日',
                gender: 1,
                isSameName: true,
              },
              outpatient_progress: '未来院',
              medical_fee: '神経内科',
              reception_time: '',
              examination_Details: [
                '診察','処方','注射'
              ],
              scheduled_consultation_time: '10:00',
              doctor_in_charge: '保険指定医 テスト10',
              comment: '', 
              examining_physician_profile_notes: '',
            },
          ],
        }
      },         
    }
</script>
  

<style lang="scss" scoped> 
 .table-content {
  border: 0 !important;
  white-space: nowrap;

  a {
    margin-top: 0;
    text-decoration: none;
    color: #1ea0dc;
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
      justify-content: center;
      align-items: center;
      position: sticky;
      top: 0;
      padding: 10px 0;
      background-color: #ffffff;
      filter: drop-shadow(0 -3px 3px #e6e6e6);
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
  .centered-cell {
    text-align: center;
}
</style>