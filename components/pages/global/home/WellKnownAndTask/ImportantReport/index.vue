<!-- form chung chua title va bang  -->
<template>
    <v-sheet class="root">
        <div>
            <h1 class="title">重要報告</h1>
            <PagesGlobalHomeWellKnownAndTaskImportantReportSearch class="mt-2"/> 
        </div>
        <PagesGlobalHomeWellKnownAndTaskImportantReportTable1/>
    </v-sheet>
</template>

<script setup lang="ts"> 
</script>


<style lang="scss" scoped>
.root {
  padding: 20px 20px 0;
  margin: 10px 10px 0;
  background-color: #ffffff;
  border-radius: 10px;
}

.title {
    font-size: 18px !important;
    font-weight: bold; 
    margin: 0;
    padding-left: 10px !important;
}
</style>