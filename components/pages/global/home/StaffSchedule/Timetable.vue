<template>
    <div class="ma-3" style="height: 100%;">
        <div class="calender-block" style="height: 90%;">
            <div class="calendar-header">
                <div class="calendar-title">
                    <h2 class="hdg">
                        2023年06月
                    </h2>
                    <div class="ml-5">
                        <v-btn
                            small
                            icon
                            class="mb-1 mr-1"
                            variant="outlined"
                            color="primary"
                        >
                            <v-icon>mdi-chevron-left</v-icon>
                        </v-btn>
                        <v-btn
                            small
                            class="mb-1 mr-1"
                            variant="outlined"
                            color="primary"
                        >
                            今週
                            <!-- <template>今月</template>
                            <template>今週</template>
                            <template>今日</template> -->
                        </v-btn>
                        <v-btn
                            small
                            icon
                            class="mb-1"
                            variant="outlined"
                            color="primary"
                        >
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-btn>
                    </div>
                </div>
                <div class="switch-calendar">
                    <div style="width: 200px">
                        <v-select
                            dense
                        />
                    </div>
                    <p
                        class="switch-calendar-button switch-calendar-button--week"
                    >週
                    </p>
                    <p
                        class="switch-calendar-button switch-calendar-button--month"
                    >
                    月</p>
                    <p
                        class="switch-calendar-button switch-calendar-button--month"
                    >
                    日</p>


                </div>

            </div>
            <v-calendar>

            </v-calendar>
        </div>
    </div>
</template>

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
  border: 1px solid var(--primary, base);
  font-weight: bold;
  color: var(--primary, base);
  cursor: pointer;
  &.is-active {
    background-color: var(--primary, base);
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
