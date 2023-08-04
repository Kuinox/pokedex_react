import React, { useState } from 'react';
import TopBar from './TopBar';
import PokemonListDisplay from "./PokemonListDisplay";

const App = ({ pokeStore }) => {
  const [searchInput, setSearchInput] = useState("");
  const [currentPokemon, setCurrentPokemon] = useState("");

  return (
    <div className="App">
      <TopBar searchEvent={setSearchInput} />
      <PokemonListDisplay
        pokeStore={pokeStore}
        getSearchText={() => searchInput}
        pokemonChoosedCallback={setCurrentPokemon} />
    </div>
  );
}

export default App;
