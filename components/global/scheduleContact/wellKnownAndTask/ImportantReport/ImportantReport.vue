<!-- form chung chua title va bang  -->
<template>
    <v-sheet>
        <div>
            <h1 class="title">重要報告</h1>
            <SearchField />
        </div>
        <ReportTable  />
    </v-sheet>
</template>

<script>
import { defineComponent, } from '@nuxtjs/composition-api';
import ReportTable from './ReportTable.vue';
// import ReportTable from './ImportTable.vue';
import SearchField from './SearchField.vue';

export default defineComponent({
    components: {
        SearchField, 
        ReportTable,
    },
    setup() {

    }
})
</script>

<style lang="scss" scoped>
.title {
    font-size: 18px !important;
    font-weight: bold; 
    margin: 0;
    padding-left: 10px !important;
}
</style>