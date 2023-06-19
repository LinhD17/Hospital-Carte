<template>
    <PagesGlobalGeneralGlobalBaseLayout
        page-title="認知症デイケア" 
        class="rehabiliation-content"
    >
        <template #iconImg>
            <img :src="imageUrl"/> 
        </template>
        <template #header>
            <div class="switch-select">
                <v-btn          
                    :class="appTab === 'reception' ? 'is-active' : ''"
                    color="#459caa" 
                    variant="outlined"
                    @click="appTabClick('reception')"
                >受付一覧</v-btn>
                <v-btn
                    :class="appTab === 'description' ? 'is-active' : ''"
                    color="#459caa"
                    variant="outlined"
                    @click="appTabClick('description')"
                >一括記載</v-btn>
                <v-btn
                    @click="appTabClick('instruction')"
                    :class="appTab === 'instruction' ? 'is-active' : ''"
                    color="#459caa"
                    variant="outlined"
                >指示患者一覧</v-btn>
                <v-btn
                    @click="appTabClick('dailyReport')"
                    :class="appTab === 'dailyReport' ? 'is-active' : ''"
                    color="#459caa"
                    variant="outlined"
                >認知DC日報</v-btn>
            </div>
        </template>
        <template v-if="appTab === 'reception'">
            <PagesGlobalRehabilitationDementialDaycareReception />
        </template>
        <template v-if="appTab === 'description'">
            <PagesGlobalRehabilitationDementialDaycareDescription />
        </template>
        <template v-if="appTab === 'instruction'">
            <PagesGlobalRehabilitationDementialDaycareDescription />
        </template>
        <template v-if="appTab === 'dailyReport'">
            <PagesGlobalRehabilitationDementialDaycareDescription />
        </template>
    </PagesGlobalGeneralGlobalBaseLayout>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import imageUrl from '@/assets/icon/schedule.svg'

    
    const appTab = ref('reception')
    //const appTab = ref('description')
    const appTabClick = (appType: string) => {
        appTab.value=appType
    }
</script>

<style lang="scss" scoped>
.rehabiliation-content {
    margin-left: 2%;
    margin-top: -12px;
}
.switch-select {
    display: flex;
    align-items: center;
    margin-right: 10px;
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