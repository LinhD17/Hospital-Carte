<template>
    <div class="tagSearch">
        <PagesGlobalBaseLayout 
            page-title="タグ検索" 
        >
            <template #iconImg>
                <img :src="imageUrl"/> 
            </template>
            
            <PagesGlobalOthersTagSearchSField /> 
            <PagesGlobalOthersTagSearchTable />
        </PagesGlobalBaseLayout>
    </div>
</template>
  
<script setup lang="ts">
import imageUrl from '@/assets/icon/ward.svg'
</script>
  
<style lang="scss" scoped>
.tagSearch {
    //width: 100%;
    margin-left: 2%;
    margin-top: -12px;
}
</style>