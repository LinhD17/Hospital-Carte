<script setup lang="ts">

</script>
<template>
    <div class="search">
        <!-- 部署 -->
        <div class="mr-2" style="width: 132px;">
            <v-select 
                dense 
                clearable 
                variant="solo" 
                hide-details
                style="background-color: white" 
                placeholder="部署を選択" 
                :items="['Vue.js', 'React', 'Angular', 'Buzz']"
            />
        </div>
        <!-- 投橋者 -->
        <div class="mr-2 " style="width: 150px;">
            <v-select 
                dense 
                clearable 
                variant="solo" 
                hide-details
                style="background-color: white" 
                placeholder="投橋者を選択" 
                :items="['Vue.js', 'React', 'Angular', 'Buzz']"
            />
        </div>
        <!-- タイトル -->
        <div class="mr-2" style="width: 150px">
            <v-text-field 
                dense 
                clearable 
                variant="solo" 
                hide-details
                style="background-color: white" 
                placeholder="タイトル検索" 
            />
        </div>
        <!-- 掲載終了も表示 -->
        <div class="checkbox">
            <v-checkbox
                dense
                label="掲載終了も表示"
            />
        </div>
        <!-- 添付ファイル -->
        <div class="checkbox">
            <v-checkbox 
            dense
            label="添付ファイル"
            />
        </div>
        <!-- button -->
        <v-btn
            color="#1ea0dc"
            class="bt-basic h-middle ml-2 mb-2"
            rounded
        >
        検索
        </v-btn>
    </div>
</template>

<style lang="scss" scoped>
.search {
    display: flex;
    align-items: center;
    height: 50px !important;
    //gap: 5px;
}
.checkbox {
    display: flex;
    align-items: center;
    margin-top: 18px;
}
</style>