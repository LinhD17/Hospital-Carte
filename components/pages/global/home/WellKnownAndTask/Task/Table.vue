<script>
    export default {
        data () {
            return {
                headers: [
                    { title: '期限', align: 'center', sortable: false, key: 'deadLine' },
                    { title: '患者情報', align: 'center', sortable: false, key: 'patientInfo' },
                    { title: 'タスク', align: 'center', sortable: false, key: 'task' },
                    { title: '分類', align: 'center', sortable: false, key: 'type' },
                    { title: '内容', align: 'center', sortable: false, key: 'content' },
                    { title: 'ステータス', align: 'center', sortable: false, key: 'status' },
                ],
                dummyItems: [
                    {
                        deadLine: '2022年06月29日 00時00分00秒',
                        patientInfo: {
                            patient_age: '42',
                            patient_name: '患者　花子',
                            patient_name_katakana: 'カンジャ　ハナコ',
                            patient_gender: 1,
                        },
                        task: 'ETCセット',
                        type: 'タスク',
                        content: '患者への説明',
                        status: '未着手',
                    },
                    {
                        deadLine: '2022年06月29日 00時00分00秒',
                        patientInfo: {
                            patient_age: '42',
                            patient_name: '患者　花子',
                            patient_name_katakana: 'カンジャ　ハナコ',
                            patient_gender: 2,
                        },
                        task: 'ETCセット',
                        type: 'タスク',
                        content: '患者への説明',
                        status: '未着手',
                    },
                    {
                        deadLine: '2022年06月29日 00時00分00秒',
                        patientInfo: {
                            patient_age: '42',
                            patient_name: '患者　花子',
                            patient_name_katakana: 'カンジャ　ハナコ',
                            patient_gender: 1,
                        },
                        task: 'ETCセット',
                        type: 'タスク',
                        content: '患者への説明',
                        status: '未着手',
                    },
                ],
            }
        },
    }
</script>
<template>
    <div class="task-table">
        <v-data-table-virtual
        :headers="headers"
        :items="dummyItems"
        class="elevation-1"
        :page.sync="page"
        @page-count="pageCount = $event"
        height="684"
        >
            <!-- patient-info-患者情報 -->
            <template v-slot:item.patientInfo="{ item }">
                <!-- trong the a ta can viet nhu sau de co the click vao bang va hien ra popup moi <a href="#" @click.prevent.stop="clickRow"> -->
                <a href="#">
                    <div class="patient-info">
                        <p class="patient-age mt-1">{{ item.raw.patientInfo.patient_age }}</p>
                        <a class="info-cell ml-1" href="#">
                            <img
                                v-if="item.raw.patientInfo.patient_gender == 1"
                                src="@/assets/icon/man.svg"
                                alt="icon person"
                            />
                            <img v-else src="@/assets/icon/woman.svg" alt="icon person" />
                            <ruby>
                            {{ item.raw.patientInfo.patient_name }}
                            <rt>{{ item.raw.patientInfo.patient_name_katakana }}</rt>
                            </ruby>
                        </a>
                    </div>
                </a>
            </template>
        </v-data-table-virtual>
        <div class="table-footer text-center">
            <span>全 {{ totalCount }} 件</span>
            <v-pagination
                v-model="page"
                circle
                :length="pageCount"
                :total-visible="pageCount"
            ></v-pagination>
        </div>
    </div>
</template>
  

<style lang="scss" scoped> 
  .task-table {
      border: 0 !important;
      white-space: nowrap;
  
      a {
      margin-top: 0;
      text-decoration: none;
      color: #333333;
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
      bottom: 0;
      padding: 5px 0;
      justify-content: center;
      align-items: center;
      z-index: 100;
  }
  .patient-info{
    display: flex;
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