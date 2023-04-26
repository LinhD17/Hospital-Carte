<template>
    <div class="header">
        <h2 class="header__title">
            <img src="@/assets/icons/ward.svg" alt="" />
             入院患者一覧
        </h2>
        <v-btn
            small
            color="teal darken-2"
            class="header__btn pt-4 pl-2"
        >
            病棟マップ
        </v-btn>

    </div>
  
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({

})
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-content: center;
}

</style>