import { useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import styled from "styled-components";
import {
  getIdByType,
  getPokemonImage,
  getPokemonName,
  getPokemonType,
} from "../api/pokemon";
import PokemonCard from "../components/pokemon/PokemonCard";
import { typesNumber } from "../constants/typesNumber";
import Input from "../components/Common/Input";
import TypeButtons from "../components/pokemon/TypeButtons";

interface PokemonItem {
  id: number;
  name: string;
  type: string[];
  image: string;
}

interface PokemonPageResponse {
  items: PokemonItem[];
  nextPage?: number;
}

const fetchPokemonItems = async ({
  pageParam = 1,
  typeId,
}: {
  pageParam?: number;
  typeId: number;
}): Promise<PokemonPageResponse> => {
  const limit = 18;
  const offset = (pageParam - 1) * limit;

  const pokemonIds = await getIdByType(typeId);

  const selectedIds = pokemonIds
    .slice(offset, offset + limit)
    .map((id) => Number(id));

  const items = await Promise.all(
    selectedIds.map(async (id) => {
      const name = await getPokemonName(id);
      const type = await getPokemonType(id);
      const image = await getPokemonImage(id);
      return { id, name, type, image };
    })
  );

  const nextPage =
    offset + limit < pokemonIds.length ? pageParam + 1 : undefined;

  return {
    items,
    nextPage,
  };
};

const TypeFilteredPokemons = ({ typeId }: { typeId: number }) => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error,
  } = useInfiniteQuery<PokemonPageResponse, Error>({
    queryKey: ["pokemons", typeId],
    queryFn: ({ pageParam = 1 }) =>
      fetchPokemonItems({
        pageParam: pageParam as number,
        typeId: Number(typeId),
      }),
    getNextPageParam: (lastPage) => lastPage?.nextPage,
    initialPageParam: 1,
    enabled: !!typeId,
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

  useEffect(() => {
    if (typeId) {
      const type = typesNumber[typeId.toString()];
      document.body.classList.add(String(type));

      return () => {
        document.body.classList.remove(String(type));
      };
    }
  }, [typeId]);

  if (status === "pending") return <div>Loading...</div>;
  if (status === "error" && error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Input />
      <TypeButtons />
      <TypeFilteredPokemonsStyle>
        {data?.pages.map((page) => (
          <>
            {page.items.map((item) => (
              <PokemonCard
                key={item.id}
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
      </TypeFilteredPokemonsStyle>
    </>
  );
};

const TypeFilteredPokemonsStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(200px, 1fr));
  }
`;

export default TypeFilteredPokemons;
