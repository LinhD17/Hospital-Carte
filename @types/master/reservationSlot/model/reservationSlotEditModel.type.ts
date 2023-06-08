export type ReservationSlotEditModel = {
    slotUuid?: string
    startHour: string
    startMin: string
    endHour: string
    endMin: string
    reservationLimit: string
    validFrom: string
    validTo: string
    noSetValidTo: boolean
    dayOfWeek: string
    dayOfWeekList: string[]
  }
  
  export const initialReservationSlotEditModel = (): ReservationSlotEditModel => {
    return {
      startHour: '',
      startMin: '',
      endHour: '',
      endMin: '',
      reservationLimit: '',
      validFrom: '',
      validTo: '',
      noSetValidTo: true,
      dayOfWeek: '',
      dayOfWeekList: [],
    }
  }
  