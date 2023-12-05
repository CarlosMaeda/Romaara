import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../src/styles/App.css";

import FormularioContacto from "./components/forms/Formulario";
import Navegacion from "../src/components/header/Navbar";
import Home from "../src/components/sections/Home";
import Footer from "./components/footer/Footer";
import FormularioContacto1 from "./components/forms/Formulario1";

function App() {
  return (
    <>
      <Router>
        <header className="header">
          <Navegacion />
        </header>

        <main className="container-fluid presentacion">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Formulario" element={<FormularioContacto1 />} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </Router>
    </>
  );
}

export default App;
