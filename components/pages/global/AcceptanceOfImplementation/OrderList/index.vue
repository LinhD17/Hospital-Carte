<template>
    <div class="screen-header">
        <PagesGlobalGeneralGlobalBaseLayout 
            page-title="指示受け一覧" 
        >
            <template #iconImg>
                <img :src="imageUrl"/> 
            </template>

            <PagesGlobalAcceptanceOfImplementationOrderListSearchField />
            <PagesGlobalAcceptanceOfImplementationOrderListTable/>
        </PagesGlobalGeneralGlobalBaseLayout>
    </div>
</template>
  
<script setup lang="ts">
import imageUrl from '@/assets/icon/title_tick.svg'
</script>
  
<style lang="scss" scoped>
.screen-header {
    //width: 100%;
    margin-left: 2%;
    margin-top: -12px;
    font-size: small;
}
</style>