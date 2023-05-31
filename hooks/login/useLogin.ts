import { apiBase } from '~/plugins/apiBase'

//error message's file import 
import { ErrorMessages } from '../ErrorResorce/errorMessage'
import moment from 'moment'

export type AccountInfo = {
    account_uuid: string
    last_name: string
    last_name_yomigana: string
    first_name: string
    first_name_yomigana: string
}
export type OrganizationInfo = {
    organization_uuid: string
    name: string
}
export type Contacts = {
    address: string 
    note: string
}
export type StaffInfo = {
    staff_uuid: string
    name: string
    contacts: Contacts[]
}
export type RoleInfo = {
    role_uuid: string
    name: string
}
export type Login = {
    account_info: AccountInfo[]
    organization_info: OrganizationInfo[]
    staff_info: StaffInfo[]
    role_info: RoleInfo[]
    is_initial_password: boolean
    is_password_warning: boolean
    role_id: string
    access_token: string
    expired_at: string
    password_expired_at: number | null
    timestamp: string
    hash: string
}

export type LoginInfo = {
    login_id: string
    login_password: string
}

export type ErrorInfo = {
    code: number 
    errors: any
}

export const useLogin = () => {
    const router = useRouter()
    const store = useStore() 
    const loginResponse = ref<Login>()
    const errorInfo = reactive<string[]>([''])
    const loading = ref<boolean>(false)

    const fetchLogin =async (loginInfo: LoginInfo) => {
        //エラー情報リセット
        errorInfo.splice(0)

        const url = '/login'
        const request = {
            login_id: loginInfo.login_id,
            login_password: loginInfo.login_password,
        }
        const now = moment().unix()

        //use apiBase 
        try {
            loading.value = true 
            const response = await apiBase.post<Login>(url, request)
            //success
            if (response.status === 200){
                loginResponse.value = response.data
                localStorage.setItem('accessToken', loginResponse.value.access_token)

                store.commit('auth/setLoginState', true)
                store.commit('auth/setPasswordState', true)
                store.commit('auth/setAgentDoctorInfoState', {
                    account_uuid: '',
                    staff_name: '',
                    hospital_department_name: '',
                    department_name: '',
                    agent_authority: 0
                }) 

                if ( loginResponse.value.password_expired_at &&  loginResponse.value.password_expired_at < now ) {
                    // password expired (パスワード有効期限切れ)
                    store.commit('auth/setPasswordState', false)
                    router.push('/passwordUpdate')

                } else if (loginResponse.value.is_password_warning) {
                    // password expiration warning (パスワード有効期限警告)
                    router.push('/passwordUpdate')
                } else if (loginResponse.value.is_initial_password) {
                    // initial passwor (初期パスワード)
                    router.push('/passwordUpdate')
                } else {
                    router.push('/global/common/wellKnownAndTask')
                }
            } else if (response?.data) {
                if ( Object(response.data).filter(
                    (error: any) => error.code === 'E1001' || error.code === 'E2001'
                ).length >= 1) {
                    errorInfo.push(ErrorMessages.idOrPasswordIncorrectErrorMessage)
                }
            }
        }finally {
            loading.value = false
        }
    }
    return {
        loginResponse,
        errorInfo,
        loading,
        fetchLogin,
    }
}