<template>
  <div class="table-content">
    <v-data-table-virtual
      :headers="headers"
      :items="dummyItems"
      class="elevation-1"
    >
      <template v-slot:item.timeZoneName="{ item }">
        <div class="d-flex justify-space-between" style="text-align: left">
          <div>
            {{ item.raw.timeZoneName }}
          </div>
        </div>
      </template>
      <template v-slot:item.time="{ item }">
        <div class="d-flex justify-space-between" style="text-align: left">
          <div>
            {{ item.raw.time }}
          </div>
        </div>
      </template>
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
        {
          title: '時間帯名',
          key: 'timeZoneName',
          sortable: false,
          align: 'center',
        },
        {
          title: '時間',
          key: 'time',
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
          timeZoneName: '朝',
          time: '09:00',
        },
        {
          timeZoneName: 'test1',
          time: '13:00',
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