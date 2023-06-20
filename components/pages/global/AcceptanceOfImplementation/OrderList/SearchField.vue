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
                        placeholder="検査条件呼び出し" 
                        :items="['Vue.js', 'React', 'Angular', 'Buzz']"
                    />
                </div>
                <v-btn
                    color="primary"
                    class="btn-style  text-white ml-4 mt-3 rounded"
                >検索
                </v-btn>
                <v-btn
                    color="primary"
                    class="ml-auto c-toggle text-white mt-3  btn-style rounded"
                    @click="searchActive = !searchActive"
                    :class="searchActive ? 'open' : ''"
                > 
                    {{ searchActive ? 'ー閉じる' : '詳細検索' }} 
                </v-btn>
            </div>

            <v-expand-transition>
                <v-card v-show="searchActive">
                    <v-container fluid class="white">
                        <!-- row 2 -->
                        <v-row dense>
                            <v-col md="auto">
                                <p class="txt-label">指示日</p>
                                <div style="width: 154px">
                                    <datepicker
                                        placeholder="年/月/日"
                                    />
                                </div>
                            </v-col>

                            <v-col md="auto" mx="auto">
                                <p class="txt-label">患者番号</p>
                                <div style="width: 150px">
                                    <v-text-field
                                        dense
                                        hide-details
                                        variant="solo" 
                                        placeholder="患者番号を入力"
                                        style="background-color: white" 
                                    />
                                </div>
                            </v-col>

                            <v-col md="auto">
                                <p class="txt-label">患者氏名</p>
                                <div style="width: 15px">
                                    <v-text-field
                                        dense
                                        hide-details
                                        placeholder="患者名を入力"
                                        variant="solo" 
                                        style="background-color: white" 
                                    />
                                </div>
                            </v-col>

                            <v-col md="auto">
                                <p class="txt-label">患者性別</p>
                                <div style="width: 100px">
                                    <v-select
                                        dense
                                        hide-details
                                        clearable
                                        placeholder="すべて"
                                        variant="solo" 
                                        style="background-color: white" 
                                    />
                                </div>
                            </v-col>

                            <v-col md="auto">
                                <p class="txt-label">受け状況</p>
                                <v-radio-group
                                    row
                                    dense
                                    hide-details
                                    class="ma-0 pa-0 d-flex"
                                >
                                    <v-radio label="有" :value="2"></v-radio>
                                    <v-radio label="無" :value="1"></v-radio>
                                    <v-radio label="両方" :value="0"></v-radio>
                                </v-radio-group>
                            </v-col>

                            <v-col md="auto">
                                <p class="txt-label">実施状況</p>
                                <v-radio-group
                                    row
                                    dense
                                    hide-details
                                    class="ma-0 pa-0"
                                >
                                    <v-radio label="未実施" :value="2"></v-radio>
                                    <v-radio label="実施済" :value="1"></v-radio>
                                    <v-radio label="両方" :value="0"></v-radio>
                                </v-radio-group>
                            </v-col>
                        </v-row>

                        <!-- row 3 -->
                        <v-row dense>
                            <v-col md="auto">
                                <p class="txt-label">診察科</p>
                                <div style="width: 150px">
                                    <v-select
                                        dense
                                        hide-details
                                        clearable
                                        variant="solo" 
                                        placeholder="診療科を選択"
                                        style="background-color: white" 
                                    />
                                </div>
                            </v-col>
                            
                            <v-col md="auto">
                                <p class="txt-label">入外</p>
                                <div style="width: 100px">
                                    <v-select
                                        dense
                                        hide-details
                                        clearable
                                        variant="solo" 
                                        placeholder="すべて"
                                        style="background-color: white" 
                                    />
                                </div>
                            </v-col>

                            <v-col md="auto">
                                <p class="txt-label">病棟</p>
                                <div style="width: 150px">
                                    <v-select
                                        dense
                                        hide-details
                                        clearable
                                        variant="solo" 
                                        placeholder="病棟を選択"
                                        style="background-color: white" 
                                    />
                                </div>
                            </v-col>

                            <v-col md="auto">
                                <p class="txt-label">伝票種別</p>
                                <div style="width: 150px">
                                    <v-select
                                        dense
                                        hide-details
                                        clearable
                                        variant="solo" 
                                        placeholder="伝票を選択"
                                        style="background-color: white" 
                                    />
                                </div>
                            </v-col>

                            <v-col md="auto">
                                <p class="txt-label">伝票名</p>
                                <div style="width: 150px">
                                    <v-select
                                        dense
                                        hide-details
                                        clearable
                                        variant="solo" 
                                        placeholder="伝票を選択"
                                        style="background-color: white" 
                                    />
                                </div>
                            </v-col>

                            <v-col md="auto">
                                <p class="txt-label">指示医</p>
                                <div style="width: 150px">
                                    <v-select
                                        dense
                                        hide-details
                                        clearable
                                        variant="solo" 
                                        placeholder="指示医を選択"
                                        style="background-color: white" 
                                    />
                                </div>
                            </v-col>

                            <v-col md="auto">
                                <p class="txt-label">担当看護師</p>
                                <div style="width: 150px">
                                    <v-select
                                        dense
                                        hide-details
                                        clearable
                                        variant="solo" 
                                        placeholder="担当看護師"
                                        style="background-color: white" 
                                    />
                                </div>
                            </v-col>

                        </v-row>
                    </v-container>
                </v-card>
            </v-expand-transition>
        </div>
    </v-form>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import Datepicker from '~/components/General/Form/DatePicker1.vue';
    
    // 検索エリア開閉状態
    const searchActive = ref<Boolean>(false)
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
}
.col {
  p {
    font-weight: bold;
    margin-bottom: 0;
    padding-bottom: 0;
  }
}
p.txt-label{
    color: #333333;
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 0;
    align-self: center;
}

.select-box {
  width: 180px !important;
}
.patient-basic-info {
    height: 37px;
}

.btn-style {
  font-family: Meiryo;
  font-weight: bold;
  font-size: 12px;
  width: 80px;
  top: 9px !important;
  height: 30px !important;
}

</style>