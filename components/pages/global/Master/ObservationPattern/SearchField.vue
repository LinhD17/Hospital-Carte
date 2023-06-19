<template>
    <div class="search-fields">
      <div class="search-condition mt-4">
        <div class="d-flex ml-6">
          <button :class="{'dark-grey-button': isFreeItemMasterBtnClicked, 'light-grey-button': !isFreeItemMasterBtnClicked}" @click="onFreeItemMasterClick()">FreeItemMaster</button>
          <button :class="{'dark-grey-button': isPatternMasterBtnClicked, 'light-grey-button': !isPatternMasterBtnClicked}" @click="onPatternMasterClick()">PatternMaster</button>
        </div>
        <div class="d-flex" v-if="isFreeItemMasterBtnClicked">
          <!-- FreeItemMasterBtn content -->
          <div class="ml-3 mt-5">
            <v-checkbox dense hide-details label="有効期間以外の自由項目を含める" />
          </div>
          <div class="ml-5 mt-7">
            <v-btn rounded small style="background-color: #1ea0dc; color: #ffffff; padding: 10px;">検索1</v-btn>
          </div>
        </div>
        <div class="d-flex" v-if="isPatternMasterBtnClicked">
          <!-- PatternMasterBtn content -->
          <div class="ml-3 mt-5">
            <v-checkbox dense hide-details label="有効期間以外のパターンを含める" />
          </div>
          <div class="ml-5 mt-7">
            <v-btn rounded small style="background-color: #1ea0dc; color: #ffffff; padding: 10px;">検索2</v-btn>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const isFreeItemMasterBtnClicked = ref(false);
  const isPatternMasterBtnClicked = ref(false);
  
  const onFreeItemMasterClick = () => {
    isFreeItemMasterBtnClicked.value = true;
    isPatternMasterBtnClicked.value = false;
  };
  
  const onPatternMasterClick = () => {
    isFreeItemMasterBtnClicked.value = false;
    isPatternMasterBtnClicked.value = true;
  };
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
  