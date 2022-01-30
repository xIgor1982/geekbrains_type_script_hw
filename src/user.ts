import {renderBlock} from './lib.js'

// --> Тестовая запись в localstorage - для проверки работы кода функции getUserData
// const testUserWriteLocalStorage = () => {
//   localStorage.setItem(
//     'user',
//     JSON.stringify(new User('Viktoria', './img/avatar.png'))
//   );
// }
// testUserWriteLocalStorage()
// <--

// --> Тестовая запись в localstorage - для проверки работы кода функции getFavoritesAmount
// const testGetFavoritesAmount = () => {
//   localStorage.setItem(
//     'favoritesAmount',
//     JSON.stringify(100)
//   );
// }
// testGetFavoritesAmount()
// <--

//1. Написать две функции.
export class User {
  username: string
  avatarUrl: string

  constructor(username: string, avatarUrl: string) {
    this.username = username
    this.avatarUrl = avatarUrl
  }
}

//1. Первая getUserData
export const getUserData = (): User | void => {
  try {
    const dataLocalStorage: any = localStorage.getItem('user')
    const user: { [key: string]: string } = JSON.parse(dataLocalStorage)
    const username: any | null = user['username']
    const avatarUrl: any | null = user['avatarUrl']
    const resultUser: User = new User(username, avatarUrl)
    return resultUser
  } catch (err) {
    console.log(`Сведений о пользователе в localstorage нет: -> ${err}`)
  }
}

//2. Вторая функция getFavoritesAmount
export const getFavoritesAmount = (): number => {
  try {
    const amount: any = localStorage.getItem('favoritesAmount')
    const num: number = +amount
    return num
  } catch (err) {
    console.log(`Сведений о пользователе в localstorage нет: -> ${err}`)
    return 0
  }
}

export function renderUserBlock(name: string, avatar: string, countFavorite?: number) {
  const favorite = countFavorite ? countFavorite : 'ничего нет';
  const isFavorite = countFavorite ? ' active' : '';

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${avatar}" alt="${name}" />
      <div class="info">
          <p class="name">${name}</p>
          <p class="fav">
            <i class="heart-icon${isFavorite}"></i>${favorite}
          </p>
      </div>
    </div>
    `
  )
}
