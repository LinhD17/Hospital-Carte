<template>
    <div class="sticky-note-bar">
        <v-btn icon small class="custom-btn-plus">
            <v-icon color="white">mdi-plus</v-icon>
        </v-btn>
        <span class="custom-btn-plus-text">新規</span>
        <div class="test">
            <v-sheet
                class="sticky-note"
                height="auto"
                width="300"
            >

            </v-sheet>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.sticky-note-bar {
  height: calc(100vh - 100px);
  width: 59px;
  left: -60px;
  position: absolute;
  top: 0;
  padding: 10px 0 0;
  background-color: var(--waroku-yellow, 'color4');

  .custom-btn-plus {
    display: block;
    width: 26px;
    height: 26px;
    margin-left: 20px;
    margin-bottom: 3px;
    padding: 0;
    background-color: var(--waroku-yellow, 'base');
  }
  .custom-btn-plus-text {
    display: block;
    width: 100%;
    padding-left: 6px;
    box-sizing: border-box;
    font-size: 11px;
    text-align: center;
  }
  .test {
    position: absolute;
    height: calc(100vh - 160px);
    overflow-y: auto;
  }
  .sticky-note {
    cursor: pointer;
    z-index: 99;
    position: relative;
    margin-left: 15px;
    margin-top: 10px;
    padding: 7px 5px 5px 7px;
    &__footer {
      gap: 5px;
      margin-top: 10px;
      display: flex;
      justify-content: end;
      span {
        font-size: 11px;
      }
    }
  }
}
</style>