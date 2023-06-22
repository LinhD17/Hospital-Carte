<template>
    <div class="search-fields">
        <div class="search-fields_button">
            <div class="ml-5 mt-3" style="display:flex">
                <p class="mt-4">記載日</p>
                <div class="ml-3" style="width: 174px">
                    <Datepicker :value.sync="date"/>
                </div>
            </div>
            <div>
                <v-menu offset-y :close-on-content-click="false">
                    <template #activator="{ on, attrs }">
                        <v-btn
                            dense
                            class="mt-7 ml-10"
                            rounded
                            style="background-color: #1ea0dc; color: #ffffff"
                        >
                            検索
                        </v-btn>
                    </template>
                    <!-- vấn đề hiện tại là chưa hiện ra popup cho ngươi dùng đăng ký đồng nhất trong 1 lượt -->
                    <PagesGlobalRehabilitationDementialdayCareDescriptionInputPopup />
                </v-menu>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Datepicker from '~/components/General/Form/DatePicker1.vue';
</script>

<style lang="scss" scoped>
.search-fields {
    padding: 0;
    p {
        font-weight: bold;
    }
}
.search-fields_button {
    display: flex;
    
}
</style>