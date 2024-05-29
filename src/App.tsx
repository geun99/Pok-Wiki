import PokeCardInfinite from "./components/pokemon/PokeCardInfinite";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import { Route, Routes } from "react-router-dom";
import PokeDetail from "./page/PokeDetail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PokeCardInfinite />} />
        <Route path="/detail/:id" element={<PokeDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
