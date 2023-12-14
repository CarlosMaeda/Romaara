import "../../styles/custom.css";

import NewCard from "../cards/newCard";
import miel from "../../../public/src-Public/img-Public/miel.jpg";
import frascoUntador from "../../../public/src-Public/img-Public/ft-frascoMielUntador.jpg";
import fondo from "../../../public/src-Public/img-Public/ft-fondo.jpg";

function Home() {
  const handleClick1 = () => {
    return (
      <div>
        <p>Boton pulsado</p>
      </div>
    );
  };

  const handleClick2 = () => {
    return <div>Boton pulsado</div>;
  };

  const handleClick3 = () => {
    return (
      <div>
        <p>Boton pulsado</p>
      </div>
    );
  };

  return (
    <>
      <section className="container-fluid seccion">
        <h1 className="titulo">Miel Pura de Abeja</h1>
        <h2 className="romaara">Romaara</h2>
        <h2>Producto Artesanal de la Patagonia</h2>
        <h2 className="galeria">GALERIA DE PRESENTACIONES</h2>

        <div className="container__card">
          <NewCard
            imagen={miel}
            alt="Miel"
            presentacion="ENVASE de 1 Kg"
            descripcion="Descripción: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Labore fuga voluptatibus accusamus rem odio corrupti
              aspernatur commodi cumque magni officia. Nisi, quaerat accusamus.
              Accusamus repellat, eos error laborum repellendus laudantium?"
            click={handleClick1}
          />

          <NewCard
            imagen={frascoUntador}
            alt="Frasco con miel"
            presentacion="ENVASE de 500 g"
            descripcion="Descripción: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Labore fuga voluptatibus accusamus rem odio corrupti
              aspernatur commodi cumque magni officia. Nisi, quaerat accusamus.
              Accusamus repellat, eos error laborum repellendus laudantium?"
            click={handleClick2}
          />

          <NewCard
            imagen={fondo}
            alt="Miel"
            presentacion="ENVASE de 300 g"
            descripcion="Descripción: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Labore fuga voluptatibus accusamus rem odio corrupti
              aspernatur commodi cumque magni officia. Nisi, quaerat accusamus.
              Accusamus repellat, eos error laborum repellendus laudantium?"
            click={handleClick3}
          />
        </div>
        <div className="sep"></div>
      </section>
    </>
  );
}

export default Home;
