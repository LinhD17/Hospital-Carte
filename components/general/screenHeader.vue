<template>
  <div class="global-title">
    <div class="global-title-heading" style="display:flex">
        <i style="padding-right: 8px">
            <img src="@/assets/icons/schedule.svg" alt="">
        </i>
        <p>周知・業務タスク</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.global-title {
  width: 100% !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 45px;
  padding: 20px;
  background-color: #e5f5f7; 
  border-bottom: 1px solid #009eac;
  .global-title-heading {
    display: flex;
    font-size: 18px;
    font-weight: normal;
    color: #009eac;
    margin-top: 15px;
  }
}
</style>