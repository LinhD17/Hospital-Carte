<script setup lang="ts"> 
import imageUrl from '@/assets/icon/ward.svg'
</script>
<template>
    <div class="outpatient-card-width">
        <PagesGlobalGeneralGlobalBaseLayout 
            page-title="予約枠マスタ設定"
        >
            <template #iconImg>
                <img :src="imageUrl"/> 
            </template>
            <PagesGlobalMasterReservationSlotShowSearchField 
            />
            <PagesGlobalMasterReservationSlotShowTable 
            />
            <!-- bulk-register-modal -->
            <template>
                <!-- <PagesGlobalMasterReservationSlotRegisterBulkRegisterModal /> -->
            </template>
            <!-- register-modal -->
            <template>
                <!-- <PagesGlobalMasterReservationSlotRegisterRegisterModal /> -->
            </template>
            <!-- delete modal -->
            <!-- <GeneralModalDeleteModal/> -->
        </PagesGlobalGeneralGlobalBaseLayout >
    </div>
</template>
<style scoped>
.outpatient-card-width {
    margin-left: 2%;
    margin-top: -12px;
}
</style>
