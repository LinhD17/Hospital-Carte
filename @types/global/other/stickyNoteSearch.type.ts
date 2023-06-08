export namespace StickyNoteSearch {
    // export type Request = {
    //   content?: string
    //   create_from?: string
    //   create_to?: string
    //   account_uuid?: string
    //   color_names?: string[]
    //   disable_dsp_flg?: number
    //   sort?: string[]
    //   order?: number[]
    //   pageNo?: number
    // }
    // export type Response = {
    //   items: {
    //     patient: PatientType
    //     stiky: StickyNoteType
    //   }[]
    //   pageNo: number
    //   totalpageCount: number
    //   maxItemCount: number
    // }
  
    // export type PatientType = {
    //   patient_no: string
    //   sex: number
    //   name: string
    //   name_yomigana: string
    //   is_similer_name: number
    //   birth_day: number
    //   age: number
    // }
    
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
  }