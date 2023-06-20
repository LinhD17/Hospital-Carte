<template>
    <v-sheet>
      <div class="root-header">
        <div class="thread-title">
          <h1 class="title">掲示板</h1>
          <v-dialog v-model="dialog" width="800">
            <template v-slot:activator="{ props }">
              <v-btn icon color="primary" class="btn-plus" v-bind="props">
                <v-icon color="white">mdi-plus</v-icon>
              </v-btn>
            </template>
            <board-modal v-model="dialog" />
          </v-dialog>
        </div>
        <PagesGlobalHomeWellKnownAndTaskThreadSearch />
      </div>
      <PagesGlobalHomeWellKnownAndTaskThreadTable />
    </v-sheet>
  </template>
  
  <script>
  import BoardModal from './Modal/BoardModal.vue'
  
  export default {
    components: {
      BoardModal
    },
    data() {
      return {
        dialog: false
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .root-header {
    margin: 10px 10px 0;
  }
  .thread-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .title {
    font-size: 20px !important;
    font-weight: bold;
  }
  .btn-plus {
    display: block;
    width: 26px;
    height: 26px;
    margin-left: 20px;
    margin-bottom: 3px;
    padding: 0;
    background-color: var(--waroku-yellow, 'base');
  }
  </style>
  