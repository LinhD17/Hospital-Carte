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

<script setup>
    import { ref, computed, PropType } from 'vue'  //
    import { UsePasswordType } from '~/hooks/general/form/usePassword'
    const props = defineProps({
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
    })
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
    const onChange = (val: String) => {
      props.value.update(val)
    }
</script>
  