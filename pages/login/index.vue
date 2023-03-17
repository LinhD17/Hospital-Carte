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
  padding-left: 40% ;
  background-color: #e8f5fb;
  padding-bottom: 120px;
  text-align: center !important;
}
</style>