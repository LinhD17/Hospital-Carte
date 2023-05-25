<script setup lang="ts">

</script>
<template>
    <div class="search">
        <!-- 部署 -->
        <div style="width: 132px;">
            <v-select
            dense
            outlined
            height="30"
            placeholder="部署を選択"
            :items="['Foo', 'Bar', 'Fizz', 'Buzz']"
            >

            </v-select>
        </div>
        <!-- 投橋者 -->
        <div style="width: 154px;">
            <v-select
            dense
            outlined
            height="30"
            placeholder="投橋者を選択"
            :items="['Foo', 'Bar', 'Fizz', 'Buzz']"
            >
                
            </v-select>
        </div>
        <!-- タイトル -->
        <div style="width: 164px">
            <v-select
            dense
            outlined
            height="30"
            placeholder="タイトル検索"
            :items="['Foo', 'Bar', 'Fizz', 'Buzz']"
            >
                
            </v-select>
        </div>
        <!-- 掲載終了も表示 -->
        <div class="checkbox mb-3">
            <v-checkbox
                dense
                label="掲載終了も表示"
            />
        </div>
        <!-- 添付ファイル -->
        <div class="checkbox mb-3">
            <v-checkbox 
            dense
            label="添付ファイル"
            />
        </div>
        <!-- button -->
        <v-btn
            color="primary"
            class="bt-basic h-middle ml-2 mb-7"
        >
        検索
        </v-btn>
    </div>
</template>

<style lang="scss" scoped>
.search {
    padding: 0 10px !important;
    display: flex;
    align-items: center;
    height: 80px !important;
    //gap: 5px;
}
.select-box {
    height: 30px !important;
}
.checkbox {
    display: flex;
    align-items: center;
    margin-top: 10px;
}
</style>