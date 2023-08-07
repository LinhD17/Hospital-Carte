<template>
  <div class="pa-4 pb-2">
    <v-container fluid class="white">
      <v-row dense style="display: flex; justify-content: space-between">
        <div style="display: flex">
          <v-col md="auto">
            <p style="text-align: left; font-weight: bold">外来受付</p>
            <div style="width: 150px">
              <date-picker placeholder="年/月/日" />
            </div>
          </v-col>
          <v-col md="auto">
            <p style="text-align: left; font-weight: bold">診察担当医</p>
            <div style="width: 150px">
              <v-select
                dense
                variant="solo"
                clearable
                hide-details
                placeholder="診察担当医を選択"
                :items="['医師　太郎', '医師　次郎', '医師　花子']"
              />
            </div>
          </v-col>
          <v-col md="auto">
            <p style="text-align: left; font-weight: bold">診察予定時刻</p>
            <div class="d-flex align-center" style="width: 335px">
              <TimePicker clearable />
              <span v-text="'～'" class="mx-2"></span>
              <TimePicker clearable />
            </div>
          </v-col>
          <v-col md="auto" mx="auto">
            <p style="text-align: left; font-weight: bold">患者番号</p>
            <div style="width: 150px">
              <v-text-field
                dense
                variant="solo"
                clearable
                hide-details
                placeholder="患者番号を入力"
              />
            </div>
          </v-col>
          <v-col md="auto" mx="auto">
            <p style="text-align: left; font-weight: bold">患者氏名</p>
            <div style="width: 150px">
              <v-text-field
                dense
                variant="solo"
                clearable
                hide-details
                placeholder="患者氏名を入力"
              />
            </div>
          </v-col>
          <v-col md="auto">
            <div style="width: 150px" class="mt-5">
              <v-select
                dense
                variant="solo"
                clearable
                hide-details
                :items="['前方一致', '部分一致']"
              />
            </div>
          </v-col>
          <v-col md="auto" class="mt-8">
            <div style="width: 110px">
              <v-btn
                small
                width="100"
                variant="outlined"
                style="color: #a9a9a9"
                rounded
                >項目リセット</v-btn
              >
            </div>
          </v-col>
          <v-col md="auto">
            <div style="width: 80px" class="mt-8">
              <v-btn small color="primary" rounded>検索</v-btn>
            </div>
          </v-col>
        </div>
      </v-row>
      <v-row dense style="display: flex; justify-content: space-between">
        <div style="display: flex">
          <v-col md="auto">
            <p style="text-align: left; font-weight: bold">外来進行状況</p>
            <div style="width: 150px">
              <v-select dense variant="solo" clearable hide-details />
            </div>
          </v-col>
          <v-col md="auto">
            <p style="text-align: left; font-weight: bold">診療内容</p>
            <div style="width: 150px">
              <v-select
                dense
                variant="solo"
                clearable
                hide-details
                :items="['診察', '処方', '注射', '検索']"
              />
            </div>
          </v-col>
          <v-col md="auto">
            <p style="text-align: left; font-weight: bold">診察科</p>
            <div style="width: 150px">
              <v-select
                dense
                variant="solo"
                clearable
                hide-details
                :items="['神経内科', '脳神経外科', '内科', '精神科']"
              />
            </div>
          </v-col>
          <v-col md="auto">
            <p style="text-align: left; font-weight: bold">併科受診</p>
            <div style="width: 150px">
              <v-select
                dense
                variant="solo"
                clearable
                hide-details
                :items="['有', '無']"
              />
            </div>
          </v-col>
          <v-col md="auto">
            <p style="text-align: left; font-weight: bold">初/再</p>
            <div style="width: 150px">
              <v-select
                dense
                variant="solo"
                clearable
                hide-details
                :items="['初診', '再診']"
              />
            </div>
          </v-col>
          <v-col md="auto">
            <p style="text-align: left; font-weight: bold">診察形態特殊</p>
            <div style="width: 150px">
              <v-select dense variant="solo" clearable hide-details />
            </div>
          </v-col>
          <v-col md="auto">
            <p style="text-align: left; font-weight: bold">背景色</p>
            <div style="width: 350px; text-align: left;" class="d-flex">
              <v-checkbox
            v-for="item in OUTPATIENT_STATUS_COLOR"
            :key="item.value" 
            dense
            hide-details
            :value="item.value"
          >
            <template #label>
              <div
                :style="`background-color:${item.text}`"
                class="status-box"
              ></div>
            </template>
          </v-checkbox>
            </div>
          </v-col>
          <v-col md="auto" class="srch-fld">
            <p style="text-align: left; font-weight: bold">コメント</p>
          <div style="width: 350px;" class="d-flex">
          <v-checkbox
            v-for="item in OUTPATIENT_COMMENT_COLOR"
            :key="item.value" 
            :value="item.value"
            dense
            hide-details
          >
            <template #label>
              <v-icon :color="item.text" :class="item.class"
                >mdi-sticker-text</v-icon
              >
            </template>
          </v-checkbox>
        </div>
      </v-col>
        </div>
      </v-row>
    </v-container>
  </div>
</template>
    
<script setup lang="ts">
import DatePicker from '~/components/General/Form/DatePicker1.vue'
import TimePicker from '~/components/General/Form/TimePicker.vue'
import { OUTPATIENT_STATUS_COLOR } from '~/constains/global/outpatient/statusColor'
import { OUTPATIENT_COMMENT_COLOR } from '~/constains/global/outpatient/commentColor'
</script>

<style lang="scss" scoped>
.col {
  .v-btn {
    top: 0;
    bottom: 0;
    margin: auto;
  }
}
.status-box {
  height: 18px;
  width: 18px;
  border: solid 0px #f0f3f4;
  outline: solid 0px white;
}
.status-list--box {
  height: 18px;
  width: 18px;
  border: solid 0px #c9c9c9;
  outline: solid 0px white;
}
.mdi-sticker-text {
  &::before {
    content: '';
    display: block;
    width: 22px;
    height: 22px;
    background-image: url('@/assets/icon/cmt1.svg');
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

</style>
    