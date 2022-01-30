import {renderBlock} from './lib.js';
import {getDateStart, getDateEnd, convertDate, increaseDate} from './utilites.js';

//2. Создать интерфейс SearchFormData

//для вариантов с 1 по 3
// interface SearchFormData {
//   checkin?: Date;
//   checkout?: Date;
//   price?: number;
// }

//для 4 варианта
interface SearchFormData {
  checkIn?: Date;
  checkOut?: Date;
  priceData?: number;
}

//2. Написать функцию-обработчик формы search
const submitFormSearch = (event: SubmitEvent): void => {
  event.preventDefault()

  // ------> 1 вариант поиска данных в форме

  // const resultSearchFormData: SearchFormData = {
  //   checkin: new Date(<'checkin'>(new FormData(event.target as HTMLFormElement)).get('checkin')),
  //   checkout: new Date(<'checkout'>(new FormData(event.target as HTMLFormElement)).get('checkout')),
  //   price: +<'price'>(new FormData(event.target as HTMLFormElement)).get('price')
  // }
  //
  // console.log(resultSearchFormData)

  // <------ 1 вариант

  //--------------------------------------------------------------------------------------------

  // ------> 2 вариант

  // const searchNamesForm = ['checkin', 'checkout', 'price']
  // const values: {[key : string] : string} = {}
  //
  // const form: HTMLFormElement = document.querySelector('form')
  //
  // searchNamesForm.forEach((el => {
  //   const searchElForm: HTMLFormElement = form.querySelector(`[name=${el}]`)
  //   values[el] = searchElForm.value
  // }))
  //
  // const resultSearchData: SearchFormData = {
  //   checkin: new Date(values['checkin']),
  //   checkout: new Date(values['checkout']),
  //   price: +values['price']
  // }
  //
  // console.log('resultSearchData')
  // console.log(resultSearchData)

  // <------ 2 вариант

  //--------------------------------------------------------------------------------------------

  // ------> 3 вариант поиска данных в форме

  // const form = document.querySelector('form')
  // const fields = form.querySelectorAll('input')
  // const values: {[key : string] : string} = {}
  //
  // fields.forEach(field => {
  //   const {name, value} = field
  //   values[name] = value
  // })
  //
  // const result:SearchFormData = {
  //   checkin: new Date(values['checkin']),
  //   checkout: new Date(values['checkout']),
  //   price: +values['price']
  // }
  //
  // console.log('result')
  // console.log(result)

  // <------ 3 вариант

  //--------------------------------------------------------------------------------------------

  // ------> 4 вариант

  const form = document.forms[0]
  const {checkin, checkout, price} = form

  const result: SearchFormData = {
    checkIn: new Date(checkin.value),
    checkOut: new Date(checkout.value),
    priceData: +price.value
  }

  console.log('result - v4')
  console.log(result)

  // <------ 4 вариант
}

//инициализация данных формы поиска
const initDateStart: Date = increaseDate(new Date(), 1);
const initDateEnd: Date = getDateEnd(initDateStart);
const initPrice: number | null = 0;

// const initDateSearchFormBlock: SearchFormData = {
//   checkin: initDateStart,
//   checkout: initDateEnd,
//   price: initPrice
// }

const initDateSearchFormBlock: SearchFormData = {
  checkIn: initDateStart,
  checkOut: initDateEnd,
  priceData: initPrice
}

//2. Функция поиска принимает как аргумент переменную интерфейса SearchFormData
export function renderSearchFormBlock(data: SearchFormData | any = initDateSearchFormBlock) {
  // const dateStartFunc: Date = getDateStart(data.checkin);
  // const dateEndFunc: Date = getDateStart(dateStartFunc);
  // const dateMaxEndFunc: Date = increaseDate(getDateEnd(data.checkin), 1);
  // const maxDate: number | null = 0;


  const dateStartFunc: Date = getDateStart(data.checkIn);
  const dateEndFunc: Date = getDateStart(dateStartFunc);
  const dateMaxEndFunc: Date = increaseDate(getDateEnd(data.checkIn), 1);
  const maxDate: number | null = 0;

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>

<!--          <div class="providers">-->
<!--            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>-->
<!--            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>-->
<!--          </div>-->

        </div>
          <div class="row">
            <div>
                <label for="check-in-date">Дата заезда</label>
                <input 
                    id="check-in-date" 
                    type="date" 
                    value=${convertDate(dateStartFunc)} 
                    min=${convertDate(dateStartFunc)} 
                    max=${convertDate(dateMaxEndFunc)} 
                    name="checkin" />
              </div>
              <div>
                <label for="check-out-date">Дата выезда</label>
                <input 
                    id="check-out-date" 
                    type="date" 
                    value=${convertDate(increaseDate(dateEndFunc, 2))} 
                    min=${convertDate(dateStartFunc)} 
                    max=${convertDate(dateMaxEndFunc)} 
                    name="checkout" />
              </div>
              <div>
                <label for="max-price">Макс. цена суток</label>
                <input 
                    id="max-price" 
                    type="text" 
                    value=${maxDate}
                    name="price" 
                    class="max-price" />
              </div>
              <div>
                <div><button>Найти</button></div>
              </div>
          </div>
      </fieldset>
    </form>
    `
  )
}

//отслеживание нажатия кнопки формы поиска
const submitListener = (): void => {
  const form: HTMLFormElement | any = document.getElementById('search-form-block')
  try {
    form.addEventListener('submit', submitFormSearch)
  } catch (err) {
    console.log(`элемент form не найден -> ${err}`)
  }
}

submitListener()
