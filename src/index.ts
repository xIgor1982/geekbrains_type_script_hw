import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Lena', './img/avatar.png', 0)
  renderSearchFormBlock(new Date().toString(), new Date().toString())
  renderSearchStubBlock()
  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  )



})


// window.addEventListener('DOMContentLoaded', () => {
//   renderUserBlock('0')
//   renderSearchFormBlock()
//   renderSearchStubBlock()
//   renderToast(
//     { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
//     { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
//   )
// })
