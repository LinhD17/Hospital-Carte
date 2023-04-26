<!-- 一括記載 -->
<template>
  <div class="description-style">
    <description-search /> 
    <description-table /> 
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import DescriptionSearch from '@/components/pages/global/rehabilitation/dementialDaycare/description/search.vue'
import DescriptionTable from '@/components/pages/global/rehabilitation/dementialDaycare/description/table.vue'
export default defineComponent({
    components: {
        DescriptionSearch,
        DescriptionTable,
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