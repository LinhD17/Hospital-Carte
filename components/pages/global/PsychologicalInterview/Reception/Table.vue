<template>
  <div class="table-content">
    <v-data-table-virtual
      v-model="selected"
      :headers="headers"
      :items="dummyItems"
      show-select
      class="elevation-1"
    >
      <!-- status -->
      <template v-slot:item.status="{ item }"> 
        {{ item.raw.status.name }}
      </template>

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

      <!-- lengthening-->
      <template v-slot:item.lengthening= "{ item }">
          <span>{{ item.raw.lengthening.sum }}回</span>
      </template>

      <!-- group -->
      <template v-slot:item.group= "{  }">
        <div style="width: 160px">
            <v-select 
              dense 
              clearable 
              variant="solo" 
              hide-details
              style="background-color: white; height: 30" 
              placeholder="グループを選択" 
              :items="['グループA', 'グループB', 'グループC']"
            />
        </div>
      </template>

      <!-- consultation -->
      <template v-slot:item.consultation="{ item }">
        <div class="d-flex">
          <div 
            v-for="c in item.raw.consultation"
            :key="c"
          >
            <v-chip style="background-color: red; color: white" small>{{ c }}</v-chip>
          </div>
        </div>
      </template>

      <!-- memo  -->
      <template v-slot:item.memo="{ item }">
        <div class="d-flex justify-space-between">
          <span>{{ item.raw.memo }}</span>
          <div>
            <v-icon small class="ml-1"> mdi-pencil </v-icon>
            <v-icon v-if="item.raw.memo" small class="ml-1">mdi-delete </v-icon>
          </div>
        </div> 
      </template>
      <!-- cancel -->
      <template v-slot:item.cancellation="{ item }">
        <div v-if="item.raw.cancellation">
          <v-btn rounded depressed style="background-color: #bdbdbd">
            {{ item.raw.cancellation }}
          </v-btn>
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
      <div style="position: absolute; right: 0">
        <v-btn rounded class="mr-3" style="background-color: red; color: #ffffff">一括不参加</v-btn>
        <v-btn rounded class="mr-3" style="background-color: #1ea0dc; color: #ffffff">参加者一覧印刷</v-btn>
        <v-btn rounded class="mr-5" style="background-color: #1ea0dc; color: #ffffff">食事一覧印刷</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      data () {
        return {
          selected: [],
          headers: [
            //{ title: '不参加選択', key: 'check', align:'center', sortable: false},
            { title: '状態', key: 'status', align:'center', sortable: false, width: 80},
            { title: '患者番号', key: 'patient_no', align:'center', sortable: false, width: 100},
            { title: '患者情報', key: 'patient_info', align:'center', sortable: false, width: 320},
            { title: '受付時間', key: 'recept_time', align:'center', sortable: false, width: 100},
            { title: '合計', key: 'lengthening', align:'center', sortable: false, width: 100},
            { title: 'グループ', key: 'group', align:'center', sortable: false, width: 120},
            { title: '診療内容', key: 'consultation', align:'center', sortable: false, width: 200},
            { title: '主治医', key: 'main_doctor', align:'center', sortable: false, width: 80},
            { title: '受付メモ', key: 'memo', align:'center', sortable: false},
            { title: '', key: 'cancellation', align:'center', sortable: false},
          ],
          dummyItems: [
            {
              status: {
                id:1,
                name: '記録済'
              },
              patient_no: '9999999',
              patient_info: {
                name: 'テスト患者',
                name_kana: 'テストカンジャ',
                birthday: '1993年04月08日',
                gender: 1,
                isSameName: true,
              },
              recept_time: '8:30',
              meals: '１食 (昼)',
              lengthening: {
                flag: '//',
                sum: '1',
              },
              total: 1,
              // program: [
              //   {
              //     name: 'カラオケ',
              //   },
              //   {
              //     name: '園芸',
              //   },
              // ],
              consultation: ['診察', '検査', '処方', '画像', '栄養'],
              main_doctor: '医師太郎',
              memo: '診察希望',
              cancellation: '取消'
            },
            {
              status: {
                id:1,
                name: '確定済'
              },
              patient_no: '9999999',
              patient_info: {
                name: 'テスト患者',
                name_kana: 'テストカンジャ',
                birthday: '1993年04月07日',
                gender: 0,
                isSameName: true,
              },
              recept_time: '8:30',
              meals: '１食 (昼)',
              lengthening: {
                flag: '//',
                sum: 2,
              },
              total: 1,
              // program: [
              //   {
              //     name: '未指定'
              //   },
              //   {
              //     name: '園芸',
              //   },
              // ],
              consultation: ['診察', '検査', ],
              main_doctor: '医師太郎',
              memo: '診察希望',
            },
            {
              status: {
                id:1,
                name: '不参加'
              },
              patient_no: '9999999',
              patient_info: {
                name: 'テスト患者',
                name_kana: 'テストカンジャ',
                birthday: '1993年01月22日',
                gender: 1,
                isSameName: true,
              },
              recept_time: '8:30',
              meals: '１食 (昼)',
              lengthening: {
                flag: '//',
                sum: '2',
              },
              total: 1,
              // program: [
              //   {
              //     name: '未指定'
              //   },
              //   {
              //     name: '園芸',
              //   },
              // ],
              consultation: ['診察', '画像', '栄養'],
              main_doctor: '医師太郎',
              memo: '診察希望',
              cancellation: '取消'
            },
            {
              status: {
                id:1,
                name: '記録済'
              },
              patient_no: '9999999',
              patient_info: {
                name: 'テスト患者',
                name_kana: 'テストカンジャ',
                birthday: '1993年04月08日',
                gender: 1,
                isSameName: true,
              },
              recept_time: '8:30',
              meals: '１食 (昼)',
              lengthening: {
                flag: '//',
                sum: '1',
              },
              total: 1,
              // program: [
              //   {
              //     name: 'カラオケ',
              //   },
              //   {
              //     name: '園芸',
              //   },
              // ],
              consultation: ['診察', '検査', '処方', '画像', '栄養'],
              main_doctor: '医師太郎',
              memo: '診察希望',
            },
            {
              status: {
                id:1,
                name: '記録済'
              },
              patient_no: '9999999',
              patient_info: {
                name: 'テスト患者',
                name_kana: 'テストカンジャ',
                birthday: '1993年04月08日',
                gender: 1,
                isSameName: true,
              },
              recept_time: '8:30',
              meals: '１食 (昼)',
              lengthening: {
                flag: '//',
                sum: '1',
              },
              total: 1,
              // program: [
              //   {
              //     name: 'カラオケ',
              //   },
              //   {
              //     name: '園芸',
              //   },
              // ],
              consultation: ['診察', '検査', '処方', '画像', '栄養'],
              main_doctor: '医師太郎',
              memo: '診察希望',
            },
            {
              status: {
                id:1,
                name: '記録済'
              },
              patient_no: '9999999',
              patient_info: {
                name: 'テスト患者',
                name_kana: 'テストカンジャ',
                birthday: '1993年04月08日',
                gender: 1,
                isSameName: true,
              },
              recept_time: '8:30',
              meals: '１食 (昼)',
              lengthening: {
                flag: '//',
                sum: '1',
              },
              total: 1,
              // program: [
              //   {
              //     name: 'カラオケ',
              //   },
              //   {
              //     name: '園芸',
              //   },
              // ],
              consultation: ['診察', '検査', '処方', '画像', '栄養'],
              main_doctor: '医師太郎',
              memo: '診察希望',
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
      position: sticky;
      top: 0;
      padding: 5px 0 !important;
      justify-content: center;
      align-items: center;
      filter: drop-shadow(0 -3px 3px #e6e6e6);
      background-color: #ffffff;
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