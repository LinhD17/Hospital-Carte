<template>
    <div class="past-articles">
        <div class="past-articles-heading">
            <div class="past-articles-heading-main">
                <h2 class="past-articles-heading-text">
                    <span>過去記事</span>
                </h2>
                <v-tabs v-model="tab" class="sticky-tab">
                    <v-tab>過去カルテ</v-tab>
                    <v-tab>検体検査結果</v-tab>
                </v-tabs>
                <div class="past-articles-heading-aside">
                    <v-btn
                        class="bt-basic h-middle w-auto t-toggle"
                    >
                        <v-icon color="white"> mdi-plus </v-icon>
                        <span class="white--text">全開表示</span>
                    </v-btn>
                    <v-btn
                        class="bt-basic h-middle w-auto t-toggle"
                    >
                        <v-icon color="white">mdi-minus</v-icon>
                        <span class="white--text">閉じる</span>
                    </v-btn>
                </div>
            </div>
            <v-tabs-items>
                <!-- 過去記事 -->
                <v-tab-item>

                </v-tab-item>
                <!-- 過去記事 -->
                <v-tab-item>

                </v-tab-item>
            </v-tabs-items>
        </div>
    </div>
</template>

<script lang="ts">
import { provide, inject, ref, computed } from 'vue'
import { useStore } from 'vuex'

</script>

<style lang="scss" scoped>
.past-articles {
  background-color: #f0f3f4;
  &::v-deep .v-tabs-bar {
    background-color: transparent !important;
    .v-tab {
      &--active {
        background-color: #f0f3f4 !important;
      }
      .v-tabs-slider {
        position: absolute;
        top: -2px;
      }
    }
  }
}
.past-articles-heading {
  display: flex;
  align-items: center;
  height: auto;
  position: sticky;
  top: 0;
  padding: 0 10px;
  background-color: #f0f0f0;
  border-right: solid 1px #c7ccce;
  z-index: 10;
  &::before {
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #c7ccce;
    z-index: 1;
  }
  .past-articles-heading-aside {
    display: flex;
  }
}
.past-articles-heading-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  .sticky-tab {
    border-right: none;
  }
}
.past-articles-heading-text {
  min-width: 130px;
  font: 18px;
  font-weight: normal;
  span {
    padding: 6px 0 4px 27px;
    background-image: url(@/assets/icon/oldarticle.svg);
    background-repeat: no-repeat;
    background-position: 0 50%;
    background-size: 22px auto;
  }
}
.past-article-body {
  display: flex;
  align-items: baseline;
  background-color: #f0f3f4;
  border-right: solid 1px #c7ccce;
  padding: 12px 0;
}
</style>