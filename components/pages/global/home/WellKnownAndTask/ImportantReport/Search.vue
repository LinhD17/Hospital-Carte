<template>
    <div class="container">
        <div class="form-field">
            <!-- v-select: not run  -->
            <div class="mb-3" style="width: 130px">
                <v-select
                    dense
                    clearable
                    hide-details
                    placeholder="全て"
                    :items="['Vue.js', 'React', 'Angular', 'Buzz']"
                />
            </div>
            <v-checkbox 
                dense
                label="確認済み表示"
                hide-details
                class="mb-3"
            />
        </div>
        <!-- button -->
        <v-btn
            color="primary"
            dense
            class="bt-basic h-middle"
        >報告一覧
        </v-btn>
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