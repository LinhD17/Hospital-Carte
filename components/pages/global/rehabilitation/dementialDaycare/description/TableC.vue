<script>
    export default {
        data () {
            return {
                selected: [],
                headers: [
                    { title: '患者番号', value: 'patient_no', align: 'center', sortable: false },
                    { title: '患者情報', value: 'patient_info', align: 'center', sortable: false },
                    { title: '主病医', value: 'mainDoctor', align: 'center', sortable: false },
                    { title: '評価', value: 'evaluation', align: 'center', sortable: false },
                    { title: '所見', value: 'findings', align: 'center', sortable: false },
                    { title: '評価２', value: 'evaluationInfo', align: 'center', sortable: false },
                    { title: '連携', value: 'alignment', align: 'center', sortable: false },
                ],
                dummyItems: [
                    {
                        patient_no: "12345",
                        patient_info: {
                            patient_name: "患者 太郎",
                            patient_name_katakana: "カンジャ タロウ",
                            patient_gender: 1,
                            birthday: "1996/07/17",
                            is_name_duplicated: true,
                        },
                        mainDoctor: '医師　太郎',
                    },
                    {
                        patient_no: "12345",
                        patient_info: {
                            patient_name: "患者 太郎",
                            patient_name_katakana: "カンジャ タロウ",
                            birthday: "1996/07/17",
                            is_name_duplicated: true,
                        },
                        mainDoctor: '医師　太郎',
                    },
                    {
                        patient_no: "12345",
                        patient_info: {
                            patient_name: "患者 太郎",
                            patient_name_katakana: "カンジャ タロウ",
                            patient_gender: 1,
                            birthday: "1996/07/17",
                            is_name_duplicated: true,
                        },
                        mainDoctor: '医師　太郎',
                    },
                    {
                        patient_no: "12345",
                        patient_info: {
                            patient_name: "患者 太郎",
                            patient_name_katakana: "カンジャ タロウ",
                            birthday: "1996/07/17",
                            is_name_duplicated: true,
                        },
                        mainDoctor: '医師　太郎',
                    },
                ],
            }
        },         
    }
</script>
<template>
    <div class="task-table">
        <v-data-table
            v-model="selected"
            :headers="headers"
            :items="dummyItems"
            class="elevation-1"
            show-select
            @page-count="pageCount = $event"
        >
            <!-- patient-info -->
            <template #[`item.patient_info`] = "{ item }">
                <div class="d-flex" style="justify-content: space-between">
                    <div class="info-cell">
                        <img
                            v-if="item.patient_info.patient_gender === 1"
                            src="@/assets/icons/man.svg"
                            style="width: 25px; height: 25px"
                        />
                        <img
                            v-else
                            style="width: 25px; height: 25px"
                            src="@/assets/icons/female.svg"
                        />
                        <a>
                            <ruby class="info-cell__content ml-2">
                                <rt class="text-no-wrap" style="font-size: 10px">
                                    {{ item.patient_info.patient_name_katakana }}
                                </rt>
                                {{ item.patient_info.patient_name }}
                            </ruby>
                        </a>
                        <div
                            v-if="item.patient_info.is_name_duplicated === true"
                            class="same-name-field"
                        >
                            <img src="@/assets/icons/important_triangle.svg" />
                            <span>同姓</span>
                        </div>
                        <span style="margin: 0">
                            {{ item.patient_info.birthday }}
                            ({{ moment().diff(item.patient_info.birthday, 'years', false) }}) 
                        </span>
                    </div>
                </div>
            </template>

            <!-- evaluation -->
            <template #[`item.evaluation`] = " {} ">
                <div class="centered-cell">
                    <v-select
                        dense
                        hide-details
                        outlined
                        placeholder="評価を選択"
                    >
                    </v-select>
                </div>
            </template>

            <!-- findings -->
            <template #[`item.findings`] = "{ } ">
                <v-textarea 
                :rows="3"
                hide-details
                outlined
                class="mt-2 mb-2"
                placeholder="所見を入力"
                >
                </v-textarea>
            </template>

            <!-- evaluationInfo -->
            <template #[`item.evaluationInfo`] = "{ }">
                <div class="mt-1" style="display: flex">
                    <v-btn dense outlined small rounded color="primary">文例</v-btn>
                    <v-btn class="ml-2" dense outlined small rounded color="primary">テンプレート</v-btn>
                    <v-btn class="ml-2" dense outlined small rounded color="primary">価格収込</v-btn>
                </div>
                <p style="font-size: 12px" class="mt-1 ma-0">タグ登録:</p>
                <div>
                    <v-select
                        outlined
                        dense
                        style="width: 260px"
                        placeholder="タグを選択"
                    >
                    </v-select>
                </div>
            </template>
        </v-data-table>
        <div class="table-footer text-center pt-2">
            <span>全 {{ totalCount }} 件</span>
            <v-pagination
                v-model="page"
                class="ml-4"
                circle
                :length="pageCount"
                :total-visible="pageCount"
            ></v-pagination>
            <v-btn
                rounded
                color="primary"
                class="mr-3"
                style="position: absolute; right: 0;"
            >登録</v-btn>
        </div>
    </div>
</template>
  

<style lang="scss" scoped> 
.table-parent {
    margin: 0 14px 14px;
}
.sort-cell {
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    font-weight: bold;
    color: #333;
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
.table-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 10px 0;
  background-color: #ffffff;
  filter: drop-shadow(0 -3px 3px #e6e6e6);
}
.span-custom {
    color: #1ea0dc;
    text-decoration: underline;
}
</style>