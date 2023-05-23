<script setup lang="ts">
</script>

<template>
    <div class="description-popup" style="width: 100%; height: 180px;">
        <p>一括記載内容</p>
        <div class="align-self-center" style="width: 160px">
            <v-select
                :items="['診察', '検査', '処方', '画像', '栄養']"
                placeholder="タグを選択"
                outlined
                dense
            /> 
        </div>
        <div class="ml-3 align-self-center" style="width: 160px" >
            <v-select
                dense
                outlined
                placeholder="評価を選択"
            >
            </v-select>
        </div>
        <div class="mt-3 ml-3" style="display: block">
            <div style="display: flex">
                <v-btn dense outlined small rounded color="primary">文例</v-btn>
                <v-btn class="ml-2" dense outlined small rounded color="primary">テンプレート</v-btn>
                <v-btn class="ml-2" dense outlined small rounded color="primary">価格収込</v-btn>
            </div>
            <p style="font-size: 12px" class="mt-1 ma-0">タグ登録:</p>
            <div>
                <v-textarea :rows="3" outlined placeholder="所見を入力"></v-textarea>
            </div>
        </div> 
        <div class="btn-popup">
            <v-btn dense small color="primary">反映</v-btn>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.description-popup {
    display: flex;
    padding: 10px;
    background-color: #ffffff !important;
    p {
        font-weight: bold;
    }
    .btn-popup {
    display: flex;
    align-items: flex-end !important;
    padding-left: 10px;
    margin-bottom: 5px;
}
}

</style>