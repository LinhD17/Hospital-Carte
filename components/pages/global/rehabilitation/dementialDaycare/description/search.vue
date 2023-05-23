<script setup lang="ts">
</script>

<template>
    <div class="search-fields">
        <div class="search-fields_button">
            <div class="ml-5 mt-3" style="display:flex">
                <p class="mt-2">記載日</p>
                <div class="ml-3" style="width: 140px">
                    <!-- <DatePicker :value.sync="date"/> -->
                </div>
            </div>
            <div class="mt-3 mr-7">
                <v-menu offset-y :close-on-content-click="false">
                    <template #activator="{ on, attrs }">
                        <v-btn
                            outlined
                            color="primary" 
                            dense
                            v-bind="attrs"
                            v-on="on"
                        >
                            一括記載
                        </v-btn>
                    </template>
                    <!-- vấn đề hiện tại là chưa hiện ra popup cho ngươi dùng đăng ký đồng nhất trong 1 lượt -->
                    <PagesGlobalRehabilitationDementialdayCareDescriptionInputPopup />
                </v-menu>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.search-fields {
    padding: 0;
    p {
        font-weight: bold;
    }
}
.search-fields_button {
    display: flex;
    justify-content: space-between;
}
</style>