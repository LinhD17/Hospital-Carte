<template>
    <div class="log-note">
      <div class="d-flex">
        <div class="table-title">日誌特記</div>
        <v-btn 
          rounded
          variant="outlined"
          color="primary" 
          class="log-note__btn"
        >
          前日取り込み
        </v-btn>
      </div>
  
      <v-textarea
        dense
        variant="solo"
        hide-details="auto"
        rows="4"
      ></v-textarea>
      <div class="mt-7">
        <div class="text-title">更新履歴</div>
        <div class="change-log-list">
          <div 
            v-for="time in changeLogData"
            :key="time.value"
            class="change-log-list__item"
            :value="time.value"
          >
          {{ time.text }}
          </div>

          <!-- <v-list class="py-0 item-list">
            <v-list-item-group>
              <v-list-item
                v-for="(item, index) in logs"
                :key="index"
                class="change-log-list__item"
              >
                {{ item.text }}
              </v-list-item>
            </v-list-item-group>
          </v-list> -->

        </div>
      </div>
    </div>
  </template>
  
<script setup lang="ts">
    const changeLogData = [
      { value: 1, text: '2021年10月12日　12時00分00秒　山田花子',},
      { value: 2, text: '2021年09月11日　12時20分00秒　山田花子',},
      { value: 3, text: '2021年08月12日　11時00分00秒　山田花子',},
      { value: 4, text: '2021年07月10日　10時44分00秒　山田花子',},
      { value: 5, text: '2021年06月12日　13時34分00秒　山田花子',},
      { value: 6, text: '2021年06月10日　12時00分00秒　山田花子',},
      { value: 7, text: '2021年05月12日　12時00分00秒　山田花子',},
      { value: 8, text: '2021年04月12日　12時00分00秒　山田花子',},
    ]
</script>
  
  <style lang="scss" scoped>
  .log-note {
    .table-title {
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 10px;
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
  
    .change-log-list {
      height: 230px;
      overflow-y: scroll;
      margin-top: 8px;
      max-width: 520px;
  
      &__item {
        padding-left: 10px;
        height: 24px;
        cursor: default;
      }
    }
  
    .text-title {
      font-size: 14px;
      font-weight: bold;
    }
  
    &__btn {
      min-width: 60px !important;
      height: 20px !important;
      font-size: 10px !important;
      margin-left: 10px;
    }
}
.log-note :deep(.v-list-item) {
    min-height: 24px;
}

.log-note :deep(.v-item-group) {
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>
  