import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

function Beneficio(props) {
  return (
    <>
      <Card style={{ width: "38rem" }} className="m-4">
        <Card.Body className=" bg-warning bg-gradient">
          <Card.Title className="fs-3">Beneficio</Card.Title>
          <Card.Text>{props.texto}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

Beneficio.propTypes = {
  texto: PropTypes.string.isRequired,
};

export default Beneficio;
