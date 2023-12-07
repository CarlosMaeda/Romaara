import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "../src/styles/App.css";

import Navegacion from "../src/components/header/Navbar";
import Home from "../../Romaara-web/src/components/sections/Home";
import Footer from "./components/footer/Footer";
import FormularioContacto1 from "./components/forms/Formulario1";

import ListaCuriosidades from "./components/sections/Curiosidades";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navegacion />

          <main className="container-fluid presentacion">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Formulario" element={<FormularioContacto1 />} />
              <Route path="/curiosidades" element={<ListaCuriosidades />} />
              <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
