import React from 'react';

const TopBar = ({ searchEvent }) => {
    const inputChange = (event) => {
        searchEvent(event.target.value);
    }
    
    return (
        <div className='topBar'>
            <header>
                <nav>
                    <span>Kuinox's Pokedex</span>
                    <input
                        type="text"
                        onChange={inputChange}
                        placeholder="Search…"
                        aria-label='search'
                    />
                    <div id="frameDropped"></div>
                </nav>
            </header>
        </div>
    );
}

export default TopBar;
