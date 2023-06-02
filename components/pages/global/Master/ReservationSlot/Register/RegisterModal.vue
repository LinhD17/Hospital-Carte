<template>
    <modal
        modal-width="800"
        modal-title="予約枠マスタ登録"
        modal-color="#F0F3F4"
        modal-position="center"
        :modal-active="isModalOpen"
        modal-key="reservationMasterKey"
        :modal-button="modalButton"
        @closeModal="closeModal"
        @submit="submit"
    >
        <div class="schedule-form">
            <div class="input-row">
                <p class="label">曜日：</p>
                <div class="input">
                    <div class="input-dayOfWeek">
                        <v-select
                            v-model="reservationSlotModel.dayOfWeek"
                            dense
                            hide-details
                            :items="dayOfWeek"
                            background-color="#ffffff"
                            style="width: 7.5em"
                        ></v-select>
                    </div>
                </div>
            </div>
            <div class="error-text mt-3">{{ errorMessages.dayOfWeek }}</div>
            <div class="input-row mt-3">
                <p class="label">時間帯：</p>
                <div class="input">
                    <div class="input-startHour">
                        <v-select
                            v-model="reservationSlotModel.startHour"
                            dense
                            hide-details
                            :items="hours"
                            background-color="#ffffff"
                            style="width: 7.5em"
                        ></v-select>
                    </div>
                    <span>:</span>
                    <div class="input-startMinute mr-0">
                        <v-select
                            v-model="reservationSlotModel.startMin"
                            dense
                            hide-details
                            :items="minutes"
                            background-color="#ffffff"
                            style="width: 7.5em"
                        ></v-select>
                    </div>
                    <span class="spacing">～</span>
                    <div class="input-endHour">
                        <v-select
                            v-model="reservationSlotModel.endHour"
                            dense
                            hide-details
                            :items="hours"
                            background-color="#ffffff"
                            style="width: 7.5em"
                        ></v-select>
                    </div>
                    <span>:</span>
                    <div class="input-endMinute">
                        <v-select
                            v-model="reservationSlotModel.endMin"
                            dense
                            hide-details
                            :items="minutes"
                            background-color="#ffffff"
                            style="width: 7.5em"
                        ></v-select>
                    </div>
                </div>
            </div>
            <div class="error-text mt-3">{{ errorMessages.startTime }}</div>
            <div class="error-text mt-3">{{ errorMessages.endTime }}</div>
            <div class="input-row mt-3">
                <p class="label">予約枠上限数：</p>
                <div class="input">
                    <div class="input-limit">
                        <v-text-field
                            v-model="reservationSlotModel.reservationLimit"
                            hide-details
                            type="number"
                            background-color="#ffffff"
                            placeholder="10"
                        ></v-text-field>
                    </div>
                </div>
            </div>
            <div class="error-text mt-3">{{ errorMessages.reservationLimit }}</div>
            <div class="input-row mt-3">
                <p class="label">有効期限：</p>
                <div class="input">
                    <div class="input-startDate">
                        <v-menu
                            ref="startMenu"
                            v-model="startMenu"
                            :close-on-content-click="false"
                            :return-value.sync="reservationSlotModel.validFrom"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                        >
                        <template #activator="{ on, attrs }">
                            <v-text-field
                                v-model="reservationSlotModel.validFrom"
                                dense
                                readonly
                                no
                                hide-details
                                background-color="white"
                                append-icon="mdi-calendar"
                                v-bind="attrs"
                                style="width: 10em"
                                v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker
                            v-model="reservationSlotModel.validFrom"
                            no-title
                            scrollable
                            :day-format="(date) => new Date(date).getDate()"
                            @input="$refs.startMenu.save(reservationSlotModel.validFrom)"
                        >
                            <v-spacer></v-spacer>
                        </v-date-picker>
                        </v-menu>
                    </div>
                    <span class="spacing">～</span>
                    <div v-if="!reservationSlotModel.noSetValidTo" class="input-endDate">
                        <v-menu
                            ref="endMenu"
                            v-model="endMenu"
                            :close-on-content-click="false"
                            :return-value.sync="reservationSlotModel.validTo"
                            :disabled="reservationSlotModel.noSetValidTo"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                        >
                        <template #activator="{ on, attrs }">
                            <v-text-field
                                v-model="reservationSlotModel.validTo"
                                dense
                                readonly
                                no
                                hide-details
                                background-color="white"
                                append-icon="mdi-calendar"
                                v-bind="attrs"
                                style="width: 10em"
                                v-on="on"
                                ></v-text-field>
                        </template>
                        <v-date-picker
                            v-model="reservationSlotModel.validTo"
                            no-title
                            scrollable
                            :day-format="(date) => new Date(date).getDate()"
                            @input="$refs.endMenu.save(reservationSlotModel.validTo)"
                        >
                            <v-spacer></v-spacer>
                        </v-date-picker>
                        </v-menu>
                    </div>
                    <div v-else style="width: 120px"></div>
                    <div class="input-pending">
                        <v-checkbox
                        v-model="reservationSlotModel.noSetValidTo"
                        label="有効終了日を設定しない"
                        hide-details
                        ></v-checkbox>
                    </div>
                </div>
            </div>
            <div class="error-text mt-3">{{ errorMessages.validFrom }}</div>
            <div class="error-text mt-3">{{ errorMessages.validTo }}</div>
        </div>
    </modal>
</template>
<script setup lang="ts">
    import Modal from '@/components/General/Modal.vue'
    //props
    const props = defineProps({
        dayOfWeek: {
            type: Array as PropType<CommonObject[]>, 
            required: true,
            default: [] as CommonObject[],
        },
        hours: {
            type: Array as PropType<CommonObject[]>,
            required: true,
            default: [] as CommonObject[],
        },
        minutes: {
            type: Array as PropType<CommonObject[]>,
            required: true,
            default: [] as CommonObject[],
        },
        isModalOpen: {
            type: Boolean,
            required: true,
        },
        modalModel: {
            type: Object as PropType<ReservationSlotEditModel>,
            required: true,
        },
        errorMessages: {
            type: Object as PropType<ReservationSlotErrorView>,
            required: true,
        },
    })

    //emits//emits
    const emits = defineEmits([
        onModalCloseButtonClick: (): void => {},
        onSubmitReservationSlot: (_model: ReservationSlotEditModel): void => {},
    ])

    const modalButton = [
        {
            title: '閉じる',
            color: '#B2B2B2',
            outlined: true,
            methods: 'closeModal',
        },
        {
            title: '保存',
            color: 'primary',
            methods: 'submit',
        },
    ]

    const closeModal = () => {
      emit('onModalCloseButtonClick')
    }
    const submit = () => {
      emit('onSubmitReservationSlot', reservationSlotModel.value)
    }
</script>

<style lang="scss" scoped>
.schedule-form {
  margin: 30px 0;
}
.input-row {
  display: flex;
  align-items: center;
  .label {
    width: 10em;
    margin-right: 10px;
    margin-bottom: 0;
    text-align: right;
  }
  .input {
    width: 100%;
    display: flex;
    align-items: center;
    & > * {
      margin-right: 10px;
    }
    .spacing {
      margin: 0 20px;
    }
    .input-pending {
      &::v-deep .v-input--checkbox {
        margin-top: 0;
      }
    }
    .input-dayOfWeek {
      display: flex;
      padding-bottom: 10px;
      &-checkbox {
        margin-right: 10px;
      }
    }
  }
}
.error-text {
  color: #ef5350;
  margin-left: 120px;
}
</style>

