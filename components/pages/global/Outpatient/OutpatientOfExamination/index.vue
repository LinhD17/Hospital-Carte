<script setup lang="ts">
import imageUrl from '@/assets/icon/title_outpatient.svg'
</script>

<template>
  <div class="outpatient-card-width">
    <GeneralGlobalHeader 
      page-title="外来患者一覧（診察）"
    >
      <template #iconImg>
        <img :src="imageUrl" />
      </template>
    </GeneralGlobalHeader>
    <div class="contents">
      <div class="contents-search-section">
        <PagesGlobalOutpatientOutpatientOfExaminationSearchField />
        <v-divider class="my-2 mt-2 ml-9 mr-9" />
        <PagesGlobalOutpatientOutpatientOfExaminationConsultationProgress />
      </div>
      <div class="contents-table-section">
        <PagesGlobalOutpatientOutpatientOfExaminationTable />
      </div>
    </div>
  </div>
</template>
<style scoped>
.outpatient-card-width {
  margin-left: 2%;
  margin-top: -12px;
}
.contents {
  /* display: flex; */
  height: calc(100vh - 60px);
  width: 100% !important;
  border-radius: 10px !important;
  background: white;

}
.contents-search-section {
  width: 99.5%;
  margin: 0px;
  border-radius: 10px !important;
  background: white;
  /* text-align: center; */
}
.contents-table-section {
  width: 99.5%;
  border-radius: 10px !important;
  margin: 0px;
  background: white;
}
</style>
