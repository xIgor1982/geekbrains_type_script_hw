export const requestDataRealty = (countRealty = 5) => {
  // console.log('requestDataRealty =>')
  fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      console.log(`countRealty = ${countRealty}`)
      let j = 1;
      let result = [];
      try {
        json.forEach(el => {
          if(+el.userId == j && j <= countRealty) {
            // console.log(el)
            // console.log(`j = ${j}, countRealty = ${countRealty}, сравнение(j > countRealty) = ${j > countRealty}`)
            result.push(el)
            j++
          }
          if(j > countRealty) throw new Error('<= requestDataRealty')
        })
      } catch (err) {
        console.log(result)
        // console.log('<= requestDataRealty')
      }
    })
    // .then(array => {
    //   console.log(array)
    // })
}
