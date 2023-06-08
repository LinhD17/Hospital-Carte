<template>
    <div class="search-fields">
      <div class="search-condition mt-4">
        <div class="d-flex ml-6">
            <button :class="{'dark-grey-button': isFreeItemMasterBtnClicked, 'light-grey-button': !isFreeItemMasterBtnClicked}" @click="isFreeItemMasterBtnClicked = true; isPatternMasterBtnClicked = false">自由項目マスタ</button>
            <button :class="{'dark-grey-button': isPatternMasterBtnClicked, 'light-grey-button': !isPatternMasterBtnClicked}" @click="isPatternMasterBtnClicked = true; isFreeItemMasterBtnClicked = false">パターンマスタ</button>
        </div>
        <div class="d-flex" v-if="isFreeItemMasterBtnClicked">
          <!-- FreeItemMasterBtn content -->
          <div class="ml-3 mt-5">
            <v-checkbox
              dense
              hide-details
              label="有効期間以外の自由項目を含める"
            />
          </div>
          <div class="ml-5 mt-7">
            <v-btn rounded small style="background-color: #1ea0dc; color: #ffffff"
              >検索</v-btn
            >
          </div>
        </div>
        <!-- <div v-if="isFreeItemMasterBtnClicked">
          <PagesGlobalMasterObservationPatternSearchField />
        </div> -->
        <div class="d-flex" v-if="isPatternMasterBtnClicked">
          <!-- PatternMasterBtn content -->
          <div class="ml-3 mt-5">
            <v-checkbox
              dense
              hide-details
              label="有効期間以外のパターンを含める"
            />
          </div>
          <div class="ml-5 mt-7">
            <v-btn rounded small style="background-color: #1ea0dc; color: #ffffff"
              >検索</v-btn
            >
          </div>
        </div>
        <!-- <div v-if="isFreeItemMasterBtnClicked">
            <PagesGlobalMasterObservationPatternPtrnMasterTable />
        </div> -->
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
    //   If FreeItemMasterBtnClick
  const isFreeItemMasterBtnClicked = ref(true);
  const isPatternMasterBtnClicked = ref(false);
  //   If PatternMasterBtnClick
//   const isFreeItemMasterBtnClicked = ref(false);
//   const isPatternMasterBtnClicked = ref(true); 
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
    margin-right: 2px;
  }
  
  .light-grey-button {
    background-color: #f0f3f4;
    color: black;
    padding: 10px 10px;
    border: none;
    text-align: center;
    display: inline-block;
    font-size: 14px;
    margin-right: 10px;
  }
  </style>
  