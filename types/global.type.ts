export type CommonObject = {
    text: string
    value: string | number | boolean
  }
  type GenderItem = {
    gender_id: number
    name: string
    sort_no: number
  }
  
  export type GenderList = {
    items: GenderItem[]
  }
  export type Staff = {
    staff_uuid: string
    name: string
    account_name_yomigana: string
  }
  
  export type ItemWard = {
    ward_uuid: string
    ward_name: string
    sort_no: number
  }
  export type listWard = {
    items: ItemWard[]
    pageNo: number
    totalPageCount: number
    maxItemCount: number
  }
  export type itemSickRoom = {
    ward_uuid: string
    ward_name: string
    sickroom_uuid: string
    sickroom_name: string
    sort_no: number
  }
  export type listSickRoom = {
    items: itemSickRoom[]
    pageNo: number
    totalPageCount: number
    maxItemCount: number
  }
  export type itemSickBed = {
    ward_uuid: string
    ward_name: string
    sickroom_uuid: string
    sickroom_name: string
    sickbed_uuid: string
    sickbed_name: string
    sickbed_sort_no: number
  }
  export type listSickBed = {
    items: itemSickBed[]
    pageNo: number
    totalPageCount: number
    maxItemCount: number
  }
  
  export type itemStaffDoctor = {
    account_uuid: string
    staff_uuid: string
    staff_name: string
    staff_name_yomi: string
    hospital_department_name: string
    hospital_department_short_name: string
    department_name: string
    role_name: string
  }
  export type listStaffDoctor = {
    items: itemStaffDoctor[]
    pageNo: number
    totalPageCount: number
    maxItemCount: number
  }
  export type hospitalizationFormItem = {
    uuid: string
    name: string
  }
  export type hospitalizationFormList = {
    hospitalization_forms: hospitalizationFormItem[]
  }
  export type itemPatientDeseases = {
    uuid: string
    is_main: number | string
    diseas_name: string
  }
  export type patientDeseasesList = {
    items: itemPatientDeseases[]
    pageNo: number
    totalPageCount: number
    maxItemCount: number
  }
  type otherMedicalInstitutionItem = {
    medical_institution_uuid: string
    medical_institution_name: string
    sort_no: number
  }
  export type otherMedicalInstitutionList = {
    items: otherMedicalInstitutionItem[]
    pageNo: number
    totalPageCount: number
    maxItemCount: number
  }
  export type systemTimeType = {
    sys_date_time: string
    sys_timestamp: number
  }
  export type accountsHeader = {
    organization: {
      uuid: string
      name: string
      fqdn: string
      port: number
    }
    candidate_organizations: [
      {
        uuid: string
        name: string
        fqdn: string
        port: number
      }
    ]
    staff_info: {
      staff_uuid: string
      staff_name: string
      role_name: string
      is_doctor: boolean
    }
    chats_unread_count: number
    status_updated_at: number
  }
  export type NotificationData = {
    type: string
    title: string
    content: string
    isVisible: boolean
  }
  export type ErrorInfo = {
    code: string
    message: string
  }
  export type VoucherLevel3 = {
    level3_voucher_uuid: string
    name: string
    created_at: number
    updated_at: number
  }
  
  export type VoucherLevel2 = {
    level2_voucher_uuid: string
    name: string
    level3_vouchers: VoucherLevel3[]
    created_at: number
    updated_at: number
  }
  
  export type VoucherLevel2Level3List = {
    items: VoucherLevel2[]
  }
  export type CommonSelect = {
    text: string | number | object
    value: string | number | object
    disabled?: boolean
    divider?: boolean
    header?: string
  }
  
  export type AgentItem = {
    account_uuid: string
    staff_name: string
    hospital_department_name: string
    department_name: string
    agent_authority: number
  }
  
  export type AgentList = {
    agent_doctors: AgentItem[]
  }
  
  export type PatientInfo = {
    patient_uuid: string
    patient_no: string
    patient_name: string
    patient_name_yomi: string
    call_name: string
    real_name: string
    real_name_yomi: string
    old_name: string
    old_name_yomigana: string
    race_id: number
    race_uuid: string
    race_other: string
    is_same_name: boolean
    is_similer_name: boolean
    similer_name_comment: string
    gender_type: number
    blood_type: number
    blood_name: string
    rh_type: number
    rh_name: string
    birth_day: string
    age: string
    height: string
    weight: string
    waist: string
    bmi: string
    bsa: string
    postal_code1_1: string
    postal_code1_2: string
    address1_1: string
    address1_2: string
    householder_relation1: number
    householder_relation1_uuid: string
    householder_relation1_other: string
    householder_name1: string
    residence1: number
    residence1_uuid: string
    house1_other: string
    housing_form1: number
    housing_form1_uuid: string
    registered_domicile1: string
    registered_domicile1_note: string
    postal_code2_1: string
    postal_code2_2: string
    address2_1: string
    address2_2: string
    householder_relation2: number
    householder_relation2_uuid: string
    householder_relation2_other: string
    householder_name2: string
    residence2: number
    residence2_uuid: string
    house2_other: string
    postal_code3_1: string
    postal_code3_2: string
    address3_1: string
    address3_2: string
    householder_relation3: number
    householder_relation3_uuid: string
    householder_relation3_other: string
    householder_name3: string
    residence3: number
    residence3_uuid: string
    house3_other: string
    phone1: string
    phone2: string
    mobile_phone: string
    fax: string
    email: string
    primary_id: string
    caution_type: number
    caution: string
    special_note: string
    primary_doctor_uuid: string
    primary_doctor_name: string
    primary_doctor: {
      account_uuid: string
      name: string
    }
    doctor_1_uuid: string
    doctor_1_name: string
    doctor_2_uuid: string
    doctor_2_name: string
    medical_doctors: [
      {
        account_uuid: string
        name: string
      }
    ]
    primary_nurse_uuid: string
    primary_nurse_name: string
    primary_nurse: {
      account_uuid: string
      name: string
    }
    staff_1_uuid: string
    staff_1_name: string
    staff_2_uuid: string
    staff_2_name: string
    staff_3_uuid: string
    staff_3_name: string
    staff_4_uuid: string
    staff_4_name: string
    staff_5_uuid: string
    staff_5_name: string
    staff_6_uuid: string
    staff_6_name: string
    staff_7_uuid: string
    staff_7_name: string
    staff_8_uuid: string
    staff_8_name: string
    staff_9_uuid: string
    staff_9_name: string
    staff_10_uuid: string
    staff_10_name: string
    charge_staffs: [
      {
        account_uuid: string
        name: string
      }
    ]
    // 入院形態
    hospitalization_form: {
      form_type_name: string
      form_history: Array<{
        uuid: string
        name: string
        start_datetime: string
      }>
    }
    // 隔離拘束
    limitation_action: {
      isolation: string
      restraint: string
      other: {
        action: string
        tel: string
        interview: string
        other: string
      }
    }
    // 感染症
    viral_hepatitis_b_id: number
    viral_hepatitis_b_text: string
    viral_hepatitis_b_uuid: string
    viral_hepatitis_b_name: string
    viral_hepatitis_b_date_type: number
    viral_hepatitis_b_date: string
    viral_hepatitis_b_note: string
    viral_hepatitis_c_id: number
    viral_hepatitis_c_text: string
    viral_hepatitis_c_uuid: string
    viral_hepatitis_c_name: string
    viral_hepatitis_c_date_type: number
    viral_hepatitis_c_date: string
    viral_hepatitis_c_note: string
    hiv_id: number
    hiv_text: string
    hiv_uuid: string
    hiv_name: string
    hiv_date_type: number
    hiv_date: string
    hiv_note: string
    syphilis_id: number
    syphilis_text: string
    syphilis_uuid: string
    syphilis_name: string
    syphilis_date_type: number
    syphilis_date: string
    syphilis_note: string
    other_infection_id: number
    other_infection_text: string
    other_infection_uuid: string
    other_infection_name: string
    other_infection_note: string
    // その他アレルギー
    other_allergy_id: number
    other_allergy_text: number
    other_allergy_uuid: string
    other_allergy_name: string
    other_allergy_note: string
  
    regular_medicine_id: number
    regular_medicine: string
    regular_medicine_text: string
    oxygen_therapy_id: number
    oxygen_therapy_text: string
    dialysis_id: number
    dialysis_text: string
    history_of_surgery_id: number
    history_of_surgery_text: string
    women_information_id: number
    women_information: string
    women_information_text: string
    faith_religion_id: number
    faith_religion_text: string
    organ_donation_id: number
    organ_donation_text: string
    indwelling_device_id: number
    indwelling_device_text: string
    indwelling_device_list: string
    indwelling_device_array: string[]
    indwelling_device: string
    candidate_for_hospitlization_id: number
    candidate_for_hospitlization_uuid: string
    contraindication_medicines_id: number
    contraindication_medicines: string
    created_at: number
    updated_at: number
    updated_uuid: string
  }
  
  export type InputRequestStaffData = {
    account_uuid: string
    staff_name: string
    staff_name_yomi: string
    hospital_department_name: string
    hospital_department_short_name: string
    department_name: string
    role_name: string
    role_subcategory_id: number
    agent_authority: number
  }
  
  export type InputRequestStaffSearchParams = {
    staff_name: string
    departments: []
    role_sub_category: string
    agent_authority: []
  }
  
  export type InputRequestStaffList = {
    items: InputRequestStaffData[]
  }
  
  export type InputRequestStaffUpdateParams = {
    account_uuid: string
    agent_authority: number
  }
  
  export type InputRequestStaffParams = {
    accounts: InputRequestStaffUpdateParams[]
  }
  