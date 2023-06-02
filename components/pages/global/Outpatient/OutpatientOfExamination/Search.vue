<script setup lang="ts">
</script>
<template>
  <v-container fluid>
    <div class="search-fields">
      <div class="justify-space-between d-flex">
        <div class="d-flex">
          <div class="ml-5">
            <p class="text-left">外来受付</p>
            <!-- need to fix datepicker -->
            <div class="mt-3" style="width: 120px;">
              <datepicker placeholder="年/月/日" />
            </div>
          </div>
          <div class="ml-5">
            <p class="text-left">診察担当医</p>
            <div class="mt-3" style="width: 170px">
              <v-select
                dense
                clearable
                variant="solo"
                hide-details
                style="background-color: white"
              ></v-select>
            </div>
          </div>
          <div class="ml-5" style="width: 400px">
            <p class="text-left">診察予定時刻</p>
            <div class="d-flex align-center">
              <datepicker

                        placeholder="時/分"

                        timePicker

                    />
              <span v-text="'～'" class="mx-2" />
              <datepicker

                        placeholder="時/分"

                        timePicker

                    />
            </div>
          </div>
          <div class="ml-5 mr-5">
            <p class="text-left">患者番号</p>
            <div class="mt-3" style="width: 140px">
              <v-text-field
                variant="solo"
                dense
                hide-details
                style="background-color: #ffffff; width: 170px"
              />
            </div>
          </div>
          <div class="ml-5">
            <p class="ml-5 text-left">患者氏名</p>
            <div class="d-flex mt-3 ml-5">
              <v-text-field
                variant="solo"
                dense
                hide-details
                style="background-color: #ffffff; width: 170px"
              />
              <v-select
                class="ml-5"
                dense
                clearable
                variant="solo"
                hide-details
                style="background-color: #ffffff; width: 80px"
                :items="['前方一致', '部分一致']"
              />
            </div>
          </div>
          <div class="ml-5 mt-10">
            <v-btn
              small
              outlined
              rounded
              width="100"
              style="background-color: #ffffff; color: #a9a9a9"
              >項目リセット</v-btn
            >
          </div>
          <div class="ml-5 mt-10">
            <v-btn
              small
              rounded
              style="background-color: #1ea0dc; color: #ffffff"
              >検索</v-btn
            >
          </div>
        </div>
      </div>

      <div class="justify-space-between d-flex">
        <div class="d-flex">
          <div class="ml-5 mt-5">
            <p class="text-left">外来進行状況</p>
            <div class="mt-3" style="width: 170px">
              <v-select
                dense
                clearable
                variant="solo"
                hide-details
                style="background-color: white"
                :items="['未来院', '診察待ち', '会計待ち', '会計終了']"
              />
            </div>
          </div>
          <div class="ml-5 mt-5">
            <p class="text-left">診療内容</p>
            <div class="mt-3" style="width: 170px">
              <v-select
                dense
                clearable
                variant="solo"
                hide-details
                style="background-color: white"
                :items="['診察', '処方', '注射']"
              />
            </div>
          </div>
          <div class="ml-5 mt-5">
            <p class="text-left">診察科</p>
            <div class="mt-3" style="width: 170px">
              <v-select
                dense
                clearable
                variant="solo"
                hide-details
                style="background-color: white"
                :items="['精神科', '内科']"
              />
            </div>
          </div>
          <div class="ml-5 mt-5">
            <p class="text-left">併科受診</p>
            <div class="mt-3" style="width: 170px">
              <v-select
                dense
                clearable
                variant="solo"
                hide-details
                style="background-color: white"
                :items="['有', '無']"
              />
            </div>
          </div>
          <div class="ml-5 mt-5">
            <p class="text-left">初/再</p>
            <div class="mt-3" style="width: 170px">
              <v-select
                dense
                clearable
                variant="solo"
                hide-details
                style="background-color: white"
                :items="['初診', '初診']"
              />
            </div>
          </div>
          <div class="ml-5 mt-5">
            <p class="text-left">診察形態特殊</p>
            <div class="mt-3" style="width: 170px">
              <v-select
                dense
                clearable
                variant="solo"
                hide-details
                style="background-color: white"
                :items="['データはありません']"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

  <style lang="scss" scoped>
.search-fields {
  p {
    font-size: 14px;
    font-weight: bold;
  }
}
</style>