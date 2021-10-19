let pokemonRepository = (function () {
  function pokemonListFromExternalSource() {
    const apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let pokemonList = [];
    fetch(apiURL)
      .then(response => response.json())
      .then(response => {
        pokemonList = response.results;
        pokemonList.forEach(pokemon => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
              .then(response => response.json())
              .then(response => {
                let pokemonDetails = `Height: ${response.height},
             Name: ${pokemon.name}, Image: ${response.sprites.front_shiny}`;
                console.log(pokemonDetails)
              })
              .catch(err => console.error(err))
          });
        })
      .catch(error => console.log(error))
  }

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function main() {
    pokemonRepository.pokemonListFromExternalSource()
  }

  //adding the return statement
  return {
    getAll: getAll,
    add: add,
    main: main,
    pokemonListFromExternalSource: pokemonListFromExternalSource
  };

})();


pokemonRepository.main();
