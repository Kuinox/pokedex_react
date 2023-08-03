import React from 'react';

function convertToRoman(num) {
    const romanNumerals = [
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
        "X",
        "XI",
        "XII",
        "XIII",
        "XIV",
        "XV",
        "XVI",
        "XVII",
        "XVIII",
        "XIX",
        "XX",
    ];

    return romanNumerals[num - 1];
}

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
                    <div className="genList">
                        {props.generations.map((g, i) => <span key={i} className={`gen${g}`}>{convertToRoman(g)}</span>)}
                    </div>
                    <img src={imgSrc} alt={"Sprite of the pokemon " + pokemonName + "."} loading="lazy" />
                    <span>#{props.pokemonId}</span>
                    <span>{pokemonName}</span>
                    <ul className="typeList">
                        {props.types.map((t, i) => <li key={i} className={t}>{t}<img className='typeIcon' src={`${t}.png`} alt={`${t} icon.`} /></li>)}
                    </ul>
                    <br />
                </div>
            </button>
        </li>
    );
}

export default SearchResult;
