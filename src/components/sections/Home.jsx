import "../../styles/custom.css";

import { useNavigate } from "react-router-dom";

import usePageTitle from "../../hooks/usePageTitle";

import NewCard from "../cards/newCard";
import miel from "../../../public/src-Public/img-Public/Miel.jpg";
import frascoUntador from "../../../public/src-Public/img-Public/ft-frascoMielUntador.jpg";
import fondo from "../../../public/src-Public/img-Public/ft-fondo.jpg";

function Home() {
  const navigate = useNavigate();
  usePageTitle("Miel Pura de Abeja — ROMAARA");

  return (
    <>
      <section className="container-fluid seccion">
        <h1 className="titulo">Miel Pura de Abeja</h1>
        <h2 className="romaara">Romaara</h2>
        <h2>Producto Artesanal de la Patagonia</h2>
        <h2 className="galeria">GALERIA DE PRESENTACIONES</h2>

        <div className="container__card">
          <div className="row g-4 w-100">
            <div className="col-12 col-md-6 col-lg-4">
              <NewCard
                imagen={miel}
                alt="Miel"
                width={612}
                height={408}
                presentacion="ENVASE de 1 Kg"
                descripcion="Descripción: Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Labore fuga voluptatibus accusamus rem odio corrupti
                  aspernatur commodi cumque magni officia. Nisi, quaerat accusamus.
                  Accusamus repellat, eos error laborum repellendus laudantium?"
                click={() => navigate("/beneficios")}
              />
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <NewCard
                imagen={frascoUntador}
                alt="Frasco con miel"
                width={263}
                height={192}
                presentacion="ENVASE de 500 g"
                descripcion="Descripción: Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Labore fuga voluptatibus accusamus rem odio corrupti
                  aspernatur commodi cumque magni officia. Nisi, quaerat accusamus.
                  Accusamus repellat, eos error laborum repellendus laudantium?"
                click={() => navigate("/beneficios")}
              />
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <NewCard
                imagen={fondo}
                alt="Miel"
                width={275}
                height={183}
                presentacion="ENVASE de 300 g"
                descripcion="Descripción: Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Labore fuga voluptatibus accusamus rem odio corrupti
                  aspernatur commodi cumque magni officia. Nisi, quaerat accusamus.
                  Accusamus repellat, eos error laborum repellendus laudantium?"
                click={() => navigate("/beneficios")}
              />
            </div>
          </div>
        </div>
        <div className="sep"></div>
      </section>
    </>
  );
}

export default Home;
