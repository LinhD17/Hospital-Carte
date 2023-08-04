import {ref} from 'vue'
import PatientMovementStatusTable_SubVue from '~/components/pages/global/Home/NursingManagementDiary/PatientMovementStatusTable_Sub.vue'

type HospitallizationType = {
    hospitalization_type_name: string
    hospitalization_form_name: string
    value: string
}

export type PatientMovementStatusList = {
    ward: string
    hospitalization: HospitallizationType[]
    discharge: HospitallizationType[]
    movingIn: HospitallizationType[]
    moveOut: HospitallizationType[]
    sleepover: HospitallizationType[]
    goOut: HospitallizationType[]
    returnToHospital: HospitallizationType[]
}

export const usePatientMovementStatus = () => {
    const data = ref<PatientMovementStatusList[]>([])
    const fetchState = ref(false)

    const fetch = async () => {
        fetchState.value = true 
        const response = await client.get<PatientMovementStatusList[]>(
            '/global/common/nursing-management-diary/patientMovementStatus'
        )
        data.value = response?.data || []
        fetchState.value = false
    }

    return {
        data, 
        fetchState, 
        fetch,
    }
}