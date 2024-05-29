export interface Genera {
  genus: string;
  language: {
    name: string;
    url: string;
  };
}

export interface PokemonSpeciesResponse {
  genera: Genera[];
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
      url: string;
    };
  }[];
}

export interface PokemonResponse {
  height: number;
  weight: number;
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  sprites: Sprites;
}

export interface PokemonDetails {
  genera: string;
  height: number;
  weight: number;
  flavor_text_entries: string;
  stats: number[];
  sprites: string;
}

export interface PokemonSpeciesResponse {
  names: { name: string; language: { name: string } }[];
}

export interface Sprites {
  other: {
    "official-artwork": {
      front_default: string;
    };
  };
}

export interface ImageResponse {
  sprites: Sprites;
}
