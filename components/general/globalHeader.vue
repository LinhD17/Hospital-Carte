<script setup>
//import { ref, watchEffect } from 'vue'
const props = defineProps({
  // titleIcon: {type : String},
  pageTitle: {type : String},
})
</script> 

<template>
    <div class="global-title">
      <div class="global-title-heading" style="display:flex">

        <!--Vite/Vue3 "rewuire is not defined" when using image source as props -->
        <!-- <i class="icon">
          <img :src="require(`@/assets/icons/${titleIcon}`)" alt="" /> 
        </i> -->

        <i class="icon">
          <slot name="icon"/>
        </i>

        <h2 class="title">{{ pageTitle }}</h2>
      </div>
      <slot />
    </div>
</template>

<style lang="scss" scoped>
  .global-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 55px;
    padding: 24px;
    background-color: #e5f5f7; 
    border-bottom: 1px solid #009eac;
    width: 100%;
    .global-title-heading {
      display: flex;
      color: #009eac;
      margin-top: 15px;
      align-items: center;
  
      .icon {
        width: 30px;
        margin-bottom: 5px;
      }
      .title {
        font-size: 20px !important;
        font-weight: normal;
        color: #009eac;
        margin-bottom: 5px;
      }
    }
  }
  </style>