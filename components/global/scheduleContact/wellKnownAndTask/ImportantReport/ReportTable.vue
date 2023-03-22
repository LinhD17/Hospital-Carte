<!-- phan bang thong bao  -->
<template>
    <div class="table-parent ml-3 mr-3">
        <v-data-table
            dense
            :headers="header"
            :ites="dummyItems"
            hide-default-header
            hide-default-footer
            class="report-table"
            @page-count="pageCount = $event"
        >
            <!--記事種類-->
            <template #[`item.articleType`]="{}">

            </template>
            <!-- 更新日時 -->
            <template #[`item.updateDateTime`]="{}">

            </template>
            <!-- 患者情報 -->
            <template #[`item.patientInfo`]="{}">
                <div class="patient-info">
                    <p class="patient-no">{{ item.patient_no }}</p>

                    <a
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
                    </a>
                </div>
            </template>
            <!-- 報告内容 -->
            <template #[`item.contentsReport`]="{}">

            </template>
            <!-- 報告者 -->
            <template #[`item.reporter`]="{}">

            </template>
            <!-- 確認 -->
            <template #[`item.confirmation`]="{}">

            </template>
        </v-data-table>
        <!-- nut dem so thu tu trang o cuoi bang -->
        <div class="table-footer text-center pt-2">
            <span>全 {{totalCount}} 件</span>
            <v-pagination 
            class="ml-4"
            v-model="page"
            circle
            :length="pageCount"
            :total-visible="pageCount"
            ></v-pagination>
        </div>
    </div>

</template>

<script lang="ts">
// import { ref } from '@nuxtjs/composition-api'
// type HeaderCell = {
//     text: String
//     value: String 
//     width?: string | number
//     sortable: boolean
// }
export default {
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
        
        // const page = ref(1)

        // const pageCount = ref(0)

        //     const clickPatient = (item: any) => {
                    // const url = '/karte?patient_uuid=' + item.patient_uuid
                    // window.open(url)
                // }

        const totalCount = dummyItems.length

        return {
            // page, 
            // pageCount,
            totalCount, 
            dummyItems,
            // header,
            // clickPatient,
        }
    }

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

//   ::v-deep td {
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
    justify-content: center;
    align-items: center;
    top: 0;
    padding: 10px 0;
    background-color: #ffffff;
    z-index: 100;
    //filter: drop-shadow(0 -3px 3px #e6e6e6);
}
</style>