<template>
    <div class="search-fields">
        <div class="search-condition mt-4 d-flex">
            <div class="d-flex">
                <div class="ml-5">
                    <p class="mb-0 text-left">登録日</p>
                    <div class="d-flex" style="width: 300px">
                        <datepicker
                            placeholder="年/月/日"
                        />
                        <div class="ml-2 mr-2">
                            <p>〜</p>
                        </div>
                        <datepicker
                            placeholder="年/月/日"
                        />
                    </div>
                </div>
                <div class="ml-3">
                    <p class="mb-0 text-left">内容</p>
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
                    <p class="mb-0 text-left">登録者</p>
                    <v-select 
                        dense 
                        clearable 
                        variant="solo" 
                        hide-details
                        style="width: 150px; background-color: white" 
                        placeholder="全て" 
                        :items="['医師　太郎', '医師　次郎', '医師　花子']"
                    />
                </div>
                <div class="ml-3 mt-5">
                    <v-checkbox 
                        dense
                        label="非表示になった付箋を表示"
                        hide-details
                        class="mb-2"
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