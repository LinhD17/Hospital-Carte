import { useStore, ref  } from "@nuxtjs/composition-api"
import { HK_VAR } from "~/enum/hkVariable.enum"

export const useLoggedIn =  () => {
    const store = useStore() 
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

    return { isLoggedIn }
}

