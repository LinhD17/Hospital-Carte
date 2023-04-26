<!-- Snackbar: duyệt  login success / error và từ đó xác định màu sắc cho layout  -->
<!-- <template>
    <v-snackbar
        v-model="isVisible"
        :color="notificationData.type === 'success' ? 'success' : 'error'"
        multi-line
        :timeout="2000"
        top
        right
        class="c-snackbar"
    >
        <v-layout align-center>
            <v-icon 
                class="c-icon"
                dark 
                large
                v-text="notificationData.type === 'success'
                        ? 'mdi-check-circle'
                        : 'mdi-information'
                    "
            />
            <v-layout column>
                <div>
                    <strong v-text="notifivationData.title" /> 
                </div>
                <div class="output-text" v-text="notificationData.content" />
                <v-btn class="close-btn" @click="closeSnackBar">
                    <v-icon v-text="'mdi-minus-circle'" />
                </v-btn>
            </v-layout>
        </v-layout>
    </v-snackbar>
</template>

<script>
import { computed, defineComponent, ref, useStore, watch } from '@nuxtjs/composition-api'
import { NotificationData } from '~/types/global.type'

export default defineComponent({
    setup() {
        const store = useStore() 
        const isVisible = ref<boolean>(false) //mặc định isVisible ban đầu là false => không thể nhìn tháy 
        const notificationData = computed<NotificationData>(
            () => store.getters.notificationData
        )
        //quan sát notificationData
        watch(notificationData, (val) => {
            if (val?.isVisible) {
                isVisible.value = val.isVisible
            }
        })

        const closeSnackBar = () => {
            isVisible.value = false
        }
        
        return {
            notificationData,
            isVisible,
            closeSnackBar,
        }
    }
})
</script> -->