
<script setup lang="ts">
//ghi đè bố cục mặc định (default) của app
definePageMeta({ 
    // layout: 'global',
    // middleware: ['guard/auth'],
})
</script>

<template>     
    <NuxtLayout name="global">
        <div class="screen">
            <PagesGlobalHomeWellKnownAndTask />
        </div>
    </NuxtLayout>
</template>

<style lang="scss" scoped>
    .screen {
        display: block;
        width: 100%;
        height: 100%;
        background-color: #f0f0f0;
    }
</style>