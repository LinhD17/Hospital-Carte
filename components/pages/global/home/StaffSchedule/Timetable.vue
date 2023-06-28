<template>
    <div class="ma-3" style="height: 100%;">
        <div class="calender-block" style="height: 90%;">
            <div class="calendar-header">
                <div class="calendar-title">
                    <h2 class="hdg">
                        <template v-if="calData.data.type === 'category'">
                            <span>
                                {{ moment(calData.data.value).format('YYYY年MM月DD日') }}
                            </span>
                        </template>
                        <template v-else>
                            <span>
                                {{ moment(calData.data.value).format('YYYY年MM月') }}
                            </span>
                        </template>
                    </h2>
                    <div class="ml-5">
                        <v-btn
                            xsmall
                            icon
                            class="mb-1 mr-1"
                            variant="outlined"
                            color="primary"
                            style="height: 34px; width: 34px"
                            @click="beforeCalendar()"
                        >
                            <v-icon>mdi-chevron-left</v-icon>
                        </v-btn>
                        <v-btn
                            xsmall
                            class="mb-1 mr-1"
                            variant="outlined"
                            color="primary"
                            rounded
                            @click="resetCalendar()"
                        >
                            <template v-if="calData.data.type === 'month'">今月</template>
                            <template v-if="calData.data.type === 'week'">今週</template>
                            <template v-if="calData.data.type === 'category'">今日</template>
                        </v-btn>
                        <v-btn
                            small
                            icon
                            class="mb-1"
                            variant="outlined"
                            color="primary"
                            style="height: 34px; width: 34px"
                            @click="nextCalendar()"
                        >
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-btn>
                    </div>
                </div>
                <div class="switch-calendar">
                    <div class="mr-2" style="width: 200px">
                        <v-select
                            dense 
                            clearable 
                            variant="solo" 
                            hide-details
                            style="background-color: white" 
                            placeholder="職員を選択" 
                            :items="['医師　太郎', '医師　次郎', '医師　花子', '看護師　太郎', '看護師　次郎', '看護師　花子', '保険指定医　太郎']"
                        />
                    </div>
                    <p
                        @click="switchCalendar('week')"
                        class="switch-calendar-button switch-calendar-button--week"
                        :class="calData.data.type === 'week' ? 'is-active' : ''"
                    >週
                    </p>
                    <p
                        @click="switchCalendar('month')"
                        class="switch-calendar-button switch-calendar-button--month"
                        :class="calData.data.type === 'month' ? 'is-active' : ''"
                    >
                    月</p>
                    <p
                        @click="switchCalendar('category')"
                        class="switch-calendar-button switch-calendar-button--category"
                        :class="calData.data.type === 'category' ? 'is-active' : ''"
                    >
                    日</p>
                </div>
            </div>
            <template v-if="calData.data.type === 'week'"> 
                <detail-week /> 
            </template>
            <template v-if="calData.data.type === 'month'"> 
                <detail-month /> 
            </template>
            <template v-if="calData.data.type === 'category'"> 
                <detail-day />
            </template>

            <!-- <v-calendar
                ref="calendar"
            >
            </v-calendar> -->
        </div>
        
        <!-- modal -->
        <DetailModal :dialog-state="detailModal"/> 
        <RegistrationModal :dialog-state="registrationModal"/> 
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import moment from 'moment';
import { useDialog } from '~/hooks/general/useDialog.ts'
import RegistrationModal from './Modal/RegistrationModal.vue';
import DetailModal from './Modal/DetailModal.vue';
import DetailWeek from './Detail/Week.vue'
import DetailMonth from './Detail/Month.vue'
import DetailDay from './Detail/Day.vue'

export default defineComponent({
    components: { 
        RegistrationModal,
        DetailModal, 
        DetailDay, 
        DetailMonth, 
        DetailWeek,
    }, 
    
    setup() {
        const detailModal = useDialog()
        const registrationModal = useDialog()
        const calData = reactive({
            data: {
                type: "week",
                mode: "column",
                value: moment().format('YYYY-MM-DD'),
                events: [] as any,
                color: "primary"
            },
            weekdays: [1, 2, 3, 4, 5, 6, 0],
            categories: [
                "医師太郎",
                "看護師花子",
                "会議室A",
                "会議室B",
                "会議室C",
                "会議室D",
            ],
        });

        const switchCalendar = (type: string) => {
            calData.data.type = type;
        }
        const resetCalendar = () => {
            calData.data.value = moment().format('YYYY-MM-DD')
        }
        const beforeCalendar = () => {
            if (calData.data.type === 'month') {
                calData.data.value = moment(calData.data.value).subtract(1,'month').format('YYYY-MM-DD')
            }else if (calData.data.type === 'week') {
                calData.data.value = moment(calData.data.value).subtract(1, 'week').format('YYYY-MM-DD')
            }else {
                calData.data.value = moment(calData.data.value).subtract(1, 'day').format('YYYY-MM-DD')
            }
        }

        const nextCalendar = () => {
            if(calData.data.type === 'month') {
                calData.data.value = moment(calData.data.value).add(1,'month').format('YYYY-MM-DD')
            }else if (calData.data.type === 'week') {
                calData.data.value = moment(calData.data.value).add(1, 'week').format('YYYY-MM-DD')
            }else {
                calData.data.value = moment(calData.data.value).add(1,'day').format('YYYY-MM-DD')
            }
        }
        return {
            calData,
            moment,
            switchCalendar,
            resetCalendar,
            beforeCalendar,
            nextCalendar,
            // detailDay,
            // detailMonth,
            // detailWeek,
            detailModal, 
            registrationModal, 

        };
    },

})

</script>

<style lang="scss" scoped>
.calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.calendar-title {
  display: flex;
  align-items: center;
  span {
    position: relative;
    padding-left: 10px;
    font-size: 18px;
    &:before {
      content: '';
      width: 4px;
      height: 18px;
      position: absolute;
      top: 50%;
      left: 0;
      background-color: #1ea0dc;
      transform: translate(0, -50%);
    }
  }
}
.calendar-block {
    width: 100%;
}
.switch-calendar {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.switch-calendar-button {
  margin-bottom: 0;
  padding: 5px 20px;
  border: 1px solid #1ea0dc;
  font-weight: bold;
  color: #1ea0dc;
  cursor: pointer;
  &.is-active {
    background-color: #1ea0dc;
    color: #ffffff;
  }
  &--week {
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }
  &--month {
    border-left: none;
  }
  &--category {
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    border-left: none;
  }
}
</style>
