<template>
  <div class="d-flex">
    <div class="ml-3 mt-7">
      <v-select
        dense
        clearable
        variant="solo"
        hide-details
        style="width: 150px"
        :items="['南病棟', '西病棟', '東病棟', '中央病棟']"
      ></v-select>
    </div>
    <div class="ml-5 mt-10">
      <v-btn
        rounded
        small
        style="background-color: #1ea0dc; color: #ffffff; padding: 10px"
        >検索</v-btn
      >
    </div>
  </div>
</template>