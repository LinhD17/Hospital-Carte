<template>
    <v-select 
    dense
    hide-details
    background-color="white"
    :height="height"
    :style="`width: ${width}px`"
    :items="['Foo', 'Bar', 'Fizz', 'Buzz']"
    :placeholder="placeholder"
    :clearable="clearable"
    />
</template>

<script lang="ts">
import { 
    defineComponent,
    // ref,
    // watch,
 } from "@nuxtjs/composition-api";

export default defineComponent({
    props: {
        value: {
            type: String,
            default: '',
            required: true,
        },
        width: {
            tyoe: Number,
            default: 150,
            required: false,
        },
        height: {
            type: Number,
            required: false,
        },
        placeholder: {
            type: String,
            default: '伝票を選択',
            required: false,
        },
        clearable: {
            type: Boolean,
            default: false,
            required: false,
        }
    },
    // setup(props, { emit }) {
    //     const voucher1 = ref<String>()
    //     watch(
    //         () => voucher1.value,
    //         (val) => {
    //             emit('update:value', val == null ? '' : val)
    //         }
    //     )
    //     watch(
    //         () => props.value,
    //         () => {
    //             voucher1.value = props.value
    //         },
    //         { immediate: true}
    //     )

    //     return {
    //         voucher1,
    //     }
    // }
})
</script>

<style lang="scss" scoped>
</style>