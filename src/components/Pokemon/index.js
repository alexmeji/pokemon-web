import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/Pokemon.css';

import { Card } from 'react-bootstrap';

const Pokemon = (props) => {
  const {
    photo,
    name,
    attack,
    defense,
  } = props;

  return (
    <Card className="pokemon-card">
      <Card.Img variant="top" src={photo} />
      <Card.Body className="pokemon-card-body">
        <Card.Title className="pokemon-card-title">{name}</Card.Title>
        <ul>
          <li>
            Ataque:
            {attack}
          </li>
          <li>
            Defensa:
            {defense}
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
};

Pokemon.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  attack: PropTypes.number,
  defense: PropTypes.number,
};

Pokemon.defaultProps = {
  photo: '',
  name: 'Default Pokemon',
  attack: 10,
  defense: 10,
};

export default Pokemon;
