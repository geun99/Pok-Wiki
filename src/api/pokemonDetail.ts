import {
  PokemonDetails,
  PokemonResponse,
  PokemonSpeciesResponse,
} from "../types/pokemon.types";
import { httpClient } from "./http";

export const getPokemonDetails = async (
  id: number
): Promise<PokemonDetails> => {
  const [speciesResponse, pokemonResponse] = await Promise.all([
    httpClient.get<PokemonSpeciesResponse>(`pokemon-species/${id}`),
    httpClient.get<PokemonResponse>(`pokemon/${id}`),
  ]);

  const krText = speciesResponse.data.flavor_text_entries.filter(
    (entry) => entry.language.name === "ko"
  );

  const enText = speciesResponse.data.flavor_text_entries.filter(
    (entry) => entry.language.name === "en"
  );

  return {
    genera: speciesResponse.data.genera[1].genus,
    height: pokemonResponse.data.height,
    weight: pokemonResponse.data.weight,
    flavor_text_entries:
      krText.length > 0 ? krText[0].flavor_text : enText[0].flavor_text,
    stats: pokemonResponse.data.stats.map((stat) => stat.base_stat),
    sprites:
      pokemonResponse.data.sprites.other["official-artwork"].front_default,
  };
};
