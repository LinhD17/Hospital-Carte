<template>
  <div class="page-outpatientOfExaminationIndex">
    <OutpatientOfExaminationIndex />
  </div>
</template>

<script lang="ts">
import OutpatientOfExaminationIndex from '~/components/pages/global/outpatientOfExamination/outpatientOfExaminationIndex.vue'
export default {
   components: { 
    OutpatientOfExaminationIndex 
  }
}
</script>

<style lang="scss" scoped>
.page-outpatientOfExaminationIndex {
  padding-bottom: 150px;
  text-align: center !important;
  background-color: #f0f0f0;
}
</style>