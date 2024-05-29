import PokeCardInfinite from "./components/pokemon/PokeCardInfinite";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import { Route, Routes } from "react-router-dom";
import PokeDetail from "./page/PokeDetail";
import TypeFilteredPokemons from "./page/TypeFilteredPokemons";
import { typeIds } from "./constants/typeIds";

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
