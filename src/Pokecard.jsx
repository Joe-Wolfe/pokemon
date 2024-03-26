import React from 'react';
import './Pokecard.css';

function Pokecard({ id, name, type, base_experience }) {
    console.log(id);
    return (
        <div className="Pokecard">
            <h1 className="Pokecard-title">{name}</h1>
            <img className="Pokecard-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
            <p>Type: {type}</p>
            <p>EXP: {base_experience}</p>
        </div>
    )
}

export default Pokecard;