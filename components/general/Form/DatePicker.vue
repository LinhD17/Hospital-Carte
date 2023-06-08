<template>
  <v-menu
    v-model="state.menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
  >
    <template v-slot:activator="{ on, attrs }"> 
      <v-text-field 
        v-model="dateShow"
        v-on="on"
        v-bind="attrs"
        dense
        readonly
        variant="solo"
        append-icon="mdi-calendar"
        clear-icon="mdi-close-circle"
        :class="['date-picker', state.date && 'has-date']"
        :placeholder="placeholder"
        :rules="rules"
        :hide-details="rules.length === 0 || hideDetails"
        :disabled="disabled"
        :clearable="clearable"
        :height="height"
        @click:clear="clearMessage"
      />
    </template>
    <Datepicker 
      v-model="state.date"
      no-title
      scrollable
      :disabled="disabled"
      :min="min"
      :max="max"
      :day-format="dayFormat"
      :first-day-of-week="0"
      @input="state.menu = false"

    />
  </v-menu>
</template>
  
<script lang="ts">
  import { ref, defineComponent, computed, watch } from 'vue';
  import { momentFormat, FORMAT } from '~/hooks/Methods/moments';

  // const dayFormat = args => {
  //   return `${args.getFullYear()}年${args.getMonth() + 1}月${args.getDate()}日`
  // }

  // const props = defineProps({
  //   min: {
  //     type: String,
  //     default: null,
  //   },
  //   max: {
  //     type: String,
  //     default: null,
  //   },
  //   placeholder: {
  //     type: String,
  //     default: '年/月/日',
  //   },
  //   value: {
  //     type: String,
  //     required: false,
  //     default: null,
  //   },
  //   disabled: {
  //     type: Boolean,
  //     default: false,
  //   },
  //   rules: {
  //     type: Array,
  //     default: () => [],
  //   },
  //   hideDetails: {
  //     type: Boolean,
  //     default: false,
  //   },
  //   height: {
  //     type: String,
  //     default: 'auto',
  //   },
  //   clearable: {
  //     type: Boolean,
  //     default: true,
  //   },
  // })
  // const state = ref({
  //   date: '',
  //   menu: false,
  // })

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
      default: '年/月/日',
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
    rules: {
      type: Array,
      default: () => [],
    },
    hideDetails: {
      type: Boolean,
      default: false,
    },
    height: {
      type: String,
      default: 'auto',
    },
    clearable: {
      type: Boolean,
      default: true,
    },
  },

  setup(props, { emit }) {
    const state = ref({
      date: '',
      menu: false,
    })
    
    const dateShow = computed(() =>
      state.value.date
        ? momentFormat(state.value.date, FORMAT.FORMAT_DATE_JP)
        : null
    )

    const dayFormat = (date: string) => {
      return new Date(date).getDate()
    }

    const clearMessage = () => {
      state.value.date = ''
    }

    watch(
      () => state.value.date,
      (val) => {
        emit('update:value', val)
      }
    )

    watch(
      () => props.value,
      (val) => {
        state.value.date = val
      },
      { immediate: true }
    )

    return {
      state,
      dateShow,
      dayFormat, 
      clearMessage,
    }
    
  }
})
</script>

<style lang="scss" scoped>
//have to fix css for Datepicker
.Datepicker {
  width: 250px;
  background-color: #fff;
  border-radius: 6px;

  &:deep(&.has-date:hover) {
    .v-input__icon--clear {
      display: block;
    }
    .v-input__icon--append {
      display: none;
    }
  }

  &:deep(.mdi-calendar::before) {
    color: #1ea0dc;
  }

  &:deep(.v-input__icon--clear) {
    display: none;
    margin-right: 10px;
  }

  &:deep(.v-input__append-inner) {
    display: flex;
    height: 100%;
    align-items: center;
  }

  &.error--text {
    :deep(.v-input__slot) {
      border-color: #ff5252 !important;
    }
  }
}

.v-picker {
  &:deep(td:nth-child(6) .v-btn__content) {
    color: blue;
  }
  &:deep(td:nth-child(7) .v-btn__content) {
    color: red;
  }
}
</style>