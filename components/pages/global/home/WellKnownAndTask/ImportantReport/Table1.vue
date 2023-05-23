<script>
    export default {
        data () {
            return {
                headers: [
                    { title: '記事種類', align: 'center', sortable: false, value: 'articleType' },
                    { title: '更新日時', align: 'center', sortable: false, value: 'updateDateTime' },
                    { title: '患者情報', align: 'center', sortable: false, value: 'patientInfo' },
                    { title: '報告内容', align: 'center', sortable: false, value: 'contentsReport' },
                    { title: '報告者', align: 'center', sortable: false, value: 'reporter' },
                    { title: '確認', align: 'center', sortable: false, value: 'confirmation' },
                ],
                desserts: [
                    {
                        articleType: 'abcde',
                        updateDateTime: '2023年03月22日 13:24',
                        patientInfo: {
                            patient_no: '111111',
                            patient_name: 'テスト患者',
                            patient_name_katakana: 'テストカンジャ',
                            patient_gender: 1,
                        },
                        contentResport: 'aaaaaa',
                        reporter: '保険指定医テスト１０',

                    },
                    {
                        articleType: 'abcde',
                        updateDateTime: '2023年03月22日 13:24',
                        patientInfo: {
                            patient_no: '111111',
                            patient_name: 'テスト患者',
                            patient_name_katakana: 'テストカンジャ',
                            patient_gender: 1,
                        },
                        contentResport: 'aaaaaa',
                        reporter: '保険指定医テスト１０',

                    },
                    {
                        articleType: 'abcde',
                        updateDateTime: '2023年03月22日 13:24',
                        patientInfo: {
                            patient_no: '111111',
                            patient_name: 'テスト患者',
                            patient_name_katakana: 'テストカンジャ',
                            patient_gender: 1,
                        },
                        contentResport: 'aaaaaa',
                        reporter: '保険指定医テスト１０',

                    },
                    {
                        articleType: 'abcde',
                        updateDateTime: '2023年03月22日 13:24',
                        patientInfo: {
                            patient_no: '111111',
                            patient_name: 'テスト患者',
                            patient_name_katakana: 'テストカンジャ',
                            patient_gender: 1,
                        },
                        contentResport: 'aaaaaa',
                        reporter: '保険指定医テスト１０',

                    },
                ],
            }
        },
    }
</script>
<template>
    <div class="task-table">
        <v-data-table
        :headers="headers"
        :items="desserts"
        class="elevation-1"
        :page.sync="page"
        @page-count="pageCount = $event"
        >
             <!-- 患者情報 -->
             <template #[`item.patientInfo`]="{ item }">
                <div class="patient-info">
                    <p class="patient-no">{{ item.patient_no }}</p>

                    <!-- <a
                        class="info-cell"
                        href="#"
                        @click.prevent.stop="clickPatient(item)"
                    >
                        <img
                        v-if="item.patient_gender == 1"
                        src="@/assets/icons/man.svg"
                        alt="icon person"
                        />
                        <img v-else src="@/assets/icons/woman.svg" alt="icon person" />
                        <ruby>
                        {{ item.patient_name }}
                        <rt>{{ item.patient_name_katakana }}</rt>
                        </ruby>
                    </a> -->
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
</style>