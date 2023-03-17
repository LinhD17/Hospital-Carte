<template>
  <div class="page-login">
    <Login />
  </div>
</template>

<script lang="ts">
import Login from '~/components/pages/login/login.vue';

export default {
   components: { 
    Login 
  }
}
</script>

<style lang="scss" scoped>
.page-login {
  padding-bottom: 150px;
  text-align: center !important;
  background-color: #e8f5fb;
}
</style>