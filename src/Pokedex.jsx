import React from 'react';
import Pokecard from './Pokecard';

function Pokedex({ pokemonList }) {
    return (
        <tr className="pokedex">
            {pokemonList.map((pokemon) => (
                <td>
                    <Pokecard id={pokemon.id} name={pokemon.name} type={pokemon.type} base_experience={pokemon.base_experience} />
                </td>
            ))}
        </tr>
    );
}

export default Pokedex;