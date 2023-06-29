<template>
  <div class="table-content">
    <v-data-table-virtual
      :headers="headers"
      :items="dummyItems"
      class="elevation-1"
    >
    <template v-slot:item.setName="{ item }">
        <div class="d-flex justify-space-between" style="text-align: left">
          <div>
            {{ item.raw.setName }}
          </div>
        </div>
      </template>
      <template v-slot:item.freeItemSet="{ item }">
        <div class="d-flex justify-space-between" style="text-align: left">
          <div>
            {{ item.raw.freeItemSet }}
          </div>
        </div>
      </template>
      <template v-slot:item.patternName="{ item }">
        <div class="d-flex justify-space-between" style="text-align: left">
          <div>
            {{ item.raw.patternName }}
          </div>
        </div>
      </template>
      <template v-slot:item.vitalSet="{ item }">
        <div class="d-flex justify-space-between" style="text-align: left">
          <div>
            {{ item.raw.vitalSet }}
          </div>
        </div>
      </template>
      <template v-slot:item.obsItemSet="{ item }">
        <div class="d-flex justify-space-between" style="text-align: left">
          <div>
            {{ item.raw.obsItemSet }}
          </div>
        </div>
      </template>
      <template v-slot:item.signSet="{ item }">
        <div class="d-flex justify-space-between" style="text-align: left">
          <div>
            {{ item.raw.signSet }}
          </div>
        </div>
      </template>
      <!-- edit  -->
      <template v-slot:item.editAction="{ item }">
        <div class="d-flex justify-space-between">
          <div>
            <v-icon
              small
              class="ml-1"
              @click="
                () => {
                  onModalEditButtonClick(item)
                }
              "
              >mdi-pencil
            </v-icon>
          </div>
        </div>
      </template>
      <!-- delete  -->
      <template v-slot:item.deleteAction="{ item }">
        <div class="d-flex justify-space-between">
          <div>
            <v-icon
              small
              class="ml-1"
              @click="
                () => {
                  onModalDeleteButtonClick(item)
                }
              "
              >mdi-delete
            </v-icon>
          </div>
        </div>
      </template>
    </v-data-table-virtual>
    <div class="table-footer text-left pt-2">
      <div class="ml-3" style="margin: 0 0 0 auto">
        <v-btn
          class="mr-3"
          rounded
          style="background-color: #1ea0dc; color: #ffffff"
          @click="onModalOpenButtonClick"
        >
          新規作成
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { title: 'セット名', key: 'setName', sortable: false, align: 'center' },
        {
          title: 'パターン名',
          key: 'patternName',
          sortable: false,
          align: 'center',
        },
        {
          title: 'バイタルセット',
          key: 'vitalSet',
          sortable: false,
          align: 'center',
        },
        {
          title: '観察項目セット',
          key: 'obsItemSet',
          sortable: false,
          align: 'center',
        },
        {
          title: '自由項目セット',
          key: 'freeItemSet',
          sortable: false,
          align: 'center',
        },
        {
          title: 'サインセット',
          key: 'signSet',
          sortable: false,
          align: 'center',
          width: 30,
        },
        {
          title: '',
          key: 'editAction',
          sortable: false,
          align: 'center',
          width: 30,
        },
        {
          title: '',
          key: 'deleteAction',
          sortable: false,
          align: 'center',
          width: 30,
        },
      ],
      dummyItems: [
        {
          setName: 'aaaa',
          patternName: '',
          vitalSet: '血圧(上), 血圧(下), 呼吸数',
          obsItemSet: '主食(朝), 副食(朝), 服薬-服薬状況(朝), 睡眠',
          freeItemSet: 'AAA',
          signSet: 'サイン(日勤)',
        },
        {
          setName: 'てすと',
          patternName: 'test',
          vitalSet: '血圧(上), 血圧(下), 体重',
          obsItemSet: '主食(昼), 副食(昼)',
          freeItemSet: 'AAA',
          signSet: '',
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