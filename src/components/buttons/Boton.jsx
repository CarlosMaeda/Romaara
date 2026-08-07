import PropTypes from "prop-types";
import "./Boton.css";

function Boton(props) {
  const estilosBoton = {
    backgroundColor: props.color,
    width: props.ancho,
  };

  return (
    <div>
      <button
        type={props.type || "button"}
        className="boton"
        style={estilosBoton}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.texto}
      </button>
    </div>
  );
}

Boton.propTypes = {
  color: PropTypes.string,
  ancho: PropTypes.string,
  texto: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
};

export default Boton;
