<template>
  <div class="outpatient-card-width">
    <GlobalBaseLayout
      page-title="外来患者一覧（診察）"
      title-icon="schedule.svg"
    >
      <search-field />
      <outpatient-of-examination-table />
    </GlobalBaseLayout>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import SearchField from './outpatientOfExaminationSearchField.vue'
import OutpatientOfExaminationTable from './outpatientOfExaminationTable.vue'
import GlobalBaseLayout from '@/components/pages/global/general/globalBaseLayout.vue'

export default defineComponent({
  components: {
    GlobalBaseLayout,
    SearchField,
    OutpatientOfExaminationTable,
  },
})
</script>

<style scoped>
.outpatient-card-width {
  width: 98.5%;
  height: 100%;
}
</style>
