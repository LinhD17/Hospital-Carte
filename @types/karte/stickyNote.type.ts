export type StickyNoteType = {
    sticky_note_uuid: string
    sticky_note: string
    color_code: string
    is_self: number
    created_at: number
    created_by: string
    updated_at: number
    updated_by: string
    valid_from: number
    valid_to: number
  }
  
  export type ListStickyNoteType = {
    items: StickyNoteType[]
    maxItemCount: number
  }
  
  export type StoreStickyNoteType = {
    patient_uuid: string
    sticky_note: string
    color_name: string
    is_self: number
    valid_from?: string
    valid_to?: string
  }
  
  export type UpdateStickyNoteType = StoreStickyNoteType & {
    sticky_note_uuid: string
  }
  
  export type ColorListType = {
    items: [
      {
        color_name: string
        color_code: string
      }
    ]
  }
  
  export type ColorListItem = {
    color_name: string
    color_code: string
  }