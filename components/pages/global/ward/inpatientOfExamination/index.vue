<template>
    <div class="well-known">
        <PagesGlobalGeneralGlobalBaseLayout 
            page-title="入院患者一覧" 
        >
            <template #iconImg>
                <img :src="imageUrl"/> 
            </template>
            
            <template #header>
                <v-btn 
                    color="teal darken-2" 
                    class="bt-basic h-middle w-auto"
                >
                    病棟マップ
                </v-btn>
            </template>
            <PagesGlobalWardInpatientOfExaminationSearchField /> 
            <PagesGlobalWardInpatientOfExaminationTable/>
        </PagesGlobalGeneralGlobalBaseLayout>
    </div>
</template>
  
<script setup lang="ts">
import imageUrl from '@/assets/icon/ward.svg'
</script>
  
<style lang="scss" scoped>
.well-known {
    //width: 100%;
    margin-left: 2%;
    margin-top: -12px;
}
</style>