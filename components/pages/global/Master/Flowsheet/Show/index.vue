<script setup lang="ts"> 
import imageUrl from '@/assets/icon/ward.svg'
</script>
<template>
    <div class="flowsheet-card-width">
        <PagesGlobalGeneralGlobalBaseLayout 
            page-title="フローシートマスタ設定"
        >
            <template #iconImg>
                <img :src="imageUrl"/> 
            </template>
            <PagesGlobalMasterFlowsheetShowSearchField 
            />
            <PagesGlobalMasterFlowsheetShowTableFlowsheet 
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
.flowsheet-card-width {
    margin-left: 2%;
    margin-top: -12px;
}
</style>
