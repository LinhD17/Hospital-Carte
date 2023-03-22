<template>
    <div class="task-search-row">
        <!-- calender -->
        <div class="d-flex align-center calendar">
            <div class="d-flex align-center" style="width: 113px">

            </div>
            <span>~</span>
            <div class="d-flex align-center" style="width: 113px">
                
            </div>
        </div>
        <!-- select-box  -->
        <div class="d-flex align-center">
            <v-select 
            placeholder="病棟"
            dense
            hide-details
            height="28"
            style="width: 100px"
            />
        </div>
        <div class="d-flex align-center">
            <v-select 
                placeholder="分類"
                dense
                hide-details
                height="28"
                style="width: 100px"
            />
        </div>
        <!-- check-box -->
        <div class="check-box">

        </div>
        <!-- button -->
        <v-btn color="primary" class="bt-basic h-middle">検索</v-btn>
    </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.task-search-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;

    & + & {
        margin-top: 12px;
    }

}
</style>