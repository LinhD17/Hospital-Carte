<template>
    <div class="well-known">
        <global-base-layout
            page-title="入院患者一覧" 
            title-icon="ward.svg"
        >
            <template #header>
                <v-btn 
                    color="teal darken-2" 
                    class="bt-basic h-middle w-auto"
                >
                    病棟マップ
                </v-btn>
            </template>
            <search-field/>
            <inpatient-table />
        </global-base-layout>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import SearchField from './SearchField.vue'
import InpatientTable from './InpatientTable.vue'
import GlobalBaseLayout from '~/components/pages/global/general/globalBaseLayout.vue'

export default defineComponent({
    components: { 
        GlobalBaseLayout,
        SearchField,
        InpatientTable,
    },
    setup() {
    },
})
</script>
  
<style lang="scss" scoped>
.well-known {
    //width: 100%;
    margin-left: 2%;
    margin-top: -12px;
}
</style>