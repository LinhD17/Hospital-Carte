import { ref } from '@nuxtjs/composition-api'
export const usePassword = () => {
    const password = ref('')
    const update = (newPassword: string) => {
        password.value = newPassword
    }
    return {
        password,
        update,
    }
}

export type usePasswordType = ReturnType<typeof usePassword>