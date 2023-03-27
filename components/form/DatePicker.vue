<template>
  <v-menu
    transition="scale-transition"
    offset-y
    :close-on-content-click="false"
    min-width="auto"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="computedDateFormatted"
        persistent-hint
        append-icon="mdi-calendar"
        readonly
        :class="['date-picker', date && 'has-date']"
        :placeholder="placeaholder"
        v-on="on"
        dense
        clear-icon="mdi-close-circle"
        :height="height"    
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="date"
      no-title
      scrollable
      :min="min"
      :max="max"
      label="Select a date"
      :first-day-of-week="1"
      @input="menu = false"
    ></v-date-picker>
  </v-menu>
</template>

<script>
import { defineComponent,} from "vue"

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
    height: {
      type: String,
      default: 'auto',
    },
  },
  data: (vm) => ({
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu: false,
  }),

  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date)
    },
  },

  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date)
    },
  },

  methods: {
    formatDate(date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${year}/${month}/${day}`
    },
    parseDate(date) {
      if (!date) return null

      const [year, month, day] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
  },
})
</script>

<style lang="scss" scoped>
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
}
</style>


