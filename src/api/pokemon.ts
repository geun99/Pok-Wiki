import { ImageResponse, PokemonSpeciesResponse } from "../types/pokemon.types";
import { httpClient } from "./http";

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
  return response.data.types.map((type) => type.type.name);
};

export const getPokemonImage = async (id: number) => {
  const response = await httpClient.get<ImageResponse>(`pokemon/${id}`);
  return response.data.sprites.other["official-artwork"].front_default;
};
