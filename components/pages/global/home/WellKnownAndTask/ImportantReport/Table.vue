<template>
    <div>
        <v-data-table-virtual
        fixed-header
        fixed-footer
        :headers="headers"
        :items="dummyDatas"
        class="report-table"
        height="300"
        >

            <!-- patient-info -->
            <template v-slot:item.patientInfo = "{ item }">
                <div class="d-flex" style="justify-content: space-between">
                    <div class="info-cell">
                        <span class="mr-2">{{ item.raw.patientInfo.patient_no }}</span>
                        <img
                                v-if="item.raw.patientInfo.patient_gender == 1"
                                src="@/assets/icon/man.svg"
                                style="width: 25px; height: 25px"
                                alt="icon person"
                            />
                        <img
                            v-else
                            style="width: 25px; height: 25px"
                            src="@/assets/icon/female.svg"
                        />
                        <a>
                            <ruby class="info-cell__content ml-2" style="min-width: 80px">
                                <rt class="text-no-wrap" style="font-size: 10px">
                                    {{ item.raw.patientInfo.patient_name_katakana }}
                                </rt>
                                <!-- <nuxt-link
                                    :to="`/karte?patient_uuid=${item.raw.patient_name.patient_uuid}`"
                                    target="_blank"
                                >
                                    {{ item.raw.patient_info.patient_name }}
                                </nuxt-link> -->
                                {{ item.raw.patientInfo.patient_name }}
                            </ruby>
                        </a>
                    </div>
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
        data () {
            return {
                headers: [
                    { title: '記事種類', align: 'center', key: 'articleType', sortable: true },
                    { title: '更新日時', align: 'center', key: 'updateDateTime', sortable: true },
                    { title: '患者情報', align: 'center', key: 'patientInfo', sortable: true },
                    { title: '報告内容', align: 'center', key: 'contentsReport', sortable: true },
                    { title: '報告者', align: 'center', key: 'reporter', sortable: true },
                    { title: '確認', align: 'center', key: 'confirmation', sortable: true },
                ],
                dummyDatas: [
                    {
                        articleType: 'abcde',
                        updateDateTime: '2023年03月22日 13:24',
                        patientInfo: {
                            patient_no: '1005',
                            patient_name: 'テスト患者',
                            patient_name_katakana: 'テストカンジャ',
                            patient_gender: 2,
                        },
                        contentResport: 'aaaaaa',
                        reporter: '保険指定医テスト１０',
                    },
                    {
                        articleType: 'abcde',
                        updateDateTime: '2023年03月22日 13:24',
                        patientInfo: {
                            patient_no: '1005',
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
                            patient_no: '1005',
                            patient_name: 'テスト患者',
                            patient_name_katakana: 'テストカンジャ',
                            patient_gender: 2,
                        },
                        contentResport: 'aaaaaa',
                        reporter: '保険指定医テスト１０',
                    },
                    {
                        articleType: 'abcde',
                        updateDateTime: '2023年03月22日 13:24',
                        patientInfo: {
                            patient_no: '1005',
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
                            patient_no: '1005',
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
                            patient_no: '1005',
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

<style lang="scss" scoped> 
  .report-table {
      border: 0 !important;
      white-space: nowrap;

  
      a {
      margin-top: 0;
      text-decoration: none;
      color: #333333;
    }
  
    :deep(td) {
      text-align: center !important;
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
  .centered-cell {
    text-align: center;
}
</style>