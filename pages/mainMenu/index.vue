<template>
  <div>
    <div class="main-menu">
      <MainMenu />
    </div>
    <!-- rest of the Main.vue template -->
  </div>
</template>

<script lang="ts">
import MainMenu from '~/components/pages/mainMenu/mainMenu.vue'

export default {
  components: {
    MainMenu,
  },
  // rest of the Main.vue script
}
</script>

<style lang="scss" scoped>
.main-menu {
  padding-left: 40%;
  background-color: #e8f5fb;
  padding-bottom: 120px;
  text-align: center !important;
}
</style>
