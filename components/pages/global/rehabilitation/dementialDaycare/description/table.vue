<script setup lang="ts">
    const checkVerifiedAllFlg = ref(false)

    type HeaderCell = {
        text: string
        value: string
        width?: string| number 
        sortable: boolean
    };
    const header: HeaderCell[] = [
        { text: '患者選択', value: 'patient_select', sortable: true, width: 80},
        { text: '患者番号', value: 'patient_no', sortable: true, width: 80 },
        { text: '患者情報', value: 'patient_info', sortable: true, width: 250 },
        { text: '主病医', value: 'mainDoctor', sortable: true, width: 80 },
        { text: '評価', value: 'evaluation', sortable: true, width: 150 },
        { text: '所見', value: 'findings', sortable: true, width: 250},
        { text: '評価２', value: 'evaluationInfo', sortable: true, width: 250 },
        { text: '連携', value: 'alignment', sortable: true, width:150 },
    ]

    const dummyItems = [
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
        
    ]

    const page = ref(1)

    const pageCount = ref(0)

    const totalCount = dummyItems.length

    const checkVerifiedAll = () => {
        checkVerifiedAllFlg.value = !checkVerifiedAllFlg.value
    }
</script>

<template>
    <div class="table-parent">
        <v-data-table
            :headers="header"
            :items="dummyItems"
            hide-default-footer
            fixed-header
            @page-count="pageCount = $event"
        >
            <!-- table-header -->
            <!-- checkbox -->
            <template #[`header.patient_select`] = " { }">
                <v-btn icon small @click.stop="checkVerifiedAll">
                    <v-icon v-if="checkVerifiedAllFlg">mdi-check</v-icon>
                    <v-icon v-else>mdi-checkbox-blank-outline</v-icon>
                </v-btn>
            </template>

            <!-- 文例-->
            <template #[`header.evaluationInfo`] = "{  }">
                <th style="text-align: center"> 
                    <div class="d-flex">
                        <a class="mt-6 mr-2 span-custom">文例</a>
                        <span class="mt-6 mr-2 span-custom">テンプレート</span>
                        <v-select
                            class="mt-3"
                            dense
                            outlined
                            placeholder="タグ登録"
                            style="width: 146px"
                            background-color="ưhite"
                        >
                        </v-select>
                    </div>
                </th>
            </template>
            <!-- 連携 -->
            <template #[`header.alignment`] = "{ header }">
                <td style="text-decoration: underline">
                    <span class="span-custom">
                        {{ header.text }}
                    </span>
                </td>
            </template>

            <!-- table-items  -->
            <!-- patient_check -->
            <template #[`item.patient_select`] = " { }">
                <td style="width: 80px">
                    <v-btn icon small @click.stop="checkVerifiedAll">
                        <v-icon v-if="checkVerifiedAllFlg">mdi-check</v-icon>
                        <v-icon v-else>mdi-checkbox-blank-outline</v-icon>
                    </v-btn>
                </td>
            </template>
            <!-- patient_no -->
            <template #[`item.patient_no`] = "{ item }">
                <div class="centered-cell">
                    {{ item.patient_no }}
                </div>
            </template>
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
            <!-- mainDoctor -->
            <template #[`item.mainDoctor`] = " { item } ">
                <div class="centered-cell">
                    {{ item.mainDoctor }}
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
            <!-- alignment -->
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