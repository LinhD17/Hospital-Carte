<template>
    <general-modal
        modal-width="1000"
        modal-key="schedule-registration"
        modal-position="center"
        modal-title="スケジュール登録"
        modal-color="#f0f3f4"
        :modal-button="modalButtons"
    >
        <v-card-text
            style="background-color: #f1f3f4; width: 800px; height: 660px"
        >
            <v-form ref="form" v-model="valid">
                <div class="mx-5">
                    <div class="d-flex">
                        <v-btn color="primary" width="120px" class="mr-5">
                            予定 
                        </v-btn>
                        <v-btn color="primary" outlined width="120px" shaped>
                            繰り返し予定
                        </v-btn>
                    </div>

                    <div class="d-flex mt-3 mx-5">
                        <p class="mt-2 mb-1 mr-5">日時</p>
                        <div class="d-flex align-center">
                            <div style="width: 160px">
                                <GeneralFormDatePicker 
                                    placeholder="表示日"
                                />
                            </div>
                            <span class="mr-2 ml-2">~</span>
                            <div style="width: 160px">
                                <GeneralFormDatePicker
                                    placeholder="表示日"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="d-flex mt-3 mx-5">
                        <div class="leftColumn">
                            <p class="mt-2 mb-1 mr-5">タイトル</p>
                        </div>
                        <div class="centerColumn">
                        <v-text-field
                            background-color="white"
                            dense
                            placeholder="患者番号を入力"
                            hide-details
                            height="37"
                        ></v-text-field>
                        </div>
                        <div class="d-flex rightColumn">
                            <v-icon class="mt-3 ml-5">mdi-crop-square</v-icon>
                            <p class="mt-3 mb-1">カンファレンス</p>
                        </div>
                    </div>

                    <div class="d-flex mt-3 mx-5">
                        <div class="leftColumn">
                            <p class="mt-2 mb-1 mr-5">参加者</p>
                        </div>
                        <div class="flex-column mr-5" style="width: 248px">
                            <v-text-field
                                background-color="white"
                                dense
                                placeholder="患者番号を入力"
                                hide-details
                                class="center ma-0 pa-0"
                                height="37"
                            ></v-text-field>
                            <v-text-field
                                background-color="white"
                                dense
                                placeholder="患者番号を入力"
                                hide-details
                                class="ma-0 pa-0 mt-2"
                                height="37"
                            ></v-text-field>
                            <!-- table -->
                        </div>
                        <div style="width: 260px">
                            <!-- table -->
                            ahasdadsa
                        </div>
                        <div class="d-flex rightColumn" style="height: 20px">
                            <v-icon class="mt-3 ml-5">mdi-crop-square</v-icon>
                            <p class="mt-3">診察要約不可</p>
                        </div>
                    </div>

                    <div class="d-flex mt-3 mx-5">
                        <div class="leftColumn">
                            <p class="mt-2 mb-1">施設</p>
                        </div>
                        <div class="flex-column mr-5" style="width: 248px">
                            <v-text-field
                                background-color="white"
                                dense
                                placeholder="患者番号を入力"
                                hide-details
                                class="center ma-0 pa-0"
                                height="37"
                            ></v-text-field>
                            <!-- table -->
                        </div>
                        <div style="width: 260px">
                            <!-- table -->
                            scfsdfsdfg
                        </div>
                    </div>

                    <div class="d-flex mt-3 mx-5">
                        <div class="leftColumn">
                        <p class="mt-2 mb-1 mr-5">空き時間</p>
                        </div>
                        <div class="flex-column mr-5">
                        <v-btn color="primary" width="250px"
                            >参加者の空き時間を確認する
                        </v-btn>
                        </div>
                    </div>

                    <div class="d-flex mt-3 mx-5">
                        <div class="leftColumn">
                        <p class="mt-2 mb-1 mr-5">外部職員</p>
                        </div>
                        <div class="flex-column mr-5" style="width: 248px">
                        <v-text-field
                            background-color="white"
                            dense
                            placeholder="患者番号を入力"
                            hide-details
                            class="center ma-0 pa-0"
                            height="37"
                        ></v-text-field>
                        <div class="d-flex justify-end">
                            <v-btn color="primary" outlined dense class="mt-2"
                            >追加<v-icon>mdi-arrow-right-thin</v-icon></v-btn
                            >
                        </div>
                        </div>
                        <div style="width: 260px">
                            <!-- table -->
                        </div>
                    </div>


                    <div class="d-flex mt-3 mx-5">
                        <div class="leftColumn">
                        <p class="mt-2 mb-1 mr-5">メモ</p>
                        </div>
                        <div class="centerColumn">
                        <v-textarea
                            hide-details="auto"
                            placeholder=""
                            background-color="#ffffff"
                            rows="3"
                        ></v-textarea>
                        </div>
                    </div>
                </div>
            </v-form>
        </v-card-text>
    </general-modal>
</template>
<script lang="ts">
    import Datepicker from '@/components/General/Form/DatePicker1.vue';
    export default {
        data () {
            return {
                modalButtons: [
                {
                    title: '登録 or 編集',
                    color: 'primary',
                },

                {
                    title: 'キャンセル',
                    color: 'primary',
                    outlined: true,
                },
                ], 
            }
        }
    }
</script>

<style lang="scss" scoped>
.leftColumn {
  width: 12% !important;
}
.centerColumn {
  width: 60% !important;
}
.rightColumn {
  width: 28%;
}
</style>