import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonDetails } from "../api/pokemonDetail";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { getPokemonType } from "../api/pokemon";
import Types from "../components/Common/Types";
import PokemonStat from "../components/pokemonDetail/PokemonStat";

const PokeDetail = () => {
  const id = useParams().id;
  const [pokemonGenera, setPokemonGenera] = useState<string>("");
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [flavorText, setFlavorText] = useState<string>("");
  const [stats, setStats] = useState<number[]>([]);
  const [movingImage, setMovingImage] = useState<string>("");
  const [pokeTypes, setPokeTypes] = useState<string[]>([]);
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
  }, [id]);

  return (
    <div>
      {pokemonGenera} {height} {weight} {flavorText}
      <PokemonStat stats={stats} />
      <LazyLoadImage src={movingImage} alt={movingImage} />
      <Types types={pokeTypes} />
    </div>
  );
};

export default PokeDetail;
