// import { useEffect, useState } from 'react';
// import { PokemonData } from '../../types/types';
// import { Pokemon, PokemonClient } from 'pokenode-ts';
import { capitalizeFirstLetter } from '../../utils/utils';
import styles from './PokemonItem.module.css';
import { Pokemon } from 'pokenode-ts';

type PokemonItemProps = {
    pokemon: Pokemon;
};

export default function PokemonItem(props: PokemonItemProps) {
    const pokemon = props.pokemon;

    return (
        <div className={styles.pokemon_item}>
            <h3>{capitalizeFirstLetter(pokemon.name)}</h3>
            <div>Id: {pokemon.id}</div>
            <div>Height: {pokemon.height}</div>
            <img src={pokemon.sprites.front_default || ''}></img>
        </div>
    );
}
