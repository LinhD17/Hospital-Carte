<template>
    <div class="search-fields">
        <div class="search-condition mt-4 d-flex">
            <div class="d-flex">
                <div class="ml-3">
                    <p class="mb-0 text-left">診療科</p>
                    <v-select 
                        dense 
                        clearable 
                        variant="solo" 
                        hide-details
                        style="width: 150px; background-color: white" 
                        placeholder="全て" 
                        :items="['神経内科', '脳神経外科','内科','精神科']"
                    />
                </div>
                <div class="ml-3">
                    <p class="mb-0 text-left">スタッフ名</p>
                    <v-select 
                        dense 
                        clearable 
                        variant="solo" 
                        hide-details
                        style="width: 150px; background-color: white" 
                        placeholder="全て" 
                        :items="['aaa', 'bbb','ccc','ddd']"
                    />
                </div>
                <div class="ml-3 mt-5"> 
                    <v-checkbox
                        dense
                        hide-details
                        label="有効期間以外の予約枠を含める"
                    />
                </div>
                <div class="ml-5 mt-7" > 
                    <v-btn 
                        rounded 
                        small 
                        style="background-color: #1ea0dc; color: #ffffff"
                    >検索</v-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import DatePicker  from '@/components/General/Form/DatePicker.vue'
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