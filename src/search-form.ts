import {renderBlock} from './lib.js'

export function renderSearchFormBlock(dateCheckIn: string, dateExit: string) {
  const dateOne = new Date(dateCheckIn);
  dateOne.setDate(dateOne.getDate() + 1);
  const dateTwo = new Date(dateExit);
  const maxDate = new Date(dateOne.getFullYear(), dateOne.getMonth() + 2, 0);

  const textDateOne = `0${dateOne.getDay()}-0${dateOne.getMonth()}-${dateOne.getFullYear()}`;
  const textDateTwo = `0${dateTwo.getDay()}-0${dateTwo.getMonth()}-${dateTwo.getFullYear()}`;
  const textMaxDate = `0${maxDate.getDay()}-0${maxDate.getMonth()}-${maxDate.getFullYear()}`;
  // const numPrice = new Date(document.getElementById('check-out-date').value - document.getElementById('check-in-date').value)
  //
  // console.log(document.getElementById('check-out-date').value)
  // console.log(document.getElementById('check-in-date').value)
  console.log('dateOne.toLocaleDateString() => ' + dateOne.toLocaleDateString());

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
                <input id="check-in-date" type="date" value="${dateOne}" min="${dateOne.toLocaleDateString()}" max="${maxDate.toLocaleDateString()}" name="checkin" />
<!--                <input id="check-in-date" type="date" value="${dateOne.toLocaleDateString()}" min="${dateOne.toLocaleDateString()}" max="${maxDate.toLocaleDateString()}" name="checkin" />-->
<!--                <input id="check-in-date" type="date" value="${dateOne}" min="${dateOne}" max="${maxDate}" name="checkin" />-->
<!--                <input id="check-in-date" type="date" value="${textDateOne}" min="${textDateOne}" max="${textMaxDate}" name="checkin" />-->
              </div>
              <div>
                <label for="check-out-date">Дата выезда</label>
                <input id="check-out-date" type="date" value="${dateTwo}" min="${dateOne.toLocaleDateString()}" max="${maxDate.toLocaleDateString()}"" name="checkout" />
<!--                <input id="check-out-date" type="date" value="${dateTwo.toLocaleDateString()}" min="${dateOne.toLocaleDateString()}" max="${maxDate.toLocaleDateString()}"" name="checkout" />-->
<!--                <input id="check-out-date" type="date" value="${dateTwo}" min="${dateOne}" max="${maxDate}"" name="checkout" />-->
<!--                <input id="check-out-date" type="date" value="${textDateTwo}" min="${textDateOne}" max="${textMaxDate}"" name="checkout" />-->
              </div>
              <div>
                <label for="max-price">Макс. цена суток</label>
<!--                <input id="max-price" type="text" value="$...{numPrice}" name="price" class="max-price" />-->
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
}
