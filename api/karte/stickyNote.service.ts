import { AxiosResponse } from 'axios'
import { apiBase } from '~/plugins/apiBase'
import {
  ListStickyNoteType,
  StoreStickyNoteType,
  UpdateStickyNoteType,
  ColorListType,
} from '~/@types/karte/stickyNote.type'

export const StickyNoteService = {
  fetchPatientStickyNoteList: (
    patient_uuid: string
  ): Promise<AxiosResponse<ListStickyNoteType>> =>
    apiBase.post<ListStickyNoteType>('/patient_sticky_notes/list', {
      patient_uuid,
    }),
  // C2801
  storePatientStickyNote: (
    params: StoreStickyNoteType
  ): Promise<AxiosResponse> =>
    apiBase.post('/patient_sticky_notes/store', params),
  // C2802
  updatePatientStickyNote: (
    params: UpdateStickyNoteType
  ): Promise<AxiosResponse> =>
    apiBase.patch('/patient_sticky_notes/update', params),
  // C2802
  destroyPatientStickyNote: (
    sticky_note_uuid: string
  ): Promise<AxiosResponse> =>
    apiBase.patch('/patient_sticky_notes/destroy', { sticky_note_uuid }),
  // C2802
  fetchColorList: (): Promise<AxiosResponse<ColorListType>> =>
    apiBase.post<ColorListType>('/sticky_notes_color/list'),
}