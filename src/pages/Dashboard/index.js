import React, { Component } from 'react';

import '../../styles/Dashboard.css';

import { Container, Row } from 'react-bootstrap';

import TopBar from '../../components/TopBar';
import PokemonList from '../../components/PokemonsList';

class Dashboard extends Component {
  state = {
    pokemons: [
      {
        name: 'Bulbasaur',
        photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        attack: 49,
        defense: 49,
      },
      {
        name: 'Charmander',
        photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
        attack: 52,
        defense: 43,
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
