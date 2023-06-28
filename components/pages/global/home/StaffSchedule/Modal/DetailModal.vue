<template>
    <general-modal
        modal-width="1000"
        modal-key="schedule-detail"
        modal-position="center"
        modal-title="スケジュール詳細"
        modal-color="#f0f3f4"
        :modal-button="modalButtons"
    >
        <v-card-text
            style="background-color: #f1f3f4; width: 800px; height: 500px"
        >
            <div class="d-flex justify-end mb-2">
                <p>登録者:<span class="u-ml-10 mr-5">Test test: Dr</span></p>
                <p class="u-ml-30">更新者:<span class="u-ml-10">山田花子</span></p>
            </div>
            <v-form ref="form" v-model="submit">
                <div class="schedule-detail-table">
                    <div class="row-item">
                        <div class="row-item__left">
                            <p>予定タイトル</p>
                        </div>
                        <div class="row-item__right">
                            <p>第1回　褥瘡委員会</p>
                        </div>
                    </div>

                    <div class="row-item">
                        <div class="row-item__left">
                        <p>日時</p>
                        </div>
                        <div class="row-item__right">
                        <div class="d-flex align-center">
                            <p>2020/5/10 10:00~12:00</p>
                            <v-btn 
                                color="#F55A0C" 
                                height="28" 
                                width="174" 
                                class="btn-check"
                                rounded
                            >診察との重複登録不可</v-btn
                            >
                        </div>
                        </div>
                    </div>

                    <div class="row-item">
                        <div class="row-item__left">
                        <p>繰り返し</p>
                        </div>
                        <div class="row-item__right">
                        <p>毎週水曜日 2020/04/20 （水）〜 2020/05/20 （木）</p>
                        </div>
                    </div>

                    <div class="row-item">
                        <div class="row-item__left">
                        <p>参加者</p>
                        <p>施設</p>
                        </div>
                        <div class="row-item__right">
                        <p>Test test: Dr Test test: 看護師</p>
                        <p>◯◯会議室</p>
                        </div>
                    </div>

                    <div class="row-item">
                        <div class="row-item__left">
                        <p>外部職員</p>
                        </div>
                        <div class="row-item__right">
                        <p>XXXX病院 田中 一郎</p>
                        <p>XX協会 田中次郎</p>
                        </div>
                    </div>

                    <div class="row-item">
                        <div class="row-item__left">
                        <p>メモ</p>
                        </div>
                        <div class="row-item__right">
                        <p class="font-weight-normal">
                            メモサンプルテキストメモサンプルテキストメモサンプルテキストメモサンプルテキストメモサンプルテキストメモサンプルテキストメモサンプルテキストメモサンプルテキストメモサンプルテキストメモサンプルテキストメモサンプルテキスト
                        </p>
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
                        title: '編集',
                        color: 'primary',
                        methods: 'submit',
                    },
                ], 
            }
        }
    }
</script>

<style lang="scss" scoped>
.schedule-detail-table {
  display: flex;
  flex-direction: column;

  .row-item {
    display: flex;
    flex-direction: row;

    &__left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 16px 10px;
      background-color: #dedede;
      width: 120px;
    }

    &__right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 16px 10px;
      background-color: #ffffff;
      width: 100%;
    }

    p {
      margin-bottom: 0;
      font-weight: bold;
    }
  }

  .row-item + .row-item {
    margin-top: 5px;
  }
}

.font-weight-normal {
  font-weight: normal !important;
}

.btn-check {
  margin-left: 50px;
  color: #ffffff !important;
}

$margin-utils: (
  '10': 10px,
  '12': 12px,
  '30': 30px,
  '50': 50px,
);

@each $key, $val in $margin-utils {
  .u-ml-#{$key} {
    margin-left: $val;
  }
  .u-mr-#{$key} {
    margin-right: $val;
  }
  .u-mt-#{$key} {
    margin-top: $val;
  }
  .u-mb-#{$key} {
    margin-bottom: $val;
  }
}
</style>