<script setup lang="ts"> 
import imageUrl from '@/assets/icon/ward.svg'
</script>
<template>
    <div class="observationpattern-card-width">
        <PagesGlobalBaseLayout
            page-title="プローシートマスタ設定"
        >
            <template #iconImg>
                <img :src="imageUrl"/> 
            </template>
            <PagesGlobalMasterObservationPatternSearchField />
            <PagesGlobalMasterObservationPatternFreeItemTable />
            <!-- <PagesGlobalMasterObservationPatternPtrnMasterTable /> -->
        </PagesGlobalBaseLayout>
    </div>
</template>
<style scoped>
.observationpattern-card-width {
    margin-left: 2%;
    margin-top: -12px;
}
</style>
