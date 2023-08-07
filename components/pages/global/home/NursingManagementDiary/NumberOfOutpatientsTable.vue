<template>
    <div class="table-wrapper mt-6 ml-4">
        <div class="table-title">外来患者数</div>
        <v-data-table-virtual
            :headers="headers"
            :items="dummyItems"
            class="elevation-1"
        >

        </v-data-table-virtual>
    </div>
</template>
<script lang="ts">
    export default {
        data () {
            return {
                headers: [
                    {title: '受付人数', key: 'receptionists',align: 'center', sortable: false, width: 80},
                    {title: '往診訪問診療', key: 'homeVisitMedicalTreatment',align: 'center', sortable: false, width: 80},
                    {title: '訪問看護', key: 'homeVisitNursing',align: 'center', sortable: false, width:80 },
                ],
                dummyItems: [
                    {
                        receptionists: "10人", 
                        homeVisitMedicalTreatment: "30人", 
                        homeVisitNursing: "16人",
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