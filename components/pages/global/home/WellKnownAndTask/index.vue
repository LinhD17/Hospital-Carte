<script setup lang="ts">
import imageUrl from '@/assets/icon/schedule.svg'
</script>
<template>
    <div class="well-known">
        <GeneralGlobalHeader 
          pageTitle="周知・業務タスク" 
        >
          <template #icon>
            <img :src="imageUrl"/> 
          </template>
        </GeneralGlobalHeader>

        <div class="contents">
            <div class="contents-left">
                <PagesGlobalHomeWellKnownAndTaskImportantReport class="reports"/>
                <PagesGlobalHomeWellKnownAndTaskThread class="threads"/> 
            </div>
            <PagesGlobalHomeWellKnownAndTaskTask class="tasks" /> 

        </div>
    </div>
</template>

<style lang="scss" scoped>
.well-known {
    // width: 100%;
    margin-left: 2.5%;
    margin-top: -12px;
}
.contents {
    display: flex;
    height: calc(100vh - 50px);
    width: 100% !important;
}
.contents-left {
  width: 49.5%;
  margin: 0px 5px;
}
.reports {
  height: 49.5%;
  margin: 10px 0px 0px ;
  border: 1px solid white;
  border-radius: 8px;
  overflow: auto hidden;
}
.threads{
  background: white;
  margin: 7px 5px 0;
  height: 49.5%;
  border: 1px solid white;
  border-radius: 8px;
  overflow: auto hidden;
}
.tasks {
  width: 49.5%;
  background-color: white;
  margin:10px 10px 0px 0px;
  border: 1px solid white;
  border-radius: 8px;
}
</style>