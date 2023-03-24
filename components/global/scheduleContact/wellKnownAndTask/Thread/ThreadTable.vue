<template>
    <div class="thread-table">
        <!-- khi click vao hang trong bang se hien ra modal the hien chi tiet noi dung tung hang -->
        <!-- table -->
        <v-data-table
            dense
            :headers="header"
            :items="dummyItems"
            hide-default-footer
            hide-default-header
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
            <!-- updated_at, can chinh sua them vi no co lien quan den time -->
            <template #[`item.updated_at`]="{ item }">
                <div class="centered-cell">
                    {{ item.updated_at }}
                </div>
            </template>
        <!-- has_attachments -->
            <template #[`item.has_attachments`]="{ item }">
                <div class="centered-cell">
                    <v-icon v-if="item.has_attachments">mdi-paperclip</v-icon>
                </div>
            </template>
        <!-- has_mentions -->
            <template #[`item.has_mentions`]="{ item }">
                <div class="centered-cell">
                    <v-icon v-if="item.has_mentions">mdi-at</v-icon>
                </div>
            </template>
        <!-- newCommentCount -->
            <template #[`item.newCommentCount`]="{ item }">
                <div class="centered-cell">
                    {{ item.newCommentCount }}
                </div>
            </template>
            
        <!-- title -->
            <template #[`item.title`]="{ item }">
                <div class="centered-cell">
                    {{ item.title }}
                </div>
            </template>
        <!-- to_departments -->
            <template #[`item.to_departments`]="{ item }">
                <div class="centered-cell">
                    {{ item.to_departments }}
                </div>
            </template>
            <!-- <template #[`item.to_departments`]="{ item }">
                <div class="lefted-cell">
                    <span class="mr-1" v-for="departments in item.to_departments">
                        {{ departments.to_department_name }}
                    </span>
                </div>
            </template> -->


        <!-- detailPathに確認ボタン押したあとの遷移先が入る想定 -->

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
import { defineComponent, ref } from '@nuxtjs/composition-api';
// type HeaderCell = {
//     text: string
//     value: string
//     width?: string| number 
//     sortable: boolean
// }

export default defineComponent({
    setup() {
        // const header: HeaderCell[] = [
        //     { text: '更新日時', value: 'updated_at' },
        //     { text: '掲示先部署', value: 'to_departments' },
        //     { text: '投稿者', value: 'staff_name' },
        //     { text: '件名', value: 'title' },
        //     { text: '添付', value: 'has_attachments' },
        //     { text: 'メンション', value: 'has_mentions' },
        // ]
    
        const dummyItems = [
            {
                updated_at: '2023年03月22日 00時00分00秒',
                to_departments: '看護部　診察技術部',
                staff_name: '保険指定医テスト１０',
                title: '医療安全委員からのお知らせ',
                has_attachments: '',
                has_mentions: '',
            },
            {},
            {},
            {},
            {},
            {},
            {},
        ]

        const page = ref(1)

        const pageCount = ref(0)

        const totalCount = dummyItems.length
        return {
            page,
            pageCount,
            totalCount,
            dummyItems,
            // header,

        }
    }
})
</script>

<style lang="scss" scoped>
.thread-table {
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
</style>