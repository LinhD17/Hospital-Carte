//import { apiBase } from '~/plugins/apiBase'
// 国民の祝日
export type NationalHolidays = {
    date: string
    name: string
}
// レギュラー休診日
export type SpecificNoConsultationDays = {
    date: string
    name: string
}

export type Calendar = {
    national_holidays: NationalHolidays[]
    regular_no_consultation_days: number[]
    specific_no_consultation_days: SpecificNoConsultationDays[]
}

export const calendars = () => {
    const items = ref<Calendar>({
        national_holidays: [] as NationalHolidays[],
        regular_no_consultation_days: [],
        specific_no_consultation_days: [] as SpecificNoConsultationDays[],
    })

    const fetchCalendarItems = async () => {
        // 現在の年を取得する
        const year = new Date()
        const url = '/calendar/' + year.getFullYear().toString()
        // const response = await apiBase.get<Calendar>(url)
    
        // if (response.status == 200) {
        //   items.value = response.data
        // } else {
        //   // error時の処理
        // }
      }
    
      return {
        calendarItems: readonly(items),
        fetchCalendarItems,
      }
}