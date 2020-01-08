import React from 'react';

import '../../styles/Pokemon.css';

import { Card } from 'react-bootstrap';

const Pokemon = (props) => (
  <Card className="pokemon-card">
    <Card.Img variant="top" src={props.data.photo} />
    <Card.Body>
      <Card.Title>{props.data.name}</Card.Title>
      <ul>
        <li>Ataque: {props.data.attack}</li>
        <li>Defensa: {props.data.defense}</li>
      </ul>
    </Card.Body>
  </Card>
);

export default Pokemon;
