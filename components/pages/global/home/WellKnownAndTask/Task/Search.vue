<template>
    <div class="task-search-row">
        <!-- calender -->
        <div class="d-flex align-center calendar">
          <!-- lấy date picker từ General-> Form -> DatePicker ra cũng không hiẻn thị, tại sao??? -->
          <div style="width: 150px">
            <datepicker
              placeholder="年/月/日"
            />
          </div>
          <span class="mt-3">~</span>
          <div style="width: 150px">
              <datepicker
                  placeholder="年/月/日"
              />
          </div>


        </div>
        <!-- select-box  -->
        <div class="d-flex align-center mt-3" style="width: 120px">
          <v-select 
            dense 
            clearable 
            variant="solo" 
            hide-details
            style="background-color: white" 
            placeholder="病棟" 
            :items="['Vue.js', 'React', 'Angular', 'Buzz']"
          />
          </div>
        <div class="d-flex align-center mt-3" style="width: 120px">
          <v-select 
            dense 
            clearable 
            variant="solo" 
            hide-details
            style="background-color: white" 
            placeholder="分類" 
            :items="['Vue.js', 'React', 'Angular', 'Buzz']"
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
          color="#1ea0dc" 
          class="bt-basic h-middle" 
          style="width: 70px"
          rounded
        >
          検索
        </v-btn>
    </div>
</template>

<script setup lang="ts">
  import Datepicker from '@/components/General/Form/DatePicker.vue';
</script>

<style lang="scss" scoped>
.calendar {
  flex-wrap: wrap;
  gap: 12px;

  :deep(.v-input__slot, .v-input__control ) {
    height: 28px !important;
  }

  :deep(.date .v-input__control .v-input__append-inner) {
    margin-top: 1px;
      padding-right: 4px !important;
  }

  :deep( .v-text-field.v-input--dense:not(.v-text-field--outlined) input ) {
    padding: 3px 0;
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
    :deep {
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