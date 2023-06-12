import { HK_VAR } from "~/enum/hkVariable.enum";
import { ref } from 'vue'
import { useStore } from 'vuex'

export const useLoggedIn = () => {
    const store = useStore() // tai sao o day van bao loi
    const isLoggedIn = ref<boolean>(store.getters['auth/isLoggedIn'])

    //ローカルストレージのログイン状態を監視: theo doi trang thai dang nhap bo nho cuc bo
    window.addEventListener('storage', (event) => {
        if (event.key === HK_VAR.LOGIN_INFO) {
            if (event.newValue) {
                isLoggedIn.value = true
            } else {
                isLoggedIn.value = false
            }
        }
    })
}