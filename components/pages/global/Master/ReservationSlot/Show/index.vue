<script setup lang="ts"> 
import imageUrl from '@/assets/icon/ward.svg'
</script>
<template>
    <div class="reservation-slot-width">
        <PagesGlobalGeneralGlobalBaseLayout 
            page-title="予約枠マスタ設定"
        >
            <template #iconImg>
                <img :src="imageUrl"/> 
            </template>
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
.reservation-slot-width {
    margin-left: 2%;
    margin-top: -12px;
}
</style>
