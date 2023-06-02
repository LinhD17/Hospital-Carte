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

            <!-- 入院形態 -->
            <template v-slot:item.hospitalization_form="{ item }">
                <div class="centered-cell">
                    <div style="min-width: 120px; display: flex;">
                        <div style="text-align: center" class="mr-2">
                            <!-- <v-chip 
                                small
                                text-color="white"
                                style="min-width: 180px; justify-content: center"
                                :color="getColor(item.raw.hospitalization_type_name)"
                            >
                                {{ item.raw.hospitalization_type_name }}
                            </v-chip> -->

                            <v-chip
                                v-if="item.raw.hospitalization_type_name === '一般科'"
                                small
                                style="min-width: 180px; justify-content: center; background-color: #009eac; color: white"
                            >{{ item.raw.hospitalization_type_name  }}</v-chip> 
                            <v-chip
                                v-if="item.raw.hospitalization_type_name === '任意入院'"
                                small
                                style="min-width: 180px; justify-content: center; background-color: #5ab800; color: white"
                            >{{ item.raw.hospitalization_type_name  }}</v-chip>
                            <v-chip
                                v-if="item.raw.hospitalization_type_name === '医療保護'"
                                small
                                style="min-width: 180px; justify-content: center; background-color: #e5b000; color: white"
                            >{{ item.raw.hospitalization_type_name  }}</v-chip>

                            <v-chip
                                v-if="item.raw.hospitalization_type_name === '措置入院'"
                                small
                                style="min-width: 180px; justify-content: center; background-color: #f55a0c; color: white"
                            >{{ item.raw.hospitalization_type_name  }}</v-chip>
                            <v-chip
                                v-if="item.raw.hospitalization_type_name === '応急入院'"
                                small
                                style="min-width: 180px; justify-content: center; background-color: #1ea0dc; color: white"
                            >{{ item.raw.hospitalization_type_name  }}</v-chip>
                            <v-chip
                                v-if="item.raw.hospitalization_type_name === '検察による鑑定入院'"
                                small
                                style="min-width: 180px; justify-content: center; background-color: #fc3e87; color: white"
                            >{{ item.raw.hospitalization_type_name  }}</v-chip>
                            <v-chip
                                v-if="item.raw.hospitalization_type_name === '介護医療院'"
                                small
                                style="min-width: 180px; justify-content: center; background-color: red; color: white"
                            >{{ item.raw.hospitalization_type_name  }}</v-chip>
                            <v-chip
                                v-if="item.raw.hospitalization_type_name === '旧法に基づく入院形態'"
                                small
                                style="min-width: 180px; justify-content: center; background-color: #853ecf; color: white"
                            >{{ item.raw.hospitalization_type_name  }}</v-chip> 
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
                            variant="outlined"
                            small
                            style="min-width: 100px; justify-content: center"
                        >
                            要観察
                        </v-chip>
                    </div>
                    <div v-else-if="item.raw.serious_illness_level === 2">
                        <v-chip
                            small
                            style="min-width: 100px; justify-content: center; background-color: purple; color: white"
                        >
                            診療待ち
                        </v-chip>
                    </div>
                </div>
            </template>
            <!-- 救護区分-->
            <template v-slot:item.aid_classification = "{ item }">
                <div class="centered-cell">
                    <div v-if="item.raw.aid_classification === 1">
                        <v-chip 
                            small
                            style="min-width: 60px; justify-content: center; background-color: #009eac; color: white"
                        >
                            担送
                        </v-chip>
                    </div> 
                    <div v-else-if="item.raw.aid_classification === 2">
                        <v-chip 
                            color="#009eac"
                            text-color="#009eac"
                            small
                            variant="outlined"
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
                            variant="outlined"
                            style="min-width: 60px; justify-content: center"
                        >
                            護送
                        </v-chip>
                    </div>  
                </div>
            </template>
            <!-- 今日のオーダー有無 -->
            <template v-slot:item.has_unimplemented_order="{ item }">
                <div class="centered-cell icon-style">
                    <v-chip
                        v-if="item.raw.has_unimplemented_order"
                        x-small
                        label
                        style="background-color: #1EA0DC; color: white"
                    >有
                    </v-chip>
                    <v-chip v-else small  style="background-color: #707070; color: white" label>無</v-chip>
                </div>
            </template>
            <!-- 隔・拘 -->
            <template v-slot:item.isolation_restraint="{ item }">
                <div class="centered-cell icon-style">
                <v-chip
                    v-if="item.raw.has_isolation_restraint"
                    x-small
                    label
                    style="background-color: #1EA0DC; color: white"
                    >有</v-chip
                >
                    <v-chip v-else small  style="background-color: #707070; color: white" label>無</v-chip>
                </div>
            </template>
            <!-- 感染症 -->
            <template v-slot:item.has_infectious_disease="{ item }">
                <div
                    v-if="
                        item.raw.has_infectious_disease &&
                        (item.raw.infectious_disease_name === '' ||
                        !item.raw.infectious_disease_name)
                    "
                    class="centered-cell icon-style"
                >
                    <v-chip x-small style="background-color: #1EA0DC; color: white" label>有</v-chip>
                </div>
                <div
                    v-if="item.raw.has_infectious_disease && item.raw.infectious_disease_name"
                    class="centered-cell icon-style"
                >
                <v-tooltip bottom>
                    <template #activator="{ on, attrs }">
                        <v-chip style="background-color: #1EA0DC; color: white" label  v-bind="attrs" v-on="on">有</v-chip>
                    </template>
                    <span>{{ item.raw.infectious_disease_name }}</span>
                </v-tooltip>
                </div>
                <div
                    v-if="!item.raw.has_infectious_disease"
                    class="centered-cell icon-style"
                >
                    <v-chip small  style="background-color: #707070; color: white" label>無</v-chip>
                </div>
            </template>
        </v-data-table-virtual>
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

                    { title: '救護区分', key: 'aid_classification', align: 'center', sortable: false, },
                    { title: '褥瘡・転倒・自殺リスク', key: 'risk', align: 'center', ortable: false }, 
                    { title: '今日のオーダー有無', key: 'has_unimplemented_order', align: 'center', sortable: false},
                    { title: '隔・拘', key: 'isolation_restraint', align: 'center', sortable: false,},
                    { title: '感染症', key: 'has_infectious_disease', sortable: false }
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
                        
                        aid_classification: 1,
                        risk: 'サンプルテキスト',
                        has_unimplemented_order: "dummy",
                        has_isolation_restraint:"dummy",
                        has_infectious_disease: "dummy",
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
                        aid_classification: 1,
                        has_unimplemented_order: "",
                        has_isolation_restraint:"",
                        risk: 'サンプルテキスト',
                        has_isolation_restraint: "dummy",
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
                        risk: 'サンプルテキスト',
                        has_unimplemented_order: "dummy",
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
                        risk: 'サンプルテキスト',
                        has_infectious_disease: "dummy",
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
                        aid_classification: 1,
                        has_unimplemented_order: "",
                        has_isolation_restraint:"",
                        risk: 'サンプルテキスト',
                        has_isolation_restraint: "dummy",
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
                        hospitalization_type_name: "旧法に基づく入院形態",
                        primary_disease_name: "アルコール依存症",
                        responsibility_level_name: "外出 (職員同士)",
                        primary_doctor_name: "医師太郎",
                        examination_doctor_1_name: "医師太郎",
                        examination_doctor_2_name:"医師太郎",
                        nurse_name: "看護花子",
                        serious_illness_level: 2,
                        aid_classification: 1,
                        risk: 'サンプルテキスト',
                        has_unimplemented_order: "dummy",
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
                        risk: 'サンプルテキスト',
                        has_unimplemented_order: "dummy",
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
                        risk: 'サンプルテキスト',
                        has_unimplemented_order: "dummy",
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
                        risk: 'サンプルテキスト',
                        has_unimplemented_order: "dummy",
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
                        hospitalization_type_name: "旧法に基づく入院形態",
                        primary_disease_name: "アルコール依存症",
                        responsibility_level_name: "外出 (職員同士)",
                        primary_doctor_name: "医師太郎",
                        examination_doctor_1_name: "医師太郎",
                        examination_doctor_2_name:"医師太郎",
                        nurse_name: "看護花子",
                        serious_illness_level: 2,
                        aid_classification: 3,
                        risk: 'サンプルテキスト',
                        has_unimplemented_order: "dummy",
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
                        risk: 'サンプルテキスト',
                        has_unimplemented_order: "dummy",
                        has_isolation_restraint:"dummy",
                        has_infectious_disease: "dummy",
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
                        aid_classification: 1,
                        has_unimplemented_order: "",
                        has_isolation_restraint:"",
                        risk: 'サンプルテキスト',
                        has_isolation_restraint: "dummy",
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
                        risk: 'サンプルテキスト',
                        has_unimplemented_order: "dummy",
                    },
                ],
            }
        },
        methods: {
            // getColor (hospitalization_type_name) {
            //     if (hospitalization_type_name === "一般科") return '#009eac'
            //     else if (hospitalization_type_name === "任意入院") return '#5ab800'
            //     else if (hospitalization_type_name === "医療保護") return '#e5b000'
            //     else if (hospitalization_type_name === "措置入院") return '#f55a0c'
            //     else if (hospitalization_type_name === "応急入院") return '#1ea0dc'
            //     else if (hospitalization_type_name === "検察による鑑定入院") return '#fc3e87'
            //     else if (hospitalization_type_name === "介護医療院") return '#5ab800'
            //     else if (hospitalization_type_name === "旧法に基づく入院形態") return '#853ecf'
            // },
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