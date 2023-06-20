<template>
    <div class="well-known">
        <PagesGlobalGeneralGlobalBaseLayout 
            page-title="精神疾患レジストリ" 
        >
            <template #iconImg>
                <img :src="imageUrl"/> 
            </template>
            <PagesGlobalManagementRegistrySearchField />
            <PagesGlobalManagementRegistryTable /> 
        </PagesGlobalGeneralGlobalBaseLayout>
    </div>
</template>
  
<script setup lang="ts">
import imageUrl from '@/assets/icon/schedule.svg'
</script>
  
<style lang="scss" scoped>
.well-known {
    //width: 100%;
    margin-left: 2%;
    margin-top: -12px;
}
</style>