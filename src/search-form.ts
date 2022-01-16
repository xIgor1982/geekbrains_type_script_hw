import {renderBlock} from './lib.js'

export function renderSearchFormBlock(dateCheckIn: string, dateExit: string) {
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
                <input id="check-in-date" type="date" value="2021-05-11" min="" max="" name="checkin" />
              </div>
              <div>
                <label for="check-out-date">Дата выезда</label>
                <input id="check-out-date" type="date" value="2021-05-13" min="" max="" name="checkout" />
              </div>
              <div>
                <label for="max-price">Макс. цена суток</label>
                <input id="max-price" type="text" value="" name="price" class="max-price" />
              </div>
              <div>
                <div><button>Найти</button></div>
              </div>
          </div>
      </fieldset>
    </form>
    `
  )

  const currentDate = new Date();
  const dateOne = new Date(dateCheckIn);
  dateOne.setDate(dateOne.getDate() + 1);
  const dateTwo = new Date(dateExit);
  const maxDate = new Date(dateOne.getFullYear(), dateOne.getMonth() + 2, 0);

  let dateControl = document.getElementById('check-in-date');

  console.log(`dateOne => ${dateOne}`)
  console.log('dateControl')
  console.log(dateControl)
}
