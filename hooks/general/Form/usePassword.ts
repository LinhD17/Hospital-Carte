import { ref } from 'vue'

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

export type UsePasswordType = ReturnType<typeof usePassword>