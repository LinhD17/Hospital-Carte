export type ReservationSlotErrorView = {
  dayOfWeek: string
  startTime: string
  endTime: string
  reservationLimit: string
  validFrom: string
  validTo: string
}

export const initialReservationSlotErrorView = (): ReservationSlotErrorView => {
  return {
    dayOfWeek: '',
    startTime: '',
    endTime: '',
    reservationLimit: '',
    validFrom: '',
    validTo: '',
  }
}
