import React from 'react';

import Pokemon from '../Pokemon';

const PokemonList = (props) => (
  props.pokemons.map((data) => (
    <Pokemon data={data} />
  ))
);

export default PokemonList;
