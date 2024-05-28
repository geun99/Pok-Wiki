import { httpClient } from "./http";

interface Genera {
  genus: string;
  language: {
    name: string;
    url: string;
  };
}

interface PokemonSpeciesResponse {
  genera: Genera[];
}

export const getPokemonGenera = async (id: number) => {
  const response = await httpClient.get<PokemonSpeciesResponse>(
    `pokemon-species/${id}`
  );
  return response.data.genera[1].genus;
};

export const getHeight = async (id: number) => {
  const response = await httpClient.get<{
    height: number;
  }>(`pokemon/${id}`);
  return response.data.height;
};

export const getWeight = async (id: number) => {
  const response = await httpClient.get<{
    weight: number;
  }>(`pokemon/${id}`);
  return response.data.weight;
};

export const getFlavorText = async (id: number) => {
  const response = await httpClient.get<{
    flavor_text_entries: {
      flavor_text: string;
      language: {
        name: string;
        url: string;
      };
    }[];
  }>(`pokemon-species/${id}`);

  const krText = response.data.flavor_text_entries.filter(
    (entry) => entry.language.name === "ko"
  );

  const enText = response.data.flavor_text_entries.filter(
    (entry) => entry.language.name === "en"
  );

  return krText.length > 0 ? krText[0].flavor_text : enText[0].flavor_text;
};

export const getStats = async (id: number): Promise<number[]> => {
  const response = await httpClient.get<{
    stats: {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    }[];
  }>(`pokemon/${id}`);

  const baseStats = response.data.stats.map((stat) => stat.base_stat);

  return baseStats;
};
