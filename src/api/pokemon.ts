import { typeTranslate } from "../util/typeTranslate";
import { httpClient } from "./http";

export interface PokemonSpeciesResponse {
  names: { name: string; language: { name: string } }[];
}

interface Sprites {
  other: {
    "official-artwork": {
      front_default: string;
    };
  };
}

interface PokemonResponse {
  sprites: Sprites;
}

export const getPokemonName = async (id: number) => {
  const response = await httpClient.get<PokemonSpeciesResponse>(
    `pokemon-species/${id}`
  );
  return response.data.names.filter((name) => name.language.name === "ko")[0]
    .name;
};

export const getPokemonType = async (id: number) => {
  const response = await httpClient.get<{
    types: { type: { name: string } }[];
  }>(`pokemon/${id}`);
  return response.data.types.map((type) => typeTranslate(type.type.name));
};

export const getPokemonImage = async (id: number) => {
  const response = await httpClient.get<PokemonResponse>(`pokemon/${id}`);
  return response.data.sprites.other["official-artwork"].front_default;
};
