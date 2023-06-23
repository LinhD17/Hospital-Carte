<template>
    <div class="task-table">
        <v-data-table-virtual
        :headers="headers"
        :items="dummyItems"
        height="200"
    >
        <!-- <template>
            <NuxtLink to="https://nuxtjs.org">
                Nuxt website
            </NuxtLink>
        </template> -->

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
                    { title: '更新日時', key: 'updated_at', align: 'center', sortable: false },
                    { title: '掲示先部署', key: 'to_departments', align: 'center', sortable: false },
                    { title: '投稿者', key: 'staff_name', align: 'center', sortable: false },
                    { title: '件名', key: 'title', align: 'center', sortable: false },
                    { title: '添付', key: 'has_attachments', align: 'center', sortable: false },
                    { title: 'メンション', key: 'has_mentions', align: 'center', sortable: false },
                ],
                dummyItems: [        
                    {
                        updated_at: '2023年03月22日 00時00分00秒',
                        to_departments: '看護部　診察技術部',
                        staff_name: '保険指定医テスト１０',
                        title: '医療安全委員からのお知らせ',
                        has_attachments: '',
                        has_mentions: '',
                    },
                    {
                        updated_at: '2023年03月22日 00時00分00秒',
                        to_departments: '看護部　診察技術部',
                        staff_name: '保険指定医テスト１０',
                        title: '医療安全委員からのお知らせ',
                        has_attachments: '',
                        has_mentions: '',
                    },
                    {
                        updated_at: '2023年03月22日 00時00分00秒',
                        to_departments: '看護部　診察技術部',
                        staff_name: '保険指定医テスト１０',
                        title: '医療安全委員からのお知らせ',
                        has_attachments: '',
                        has_mentions: '',
                    },
                    {
                        updated_at: '2023年03月22日 00時00分00秒',
                        to_departments: '看護部　診察技術部',
                        staff_name: '保険指定医テスト１０',
                        title: '医療安全委員からのお知らせ',
                        has_attachments: '',
                        has_mentions: '',
                    },
                ],
            }
        },
    }
</script>

<style lang="scss" scoped> 
    .task-table {
        border: 0 !important;
        white-space: nowrap;
        margin: 0 10px;
    
        a {
            margin-top: 0;
            text-decoration: none;
            color: #333333;
        }
    
        :deep(.td) {
            height: 36px !important;
            font-size: 12px !important;
            padding: 0 6px !important;
            text-align: center !important;
            cursor: pointer !important;
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
</style>