<script setup lang="ts"> 
import imageUrl from '@/assets/icon/ward.svg'
</script>
<template>
    <div class="outpatient-card-width">
        <PagesGlobalBaseLayout
            page-title="予約枠マスタ設定"
        >
            <template #iconImg>
                <img :src="imageUrl"/> 
            </template>
            <PagesGlobalMasterReservationSlotShowSearchField />
            <PagesGlobalMasterReservationSlotShowTable />
        </PagesGlobalBaseLayout>
    </div>
</template>
<style scoped>
.outpatient-card-width {
    margin-left: 2%;
    margin-top: -12px;
}
</style>
