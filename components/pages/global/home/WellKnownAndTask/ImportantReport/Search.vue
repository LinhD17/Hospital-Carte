<template>
    <div class="container ">
        <div class="form-field mb-3">
            <div style="width: 160px">
                <v-select 
                dense 
                clearable 
                variant="solo" 
                hide-details
                style="background-color: white" 
                placeholder="グループを選択" 
                :items="['Vue.js', 'React', 'Angular', 'Buzz']"
                />
            </div>
            <v-checkbox 
                dense
                label="確認済み表示"
                hide-details
                class="mb-2"
            />
        </div>
        <!-- button -->
        <v-btn
            color="#1ea0dc"
            dense
            class="bt-basic h-middle"
            rounded
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