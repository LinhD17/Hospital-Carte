<template>
  <div class="search-fields">
    <div class="search-condition mt-4">
      <div class="d-flex">
        <div class="ml-3">
          <p class="mb-0 text-left">文書分類</p>
          <v-select
            dense
            clearable
            variant="solo"
            hide-details
            style="width: 210px; background-color: white"
            placeholder="全て"
            :items="['A', 'B', 'C', 'D']"
          />
        </div>
        <div class="ml-5 mt-8">
          <v-btn rounded small style="background-color: #1ea0dc; color: #ffffff"
            >検索</v-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
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
  