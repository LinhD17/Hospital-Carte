<script setup lang="ts">
//
</script>

<template>
    <div class="page-header">
      <v-app-bar class="my-app-bar">
          <v-toolbar-title class="toolbar-title">
            <img src="@/assets/img/waroku_white.svg" alt="Waroku" />
          </v-toolbar-title>
          <v-toolbar-items class="toolbar-items">
            <div class="d-flex  align-center">
              <v-text-field
                solo
                dense 
                hide-details="auto"
                variant="solo"
                label="患者名か患者番号で検索"
                style="background-color: #f0f0f0; min-width: 230px;"
              ></v-text-field>
              <div>
                <v-btn icon>
                  <img
                    src="@/assets/icon/pageHeaderIcons/search.svg"
                    alt="検索ボタン"
                  />
                </v-btn>
              </div>
               <v-divider class="header-driver" vertical></v-divider>
              <div class="group-name">
                <span>Waroku-HK開発グループ</span>
                <span>ワロク (HK) VN病院X</span>
              </div>
              <div>
                <v-btn icon>
                  <img
                    src="@/assets/icon/pageHeaderIcons/change.svg"
                    alt="hospital exchange"
                  />
                </v-btn>
              </div>
               <v-divider class="header-driver" vertical></v-divider>
              <div>
                <v-btn icon>
                  <img
                    src="@/assets/icon/pageHeaderIcons/info.svg"
                    alt="notification"
                  />
                </v-btn>
              </div>
              <div>
                <v-btn icon>
                  <img
                    src="@/assets/icon/pageHeaderIcons/chat.svg"
                    alt="message"
                  />
                </v-btn>
              </div>
               <v-divider class="header-driver" vertical></v-divider>
              <div class="group-name">
                <span>保険指定医テスト10</span>
                <span>精神保健指定医</span>
              </div>
              <v-divider class="header-driver" vertical></v-divider>
              <div class="group-name">
                <span>診療科:神経内科</span>
              </div>
               <v-divider class="header-driver" vertical></v-divider>
              <div>
                <v-btn icon>
                  <img
                    src="@/assets/icon/pageHeaderIcons/setting.svg"
                    alt="setting"
                  />
                </v-btn>
              </div>
            </div>
          </v-toolbar-items>
      </v-app-bar>
    </div>
  </template>
  
  <style lang="scss" scoped>
  html,
  body {
      width: 100%;
      overflow-x: hidden;
  }
  .page-header:deep(.v-toolbar__content) {
    padding: 0 !important;
  }
  .my-app-bar {
    background-color: #009eac !important;
    height: 58px !important; 
  }
  .header-driver {
    height: 58px;
    border-color: #ffffff !important;
  }
  .group-name {
    display: flex;
    flex-direction: column;
    color: white;
    margin-left: 10px;
    margin-right: 10px;
  }
  .toolbar-title {
    flex: 1;
    position: absolute;
    left: 0;
  }
  .toolbar-items {
    flex-shrink: 0;
    position: absolute;
    right: 0;
    display: flex;
  }
  
  </style>
  