<template>
    <div 
        class="information-box"
        :style="
            articleAreaMode === 0 ? 'padding-bottom: 0;' : 'padding-bottom: 47px;'
        "
    >
        <v-tabs v-model="tab" class="sticky-tab" grow>
            <v-tab 
                v-for="(title, i) in titles"
                :key="i"
            > 
                {{ title }}
            </v-tab>
            <!-- オーダー -->
            <v-tab-item>
            </v-tab-item>

            <!-- 特定指示 -->
            <v-tab-item> 
            </v-tab-item>

            <!-- 行動制限 -->
            <v-tab-item>
                <PagesKarteContact />
            </v-tab-item>

            <!-- 指示一覧 -->
            <v-tab-item>
            </v-tab-item>

            <!-- 文書 -->
            <v-tab-item>
            </v-tab-item>

            <!-- 業務タスク -->
            <v-tab-item>
            </v-tab-item>
            
            <!-- 予約 -->
            <v-tab-item>
            </v-tab-item>

            <!-- スケジュール -->
            <v-tab-item>
            </v-tab-item>

            <!-- フローシート -->
            <v-tab-item>
            </v-tab-item>

            <!-- 計画 -->
            <v-tab-item>
            </v-tab-item>

            <!-- 評価尺度 -->
            <v-tab-item>
            </v-tab-item>

        </v-tabs>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, computed } from "vue"
import { useStore } from "vuex"

const store = useStore()
const articleAreaMode = computed(
    () => store.getters['karte/articleAreaMode']
)
const titles = [
    'オーダー',
    '特定指示',
    '行動制限',
    '指示一覧',
    '文書',
    '業務タスク',
    '予約',
    'スケジュール',
    'フローシート',
    '計画',
    '評価尺度',
    // 'パス',
]
const tab = ref<number>(0)

const changeTab = (tabTitle: string) => {
    const tabKey = titles.findIndex((title) => title === tabTitle)
    tab.value = tabKey >= 0 ? tabKey : 0
}
</script> 


<style lang="scss" scoped>
.information-box {
  height: 100%;
  overflow: auto;
}
</style>