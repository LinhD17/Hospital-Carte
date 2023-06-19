<template>
    <modal-form
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
    </modal-form>
</template>

<script lang="ts">
import ModalForm from '~/components/General/Modal.vue'
import { defineComponent } from 'vue'

type ModalButtonType = {
    title: string
    color: string
    outlined?: Boolean
    methods: string
}
export default defineComponent({
    components: {
        ModalForm,
    },
    props: {
        isModelOpen: {
            type: Boolean,
            required: true,
        },
    },
    emits: {
        onModalCloseButtonClick: (): void => {},
        onDeleteButtonClick: (): void => {},
    },
    setup(_, { emit }) {
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
        const closeModal = () => {
            emit('onModalCloseButtonClick')
        }

        const onDeleteButtonClick = () => {
            emit('onDeleteButtonClick')
        }

        return {
            modalButtons,
            closeModal,
            onDeleteButtonClick,
        }
    }
})
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