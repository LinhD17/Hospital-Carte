import { apiBase } from "~/plugins/apiBase";


export type Organization = {
    organization_uuid: string
    organization_name: string
}

export const useSearchOrganization = () {
    const organization = ref<Organization>({
        organization_uuid: '',
        organization_name: '',
    })

    const fetchOrganizationData = async () => {
        const url = '/get_login_organization'
        // use apiBase
        const response = await apiBase.post<Organization>(url, {})
        //success 
        if (response.status === 200) {
            organization.value = response.data
        }
    }
    return {
        organization: readonly(organization),
        fetchOrganizationData,
    }
}