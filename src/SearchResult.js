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
        <li className={props.hidden ? "pokeEntry" : "pokeEntry hidden"}>
            <button onClick={clicked} className={props.color}>
                <div className="buttonContent">
                    <div className="genList">
                        {props.generations.map((g, i) => <span key={i} className={`gen${g}`}>{convertToRoman(g)}</span>)}
                    </div>
                    <img src={imgSrc} className="sprite" alt={"Sprite of the pokemon " + pokemonName + "."} loading="lazy" />
                    <span className="pokemonId"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H347.1L325.8 320H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H315.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7H155.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320h95.1l21.3-128H187.1z"/></svg>{props.pokemonId}</span>
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
