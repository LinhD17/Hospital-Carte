<template> 
   <div class="ma-3">
        <v-btn icon small color="primary" class="btn-add">
            <v-icon color="white">mdi-plus</v-icon>
        </v-btn>
        <div class="calendar-block">
            <div class="d-flex justify-center mb-1">
                <div>
                    <v-btn 
                        icon 
                        class="nav-btn mb-2"
                    >
                        <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>
                    <span class="calendar-title">2023年06月27日</span>
                    <v-btn
                        icon 
                        class="nav-btn mb-2"
                    >
                        <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                </div>
            </div>
            <v-calendar
                ref="calendar"
            >
                <div style="height: 250px; width: 330px; background-color: pink">
                    RESCHO
                </div>
            </v-calendar>
            <div class="status-list mt-7">
                <div class="d-flex mt-2">
                    <div class="status-list--box" style="background-color: #87cefa"></div>
                    <span>職員予定（診療外予定）</span>
                </div>
                <div class="d-flex mt-2">
                    <div class="status-list--box" style="background-color: #ff8c00"></div>
                    <span>カンファレンス</span>
                </div>
                <div class="d-flex mt-2">
                    <div class="status-list--box" style="background-color: #dc143c"></div>
                    <span>外来診察無し</span>
                </div>
                <div class="d-flex mt-2">
                    <div class="status-list--box" style="background-color: #ffd700"></div>
                    <span>診察枠</span>
                </div>
                <div class="d-flex mt-2">
                    <div class="status-list--box" style="background-color: #32cd32"></div>
                    <span>業務タスク</span>
                </div>
                <div class="d-flex mt-2">
                    <div class="status-list--box" style="background-color: #9400d3"></div>
                    <span>リハビリ・指導</span>
                </div>
            </div>

        </div>
   </div>
</template>

<style lang="scss" scoped>
    .btn-add {
        display: block;
        width: 26px;
        height: 26px;
        margin-left: 20px;
        margin-bottom: 3px;
        padding: 0;
        background-color: var(--waroku-yellow, 'base');
    }
    .calendar-block {
        width: 100%;
        .v-calendar {
            border: #e0e0e0 1px solid;
            border-right: none;
            border-bottom: none;
        }
        .nav-btn {
            height: 20px;
            width: 20px;
        }
    }
    .status-list {
        &--box {
            height: 20px;
            width: 20px;
            border-radius: 1px;
            margin-left: 10px;
        }
        span {
            margin-top: 3px;
            margin-left: 5px;
            font-weight: bold;
        }
    }
</style>
