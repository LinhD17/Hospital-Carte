<template>
    <v-form ref="form">
        <div class="search-fields">
            <!-- row １ -->
            <div 
                class="search-condition d-flex "
                style="justify-content: space-between; height: 70px;"
            >
                <div style="width:210">
                    <v-select 
                        dense 
                        clearable 
                        variant="solo" 
                        hide-details
                        style="background-color: white" 
                        class="select-box"
                        placeholder="保存したフィルタを選択" 
                        :items="['Vue.js', 'React', 'Angular', 'Buzz']"
                    />
                </div>
                <v-btn
                    ref="submitButtonRef"
                    rounded
                    small
                    width="78"
                    class="btn-style bg-blue text-white ml-4"
                >検索
                </v-btn>
                <v-btn
                    v-if="searchActive"
                    outlined
                    color="primary"
                    rounded
                    small
                    width="78"
                    class="btn-style ml-2"
                    @click="expandRows"
                >条件保存
                </v-btn>
                <v-btn
                    rounded
                    dark
                    small
                    width="78"
                    class="ml-auto outlined  btn-style"
                    @click="toggleSearchActive"
                >
                {{ searchActive ? 'ー閉じる' : '詳細検索' }} 
                </v-btn>
            </div>
            <transition>
                <v-form v-if="searchActive" class="sub-condition">
                    <!-- row 2 -->
                    <div v-show="rowsExpanded" class="patient-basic-info d-flex mt-2">
                        <!-- patient_no -->
                        <div class="col-flex">
                            <p class="txt-label">患者番号:</p>
                            <div style="width: 200px">
                                <v-text-field 
                                    dense
                                    outlined
                                    variant="solo" 
                                    placeholder="患者番号を入力"
                                    style="background-color: white" 
                                /> 
                            </div>
                        </div>
                        <!-- wards -->
                        <div class="col-flex ml-5">
                            <p class="txt-label">病棟:</p>
                            <div style="width: 200px">
                                <v-select
                                    dense
                                    outlined
                                    variant="solo" 
                                    placeholder="全病棟"
                                    :multiple="true"
                                    style="background-color: white" 
                                >
                                    <!-- <template></template>
                                    <template></template> -->
                                </v-select>
                            </div>
                        </div>
                        <!-- patient_name -->
                        <div class="col-flex ml-5">
                            <p class="txt-label">氏名:</p>
                            <div class="d-flex">
                                <div style="width: 230px">
                                    <v-text-field
                                        outlined
                                        dense
                                        variant="solo" 
                                        placeholder="患者名を入力"
                                        style="background-color: white" 
                                    />
                                </div>
                                <div class="ml-2" style="width: 130px">
                                    <v-select
                                        dense
                                        outlined 
                                        variant="solo" 
                                        item-text="text"
                                        item-value="value"
                                        style="background-color: white" 
                                    >
                                    </v-select>
                                </div>
                            </div>
                        </div>
                        <!-- age -->
                        <div class="col-flex ml-5">
                            <p class="txt-label">年齢:</p>
                            <div class="age">
                                <v-select
                                    dense 
                                    outlined
                                    variant="solo" 
                                    placeholder="一歳"
                                    style="background-color: white; width: 90px" 
                                >
                                </v-select>
                                <span class="ml-1 mr-1 mt-2">~</span>
                                <v-select
                                    dense
                                    outlined
                                    variant="solo" 
                                    placeholder="一歳"
                                    style="background-color: white; width: 90px"
                                >
                                </v-select>
                            </div>
                        </div>
                        <!-- gender -->
                        <div class="col-flex ml-5">
                            <p class="txt-label">性別:</p>
                            <div>
                                <v-select
                                    dense
                                    outlined
                                    variant="solo"
                                    placeholder="性別"
                                    :items="['男', '女']"
                                    style="background-color: white; width: 90px"
                                >

                                </v-select>
                            </div>
                        </div>
                        <!-- hospitalization date -->
                        <div class="col-flex ml-5">
                            <p class="txt-label">入院日:</p>
                            <div class="d-flex align-baseline">
                                <div style="width: 150px">
                                    <datepicker
                                        style="width: 120px"
                                        placeholder="入院日"
                                    />
                                </div>
                                <span class="ml-2 mr-2">〜</span>
                                <div style="width:150px">
                                    <datepicker
                                        placeholder="入院日"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- row 3 -->
                    <div class="patient-basic-info d-flex mt-5">
                        <!-- hospitalization days number -->
                        <div class="mt-1 col-flex">
                            <p class="txt-label">入院日数:</p>
                            <div class="d-flex align-baseline">
                                <div style="width: 150px">
                                    <datepicker
                                        :min="0"
                                        placeholder="--日"
                                        style="width: 86px"
                                        type="number"
                                        dense
                                    />
                                </div>
                                <span class="ml-3 mr-3">~</span>
                                <div style="width: 150px">
                                    <datepicker 
                                        :min="0"
                                        placeholder="--日"
                                        style="width: 90px"
                                        type="number"
                                        dense
                                    />
                                </div>
                            </div>
                        </div>
                        <!-- isolation/restraint -->
                        <div class="mt-1 col-flex ml-5">
                            <p class="txt-label">隔離／拘束</p>
                            <div class="d-flex">
                                <v-icon class="mb-1">mdi-crop-square</v-icon>
                                <p class="mt-3 mr-1">隔離中</p>
                                <v-icon class="mb-1">mdi-crop-square</v-icon>
                                <p class="mt-3 mr-1">拘束中</p>
                                <v-icon class="mb-1">mdi-crop-square</v-icon>
                                <p class="mt-3 mr-1">隔離・拘束中</p>
                            </div>
                        </div>
                        <!-- display date -->
                        <div class="mt-1 ml-5 col-flex">
                            <p class="txt-label">表示日</p>
                            <div class="d-flex">
                                <div style="width: 150px">
                                    <datepicker
                                        placeholder="表示日"
                                    >
                                    </datepicker>
                                </div>
                                <v-checkbox 
                                    dense
                                    hide-details
                                    class="mt-1 ml-1"
                                    label="退院者も表示"
                                />
                            </div>
                        </div>
                        <!-- hospitalization forms -->
                        <div class="mt-1 ml-5 col-flex">
                            <p class="txt-label">入院形態</p>
                            <v-select
                                dense
                                outlined
                                placeholder="選択してください"
                                style="width: 210"
                                background-color="white"
                            >
                                <!-- <template></template>
                                <template></template>
                                <template></template> -->
                            </v-select>
                        </div>
                        <!-- responsibility levels -->
                        <div class="mt-1 ml-5 col-flex">
                            <p class="txt-label">責任レベル</p>
                            <v-select
                                outlined
                                dense
                                placeholder="選択してください"
                                style="width: 210"
                                background-color="white"
                            >
                                <!-- <template></template>
                                <template></template>
                                <template></template> -->
                            </v-select>
                        </div>
                    </div>
                    <!-- row 4 -->
                    <div 
                        class="patient-basic-info d-flex mt-6" 
                        style="justify-content: space-between"
                    >
                        <div class="d-flex">
                            <!-- 主病名 -->
                            <div class="mt-1 col-flex">
                                <p class="txt-label">主病名</p>
                                <v-select
                                    outlined
                                    dense
                                    placeholder="選択してください"
                                    style="width: 210"
                                    background-color="white"
                                >
                                    <!-- <template></template>
                                    <template></template>
                                    <template></template>
                                    <template></template> -->
                                </v-select>
                            </div>
                            <!-- 種治医 -->
                            <div class="mt-1 col-flex ml-5">
                                <p class="txt-label">主治医</p>
                                <div class="d-flex">
                                    <v-select
                                        outlined
                                        dense
                                        placeholder="選択してください"
                                        style="width: 210"
                                        background-color="white"
                                    >
                                        <!-- <template></template>
                                        <template></template>
                                        <template></template>
                                        <template></template> -->
                                    </v-select>
                                    <v-checkbox 
                                        dense
                                        class="mt-1 ml-1"
                                        hide-details
                                        label="診察医を含む"
                                    />
                                </div>
                            </div>
                            <!-- 担当看護師 -->
                            <div class="mt-1 col-flex ml-5">
                                <p class="txt-label">担当看護師</p>
                                <v-select
                                    dense
                                    outlined
                                    placeholder="選択してください"
                                    style="width: 210"
                                    background-color="white"
                                >
                                    <!-- <template></template>
                                    <template></template>
                                    <template></template> -->
                                </v-select>
                            </div>
                            <!-- 担当職員 -->
                            <div class="mt-1 col-flex ml-5">
                                <p class="txt-label">担当職員</p>
                                <v-select
                                    outlined
                                    dense
                                    placeholder="選択してください"
                                    style="width: 210"
                                    background-color="white"
                                >
                                    <!-- <template></template>
                                    <template></template>
                                    <template></template> -->
                                </v-select>
                            </div>
                        </div>
                        <!-- reset button -->
                        <div class="align-self-center mt-15">
                            <v-btn
                                outlined
                                small
                                class="search-form_btn ml-auto"
                                width="210"
                            >項目をリセット
                            </v-btn>
                        </div>
                    </div>
                </v-form>
            </transition>
        </div>
    </v-form>
</template>

<script lang="ts">
    import Datepicker from '~/components/General/Form/DatePicker.vue';
    export default {
        data() {
            return {
            searchActive: false,
            rowsExpanded: false,
            }
        },
        methods: {
            toggleSearchActive() {
            this.searchActive = !this.searchActive
            if (!this.searchActive) {
                this.rowsExpanded = false
            }
            },
            expandRows() {
            this.rowsExpanded = true
            },
        },
        setup() {
            Datepicker
        }
    }
</script>

<style lang="scss" scoped>
.search-fields {
    margin: 0;
    color: #333;
    .search-condition {
    display: flex;
    justify-content: space-between;
    padding: 10px 10px 0;
    //height: fit-content !important;
    // background-color: pink;
    }  
    .sub-condition {
        min-height: 172px;
    }
}
p.txt-label{
        color: #333333;
        font-size: 12px;
        font-weight: 700;
        margin-bottom: 0;
        align-self: center;
    }
.age {
    display: flex;
}
.col-flex {
    display: block !important;
}
.select-box {
  width: 230px !important;
  height: 30px !important;
}
.patient-basic-info {
    height: 37px;
}

.btn-style {
  font-family: Meiryo;
  font-weight: bold;
  font-size: 12px;
  width: 78px;
  top: 9px !important;
  height: 30px !important;
}
</style>