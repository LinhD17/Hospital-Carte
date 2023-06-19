<template>
    <v-dialog
        v-modal="modalActive"
        :width="modalWidth"
        @click:outside="$emit('closeModal')"
        @keydown.esc="$emit('closeModal')"
    >
        <div 
            :class="['hoge', className]"
            :style="{ maxHeight: modalHeight + 'vh' }"
        >
            <v-sheet class="modal-wrap" color="white" elevation="1" height="100%">
                <div class="modal-title">
                    <div class="d-flex align-center">
                        <h3>{{ modalTitle }}</h3>
                        <slot name="header" />
                    </div>
                    <div>
                        <slot name="header_center" />
                    </div>
                    <div class="d-flex align-center">
                        <slot name="header_right" />
                        <v-btn icon large color="#51565B" small @click="$emit('closeModal')"
                        ><v-icon>mdi-close-circle</v-icon></v-btn
                        >
                    </div>
                </div>
                <v-sheet
                    class="modal-content"
                    :color="modalColor"
                    :style="{ minHeight: `calc(${modalHeight}vh - 144px)` }"
                >
                    <template v-if="modalLoading">
                        <v-progress-linear
                        v-if="modalLoading"
                        indeterminate
                        color="primary"
                        ></v-progress-linear>
                    </template>
                    <template v-else>
                        <slot />
                    </template>
                </v-sheet>
                <div class="modal-action" :class="`justify-${modalPosition}`">
                    <div v-for="(item, index) in modalButton" :key="index" class="mr-2">
                        <v-btn
                        :outlined="item.outlined"
                        class="bt-basic h-middle"
                        :color="item.color"
                        :disabled="modalDisabled"
                        @click="$emit(item.methods)"
                        >{{ item.title }}</v-btn
                        >
                    </div>
                </div>
            </v-sheet>
        </div>
    </v-dialog>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

type VariableButton = {
  title: string
  color: string
  methods: string
  outlined?: boolean
}

export default defineComponent({
  props: {
    modalWidth: String,
    modalTitle: String,
    modalKey: String,
    modalActive: Boolean,
    modalColor: String,
    modalPosition: String,
    modalButton: Array as PropType<VariableButton[]>,
    modalHeight: String,
    className: String,
    modalLoading: Boolean,
    modalDisabled: Boolean,
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
.modal-wrap {
  position: relative;
  background-color: #f1f3f4 !important;
}
.modal-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  background-color: #fff;
  z-index: 100;
  h3 {
    color: var(--primary, 'base');
    font-size: 16px !important;
    font-weight: normal !important;
    margin-left: 10px;
  }
}
.modal_close {
  padding: 0 10px !important;
  cursor: pointer;
  border: 1px solid #51565b !important;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 35px;
  width: 90px;
  height: 28px;
  &::v-deep {
    span.white--text {
      font-size: 12px;
    }
  }

  &:hover {
    background: #ffffff;

    &:deep {
      i,
      span.white--text {
        color: #51565b !important;
      }

      &::before {
        opacity: 1 !important;
        background: #fff;
      }
    }
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
</style>