import { InjectionKey, readonly, ref } from  '@nuxtjs/composition-api'
import { apiBase } from '~/plugins/apiBase'


export type accountsHeaderInterface = {
    staff_info: {
        account_uuid: string
        department_name: string
        has_agent_doctor: boolean
        hospital_department_name: string
        hospital_department_short_name: string
        narcotics_practitioner_no: string
        role_name: string
        role_subcategory_name: string
        staff_name: string
    }
    notices_unread_count: number
    chats_unread_count: number 
    status_updated_at: number
}
export const useAccountsHeader = () => {
    const accountsHeaders = ref<accountsHeaderInterface>({
        staff_info: {
            account_uuid: '',
            department_name: '',
            has_agent_doctor: false,
            hospital_department_name: '',
            hospital_department_short_name: '',
            role_name: '',
            role_subcategory_name: '',
            staff_name: '',
        },
        notices_unread_count: 0,
        chats_unread_count: 0,
        status_updated_at: 0,
    })

    //can phan tich lai muc nay ????
    const fetchAccountsHeader = async () => {
        const url = '/get_account_header_info'
        // use apiBase 
        const response = await apiBase.post<accountsHeaderInterface>(url, {})
    
        // success
        if (response.status === 200) {
          accountsHeaders.value = response.data
        } else if (response?.data) {
          console.log('失敗しました')
        }
    }


    return {
        accountsHeaders: readonly(accountsHeaders),
        fetchAccountsHeader,
    }
}

export type UserAccountsHeadersType = ReturnType<typeof useAccountsHeader>
export const UserAccountsHeadersStateKey: InjectionKey<UserAccountsHeadersType> = Symbol('AccountsHeadersState')