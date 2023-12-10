import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import "../../styles/custom.css";

function Beneficio(props) {
  return (
    <>
      <Card style={{ width: "30rem", height: "auto" }} className="m-4 rma-card">
        <Card.Body className="bg-warning bg-gradient">
          <Card.Title className="titulo-card">Beneficio</Card.Title>
          <Card.Text className="texto-card">{props.texto}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

Beneficio.propTypes = {
  texto: PropTypes.string.isRequired,
};

export default Beneficio;
