<template>
    <v-sheet>
        <!-- search -->
        <div class="root-header">
            <!-- title + plus buttom -->
            <div class="thread-title">
                <h1 class="title">掲示板</h1>
                <v-btn 
                    x-small
                    color="primary"
                    dark
                    fab
                    class="button-position"
                >
                <!-- button to open new modal -->
                <!-- khi nhan vao nut (+) se hien ra modal de ta co the them noi dung moi vao bang  -->
                <v-icon>mdi-plus</v-icon>
                <!-- <boald-new :dialog-state="dialogAddNewState"/> -->
                <!-- <boald-new /> -->
                </v-btn>
            </div>
            <!-- search-field  -->
            <thread-search />
        </div>
        <!-- table -->
        <thread-table />
    </v-sheet>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
// import BoaldNew from './modal/BoaldNew.vue'
import ThreadSearch from './ThreadSearch.vue'
import ThreadTable from './ThreadTable.vue'
export default defineComponent({
    components: { 
        ThreadSearch,
        ThreadTable,
        // BoaldNew, 
    },
    setup() {
        // const dialogAddNewState = useDiaLog()
        // return {
        //     dialogAddNewState
        // }
    },
})
</script>

<style lang="scss" scoped>
.thread-title {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.title {
    font-size: 20px !important;
    font-weight: bold;
}
</style>