<template>
  <div class="task-table">
    <!--bloking-karte  -->
    <v-data-table
        dense
        :headers="header"
        :items="dummyItems"
        hide-default-header
        hide-default-footer
        :page.sync="page"
        @page-count="pageCount = $event"
    >
        <!-- header -->
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
        <!-- items -->
            <!-- deadLine-期限 -->
        <template #[`item.deadLine`]="{ item }">
            <div class="centered-cell">
                {{ item.deadLine }}
            </div>
        </template>

        <!-- patient-info-患者情報 -->
        <template #[`item.patientInfo`]="{ item }">
            <!-- trong the a ta can viet nhu sau de co the click vao bang va hien ra popup moi <a href="#" @click.prevent.stop="clickRow"> -->
            <a href="#">
                <div class="patient-info">
                    <p class="patient-age">{{ item.patient_age }}</p>
                    <a class="info-cell" href="#">
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
            </a>
        </template>
        
        <!-- task-タスク -->
        <template #[`item.task`]="{ item }">
            <div class="centered-cell"> 
                {{ item.task }}
            </div>
        </template>

        <!-- type-分類 -->
        <template #[`item.type`]="{ item }">
            <div class="centered-cell"> 
                {{ item.type }}
            </div>
        </template>

        <!-- content-内容 -->
        <template #[`item.content`]="{ item }">
            <div class="centered-cell"> 
                {{ item.content }}
            </div>
        </template>

        <!-- status-ステータス -->
        <template #[`item.status`]="{ item}">
            <div class="centered-cell"> 
                {{ item.status }}
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

<script lang="ts">
import { defineComponent, ref } from 'vue';
import moment from 'moment'

// type HeaderCell = {
//     text: string
//     value: string
//     width?: string | number
//     sortable: boolean
// }

export default defineComponent({
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
                    patient_age: '42',
                    patient_name: '患者　花子',
                    patient_name_katakana: 'カンジャ　ハナコ',
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
                    patient_age: '42',
                    patient_name: '患者　花子',
                    patient_name_katakana: 'カンジャ　ハナコ',
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
                    patient_age: '42',
                    patient_name: '患者　花子',
                    patient_name_katakana: 'カンジャ　ハナコ',
                    patient_gender: 1,
                },
                task: 'ETCセット',
                type: 'タスク',
                content: '患者への説明',
                status: '未着手',
            },
            {},
            {}, 
            {},
            {}, 
        ]
        

        const page = ref(1)
        const pageCount = ref(0)
        const totalCount = dummyItems.length

        // const clickRow = () => {
        // const url = '/karte?patient_uuid=16e3d8eb-d4d7-11ec-8902-0a7e192b49f1'
        // // window.open(url)
        // modalBlockingKarte.handle.show()
        // }


        return {
            page,
            pageCount,
            totalCount,
            dummyItems,
            moment,
            // header,
            // clickRow,
        }
    }
})
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
}
.patient-info {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>