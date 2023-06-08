<template>
    <v-tooltip bottom max-width="680" dark>
        <template>
            <v-chip
                small
                variant="outlined"
                height="22"
                style="background-color: #1ea0dc; color: white;"
                >詳細</v-chip
            >
        </template>
            <!-- 内容 -->
        <!-- <template v-if="scheduledDate && scheduledDate.length">
            <span v-text="'実施予定日：'" />
            <template v-for="(schedule, index) in scheduledDate">
                <span v-if="index > 0" v-text="'/'" class="mx-1" />
                <span v-text="momentFormat(schedule, FORMAT.FORMAT_DATE_JP)" />
            </template>
        </template> -->
    </v-tooltip>
</template>