import { useEffect, useState } from 'react';
import { PokemonData } from '../types/types';
import { Pokemon, PokemonClient } from 'pokenode-ts';
import { capitalizeFirstLetter } from '../utils/utils';

export default function PokemonItem(props: PokemonData) {
    const [pokemonData, setPokemonData] = useState<Pokemon>();

    async function loadData() {
        const api = new PokemonClient();
        try {
            const data = await api.getPokemonByName(`${props.name}1`);
            setPokemonData(data);
        } catch (err) {
            try {
                throw new Error('Failed in some way', { cause: err });
            } catch (e) {
                if (e instanceof Error) {
                    console.error(e.cause);
                }
            }
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <h3>{capitalizeFirstLetter(props.name)}</h3>
            {pokemonData ? (
                <>
                    <div>Id: {pokemonData.id}</div>
                    <div>Height: {pokemonData.height}</div>
                    <img src={pokemonData.sprites.front_default || ''}></img>
                </>
            ) : (
                <></>
            )}
        </div>
    );
}
