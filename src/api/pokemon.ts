import { ImageResponse, PokemonSpeciesResponse } from "../types/pokemon.types";
import { httpClient } from "./http";

export const getPokemonName = async (id: number) => {
  const response = await httpClient.get<PokemonSpeciesResponse>(
    `pokemon-species/${id}`
  );
  const names = response.data.names;
  const nameKo = names.find((name) => name.language.name === "ko");
  const nameEn = names.find((name) => name.language.name === "en");

  return nameKo?.name || nameEn?.name || "Unknown";
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

interface Pokemon {
  pokemon: {
    name: string;
    url: string;
  };
}

interface PokemonResponse {
  pokemon: Pokemon[];
  next: string | null;
}

export const getIdByType = async (typeId: number) => {
  let allPokemonIds: number[] = [];
  let nextPageUrl: string | null = `type/${typeId}`;

  while (nextPageUrl) {
    const response: { data: PokemonResponse } =
      await httpClient.get<PokemonResponse>(nextPageUrl);

    const pokemonUrls = response.data.pokemon.map(
      (pokemon: { pokemon: { url: string } }) => {
        const urlParts = pokemon.pokemon.url.split("/");
        return Number(urlParts[urlParts.length - 2]);
      }
    );

    allPokemonIds = allPokemonIds.concat(pokemonUrls.filter((id) => id < 2000));

    nextPageUrl = response.data.next;
  }

  return allPokemonIds;
};
