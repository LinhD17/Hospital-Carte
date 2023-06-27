<template>
    <div class="table-content">
        <v-data-table-virtual
          :headers="headers"
          :items="dummyItems"
          :items-per-page="-1"
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

                          {{ item.raw.patient_info.name }}
                          </ruby>
                      </a>
                      <div
                          v-if="item.raw.patient_info.isSameName === true"
                          class="same-name-field"
                      >
                          <img src="@/assets/icon/important_triangle.svg" />
                          <span>類似</span>
                      </div>
                  </div>
                  <span>
                  {{ item.raw.patient_info.birthday }}
                  <!-- ({{ moment().diff(item.raw.patient_info.birthday, 'years', false) }}) -->
                  </span> 
              </div>
          </template>
          <!-- 内容 -->
          <template v-slot:item.color_code="{ item }">
              <div
                  class="status-list--box"
                  v-if="item.raw.color_code === 1"
                  style="background-color: #a4dcf4"
              ></div>
              <div
                  class="status-list--box"
                  v-if="item.raw.color_code === 2"
                  style="background-color:#fcc4dc"
              ></div>
              <div
                  class="status-list--box"
                  v-if="item.raw.color_code === 3"
                  style="background-color: #fbdd9c"
              ></div>
              <div
                  class="status-list--box"
                  v-if="item.raw.color_code === 4"
                  style="background-color: #bce49c"
              ></div>
              <div
                  class="status-list--box"
                  v-if="item.raw.color_code === 5"
                  style="background-color: #fcbc9c"
              ></div>
            </template>
            <!-- 内容 -->
            <template v-slot:item.sticky_note="{ item }"> 
                <div style="display: flex; justify-content: flex-start;">
                     {{ item.raw.sticky_note }}
                </div>
            </template>
            <!-- 表示期限 -->
            <!-- 登録日 -->
            <!-- 更新日 -->
            <!-- 自分にだけ表示 -->
            <template v-slot:item.is_self="{ item }"> 
                <v-icon v-if="item.raw.is_self === 1">
                    mdi-check
                </v-icon>
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
        </div>
    </div>
  </template>
  
  <script>
      export default {
        data () {
          return {
            headers: [
              { title: '患者番号', key: 'patient_no', align:'center', sortable: false, width: '6%'},
              { title: '患者情報', key: 'patient_info', align:'center', sortable: false, width: '15%'},
              { title: '', key: 'color_code', align:'center', sortable: false, width: '3%'},
              { title: '内容', key: 'sticky_note', align:'center', sortable: false, width: '30%'},
              { title: '表示期限', key: 'valid_from', align:'center', sortable: false, width: '5%'},
              { title: '登録日', key: 'created_at', align:'center', sortable: false, width: '5%'},
              { title: '登録者', key: 'created_by', align:'center', sortable: false, width: '10%'},
              { title: '更新日', key: 'updated_at', align:'center', sortable: false, width: '5%'},
              { title: '更新者', key: 'updated_by', align:'center', sortable: false, width: '10%'},
              { title: '自分にだけ表示', key: 'is_self', align:'center', sortable: false, width: '8%'},
            ],
            dummyItems: [
              {
                patient_no: '00012',
                patient_info: {
                  name: 'テスト患者',
                  gender: 1,
                  isSameName: false,
                },
                color_code: 1,
                sticky_note: 'ああああああああ',
                valid_from: '2023/01/15',
                created_at: '2023/01/15', 
                created_by: '保険指定医 テスト０８', 
                updated_at: '2023/06/02',
                updated_by: '保険指定医 テスト０８', 
                is_self: 1, 
              },
              {
                patient_no: '1012',
                patient_info: {
                  name: 'デモ患者　亜美',
                  gender: 0,
                  isSameName: false,
                },
                color_code: 2,
                sticky_note: '看護用付箋',
                valid_from: '2023/04/28',
                created_at: '2023/01/15', 
                created_by: '保険指定医 テスト０８', 
                updated_at: '2023/05/29',
                updated_by: '保険指定医 テスト０６', 
                is_self: '', 
              },
              {
                patient_no: '00030',
                patient_info: {
                  name: '患者　太郎１８',
                  gender: 1,
                  isSameName: false,
                },
                color_code: 3,
                sticky_note: 'いいいい',
                valid_from: '2023/05/25',
                created_at: '2023/01/15', 
                created_by: '保険指定医 テスト０８', 
                updated_at: '2023/05/29',
                updated_by: '保険指定医 テスト０６', 
                is_self: '', 
              },
              {
                patient_no: '1001',
                patient_info: {
                  name: 'デモ患者　はな子',
                  gender: 1,
                  isSameName: true,
                },
                color_code: 4,
                sticky_note: 'ああああああああ',
                valid_from: '2023/05/15',
                created_at: '2023/04/21', 
                created_by: '保険指定医 テスト０２', 
                updated_at: '2023/04/21',
                updated_by: '保険指定医 テスト０２', 
                is_self: '', 
              },
              {
                patient_no: '0000023067',
                patient_info: {
                  name: 'デモ患者　恵美',
                  gender: 2,
                  isSameName: false,
                },
                color_code: 5,
                sticky_note: 'コロナウイルス検査実施予定',
                valid_from: '2023/04/28',
                created_at: '2023/01/15', 
                created_by: '保険指定医 テスト０８', 
                updated_at: '2023/05/29',
                updated_by: '保険指定医 テスト０６', 
                is_self: 1, 
              },
              {
                patient_no: '00044',
                patient_info: {
                  name: '患者　オルカ００４４',
                  gender: 2,
                  isSameName: false,
                },
                color_code: 1,
                sticky_note: 'ああああああああ',
                valid_from: '2023/03/31',
                created_at: '2023/01/15', 
                created_by: '保険指定医 テスト０９', 
                updated_at: '2023/05/29',
                updated_by: '保険指定医 テスト０９', 
                is_self: '', 
              },
              {
                patient_no: '1001',
                patient_info: {
                  name: 'デモ患者　はな子',
                  gender: 1,
                  isSameName: true,
                },
                color_code: 4,
                sticky_note: 'あかしや 　○○先生へ',
                valid_from: '2023/04/20',
                created_at: '2023/04/20', 
                created_by: '保険指定医 テスト１０', 
                updated_at: '2023/04/20',
                updated_by: '保険指定医 テスト１０', 
                is_self: 1, 
              },
            ],
            page: ref(1), 
            totalCount: 10,
          }
        },         
      }
  </script>
    
  
<style lang="scss" scoped> 
.v-data-table {
    position: inherit;
    &:deep(tr) {
        cursor: pointer;
    }
}
.status-list--box {
  height: 20px !important;
  width: 20px !important;
  border-radius: 1px;
}
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
  </style>