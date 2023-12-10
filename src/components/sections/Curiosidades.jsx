import Curiosidad from "../helpers/registroCuriosidad";
import Curiosidades from "../helpers/datosCuriosidades";
import AbejaFlor from "../../../public/src-Public/img-Public/ft-abejaFlor.jpg";
import AbejaTarro from "../../../public/src-Public/img-Public/abeja-tarro-miel.jpg";
import "../../styles/custom.css";

function ListaCuriosidades() {
  return (
    <>
      <h3 className="rma">Curiosidades que no conocías, sobre la miel</h3>
      <div className="container fw-bold">
        <section className="row align-items-lg-center text-info-emphasis">
          <div className="col-12 col-lg-5 fs-3">
            {Curiosidades.map((curiosidad, index) => {
              if (parseInt(index) <= 5) {
                return <Curiosidad key={index} texto={curiosidad.texto1} />;
              }
            })}
          </div>
          <div className="col-12 col-lg-7">
            <img className="img-fluid" src={AbejaFlor} alt="curiosidades" />
          </div>
        </section>
        <section className="row align-items-lg-center text-primary-emphasis">
          <div className="col-12 col-lg-5 fs-3 order-lg-1">
            {Curiosidades.map((curiosidad, index) => {
              if (parseInt(index) >= 6) {
                return <Curiosidad key={index} texto={curiosidad.texto2} />;
              }
            })}
          </div>
          <div className="col-12 col-lg-7 py-4">
            <img className="img-fluid" src={AbejaTarro} alt="curiosidades" />
          </div>
        </section>
      </div>
    </>
  );
}

export default ListaCuriosidades;
