<template>
  <div
    :width="modalWidth"
    :style="{maxHeight: modalHeight + 'vh'}"
  >
    <v-card>
      <!-- header -->
      <v-card-title class="d-flex">
        <div class="modal-title">
          <div class="d-flex align-center">
            <h3>{{  modalTitle }}</h3>
            <slot name="header" />
          </div>
          <div>
            <slot name="header_center" />
          </div>
          <div>
            <v-btn icon @click="dialog = false" class="btn-close" color="#51565b">
              <v-icon small style="color: white">mdi-close</v-icon>
            </v-btn>
          </div>
        </div>
      </v-card-title>

      <!-- content -->
      <v-card-text
        class="modal-content"
        :style="{ minHeight: `calc(${modalHeight}vh - 144px)` }"
      >
        <slot/>
      </v-card-text>

      <!-- footer -->
      <div 
        class="modal-action"
        :class="`justify-${modalPosition}`"
      >
        <div 
          v-for="(item, index) in modalButton"
          :key="index"
          class="mr-2 modal-button"
        >
          <v-btn
            :outlined="item.outlined"
            class="bt-basic h-middle"
            :color="item.color"
            rounded 
            small 
            style="background-color: #1ea0dc; color: #ffffff"
          >
            {{ item.title }}
          </v-btn>
        </div>
      </div>
    </v-card>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';
import Datepicker from '@/components/General/Form/DatePicker1.vue'
import Timepicker from '~/components/General/Form/TimePicker.vue';

type VariableButton = {
  title: string
  color: string
  methods: string
  outlined?: boolean
  disabled?: boolean
}

export default defineComponent({
  components: {
    Datepicker,
    Timepicker,
  },
  props: {
    modalWidth: String,
    modalHeight: String,
    modalTitle: String,
    modalPosition: String,
    modalButton: Array as PropType<VariableButton[]>,
    modalActive: String, 

  },
  setup(props) {
    const styleHeight = computed(() => {
      return `calc(${props.modalHeight}vh - 144px)`
    })

    return {
      styleHeight,
    }
  },
})
</script>

<style lang="scss" scoped>
.btn-close {
  display: block;
  width: 24px;
  height: 24px;
  margin-left: 20px;
  margin-bottom: 3px;
  padding: 0;
}
.modal-title {
  display: flex;
  align-items: center;
  justify-content: space-between !important;
  position: relative;
  top: 0;
  background-color: #fff;
  z-index: 100;
  h3 {
    //color: var(--primary, 'base');
    color: #1ea0dc;
    font-size: 16px !important;
    font-weight: normal !important;
    margin-left: 10px;
  }
}
.modal-content {
  padding: 0px;
}
.modal-action {
  display: flex;
  padding: 10px 20px;
  background-color: #ffffff;
  position: sticky;
  bottom: -1px;
  background-color: #fff;
  z-index: 100;
}
.modal-button {
  display: flex;
  justify-content: center !important;
}
</style>
