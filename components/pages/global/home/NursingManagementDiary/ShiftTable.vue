<template>
    <div class="table-wrapper mt-6 ml-4">
        <div class="table-title">深夜・日勤・準夜</div>
        <!-- cần cho vòng lặp chạy để có được 2 bảng ở đây -->
        <div class="d-flex">
            <v-data-table-virtual
                :headers="header1s"
                :items="dummyItems1"
                class="elevation-1 mr-5"
            >
            </v-data-table-virtual>
            <v-data-table-virtual
                :headers="header2s"
                :items="dummyItems2"
                class="elevation-1"
            >
            </v-data-table-virtual>
        </div>
    </div>
</template>
<script lang="ts">
    import moment from 'moment'
    export default {
        data () {
            return {
                header1s: [
                    {title: '1病名', key:'ward', align:'center', sortable: false},
                    {title: '深夜', key: 'midnight',align: 'center', sortable: false},
                    {title: '日勤', key: 'dayShift',align: 'center', sortable: false},
                    {title: '準夜', key: 'semiNight',align: 'center', sortable: false},

                ],
                header2s: [
                    {title: '2病名', key:'ward', align:'center', sortable: false},
                    {title: '深夜', key: 'midnight',align: 'center', sortable: false},
                    {title: '日勤', key: 'dayShift',align: 'center', sortable: false},
                    {title: '準夜', key: 'semiNight',align: 'center', sortable: false},

                ],
                dummyItems1: [
                    {
                        ward: '看護師',
                        midnight: "30人", 
                        dayShift: "16人", 
                        semiNight: "16人",
                    }, 
                    {
                        ward: '准看護師',
                        midnight: "30人", 
                        dayShift: "16人", 
                        semiNight: "16人",
                    }, 
                    {
                        ward: '補助',
                        midnight: "30人", 
                        dayShift: "16人", 
                        semiNight: "16人",
                    }, 
                ],
                dummyItems2: [
                    {
                        ward: '看護師',
                        midnight: "40人", 
                        dayShift: "26人", 
                        semiNight: "26人",
                    }, 
                    {
                        ward: '准看護師',
                        midnight: "40人", 
                        dayShift: "26人", 
                        semiNight: "26人",
                    }, 
                    {
                        ward: '補助',
                        midnight: "30人", 
                        dayShift: "26人", 
                        semiNight: "26人",
                    }, 
                ],
            }
        },
    }
</script>

<style lang="scss" scoped>
    .table-wrapper :deep(.v-data-table > .v-data-table__wrapper > table){
        width: auto;
        background-color: #fff;
    }

    .table-wrapper :deep(.v-data-table__wrapper ) {
        background-color: #f0f0f0;
    }

    .table-wrapper .table-title {
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 10px;
        display: flex;
        align-items: center;

        &:before {
        content: '';
        margin-right: 6px;
        display: inline-block;
        width: 4px;
        height: 16px;
        background-color: #1ea0dc;
        color: #1ea0dc;
        }
    }
</style>