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
                            <span>類似</span>
                        </div>
                    </div>
                </div>
            </template>
            <!-- 伝票名 -->
            <template v-slot:item.l3_voucher_name=" { item }">
                <!-- <SummaryChip> 
                </SummaryChip> -->

                <v-chip
                    color="#1ea0dc"
                    small
                    variant="outlined"
                    height="22"
                    >詳細</v-chip
                >
                <span class="ml-2" v-text="item.raw.l3_voucher_name"/>
            </template>
            <!-- 指示受け -->
            <template v-slot:item.order_accept_staff="{ item }">
                <div v-for="staff in item.raw.order_accept_staff"
                :key="staff"
                >
                    <span>{{ staff }},</span>
                </div>
            </template>
            <!-- 外来受付受状態 -->
            <template v-slot:item.outpatient_reception_status="{ item }">
                <div v-if="item.raw.outpatient_reception_status === 0">
                    <v-chip small style="background-color: black; color: white"> 未来院 </v-chip>
                </div>
                <div v-if="item.raw.outpatient_reception_status === 1">
                    <v-chip small style="background-color: blue; color: white"> 診療待ち </v-chip>
                </div>
                <div v-if="item.raw.outpatient_reception_status === 2">
                    <v-chip small style="background-color: orange; color: white"> 会計待ち </v-chip>
                </div>
                <div v-if="item.raw.outpatient_reception_status === 3">
                    <v-chip small style="color: red"> 終了 </v-chip>
                </div>
            </template>
        </v-data-table-virtual>
    </div>
</template>

<script>
    import moment from 'moment'
    import SummaryChip from '../../Shared/SummaryChip.vue';

    export default {
        data () {
            return {
                headers: [
                    { title: '至急', key: 'is_urgent', sortable: false, align: 'center' },
                    { title: 'オーダー番号', key: 'order_id', sortable: false, align: 'center' },
                    { title: '患者番号', key: 'patient_no', sortable: false, align: 'center' },
                    { title: '患者情報', key: 'patient_info', sortable: false, align: 'center' },
                    { title: '指示日', key: 'accept_at',sortable: false, align: 'center' },
                    { title: '伝票種別', key: 'l2_voucher_name', sortable: false, align: 'center'},
                    { title: '伝票名', key: 'l3_voucher_name', sortable: false, align: 'center' },
                    { title: '診療科', key: 'hospital_department_name', sortable: false, align: 'center'},
                    { title: '病棟', key: 'movement_ward_name', sortable: false,  align: 'center'},
                    { title: '主治医', key: 'primary_doctor_name', sortable: false, align: 'center' },
                    { title: '指示医', key: 'order_staff_name', sortable: false, align: 'center' },
                    { title: '担当看護師', key: 'nurse_name', sortable: false, align: 'center' },
                    { title: '指示受け', key: 'order_accept_staff', sortable: false, align: 'center'},
                    { title: '外来受付番号', key: 'outpatient_id', sortable: false, align: 'center' },
                    { title: '外来受付状態', key: 'outpatient_reception_status', sortable: false },
                ], 
                dummyItems: [
                    {
                        order_id: "192016",
                        patient_no: "12345",
                        patient_info: {
                            patient_uuid: "123",
                            patient_name: "患者 太郎",
                            patient_name_katakana: "カンジャ タロウ",
                            patient_gender: 1,
                            patient_birthday: "1996年07月17日",
                            is_name_duplicated: true,
                        },
                        accept_at: "2023年06月06日", 
                        l2_voucher_name: "注射", 
                        l3_voucher_name: "インスリン注射_VN", 
                        hospital_department_name: "神経内科",
                        movement_ward_name: "西病棟",
                        primary_doctor_name: "医師太郎",
                        order_staff_name: "保険指定医 テスト０９",
                        nurse_name: "看護花子",
                        order_accept_staff: ['診察', '画像', '栄養'] ,
                        outpatient_id: "",
                        outpatient_reception_status: 3,
                    },
                    {
                        order_id: "192016",
                        patient_no: "12345",
                        patient_info: {
                            patient_uuid: "123",
                            patient_name: "患者 太郎",
                            patient_name_katakana: "カンジャ タロウ",
                            patient_gender: 1,
                            patient_birthday: "1996年07月17日",
                            is_name_duplicated: true,
                        },
                        accept_at: "2023年06月06日", 
                        l2_voucher_name: "注射", 
                        l3_voucher_name: "検体検査(院内)_VN", 
                        hospital_department_name: "神経内科",
                        movement_ward_name: "西病棟",
                        primary_doctor_name: "医師太郎",
                        order_staff_name: "保険指定医 テスト１０",
                        nurse_name: "看護花子",
                        order_accept_staff: ['診察', '検査', '栄養'] ,
                        outpatient_id: "",
                        outpatient_reception_status: 0,
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
      bottom: 0;
      padding: 5px 0;
      justify-content: center;
      align-items: center;
      z-index: 100;
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