<template>
    <div class="sticky-search">
        <PagesGlobalGeneralGlobalBaseLayout
            page-title="付箋一覧" 
        >
            <template #iconImg>
                <img :src="imageUrl"/> 
            </template>
            <PagesGlobalOthersStickyNoteSearchSeField />
            <PagesGlobalOthersStickyNoteSearchTable />
            <!-- <PagesGlobalWardInpatientOfExaminationSearchField />  -->
            <!-- <PagesGlobalWardInpatientOfExaminationTable/> -->
        </PagesGlobalGeneralGlobalBaseLayout >
    </div>
</template>
  
<script setup lang="ts">
import imageUrl from '@/assets/icon/schedule.svg'
</script>
  
<style lang="scss" scoped>
.sticky-search {
    //width: 100%;
    margin-left: 2%;
    margin-top: -12px;
}
</style>