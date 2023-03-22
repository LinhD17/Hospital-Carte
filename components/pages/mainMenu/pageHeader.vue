<template>
  <div class="page-header">
    <v-app-bar class="my-app-bar">
          <v-toolbar-title class="toolbar-title">
          <img src="@/assets/img/waroku_white.svg" alt="Waroku" />
        </v-toolbar-title>
        <v-toolbar-items class="toolbar-items">
          <div class="d-flex  align-center" style="min-width: max-content">
            <v-text-field
              solo
              placeholder="患者名or患者番号でカルテ呼び出し"
              background-color="white"
              hide-details
              height="20"
            ></v-text-field>
            <div>
              <v-btn icon>
                <img
                  src="@/assets/icons/pageHeaderIcons/search.svg"
                  alt="search karute by patient name or patient number"
                />
              </v-btn>
            </div>
            <v-divider class="divider" vertical></v-divider>
            <div class="group-name">
              <span>Waroku-HK開発グループ</span>
              <span>ワロク (HK) VN病院X</span>
            </div>
            <div>
              <v-btn icon>
                <img
                  src="@/assets/icons/pageHeaderIcons/change.svg"
                  alt="hospital exchange"
                />
              </v-btn>
            </div>
            <v-divider class="divider" vertical></v-divider>
            <div>
              <v-btn icon>
                <img
                  src="@/assets/icons/pageHeaderIcons/info.svg"
                  alt="notification"
                />
              </v-btn>
            </div>
            <div>
              <v-btn icon>
                <img
                  src="@/assets/icons/pageHeaderIcons/chat.svg"
                  alt="message"
                />
              </v-btn>
            </div>
            <v-divider class="divider" vertical></v-divider>
            <div class="group-name">
              <span>保険指定医テスト10</span>
              <span>精神保健指定医</span>
            </div>
            <v-divider class="divider-small" vertical></v-divider>
            <div class="group-name">
              <span>診療科:神経内科</span>
            </div>
            <v-divider class="divider" vertical></v-divider>
            <div>
              <v-btn icon>
                <img
                  src="@/assets/icons/pageHeaderIcons/setting.svg"
                  alt="setting"
                />
              </v-btn>
            </div>
          </div>
        </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
//
</script>

<style lang="scss" scoped>
html,
body {
    width: 100%;
    overflow-x: hidden;
}
.page-header::v-deep .v-toolbar__content {
  padding: 0 !important;
}
.my-app-bar {
  background-color: #009eac !important;
  height: 58px !important; 
}
.divider {
  height: 58px !important;
  background-color: white;
}
.divider-small {
  height: 54px !important;
  background-color: white;
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
