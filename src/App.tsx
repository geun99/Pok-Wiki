import PokeCardInfinite from "./components/pokemon/PokeCardInfinite";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import { Route, Routes } from "react-router-dom";
import PokeDetail from "./page/PokeDetail";
import TypeFilteredPokemons from "./page/TypeFilteredPokemons";

export type TypeId =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18;

export const typeIds: TypeId[] = Array.from(
  { length: 18 },
  (_, i) => (i + 1) as TypeId
);

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PokeCardInfinite />} />
        <Route path="/detail/:id" element={<PokeDetail />} />
        {typeIds.map((typeId) => (
          <Route
            key={typeId}
            path={`/type/${typeId}`}
            element={<TypeFilteredPokemons typeId={typeId} />}
          />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
