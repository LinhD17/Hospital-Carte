<template>
<!-- phân tích quy trình xử lý và tạo bảng 患者移動状況 (theo như thiết kế bên WEBAPP)
B1: dùng vòng lặp for duyệt qua tất cả các mục (header) của bảng
B2: dùng vòng lặp for duyệt qua tất cả các value ứng với header trên 
   => nếu value đó có giá trị khác ward: dùng vòng lặp for để in ra tất cả các gía trị có trong 1 cột ứng với header trên 
   (bên trong vòng lặp for, sử dụng v-chip để in ra được màu), bên trong in ra tên v-vhip, bên ngoài là tên và tuôi bệnh nhân 
   => nếu value đó có giá trị là ward thì chỉ cần đưa gía trị đó ra 
-->
   <div class="table-wrapper mt-6">
        <div class="table-title">患者移動状況</div>
        <v-data-table-virtual
                :headers="headers"
                :items="dummyItems"
                class="elevation-1"
        >
            <template v-slot:item.hospitalization="{ item }">
                <div style="display: flex;">
                    <div style="display: block;">
                        <div 
                            v-for="value in item.raw. hospitalization.colItem"
                            :key = "value"
                        >
                            <div v-if="value == 'ward'">
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #5ab800; color: white">医療保護</v-chip>
                            </div>
                            <div v-if="value == 'ward1'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #e5b000; color: white">医療保護</v-chip>
                            </div>
                            <div v-if="value == 'ward2'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #fc3e87; color: white">司法入院</v-chip>
                            </div>
                            <div v-if="value == 'ward3'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #853ecf; color: white">その他</v-chip>
                            </div>
                            <div v-if="value == 'ward4'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #019eac; color: white">一般入院</v-chip>
                            </div>
                            <div v-if="value == 'ward5'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #f55a0b; color: white">措置入院</v-chip>
                            </div>
                            <div v-if="value == 'ward6'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #1ca0dc; color: white"> 応急入院</v-chip>
                            </div>
                        </div>
                    </div>
                    <div style="display: block ;">
                        <div
                            v-for="name in item.raw. hospitalization.rowItem"
                            :key = "name"
                            class="mb-3"
                        >
                            <span >{{ name }}　<br/></span>
                        </div>
                    </div>
                </div>
            </template>

            <template v-slot:item.discharge="{ item }">
                <div style="display: flex;">
                    <div style="display: block;">
                        <div 
                            v-for="value in item.raw. discharge.colItem"
                            :key = "value"
                        >
                            <div v-if="value == 'ward'">
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #5ab800; color: white">医療保護</v-chip>
                            </div>
                            <div v-if="value == 'ward1'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #e5b000; color: white">医療保護</v-chip>
                            </div>
                            <div v-if="value == 'ward2'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #fc3e87; color: white">司法入院</v-chip>
                            </div>
                            <div v-if="value == 'ward3'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #853ecf; color: white">その他</v-chip>
                            </div>
                            <div v-if="value == 'ward4'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #019eac; color: white">一般入院</v-chip>
                            </div>
                            <div v-if="value == 'ward5'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #f55a0b; color: white">措置入院</v-chip>
                            </div>
                            <div v-if="value == 'ward6'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #1ca0dc; color: white"> 応急入院</v-chip>
                            </div>
                        </div>
                    </div>
                    <div style="display: block;">
                        <div
                            v-for="name in item.raw. discharge.rowItem"
                            :key = "name"
                            class="mb-3"
                        >
                            <span >{{ name }}　<br/></span>
                        </div>
                    </div>
                </div>
            </template>

            <template v-slot:item.movingIn="{ item }">
                <div style="display: flex;">
                    <div style="display: block;">
                        <div 
                            v-for="value in item.raw. movingIn.colItem"
                            :key = "value"
                        >
                            <div v-if="value == 'ward'">
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #5ab800; color: white">医療保護</v-chip>
                            </div>
                            <div v-if="value == 'ward1'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #e5b000; color: white">医療保護</v-chip>
                            </div>
                            <div v-if="value == 'ward2'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #fc3e87; color: white">司法入院</v-chip>
                            </div>
                            <div v-if="value == 'ward3'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #853ecf; color: white">その他</v-chip>
                            </div>
                            <div v-if="value == 'ward4'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #019eac; color: white">一般入院</v-chip>
                            </div>
                            <div v-if="value == 'ward5'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #f55a0b; color: white">措置入院</v-chip>
                            </div>
                            <div v-if="value == 'ward6'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #1ca0dc; color: white"> 応急入院</v-chip>
                            </div>
                        </div>
                    </div>
                    <div style="display: block;">
                        <div
                            v-for="name in item.raw. movingIn.rowItem"
                            :key = "name"
                            class="mb-3"
                        >
                            <span >{{ name }}　<br/></span>
                        </div>
                    </div>
                </div>
            </template>

            <template v-slot:item.moveOut="{ item }">
                <div style="display: flex;">
                    <div style="display: block;">
                        <div 
                            v-for="value in item.raw.moveOut.colItem"
                            :key = "value"
                        >
                            <div v-if="value == 'ward'">
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #5ab800; color: white">医療保護</v-chip>
                            </div>
                            <div v-if="value == 'ward1'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #e5b000; color: white">医療保護</v-chip>
                            </div>
                            <div v-if="value == 'ward2'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #fc3e87; color: white">司法入院</v-chip>
                            </div>
                            <div v-if="value == 'ward3'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #853ecf; color: white">その他</v-chip>
                            </div>
                            <div v-if="value == 'ward4'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #019eac; color: white">一般入院</v-chip>
                            </div>
                            <div v-if="value == 'ward5'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #f55a0b; color: white">措置入院</v-chip>
                            </div>
                            <div v-if="value == 'ward6'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #1ca0dc; color: white"> 応急入院</v-chip>
                            </div>
                        </div>
                    </div>
                    <div style="display: block;">
                        <div
                            v-for="name in item.raw.moveOut.rowItem"
                            :key = "name"
                            class="mb-3"
                        >
                            <span >{{ name }}　<br/></span>
                        </div>
                    </div>
                </div>
            </template>

            <template v-slot:item.sleepover="{ item }">
                <div style="display: flex;">
                    <div style="display: block;">
                        <div 
                            v-for="value in item.raw.sleepover.colItem"
                            :key = "value"
                        >
                            <div v-if="value == 'ward'">
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #5ab800; color: white">医療保護</v-chip>
                            </div>
                            <div v-if="value == 'ward1'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #e5b000; color: white">医療保護</v-chip>
                            </div>
                            <div v-if="value == 'ward2'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #fc3e87; color: white">司法入院</v-chip>
                            </div>
                            <div v-if="value == 'ward3'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #853ecf; color: white">その他</v-chip>
                            </div>
                            <div v-if="value == 'ward4'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #019eac; color: white">一般入院</v-chip>
                            </div>
                            <div v-if="value == 'ward5'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #f55a0b; color: white">措置入院</v-chip>
                            </div>
                            <div v-if="value == 'ward6'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #1ca0dc; color: white"> 応急入院</v-chip>
                            </div>
                        </div>
                    </div>
                    <div style="display: block;">
                        <div
                            v-for="name in item.raw.sleepover.rowItem"
                            :key = "name"
                            class="mb-3"
                        >
                            <span >{{ name }}　<br/></span>
                        </div>
                    </div>
                </div>
            </template>

            <template v-slot:item.goOut="{ item }">
                <div style="display: flex;">
                    <div style="display: block;">
                        <div 
                            v-for="value in item.raw.goOut.colItem"
                            :key = "value"
                        >
                            <div v-if="value == 'ward'">
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #5ab800; color: white">医療保護</v-chip>
                            </div>
                            <div v-if="value == 'ward1'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #e5b000; color: white">医療保護</v-chip>
                            </div>
                            <div v-if="value == 'ward2'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #fc3e87; color: white">司法入院</v-chip>
                            </div>
                            <div v-if="value == 'ward3'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #853ecf; color: white">その他</v-chip>
                            </div>
                            <div v-if="value == 'ward4'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #019eac; color: white">一般入院</v-chip>
                            </div>
                            <div v-if="value == 'ward5'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #f55a0b; color: white">措置入院</v-chip>
                            </div>
                            <div v-if="value == 'ward6'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #1ca0dc; color: white"> 応急入院</v-chip>
                            </div>
                        </div>
                    </div>
                    <div style="display: block;">
                        <div
                            v-for="name in item.raw.goOut.rowItem"
                            :key = "name"
                            class="mb-3"
                        >
                            <span >{{ name }}　<br/></span>
                        </div>
                    </div>
                </div>
            </template>

            <template v-slot:item.returnToHospital="{ item }">
                <div style="display: flex;">
                    <div style="display: block;">
                        <div 
                            v-for="value in item.raw.returnToHospital.colItem"
                            :key = "value"
                        >
                            <div v-if="value == 'ward'">
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #5ab800; color: white">医療保護</v-chip>
                            </div>
                            <div v-if="value == 'ward1'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #e5b000; color: white">医療保護</v-chip>
                            </div>
                            <div v-if="value == 'ward2'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #fc3e87; color: white">司法入院</v-chip>
                            </div>
                            <div v-if="value == 'ward3'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #853ecf; color: white">その他</v-chip>
                            </div>
                            <div v-if="value == 'ward4'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #019eac; color: white">一般入院</v-chip>
                            </div>
                            <div v-if="value == 'ward5'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #f55a0b; color: white">措置入院</v-chip>
                            </div>
                            <div v-if="value == 'ward6'"> 
                                <v-chip class="mb-1" small style="min-width: 90px; justify-content: center; background-color: #1ca0dc; color: white"> 応急入院</v-chip>
                            </div>
                        </div>
                    </div>
                    <div style="display: block;">
                        <div
                            v-for="name in item.raw.returnToHospital.rowItem"
                            :key = "name"
                            class="mb-3"
                        >
                            <span>{{ name }}　<br/></span>
                        </div>
                    </div>
                </div>
            </template>
        </v-data-table-virtual>
   </div>
</template>

<script lang="ts">
    export default {
        data() {
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
                            colItem: ['ward', 'ward1'], 
                            rowItem: ['デモ患者　康介', 'デモ患者　洋一'], 
                        },
                        discharge:{
                            colItem: ['ward'], 
                            rowItem: ['デモ患者　花江'], 
                        },
                        movingIn:{
                            colItem: ['ward'], 
                            rowItem: ['デモ患者　大輔'], 
                        },
                        moveOut:{
                            colItem: [], 
                            rowItem: [], 
                        },
                        sleepover:{
                            colItem: ['ward'], 
                            rowItem: ['デモ患者　三郎'], 
                        },
                        goOut:{
                            colItem: ['ward', 'ward', 'ward'], 
                            rowItem: ['デモ患者　京子', 'デモ患者　光一', 'デモ患者　明'], 
                        },
                        returnToHospital:{
                            colItem: ['ward'], 
                            rowItem: ['デモ患者　彩未'], 
                        },
                    },
                    {
                        ward: "2病棟",
                        hospitalization: {
                            colItem: ['ward2', 'ward3', 'ward1', 'ward4'], 
                            rowItem: ['病棟 太郎 33歳', '病棟 七郎 66歳', '病棟 三次郎 50歳', '病棟田 次郎 40歳'], 
                        },
                        discharge:{
                            colItem: ['ward4', 'ward5','ward3'], 
                            rowItem: ['病棟 太郎 33歳', '病棟田 次郎 40歳', '病棟 七郎 66歳'], 
                        },
                        movingIn:{
                            colItem: ['ward4', 'ward', 'ward1', 'ward5', 'ward6'], 
                            rowItem: ['病棟 太郎 33歳','病棟田 次郎 40歳','病棟 三次郎 50歳','病棟田 次郎 40歳','病棟田 一郎 23歳'], 
                        },
                        moveOut:{
                            colItem: ['ward4', 'ward1', 'ward5', 'ward', 'ward6'], 
                            rowItem: ['病棟 太郎 33歳','病棟田 次郎 40歳','病棟 三次郎 50歳','病棟田 次郎 40歳','病棟田 一郎 23歳'], 
                        },
                        sleepover:{
                            colItem: ['ward2', 'ward6', 'ward3', 'ward1', 'ward5'], 
                            rowItem: ['病棟 太郎 33歳','病棟田 次郎 40歳','病棟 三次郎 50歳','病棟田 次郎 40歳','病棟田 一郎 23歳'], 
                        },
                        goOut:{
                            colItem: ['ward', 'ward', 'ward5'], 
                            rowItem: ['デモ患者　京子', 'デモ患者　光一', 'デモ患者　明'], 
                        },
                        returnToHospital:{
                            colItem: ['ward', 'ward4', 'ward5', 'ward', 'ward3'], 
                            rowItem: ['病棟田 次郎 40歳','病棟 太郎 33歳','病棟田 三次郎 40歳','病棟田 次郎 40歳','病棟 七郎 66歳'], 
                        },
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
// .table-wrapper {
//     .table-title {
//         font-size: 16px;
//         font-weight: bold;
//         margin-bottom: 10px;
//         margin-left: 15px;
//         display: flex;
//         align-items: center;

//         &::before {
//             content: '';
//             display: inline-block;
//             margin-right: 6px;
//             width: 4px;
//             height: 16px;
//             background-color: #1ea0dc;
//             color: #1ea0dc;
//         }
//     }
// }
.table-wrapper {
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
</style>