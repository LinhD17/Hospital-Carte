<template>
  <general-modal
      modal-width="820"
      modal-key="schedule-detail"
      modal-position="center"
      modal-title="掲示板詳細"
      modal-color="#f0f3f4"
      :modal-button="modalButtons"
  >
      <v-card-text
          style="background-color: #f1f3f4; width: 800px; height: 500px"
      >
          <v-form ref="form" v-model="valid">
            <div class="body1">
              <div class="d-flex">
                <div class="flex-column pcol1">
                  <p class="txt-label">投稿者 :</p>
                  <p class="txt-label">作成日時 :</p>
                </div>
                <div class="pcol2">
                  <p class="txt-label">
                    <span>()</span>
                  </p>
                </div>
                <div class="pcol1">
                  <p class="txt-label">更新者 :</p>
                  <p class="txt-label">更新日時 :</p>
                </div>
                <div class="pcol2">
                  <p class="txt-label">
                    <span>()</span>
                  </p>
                </div>
              </div>
              <div class="d-lex r2">
                <div class="flex-column pcol3">
                  <p class="mx-0 txt-label">投稿期間 :</p>
                  <p class="mx-0 txt-label">件名 :</p>
                </div>
              </div>
              <div class="d-flex r2">
                <div class="flex-column pcol3">
                  <p class="mx-0 txt-label">掲示先部署 :</p>
                </div>
              </div>
              <div class="d-flex r2">
                <div class="flex-column pcol3">
                  <p class="mx-0 txt-label">添付ファイル :</p>
                </div>
              </div>
              <div class="d-flex r2">
                <div class="flex-column pcol3">
                  <p class="mx-0 txt-label">内容 :</p>
                </div>
              </div>
              <div class="d-flex r2 ml-8 mt-2">
                <p class="mx-0" style="color: #29a1da; font-size: 14px">
                  コメント(abc件)
                </p>
              </div>
              <div class="d-flex r2 mx-8">
                <v-divider></v-divider>
              </div>
              <div class="d-flex r2 mt-3 mx-8">
                <v-text-field            
                  label="@ | コメントを入カ"
                  outlined
                  color="primary"
                  background-color="white"
                  dense
                ></v-text-field>
                <v-btn
                  icon
                  large
                  class="px-3 mb-2 mx-2"
                >
                  <v-icon color="primary">mdi-send</v-icon>
                </v-btn>
              </div>
              <div class="d-flex r2 mx-8">
                <v-divider></v-divider>
              </div>
              <v-data-table-virtual
                hide-default-header
                hide-default-footer
              >

              </v-data-table-virtual>
            </div>
          </v-form>
      </v-card-text>
  </general-modal>
</template>
<script lang="ts">
  export default {
      data () {
          return {
              modalButtons: [
                {
                  title: '更新',
                  color: 'primary',
                  methods: 'onUpdate',
                },
              ], 
          }
      }
  }
</script>

<style lang="scss" scoped>
 p.txt-label {
  color: #333333;
  font-size: 12px;
  font-weight: 700;
  align-self: center;
  margin-top: 15px;
}
.pcol1 {
  width: 12%;
  text-align: right;
  font-size: 12px;
  margin: 5px 9px;
  color: #333333;
  font-weight: 700;
}
.pcol2 {
  width: 38%;
  text-align: left;
  font-size: 14px;
  margin-left: 10px;
}
.pcol3 {
  width: 12%;
  text-align: right;
  font-size: 14px;
  margin: 5px 10px;
}
.pcol4 {
  width: 90%;
  text-align: left;
  font-size: 14px;
  margin: 0px 30px 0px 10px;
}
.r2 {
  margin-top: -10px;
}
.v-data-table {
  width: 740px !important;
  margin: 0 30px;
  background-color: transparent !important;
  .custom-div {
    display: flex;
    border-bottom: 1px dotted var(--waroku-gray, 'color2');
  }
}
.body1 {
  height: 500px;
  scroll-behavior: smooth;
  overflow: auto;
}
</style>