import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

import Boton from "../buttons/Boton.jsx";

function NewCard(props) {
  return (
    <Card style={{ width: "32rem" }}>
      <Card.Img variant="top" src={props.imagen} alt={props.alt} />
      <Card.Body>
        <Card.Title>{props.presentacion}</Card.Title>
        <Card.Text>{props.descripcion}</Card.Text>

        <Boton texto="Mas detalles" ancho="30%" color="green" style="" />
      </Card.Body>
    </Card>
  );
}

NewCard.propTypes = {
  presentacion: PropTypes.string,
  descripcion: PropTypes.string,
  enlace: PropTypes.string,
  imagen: PropTypes.string,
  alt: PropTypes.string,
};

export default NewCard;
