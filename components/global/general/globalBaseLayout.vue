<template>
  <div>
    <screen-header 
        :page-title="pageTitle"
        :title-icon="titleIcon"
    >
        <slot name="header"></slot>
    </screen-header>
    <div class="screen-contents-card">
        <slot></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import screenHeader from '~/components/general/screenHeader.vue'
export default defineComponent({
  components: { 
    screenHeader,
  },
  props: {
    pageTitle: String,
    titleIcon: String,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.screen-contents-card {
  margin: 10px;
  background-color: #ffffff;
  border-radius: 10px;
  height: 100%;
}
</style>