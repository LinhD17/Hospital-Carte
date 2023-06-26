<template>
    <general-modal
        modal-width="820"
        modal-key="modal_01"
        modal-position="center"
        modal-title="掲示板の新規登録"
        modal-color="#f0f3f4"
        :modal-button="modalButtons"
    >
        <v-card-text
            style="background-color: #f1f3f4; width: 800px; height: 500px"
        >
            <v-form ref="form" v-model="valid">
                <!-- 投稿者 -->
                <div class="d-flex align-center ml-2 mb-3">
                    <div class="d-flex align-center mt-1 flex-grow-1">
                        <div style="width: 90px">
                            <p class="mb-0 text-right txt-label">投稿者：</p>
                        </div>
                        <p class="ml-2 mr-2 mb-0">山田 太郎(医局)</p>
                    </div>
                </div>
                <!-- 投稿期間 -->
                <div class="d-flex align-center ml-2">
                    <div class="d-flex align-center flex-grow-1">
                        <div class="mb-3" style="width: 90px">
                            <p class="mb-0 text-right txt-label">開始日時：</p>
                        </div>
                    </div>
                    <div class="d-flex" style="width: 800px">
                        <div class="d-flex" style="width: 316px;">
                            <GeneralFormDatePicker1
                                placeholder="年/月/日"
                                class="mr-1"
                            />
                            <GeneralFormTimePicker
                                clearable
                                :height-date-picker="'15px'"
                            />
                        </div>
                        <p class="ml-2 mr-2 mt-3">〜</p>
                        <div class="d-flex" style="width: 316px;">
                            <GeneralFormDatePicker1
                                placeholder="年/月/日"
                                class="mr-1"
                            />
                            <GeneralFormTimePicker
                                clearable
                                :height-date-picker="'15px'"
                            />
                        </div>
                    </div>
                </div>
                <!-- 件名 -->
                <div class="d-flex align-center ml-2 mb-3">
                    <div class="d-flex align-center flex-grow-1">
                        <div style="width: 90px">
                            <p class="mb-0 text-right txt-label">件名：</p>
                        </div>
                        <div style="width: 650px !important">
                            <v-text-field 
                                dense 
                                clearable 
                                variant="solo" 
                                hide-details
                                style="background-color: white" 
                                placeholder="件名を入力してください" 
                            />
                        </div>
                    </div>
                </div>
                <!-- 掲示先部署 -->
                <div class="d-flex align-center ml-2 mb-3">
                    <div class="d-flex align-center flex-grow-1">
                        <div style="width: 90px">
                            <p class="mb-0 text-right txt-label">掲示先部署：</p>
                        </div>
                        <div class="ml-1" style="width: 650px">
                            <v-select
                                dense 
                                clearable 
                                variant="solo" 
                                hide-details
                                style="background-color: white" 
                                placeholder="選択" 
                                :items="['事務局', '診療技術部','看護部', '医事部', '栄養部']"
                            >
                            </v-select>
                        </div>
                    </div>
                </div>

                <!-- 添付ファイル -->
                <div class="d-flex align-center ml-2 mb-3">
                    <div class="d-flex align-center flex-grow-1">
                        <div style="width: 90px">
                            <p class="mb-0 text-right txt-label">添付ファイル：</p>
                        </div>
                        <div class="ml-1 selects" style="width: 650px">
                            <v-file-input
                                label="ファイルを選択"
                                solo
                                flat
                                style="background-color: white" 
                                dense
                                hide-details
                                multiple
                                accept="image/*,audio/*,video/*,.pdf"
                                clearable
                                prepend-icon=""
                                truncate-length="15"
                            >
                            </v-file-input>
                        </div>
                    </div>
                </div>
                <!-- 内容 -->
                <div class="d-flex align-center ml-2 pb-2">
                <div class="d-flex flex-grow-1 root">
                <div style="width: 90px">
                    <p class="mt-1 text-right txt-label">内容：</p>
                </div>
                <div class="ml-1" style="width: 650px">
                    <v-textarea
                        dense 
                        clearable 
                        variant="solo" 
                        hide-details
                        rows="4"
                        style="background-color: white" 
                        placeholder="ここに内容を入力"
                    >
                    </v-textarea>
                </div>
                </div>
                </div>
            </v-form>
        </v-card-text>
    </general-modal>
</template>
<script lang="ts">
    export default {
        data () {
            return {
                modalButtons: [
                    {
                        title: '登録',
                        color: 'primary',
                        methods: 'confirm',
                    },
                ], 
            }
        }
    }
</script>

<style lang="scss" scoped>
    .btn-plus {
      display: block;
      width: 26px;
      height: 26px;
      margin-left: 20px;
      margin-bottom: 3px;
      padding: 0;
    }
    p.txt-label {
    color: #333333;
    font-size: 12px;
    font-weight: 700;
    //margin-bottom: 0;
    align-self: center;
    }
    .root :deep(.v-card .tiptap-vuetify-editor__content > div) {
        height: 300px;
        width: 900px;
    }
    .subject-field {
        width: 950px;
    }
    .selects :deep(.v-text-field.v-file-input > .v-input__control > .v-input__slot) {
        padding: 0 10px;
    }
    .selects  :deep(.theme--light.v-label) {
        color: #adadad;
    }
</style>