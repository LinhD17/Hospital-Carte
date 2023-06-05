<template>
    <div class="labelmanagement">
        <PagesGlobalBaseLayout 
            page-title="ラベル管理患者一覧" 
        >
            <template #iconImg>
                <img :src="imageUrl"/> 
            </template>
            
            <PagesGlobalOthersLabelManagementSearchField /> 
            <PagesGlobalOthersLabelManagementTable />
        </PagesGlobalBaseLayout>
    </div>
</template>
  
<script setup lang="ts">
import imageUrl from '@/assets/icon/ward.svg'
</script>
  
<style lang="scss" scoped>
.labelmanagement {
    //width: 100%;
    margin-left: 2%;
    margin-top: -12px;
}
</style>