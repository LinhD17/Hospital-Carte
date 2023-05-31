<template>
    <div class="search-fields">
        <div class="search-condition d-flex">
            <div class="d-flex">
                <div class="ml-5 mt-5">
                    <p class="mb-0 text-left">受付日</p>
                    <div style="width: 174px">
                        <datepicker
                            placeholder="受付日"
                            :value.sync="date"
                        />
                    </div>
                </div>

                <div class="ml-3 mt-5">
                    <p class="mb-0 text-left">担当者</p>
                    <v-select 
                        dense 
                        clearable 
                        variant="solo" 
                        hide-details
                        style="width: 174px; background-color: white" 
                        placeholder="選択してください" 
                        :items="['DC花子', '2', '3']"
                    />
                </div>
                <div class="ml-3 mt-5">
                    <p class="mb-0 text-left">グループ</p>
                    <v-select 
                        dense 
                        clearable 
                        variant="solo" 
                        hide-details
                        style="width: 174px; background-color: white" 
                        placeholder="選択してください" 
                        :items="['DC花子', '2', '3']"/>
                </div>
                <div class="ml-3 mt-5">
                    <p class="mb-0 text-left">患者番号</p>
                    <v-text-field 
                    dense 
                        clearable 
                        variant="solo" 
                        hide-details
                        style="width: 174px; background-color: white" 
                        placeholder="患者番号を入力"
                    />
                </div>
                <div class="ml-3 mt-5">
                    <p class="mb-0 text-left">状態</p>
                    <v-select 
                        dense 
                        clearable 
                        variant="solo" 
                        hide-details
                        style="width: 174px; background-color: white" 
                        placeholder="選択してください" 
                        :items="['DC花子', '2', '3']"
                    />
                </div>
                <div class="ml-5 mt-7" > 
                    <v-btn 
                        rounded 
                        small 
                        style="background-color: #1ea0dc; color: #ffffff"
                    >検索</v-btn>
                </div>

                <div class="ml-5">
                    <div>
                        <v-data-table-virtual
                        :headers="header"
                        :items="dummyItems"
                        hide-default-footer
                        >
                        </v-data-table-virtual>
                    </div>
                </div>
                
                <div>
                    <v-btn
                        small
                        dense
                        class="mt-7 ml-10"
                        rounded
                        style="background-color: #1ea0dc; color: #ffffff"
                    >
                        臨時参加
                    </v-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    type HeaderCell = {
            title: string
            key: string
            width?: string| number 
            sortable: boolean
            align: string
        };

    const header: HeaderCell[] = [
        { title: 'SC',key: 'sc', width:80, sortable: false, align: 'center'},
        { title: 'DC',key: 'dc', width:80, sortable: false, align: 'center'},
        { title: 'DNC',key: 'dnc', width:80, sortable: false, align: 'center'},
        { title: 'NC',key: 'nc', width:80, sortable: false, align: 'center'},
        { title: '他',key: 'other', width:80, sortable: false, align: 'center'},
        { title: '合計',key: 'total', width:80, sortable: false, align: 'center'},
    ]
    const dummyItems = [
        {
            sc: '10人',
            dc: '10人',
            dnc: '10人',
            nc: '10人',
            other: '10人',
            total: '10人',
        }
    ]
</script>

  <style lang="scss" scoped>
  .search-fields {
    display: flex;
    justify-content: space-between;
    .search-condition{
        p {
            font-size: 14px;
            font-weight: bold;
    }
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