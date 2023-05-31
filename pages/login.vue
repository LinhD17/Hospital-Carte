<template>
  <div class="page-login">
      <PagesLogin />
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: "login"
  })
</script>


<style lang="scss" scoped>
.page-login {
  padding-bottom: 184px;
  text-align: center !important;
  background-color: #e8f5fb;
}
</style>