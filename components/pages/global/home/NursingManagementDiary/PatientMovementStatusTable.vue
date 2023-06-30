<template>
    <div class="table-content mt-6">
        <div class="table-title">患者移動状況</div>
        <v-data-table-virtual
            :headers="headers"
            :items="dummyItems"
            class="elevation-1"
        >
            <!-- <template v-slot:item="props"> 
                <tr>
                    <td
                        v-for="colItem in header"
                        :key="colItem.value"
                        class="pa-5 text-no-wrap"
                    >

                    </td>
                </tr>
            </template> -->
            <template v-slot:item.hospitalization="{ item }">
                <div class="centered-cell">
                    <div style="min-width: 120px; display: flex;">
                        <div style="text-align: center" class="mr-2">
                            <v-chip
                                v-if="item.raw.hospitalization.colItem !== 'ward'"
                                small
                                style="min-width: 90px; justify-content: center; background-color: #e5b000; color: white"
                            >医療保護</v-chip> 
                            <v-chip
                                v-else
                                small
                                style="min-width: 90px; justify-content: center; background-color: #5ab800; color: white"
                            >任意入院</v-chip>
                            
                        </div>
                        <div class="mt-1">
                            {{ item.raw.hospitalization.hospitalization_type_name }}
                        </div>
                    </div>
                </div>
            </template>
        </v-data-table-virtual>
    </div>
</template>

<script lang="ts">
    import moment from 'moment'
    export default {
        data () {
            return {
                headers: [
                    {title: '病棟', key: 'ward',align: 'center', sortable: false},
                    {title: '入院', key: 'hospitalization',align: 'center', sortable: false},
                    {title: '退院', key: 'discharge',align: 'center', sortable: false },
                    {title: '転入', key: 'movingIn',align: 'center', sortable: false},
                    {title: '転出', key: 'moveOut',align: 'center', sortable: false},
                    {title: '外泊', key: 'sleepover',align: 'center', sortable: false},
                    {title: '外出', key: 'goOut',align: 'center', sortable: false},
                    {title: '帰院',  key: 'returnToHospital',align: 'center', sortable: false},

                    { title: '入院形態', key: 'hospitalization_form', align: 'center', sortable: true },

                ],
                dummyItems: [
                    {
                        ward: "1病棟", 
                        hospitalization: {
                            colItem: "ward", 
                            hospitalization_type_name: "デモ患者　康介"
                        },
                        discharge: {
                            colItem: "ward", 
                            hospitalization_type_name: "デモ患者　花江"
                        }, 
                        movingIn: {
                            colItem: "ward", 
                            hospitalization_type_name: "デモ患者　大輔"
                        },
                        moveOut: {
                            colItem: "ward", 
                            hospitalization_type_name: "デモ患者　三郎"
                        }, 
                        sleepover: {
                            colItem: "ward", 
                            hospitalization_type_name: "デモ患者　京子"
                        }, 
                        goOut: {
                            colItem: "ward", 
                            hospitalization_type_name: "デモ患者　光一"
                        }, 
                        returnToHospital: {
                            colItem: "ward", 
                            hospitalization_type_name: "デモ患者　明"
                        }
                    }, 
                    {
                        ward: "2病棟", 
                        hospitalization: {
                            colItem: "ward1", 
                            hospitalization_type_name: "デモ患者　康介"
                        },
                        discharge: {
                            colItem: "ward", 
                            hospitalization_type_name: "デモ患者　花江"
                        }, 
                        movingIn: {
                            colItem: "ward", 
                            hospitalization_type_name: "デモ患者　大輔"
                        },
                        moveOut: {
                            colItem: "ward", 
                            hospitalization_type_name: "デモ患者　三郎"
                        }, 
                        sleepover: {
                            colItem: "ward", 
                            hospitalization_type_name: "デモ患者　京子"
                        }, 
                        goOut: {
                            colItem: "ward", 
                            hospitalization_type_name: "デモ患者　光一"
                        }, 
                        returnToHospital: {
                            colItem: "ward", 
                            hospitalization_type_name: "デモ患者　明"
                        }
                    }, 
                ],
                hospitalizationColorList: {
                    一般: '#009eac',
                    任意: '#5ab800',
                    医療保護: '#e5b000',
                    措置: '#f55a0c',
                    応急: '#1ea0dc',
                    司法: '#fc3e87',
                    その他: '#853ecf',
                }
            }
        },
    }
</script>
  
<style lang="scss" scoped> 
.table-content {
    border: 0 !important;
    white-space: nowrap;

    a {
    margin-top: 0;
    text-decoration: none;
    color: #1ea0dc;
    }

    .centered-cell {
        text-align: center;
    }

    .table-title {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 10px;
        margin-left: 15px;
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
  
    //   :deep(.td) {
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