<template>
    <div class="ma-3">
    <!-- ヘッダー  -->
    <div class="d-flex align-center justify-space-between">
      <heading-second heading-text="連絡先"></heading-second>
      <div>
        <template>
          <v-btn
            outlined
            color="font-color2"
            class="bt-basic h-small"
            >キャンセル</v-btn
          >
          <v-btn
            outlined
            color="primary"
            class="bt-basic h-small"
            >保存</v-btn
          >
        </template>
        <template>
          <v-btn
            outlined
            color="primary"
            class="bt-basic h-small"
            >編集</v-btn
          >
        </template>
      </div>
    </div>
    <!-- 内容 -->
    <template>
        <template>
            <div class="mt-2">
                <v-container>
                    <v-row>
                        <v-col>
                            連絡先
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            連絡先氏名
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            電話番号１
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            電話番号２
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            住所
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            メモ
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </template>
    </template>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.span_1 {
  width: 100px !important;
  display: inline-block;
  padding: 5px 0px;
  text-align: center;
  font-weight: bold;
  color: white;
  background-color: dimgray;
}
.row {
  border-top: 1px dotted #c9c9c9;
  &:first-child {
    border: none;
  }
  &:last-child {
    border-bottom: 1px dotted #c9c9c9;
  }
  .container-title {
    color: white;
    font-weight: bold;
    background-color: dimgray !important;
  }
  .col {
    padding: 6px 12px;
  }
  .col-2 {
    background-color: #f0f3f4;
  }
}
</style>