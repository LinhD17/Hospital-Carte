<script setup>
  const props = defineProps({
    // titleIcon: {type : String},
    pageTitle: {type : String},
  })
    // interface Props {
    //     pageTitle: string,
    //     titleIcon: string,
    // }

    // const Props = withDefaults(defineProps<Props>(), {
    //     pageTitle: "",
    //     titleIcon: "",
    // });
</script>

<template>
    <div class="global-deader">
      <GeneralGlobalHeader 
        :page-title="pageTitle"
      >
        <template #icon >
          <slot name="iconImg" />
        </template>
          <slot name="header"></slot>
      </GeneralGlobalHeader>
      <div class="screen-contents-card">
          <slot></slot>
      </div>
    </div>
</template>
  
  <style lang="scss" scoped>
  
  .screen-contents-card {
    // margin: 10px;
    padding-bottom: 0 !important;
    border-radius: 10px;
    height: calc(100vh - 135px);
  }
  </style>