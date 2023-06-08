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

<script lang="ts">
    import { ref, computed, PropType, defineComponent } from 'vue'
    import { UsePasswordType } from '~/hooks/General/Form/usePassword'
    
    type Props = {
        value: UsePasswordType
        placeholder?: string
        isShowPassword?: boolean
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
            isShowPassword: {
            type: Boolean,
            default: true,
            },
        },
        setup(props: Props) {
            const isInvisible = ref(true)
            const icon = computed(() => {
            if (!props.isShowPassword) return undefined
            return isInvisible.value ? 'mdi-eye' : 'mdi-eye-off'
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
            _placeholder,
            isInvisible,
            icon,
            type,
            onClick,
            onChange,
            }
        },
    })


</script>
  