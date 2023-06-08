<template>
    <div class="calendar">
      <div class="hour">
        <v-select
          v-model="state.hour"
          dense
          hide-details
          :items="hours"
          :height="heightDatePicker"
          :background-color="backgroundColor"
          :disabled="disabled"
          :style="`width:${clearable ? '70px' : '60px'}`"
          placeholder="--"
          @change="$emit('change')"
        />
        <p>:</p>
        <v-select
          v-model="state.min"
          dense
          hide-details
          :items="minutes"
          :height="heightDatePicker"
          :background-color="backgroundColor"
          :disabled="disabled"
          :style="`width:${clearable ? '70px' : '60px'}`"
          placeholder="--"
          @change="$emit('change')"
        />
      </div>
    </div>
  </template>
  
<script setup>
    import { cloneDeep } from 'lodash'
    const props = defineProps({
        hour: {
            type: Number,
            default: 0,
        },
        min: {
            type: Number,
            default: 0,
        },
        heightDatePicker: {
            type: String,
            default: '22px',
        },
        backgroundColor: {
            type: String,
            default: 'white',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        clearable: {
            type: Boolean,
            default: false,
        },
    })

    const hours = [
      '01:',
      '02:',
      '03:',
      '04:',
      '05:',
      '06:',
      '07:',
      '08:',
      '09:',
      '10:',
      '11:',
      '12:',
      '13:',
      '14:',
      '15:',
      '16:',
      '17:',
      '18:',
      '19:',
      '20:',
      '21:',
      '22:',
      '23:',
      '24:',
    ]

    const minutes = [
      '01:',
      '02:',
      '03:',
      '04:',
      '05:',
      '06:',
      '07:',
      '08:',
      '09:',
      '10:',
      '11:',
      '12:',
      '13:',
      '14:',
      '15:',
      '16:',
      '17:',
      '18:',
      '19:',
      '20:',
      '21:',
      '22:',
      '23:',
      '24:',
      '25:',
      '26:',
      '27:',
      '28:',
      '29:',
      '30:',
      '31:',
      '32:',
      '33:',
      '34:',
      '35:',
      '36:',
      '37:',
      '38:',
      '39:',
      '40:',
      '41:',
      '42:',
      '43:',
      '44:',
      '45:',
      '46:',
      '47:',
      '48:',
      '49:',
      '50:',
      '51:',
      '52:',
      '53:',
      '54:',
      '55:',
      '56:',
      '57:',
      '58:',
      '59:',
      '60:',
    ]
    const state = ref({
        hour: cloneDeep(props.hour),
        min: cloneDeep(props.min),
    })

    watch(
        () => state.value.hour,
        (val) => {
        emit('update:hour', val)
        }
    )

    watch(
        () => state.value.min,
        (val) => {
        emit('update:min', val)
        }
    )

    watch(
        () => [props.hour, props.min],
        () => {
        state.value.hour = cloneDeep(props.hour)
        state.value.min = cloneDeep(props.min)
        }
    )
</script>
  
<!-- <script lang="ts ">
import { defineComponent, ref, watch } from 'vue'
import { clobeDeep } from 'lodash'

export default defineComponent({
    props: {
        hour: {
            type: Number as () => number | null,
            default: 0,
        },
        min: {
            type: Number as () => number | null,
            default: 0,
        },
        heightDatePicker: {
            type: String,
            default: '22px',
        },
        backgroundColor: {
            type: String,
            default: 'white',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        clearable: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, { emit }) {
        const hours = [...Array(24).keys()].map((e) => ({
            text: e < 10 ? `0${e}` : `${e}`,
            value: e,
        }))
        const minutes = [...Array(60).keys()].map((e) => ({
            text: e < 10 ? `0${e}` : `${e}`,
            value: e,
        }))
        const state = ref({
            hour: cloneDeep(props.hour),
            min: cloneDeep(props.min),
        })

        watch(
            () => state.value.hour,
            (val) => {
                emit('update:hour', val)
            }
        )

        watch(
            () => state.value.min,
            (val) => {
                emit('update:min', val)
            }
        )

        watch(
            () => [props.hour, props.min],
            () => {
                state.value.hour = cloneDeep(props.hour)
                state.value.min = cloneDeep(props.min)
            }
        )

        return {
            state,
            hours,
            minutes,
        }
    },
})
</script> -->

<style lang="scss" scoped>
    .calendar {
        display: flex;
        align-items: baseline;
    
        .hour {
        display: flex;
        align-items: baseline;
    
        p {
            margin: 0 0.25rem;
            font-weight: bold;
        }
        }
    }
</style>
  