<template>
    <v-text-field
        :type="type"
        :v-model="value.password"
        :append-icon="icon"
        :placeholder="_placeholder"
        @input="onChange"
        @click:append="onClick"
    >
    </v-text-field>
</template>

<script>
import { 
    defineComponent,
    ref, 
    PropType,
    computed,
} from '@nuxtjs/composition-api'
import { UsePasswordType } from '~/hooks/general/form/usePassword'

type Props = {
    value: UsePasswordType
    placeholder?: string 
    isShowpassword?: Boolean
}
export default defineComponent({
    props: {
        value: {
            type: Object as PropType<UsePasswordType>,
            required: true,
        },
        placeholder: {
            type: String,
        },
        isShowpassword: {
            type: Boolean,
            default: true,
        },
    },
    setup(props: Props) {
        const isInvisible = ref(true)
        const icon = computed(() => {
            if(!props.isShowpassword) return undefined
            return isInvisible ? 'mdi-eye' : 'mdi-eye-off'
        })
        const type = computed(() => (isInvisible.value ? 'password' : 'text'))
        const _placeholder = props.placeholder ? props.placeholder : ''
        const onClick = () => {
            isInvisible.value = !isInvisible.value
        }
        const onChange = (val: string) => {
            props.value.update(val)
        }
        return {
            isInvisible,
            icon,
            type, 
            _placeholder,
            onClick,
            onChange,

        }
    }

})
</script>

<style>

</style>