import { ref } from 'vue'

export const usePassword = () => {
    const password = ref('')
    const update = (newPassword: string) {
        password.value = newPassword
    }
    return {
        update,
        password,
    }
}

export type UsePasswordType = ReturnType<typeof usePassword>