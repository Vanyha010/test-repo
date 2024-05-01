import PokemonItem from '../PokemonItem/PokemonItem';
import { Pokemon } from 'pokenode-ts';
import styles from './PokemonList.module.css';

type PokemonListProps = {
    pokemons: Pokemon[];
};

export default function PokemonList(props: PokemonListProps) {
    return (
        <div className={styles.pokemon_list}>
            {props.pokemons.map((pokemon) => (
                <PokemonItem key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    );
}
