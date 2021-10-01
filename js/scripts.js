let pokemonList = [{
        name: 'Bulbasaur',
        height: 7,
        types: ['grass', 'poison']
    },
    {
        name: 'Charmander',
        height: 0.5,
        types: ['fire', 'dragon']
    },
    {
        name: 'Pikachu',
        height: 1.1,
        types: ['electricity']
    }
];

for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 1)
    {
         document.write(`${pokemonList[i].name} (${pokemonList[i].height}) Wow that's big <br>`)
    }
    else
    {
         document.write(`${pokemonList[i].name} (${pokemonList[i].height}) <br>`)
    }
}
