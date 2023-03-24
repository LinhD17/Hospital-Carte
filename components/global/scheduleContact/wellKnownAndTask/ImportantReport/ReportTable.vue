<template>
    <div class="report-table ml-3 mr-3">
        <v-data-table
            dense
            :headers="header"
            :items="dummyItems"
            hide-default-header
            hide-default-footer
            :page.sync="page"
            @page-count="pageCount = $event"
        >
            <!--table-header  -->
            <template #[`header`] = "{ props: {headers} }">
                <thead class="custom-header">
                    <tr class="custom-header">
                        <th v-for="(item, id) in headers" :key="id" class="custom-header">
                            <div class="sort-cell">
                                {{ item.text }}
                            </div>
                        </th>
                    </tr>
                </thead>
            </template>

            <!-- table-items -->
             <!--記事種類-->
             <template #[`item.articleType`]="{ item }">
                <div class="centered-cell">
                    {{ item.articleType }}
                </div>
            </template>
            <!-- 更新日時 -->
            <template #[`item.updateDateTime`]="{ item }">
                <div class="centered-cell">
                    {{ item.updateDateTime }}
                </div>
            </template>
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
            <!-- 報告内容 -->
            <template #[`item.contentsReport`]="{ item }">
                <div class="centered-cell">
                    {{ item.updateDateTime }}
                </div>
            </template>
            <!-- 報告者 -->
            <template #[`item.reporter`]="{ item }">
                <div class="centered-cell">
                    {{ item.reporter }}
                </div>

            </template>
            <!-- 確認 -->
            <template #[`item.confirmation`]="{ item }">
                <div class="centered-cell">
                    {{ item.confirmation }}
                </div>
            </template>
        </v-data-table>
        <!-- dem stt trang o cuoi bang -->
        <div class="table-footer text-center pt-2">
            <span>全 {{totalCount}} 件</span>
            <v-pagination 
            class="ml-4"
            color="primary"
            v-model="page"
            circle
            :length="pageCount"
            :total-visible="pageCount"
            ></v-pagination>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
// type HeaderCell = {
//   text: string
//   value: string
//   width?: string | number
//   sortable: boolean
// }
export default defineComponent({
    setup() {

        // const header: HeaderCell[] = [
        //     { text: '記事種類', value: 'articleType', sortable: false },//ok
        //     { text: '更新日時', value: 'updateDateTime', sortable: false },//ok
        //     { text: '患者情報', value: 'patientInfo', sortable: false }, //ok 
        //     { text: '報告内容', value: 'contentsReport', sortable: false }, //ok
        //     { text: '報告者', value: 'reporter', sortable: false }, //ok
        //     { text: '確認', value: 'confirmation', sortable: false }, //ok
        // ]

        const dummyItems = [
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
        ]

        const page = ref(1)

        const pageCount = ref(0)

        const totalCount = dummyItems.length

        // const clickPatient = (item: any) => {
        //             const url = '/karte?patient_uuid=' + item.patient_uuid
        //             window.open(url)
        //         }

        return {
            page, 
            pageCount,
            totalCount, 
            dummyItems,
            // header,
            // clickPatient,
        }

    }
})
</script>

<style lang="scss" scoped>
.report-table {
    height: 100%;
    border: 0 !important;
    white-space: nowrap;

    a {
    margin-top: 0;
    text-decoration: none;
    color: #333333;
  }

//   ::v-deep td {
//     height: 36px !important;
//     font-size: 12px !important;
//     padding: 0 6px !important;
//     text-align: center !important;
//     cursor: pointer !important;
//   }
}
.custom-header {
    background-color: #e4e4e4 !important;
    font-size: 100% !important;
    text-align: center !important;
}
.sort-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}
.centered-cell {
    text-align: center;
}
.table-footer {
    display: flex;
    position: sticky;
    bottom: 0;
    padding: 5px 0;
    justify-content: center;
    align-items: center;
    z-index: 100;
    height: 50px;
}
</style>