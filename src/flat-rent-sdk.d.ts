export type BookedDates = string[] | number[] | Date[]

export interface DataBase{
  id: string,
  title: string,
  details: string,
  photos: string[],
  coordinates: number[],
  bookedDates: BookedDates,
  price: number
}

export function cloneDate(date: Date): Date
export function addDays(date:Date, days:number):Date
export const backendPort:number
export const localStorageKey:string

export interface Search{
  city:string
  checkInDate: Date
  checkOutDate: Date
  priceLimit: number[]
}

export interface FlatRentSdk {
  get(id:string):Promise<Object|null>
  search(parameters:Search):Object[]
  book(flatId:number, checkInDate:Date, checkOutDate:Date):Promise<number>
  _assertDateAreCorrect(checkInDate:Date, checkOutDate:Date):void
  _resetTime(date:Date):void
  _calculateDifferenceInDays(startDate:Date, endDate:Date):number
  _generateDateRange(from:Date, to:Date):Date[]
  _generateTransactionId():number
  _areAllDatesAvailable(flat:DataBase, dateRange:Date[]):DataBase
  _formatFlatObject(flat:DataBase):string | Object
  _formatFlatObject(flat:DataBase, nightNumber?:Date[]):string | Object
  _readDatabase():string
  _writeDatabase(database:DataBase[]):void
  _syncDatabase(database:DataBase[]):void
}



