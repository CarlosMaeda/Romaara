import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../src/styles/App.css";

import Navegacion from "../src/components/header/Navbar";
import Home from "../src/components/sections/Home";
import Footer from "./components/footer/Footer";
import FormularioContacto1 from "./components/forms/Formulario1";

function App() {
  return (
    <>
      <Router>
        <Navegacion />
        <main className="container-fluid presentacion">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Formulario" element={<FormularioContacto1 />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
