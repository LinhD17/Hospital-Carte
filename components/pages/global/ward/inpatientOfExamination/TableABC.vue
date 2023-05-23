<template>
    <div class="task-table">
        <v-data-table
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

            <!-- patient-ward/room/bed -->
            <template v-slot:item.ward_uuid = "{ item }">
                <div class="centered-cell">
                    <p class="mb-0" style="min-width: 120px">
                        {{ `${item.raw.ward_uuid.ward_name}/${item.raw.ward_uuid.sick_room_name}/${item.raw.ward_uuid.sick_bed_name}` }}
                    </p>
                </div>
            </template>

            <!-- 入院日数 -->
            <template  v-slot:item.number_of_days_spent_in_hospital="{ item }">
                <div class="centered-cell">
                    {{  
                        moment(item.raw.discharge_from_hospital_date).diff(item.raw.started_hospitalization_date, 'days', false)
                    }}
                </div>
            </template>

            <!-- 入院形態: chưa xử lý xong chữ màu trắng và ô nhỏ lại -->
            <template v-slot:item.hospitalization_form="{ item }">
                <div class="centered-cell">
                    <div style="min-width: 120px; display: flex;">
                        <div style="text-align: center" class="mr-2">
                            <v-chip 
                                small
                                text-color="white"
                                style="min-width: 180px; justify-content: center"
                                :color="getColor(item.raw.hospitalization_type_name)"
                            >
                                {{ item.raw.hospitalization_type_name }}
                            </v-chip>
                            <!-- <v-chip
                                v-if="item.hospitalization_type_name === '一般科'"
                                color="#009eac"
                                text-color="white"
                                small
                                style="min-width: 80px; justify-content: center"
                            >{{ item.hospitalization_type_name  }}</v-chip> 
                            <v-chip
                                v-if="item.hospitalization_type_name === '任意入院'"
                                color="#5ab800"
                                text-color="white"
                                small
                                style="min-width: 80px; justify-content: center"
                            >{{ item.hospitalization_type_name  }}</v-chip>
                            <v-chip
                                v-if="item.hospitalization_type_name === '医療保護'"
                                color="#e5b000"
                                text-color="white"
                                small
                                style="max-width: 80px; justify-content: center"
                            >{{ item.hospitalization_type_name  }}</v-chip>
                            <v-chip
                                v-if="item.hospitalization_type_name === '措置入院'"
                                color="#f55a0c"
                                text-color="white"
                                small
                                style="min-width: 80px; justify-content: center"
                            >{{ item.hospitalization_type_name  }}</v-chip>
                            <v-chip
                                v-if="item.hospitalization_type_name === '応急入院'"
                                color="#1ea0dc"
                                text-color="white"
                                small
                                style="min-width: 80px; justify-content: center"
                            >{{ item.hospitalization_type_name  }}</v-chip>
                            <v-chip
                                v-if="item.hospitalization_type_name === '検察による鑑定入院'"
                                color="#fc3e87"
                                text-color="white"
                                small
                                style="min-width: 80px; justify-content: center"
                            >{{ item.hospitalization_type_name  }}</v-chip>
                            <v-chip
                                v-if="item.hospitalization_type_name === '介護医療院'"
                                color="#red"
                                text-color="white"
                                small
                                style="min-width: 80px; justify-content: center"
                            >{{ item.hospitalization_type_name  }}</v-chip>
                            <v-chip
                                v-if="item.hospitalization_type_name === '旧法に基づく入院形態'"
                                color="#853ecf"
                                text-color="white"
                                small
                                style="min-width: 80px; justify-content: center"
                            >{{ item.hospitalization_type_name  }}</v-chip>  -->
                        </div>
                        <div class="mt-1">
                            {{ `${item.raw.started_hospitalization_date} ~` }}
                        </div>
                    </div>
                </div>
            </template>

            <!-- 重病度 muc do nghiem trong-->
            <template v-slot:item.serious_illness_level="{ item }">
                <div class="centered-cell">
                    <div v-if="item.raw.serious_illness_level === 3">
                        <v-chip
                            color="purple"
                            text-color="white"
                            small
                            outlined
                            style="min-width: 100px; justify-content: center"
                        >
                            要観察
                        </v-chip>
                    </div>
                    <div v-else-if="item.raw.serious_illness_level === 2">
                        <v-chip
                            color="purple"
                            text-color="white"
                            small
                            style="min-width: 100px; justify-content: center"
                        >
                            診療待ち
                        </v-chip>
                    </div>
                </div>
            </template>
            <!-- 救護区分：phan loai cuu tro, chưa xử lý được outline và màu chứ -->
            <template v-slot:item.aid_classification = "{ item }">
                <div class="centered-cell">
                    <div v-if="item.raw.aid_classification === 1">
                        <v-chip 
                            color="#009eac" 
                            text-color="white" 
                            small
                            style="min-width: 60px; justify-content: center"
                        >
                            担送
                        </v-chip>
                    </div> 
                    <div v-else-if="item.raw.aid_classification === 2">
                        <v-chip 
                            color="#009eac"
                            text-color="#009eac"
                            small
                            outlined
                            style="min-width: 60px; justify-content: center"
                        >
                            独歩
                        </v-chip>
                    </div> 
                    <div v-else-if="item.raw.aid_classification === 3">
                        <v-chip 
                            color="#009eac"
                            text-color="#009eac" 
                            small 
                            outlined
                            style="min-width: 60px; justify-content: center"
                        >
                            護送
                        </v-chip>
                    </div>  
                </div>
            </template>

        </v-data-table>
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

<script>
    import moment from 'moment'
    export default {
        data () {
            return {
                headers: [
                    { title: '患者番号', key: 'patient_no', align: 'center', sortable: true },
                    { title: '患者情報', key: 'patient_info', align: 'center', sortable: true},
                    { title: '病棟/病室/病床', key: 'ward_uuid', align: 'center', sortable: true },
                    { title: '入院日', key: 'started_hospitalization_date', align: 'center', sortable: true },
                    { title: '入院日数', key: 'number_of_days_spent_in_hospital', align: 'center', sortable: true},
                    { title: '入院形態', key: 'hospitalization_form', align: 'center', sortable: true },
                    { title: '退院日', key: 'discharge_from_hospital_date', align: 'center', sortable: true },
                    { title: '主病名', key: 'primary_disease_name', align: 'center', sortable: true },
                    { title: '責任レベル', key: 'responsibility_level_name', align: 'center', sortable: true, },
                    { title: '主治医', key: 'primary_doctor_name', align: 'center', sortable: true },
                    { title: '診察医１', key: 'examination_doctor_1_name', align: 'center', sortable: true },
                    { title: '診察医２', key: 'examination_doctor_2_name', align: 'center', sortable: true },
                    { title: '担当看護師', key: 'nurse_name', align: 'center', sortable: true },
                    { title: '重症度', key: 'serious_illness_level', align: 'center', sortable: true },

                    { text: '救護区分', key: 'aid_classification', align: 'center', sortable: false, },
                    { text: '褥瘡・転倒・自殺リスク', key: 'risk', align: 'center', ortable: false }, 
                    { text: '今日のオーダー有無', key: 'has_unimplemented_order', align: 'center', sortable: false},
                    { text: '隔・拘', key: 'isolation_restraint', align: 'center', sortable: false,},
                    { text: '感染症', key: 'has_infectious_disease', sortable: false }
                ],
                dummyItems: [
                    {
                        patient_no: "12345",
                        patient_info: {
                            patient_uuid: "123",
                            patient_name: "患者 太郎",
                            patient_name_katakana: "カンジャ タロウ",
                            patient_gender: 1,
                            patient_birthday: "1996年07月17日",
                            is_name_duplicated: true,
                        },
                        ward_uuid: {
                            ward_name: "1病棟",
                            sick_room_name: "A病室",
                            sick_bed_name: "301",
                        },
                        started_hospitalization_date: "2021年04月01日",
                        discharge_from_hospital_date: "2021年04月06日",
                        hospitalization_type_name: "一般科",
                        primary_disease_name: "器質性の妄想状態および幻覚妄想状態",
                        responsibility_level_name: "病棟内",
                        primary_doctor_name: "医師太郎",
                        examination_doctor_1_name: "医師太郎",
                        examination_doctor_2_name:"医師太郎",
                        nurse_name: "看護花子",
                        serious_illness_level: 2,
                        aid_classification: 1,
                        // has_unimplemented_order: "",
                        // has_isolation_restraint:"",
                        // has_infectious_disease: "",
                    },
                    {
                        patient_no: "12345",
                        patient_info: {
                            patient_uuid: "123",
                            patient_name: "患者 太郎",
                            patient_name_katakana: "カンジャ タロウ",
                            patient_birthday: "1996年07月17日",
                            is_name_duplicated: true,
                        },
                        ward_uuid: {
                            ward_name: "1病棟",
                            sick_room_name: "A病室",
                            sick_bed_name: "301",
                        },
                        started_hospitalization_date: "2021年04月01日",
                        discharge_from_hospital_date: "2021年05月03日",
                        hospitalization_type_name: "任意入院",
                        primary_disease_name: "うつ病",
                        responsibility_level_name: "外出 (職員同伴)",
                        primary_doctor_name: "医師 太郎",
                        examination_doctor_1_name: "医師太郎",
                        examination_doctor_2_name:"医師太郎",
                        nurse_name: "看護花子",
                        serious_illness_level: 3,
                        aid_classification: 2,
                        has_unimplemented_order: "",
                        has_isolation_restraint:"",
                    },
                    {
                        patient_no: "12345",
                        patient_info: {
                            patient_uuid: "123",
                            patient_name: "患者 太郎",
                            patient_name_katakana: "カンジャ タロウ",
                            patient_gender: 1,
                            patient_birthday: "1996年07月17日",
                            is_name_duplicated: true,
                        },
                        ward_uuid: {
                            ward_name: "1病棟",
                            sick_room_name: "A病室",
                            sick_bed_name: "301",
                        },
                        started_hospitalization_date: "2021年04月01日",
                        discharge_from_hospital_date: "2021年04月10日",
                        hospitalization_type_name: "医療保護",
                        primary_disease_name: "アルコール依存症",
                        responsibility_level_name: "外出 (職員同士)",
                        primary_doctor_name: "医師太郎",
                        examination_doctor_1_name: "医師太郎",
                        examination_doctor_2_name:"医師太郎",
                        nurse_name: "看護花子",
                        serious_illness_level: 2,
                        aid_classification: 3,
                    },
                    {
                        patient_no: "12345",
                        patient_info: {
                            patient_uuid: "123",
                            patient_name: "患者 太郎",
                            patient_name_katakana: "カンジャ タロウ",
                            patient_gender: 1,
                            patient_birthday: "1996年07月17日",
                            is_name_duplicated: true,
                        },
                        ward_uuid: {
                            ward_name: "1病棟",
                            sick_room_name: "A病室",
                            sick_bed_name: "301",
                        },
                        started_hospitalization_date: "2021年04月01日",
                        discharge_from_hospital_date: "2021年04月10日",
                        hospitalization_type_name: "検察による鑑定入院",
                        primary_disease_name: "アルコール依存症",
                        responsibility_level_name: "外出 (職員同士)",
                        primary_doctor_name: "医師太郎",
                        examination_doctor_1_name: "医師太郎",
                        examination_doctor_2_name:"医師太郎",
                        nurse_name: "看護花子",
                        serious_illness_level: 2,
                        aid_classification: 3,
                    },
                ],
            }
        },
        methods: {
            getColor (hospitalization_type_name) {
                if (hospitalization_type_name === "一般科") return '#009eac'
                else if (hospitalization_type_name === "任意入院") return '#5ab800'
                else if (hospitalization_type_name === "医療保護") return '#e5b000'
                else if (hospitalization_type_name === "措置入院") return '#f55a0c'
                else if (hospitalization_type_name === "応急入院") return '#1ea0dc'
                else if (hospitalization_type_name === "検察による鑑定入院") return '#fc3e87'
                else if (hospitalization_type_name === "介護医療院") return '#5ab800'
                else if (hospitalization_type_name === "旧法に基づく入院形態") return '#853ecf'
            },
            moment(arg) {
             return moment(arg);
         }  
        }
    }
</script>
  
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