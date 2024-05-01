import { useState } from 'react';
import PokemonList from '../components/PokemonList/PokemonList';
import SearchBar from '../components/SearchBar/SearchBar';
import { Pokemon } from 'pokenode-ts';
import NotFound from '../components/NotFound/NotFound';
import Loader from '../components/Loader/Loader';
// import { Suspense } from 'react';

const SearchPage = function () {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div>
            <SearchBar
                pokemons={pokemons}
                setPokemons={setPokemons}
                setIsLoading={setIsLoading}
            ></SearchBar>
            {isLoading ? (
                <Loader></Loader>
            ) : pokemons.length ? (
                <PokemonList pokemons={pokemons}></PokemonList>
            ) : (
                <NotFound />
            )}
            {/* {isLoading && <Loader />}

            {!isLoading && pokemons.length > 0 && (
                
            )}

            {!isLoading && pokemons.length === 0 && <NotFound />} */}
            {/* {pokemons.length ? (
                <Suspense fallback={<Loader />}>
                    <PokemonList pokemons={pokemons} />
                </Suspense>
            ) : (
                <NotFound></NotFound>
            )} */}
            {/* <Suspense fallback={<Loader />}>
                {pokemons.length ? (
                    <PokemonList pokemons={pokemons} />
                ) : (
                    <NotFound></NotFound>
                )}
            </Suspense> */}
        </div>
    );
};

export default SearchPage;
