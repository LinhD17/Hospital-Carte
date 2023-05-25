<template>
    <v-select 
        solo
        background-color="white"
        :height="height"
        :width="width"
        :style="`width: ${width}px`"
        :items="['Vue.js', 'React', 'Angular', 'Buzz']"
        :placeholder="placeholder"
        :clearable="clearable"
    />
</template>

<script setup lang="ts">
    const props = defineProps({
        value: { type : String,default: '', required: true},
        width: { type : String,default:  150, required: false},
        height: { type : String, required: false},
        placeholder: { type : String, default: '伝票を選択', required: false}, 
        clearable: { type : String, default: false, required: false }
    }) 
</script>
  
  
  
  
  
  