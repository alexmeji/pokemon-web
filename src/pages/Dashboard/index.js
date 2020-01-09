import React, { Component } from 'react';

import '../../styles/Dashboard.css';

import { Container, Row } from 'react-bootstrap';

import TopBar from '../../components/TopBar';
import PokemonList from '../../components/PokemonsList';

class Dashboard extends Component {
  state = {
    pokemons: [
      {
        id: 1,
        name: 'Bulbasaur',
        photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        attack: 49,
        defense: 49,
      },
      {
        id: 4,
        name: 'Charmander',
        photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
        attack: 52,
        defense: 43,
      },
      {
        id: 7,
        name: 'Squirtle',
        photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
        attack: 48,
        defense: 65,
      },
      {
        id: 25,
        name: 'Pikachu',
        photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        attack: 55,
        defense: 40,
      },
    ],
  };

  render() {
    const { pokemons } = this.state;

    return (
      <>
        <TopBar />
        <Container className="pokemons-container">
          <Row>
            <PokemonList pokemons={pokemons} />
          </Row>
        </Container>
      </>
    );
  }
}

export default Dashboard;
