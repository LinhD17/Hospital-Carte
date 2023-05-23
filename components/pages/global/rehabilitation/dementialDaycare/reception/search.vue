<script setup lang="ts">
    type HeaderCell = {
            text: string
            value: string
            width?: string| number 
            sortable: boolean
        };

    const header: HeaderCell[] = [
        {
            text: '合計',
            value: 'total',
            sortable: false,
        }
    ]
        const dummyItems = [
            {
                total: '10人',
            }
        ]
</script>
<template>
    <div class="search-fields">
        <div class="justify-space-between d-flex">
          <div class="d-flex">
            <div class="d-flex ml-5">
                <p class="mr-2 align-self-center">受付日 :</p>
                <!-- need to fix datepicker -->
                <div class="mt-3" style="width: 140px">
                    <datepicker  :value.sync="date"/>
                </div>
            </div>
            <div class="d-flex ml-5">
                <p class="mr-2 align-self-center">担当者 :</p>
                <div class="mt-3" style="width: 140px">
                    <v-select 
                        dense
                        height="36"
                        background-color="white" 
                        placeholder="担当者を選択"
                        :items="['DC花子', '2', '3']"
                    /> 
                </div>
            </div>
            <div class="d-flex ml-5">
                <p class="mr-2 align-self-center">グループ :</p>
                <div class="mt-3" style="width: 140px">
                    <v-select 
                        dense
                        height="36"
                        background-color="white" 
                        placeholder="担当者を選択"
                        :items="['DC花子', '2', '3']"
                    />
                </div>
            </div>
            <div class="d-flex ml-5">
                <p class="mr-2 align-self-center">主治医 :</p>
                <div class="mt-3" style="width: 140px">
                    <v-select 
                        dense
                        height="36"
                        background-color="white" 
                        placeholder="主治医を選択"
                        :items="['DC花子', '2', '3']"
                    />
                </div>
            </div>
            <div class="d-flex ml-5">
                <p class="mr-2 align-self-center">患者番号 :</p>
                <div class="mt-3" style="width: 140px" >
                    <v-text-field 
                        dense
                        height="36"
                        background-color="white" 
                        placeholder="患者番号を入力"
                    />
                </div>
            </div>
            <div class="d-flex ml-5">
                <p class="mr-2 align-self-center">状態 :</p>
                <div class="mt-3" style="width: 140px">
                    <v-select 
                        dense
                        height="38"
                        background-color="white"
                    />
                </div>
            </div>
            <div class="ml-5 mt-7" > 
                <v-btn small color="primary">検索</v-btn>
            </div>
          </div>
  
          <div class="ml-5">
              <!-- <div style="width: 80px">
                  <v-data-table
                  :headers="header"
                  :items="dummyItems"
                  hide-default-footer
                  >
                  </v-data-table>
              </div> -->
          </div>
  
  
          <div>
              <v-btn
                  small
                  color="primary"
                  dense
              >
                  臨時参加
              </v-btn>
          </div>
        </div>
    </div>
  </template>

  <style lang="scss" scoped>
  .search-fields {
    p {
        font-size: 14px;
        font-weight: bold;
    }
  }
  .v-data-table :deep(.th) {
    text-align: center !important;
    background-color: #f0f3f5 !important;
    font-size: 12px;
    height: 30px !important;
  }
  .v-data-table :deep(.td) {
  text-align: center;
  border-bottom: 1px solid #c7ccce;
  font-size: 12px !important;
  height: 30px !important;
  }
  
  </style>