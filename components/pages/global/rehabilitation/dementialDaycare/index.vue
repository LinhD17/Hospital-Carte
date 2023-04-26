<template>
    <global-base-layout
        page-title="デイケア所見一覧" 
        title-icon="rehabilitation.svg"
        class="rehabiliation-content"
    >
        <template #header>
            <div class="switch-select">
                <v-btn          
                    :class="appTab === 'reception' ? 'is-active' : ''"
                    color="#459caa"
                    outlined
                    @click="appTabClick('reception')"
                >受付一覧</v-btn>
                <v-btn
                    :class="appTab === 'description' ? 'is-active' : ''"
                    color="#459caa"
                    outlined
                    @click="appTabClick('description')"
                >一括記載</v-btn>
                <v-btn
                    color="#459caa"
                    outlined
                >指示患者一覧</v-btn>
                <v-btn
                    color="#459caa"
                    outlined
                >認知DC日報</v-btn>
            </div>
        </template>
        <template v-if="appTab === 'reception'">
            <reception />
        </template>
        <template v-if="appTab === 'description'">
            <description />
        </template>
    </global-base-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import globalBaseLayout from '~/components/pages/global/general/globalBaseLayout.vue'
import Reception from '~/components/pages/global/rehabilitation/dementialDaycare/reception/index.vue'
import Description from '~/components/pages/global/rehabilitation/dementialDaycare/description/index.vue'
export default defineComponent({
    components: { 
        globalBaseLayout,
        Reception,
        Description,
    },
    setup() {
        // const appTab = ref('description')
        const appTab = ref('reception')
        // const appTabClick = (appType: string) => {
        //     appTab.value = appType
        // }
        return {
            appTab,
            // appTabClick,
        }
    },
})
</script>

<style lang="scss" scoped>
.rehabiliation-content {
    margin-left: 2%;
    margin-top: -12px;
}
.switch-select {
    display: flex;
    align-items: center;
    margin: 10px;
    .v-btn {
        width: 125px;
        border-radius: 0;
        width: 125px;
        border-radius: 0;
        font-weight: bold;
        &:first-of-type {
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        border-right: 0;
        }
        &:last-of-type {
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        border-left: 0;
        }
        &.is-active {
        background-color: #459caa;
        color: #ffffff !important;
        }
    }
}

</style>