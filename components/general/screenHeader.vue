<template>
  <div class="global-title">
    <div class="global-title-heading" style="display:flex">
        <i class="icon">
            <img :src="require(`@/assets/icons/${titleIcon}`)" alt="" />
        </i>
        <h2 class="title">{{ pageTitle }}</h2>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
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
.global-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 55px;
  padding: 20px;
  background-color: #e5f5f7; 
  border-bottom: 1px solid #009eac;
  .global-title-heading {
    display: flex;
    font-size: 29px;
    font-weight: normal;
    color: #009eac;
    margin-top: 15px;

    .icon {
      width: 30px;
      margin-right: 2px;
    }
    .title {
      font-size: 21px;
      font-weight: normal;
      color: #009eac;
    }
  }
}
</style>