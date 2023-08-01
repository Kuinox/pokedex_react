import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializePokemonStore } from "@kuinox/pokedex.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
initializePokemonStore(process.env.PUBLIC_URL).then((pokeStore) => {
  root.render(
    <React.StrictMode>
      <App pokeStore={pokeStore} />
    </React.StrictMode>
  );
});

