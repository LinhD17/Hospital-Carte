<template>
    <div class="table-content">
        <v-data-table-virtual
            :headers="headers"
            :items="dummyItems"
            class="elevation-1"
        >
            <!-- patient-info -->
            <template v-slot:item.patient_info = "{ item }">
                <div class="d-flex" style="justify-content: space-between">
                    <div class="info-cell">
                        <img
                            v-if="item.raw.patient_info.patient_gender === 1"
                            src="@/assets/icon/man.svg"
                            style="width: 25px; height: 25px"
                        />
                        <img
                            v-else
                            style="width: 25px; height: 25px"
                            src="@/assets/icon/female.svg"
                        />
                        <a>
                            <ruby class="info-cell__content ml-2" style="min-width: 80px">
                                <rt class="text-no-wrap" style="font-size: 10px">
                                    {{ item.raw.patient_info.patient_name_katakana }}
                                </rt>
                                <!-- <nuxt-link
                                    :to="`/karte?patient_uuid=${item.raw.patient_name.patient_uuid}`"
                                    target="_blank"
                                >
                                    {{ item.raw.patient_info.patient_name }}
                                </nuxt-link> -->
                                {{ item.raw.patient_info.patient_name }}
                            </ruby>
                        </a>
                        <div
                            v-if="item.raw.patient_info.is_name_duplicated === true"
                            class="same-name-field"
                        >
                            <img src="@/assets/icon/important_triangle.svg" />
                            <span>同姓</span>
                        </div>
                    </div>
                    <span>
                        {{ item.raw.patient_info.patient_birthday }}
                        ({{ moment().diff(item.raw.patient_info.patient_birthday, 'years', false) }})
                    </span> 
                </div>
            </template>
            <!-- 状態 -->
            <template v-slot:item.patient_registry_status="{ item }">
                <div v-if="item.raw.patient_registry_status == 0">
                    <v-chip 
                        style="justify-content: center; background-color: #1ea0dc; color: white"
                        small
                    > 確定待ち</v-chip>
                </div>
            </template>

            <!-- 確定日時 -->
            <!-- <template v-slot:item.patient_registry_created_at="{ item }">
                <div v-if="item.raw.patient_registry_created_at">
                {{ momentFormat(item.raw.patient_registry_created_at, FORMAT.FORMAT_DATE_TIME_JP) }}
                </div>
            </template> -->
        </v-data-table-virtual>

        <div class="table-footer text-center pt-2">
            <div style="margin: 0 0 0 auto;">
                <v-btn
                    class="mr-3"
                    rounded
                    style="background-color: #1ea0dc; color: #ffffff"
                    @click="openModal"
                >
                    登録
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

<script lang="ts">
    // import type { inject } from 'vue'
    // import { useStore } from 'vuex'
    // const store = useStore()
    // const stateKey = inject(patientConfirmedRegistryListStateKey)
    // if (!stateKey) {
    //     throw new Error ('No Global Key')
    // }
    // const {
    //   patientConfirmedRegistryList,
    //   fetchPatientConfirmedRegistryLoading,
    //   fetchPatientConfirmedRegistryList,
    //   downloadPatientConfirmedRegistryCsv,
    // } = stateKey

    // const state = ref({
    //     selected: [] as any, 
    // })

    // const modalState = ref<boolean>(false)

    import Modal from '@/components/General/Modal.vue' 
    import moment from 'moment'
    export default {
        data () {
            return {
                headers: [
                    { title: '患者番号', key: 'patient_no', sortable: false, align: 'center' },
                    { title: '患者情報', key: 'patient_info', sortable: false, align: 'center' },
                    { title: '電話番号', key: 'patient_info.tel_no', sortable: false, align: 'center' },
                    { title: '住所', key: 'patient_info.address', sortable: false, align:'center' },
                    { title: '病棟/外来', key: 'patient_info.ward_name', sortable: false, align: 'center' },
                    { title: '状態', key: 'patient_registry_status', sortable: false, align: 'center' },
                    { title: '確定日時', key: 'patient_registry_created_at', sortable: false, align: 'center' },
                ],
                dummyItems: [
                    {
                        patient_no: "0000023067",
                        patient_info: {
                            patient_uuid: "123",
                            patient_name: "患者 太郎",
                            patient_name_katakana: "カンジャ タロウ",
                            patient_gender: 1,
                            patient_birthday: "1996年07月17日",
                            is_name_duplicated: true,
                            tel_no: "070-2673-9506",
                            address:"福岡県福岡市博多区博多駅南住所詳細２−２−２ー２",
                            ward_name:"西病棟",
                        },
                        patient_registry_status: "0",
                        patient_registry_created_at: "1996年07月17日",
                    },
                    {
                        patient_no: "000123",
                        patient_info: {
                            patient_uuid: "123",
                            patient_name: "患者 太郎",
                            patient_name_katakana: "カンジャ タロウ",
                            patient_gender: 1,
                            patient_birthday: "1996年07月17日",
                            is_name_duplicated: true,
                            tel_no: "070-2673-9506",
                            address:"福岡県久留米市",
                            ward_name:"西病棟",
                        },
                        patient_registry_status: "0",
                        patient_registry_created_at: "1996年07月17日",
                    },
                    {
                        patient_no: "000124",
                        patient_info: {
                            patient_uuid: "123",
                            patient_name: "患者 太郎",
                            patient_name_katakana: "カンジャ タロウ",
                            patient_gender: 1,
                            patient_birthday: "1996年07月17日",
                            is_name_duplicated: true,
                            tel_no: "070-2673-9506",
                            address:"博多区",
                            ward_name:"西病棟",
                        },
                        patient_registry_status: "1",
                        patient_registry_created_at: "1996年07月17日",
                    },
                    {
                        patient_no: "000125",
                        patient_info: {
                            patient_uuid: "123",
                            patient_name: "患者 太郎",
                            patient_name_katakana: "カンジャ タロウ",
                            patient_gender: 1,
                            patient_birthday: "1996年07月17日",
                            is_name_duplicated: true,
                            tel_no: "070-2673-9506",
                            address:"福岡県福岡市博多区博多駅前３丁目２２−８−3F 朝日生命博多駅前ビル",
                            ward_name:"西病棟",
                        },
                        patient_registry_status: "0",
                        patient_registry_created_at: "1996年07月17日",
                    },
                    {
                        patient_no: "000125",
                        patient_info: {
                            patient_uuid: "123",
                            patient_name: "患者 太郎",
                            patient_name_katakana: "カンジャ タロウ",
                            patient_gender: 1,
                            patient_birthday: "1996年07月17日",
                            is_name_duplicated: true,
                            tel_no: "070-2673-9506",
                            address:"北海道札幌市中央区南四条西９−９−８−１００２",
                            ward_name:"西病棟",
                        },
                        patient_registry_status: "0",
                        patient_registry_created_at: "1996年07月17日",
                    },
                    {
                        patient_no: "000125",
                        patient_info: {
                            patient_uuid: "123",
                            patient_name: "患者 太郎",
                            patient_name_katakana: "カンジャ タロウ",
                            patient_gender: 1,
                            patient_birthday: "1996年07月17日",
                            is_name_duplicated: true,
                            tel_no: "070-2673-9506",
                            address:"★ＯＲＣＡ会計連携テスト専用です★",
                            ward_name:"西病棟",
                        },
                        patient_registry_status: "0",
                        patient_registry_created_at: "1996年07月17日",
                    },
                ],
            }
        },
        methods: {
            moment(arg) {
            return moment(arg);
         }  
        }
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
      justify-content: center;
      align-items: center;
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