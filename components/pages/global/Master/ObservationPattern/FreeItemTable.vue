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
        { title: '項目名', key: 'itemName', sortable: false, align: 'center' },
        { title: '備考', key: 'remark', sortable: false, align: 'center' },
        {
          title: '有効期間',
          key: 'validPeriod',
          sortable: false,
          align: 'center',
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
          itemName: 'AAA',
          remark: '',
          validPeriod: '2023/04/01 ~ 2024/12/31',
        },
        {
          itemName: 'FFFへんしゅう',
          remark: 'へんしゅうびこう',
          validPeriod: '2023/04/09 ~ ',
        },
        {
          itemName: 'test11111',
          remark: '',
          validPeriod: '2023/04/02 ~ ',
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
</style>