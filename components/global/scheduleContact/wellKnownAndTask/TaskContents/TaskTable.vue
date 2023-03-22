<template>
  <div>
    <v-data-table
        dense
        :headers="header"
        :items="dummyItems"
        hide-default-header
        hide-default-footer
        :page.sync="page"
        class="task-table"
        @page-count="pageCount = $event"
    >
        <!-- header -->
        <template>

        </template>
        <!-- items -->
            <!-- deadLine -->
        <template #[`item.deadLine`]="{}">

        </template>

            <!-- patient-info -->
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
        
            <!-- task -->
        <template #[`item.task`]="{}">

        </template>

            <!-- type -->
        <template #[`item.type`]="{}">

        </template>

            <!-- content -->
        <template #[`item.content`]="{}">

        </template>

            <!-- status -->
        <template #[`item.status`]="{}">

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

    setup() {
        // const header: HeaderCell[] = [
        //     { text: '期限', value: 'deadLine', sortable: false },//ok
        //     { text: '患者情報', value: 'patientInfo', sortable: false }, //ok 
        //     { text: 'タスク', value: 'task', sortable: false },//ok
        //     { text: '分類', value: 'type', sortable: false }, //ok
        //     { text: '内容', value: 'content', sortable: false }, //ok
        //     { text: 'ステータス', value: 'status', sortable: false }, //ok
        // ]

        const dummyItems = [
            {
                deadLine: '2022年06月29日 00時00分00秒',
                patientInfo: {
                    patient_no: '111111',
                    patient_name: 'テスト患者',
                    patient_name_katakana: 'テストカンジャ',
                    patient_gender: 1,
                },
                task: 'ETCセット',
                type: 'タスク',
                content: '患者への説明',
                status: '未着手',

            },
            {
                deadLine: '2022年06月29日 00時00分00秒',
                patientInfo: {
                    patient_no: '111111',
                    patient_name: 'テスト患者',
                    patient_name_katakana: 'テストカンジャ',
                    patient_gender: 1,
                },
                task: 'ETCセット',
                type: 'タスク',
                content: '患者への説明',
                status: '未着手',

            },
            {
                deadLine: '2022年06月29日 00時00分00秒',
                patientInfo: {
                    patient_no: '111111',
                    patient_name: 'テスト患者',
                    patient_name_katakana: 'テストカンジャ',
                    patient_gender: 1,
                },
                task: 'ETCセット',
                type: 'タスク',
                content: '患者への説明',
                status: '未着手',

            },
            {

            },
            {

            }, 
            {

            },
            {

            }, 
        ]
        

        // const page = ref(1)
        // const pageCount = ref(0)
        const totalCount = dummyItems.length

        return {
            // page,
            // pageCount,
            totalCount,
            dummyItems,
        }
    }
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
    bottom: 0;
    padding: 5px 0;
    justify-content: center;
    align-items: center;
    z-index: 100;
}
</style>