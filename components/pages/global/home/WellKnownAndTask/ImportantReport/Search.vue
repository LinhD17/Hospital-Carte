<!-- phan search, phia ben tren bang -->
<script setup lang="ts">
import SelectorVoucher1 from '~/components/general/selector/SelectorVoucher1.vue'

// import { ref } from 'vue';

</script>

<template>
    <div class="container">
        <div class="form-field">
            <!-- o lua chon: v-select khong hoat dong  -->
            <general-selector-voucher1 
                outline
                placeholder="全て"
                class="mr-3 ml-3"
            />

            <!-- không hoạt động các selectbox, checkbox, cần tìm hiểu xem phải bổ sung gói dữ liệu gì -->
            <!-- <v-select
                label="Select"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
            ></v-select>
            <v-select
                outline
                placeholder="全て"
                class="mr-3 ml-3"
                :width="130"
            /> -->
            <!--  xac nhan -->

            <v-checkbox 
                dense
                label="確認済み表示"
                hide-details
                class="mb-3 ml-5"
            />

        </div>
        <!-- button -->
        <v-btn
            color="primary"
            dense
            class="bt-basic h-middle mt-3 mr-3"
        >報告一覧
        </v-btn>
        <!-- <VBtn>Vuetify のボタン</VBtn> -->
    </div>
</template>


<style lang="scss" scoped>
.container {
    height: 50px;
    display: flex;
    flex-wrap: nowrap;
    padding: 0 !important;
    margin: 0 !important;
    justify-content: space-between;
}
.form-field {
    display: flex;
    align-items: center;
}
</style>