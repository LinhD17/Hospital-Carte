<template>
    <div class="information-box">
        <v-tabs v-model="state.tab" class="sticky-tab" grow>
            <v-tab 
                v-for="(title, i) in titles"
                :key="i"
            > 
                {{ title }}
            </v-tab>
            <!-- プロファイル -->
            <v-tab-item>
            </v-tab-item>

            <!-- 基本 -->
            <v-tab-item> 
            </v-tab-item>

            <!-- 連絡先 -->
            <v-tab-item>
                <PagesKarteContact />
            </v-tab-item>

            <!-- 保険 -->
            <v-tab-item>
            </v-tab-item>

            <!-- 病名 -->
            <v-tab-item>
            </v-tab-item>

            <!--  生活史 -->
            <v-tab-item>
            </v-tab-item>
            
            <!-- 担当職員 -->
            <v-tab-item>
            </v-tab-item>

            <!-- 看護情報 -->
            <v-tab-item>
            </v-tab-item>

            <!-- SW情報 -->
            <v-tab-item>
            </v-tab-item>

            <!-- 設定 -->
            <v-tab-item>
            </v-tab-item>

            <!-- レジストリ-->
            <v-tab-item>
            </v-tab-item>

        </v-tabs>
    </div>
</template>

<script setup lang="ts">
import { reactive, watch } from "vue"
import { useStore } from "vuex"

const store = useStore()
const titles = [
    'プロファイル',
    '基本',
    '連絡先',
    '保険',
    '病名',
    '生活史',
    '担当職員',
    '看護情報',
    'SW情報',
    '設定',
    'レジストリ',
]
const state = reactive({
    tab: null,
})
watch(
    () => state.tab,
    (tab) => {
    if (tab === 0) {
        store.dispatch('karte/setLeftAreaModeNomal')
    } else {
        store.dispatch('karte/setLeftAreaModePatientInfo')
    }
    }
)
</script>


<style lang="scss" scoped>
.information-box {
  height: 100%;
  overflow: auto;
}
</style>
