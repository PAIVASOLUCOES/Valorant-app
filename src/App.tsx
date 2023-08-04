import "./Styles/Style.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Components/Home/Home.jsx";
import Agentes from "./Components/Agentes/Agentes.js";
import Armas from "./Components/Armas/Armas.js";
import Mapas from "./Components/Mapas/Mapas.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agentes" element={<Agentes />} />
        <Route path="/arsenal" element={<Armas />} />
        <Route path="/mapas" element={<Mapas />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
