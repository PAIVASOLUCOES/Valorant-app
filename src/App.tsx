import "./styles/Style.css";

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
        <Route path="/Agentes" element={<Agentes />} />
        <Route path="/Arsenal" element={<Armas />} />

        <Route path="/Mapas" element={<Mapas />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
