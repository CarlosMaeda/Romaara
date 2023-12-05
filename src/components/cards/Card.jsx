import propTypes from "prop-types";
import Boton from "../buttons/Boton";

function Card(props) {
  return (
    <div className="card">
      <img src={props.imagen} alt={props.alt} />
      <h4>{props.presentacion}</h4>
      <p>{props.descripcion}</p>

      <Boton texto="MAS" ancho="30%" />
    </div>
  );
}

Card.propTypes = {
  imagen: propTypes.string,
  alt: propTypes.string,
  presentacion: propTypes.string,
  descripcion: propTypes.string,
};

export default Card;
