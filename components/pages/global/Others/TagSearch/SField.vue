<template>
  <div class="search-fields">
    <div class="search-condition d-flex">
      <div class="d-flex">
        <div class="ml-3 mt-5">
          <p class="mb-0 text-left">タグ</p>
          <v-select
            dense
            clearable
            variant="solo"
            hide-details
            style="width: 210px; background-color: white"
            :items="['1', '2', '3']"
          />
        </div>
        <div class="ml-3 mr-3 mt-12">
          <v-radio-group inline>
            <v-radio class="mr-3" label="AND" value="1"></v-radio>
            <v-radio label="OR" value="2"></v-radio>
          </v-radio-group>
        </div>

        <div class="ml-3 mt-5">
          <p class="mb-0 text-left">登録日</p>
          <div class="d-flex">
            <div style="width: 214px">
              <datepicker :width="100" placeholder="予定日" />
            </div>
            <div class="ml-3 mr-3 mt-2">
              <p>〜</p>
            </div>
            <div style="width: 214px">
              <datepicker :width="100" placeholder="予定日" />
            </div>
          </div>
        </div>

        <div class="mt-12 mr-10" style="position: absolute; right: 0">
          <v-btn
            rounded
            dark
            small
            width="78"
            style="color: white !important; background-color: black !important"
            class="btn-style"
            >閉じる</v-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Datepicker from '~/components/General/Form/DatePicker.vue';
//
</script>

  <style lang="scss" scoped>
.search-fields {
  display: flex;
  justify-content: space-between;
  .search-condition {
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