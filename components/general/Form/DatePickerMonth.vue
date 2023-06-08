<template>
    <v-menu
      v-model="menu"
      transition="scale-transition"
      offset-y
      min-width="auto"
      class="date-picker-month"
    >
      <template #activator="{ on, attrs }">
        <v-text-field
          v-model="dateShow"
          append-icon="mdi-calendar"
          dense
          readonly
          hide-details="auto"
          v-bind="attrs"
          :class="['date-picker', date && 'has-date']"
          :disabled="disabled"
          :placeholder="placeholder"
          :height="height"
          background-color="#FFFFFF"
          clear-icon="mdi-close-circle"
          clearable
          class="date-text-field"
          @click:clear="clearMessage"
          v-on="on"
        />
      </template>
      <v-date-picker
        v-model="date"
        type="month"
        :day-format="(date) => new Date(date).getDate()"
        :min="min"
        :max="max"
        no-title
        scrollable
        right
      >
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="closeMenu">設定</v-btn>
      </v-date-picker>
    </v-menu>
  </template>
  
  <script lang="ts">
  import { defineComponent, watch, ref, computed } from 'vue'
  import { dateFormatDatePickerMonth } from '@/hooks/Methods/functions'
  
  export default defineComponent({
    props: {
      min: {
        type: String,
        default: null,
      },
      max: {
        type: String,
        default: null,
      },
      placeholder: {
        type: String,
        default: '',
      },
      value: {
        type: String,
        required: false,
        default: null,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      height: {
        type: String,
        default: 'auto',
      },
    },
  
    setup(props, { emit }) {
      const date = ref()
      const menu = ref(false)
  
      const closeMenu = () => {
        menu.value = false
      }
  
      const clearMessage = () => {
        date.value = null
      }
  
      const dateShow = computed(() =>
        date.value ? dateFormatDatePickerMonth(date.value) : null
      )
  
      watch(
        () => date.value,
        (val) => {
          emit('update:value', val)
        }
      )
  
      watch(
        () => props.value,
        (val) => {
          date.value = val
        },
        { immediate: true }
      )
  
      return {
        date,
        menu,
        closeMenu,
        clearMessage,
        dateShow,
      }
    },
  })
  </script>
  
  <style lang="scss" scoped>
  .date-picker-month {
    min-width: 205px;
  }
  
  .date-text-field {
    ::v-deep {
      .v-input__append-inner {
        margin-top: auto;
        margin-bottom: auto;
      }
    }
  }
  .date-picker {
    width: 250px;
    background-color: #fff;
    border-radius: 6px;
  
    &::v-deep {
      &.has-date:hover {
        .v-input__icon--clear {
          display: block;
        }
  
        .v-input__icon--append {
          display: none;
        }
      }
  
      .mdi-calendar::before {
        color: #1ea0dc;
      }
  
      .v-input__icon--clear {
        display: none;
        margin-right: 10px;
      }
  
      .v-input__append-inner {
        display: flex;
        height: 100%;
        align-items: center;
      }
    }
  
    &.error--text {
      ::v-deep .v-input__slot {
        border-color: #ff5252 !important;
      }
    }
  }
  </style>
  