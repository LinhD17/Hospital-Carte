<template>
    <div class="pa-2">
        <!-- <div class="c-data-table v-data-table--fixed-header theme--light">
            <div class="v-data-table__wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>診断書</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="v-data-table__empty-wrapper">
                            <td colspan="3">
                                データはありません。
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>  -->

        <div class="template-list">
            <div class="mr-2 mb-10">
                <v-data-table-virtual
                    hide-default-footer
                    :headers="headers"
                    :items="dummyItems"
                >
                    <template v-slot:item.document_name="{ item }"> 
                        <div class="d-flex u-ml-10">
                            {{ item.raw.document_name }}
                            <div class="d-flex ml-auto">
                                <v-btn 
                                    variant="outlined"
                                    rounded
                                    color="#1ea0dc" 
                                    @click="goEdit(item.document_uuid)" 
                                    class="bt-basic h-small mr-3 px-6"
                                >
                                     編集 
                                </v-btn>
                                <v-btn 
                                    variant="outlined"
                                    rounded
                                    color="red" 
                                    @click="openModal(item.document_uuid)" 
                                    class="bt-basic h-small px-6"
                                > 
                                    削除 
                                </v-btn>
                            </div>
                        </div>
                    </template>
                </v-data-table-virtual>
            </div>
        </div>

        <div class="template-list">
            <div class="mr-2 mb-10">
                <v-data-table-virtual
                    hide-default-footer
                    :headers="headers1"
                    :items="dummyItems1"
                >
                    <template v-slot:item.document_name_1="{ item }"> 
                        <div class="d-flex u-ml-10">
                            {{ item.raw.document_name_1 }}
                            <div class="d-flex ml-auto">
                                <v-btn 
                                    variant="outlined"
                                    rounded
                                    color="#1ea0dc" 
                                    @click="goEdit(item.document_uuid)" 
                                    class="bt-basic h-small mr-3 px-6"
                                >
                                     編集 
                                </v-btn>
                                <v-btn 
                                    variant="outlined"
                                    rounded
                                    color="red" 
                                    @click="openModal(item.document_uuid)" 
                                    class="bt-basic h-small px-6"
                                > 
                                    削除 
                                </v-btn>
                            </div>
                        </div>
                    </template>
                </v-data-table-virtual>
            </div>
        </div>

        <div class="table-footer text-center pt-2">
            <div style="margin: 0 0 0 auto;">
                <v-btn 
                    rounded
                    style="background-color: #1ea0dc; color: #ffffff"
                    class="mr-3 px-8"
                > 
                    新規登録 
                </v-btn>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
        return {
            headers: [
                { title: '治療計画書', key: 'document_name', sortable: false, align: 'center' },
            ],
            dummyItems: [
                {
                    document_name: '01.入院診療計画書_(厚)別紙2',
                },
                {
                    document_name: '02.医療保護入院者の入院届_(精法1)様式13_1',
                },
                {
                    document_name: '05.医療保護入院者の定期病状報告書_(精法1)様式19_1',
                },
            ],

            headers1: [
                { title: 'abc', key: 'document_name_1', sortable: false, align: 'center' },
            ],
            dummyItems1: [
                {
                    document_name_1: '褥瘡対策に関する診療計画書',
                },
                {
                    document_name_1: '04.褥瘡対策に関する評価(DESIGN-R)_(厚)別紙別紙46',
                },
                {
                    document_name_1: '04.褥瘡対策に関する評価(DESIGN-R)_(厚)別紙別紙46',
                },
            ],
        }
        },
    }
</script>
    

<style lang="scss" scoped>
.v-data-table {
    padding: 8px 12px;
    &::v-deep .v-data-table {
        table > tbody > tr > td {
            height: auto;
            padding: 5px 10px;
            vertical-align: middle !important;
            background-color: #ffffff;
            > .u-ml-10 {
                display: flex;
                align-items: center;
                margin: 0;
            }
        }
    }

    &::v-deep .v-data-table-header {
        th {
            position: relative;
            height: auto;
            padding: 5px 10px !important;
            font-size: 14px !important;
            font-weight: bold;
            line-height: 1.1;
            color: #000 !important;

            &::before {
                content: '';
                display: block;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                left: 0;
                width: 4px;
                height: 14px;
                background-color: #1ea0dc;
            }
        }
    }
}
.table-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: #ffffff;
  filter: drop-shadow(0 -3px 3px #e6e6e6);
}

.template-list {
  overflow-y: auto;
}
</style>