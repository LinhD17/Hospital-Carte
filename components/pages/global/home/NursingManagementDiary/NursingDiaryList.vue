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
          v-model="state.ward_1"
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
          v-model="state.ward_2"
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
          v-model="state.outpatient"
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
  import { stat } from 'fs';
import { reactive, watch, defineComponent } from 'vue';
  
  export default defineComponent({
    props:{
      wardFirst: {
        type: String, 
        required: true,
      }, 
      wardSecond: {
        type: String, 
        required: true
      },
      outpatient: {
        type: String, 
        required: true
      }, 
      loading: {
        type: Boolean, 
        required: true,
      }
      
    }, 
    setup(props, { emit }) {
      const state = reactive({
        ward_1: '',
        ward_2: '',
        outpatient: '',
      })
      // watch: cung cấp phương thức để quan sát và phản ứng với những thay đổi trong dữ liệu mà không cần gọi các phương thức 1 cách rõ ràng hoặc dựa vào các thuộc tính được tính toán 
      watch(
        () => props.wardFirst, 
        (val) => {
          state.ward_1 = val
        }, 
        {immediate: true}
      )
      watch(
        () => props.wardSecond, 
        (val) => {
          state.ward_2 = val
        }, 
        {immediate: true}
      )
      watch(
        () => props.outpatient, 
        (val)=> {
          state.outpatient = val
        }, 
        {immediate: true}
      )

      watch(
        () => state.ward_1, 
        (val) => {
          emit('update:wardFirst', val)
        }
      )
      watch(
        () => state.ward_2, 
        (val) => {
          emit('update:wardSecond', val)
        }
      )
      watch(
        () => state.outpatient, 
        (val) => {
          emit('update:outpatient', val)
        }
      )

      return {
        state,
      }
    }
  })




  
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
  