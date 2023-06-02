<template>
    <modal
        modal-width="500"
        :modal-active="isModelOpen"
        modal-key="modal_delete"
        modal-position="center"
        modal-color="#ffffff"
        :modal-title="'削除'"
        :modal-button="modalButtons"
        @closeModal="closeModal"
        @confirm="onDeleteButtonClick"
    >
        <div class="content-modal_wrapper">
            <div class="content-modal_title">
                <div>削除しますがよろしいでしょうか</div>
            </div>
            <div v-if="$scopedSlots.default" class="content-modal_content">
                <slot></slot>
            </div>
        </div>
    </modal>
</template>

<script setup lang="ts">
import Modal from '~/components/General/Modal.vue'
import { defineEmits } from 'vue';

type ModalButtonType = {
    title: string
    color: string
    outlined?: Boolean
    methods: string
}
const props = defineProps({
    isModelOpen: {
        type: Boolean,
        required: true,
    },
})

const modalButtons: ModalButtonType[] = [
    {
    title: '削除',
    color: 'primary',
    methods: 'confirm',
    },
    {
    title: 'キャンセル',
    color: 'primary',
    methods: 'closeModal',
    outlined: true,
    },
]
//cần xem xét laị cách viết emit trong Vue3 
const emits = defineEmits([
    onModalCloseButtonClick: (): void => {},
    onDeleteButtonClick: (): void => {},
])

const closeModal = () => {
    emit('onModalCloseButtonClick')
}

const onDeleteButtonClick = () => {
    emit('onDeleteButtonClick')
}
</script>


<style scoped lang="scss">
.feeling {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px;
  p {
    width: 160px;
    margin-bottom: 0 !important;
  }
  .select-style {
    max-width: 300px !important;
    margin-left: 30px;
  }
}
.content-modal_wrapper {
  text-align: center;
}
.content-modal_title {
  padding-bottom: 16px;
}
</style>