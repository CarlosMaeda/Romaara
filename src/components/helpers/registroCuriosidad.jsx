import PropTypes from "prop-types";

function Curiosidad(props) {
  return (
    <section className="seccion p-3">
      <p> {props.texto}</p>
    </section>
  );
}

Curiosidad.propTypes = {
  texto: PropTypes.string.isRequired,
};

export default Curiosidad;
