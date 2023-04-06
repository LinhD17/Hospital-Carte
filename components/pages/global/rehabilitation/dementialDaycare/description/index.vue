<!-- 一括記載 -->
<template>
  <div class="description-style">
    <description-search /> 
    <description-table /> 
    <!-- <table-dummy/> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
// import TableDummy from './tableDummy.vue'
import DescriptionSearch from '@/components/pages/global/rehabilitation/dementialDaycare/description/search.vue'
import DescriptionTable from '@/components/pages/global/rehabilitation/dementialDaycare/description/table.vue'
export default defineComponent({
    components: {
        DescriptionSearch,
        DescriptionTable,
        // TableDummy,
    },
    setup() {
        return {

        }
    }

})
</script>

<style lang="scss" scoped>
.description-style {
    margin: 10px;
    background-color: white;
}

</style>