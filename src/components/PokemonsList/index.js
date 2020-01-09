import React from 'react';
import PropTypes from 'prop-types';

import Pokemon from '../Pokemon';

const PokemonList = (props) => {
  const {
    pokemons,
  } = props;

  return (
    pokemons.map((data) => {
      const {
        id,
        photo,
        name,
        attack,
        defense,
      } = data;

      return (
        <Pokemon
          key={id}
          photo={photo}
          name={name}
          attack={attack}
          defense={defense}
        />
      );
    })
  );
};

PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    photo: PropTypes.string,
    attack: PropTypes.number,
    defense: PropTypes.number,
  })),
};

PokemonList.defaultProps = {
  pokemons: [],
};

export default PokemonList;
