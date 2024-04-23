import { useEffect, useState } from 'react';
import PokemonItem from './PokemonItem';
import { NamedAPIResource, PokemonClient } from 'pokenode-ts';
import styles from './PokemonList.module.css';

export default function PokemonList() {
    const [pokemons, setPokemons] = useState<NamedAPIResource[]>([]);

    async function loadData() {
        const api = new PokemonClient();
        const pokemonData = await api.listPokemons();
        const results = pokemonData.results;
        setPokemons(results);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className={styles.pokemon_list}>
            {pokemons.map((pokemon, index) => (
                <PokemonItem
                    key={index}
                    name={pokemon.name}
                    url={pokemon.url}
                />
            ))}
        </div>
    );
}
