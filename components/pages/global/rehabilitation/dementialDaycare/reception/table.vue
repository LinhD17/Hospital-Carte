<template>
  <div class="table-parent ma-3">
    <v-data-table
        :headers="header"
        :items="dummyItems"
        fixed-header
        hide-default-footer
        multi-sort
        @page-count="pageCount = $event"
    > 
      <!-- status -->
      <template #[`item.status`] = " { item } "> 
        {{ item.status.name }}
      </template>
      <!-- check -->
      <template #[`item.check`] = " {  } ">
        <td style="width: 80px">
          <v-btn icon small @click.stop="checkVerifiedAll">
            <v-icon v-if="checkVerifiedAllFlg">mdi-check</v-icon>
            <v-icon v-else>mdi-checkbox-blank-outline</v-icon>
          </v-btn>
        </td>
      </template>
      <!-- patient-info -->
      <template #[`item.patient_info`] = "{ item }">
        <div class="d-flex" style="justify-content: space-between">
          <div class="info-cell">
            <img
              v-if="item.patient_info.gender === 1"
              src="@/assets/icons/man.svg"
              style="width: 27px; height: 27px"
            />
            <img
              v-else
              style="width: 27px; height: 27px"
              src="@/assets/icons/female.svg"
            />
            <a>
              <ruby class="info-cell__content">
                <rt class="text-no-wrap" style="font-size: 10px">
                    {{ item.patient_info.name_kana }}
                </rt>
                {{ item.patient_info.name }}
              </ruby>
            </a>
            <div
                v-if="item.patient_info.isSameName === true"
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
      <!-- event -->
      <template #[`item.event`] = "{ }">
        <div style="width: 80px">
          <v-select
            dense 
            hide-details 
            :items="['DC','DNC','SC']"
          >
          </v-select>
        </div>
      </template>
      <!-- earlyMorning -->
      <template #[`item.earlyMorning`] = "{ item }">
        <v-icon v-if="item.earlyMorning">mdi-check</v-icon>
      </template>

      <!-- lengthening -->
      <template #[`item.lengthening`] = "{ item }">
        <div class="d-flex">
          <div style="width: 33px">
            <v-icon v-if="item.lengthening.flag ">mdi-check</v-icon>
          </div>
           <span>{{ item.lengthening.sum }}回</span>
        </div>
      </template>

      <!-- program -->
      <template #[`item.program`] = "{ item }">
        <div
          v-for="(program, index) in item.program"
          :key="index"
        >
          <a>{{ program.name  }}</a>_
        </div>
      </template>
      <!-- group -->
      <template #[`item.group`] = "{  }">
        <div  style="width: 120px">
          <v-select
          dense 
          hide-details
          :items="['グループA', 'グループB', 'グループC']"
        ></v-select>
        </div>
      </template>
      <!-- consultation -->
      <template #[`item.consultation`]="{ item }">
        <div class="d-flex">
          <div 
            v-for="c in item.consultation"
            :key="c"
          >
            <v-chip color="red" text-color="white" small>{{ c }}</v-chip>
          </div>
        </div>
      </template>
      <!--  memo -->
      <template #[`item.memo`] = "{ item }">
        <div class="d-flex justify-space-between">
          <span>{{ item.memo }}</span>
          <div>
            <v-icon small>mdi-pencil</v-icon>
            <v-icon v-if="item.memo" small>mdi-delete</v-icon>
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

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import moment from 'moment'

export default defineComponent({
  setup() {
    const checkVerifiedAllFlg = ref(false)
    const header = [
        { text: '不参加選択', value: 'check', sortable: false, width: 100},
        { text: '状態', value: 'status', sortable: true},
        { text: '患者番号', value: 'patient_no', sortable: true},
        { text: '患者情報', value: 'patient_info', sortable: true, width:250},
        { text: '受付時間', value: 'recept_time', sortable: false},
        { text: '種目', value: 'event', sortable: false},
        { text: '食数', value: 'meals', sortable: false},
        { text: '早加', value: 'earlyMorning', sortable: false},
        { text: '長減', value: 'lengthening', sortable: false},
        { text: 'プログラム', value: 'program', sortable: false, width: 130},
        { text: 'グループ', value: 'group', sortable: false},
        { text: '診療内容', value: 'consultation', sortable: false},
        { text: '主治医', value: 'main_doctor', sortable: false},
        { text: '受付メモ', value: 'memo', sortable: false},
    ]
    const dummyItems = [
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

    ]
    const page = ref(1)
    const pageCount = ref(0)
    const totalCount = dummyItems.length
    const checkVerifiedAll = () => {
      checkVerifiedAllFlg.value = !checkVerifiedAllFlg.value
    }

    return {
      page, 
      pageCount,
      totalCount,
      moment,
      header,
      dummyItems,
      checkVerifiedAll,
      checkVerifiedAllFlg,

    }
  }
})
</script>
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