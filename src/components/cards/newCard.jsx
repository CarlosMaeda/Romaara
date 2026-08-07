import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

import Boton from "../buttons/Boton.jsx";

function NewCard(props) {
  return (
    <Card className="w-100">
      <Card.Img
        variant="top"
        src={props.imagen}
        alt={props.alt}
        loading="lazy"
        width={props.width}
        height={props.height}
      />
      <Card.Body>
        <Card.Title>{props.presentacion}</Card.Title>
        <Card.Text>{props.descripcion}</Card.Text>

        <Boton
          texto="BENEFICIOS"
          ancho="30%"
          color="green"
          style=""
          onClick={props.click}
        />
      </Card.Body>
    </Card>
  );
}

NewCard.propTypes = {
  presentacion: PropTypes.string,
  descripcion: PropTypes.string,
  click: PropTypes.func,
  imagen: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default NewCard;
