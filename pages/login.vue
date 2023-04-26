<template>
    <div class="page-login">
        <login/>
    </div>
  
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Login from '~/components/pages/login/Login.vue'

export default defineComponent({
    components: {
        Login
    }
})
</script>
<style lang="scss" scoped>
.page-login {
  padding-bottom: 184px;
  text-align: center !important;
  background-color: #e8f5fb;
}
</style>