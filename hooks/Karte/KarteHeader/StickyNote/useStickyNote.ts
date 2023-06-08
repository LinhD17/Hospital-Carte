import { ref, readonly, InjectionKey } from 'vue'
import { apiBase } from '~/plugins/apiBase'
import { cloneDeep } from 'lodash'

export type StickyNoteType = {
    color_code: string
}

export type ListStickyNoteType = {
    item: StickyNoteType[]
    maxItemCount: number
}

export type StoreStickyNoteType = {
    color_name: string
}

export type UpdateStickyNoteType = {
    color_name: string
}

export type ColorListType = {
    items: [
        {
            color_name: string
            color_code: string
        }
    ]
}

export const useStickyNote = () => {
    //C2800 
    const patientStickyNoteList = ref<ListStickyNoteType>(
        {} as ListStickyNoteType
    )

    const getPatientStickyNoteList = () => {
        return cloneDeep(patientStickyNoteList.value)
    }

  const fetchPatientStyickyNoteList = async (patientUuid: string) => {
    const url = '/patient_sticky_notes/list'
    const response = await apiBase.post<ListStickyNoteType>(url, {
      patient_uuid: patientUuid,
    })
    if (response.status == 200) {
      patientStickyNoteList.value = response.data
    }
  }

  // C2801
  const storePatientStyickyNote = async (params: StoreStickyNoteType) => {
    const url = '/patient_sticky_notes/store'
    const response = await apiBase.post(url, params)
    return response
  }

  // C2802
  const updatePatientStyickyNote = async (params: UpdateStickyNoteType) => {
    const url = '/patient_sticky_notes/update'
    const response = await apiBase.patch(url, params)
    return response
  }

  // C2803
  const destroyPatientStyickyNote = async (uuid: string) => {
    const url = '/patient_sticky_notes/destroy'
    const response = await apiBase.patch(url, {
      sticky_note_uuid: uuid,
    })
    return response
  }

  // C2804
  const fetchColorList = async () => {
    const url = '/sticky_notes_color/list'
    const response = await apiBase.post<ColorListType>(url)
    return response
  }

  return {
    patientStickyNoteList: readonly(patientStickyNoteList),
    getPatientStickyNoteList,
    fetchPatientStyickyNoteList,
    storePatientStyickyNote,
    updatePatientStyickyNote,
    destroyPatientStyickyNote,
    fetchColorList,
  }
}

type SearchUseStickyNote = ReturnType<typeof useStickyNote>
export const searchUseStickyNoteStateKey: InjectionKey<SearchUseStickyNote> =
  Symbol('searchUseStickyNoteState')
