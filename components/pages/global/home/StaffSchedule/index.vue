<script setup lang="ts">
import imageUrl from '@/assets/icon/schedule.svg'
import Calendar from './Calendar.vue';
import Timetable from './TimeTable.vue'
</script>
<template>
    <div class="content-card">
        <GeneralGlobalHeader 
          pageTitle="職員スケジュール" 
        >
          <template #icon>
            <img :src="imageUrl"/> 
          </template>
        </GeneralGlobalHeader>

        <div class="contents">
            <div class="contents-left">
                <Calendar />
            </div>
            <div class="contents-right">
                <Timetable />
            </div> 
        </div>
    </div>
</template>

<style lang="scss" scoped>
.content-card {
    // width: 100%;
    margin-left: 2.5%;
    margin-top: -12px;
}
.contents {
    display: flex;
    height: calc(100vh - 100px);
    margin: 10px 10px 5px;
    background-color: white !important;
    border: 0.5px solid gray;
}
.contents-left {
    width: 20%;
}
.contents-right {
    width: 80%;
    flex-direction: column;
}
</style>