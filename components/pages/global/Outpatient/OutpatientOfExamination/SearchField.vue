<template>
  <div>
    <v-row class="ma-4 pa-2 search-area">
      <v-col md="auto" class="srch-fld">
        <h4>外来受付</h4>
        <div style="width: 210px">
          <date-picker />
        </div>
      </v-col>
      <v-col md="auto" class="srch-fld">
        <h4>診察担当医</h4>
        <v-select
          dense
          clearable
          variant="outlined"
          hide-details
          style="width: 170px"
          :items="['医師　太郎', '医師　次郎', '医師　花子']"
        />
      </v-col>
      <v-col md="auto" class="srch-fld">
        <h4>診察予定時刻</h4>
        <div class="d-flex align-center">
          <TimePicker clearable />
          <span v-text="'～'" class="mx-2"></span>
          <TimePicker clearable />
        </div>
      </v-col>
      <v-col md="auto" class="srch-fld">
        <h4>患者番号</h4>
        <v-text-field
          dense
          variant="outlined"
          hide-details
          placeholder="患者番号を入力"
          style="width: 170px"
        />
      </v-col>
      <v-col md="auto" class="srch-fld">
        <h4>患者氏名</h4>
        <v-text-field
          dense
          variant="outlined"
          hide-details
          placeholder="患者氏名を入力"
          style="width: 170px"
        />
      </v-col>
      <v-col md="auto" class="srch-fld mt-6">
        <v-select
          dense
          clearable
          variant="outlined"
          hide-details
          style="width: 170px"
          :items="['前方一致', '部分一致']"
        />
      </v-col>
      <v-col md="auto mt-8" class="srch-fld">
        <v-btn
          min-width="100"
          rounded
          dense
          variant="outlined"
          style="color: #a9a9a9"
          >項目リセット</v-btn
        >
      </v-col>
      <v-col md="auto mt-8" class="srch-fld">
        <v-btn dense min-width="80" rounded color="primary">検索</v-btn>
      </v-col>
    </v-row>
    <v-row class="ma-4 pa-2 mt-10 search-area">
      <v-col md="auto" class="srch-fld">
        <h4>外来進行状況</h4>
        <v-select
          dense
          clearable
          variant="outlined"
          hide-details
          style="width: 170px"
          :items="['']"
        />
      </v-col>
      <v-col md="auto" class="srch-fld">
        <h4>診療内容</h4>
        <v-select
          dense
          clearable
          variant="outlined"
          hide-details
          style="width: 170px"
          :items="['診察', '処方', '注射', '検索']"
        />
      </v-col>
      <v-col md="auto" class="srch-fld">
        <h4>診察科</h4>
        <v-select
          dense
          clearable
          variant="outlined"
          hide-details
          style="width: 170px"
          :items="['神経内科', '脳神経外科', '内科', '精神科']"
        />
      </v-col>
      <v-col md="auto" class="srch-fld">
        <h4>併科受診</h4>
        <v-select
          dense
          clearable
          variant="outlined"
          hide-details
          style="width: 170px"
          :items="['有', '無']"
        />
      </v-col>
      <v-col md="auto" class="srch-fld">
        <h4>初/再</h4>
        <v-select
          dense
          clearable
          variant="outlined"
          hide-details
          style="width: 170px"
          :items="['初診', '再診']"
        />
      </v-col>
      <v-col md="auto" class="srch-fld">
        <h4>診察形態特殊</h4>
        <v-select
          dense
          clearable
          variant="outlined"
          hide-details
          style="width: 170px"
        />
      </v-col>
      <v-col md="auto" class="srch-fld">
        <h4>背景色</h4>
         <div class="d-flex mt-4 ml-0">
          <div
            class="status-list--box ml-0"
            style="background-color: #ffffff"
          ></div>
          <div class="status-list--box" style="background-color: #a4dcf4"></div>
          <div class="status-list--box" style="background-color: #bce49c"></div>
          <div class="status-list--box" style="background-color: #fbdd9c"></div>
          <div class="status-list--box" style="background-color: #fcc4dc"></div>
          <div class="status-list--box" style="background-color: #e3def1"></div>
        </div>
      </v-col>
      <v-col md="auto" class="srch-fld">
        <h4>コメント</h4>
        <!-- <div class="d-flex mt-4 ml-0"> -->
          <div class="d-flex align-center c-radio-custom">
            <v-checkbox
            v-for="item in OUTPATIENT_COMMENT_COLOR"
            dense
            hide-details
            class="pa-0 ma-0 mr-2"
          >
            <template #label>
              <v-icon :color="item.text" :class="item.class"
                >mdi-sticker-text</v-icon
              >
            </template>
          </v-checkbox>
          <!-- </div> -->
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import DatePicker from '~/components/general/Form/DatePicker.vue'
import TimePicker from '~/components/general/Form/TimePicker.vue'
import { OUTPATIENT_COMMENT_COLOR } from '~/constains/global/outpatient/commentColor.ts'
</script>
  
  <style lang="scss" scoped>
.search-area {
  height: 56px;
}
.srch-fld {
  text-align: left;
}
.status-list--box {
  height: 25px !important;
  width: 25px !important;
  border-radius: 7px;
  border: 1px solid #a9a9a9;
  margin-left: 12px;
}
.mdi-sticker-text {
  &::before {
    content: '';
    display: block;
    width: 22px;
    height: 22px;
    background-image: url('@/assets/icon/cmt1.svg');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 100% auto;
  }
  &.cmt2::before {
    background-image: url('@/assets/icon/cmt2.svg');
  }
  &.cmt3::before {
    background-image: url('@/assets/icon/cmt3.svg');
  }
  &.cmt4::before {
    background-image: url('@/assets/icon/cmt4.svg');
  }
  &.cmt5::before {
    background-image: url('@/assets/icon/cmt5.svg');
  }
  &.cmt6::before {
    background-image: url('@/assets/icon/cmt6.svg');
  }
}
.select-box {
  width: 210px !important;
  height: 30px !important;
}
.btn-style {
  font-family: Meiryo;
  font-weight: bold;
  font-size: 12px;
  width: 78px;
  top: 4px !important;
  height: 30px !important;
  margin-left: 20px;
}
.basic-info {
  height: 78px !important;
  padding-left: 30px;
  margin-top: 4px;
}
p.txt-label {
  color: #333333;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 0;
  text-align: left !important;
  padding-bottom: 10px !important;
}
.search-form__btn.v-btn--disabled {
  color: #b2b2b2 !important;
}
</style>
  