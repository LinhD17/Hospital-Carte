<template>
    <div class="pa-2">
      <div v-for="(list, index) in documentTemplateList" :key="index" class="template-list">
        <div class="mr-2 mb-10">
          <v-data-table-virtual
            hide-default-footer
            :headers="list.headers"
            :items="list.dummyItems"
          >
            <template v-slot:item="itemSlot">
              <div class="d-flex u-ml-10">
                <template v-if="!isEmptyItem(itemSlot.item.raw[list.itemKey])">
                  {{ itemSlot.item.raw[list.itemKey] }}
                  <div class="d-flex ml-auto">
                    <v-btn
                      variant="outlined"
                      rounded
                      color="#1ea0dc"
                      @click="goEdit(itemSlot.item.document_uuid)"
                      class="bt-basic h-small mr-3 px-6"
                    >
                      編集
                    </v-btn>
                    <v-btn
                      variant="outlined"
                      rounded
                      color="red"
                      @click="openModal(itemSlot.item.document_uuid)"
                      class="bt-basic h-small px-6"
                    >
                      削除
                    </v-btn>
                  </div>
                </template>
                <template v-else>
                    <div class="no-data">
                        データはありません。
                    </div>
                </template>
              </div>
            </template>
          </v-data-table-virtual>
        </div>
      </div>
  
      <div class="table-footer text-center pt-2">
        <div style="margin: 0 0 0 auto;">
          <v-btn
            rounded
            style="background-color: #1ea0dc; color: #ffffff"
            class="mr-3 px-8"
          >
            新規登録
          </v-btn>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        documentTemplateList: [
          {
            headers: [
              { title: '治療計画書', key: 'document_name', sortable: false, align: 'center' },
            ],
            dummyItems: [
              {
                document_name: '01.入院診療計画書_(厚)別紙2',
              },
              {
                document_name: '02.医療保護入院者の入院届_(精法1)様式13_1',
              },
              {
                document_name: '05.医療保護入院者の定期病状報告書_(精法1)様式19_1',
              },
            ],
            itemKey: 'document_name',
          },
          {
            headers: [
              { title: '褥瘡', key: 'document_name_1', sortable: false, align: 'center' },
            ],
            dummyItems: [
              {
                document_name_1: '褥瘡対策に関する診療計画書',
              },
              {
                document_name_1: '04.褥瘡対策に関する評価(DESIGN-R)_(厚)別紙別紙46',
              },
              {
                document_name_1: '04.褥瘡対策に関する評価(DESIGN-R)_(厚)別紙別紙46',
              },
            ],
            itemKey: 'document_name_1',
          },
          {
            headers: [
              { title: '紹介状　情報提供書', key: 'document_name_2', sortable: false, align: 'center' },
            ],
            dummyItems: [
              {
              },
            ],
            itemKey: 'document_name_2',
          },
          {
            headers: [
              { title: '診断書', key: 'document_name_3', sortable: false, align: 'center' },
            ],
            dummyItems: [
              {
              },
            ],
            itemKey: 'document_name_3',
          },
          {
            headers: [
              { title: '意見書', key: 'document_name_4', sortable: false, align: 'center' },
            ],
            dummyItems: [
              {
                document_name_4: 'テスト文書１',
              },
            ],
            itemKey: 'document_name_4',
          },
          {
            headers: [
              { title: '傷病手当', key: 'document_name_5', sortable: false, align: 'center' },
            ],
            dummyItems: [
              {
              },
            ],
            itemKey: 'document_name_5',
          },
          {
            headers: [
              { title: '指示書', key: 'document_name_6', sortable: false, align: 'center' },
            ],
            dummyItems: [
              {
              },
            ],
            itemKey: 'document_name_6',
          },
          {
            headers: [
              { title: '生活保護法医療扶助', key: 'document_name_7', sortable: false, align: 'center' },
            ],
            dummyItems: [
              {
              },
            ],
            itemKey: 'document_name_7',
          },
          {
            headers: [
              { title: '医療保護入院', key: 'document_name_8', sortable: false, align: 'center' },
            ],
            dummyItems: [
              {
              },
            ],
            itemKey: 'document_name_8',
          },
          {
            headers: [
              { title: '任意入院', key: 'document_name_9', sortable: false, align: 'center' },
            ],
            dummyItems: [
              {
              },
            ],
            itemKey: 'document_name_9',
          },
          {
            headers: [
              { title: '措置入院', key: 'document_name_10', sortable: false, align: 'center' },
            ],
            dummyItems: [
              {
              },
            ],
            itemKey: 'document_name_10',
          },
          {
            headers: [
              { title: '応急入院', key: 'document_name_11', sortable: false, align: 'center' },
            ],
            dummyItems: [
              {
              },
            ],
            itemKey: 'document_name_11',
          },
          {
            headers: [
              { title: '精神保健福祉法', key: 'document_name_12', sortable: false, align: 'center' },
            ],
            dummyItems: [
              {
              },
            ],
            itemKey: 'document_name_12',
          },
          {
            headers: [
              { title: 'サマリー', key: 'document_name_13', sortable: false, align: 'center' },
            ],
            dummyItems: [
              {
              },
            ],
            itemKey: 'document_name_13',
          },
          {
            headers: [
              { title: '栄養管理計画書', key: 'document_name_14', sortable: false, align: 'center' },
            ],
            dummyItems: [
              {
              },
            ],
            itemKey: 'document_name_14',
          },
          {
            headers: [
              { title: '病棟管理業務', key: 'document_name_15', sortable: false, align: 'center' },
            ],
            dummyItems: [
              {
              },
            ],
            itemKey: 'document_name_15',
          },
          {
            headers: [
              { title: '行動制限', key: 'document_name_16', sortable: false, align: 'center' },
            ],
            dummyItems: [
              {
              },
            ],
            itemKey: 'document_name_16',
          },
          {
            headers: [
              { title: 'インシデント', key: 'document_name_17', sortable: false, align: 'center' },
            ],
            dummyItems: [
              {
              },
            ],
            itemKey: 'document_name_17',
          },
          {
            headers: [
              { title: '看護計画', key: 'document_name_18', sortable: false, align: 'center' },
            ],
            dummyItems: [
              {
              },
            ],
            itemKey: 'document_name_18',
          },
          {
            headers: [
              { title: 'リハビリ', key: 'document_name_18', sortable: false, align: 'center' },
            ],
            dummyItems: [
              {
              },
            ],
            itemKey: 'document_name_18',
          },
          {
            headers: [
              { title: 'その他文書', key: 'document_name_19', sortable: false, align: 'center' },
            ],
            dummyItems: [
              {
              },
            ],
            itemKey: 'document_name_19',
          },
          // Add more template lists here if needed
        ],
      };
    },
    methods: {
    isEmptyItem(item) {
        return !item || Object.keys(item).length === 0;
    },
    goEdit(documentUuid) {
      // Handle goEdit logic here
    },
    openModal(documentUuid) {
      // Handle openModal logic here
    },
  },
};
  </script>
    
<style lang="scss" scoped>
.v-data-table {
    padding: 8px 12px;
    &:deep(.v-data-table) {
        table > tbody > tr > td {
            height: auto;
            padding: 5px 10px;
            vertical-align: middle !important;
            background-color: #ffffff;
            > .u-ml-10 {
                display: flex;
                align-items: center;
                margin: 0;
            }
        }
    }

    &:deep(.v-data-table-header) {
        th {
            position: relative;
            height: auto;
            padding: 5px 10px !important;
            font-size: 14px !important;
            font-weight: bold;
            line-height: 1.1;
            color: #000 !important;

            &::before {
                content: '';
                display: block;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                left: 0;
                width: 4px;
                height: 14px;
                background-color: #1ea0dc;
            }
        }
    }
}
.table-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: #ffffff;
  filter: drop-shadow(0 -3px 3px #e6e6e6);
}

.template-list {
  overflow-y: auto;
}

.no-data {
    width: 100%;
    text-align: center;
    color: #9e9e9e;
}
</style>