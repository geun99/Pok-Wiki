import { useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { httpClient } from "../../api/http";
import {
  getPokemonImage,
  getPokemonName,
  getPokemonType,
} from "../../api/pokemon";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";
import TypeButtons from "./TypeButtons";
import Input from "../Common/Input";

interface PokemonItem {
  id: number;
  name: string;
  type: string[];
  image: string;
}

interface PokemonResponse {
  items: PokemonItem[];
  nextPage?: number;
}

const fetchPokemonItems = async ({
  pageParam = 1,
}: {
  pageParam?: number;
}): Promise<PokemonResponse> => {
  const limit = 18;
  const offset = (pageParam - 1) * limit;

  const response = await httpClient.get<{
    results: { name: string; url: string }[];
  }>(`pokemon?limit=${limit}&offset=${offset}`);
  const pokemonList = response.data.results;

  const items = await Promise.all(
    pokemonList.map(async (_, index) => {
      const id = offset + index + 1;
      const name = await getPokemonName(id);
      const type = await getPokemonType(id);
      const image = await getPokemonImage(id);
      return { id, name, type, image };
    })
  );

  return {
    items,
    nextPage: pageParam + 1,
  };
};

const PokeCardInfinite = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error,
  } = useInfiniteQuery<PokemonResponse, Error>({
    queryKey: ["pokemons"],
    queryFn: ({ pageParam = 1 }) =>
      fetchPokemonItems({ pageParam: pageParam as number }),
    getNextPageParam: (lastPage) => lastPage.nextPage ?? false,
    initialPageParam: 1,
  });

  const loadMoreButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!loadMoreButtonRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    observer.observe(loadMoreButtonRef.current);

    return () => {
      if (loadMoreButtonRef.current) {
        observer.unobserve(loadMoreButtonRef.current);
      }
    };
  }, [fetchNextPage, hasNextPage]);

  if (status === "pending") return <div>Loading...</div>;
  if (status === "error" && error) return <div>Error: {error.message}</div>;

  return (
    <PokeCardInfinteStyle>
      <Input />
      <TypeButtons />
      <div className="card-container">
        {data?.pages.map((page) => (
          <>
            {page.items.map((item) => (
              <PokemonCard
                name={item.name}
                types={item.type}
                image={item.image}
                id={item.id}
              />
            ))}
          </>
        ))}
        <div>
          <button
            ref={loadMoreButtonRef}
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage
              ? "불러오는중..."
              : hasNextPage
              ? "더 불러오기"
              : ""}
          </button>
        </div>
      </div>
    </PokeCardInfinteStyle>
  );
};

const PokeCardInfinteStyle = styled.div`
  .card-container {
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    gap: 20px;
  }

  @media (max-width: 768px) {
    .card-container {
      grid-template-columns: repeat(1, minmax(200px, 1fr));
    }
  }
`;

export default PokeCardInfinite;
