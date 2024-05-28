import { useEffect } from "react";
import { getPokemonImage, getPokemonName, getPokemonType } from "./api/pokemon";
import {
  getFlavorText,
  getHeight,
  getPokemonGenera,
  getStats,
  getWeight,
} from "./api/pokemonDetail";
import PokeCardInfinite from "./components/pokemon/PokeCardInfinite";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";

function App() {
  useEffect(() => {
    getPokemonName(4).then((res) => {
      console.log(res);
    });
    getPokemonType(4).then((res) => {
      console.log(res);
    });
    getPokemonImage(4).then((res) => {
      console.log(res);
    });
    getPokemonGenera(4).then((res) => {
      console.log(res);
    });
    getHeight(4).then((res) => {
      console.log(res);
    });
    getWeight(4).then((res) => {
      console.log(res);
    });
    getFlavorText(4).then((res) => {
      console.log(res);
    });
    getFlavorText(100).then((res) => {
      console.log(res);
    });
    getFlavorText(1004).then((res) => {
      console.log(res);
    });
    getStats(4).then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <>
      <Header />
      <PokeCardInfinite />
      <Footer />
    </>
  );
}

export default App;
