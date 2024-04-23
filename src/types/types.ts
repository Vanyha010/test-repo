export type PokemonData = {
    name: string;
    url: string;
};

export type PokemonResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonData[];
};

export type Pokemon = {
    abilities: [];
    base_experience: number;
    cries: object;
    forms: [];
    game_indices: [];
    height: number;
    held_items: [];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: [];
    name: string;
    order: number;
    past_abilities: [];
    past_types: [];
    species: object;
    sprites: object;
    stats: [];
    types: [];
    weight: number;
};
