import "./Styles/Style.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Components/Home/Home.jsx";
import Agentes from "./Components/Agentes/Agentes.js";
import Armas from "./Components/Armas/Armas.js";
import Mapas from "./Components/Mapas/Mapas.js";
import Header from "./Components/Header/Header.js";
import Footer from "./Components/Footer/Footer.js";

const App = () => {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agentes" element={<Agentes />} />
          <Route path="/arsenal" element={<Armas />} />
          <Route path="/mapas" element={<Mapas />} />
          <Footer />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
=======
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="AppBody">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agentes" element={<Agentes />} />
            <Route path="/arsenal" element={<Armas />} />
            <Route path="/mapas" element={<Mapas />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
>>>>>>> 6b5219f33754805b3d2169c0d59bff7036049c13
  );
};

export default App;
