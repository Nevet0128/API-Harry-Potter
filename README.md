1. Consumir la API https://hp-api.onrender.com/api/characters

2. Mostrar la ficha de presentación de cada uno de los personajes con la información más representativa. Para la elaboración de las fichas puede hacer uso de bootstrap, materialize o cualquier otra librería externa, en su defecto mostrarlo a forma de tabla.

3. Para los personajes que no cuenten con imagen, asignar una por defecto.
*Una vez obtenidas las fichas de todos  los personajes, será posible hacer un filtro de búsqueda mediante una caja de texto u opciones predefinidas.

4. Implementar un filtro de búsqueda que sólo muestre las coincidencias con base al texto mostrado en las fichas.

5. Utilizando un Select mostrar sólo las fichas que cumplan con el criterio seleccionado. Ejemplo: Gryffindor, Hufflepuff, Ravenclaw y Slytherin.



Ejercicio B

1. Consumir la API https://pokeapi.co/api/v2/pokemon/${param}, donde param puede tomar el valor de "id" o "name" del pokemon.

2. Crear una interfaz que dé al usuario la opción de hacer la búsqueda por id de manera aleatoria (Considerar un rango del 1 al 150) o por nombre. Ejemplos:
Búsqueda por id: https://pokeapi.co/api/v2/pokemon/132
Búsqueda por nombre: https://pokeapi.co/api/v2/pokemon/ditto

3. Mostrar la ficha del pokémon con la información más representativa. Para la elaboració
Para la elaboración de la ficha puede hacer uso de bootstrap, materialize o cualquier otra librería externa, en su defecto elaborarla nativamente con HTML y CSS.

4. Colocar un botón para que despliegue más información detallada del pokémon (puede ser en un modal o una nueva página).

5. Colocar un botón para añadir el pokemon a una tabla, si el usuario así lo desea, se generará una fila dinámicamente por cada criatura añadida (Un máximo de 6).  Sí el pokémon que se desea añadir ya existe en la
Sí el pokémon que se desea añadir ya existe en la tabla, éste  no se insertará.


{
    "id": "9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8",
    "name": "Harry Potter",
    "alternate_names": [
      "The Boy Who Lived",
      "The Chosen One",
      "Undesirable No. 1",
      "Potty"
    ],
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "31-07-1980",
    "yearOfBirth": 1980,
    "wizard": true,
    "ancestry": "half-blood",
    "eyeColour": "green",
    "hairColour": "black",
    "wand": {
      "wood": "holly",
      "core": "phoenix tail feather",
      "length": 11
    },
    "patronus": "stag",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Daniel Radcliffe",
    "alternate_actors": [],
    "alive": true,
    "image": "https://ik.imagekit.io/hpapi/harry.jpg"
  },