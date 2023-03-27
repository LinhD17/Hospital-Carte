<template>
  <div class="flex-row date-hour-minute">
    <div>
      <date-picker
        v-model="valuesForm.date"
        :placeholder="placeholder"
        :clearable="clearable"
        :min="min"
        :style="`width: ${widthDatePicker}px; height: ${height}px`"
      ></date-picker>
    </div>
    <div style="padding-left: 25px">
      <v-select
        v-model="valuesForm.hour"
        dense
        hide-details
        :items="hours"
        :style="`width: ${widthTimePicker}px; height: ${heightTimePicker}px`"
        outlined
      ></v-select>
    </div>
    <div style="padding: 0 20px">:</div>
    <div>
      <v-select
        v-model="valuesForm.minute"
        dense
        hide-details
        :items="minutes"
        :style="`width: ${widthTimePicker}px; height: ${heightTimePicker}px`"
        outlined
      ></v-select>
    </div>
  </div>
</template>

<script lang="ts">
import DatePicker from './DatePicker.vue'

export default {
  components: {
    DatePicker,
  },
  data() {
    return {
      valuesForm: {
        date: '',
        hour: '',
        minute: '',
      },
      hours: Array.from({ length: 24 }, (_, i) => `${i < 10 ? '0' : ''}${i}`),
      minutes: Array.from({ length: 60 }, (_, i) => `${i < 10 ? '0' : ''}${i}`),
      clearable: true,
      min: new Date(),
      height: 50,
      widthDatePicker: 300,
      widthTimePicker: 80,
      heightTimePicker: 50,
    }
  },
}
</script>

<style scoped>
.date-hour-minute {
  align-items: center;
  display: flex;
}
</style>
