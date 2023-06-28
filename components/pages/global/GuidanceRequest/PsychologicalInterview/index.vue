<template>
  <div class="screen-header">
    <PagesGlobalGeneralGlobalBaseLayout page-title="精神科退院前訪問看護">
      <template #iconImg>
        <img :src="imageUrl" />
      </template>
      <template #header>
        <div class="switch-select">
          <v-btn
            @click="appTabClick('reception')"
            :class="appTab === 'reception' ? 'is-active' : ''"
            color="#459caa"
            outlined
            >受付一覧</v-btn
          >
          <v-btn
            @click="appTabClick('instruction')"
            :class="appTab === 'instruction' ? 'is-active' : ''"
            color="#459caa"
            outlined
            >指示患者一覧</v-btn
          >
        </div>
      </template>
      <template v-if="appTab === 'reception'">
        <PagesGlobalGuidanceRequestPsychiatricPredischargeVisitReception />
      </template>
      <template v-if="appTab === 'instruction'">
        <PagesGlobalGuidanceRequestPsychiatricPredischargeVisitInstruction />
      </template>
    </PagesGlobalGeneralGlobalBaseLayout>
  </div>
</template>
<script lang="ts">
import imageUrl from '@/assets/icon/schedule.svg'
import { defineComponent, ref } from 'vue'

export default defineComponent({
<<<<<<< HEAD
components: {
  //
},
setup() {
  const appTab = ref('reception')
  const appTabClick = (appType: string) => {
    appTab.value = appType
  }
  return {
    appTab,
    appTabClick,
  }
},
=======
  components: {
    //
  },
  setup() {
    const appTab = ref('reception')
    const appTabClick = (appType: string) => {
      appTab.value = appType
    }
    return {
      appTab,
      appTabClick,
    }
  },
>>>>>>> 3cfa6350aca1b7e733688658540ba0accb6fad96
})
</script>


<style lang="scss" scoped>
.screen-header {
  //width: 100%;
  margin-left: 2%;
  margin-top: -12px;
  font-size: small;
}
.switch-select {
  display: flex;
  align-items: center;
  margin-right: 10px;

  .v-btn {
    width: 125px;
    border-radius: 0;
    width: 125px;
    border-radius: 0;
    font-weight: bold;
    &:first-of-type {
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      border-right: 0;
    }
    &:last-of-type {
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      border-left: 0;
    }
    &.is-active {
      background-color: #459caa;
      color: #ffffff !important;
    }
  }
}
</style>
