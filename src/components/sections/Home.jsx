import "../../styles/custom.css";

import NewCard from "../cards/newCard";

function Home() {
  return (
    <>
      <section className="container-fluid seccion">
        <h1 className="titulo">Miel Pura de Abeja</h1>
        <h2 className="romaara">Romaara</h2>
        <h2>Producto Artesanal de la Patagonia</h2>
        <h2 className="galeria">GALERIA DE PRESENTACIONES</h2>

        <div className="container__card">
          <NewCard
            imagen="../../src/assets/img/miel.jpg"
            alt="Miel"
            presentacion="ENVASE de 1 Kg"
            descripcion="Descripción: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Labore fuga voluptatibus accusamus rem odio corrupti
              aspernatur commodi cumque magni officia. Nisi, quaerat accusamus.
              Accusamus repellat, eos error laborum repellendus laudantium?"
          />

          <NewCard
            imagen="../../src/assets/img/ft-frascoMielUntador.jpg"
            alt="Frasco con miel"
            presentacion="ENVASE de 500 g"
            descripcion="Descripción: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Labore fuga voluptatibus accusamus rem odio corrupti
              aspernatur commodi cumque magni officia. Nisi, quaerat accusamus.
              Accusamus repellat, eos error laborum repellendus laudantium?"
          />

          <NewCard
            imagen="../../src/assets/img/ft-fondo.jpg"
            alt="Miel"
            presentacion="ENVASE de 300 g"
            descripcion="Descripción: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Labore fuga voluptatibus accusamus rem odio corrupti
              aspernatur commodi cumque magni officia. Nisi, quaerat accusamus.
              Accusamus repellat, eos error laborum repellendus laudantium?"
          />
        </div>
        <div className="sep"></div>
      </section>
    </>
  );
}

export default Home;
