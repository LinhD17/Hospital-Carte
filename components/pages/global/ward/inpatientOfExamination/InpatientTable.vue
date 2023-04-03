<template>
    <div class="table-parent">
        <v-data-table
            :headers="header"
            :items="dummyItems"
            hide-default-header
            hide-default-footer
            fixed-header
            multi-sort
        >
        <!-- table-header -->
        <template #[`header`] = "{  props: { headers } }">
            <thead>
                <tr>
                    <th v-for="(item, id) in headers" :key="id">
                        <div class="sort-cell">
                            {{ item.text }}
                            <div  v-if="item.sortable" class="sort-control">
                                <span
                                >▲</span>
                                <span
                                >▼</span>
                            </div>
                        </div>
                    </th>
                </tr>
            </thead>
            
        </template>

        <!-- tabele-items  -->
        <template #[`item.patient_no`] = "{ item }">
            <div class="centered-cell">
                {{ item.patient_no }}
            </div>
        </template>
        <!-- patient-info -->
        <template #[`item.patient_name`] = "{ item }">
            <div class="d-flex" style="justify-content: space-between">
                <div class="info-cell">
                    <img
                    v-if="item.patient_name.patient_gender === 1"
                    src="@/assets/icons/man.svg"
                    style="width: 25px; height: 25px"
                    />
                    <img
                    v-else
                    style="width: 25px; height: 25px"
                    src="@/assets/icons/female.svg"
                    />
                    <ruby class="info-cell__content ml-2" style="min-width: 110px">
                    <rt class="text-no-wrap" style="font-size: 10px">{{
                        item.patient_name.patient_name_katakana
                    }}</rt>
                    <nuxt-link
                        :to="`/karte?patient_uuid=${item.patient_name.patient_uuid}`"
                        target="_blank"
                        >{{ item.patient_name.patient_name }}
                    </nuxt-link>
                    <!-- {{ item.patient_name.patient_name }} -->
                    </ruby>
                    <div
                        v-if="item.is_name_duplicated === true"
                        class="same-name-field"
                    >
                        <img src="@/assets/icons/important_triangle.svg" />
                        <span>同姓</span>
                    </div>
                </div>
                <div class="d-flex" style="align-items: center; min-width: 120px">
                    <span>
                        {{ item.patient_name.patient_birthday }} ({{ moment().diff(item.patient_name.patient_birthday, 'years', false) }})
                    </span>
                </div>
            </div>
        </template>

        <!-- patient-ward/room/bed -->
        <template #[`item.ward_uuid`] = "{ item }">
            <div class="centered-cell">
                <p class="mb-0" style="min-width: 120px">
                    {{ `${item.ward_uuid.ward_name}/${item.ward_uuid.sick_room_name}/${item.ward_uuid.sick_bed_name}` }}
                </p>
            </div>
        </template>

        <!-- 入院日 -->
        <template #[`item.started_hospitalization_date`]="{ item }">
            <div class="centered-cell" style="min-width: 120px">
                {{ item.started_hospitalization_date }}
            </div>
        </template>
            <!-- 入院日数 -->
        <template #[`item.number_of_days_spent_in_hospital`]="{ item }">
            <div class="centered-cell">
                {{  
                    moment(item.discharge_from_hospital_date).diff(item.started_hospitalization_date, 'days', false)
                }}
            </div>
        </template>
        <!-- 入院形態 -->
        <template #[`item.hospitalization_form`]="{ item }">
            <div class="centered-cell">
                <div style="min-width: 220px">
                    <v-chip
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
                    >{{ item.hospitalization_type_name  }}</v-chip>

                    {{ `${item.started_hospitalization_date}〜` }}
                </div>
            </div>
        </template>
        <!-- 退院日 -->
        <template #[`item.discharge_from_hospital_date`]="{ item }">
            <div class="centered-cell" style="min-width: 120px">
                {{ item.discharge_from_hospital_date }}
            </div>
        </template>
        <!-- 主病名 -->
        <template #[`item.primary_disease_name`]="{ item }">
            <div class="centered-cell" style="min-width: 120px">
                {{ item.primary_disease_name }}
            </div>
        </template>
        <!-- 責任レベル -->
        <template #[`item.responsibility_level_name`]="{ item }">
            <div class="centered-cell" style="min-width: 120px">
                {{ item.responsibility_level_name }}
            </div>
        </template>
        <!-- 主治医 -->
        <template #[`item.primary_doctor_name`]="{ item }">
            <div class="centered-cell" style="min-width: 80px">
                {{ item.primary_doctor_name }}
            </div>
        </template>
            <!-- 診察医１ -->
            <template #[`item.examination_doctor_1_name`]="{ item }">
            <div class="centered-cell" style="min-width: 80px">
                {{ item.examination_doctor_1_name }}
            </div>
        </template>
            <!-- 診察医２ -->
            <template #[`item.examination_doctor_2_name`]="{ item }">
            <div class="centered-cell" style="min-width: 80px">
                {{ item.examination_doctor_2_name }}
            </div>
        </template>
            <!-- 担当看護師 -->
            <template #[`item.nurse_name`]="{ item }">
            <div class="centered-cell">
                {{ item.nurse_name}}
            </div>
        </template>
        <!-- 重病度 muc do nghiem trong-->
        <template #[`item.serious_illness_level`]="{ item }">
              <div class="centered-cell">
                  <div v-if="item.serious_illness_level === 3">
                      <v-chip
                          color="purple"
                          text-color="white"
                          small
                          outlined
                      >
                          要観察
                      </v-chip>
                  </div>
                  <div v-else-if="item.serious_illness_level === 2">
                      <v-chip
                          color="purple"
                          text-color="white"
                          small
                      >
                          診療待ち
                      </v-chip>
                  </div>
              </div>
          </template>
      </v-data-table>
    </div>
  </template>
  
<script lang="ts">
  import { defineComponent } from '@nuxtjs/composition-api'
  import moment from 'moment'

//   type IconClass = {
//   asc: string
//   desc: string
// }

//   type SortHeaderParams = {
//   patient_no: IconClass
//   patient_name: IconClass
//   ward_uuid: IconClass
//   started_hospitalization_date: IconClass
//   number_of_days_spent_in_hospital: IconClass
//   hospitalization_form: IconClass
//   discharge_from_hospital_date: IconClass
//   primary_disease_name: IconClass
//   responsibility_level_name: IconClass
//   primary_doctor_name: IconClass
//   examination_doctor_1_name: IconClass
//   examination_doctor_2_name: IconClass
//   nurse_name: IconClass
//   serious_illness_level: IconClass
// }
  
export default defineComponent({
components: { },
setup() {
    const header = [
        { text: '患者番号', value: 'patient_no', sortable: true },
        { text: '患者情報', value: 'patient_name', sortable: true },
        { text: '病棟/病室/病床', value: 'ward_uuid', sortable: true },
        { text: '入院日', value: 'started_hospitalization_date', sortable: true },
        { text: '入院日数', value: 'number_of_days_spent_in_hospital', sortable: true},
        { text: '入院形態', value: 'hospitalization_form', sortable: true },
        { text: '退院日', value: 'discharge_from_hospital_date', sortable: true },
        { text: '主病名', value: 'primary_disease_name', sortable: true },
        { text: '責任レベル', value: 'responsibility_level_name', sortable: true, },
        { text: '主治医', value: 'primary_doctor_name', sortable: true },
        { text: '診察医１', value: 'examination_doctor_1_name', sortable: true },
        { text: '診察医２', value: 'examination_doctor_2_name', sortable: true },
        { text: '担当看護師', value: 'nurse_name', sortable: true },
        { text: '重症度', value: 'serious_illness_level', sortable: true },
        // {
        //     text: '救護区分',
        //     value: 'aid_classification',
        //     sortable: false,
        // },
        // {
        //     text: '褥瘡・転倒・自殺リスク',
        //     value: 'risk',
        //     sortable: false,
        // },
        // {
        //     text: '今日のオーダー有無',
        //     value: 'has_unimplemented_order',
        //     sortable: false,
        // },
        // {
        //     text: '隔・拘',
        //     value: 'isolation_restraint',
        //     sortable: false,
        //     width: '5%',
        // },
        // { text: '感染症', value: 'has_infectious_disease', sortable: false },
    ]

    const dummyItems = [
        {
            patient_no: "12345",
            patient_name: {
                patient_name: "患者 太郎",
                patient_name_katakana: "カンジャ タロウ",
                patient_gender: 1,
                patient_birthday: "1996年07月17日",
            },
            ward_uuid: {
                ward_name: "1病棟",
                sick_room_name: "A病室",
                sick_bed_name: "301",
            },
            started_hospitalization_date: "2021年04月01日",
            discharge_from_hospital_date: "2021年04月06日",
            hospitalization_type_name: "一般科",
            primary_disease_name: "サンプルテキスト",
            responsibility_level_name: "サンプルテキスト",
            primary_doctor_name: "医師太郎",
            examination_doctor_1_name: "医師太郎",
            examination_doctor_2_name:"医師太郎",
            nurse_name: "看護太郎",
            serious_illness_level: 2,
        },
        {
            patient_no: "12345",
            patient_name: {
                patient_name: "患者 太郎",
                patient_name_katakana: "カンジャ タロウ",
                patient_birthday: "1996年07月17日",
            },
            ward_uuid: {
                ward_name: "1病棟",
                sick_room_name: "A病室",
                sick_bed_name: "301",
            },
            started_hospitalization_date: "2021年04月01日",
            discharge_from_hospital_date: "2021年05月03日",
            hospitalization_type_name: "任意入院",
            primary_disease_name: "サンプルテキスト",
            responsibility_level_name: "サンプルテキスト",
            primary_doctor_name: "医師 太郎",
            examination_doctor_1_name: "医師太郎",
            examination_doctor_2_name:"医師太郎",
            nurse_name: "看護太郎",
            serious_illness_level: 3,
        },
        {
            patient_no: "12345",
            patient_name: {
                patient_name: "患者 太郎",
                patient_name_katakana: "カンジャ タロウ",
                patient_gender: 1,
                patient_birthday: "1996年07月17日",
            },
            ward_uuid: {
                ward_name: "1病棟",
                sick_room_name: "A病室",
                sick_bed_name: "301",
            },
            started_hospitalization_date: "2021年04月01日",
            discharge_from_hospital_date: "2021年04月10日",
            hospitalization_type_name: "医療保護",
            primary_disease_name: "サンプルテキスト",
            responsibility_level_name: "サンプルテキスト",
            primary_doctor_name: "医師太郎",
            examination_doctor_1_name: "医師太郎",
            examination_doctor_2_name:"医師太郎",
            nurse_name: "看護太郎",
            serious_illness_level: 2,
        },
    ]
    // const sortHeaderParams = reactive<SortHeaderParams>({
    //     patient_no: { asc: '', desc: '' },
    //     patient_name: { asc: '', desc: '' },
    //     ward_uuid: { asc: '', desc: '' },
    //     started_hospitalization_date: { asc: '', desc: '' },
    //     number_of_days_spent_in_hospital: { asc: '', desc: '' },
    //     hospitalization_form: { asc: '', desc: '' },
    //     discharge_from_hospital_date: { asc: '', desc: '' },
    //     primary_disease_name: { asc: '', desc: '' },
    //     responsibility_level_name: { asc: '', desc: '' },
    //     primary_doctor_name: { asc: '', desc: '' },
    //     examination_doctor_1_name: { asc: '', desc: '' },
    //     examination_doctor_2_name: { asc: '', desc: '' },
    //     nurse_name: { asc: '', desc: '' },
    //     serious_illness_level: { asc: '', desc: '' },
    // })

    // const handleSort = (param: keyof SortHeaderParams, isDesc: Boolean) => {

    // }
    return { 
        header, 
        dummyItems,
        moment,
        // sortHeaderParams,
        // handleSort,
    }
},
})
</script>

<style lang="scss" scoped>
.table-parent {
    margin: 14px;
}
.sort-cell {
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    font-weight: bold;
    color: #333;
}
.sort-control {
    display: flex;
    flex-direction: column;
    font-size: 10px;
    margin-left:  3px;
    margin-right: -15px;
}

.info-cell {
    a {
        text-decoration: none;
        font-size: 12px;
    }
    display: flex;
    align-items: center;

    .same-name-field {
        color: red;
        font-size: 80%;
        display: inline-block;
        width: 80%;
        text-align: left;
    }
}
.centered-cell {
    text-align: center;
}

</style>