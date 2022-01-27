export const database: {
  id: string
  title: string
  details: string
  photos: string[]
  coordinates: number[]
  bookedDates: any[]
  price: number
}[]

export function cloneDate(date: Date): Date
export function addDays(date: Date, days: number): Date

export const backendPort: number
export const localStorageKey: String

export interface FlatRentSdk {
  get(id: string): Promise<Object | null>

  search(parameters: String | Date | number): Object[]

  book(flatId: number, checkInDate: Date, checkOutDate: Date): number

  _assertDatesAreCorrect(checkInDate: Date, checkOutDate: Date): void

  _resetTime(data: Date): void

  _calculateDifferenceInDays(startDate: Date, endDate: Date): number

  _generateDateRange(from: Date, to: Date): Date
}
