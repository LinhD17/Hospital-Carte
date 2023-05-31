<template>
    <v-sheet>
        <!-- search -->
        <div class="root-header">
            <!-- title + plus buttom -->
            <div class="thread-title">
                <h1 class="title">掲示板</h1>
                <!-- button to open new modal -->
                <v-btn 
                    color="primary"
                    class="rounded-circle d-inline-block"
                >
                   <v-icon >mdi-plus</v-icon>
                    <!-- <PagesGlobalHomeWellKnownAndTaskThreadModalBoardNew
                        :dialog-state="dialogAddNewState"
                   /> -->
                </v-btn>
            </div>
            <!-- search-field  -->
            <PagesGlobalHomeWellKnownAndTaskThreadSearch /> 
        </div>
        <!-- table -->
        <PagesGlobalHomeWellKnownAndTaskThreadTable/> 
    </v-sheet>
</template>

<script setup lang="ts">
// import { useDialog } from '@/hooks/General/useDialog';
// import { 
//     useThreads, 
//     searchUseThreadsStateKey 
// } from '@/hooks/Global/scheduleContact/wellKnownAndTask/useThread'

// const dialogAddNewState = useDiaLog()
// provide(searchUseThreadsStateKey, useThreads())
</script>

<style lang="scss" scoped>
.root-header {
    margin: 10px 10px 0;
}
.thread-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.title {
    font-size: 20px !important;
    font-weight: bold;
}
</style>