<template>
  <div class="login-wrap">
    <div class="screen-header">
        <screen-header />
    </div>
    <div class="screen-content">
    </div>
  </div>
</template>

<script lang="ts">
import screenHeader from '~/components/general/screenHeader.vue';

export default {
  components: { screenHeader },
  setup() {
    return {}
  },
};
</script>
<style lang="scss" scoped>
.login-wrap{
  //text-align: center !important;
  width: 100%;
  position: absolute;
}
</style>

