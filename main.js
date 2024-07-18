const $charactersTable = document.getElementById('table__characters'),
  $searchBar = document.getElementById('search-bar'),
  $Gryffindor = document.getElementById('Gryffindor'),
  $Hufflepuff = document.getElementById('Hufflepuff'),
  $Ravenclaw = document.getElementById('Ravenclaw'),
  $Slytherin = document.getElementById('Slytherin'),
  $Reset = document.getElementById('Reset')

let filter = ''

const getCharacters = async (filter) => {
  try {
    const res = await fetch(
      `https://hp-api.onrender.com/api/characters${filter}`
    )
    const data = await res.json()

    let characterList = ''

    data.forEach((character) => {
      characterList += `
        <div class="character__container ${
          character.house ? character.house : 'no-house'
        }">
          <h3 class="character__name">${character.name}</h3>
          <p class="character__alias"><b>${
            character.alternate_names[0] ? character.alternate_names[0] : ''
          }</b></p>
          <img src="${
            character.image ? character.image : './assets/nophoto.jpg'
          }" alt="image of ${character.name}" class="character__img">
          <div class="character__house">${character.house}</div>
        </div>
      `
    })

    $charactersTable.innerHTML = characterList
  } catch (error) {
    console.log(error)
  }
}

getCharacters(filter)

window.addEventListener('input', (e) => {
  let $charactersName = document.querySelectorAll('.character__name'),
    regExp,
    searchbarContent

  if (e.target == $searchBar) {
    searchbarContent = $searchBar.value
    regExp = new RegExp(`${searchbarContent}`, 'gi')
  }

  $charactersName.forEach((el) => {
    if (!regExp.test(el.textContent))
      el.parentElement.style.setProperty('display', 'none')
    else el.parentElement.style.setProperty('display', 'flex')
  })
})

window.addEventListener('click', (e) => {
  if (e.target == $Gryffindor) {
    filter = '/house/gryffindor'
    getCharacters(filter)
  }

  if (e.target == $Slytherin) {
    filter = '/house/slytherin'
    getCharacters(filter)
  }

  if (e.target == $Hufflepuff) {
    filter = '/house/hufflepuff'
    getCharacters(filter)
  }

  if (e.target == $Ravenclaw) {
    filter = '/house/ravenclaw'
    getCharacters(filter)
  }

  if (e.target == $Reset) {
    filter = ''
    getCharacters(filter)
  }
})

/* CLICK EVENT first method
window.addEventListener('click', (e) => {
  let $characterHouse = document.querySelectorAll('.character__house'),
    regExpHouse

  if (e.target == $Gryffindor) {
    //si no coincide con Gryffindor en character.casa, ocultar las demás casas
    searchbarContent = $searchBar.value
    regExpHouse = new RegExp('Gryffindor', 'gi')

    $characterHouse.forEach((el) => {
      if (!regExpHouse.test(el.textContent))
        el.parentElement.style.setProperty('display', 'none')
      else el.parentElement.style.setProperty('display', 'flex')
    })
  } else if (e.target == $Hufflepuff) {
    //si no coincide con Hufflepuff en character.casa, ocultar las demás casas
    searchbarContent = $searchBar.value
    regExpHouse = new RegExp('Hufflepuff', 'gi')

    $characterHouse.forEach((el) => {
      if (!regExpHouse.test(el.textContent))
        el.parentElement.style.setProperty('display', 'none')
      else el.parentElement.style.setProperty('display', 'flex')
    })
  } else if (e.target == $Ravenclaw) {
    //si no coincide con Ravenclaw en character.casa, ocultar las demás casas
    searchbarContent = $searchBar.value
    regExpHouse = new RegExp('Ravenclaw', 'gi')

    $characterHouse.forEach((el) => {
      if (!regExpHouse.test(el.textContent))
        el.parentElement.style.setProperty('display', 'none')
      else el.parentElement.style.setProperty('display', 'flex')
    })
  } else if (e.target == $Slytherin) {
    //si no coincide con Slytherin en character.casa, ocultar las demás casas
    searchbarContent = $searchBar.value
    regExpHouse = new RegExp('Slytherin', 'gi')

    $characterHouse.forEach((el) => {
      if (!regExpHouse.test(el.textContent))
        el.parentElement.style.setProperty('display', 'none')
      else el.parentElement.style.setProperty('display', 'flex')
    })
  } else if (e.target == $Reset) {
    //Mostar todas las cartas
    $characterHouse.forEach((el) => {
      el.parentElement.style.setProperty('display', 'flex')
    })
  }
})
*/

/* CHARACTER MAIN INFO
  {
    "id": "9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8",
    "name": "Harry Potter",
    "alternate_names": [
      "The Boy Who Lived",
      "The Chosen One",
      "Undesirable No. 1",
      "Potty"
    ],
    "house": "Gryffindor",
    "image": "https://ik.imagekit.io/hpapi/harry.jpg"
  }, */
