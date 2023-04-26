<template>
    <div class="search-fields">
        <div class="search-fields_button">
            <div class="ml-5 mt-3" style="display:flex">
                <p class="mt-2">記載日</p>
                <div class="ml-3" style="width: 140px">
                    <date-picker :value.sync="date"/>
                </div>
            </div>
            <div class="mt-3 mr-7">
                <v-menu offset-y :close-on-content-click="false">
                    <template #activator="{ on, attrs }">
                        <v-btn
                            outlined
                            color="primary" 
                            dense
                            v-bind="attrs"
                            v-on="on"
                        >
                            一括記載
                        </v-btn>
                    </template>
                    <description-input-popup />
                </v-menu>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import moment from 'moment' 
import DescriptionInputPopup from './descriptionInputPopup.vue'
import DatePicker from '~/components/general/form/DatePicker.vue'

export default defineComponent({
    components: { 
        DatePicker,
        DescriptionInputPopup 
    },
    setup() {
        return {
            date: ref(moment().format('YYYY-MM-DD')),
        }
    }
})
</script>

<style lang="scss" scoped>
.search-fields {
    padding: 0;
    p {
        font-weight: bold;
    }
}
.search-fields_button {
    display: flex;
    justify-content: space-between;
}
</style>