let pokemonRepository = (function () {

  let pokemonList = [{
      name: "Squirtle",
      height: 0.5,
      type: ["water", " dark", " normal"]
    },
    {
      name: "Arbok",
      height: 3.5,
      type: ["poison", " fire", " ice"]
    },
    {
      name: "Arcanine",
      height: 1.9,
      type: [" fire", " fairy", " steel"]
    },
    {
      name: "Krabby",
      height: 0.4,
      type: [" water", " grass", " electric"]
    }
  ];
 
  function getAll() {
    return pokemonList;
  }
  
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function addListItem(pokemon) {
    let newPokemonList = document.querySelector(".pokemon-list");
    let listItemPokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    button.addEventListener('click', function () {
      let showDetails = `Name: ${pokemon.name}
    Height: ${pokemon.height}
    Type: ${[...pokemon.type]}`
      console.log(showDetails);
    });
    listItemPokemon.appendChild(button);
    newPokemonList.appendChild(listItemPokemon);
  };

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem
  };

})();

pokemonRepository.add({
  name: "Charizard",
  height: 4.2,
  type: [" land", " poison", " magic"]
});

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});