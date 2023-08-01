import React from 'react';

const PokemonInfoDisplay = ({ pokeStore, pokemonId, onClose }) => {
    if(pokemonId === "") return;
    const stats = pokeStore.getStatsWithId(pokemonId);
    const color = pokeStore.getPokemonColor(pokemonId);
    let imgSrc = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemonId + ".png";
    const handleClickOutside = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }
    return (
        <div className="modal" onClick={handleClickOutside}>
            <div className={`modal-content ${color}`}>
                <span className="close" onClick={onClose}>&times;</span>
                <h3>Pokemon Stats</h3>
                <img src={imgSrc} alt="Pokemon sprite" />
                <ul>
                    {stats.map((stat, i) => 
                        <li key={i}>
                            {stat.statsName}: {stat.value}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default PokemonInfoDisplay;
