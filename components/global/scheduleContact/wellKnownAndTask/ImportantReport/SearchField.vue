<!-- phan search, phia ben tren bang -->
<template>
    <v-form ref="form">
        <div class="container">
            <div class="form-field">
                <!-- o lua chon  -->
                <div class="mt-5 mb-5 ml-3">
                    <div style="width: 130px">
                        <v-select
                            placeholder="全て"
                            background-color="white"
                            :items="['Foo', 'Bar', 'Fizz', 'Buzz']"
                            :min-width="140"
                        >
                        </v-select>
                    </div>
                </div>
                <!--  xac nhan -->
                <v-checkbox 
                    dense
                    label="確認済み表示"
                    hide-details
                    class="mt-2 ml-5"
                >
                </v-checkbox>
            </div>
            <!-- button -->
            <v-btn
                color="primary"
                dense
                height="24px"
                class="bt-basic h-middle mt-4 mr-3"
            >報告一覧
            </v-btn>
        </div>
    </v-form>
</template>

<script>
export default {

}
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