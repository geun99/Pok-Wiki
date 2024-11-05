import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPokemonDetails } from "../api/pokemonDetail";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { getPokemonName, getPokemonType } from "../api/pokemon";
import Types from "../components/Common/Types";
import PokemonStat from "../components/pokemonDetail/PokemonStat";
import styled from "styled-components";
import PokemonInfo from "../components/pokemonDetail/PokemonInfo";
import PokemonName from "../components/pokemonDetail/PokemonName";
import PageMoveButtons from "../components/pokemonDetail/PageMoveButtons";
import Input from "../components/Common/Input";

const PokeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [pokemonGenera, setPokemonGenera] = useState<string>("");
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [flavorText, setFlavorText] = useState<string>("");
  const [stats, setStats] = useState<number[]>([]);
  const [movingImage, setMovingImage] = useState<string>("");
  const [pokeTypes, setPokeTypes] = useState<string[]>([]);
  const [pokemonName, setPokemonName] = useState<string>("");

  const [nextPokemon, setNextPokemon] = useState<string | undefined>(undefined);
  const [prevPokemon, setPrevPokemon] = useState<string | undefined>(undefined);

  useEffect(() => {
    getPokemonDetails(Number(id)).then((data) => {
      setPokemonGenera(data.genera);
      setHeight(data.height);
      setWeight(data.weight);
      setFlavorText(data.flavor_text_entries);
      setStats(data.stats);
      setMovingImage(data.sprites);
    });
    getPokemonType(Number(id)).then((data) => {
      setPokeTypes(data);
    });
    getPokemonName(Number(id)).then((data) => {
      setPokemonName(data);
    });

    const prevId = Number(id) - 1;
    const nextId = Number(id) + 1;

    if (prevId > 0) {
      getPokemonName(prevId).then((data) => {
        setPrevPokemon(data);
      });
    }

    if (nextId < 1026) {
      getPokemonName(nextId).then((data) => {
        setNextPokemon(data);
      });
    }
  }, [id]);

  useEffect(() => {
    if (pokeTypes.length > 0) {
      const type = pokeTypes[0];
      document.body.classList.add(type);

      return () => {
        document.body.classList.remove(type);
      };
    }
  }, [pokeTypes]);

  useEffect(() => {
    if (pokemonName) {
      document.title = pokemonName;
    }
    return () => {
      document.title = "PokéWiki";
    };
  }, [pokemonName]);

  const navigate = useNavigate();
  return (
    <>
      <Input />
      <PokeDetailStyle>
        <PokemonName
          name={pokemonName}
          genera={pokemonGenera}
          id={Number(id)}
        />
        <LazyLoadImage src={movingImage} alt={movingImage} />
        <Types types={pokeTypes} />
        <PokemonInfo
          genera={pokemonGenera}
          flavorText={flavorText}
          height={height}
          weight={weight}
        />
        <PokemonStat stats={stats} />
        <PageMoveButtons
          id={String(id)}
          navigate={navigate}
          nextPokemon={nextPokemon}
          prevPokemon={prevPokemon}
        />
      </PokeDetailStyle>
    </>
  );
};

const PokeDetailStyle = styled.div`
  img {
    width: 60%;
    margin-bottom: 20px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  border-radius: 20px;
  padding: 10px;
  max-width: 500px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export default PokeDetail;
