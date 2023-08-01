import React, { useState, useEffect } from 'react';
import SearchResult from "./SearchResult";

const PokemonListDisplay = ({ classes, pokeStore, getSearchText, pokemonChoosedCallback }) => {
    const [pokeListCache, setPokeListCache] = useState([]);

    useEffect(() => {
        setPokeListCache(pokeStore.getPokemonsWithId());
    }, [pokeStore]);
    const onClick = (id) => {
        pokemonChoosedCallback(id);
    }
    const searchPokemon = () => {
        let text = getSearchText();
        return (
            <div className="pokeList">
                {
                    pokeListCache
                        .filter(p => p.name.match(new RegExp(".*" + text + ".*")))
                        .map((p) => <SearchResult pokeStore={pokeStore} pokemonId={p.id} key={p.id} pokemonName={p.name} color={p.color} onClick={onClick} types={p.types}/>)
                }
            </div>
        )
    }

    return (<ul>{searchPokemon()}</ul>);
}

export default PokemonListDisplay;
