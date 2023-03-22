<template>
    <v-sheet>
        <!-- search -->
        <div class="root-header">
            <!-- title + plus buttom -->
            <div class="thread-title">
                <h1 class="title">掲示板</h1>
                <v-btn 
                    x-small
                    color="primary"
                    dark
                    fab
                    class="button-position"
                >
                <v-icon>mdi-plus</v-icon>

                </v-btn>
            </div>
            <!-- search-field  -->

        </div>

        <!-- table -->

    </v-sheet>
</template>
<script>
export default {

}
</script>

<style lang="scss" scoped>
.thread-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.title {
    font-size: 20px !important;
    font-weight: bold;
}
</style>