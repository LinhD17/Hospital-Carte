<script setup lang="ts"> 
import imageUrl from '@/assets/icon/schedule.svg'
</script>
<template>
    <div class="observationpattern-card-width">
        <PagesGlobalBaseLayout
            page-title="文章マスタ設定"
        >
            <template #iconImg>
                <img :src="imageUrl"/> 
            </template>
            <PagesGlobalMasterDocumentMasterSetSearchField />
            <PagesGlobalMasterDocumentMasterSetTable1 />
        </PagesGlobalBaseLayout>
    </div>
</template>
<style scoped>
.observationpattern-card-width {
    margin-left: 2%;
    margin-top: -12px;
}
</style>
