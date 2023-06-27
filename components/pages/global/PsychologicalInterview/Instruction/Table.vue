<template>
    <div class="table-content">
        <v-data-table-virtual
            :headers="headers"
            :items="dummyItems"
            class="elevation-1"
            @page-count="pageCount=$event"
        >
            <!-- patient-info -->
            <template v-slot:item.patient_info = "{ item }">
            <div class="d-flex" style="justify-content: space-between">
                <div class="info-cell">
                <img
                    v-if="item.raw.patient_info.gender === 1"
                    src="@/assets/icon/man.svg"
                    style="width: 25px; height: 25px"
                />
                <img
                    v-else
                    style="width: 25px; height: 25px"
                    src="@/assets/icon/female.svg"
                />
                <a>
                    <ruby class="info-cell__content ml-2" style="min-width: 80px">
                    <rt class="text-no-wrap" style="font-size: 10px">
                        {{ item.raw.patient_info.name_kana }}
                    </rt>
                    {{ item.raw.patient_info.name }}
                    </ruby>
                </a>
                <div
                    v-if="item.raw.patient_info.isSameName === true"
                    class="same-name-field"
                >
                    <img src="@/assets/icon/important_triangle.svg" />
                    <span>同姓</span>
                </div>
                </div>
                <span>
                {{ item.raw.patient_info.birthday }}
                <!-- ({{ moment().diff(item.raw.patient_info.birthday, 'years', false) }}) -->
                </span> 
            </div>
            </template>
        </v-data-table-virtual>
        <div class="table-footer text-center pt-2">
            <span>全 {{ totalCount }} 件</span>
            <v-pagination
                v-model="page"
                class="ml-4"
                rounded="circle"
                :length="pageCount"
                :total-visible="pageCount"
            ></v-pagination>
            <div style="position: absolute; right: 0">
            <v-btn rounded class="mr-5" style="background-color: #1ea0dc; color: #ffffff">登録</v-btn>
            </div>
        </div>
    </div>
  </template>
  
  <script>
      export default {
        data () {
          return {
            headers: [
                { title: '患者番号', key: 'patient_no', align:'center', sortable: false, width: 100},
                { title: '患者情報', key: 'patient_info', align:'center', sortable: false, width: 320},
                { title: '主治医', key: 'main_doctor', align:'center', sortable: false, width: 80},
                { title: '初回参加日', key: 'firstJoinDate',align:'center', sortable: false },
                { title: '最終参加日', key: 'finalJoinDate',align:'center', sortable: false },
                { title: '指示日(終了日までの日数)', key: 'orderDate', align:'center', sortable: false },
                { title: '指示病名', key: 'orderDisease',align:'center', sortable: false },
                { title: '終了日', key: 'orderFinalDate', align:'center', sortable: false },
            ],
            dummyItems: [
              {
                patient_no: '9999999',
                patient_info: {
                  name: 'テスト患者',
                  name_kana: 'テストカンジャ',
                  birthday: '1993年04月08日',
                  gender: 1,
                  isSameName: true,
                },
                main_doctor: '医師太郎',
                firstJoinDate: '2022/08/01',
                finalJoinDate: '2022/08/15',
                orderDate: '2022/08/01',
                orderDisease: '統合失調症',
                orderFinalDate: '2022/08/30',
              },
              {
                patient_no: '9999999',
                patient_info: {
                  name: 'テスト患者',
                  name_kana: 'テストカンジャ',
                  birthday: '1993年04月08日',
                  gender: 1,
                  isSameName: true,
                },
                main_doctor: '医師太郎',
                firstJoinDate: '2022/08/01',
                finalJoinDate: '2022/08/15',
                orderDate: '2022/08/01',
                orderDisease: '統合失調症',
                orderFinalDate: '2022/08/30',
              },
              {
                patient_no: '9999999',
                patient_info: {
                  name: 'テスト患者',
                  name_kana: 'テストカンジャ',
                  birthday: '1993年04月08日',
                  gender: 1,
                  isSameName: true,
                },
                main_doctor: '医師太郎',
                firstJoinDate: '2022/08/01',
                finalJoinDate: '2022/08/15',
                orderDate: '2022/08/01',
                orderDisease: '統合失調症',
                orderFinalDate: '2022/08/30',
              },
              {
                patient_no: '9999999',
                patient_info: {
                  name: 'テスト患者',
                  name_kana: 'テストカンジャ',
                  birthday: '1993年04月08日',
                  gender: 1,
                  isSameName: true,
                },
                main_doctor: '医師太郎',
                firstJoinDate: '2022/08/01',
                finalJoinDate: '2022/08/15',
                orderDate: '2022/08/01',
                orderDisease: '統合失調症',
                orderFinalDate: '2022/08/30',
              },
            ],
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
        top: 0;
        padding: 5px 0 !important;
        justify-content: center;
        align-items: center;
        filter: drop-shadow(0 -3px 3px #e6e6e6);
        background-color: #ffffff;
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