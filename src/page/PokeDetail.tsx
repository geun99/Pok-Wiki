import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonDetails } from "../api/pokemonDetail";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { getPokemonName, getPokemonType } from "../api/pokemon";
import Types from "../components/Common/Types";
import PokemonStat from "../components/pokemonDetail/PokemonStat";
import styled from "styled-components";
import PokemonInfo from "../components/pokemonDetail/PokemonInfo";
import PokemonName from "../components/pokemonDetail/PokemonName";

const PokeDetail = () => {
  const id = useParams().id;
  const [pokemonGenera, setPokemonGenera] = useState<string>("");
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [flavorText, setFlavorText] = useState<string>("");
  const [stats, setStats] = useState<number[]>([]);
  const [movingImage, setMovingImage] = useState<string>("");
  const [pokeTypes, setPokeTypes] = useState<string[]>([]);
  const [pokemonName, setPokemonName] = useState<string>("");
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
  }, [id]);

  return (
    <PokeDetailStyle>
      <PokemonName name={pokemonName} genera={pokemonGenera} id={Number(id)} />
      <LazyLoadImage src={movingImage} alt={movingImage} />
      <Types types={pokeTypes} />
      <PokemonInfo
        genera={pokemonGenera}
        flavorText={flavorText}
        height={height}
        weight={weight}
      />
      <PokemonStat stats={stats} />
    </PokeDetailStyle>
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
