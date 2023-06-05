<script setup lang="ts">
//   import OnlyTimePicker from '~/components/general/form/OnlyTimePicker.vue'
</script>

<template>
    <div>
      <v-row class="ma-4 pa-2 search-area">
        <div class="d-flex">
          <v-select
            class="select-box"
            dense
            variant="solo"
            placeholder="検索条件呼び出し"
            hide-details
            style="background-color:#1ea0dc"
          >
          </v-select>
          <v-btn 
            rounded
            color="#1ea0dc" 
            class="btn-style"
          >検索 </v-btn>
          <v-btn
            v-if="searchActive"
            rounded
            color="primary"
            outlined
            class="btn-style"
          >
            条件保存
          </v-btn>
          <v-btn rounded dark class="btn-style" @click="toggleSearchActive">
            {{ searchActive ? '閉じる' : '詳細検索' }}
          </v-btn>
        </div>
      </v-row>
      <v-expand-transition>
        <v-form v-if="searchActive">
          <v-row v-show="searchActive" dense class="basic-info">
            <div class="d-flex">
              <div class="flex-column">
                <p class="mr-2 txt-label">患者番号</p>
                <div style="width: 210px">
                  <v-text-field
                    dense
                    outlined
                    placeholder="患者番号を入力"
                    height="34"
                  >
                  </v-text-field>
                </div>
              </div>
              <div class="flex-column ml-5">
                <p class="mr-2 txt-label">氏名</p>
                <div class="d-flex">
                  <div style="width: 210px">
                    <v-text-field
                      dense
                      outlined
                      placeholder="患者名を入力"
                      height="34"
                    >
                    </v-text-field>
                  </div>
                </div>
              </div>
              <!-- age -->
              <div class="flex-column ml-5">
                <p class="mr-2 txt-label">年齢</p>
                <div class="age d-flex">
                  <v-select
                    dense
                    outlined
                    placeholder="––歳"
                    style="width: 90px"
                  />
                  <span class="ml-2 mr-2 mt-2">〜</span>
                  <v-select
                    dense
                    outlined
                    placeholder="––歳"
                    style="width: 90px"
                  />
                </div>
              </div>
              <div class="gender flex-column ml-5">
                <p class="mr-2 txt-label">性別</p>
                <v-select
                  dense
                  outlined
                  placeholder="性別"
                  hide-details
                  style="width: 90px"
                />
              </div>
              <!-- scheduled-date of examination -->
              <div class="flex-column ml-5">
                <p class="mr-2 txt-label">診察予定日時</p>
                <div class="d-flex">
                  <div class="d-flex">
                    <div style="width: 214px">
                        <datepicker  :width="100" placeholder="予定日"  />
                    </div>
                    <div class="ml-3">
                      <!-- <only-time-picker :width="50" /> -->
                    </div>
                    <span style="line-height: 37px" class="ml-2">時</span>
                  </div>
                  <div class="ml-3 mr-3 mt-2">
                    <p>〜</p>
                  </div>
                  <div class="d-flex">
                    <div class="d-flex">
                      <div style="width: 214px">
                        <datepicker :width="100" placeholder="予定日" /> 
                      </div>
                      <div class="ml-3">
                        <!-- <only-time-picker :width="50" /> -->
                      </div>
                      <span style="line-height: 37px" class="ml-2">時</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </v-row>
          <v-row v-show="searchActive" dense class="basic-info">
            <div class="d-flex">
              <div class="flex-column">
                <p class="mr-2 txt-label">診療内容</p>
                <v-select
                  dense
                  height="34"
                  class="select-box"
                  outlined
                  placeholder="選択してください"
                >
                </v-select>
              </div>
              <div class="flex-column ml-5">
                <p class="mr-2 txt-label">伝票</p>
                <v-select
                  dense
                  height="34"
                  outlined
                  placeholder="伝票を選択"
                  class="select-box"
                >
                </v-select>
              </div>
              <div class="flex-column ml-5" style="align-items: center">
                <p class="txt-label">併科有無</p>
                <div class="d-flex">
                  <v-icon class="mb-1">mdi-crop-square</v-icon>
                  <p class="mt-3">有</p>
                  <v-icon class="mb-1">mdi-crop-square</v-icon>
                  <p class="mt-3 mr-1">無</p>
                </div>
              </div>
              <div class="flex-column ml-5">
                <p class="mr-2 txt-label">外来患者状態</p>
                <v-select
                  dense
                  height="34"
                  class="select-box"
                  outlined
                  placeholder="選択してください"
                >
                </v-select>
              </div>
              <div class="flex-column ml-5">
                <p class="txt-label">診察医</p>
                <div>
                  <v-select
                    dense
                    height="34"
                    outlined
                    class="select-box"
                    placeholder="選択してください"
                  >
                  </v-select>
                </div>
              </div>
              <v-btn
                class="btn-style ml-5 mt-8"
                width="150"
                rounded
                dark
                color="primary"
                >項目をリセット</v-btn
              >
            </div>
          </v-row>
        </v-form>
      </v-expand-transition>
    </div>
  </template>
  
  <style lang="scss" scoped>
  .search-area {
    height: 56px;
  }
  .select-box {
    width: 210px !important;
    height: 30px !important;
  }
  .btn-style {
    font-family: Meiryo;
    font-weight: bold;
    font-size: 12px;
    width: 78px;
    top: 4px !important;
    height: 30px !important;
    margin-left: 20px;
  }
  .basic-info {
    height: 78px !important;
    padding-left: 30px;
    margin-top: 4px;
  }
  p.txt-label {
    color: #333333;
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 0;
    text-align: left !important;
    padding-bottom: 10px !important;
  }
  .search-form__btn.v-btn--disabled {
    color: #b2b2b2 !important;
  }
  </style>
  