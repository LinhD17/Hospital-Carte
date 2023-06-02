<template>
    <div class="table-content">
        <v-data-table-virtual
            :headers="headers"
            :items="dummyItems"
            class="elevation-1"
        >
            <!-- edit  -->
            <template v-slot:item.editAction="{ item }">
                <div class="d-flex justify-space-between">
                    <div>
                        <v-icon small class="ml-1">mdi-pencil </v-icon>
                    </div>
                </div> 
            </template>
            <!-- delete  -->
            <template v-slot:item.deleteAction="{ item }">
                <div class="d-flex justify-space-between">
                    <div>
                        <v-icon small class="ml-1">mdi-delete </v-icon>
                    </div>
                </div> 
            </template>
        </v-data-table-virtual>
        <div class="table-footer text-left pt-2">
            <div class="ml-3" style="margin: 0 0 0 auto;">
                <v-btn
                    class="mr-3"
                    rounded
                    style="background-color: #1ea0dc; color: #ffffff"
                    @click="onModalOpenButtonClick"
                >
                    新規作成
                </v-btn>
                <v-btn
                    class="mr-3"
                    rounded
                    style="background-color: #1ea0dc; color: #ffffff"
                    @click="onBulkModalOpenButtonClick"
                >
                    一括新規作成
                </v-btn>
            </div>
        </div>
        <modal
            modal-width="500"
            :modal-active="modalState"
            modal-key="modal"
            modal-color="#ffffff"
            :modal-title="'精神疾患レジストリCSV出力'"
            :modal-button="modalButtons"
            @closeModal="closeModal"
            @confirm="onExporatCSV"
        >
            <div class="content-modal_wrapper">
                <div class="content-modal_title">
                </div>
                <div class="content-modal_content">
                    <div class="py-4 px-5">
                        <p class="my-2">精神疾患レジストリの確定データをCSV出力します。よろしいですか？</p>
                    </div>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                headers: [
                    { title: '曜日', key: 'dayOfWeek', sortable: false, align: 'center' },
                    { title: '時間帯', key: 'timeZone', sortable: false, align: 'center' },
                    { title: '予約枠上限', key: 'limitSlot', sortable: false, align: 'center' },
                    { title: '有効期間', key: 'validPeriod', sortable: false, align: 'center' },
                    { title: '', key: 'editAction', sortable: false, align: 'center', width: 30},
                    { title: '', key: 'deleteAction', sortable: false, align: 'center', width: 30},
                ],
                dummyItems: [
                    {
                        dayOfWeek: "日曜日",
                        timeZone: '10:00 ~ 12:00', 
                        limitSlot: 10,
                        validPeriod:'2023/04/01 ~ 2053/12/31'
                    },
                    {
                        dayOfWeek: "日曜日",
                        timeZone: '10:00 ~ 12:00', 
                        limitSlot: 10,
                        validPeriod:'2023/04/01 ~ 2053/12/31'
                    },
                    {
                        dayOfWeek: "日曜日",
                        timeZone: '10:00 ~ 12:00', 
                        limitSlot: 10,
                        validPeriod:'2023/04/01 ~ 2053/12/31'
                    },
                    {
                        dayOfWeek: "日曜日",
                        timeZone: '10:00 ~ 12:00', 
                        limitSlot: 10,
                        validPeriod:'2023/04/01 ~ 2053/12/31'
                    },
                ],
            }
        },
    }
</script>
  
<style lang="scss" scoped> 
  .table-content {
    border: 0 !important;
    white-space: nowrap;
    margin-top: 10px;

    a {
    margin-top: 0;
    text-decoration: none;
    color: #1ea0dc;
    }
  
    //   :deep(.td) {
      //     height: 36px !important;
      //     font-size: 12px !important;
      //     padding: 0 6px !important;
      //     text-align: center !important;
      //     cursor: pointer !important;
      //   }
  
  }
  .table-footer {
      display: flex;
      position: sticky;
      top: 0;
      padding: 5px 0 !important;
      filter: drop-shadow(0 -3px 3px #e6e6e6);
      background-color: #ffffff;
  }
  .info-cell {
    a {
    text-decoration: none;
    font-size: 12px;
    }
    display: flex;
    * {
    margin-right: 2px;
    }
    &__content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        a:hover {
            text-decoration: underline;
        }
    }
    .same-name-field {
    color: red;
    font-size: 80%;
    display: inline-block;
    }
  }
  .centered-cell {
    text-align: center;
}
</style>