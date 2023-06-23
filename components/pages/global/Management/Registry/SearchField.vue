<template>
    <div class="search-fields">
        <div class="search-condition mt-4 d-flex">
            <div class="d-flex">
                <div class="ml-5">
                    <p class="mb-0 text-left">確定日期間(開始)</p>
                    <div style="width: 150px">
                        <datepicker
                            placeholder="年/月/日"
                        />
                    </div>
                </div>
                <div class="ml-3">
                    <p class="mb-0 text-left">確定日期間(終了)</p>
                    <div style="width: 150px">
                        <datepicker
                            placeholder="年/月/日"
                        />
                    </div>
                </div>
                <div class="ml-3">
                    <p class="mb-0 text-left">患者番号</p>
                    <v-text-field 
                        dense 
                        clearable 
                        variant="solo" 
                        hide-details
                        style="width: 150px; background-color: white" 
                        placeholder="患者番号を入力"
                    />
                </div>
                <div class="ml-3">
                    <p class="mb-0 text-left">患者氏名</p>
                    <v-text-field 
                    dense 
                        clearable 
                        variant="solo" 
                        hide-details
                        style="width: 150px; background-color: white" 
                        placeholder="患者氏名を入力"
                    />
                </div>
                <div class="ml-3" style="width: 350px">
                    <p class="mb-0 text-left">TIME</p>
                    <div class="d-flex">
                        <timepicker
                            clearable
                            :height-date-picker="'15px'"
                        />
                        <span  v-text="'～'" class="mt-8" />
                        <timepicker
                            clearable
                            :height-date-picker="'28px'"
                        />
                    </div>
                </div>
                <div class="ml-3">
                    <p class="mb-0 text-left">患者性別</p>
                    <v-select 
                        dense 
                        clearable 
                        variant="solo" 
                        hide-details
                        style="width: 80px; background-color: white" 
                        placeholder="全て" 
                        :items="['男', '女']"
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
    import Datepicker  from '@/components/general/Form/DatePicker1.vue'; 
    import Timepicker from '~/components/general/Form/TimePicker.vue';

    const props = defineProps({

    })

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