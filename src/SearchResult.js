import React from 'react';

const SearchResult = (props) => {
    const pokemonName = props.pokemonName;

    const clicked = () => {
        props.onClick(props.pokemonId);
    }
    let imgSrc = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + props.pokemonId + ".png";
    return (
        <li className="pokeEntry">
            <button onClick={clicked} className={props.color}>
                <div className="buttonContent">
                    <img src={imgSrc} alt={"Sprite of the pokemon " + pokemonName + "."} loading="lazy" />
                    <span>#{props.pokemonId}</span>
                    <span>{pokemonName}</span>
                    <ul className="typeList">
                        {props.types.map((t, i) => <li key={i} className={t}>{t}<img className='typeIcon' src={`${t}.png`} /></li>)}
                    </ul>
                    <br />
                </div>
            </button>
        </li>
    );
}

export default SearchResult;
