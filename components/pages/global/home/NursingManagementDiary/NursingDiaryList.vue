<template>
    <div class="nursing-diary">
      <div class="table-title">看護日誌一覧</div>
  
      <div class="nursing-diary__header">
        <div class="font-weight-bold">病棟/外来</div>
        <div class="font-weight-bold">特記</div>
      </div>
  
      <div class="block">
        <div class="d-flex">
          <div class="block__title">１病棟</div>
          <v-btn 
            rounded
            variant="outlined"
            color="primary" 
            class="block__btn-capture"
          >取り込み
          </v-btn>
        </div>
        <v-textarea
          dense
          variant="solo"
          hide-details="auto"
          placeholder=""
          background-color="#ffffff"
          rows="4"
          class="block__text-area"
        ></v-textarea>
      </div>
  
      <div class="block">
        <div class="d-flex">
          <div class="block__title">２病棟</div>
          <v-btn 
            rounded
            variant="outlined"
            color="primary" 
            class="block__btn-capture"
          >取り込み
          </v-btn>
        </div>
        <v-textarea
          dense
          variant="solo"
          hide-details="auto"
          placeholder=""
          background-color="#ffffff"
          rows="4"
          class="block__text-area"
        ></v-textarea>
      </div>
  
      <div class="block">
        <div class="d-flex">
          <div class="block__title">外来</div>
          <v-btn 
            rounded
            variant="outlined"
            color="primary" 
            class="block__btn-capture"
          >取り込み
          </v-btn>
        </div>
        <v-textarea
          dense
          variant="solo"
          hide-details="auto"
          placeholder=""
          background-color="#ffffff"
          rows="4"
          class="block__text-area"
        ></v-textarea>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  </script>
  
  <style lang="scss" scoped>
  .nursing-diary {
    .table-title {
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 10px;
      margin-left: 15px;
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
  
    &__header {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-left: 15px;
      height: 40px;
      background-color: #e6e6e6;
      .font-weight-bold {
        font-size: 14px;
      }
    }
  
    .block {
      padding: 20px;
      border-bottom: 1px #c7ccce solid;
      background-color: #fff;
  
      &:last-child {
        border-bottom: none;
      }
  
      &__title {
        font-size: 14px;
        font-weight: bold;
      }
  
      &__btn-capture {
        margin-left: 10px;
        min-width: 60px !important;
        height: 20px !important;
        font-size: 10px;
      }
  
      &__text-area {
        margin-top: 10px;
      }
    }
  }
  </style>
  