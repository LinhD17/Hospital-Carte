<template>
    <div class="search-form">
        <div class="d-flex justify-space-between flex-grow-1">
            <div class="search-form__item">
                <div style="width: 186px;" class="date-picker ml-3 mt-3">
                    <datepicker
                        placeholder="--日"
                        dense
                        :value.sync="date" 
                    />
                </div>
                <v-btn
                    xsmall
                    icon
                    variant="outlined"
                    class="search-form__btn-round ml-2"
                    color="primary"
                    :disabled="!date"
                    style="height: 28px; width: 28px"
                    @click="handleSubtractDate"
                >
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <v-btn
                    rounded
                    variant="outlined"
                    color="primary"
                    class="search-form__btn ml-1"
                    @click="handleGetToday"
                >
                    今日
                </v-btn>
                <v-btn
                    x-small
                    icon
                    class="search-form__btn-round ml-1"
                    variant="outlined"
                    color="primary"
                    :disabled="!date"
                    style="height: 28px; width: 28px"
                    @click="handleAddDate"
                >
                    <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
            </div>
            <div class="d-flex">
                <div class="search-form__item mt-2">
                    <p class="search-form__item--label">当直医：</p>
                    <v-text-field
                        v-if="isEditDoctor"
                        v-model="doctor"
                        dense
                        variant="solo"
                        placeholder="テキストを入力"
                        style="background-color: white; width: 150px"
                        class="mt-4"
                    />
                    <p v-else class="mb-0">{{  doctor  }}</p>
                    <v-btn
                        elevation="0"
                        icon
                        x-small
                        class="search-form__item--btn-edit"
                        @click="handleEditDoctor"
                    > 
                        <img src="@/assets/icon/edit.svg" alt="" />
                    </v-btn>
                </div>
                <div class="search-form__item ml-8 mt-2">
                    <p class="search-form__item--label">看護師長：</p>
                    <v-text-field
                        v-if="isEditNurse"
                        v-model="headNurse"
                        dense
                        variant="solo"
                        placeholder="テキストを入力"
                        style="background-color: white; width: 150px"
                        class="mt-4"
                    /> 
                    <p v-else class="mb-0">{{  headNurse  }}</p>
                    <v-btn
                        elevation="0"
                        icon
                        x-small
                        class="search-form__item--btn-edit"
                        @click="handleEditNurse"
                    >
                        <img src="@/assets/icon/edit.svg" alt="" />
                    </v-btn>
                    <v-btn 
                        rounded
                        variant="outlined"
                        color="primary" 
                        class="search-form__btn mr-3"
                    >印刷</v-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { ref, defineComponent } from 'vue'
    import moment from 'moment';
    import Datepicker from '~/components/General/Form/DatePicker1.vue';
    export default defineComponent({
        components: {
            Datepicker, 
        },
        setup() {
            const date = ref(moment().format('YYYY-MM-DD'))
            const doctor = ref<String>('医師太郎')
            const headNurse = ref<String>('医師花子')
            const isEditDoctor = ref<Boolean>(false)
            const isEditNurse = ref<Boolean>(false)
            const handleSubtractDate = () => {
                date.value = moment(date.value).subtract(1, 'days').format('YYYY-MM-DD')
            }
            const handleGetToday = () => {
                date.value = moment().format('YYYY-MM-DD')
            }
            const handleAddDate = () => {
                date.value = moment(date.value).add(1, 'days').format('YYYY-MM-DD')
            }
            const handleEditDoctor = () => {
                isEditDoctor.value = !isEditDoctor.value
            }
            const handleEditNurse= () => {
                isEditNurse.value = !isEditNurse.value
            }
            return {
                handleSubtractDate, 
                handleGetToday, 
                handleAddDate,
                date,
                doctor, 
                headNurse,
                isEditDoctor, 
                handleEditDoctor,
                isEditNurse, 
                handleEditNurse,

            }

        }
    })
</script>

<style lang="scss" scoped>
.search-form {
  display: flex;
  flex-direction: row;

    &__item {
        display: flex;
        align-items: center;

        &--label {
        white-space: nowrap;
        margin-right: 8px;
        margin-bottom: 0;
        }

        &--btn-edit {
            margin-left: 4px;
            border-color: #fff;
            background-color: inherit !important;
            color: #fff;
        }
    }
    
    &__item :deep(.v-input) {
        background-color: #fff;
    }

    &__item &--btn-edit :deep(.v-btn__content) {
        color: #7c7c7c !important;
    }

    &__btn-round {
        font-size: inherit;
        width: 28px;
        height: 28px;

        &:hover.v-btn--outlined.primary--text {
        background: #fff !important;
        color: #1ea0dc !important;
        }
    }

    &__btn {
        min-width: 78px !important;
        height: 28px !important;
        font-size: 10px;
    }

 
    .date-picker :deep(.v-input__icon) {
        height: 35px;
    }
    .date-picker :deep(&:hover) .v-input__icon--clear {
        display: inline-flex !important;
    }
    .date-picker :deep(.v-input) {
        border-radius: 8px;
    }
    .date-picker :deep(.v-input) input{
        max-height: 35px;
    }
    .date-picker :deep(.v-text-field.v-input--dense:not(.v-text-field--outlined))  input{
        padding: 16px 0 16px;
    }
}
</style>