<!-- phan search, phia ben tren bang -->
<template>
    <div class="container">
        <div class="form-field">
            <!-- o lua chon  -->
            <selector-voucher-1 
                placeholder="全て"
                class="mr-3 ml-3"
                :width="130"
            />
            <!--  xac nhan -->
            <v-checkbox 
                dense
                label="確認済み表示"
                hide-details
                class="mt-2 ml-5"
            />
        </div>
        <!-- button -->
        <v-btn
            color="primary"
            dense
            class="bt-basic h-middle mt-4 mr-3"
        >報告一覧
        </v-btn>
    </div>
</template>

<script>
import { defineComponent, } from '@nuxtjs/composition-api'
import SelectorVoucher1 from '~/components/global/general/selector/SelectorVoucher1.vue'
export default defineComponent({
  components: { SelectorVoucher1 },
    setup() {

    }
})
</script>

<style lang="scss" scoped>
.container {
    height: 50px;
    display: flex;
    flex-wrap: nowrap;
    padding: 0;
    justify-content: space-between;
}
.form-field {
    display: flex;
    align-items: center;
}
</style>