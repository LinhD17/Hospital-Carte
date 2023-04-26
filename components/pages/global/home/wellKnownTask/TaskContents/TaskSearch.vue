<template>
    <div class="task-search-row">
        <!-- calender -->
        <div class="d-flex align-center calendar">
            <date-picker 
                :width="100"
                place-holder=""
            />
            <span class="mt-3">~</span>
            <date-picker 
                :width="100"
                placeholder=""
            />
        </div>
        <!-- select-box  -->
        <div class="d-flex align-center mt-3">
            <v-select 
            placeholder="病棟"
            outlined
            dense
            hide-details
            height="28"
            style="width: 100px"
            :items="['Foo', 'Bar', 'Fizz', 'Buzz']"
            />
        </div>
        <div class="d-flex align-center mt-3">
            <v-select 
                placeholder="分類"
                outlined
                dense
                hide-details
                height="28"
                style="width: 100px"
                :items="['Foo', 'Bar', 'Fizz', 'Buzz']"
            />
        </div>
        <!-- check-box -->
        <div class="check-box">
            <v-checkbox 
                dense
                hide-details
                label="完了済表示"
                class="mt-2"
            />
        </div>
        <!-- button -->
        <v-btn 
            color="primary" 
            class="bt-basic h-middle" 
            style="width: 90px"
        >
            検索
        </v-btn>
    </div>

</template>

<script>
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import moment from 'moment'
import DatePicker from '~/components/general/form/DatePicker.vue'

export default defineComponent({
  components: { 
    DatePicker,
},
setup() {
    const formData = reactive({
        date: moment().format('YYYY-MM-DD'),
    })
    return {
        formData,
    }
}

})
</script>

<style lang="scss" scoped>
.calendar {
    flex-wrap: wrap;
    gap: 12px;

    ::v-deep {
        .v-input__slot,
        .v-input__control {
        height: 28px !important;
        }

        .date .v-input__control .v-input__append-inner {
        margin-top: 1px;
        padding-right: 4px !important;
        }

        .v-text-field.v-input--dense:not(.v-text-field--outlined) input {
        padding: 3px 0;
        }
    }
}
.task-search-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;

    & + & {
        margin-top: 12px;
    }

}
.check-box {
    ::v-deep {
    .v-messages {
      display: none;
    }

    .v-input {
      margin-top: 0;
      padding-top: 0;
    }

    .v-input__slot {
      margin-bottom: 0;
    }

    .v-input--selection-controls__ripple {
      margin: 0 7px;
    }
  }
}
</style>