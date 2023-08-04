<template>
    <div class="wrapper">
        <PagesGlobalGeneralGlobalBaseLayout 
            page-title="看護管理日誌" 
        >
            <template #iconImg>
                <img :src="imageUrl"/> 
            </template>
            <div class="content">
                <SearchField />
                <PatientMovementStatusTable_Sub/>
                <!-- <PatientMovementStatusTable /> -->

                <NumberOfOutpatientsTable />

                <!-- <PatientsByWardTable_Sub/> -->
                <PatientsByWardTable />
                <PatientsMovementByWardTable />

                <ShiftTable />
                
                <div class="content__split">
                    <div class="content__split--left">
                        <NursingDiaryList />
                    </div>
                    <div class="content__split--right">
                        <LogNote />
                    </div>
                </div>

                <div class="d-flex justify-center mt-10 mb-10">
                    <v-btn 
                        color="primary" 
                        class="btn-submit"
                        rounded
                    >
                        登録
                    </v-btn>
                </div>
            </div>
        </PagesGlobalGeneralGlobalBaseLayout>
    </div>
</template>
  
<script setup lang="ts">
import imageUrl from '@/assets/icon/schedule.svg'; 
import SearchField from './SearchField.vue';
//import PatientMovementStatusTable from './PatientMovementStatusTable.vue';
import NumberOfOutpatientsTable from './NumberOfOutpatientsTable.vue';
import PatientsByWardTable from './PatientsByWardTable.vue';
import PatientsMovementByWardTable from './PatientsMovementByWardTable.vue';
import ShiftTable from './ShiftTable.vue';
import NursingDiaryList from './NursingDiaryList.vue';
import LogNote from './LogNote.vue';
import PatientMovementStatusTable_Sub from './PatientMovementStatusTable_Sub.vue';
import PatientsByWardTable_Sub from './PatientsByWardTable_Sub.vue';
</script>
  
<style lang="scss" scoped>
.wrapper {
    //width: 100%;
    margin-left: 2%;
    margin-top: -12px;
}
.content {
    padding: 20px;

    &__split {
        display: flex;
        gap: 20px;
        margin-top: 30px;

        &--left,
        &--right {
        width: 50%;
        }
    }
    .btn-submit {
        padding: 8px 27px;
        width: 78px;
        height: 34px;
    }
}
</style>