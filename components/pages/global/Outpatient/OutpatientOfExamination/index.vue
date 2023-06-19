<script setup lang="ts"> 
import imageUrl from '@/assets/icon/schedule.svg'
</script>
<template>
    <div class="outpatient-card-width">
        <PagesGlobalGeneralGlobalBaseLayout
            page-title="外来患者一覧（診察）"
        >
            <template #iconImg>
                <img :src="imageUrl"/> 
            </template>
            <PagesGlobalOutpatientOutpatientOfExaminationSearch />
            <PagesGlobalOutpatientOutpatientOfExaminationTable />
        </PagesGlobalGeneralGlobalBaseLayout>
    </div>
</template>
<style scoped>
.outpatient-card-width {
    margin-left: 2%;
    margin-top: -12px;
}
</style>
