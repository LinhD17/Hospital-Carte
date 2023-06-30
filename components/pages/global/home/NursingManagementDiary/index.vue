<template>
    <div class="contents">
        <PagesGlobalGeneralGlobalBaseLayout 
            page-title="看護管理日誌" 
        >
            <template #iconImg>
                <img :src="imageUrl"/> 
            </template>
            <SearchField />
            <PatientMovementStatusTable />
        </PagesGlobalGeneralGlobalBaseLayout>
    </div>
</template>
  
<script setup lang="ts">
import imageUrl from '@/assets/icon/schedule.svg'; 
import SearchField from './SearchField.vue';
import PatientMovementStatusTable from './PatientMovementStatusTable.vue';
</script>
  
<style lang="scss" scoped>
.contents {
    //width: 100%;
    margin-left: 2%;
    margin-top: -12px;
}
</style>