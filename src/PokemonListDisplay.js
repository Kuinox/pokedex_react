import React, { useState, useEffect } from 'react';
import SearchResult from "./SearchResult";

const PokemonListDisplay = ({ pokeStore, searchText, pokemonChoosedCallback }) => {
    const [pokeListCache, setPokeListCache] = useState([]);

    useEffect(() => {
        setPokeListCache(pokeStore.getPokemonsWithId());
    }, [pokeStore]);
    const onClick = (id) => {
        pokemonChoosedCallback(id);
    }
    const searchPokemon = () => {
        let text = searchText;
        return (
            <div className="pokeList">
                {
                    pokeListCache
                        .map((p) => <SearchResult
                            hidden={p.name.match(new RegExp(".*" + text + ".*"))}
                            pokemonId={p.id}
                            pokemonName={p.name}
                            color={p.color}
                            generations={p.generations}
                            onClick={onClick}
                            types={p.types}
                        />)
                }
            </div>
        )
    }

    return (<ul className="pokeListUl">{searchPokemon()}</ul>);
}

export default PokemonListDisplay;
