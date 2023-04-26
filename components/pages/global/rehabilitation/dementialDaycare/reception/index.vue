<!-- 受付一覧 -->
<template>
    <div class="reception-style">
        <reception-search/>
        <reception-table/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ReceptionSearch from '@/components/pages/global/rehabilitation/dementialDaycare/reception/search.vue'
import ReceptionTable from '@/components/pages/global/rehabilitation/dementialDaycare/reception/table.vue'
export default defineComponent({
    components: {
        ReceptionSearch,
        ReceptionTable,
    }, 
    setup() {
        return {}
    },
})
</script>

<style lang="scss" scoped>
.reception-style {
    margin: 10px;
}
</style>