import Curiosidad from "../helpers/registroCuriosidad";
import Curiosidades from "../helpers/datosCuriosidades";

function ListaCuriosidades() {
  return (
    <>
      <h2 className="romaara">Curiosidades sobre la miel que no sabías</h2>
      <div className="container fw-bold">
        <section className="row align-items-lg-center text-info-emphasis">
          <div className="col-12 col-lg-5 fs-3">
            {Curiosidades.map((curiosidad, index) => (
              <Curiosidad key={index} texto={curiosidad.texto1} />
            ))}
          </div>
          <div className="col-12 col-lg-7">
            <img
              className="img-fluid"
              src="../../src/assets/img/miel.jpg"
              alt=""
            />
          </div>
        </section>
        <section className="row align-items-lg-center text-primary-emphasis">
          <div className="col-12 col-lg-5 fs-3 order-md-1">
            {Curiosidades.map((curiosidad, index) => (
              <Curiosidad key={index} texto={curiosidad.texto2} />
            ))}
          </div>
          <div className="col-12 col-lg-7">
            <img
              className="img-fluid"
              src="../../src/assets/img/miel.jpg"
              alt=""
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default ListaCuriosidades;
