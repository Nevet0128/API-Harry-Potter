const URL = "https://hp-api.onrender.com/api/characters",
  res = await fetch(URL),
  $charactersTable = document.getElementById("table__characters"),
  $searchBar = document.getElementById("search-bar"),
  $Gryffindor = document.getElementById("Gryffindor"),
  $Hufflepuff = document.getElementById("Hufflepuff"),
  $Ravenclaw = document.getElementById("Ravenclaw"),
  $Slytherin = document.getElementById("Slytherin");

let characterList = ''

//console.log(res)
const data = await res.json()
//console.log(data)
  
data.forEach(character => {
  characterList += `
    <div class="character__container ${character.house}">
      <h3 class="character__name">${character.name}</h3>
      <p class="character__alias"><b>${character.alternate_names[0] ? character.alternate_names[0] : 'no alternative name'}</b></p>
      <img src="${character.image
      ? character.image
      : 'https://media.istockphoto.com/id/515930993/es/vector/hombre-con-cabeza-y-hombros-silueta-vector-excalmation-marca.jpg?s=2048x2048&w=is&k=20&c=LUD97wROC8BOFuSiC3hGVFeqRrFrEBg_WijmEnyplOQ=' }" alt="image of ${character.name}" class="character__img">
    </div>
  `
})

$charactersTable.innerHTML = characterList;



window.addEventListener("keypress", e => {
  if (e.target == $searchBar) {
    let search = `\${$searchBar.value\}`;
    //Loop de todas las cartas si no coindice el nombre, poner una clase para ocultarlo con css
    $searchBar.value += e.key;
  }
})

window.addEventListener("click", e => {
  if (e.target == $Gryffindor) {
    //si no coincide con Gryffindor en character.casa, ocultar las demás casas
  } else if (e.target == $Hufflepuff) {
    //si no coincide con Hufflepuff en character.casa, ocultar las demás casas
  } else if (e.target == $Ravenclaw) {
    //si no coincide con Ravenclaw en character.casa, ocultar las demás casas
  } else if (e.target == $Slytherin) {
    //si no coincide con Slytherin en character.casa, ocultar las demás casas
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