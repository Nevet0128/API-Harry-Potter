const URL = "https://hp-api.onrender.com/api/characters",
  res = await fetch(URL),
  $charactersTable = document.getElementById("table__characters"),
  $searchBar = document.getElementById("search-bar"),
  $Gryffindor = document.getElementById("Gryffindor"),
  $Hufflepuff = document.getElementById("Hufflepuff"),
  $Ravenclaw = document.getElementById("Ravenclaw"),
  $Slytherin = document.getElementById("Slytherin");

let characterList = '';

const data = await res.json()
  
data.forEach(character => {
  characterList += `
    <div class="character__container ${character.house}">
      <h3 class="character__name">${character.name}</h3>
      <p class="character__alias"><b>${character.alternate_names[0] ? character.alternate_names[0] : 'no alternative name'}</b></p>
      <img src="${character.image
      ? character.image
      : './assets/nophoto.jpg'}" alt="image of ${character.name}" class="character__img">
      <div class="character__house">${character.house}</div>
    </div>
  `
})

$charactersTable.innerHTML = characterList;


let $charactersName = document.querySelectorAll(".character__name"),
  $characterHouse = document.querySelectorAll(".character__house"),
  regExp,
  regExpHouse,
  searchbarContent;

window.addEventListener("input", e => {
  if (e.target == $searchBar) {
    searchbarContent = $searchBar.value;
    regExp = new RegExp(`${searchbarContent}`, "gi");
  }

  $charactersName.forEach((el) => {
        if (!regExp.test(el.textContent))
          el.parentElement.style.setProperty("display", "none");
        else el.parentElement.style.setProperty("display", "flex");
      });
})

window.addEventListener("click", e => {
  if (e.target == $Gryffindor) {
    //si no coincide con Gryffindor en character.casa, ocultar las demás casas
    searchbarContent = $searchBar.value;
    regExpHouse = new RegExp("Gryffindor", "gi");

  $characterHouse.forEach((el) => {
        if (!regExpHouse.test(el.textContent))
          el.parentElement.style.setProperty("display", "none");
        else el.parentElement.style.setProperty("display", "flex");
  });
  } else if (e.target == $Hufflepuff) {
    //si no coincide con Hufflepuff en character.casa, ocultar las demás casas
    
    searchbarContent = $searchBar.value;
    regExpHouse = new RegExp("Hufflepuff", "gi");

  $characterHouse.forEach((el) => {
        if (!regExpHouse.test(el.textContent))
          el.parentElement.style.setProperty("display", "none");
        else el.parentElement.style.setProperty("display", "flex");
  });
  } else if (e.target == $Ravenclaw) {
    //si no coincide con Ravenclaw en character.casa, ocultar las demás casas
    
    searchbarContent = $searchBar.value;
    regExpHouse = new RegExp("Ravenclaw", "gi");

  $characterHouse.forEach((el) => {
        if (!regExpHouse.test(el.textContent))
          el.parentElement.style.setProperty("display", "none");
        else el.parentElement.style.setProperty("display", "flex");
  });
  } else if (e.target == $Slytherin) {
    //si no coincide con Slytherin en character.casa, ocultar las demás casas
    searchbarContent = $searchBar.value;
    regExpHouse = new RegExp("Slytherin", "gi");

  $characterHouse.forEach((el) => {
        if (!regExpHouse.test(el.textContent))
          el.parentElement.style.setProperty("display", "none");
        else el.parentElement.style.setProperty("display", "flex");
  });
  }
})

/*{
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