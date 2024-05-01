import { AxiosError } from 'axios';
import { Pokemon, PokemonClient } from 'pokenode-ts';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type SearchBarProps = {
    pokemons: Pokemon[];
    setPokemons: Dispatch<SetStateAction<Pokemon[]>>;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
};

export default function SearchBar(props: SearchBarProps) {
    const { setPokemons, setIsLoading } = props;
    const api = new PokemonClient();
    const storedRequest = localStorage.getItem('requestString');
    const [requestString, setRequestString] = useState(storedRequest || '');

    const handleClick = () => {
        saveRequestString();
        loadData();
    };

    const loadData = async () => {
        setPokemons([]);
        setIsLoading(true);

        if (requestString) {
            await getPokemon();
        } else {
            await getPokemonsList();
        }
    };

    const getPokemon = async () => {
        try {
            const data = await api.getPokemonByName(
                requestString.toLowerCase()
            );
            setPokemons([data]);
        } catch (e) {
            if (e instanceof AxiosError) {
                console.error(e.message);
                if (e.response?.status === 404) {
                    console.log(e.response.data);
                }
            } else {
                throw e;
            }
        } finally {
            setIsLoading(false);
        }
    };

    const getPokemonsList = async () => {
        const pokemonPromiseArr: Promise<Pokemon>[] = [];
        try {
            const data = await api.listPokemons();

            data.results.forEach((item) => {
                const result = api.getPokemonByName(item.name);
                pokemonPromiseArr.push(result);
            });
        } catch (e) {
            if (e instanceof AxiosError) {
                console.error(e.message);
            } else {
                throw e;
            }
        } finally {
            try {
                const promises = await Promise.allSettled(pokemonPromiseArr);
                promises.forEach((promise) => {
                    if (promise.status === 'fulfilled') {
                        setPokemons((pokemons) => [...pokemons, promise.value]);
                    }
                });
            } catch {
                console.error('OOps I did it again');
            } finally {
                setIsLoading(false);
            }
        }
    };

    const saveRequestString = () => {
        localStorage.setItem('requestString', requestString);
    };

    useEffect(() => {
        loadData();
    }, []);

    const test = () => {
        setPokemons([]);
    };

    return (
        <div>
            <input
                type="text"
                value={requestString}
                placeholder="Enter pokemon name"
                onChange={(e) => setRequestString(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleClick();
                    }
                }}
            />
            <button onClick={handleClick}>Search</button>
            <button onClick={test}>Clear</button>
        </div>
    );
}
