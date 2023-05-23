<script>
    export default {
      data () {
        return {
          selected: [],
          headers: [
            { title: '不参加選択', value: 'check', align:'center', sortable: false},
            { title: '状態', value: 'status', align:'center', sortable: false},
            { title: '患者番号', value: 'patient_no', align:'center', sortable: false},
            { title: '患者情報', value: 'patient_info', align:'center', sortable: false},
            { title: '受付時間', value: 'recept_time', align:'center', sortable: false},
            { title: '種目', value: 'event', align:'center', sortable: false},
            { title: '食数', value: 'meals', align:'center', sortable: false},
            { title: '早加', value: 'earlyMorning', align:'center', sortable: false},
            { title: '長減', value: 'lengthening', align:'center', sortable: false},
            { title: 'プログラム', value: 'program', align:'center', sortable: false},
            { title: 'グループ', value: 'group', align:'center', sortable: false},
            { title: '診療内容', value: 'consultation', align:'center', sortable: false},
            { title: '主治医', value: 'main_doctor', align:'center', sortable: false},
            { title: '受付メモ', value: 'memo', align:'center', sortable: false},
          ],
          dummyItems: [
            {
              status: {
                id:1,
                name: '記録済'
              },
              patient_no: '123456',
              patient_info: {
                name: 'テスト患者',
                name_kana: 'テストカンジャ',
                birthday: '1993/04/08',
                gender: 1,
                isSameName: true,
              },
              recept_time: '8:30',
              earlyMorning: 'dummydata',
              lengthening: {
                flag: 'dummy',
                sum: '1',
              },
              total: 1,
              program: [
                {
                  name: 'カラオケ',
                },
                {
                  name: '園',
                },
              ],
              // program: 'karaoke_関_',
              consultation: ['診察', '検査', '処方', '画像', '栄養'],
              main_doctor: '医師太郎',
              memo: '診察希望',
            },
            {
              status: {
                id:1,
                name: '確定済'
              },
              patient_no: '123456',
              patient_info: {
                name: 'テスト患者',
                name_kana: 'テストカンジャ',
                birthday: '1993/04/07',
                gender: 1,
                isSameName: true,
              },
              recept_time: '8:30',
              lengthening: {
                flag: 'dummy',
                sum: '2',
              },
              total: 1,
              program: [
                {
                  name: '未指定'
                },
              ],
              consultation: ['診察', '検査', ],
              main_doctor: '医師太郎',
            },
            {
              status: {
                id:1,
                name: '不参加'
              },
              patient_no: '123456',
              patient_info: {
                name: 'テスト患者',
                name_kana: 'テストカンジャ',
                birthday: '1993/01/22',
                gender: 1,
                isSameName: true,
              },
              recept_time: '8:30',
              lengthening: {
                flag: 'dummy',
                sum: '2',
              },
              total: 1,
              program: [
                {
                  name: '未指定'
                },
              ],
              consultation: ['診察', '画像', '栄養'],
              main_doctor: '医師太郎',
            },
          ],
        }
      },         
    }
</script>
<template>
    <div class="task-table">
        <v-data-table
            v-model="selected"
            :headers="headers"
            :items="dummyItems"
            class="elevation-1"
            show-select
            @page-count="pageCount = $event"
        >
          <!-- patient-info -->
          <template #[`item.patient_info`] = "{ item }">
              <div class="d-flex" style="justify-content: space-between">
                  <div class="info-cell">
                      <img
                          v-if="item.patient_info.patient_gender === 1"
                          src="@/assets/icons/man.svg"
                          style="width: 25px; height: 25px"
                      />
                      <img
                          v-else
                          style="width: 25px; height: 25px"
                          src="@/assets/icons/female.svg"
                      />
                      <a>
                          <ruby class="info-cell__content ml-2">
                              <rt class="text-no-wrap" style="font-size: 10px">
                                  {{ item.patient_info.patient_name_katakana }}
                              </rt>
                              {{ item.patient_info.patient_name }}
                          </ruby>
                      </a>
                      <div
                          v-if="item.patient_info.is_name_duplicated === true"
                          class="same-name-field"
                      >
                          <img src="@/assets/icons/important_triangle.svg" />
                          <span>同姓</span>
                      </div>
                      <span style="margin: 0">
                          {{ item.patient_info.birthday }}
                          ({{ moment().diff(item.patient_info.birthday, 'years', false) }}) 
                      </span>
                  </div>
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
            <v-btn color="primary" class="mr-3">参加者一覧印刷</v-btn>
            <v-btn color="primary" class="mr-5">食事一覧印刷</v-btn>
        </div>
      </div>
    </div>
</template>
  

<style lang="scss" scoped> 
 .table-parent {
    
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
      align-items: center;
  
      .same-name-field {
          color: red;
          font-size: 80%;
          display: inline-block;
          width: 80%;
          text-align: left;
      }
  }
</style>