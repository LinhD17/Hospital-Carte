<template>
  <div class="search-fields">
    <div class="search-condition mt-4">
      <div class="d-flex ml-6">
        <button
          :class="{
            'dark-grey-button': isFreeItemMasterBtnClicked,
            'light-grey-button': !isFreeItemMasterBtnClicked,
          }"
          @click="onFreeItemMasterClick()"
        >
          自由項目マスタ
        </button>
        <button
          :class="{
            'dark-grey-button': isPatternMasterBtnClicked,
            'light-grey-button': !isPatternMasterBtnClicked,
          }"
          @click="onPatternMasterClick()"
        >
          パターンマスタ
        </button>
        <button
          :class="{
            'dark-grey-button': isEnterTypeMasterBtnClicked,
            'light-grey-button': !isEnterTypeMasterBtnClicked,
          }"
          @click="onEnterTypeMasterClick()"
        >
          入力タイプマスタ
        </button>
        <button
          :class="{
            'dark-grey-button': isBasicBtnClicked,
            'light-grey-button': !isBasicBtnClicked,
          }"
          @click="onBasicClick()"
        >
          基本項目マスタ
        </button>
        <button
          :class="{
            'dark-grey-button': isRoutineMasterBtnClicked,
            'light-grey-button': !isRoutineMasterBtnClicked,
          }"
          @click="onRoutineMasterClick()"
        >
          ルーティンマスタ
        </button>
        <button
          :class="{
            'dark-grey-button': isSetMasterBtnClicked,
            'light-grey-button': !isSetMasterBtnClicked,
          }"
          @click="onSetMasterClick()"
        >
          セットマスタ
        </button>
      </div>
      <!-- FreeItemMasterBtn content -->
      <div class="d-flex" v-if="isFreeItemMasterBtnClicked">
        <PagesGlobalMasterFloSheetFlowsheetFreeInput />
      </div>
      <!-- PatternMasterBtn content -->
      <div class="d-flex" v-if="isPatternMasterBtnClicked">
        <PagesGlobalMasterFloSheetObservationPattern />
      </div>
      <!-- EnterTypeMasterBtn content -->
      <div class="d-flex" v-if="isEnterTypeMasterBtnClicked">
        <PagesGlobalMasterFloSheetObservationSelectItemGroup />
      </div>
       <!-- BasicBtnBtn content -->
      <div class="d-flex" v-if="isBasicBtnClicked">
        <PagesGlobalMasterFloSheetObservationInputType />
      </div>
      <!-- RoutineMasterBtn content -->
      <div class="d-flex" v-if="isRoutineMasterBtnClicked">
        <PagesGlobalMasterFloSheetFlowsheetRoutine />
      </div>
       <!-- SetMasterBtnBtn content -->
       <div class="d-flex" v-if="isSetMasterBtnClicked">
        <PagesGlobalMasterFloSheetObservationSet />
      </div>
    </div>
  </div>
</template>
        
  <script setup lang="ts">
import { ref } from 'vue'

const isFreeItemMasterBtnClicked = ref(true)
const isPatternMasterBtnClicked = ref(false)
const isEnterTypeMasterBtnClicked = ref(false)
const isBasicBtnClicked = ref(false)
const isRoutineMasterBtnClicked = ref(false)
const isSetMasterBtnClicked = ref(false)

const onFreeItemMasterClick = () => {
  isFreeItemMasterBtnClicked.value = true
  isPatternMasterBtnClicked.value = false
  isEnterTypeMasterBtnClicked.value = false
  isBasicBtnClicked.value = false
  isRoutineMasterBtnClicked.value = false
  isSetMasterBtnClicked.value = false
}

const onPatternMasterClick = () => {
  isFreeItemMasterBtnClicked.value = false
  isPatternMasterBtnClicked.value = true
  isEnterTypeMasterBtnClicked.value = false
  isBasicBtnClicked.value = false
  isRoutineMasterBtnClicked.value = false
  isSetMasterBtnClicked.value = false
}

const onEnterTypeMasterClick = () => {
  isFreeItemMasterBtnClicked.value = false
  isPatternMasterBtnClicked.value = false
  isEnterTypeMasterBtnClicked.value = true
  isBasicBtnClicked.value = false
  isRoutineMasterBtnClicked.value = false
  isSetMasterBtnClicked.value = false
}
const onBasicClick = () => {
  isFreeItemMasterBtnClicked.value = false
  isPatternMasterBtnClicked.value = false
  isEnterTypeMasterBtnClicked.value = false
  isBasicBtnClicked.value = true
  isRoutineMasterBtnClicked.value = false
  isSetMasterBtnClicked.value = false
}
const onRoutineMasterClick = () => {
  isFreeItemMasterBtnClicked.value = false
  isPatternMasterBtnClicked.value = false
  isEnterTypeMasterBtnClicked.value = false
  isBasicBtnClicked.value = false
  isRoutineMasterBtnClicked.value = true
  isSetMasterBtnClicked.value = false
}
const onSetMasterClick = () => {
  isFreeItemMasterBtnClicked.value = false
  isPatternMasterBtnClicked.value = false
  isEnterTypeMasterBtnClicked.value = false
  isBasicBtnClicked.value = false
  isRoutineMasterBtnClicked.value = false
  isSetMasterBtnClicked.value = true
}
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
.dark-grey-button {
  background-color: #51565b;
  color: white;
  padding: 10px 10px;
  border: none;
  text-align: center;
  display: inline-block;
  font-size: 14px;
  margin-left: 10px;
}

.light-grey-button {
  background-color: #f0f3f4;
  color: black;
  padding: 10px 10px;
  border: none;
  text-align: center;
  display: inline-block;
  font-size: 14px;
  margin-left: 10px;
}
</style>
        