<!-- không phân biệt tiêu đề của cột là gì, cứ có nội dung là 医療保護 => dôi chip màu vàng, 任意入院 => dổi chữ màu xanh   -->
<template>
    <div class="table-content mt-6">
        <div class="table-title">患者移動状況</div>
        <v-data-table-virtual
            :headers="headers"
            :items="dummyItems"
            class="elevation-1"
        >

            <!-- khó sử dụng vòng lặp  -->
            <!-- ở đây ta vẫn đang tách riếng từng cột để duyệt giá trị và chưa sử dụng được vòng lặp for để duyệt list -->
            <template v-slot:item.hospitalization="{ item }">
                <div class="centered-cell">
                    <div style="min-width: 120px; display: flex;">
                        <div style="text-align: center" class="mr-2">
                            <div v-if="item.raw.hospitalization.colItem == 'ward'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #5ab800; color: white">医療保護</v-chip>
                            </div>
                            <div v-if="item.raw.hospitalization.colItem == 'ward1'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #e5b000; color: white">医療保護</v-chip>
                            </div>
                            <div v-if="item.raw.hospitalization.colItem == 'ward2'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #fc3e87; color: white">司法入院</v-chip>
                            </div>
                            <div v-if="item.raw.hospitalization.colItem == 'ward3'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #853ecf; color: white">その他</v-chip>
                            </div>
                            <div v-if="item.raw.hospitalization.colItem == 'ward4'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #019eac; color: white">一般入院</v-chip>
                            </div>
                            <div v-if="item.raw.hospitalization.colItem == 'ward5'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #f55a0b; color: white">措置入院</v-chip>
                            </div>
                            <div v-if="item.raw.hospitalization.colItem == 'ward6'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #1ca0dc; color: white"> 応急入院</v-chip>
                            </div>
                        <!--<v-chip
                                v-if="item.raw.hospitalization.colItem !== 'ward'"
                                small
                                style="min-width: 90px; justify-content: center; background-color: #e5b000; color: white"
                            >医療保護
                            </v-chip> 
                            <v-chip
                                v-else
                                small
                                style="min-width: 90px; justify-content: center; background-color: #5ab800; color: white"
                            >任意入院
                            </v-chip> -->
                            
                        </div>
                        <div class="mt-1">
                            {{ item.raw.hospitalization.hospitalization_type_name }}
                        </div>
                    </div>
                </div>
            </template>
            <template v-slot:item.discharge="{ item }">
                <div class="centered-cell">
                    <div style="min-width: 120px; display: flex;">
                        <div style="text-align: center" class="mr-2">
                            <div v-if="item.raw.discharge.colItem == 'ward'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #5ab800; color: white">医療保護</v-chip>
                            </div>
                            <div v-if="item.raw.discharge.colItem == 'ward1'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #e5b000; color: white">医療保護</v-chip>
                            </div>
                            <div v-if="item.raw.discharge.colItem == 'ward2'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #fc3e87; color: white">司法入院</v-chip>
                            </div>
                            <div v-if="item.raw.discharge.colItem == 'ward3'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #853ecf; color: white">その他</v-chip>
                            </div>
                            <div v-if="item.raw.discharge.colItem == 'ward4'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #019eac; color: white">一般入院</v-chip>
                            </div>
                            <div v-if="item.raw.discharge.colItem == 'ward5'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #f55a0b; color: white">措置入院</v-chip>
                            </div>
                            <div v-if="item.raw.discharge.colItem == 'ward6'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #1ca0dc; color: white"> 応急入院</v-chip>
                            </div>
                        </div>
                        <div class="mt-1">
                            {{ item.raw.discharge.discharge_type_name }}
                        </div>
                    </div>
                </div>
            </template>
            <template v-slot:item.movingIn="{ item }">
                <div class="centered-cell">
                    <div style="min-width: 120px; display: flex;">
                        <div style="text-align: center" class="mr-2">
                            <div v-if="item.raw.movingIn.colItem == 'ward'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #5ab800; color: white">医療保護</v-chip>
                            </div>
                            <div v-if="item.raw.movingIn.colItem == 'ward1'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #e5b000; color: white">医療保護</v-chip>
                            </div>
                            <div v-if="item.raw.movingIn.colItem == 'ward2'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #fc3e87; color: white">司法入院</v-chip>
                            </div>
                            <div v-if="item.raw.movingIn.colItem == 'ward3'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #853ecf; color: white">その他</v-chip>
                            </div>
                            <div v-if="item.raw.movingIn.colItem == 'ward4'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #019eac; color: white">一般入院</v-chip>
                            </div>
                            <div v-if="item.raw.movingIn.colItem == 'ward5'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #f55a0b; color: white">措置入院</v-chip>
                            </div>
                            <div v-if="item.raw.movingIn.colItem == 'ward6'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #1ca0dc; color: white"> 応急入院</v-chip>
                            </div>
                        </div>
                        <div class="mt-1">
                            {{ item.raw.movingIn.movingIn_type_name }}
                        </div>
                    </div>
                </div>
            </template>
            <template v-slot:item.moveOut="{ item }">
                <div class="centered-cell">
                    <div style="min-width: 120px; display: flex;">
                        <div style="text-align: center" class="mr-2">
                            <div v-if="item.raw.moveOut.colItem == 'ward'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #5ab800; color: white">医療保護</v-chip>
                            </div>
                            <div v-if="item.raw.moveOut.colItem == 'ward1'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #e5b000; color: white">医療保護</v-chip>
                            </div>
                            <div v-if="item.raw.moveOut.colItem == 'ward2'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #fc3e87; color: white">司法入院</v-chip>
                            </div>
                            <div v-if="item.raw.moveOut.colItem == 'ward3'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #853ecf; color: white">その他</v-chip>
                            </div>
                            <div v-if="item.raw.moveOut.colItem == 'ward4'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #019eac; color: white">一般入院</v-chip>
                            </div>
                            <div v-if="item.raw.moveOut.colItem == 'ward5'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #f55a0b; color: white">措置入院</v-chip>
                            </div>
                            <div v-if="item.raw.moveOut.colItem == 'ward6'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #1ca0dc; color: white"> 応急入院</v-chip>
                            </div>
                        </div>
                        <div class="mt-1">
                            {{ item.raw.moveOut.moveOut_type_name }}
                        </div>
                    </div>
                </div>
            </template>
            <template v-slot:item.sleepover="{ item }">
                <div class="centered-cell">
                    <div style="min-width: 120px; display: flex;">
                        <div style="text-align: center" class="mr-2">
                            <div v-if="item.raw.sleepover.colItem == 'ward'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #5ab800; color: white">医療保護</v-chip>
                            </div>
                            <div v-if="item.raw.sleepover.colItem == 'ward1'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #e5b000; color: white">医療保護</v-chip>
                            </div>
                            <div v-if="item.raw.sleepover.colItem == 'ward2'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #fc3e87; color: white">司法入院</v-chip>
                            </div>
                            <div v-if="item.raw.sleepover.colItem == 'ward3'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #853ecf; color: white">その他</v-chip>
                            </div>
                            <div v-if="item.raw.sleepover.colItem == 'ward4'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #019eac; color: white">一般入院</v-chip>
                            </div>
                            <div v-if="item.raw.sleepover.colItem == 'ward5'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #f55a0b; color: white">措置入院</v-chip>
                            </div>
                            <div v-if="item.raw.sleepover.colItem == 'ward6'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #1ca0dc; color: white"> 応急入院</v-chip>
                            </div>
                        </div>
                        <div class="mt-1">
                            {{ item.raw.sleepover.sleepover_type_name }}
                        </div>
                    </div>
                </div>
            </template>
            <template v-slot:item.goOut="{ item }">
                <div class="centered-cell">
                    <div style="min-width: 120px; display: flex;">
                        <div style="text-align: center" class="mr-2">
                            <div v-if="item.raw.goOut.colItem == 'ward'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #5ab800; color: white">医療保護</v-chip>
                            </div>
                            <div v-if="item.raw.goOut.colItem == 'ward1'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #e5b000; color: white">医療保護</v-chip>
                            </div>
                            <div v-if="item.raw.goOut.colItem == 'ward2'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #fc3e87; color: white">司法入院</v-chip>
                            </div>
                            <div v-if="item.raw.goOut.colItem == 'ward3'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #853ecf; color: white">その他</v-chip>
                            </div>
                            <div v-if="item.raw.goOut.colItem == 'ward4'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #019eac; color: white">一般入院</v-chip>
                            </div>
                            <div v-if="item.raw.goOut.colItem == 'ward5'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #f55a0b; color: white">措置入院</v-chip>
                            </div>
                            <div v-if="item.raw.goOut.colItem == 'ward6'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #1ca0dc; color: white"> 応急入院</v-chip>
                            </div>
                        </div>
                        <div class="mt-1">
                            {{ item.raw.goOut.goOut_type_name }}
                        </div>
                    </div>
                </div>
            </template>
            <template v-slot:item.returnToHospital="{ item }">
                <div class="centered-cell">
                    <div style="min-width: 120px; display: flex;">
                        <div style="text-align: center" class="mr-2">
                            <div v-if="item.raw.returnToHospital.colItem == 'ward'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #5ab800; color: white">医療保護</v-chip>
                            </div>
                            <div v-if="item.raw.returnToHospital.colItem == 'ward1'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #e5b000; color: white">医療保護</v-chip>
                            </div>
                            <div v-if="item.raw.returnToHospital.colItem == 'ward2'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #fc3e87; color: white">司法入院</v-chip>
                            </div>
                            <div v-if="item.raw.returnToHospital.colItem == 'ward3'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #853ecf; color: white">その他</v-chip>
                            </div>
                            <div v-if="item.raw.returnToHospital.colItem == 'ward4'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #019eac; color: white">一般入院</v-chip>
                            </div>
                            <div v-if="item.raw.returnToHospital.colItem == 'ward5'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #f55a0b; color: white">措置入院</v-chip>
                            </div>
                            <div v-if="item.raw.returnToHospital.colItem == 'ward6'"> 
                                <v-chip small style="min-width: 90px; justify-content: center; background-color: #1ca0dc; color: white"> 応急入院</v-chip>
                            </div>
                        </div>
                        <div class="mt-1">
                            {{ item.raw.returnToHospital.returnToHospital_type_name }}
                        </div>
                    </div>
                </div>
            </template>
        </v-data-table-virtual>
    </div>
</template>

<script lang="ts">
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
                            discharge_type_name: "デモ患者　花江"
                        }, 
                        movingIn: {
                            colItem: "ward", 
                            movingIn_type_name: "デモ患者　大輔"
                        },
                        moveOut: {
                            // colItem: "ward", 
                            // moveOut_type_name: "デモ患者　三郎"
                        }, 
                        sleepover: {
                            colItem: "ward", 
                            sleepover_type_name: "デモ患者　京子"
                        }, 
                        goOut: {
                            colItem: "ward", 
                            goOut_type_name: "デモ患者　光一"
                        }, 
                        returnToHospital: {
                            colItem: "ward", 
                            returnToHospital_type_name: "デモ患者　明"
                        }
                    }, 
                    {
                        ward: "2病棟", 
                        hospitalization: {
                            colItem: "ward", 
                            hospitalization_type_name: "病棟 太郎 ３３歳"
                        },
                        discharge: {
                            colItem: "ward6", 
                            discharge_type_name: "病棟 太郎 ３３歳"
                        }, 
                        movingIn: {
                            colItem: "ward5", 
                            movingIn_type_name: "病棟 太郎 ３３歳"
                        },
                        moveOut: {
                            colItem: "ward1", 
                            moveOut_type_name: "病棟 太郎 ３３歳"
                        }, 
                        sleepover: {
                            colItem: "ward2", 
                            sleepover_type_name: "病棟 太郎 ３３歳"
                        }, 
                        goOut: {
                            colItem: "ward3", 
                            goOut_type_name: "病棟 太郎 ３３歳"
                        }, 
                        returnToHospital: {
                            colItem: "ward4", 
                            returnToHospital_type_name: "病棟 太郎 ３３歳"
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


// import { ref } from 'vue '
// import Client from '~/plugins/client'

type HospitalizationType = {
  hospitalization_type_name: string
  hospitalization_form_name: string
  value: string
}

export type PatientMovementStatusList = {
  ward: string
  hospitalization: HospitalizationType[]
  discharge: HospitalizationType[]
  movingIn: HospitalizationType[]
  moveOut: HospitalizationType[]
  sleepover: HospitalizationType[]
  goOut: HospitalizationType[]
  returnToHospital: HospitalizationType[]
}

// export const usePatientMovementStatus = () => {
//   const data = ref<PatientMovementStatusList[]>([])
//   const fetchState = ref(false)
//   const client = Client()

//   const fetch = async () => {
//     fetchState.value = true
//     const response = await client.get<PatientMovementStatusList[]>(
//       '/global/common/nursing-management-diary/patientMovementStatus'
//     )

//     data.value = response?.data || []
//     fetchState.value = false
//   }

//   return {
//     data,
//     fetchState,
//     fetch,
//   }
// }

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
        font-size: 14px;
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