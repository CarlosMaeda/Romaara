import { useState } from "react";
import "../../styles/custom.css";
import "./Formulario.css";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Boton from "../buttons/Boton";

function FormularioContacto1() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [correoValido, setCorreoValido] = useState(true);
  const [motivo, setMotivo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleEmailChange = (e) => {
    const nuevoCorreo = e.target.value;
    setCorreo(nuevoCorreo);

    // Validar el formato del correo electrónico usando la expresión regular
    const correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const esValido = correoRegex.test(nuevoCorreo);
    setCorreoValido(esValido);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre !== "" && apellido !== "" && correoValido) {
      console.log("Correo electrónico válido:", correo);
      alert("El formulario se ha enviado");
    } else {
      console.log("Correo electrónico no válido");
      alert(
        "Por favor verifique que los campos estén completados correctamente"
      );
    }
  };

  return (
    <>
      <div className="formulario">
        <h2 className="titulo-Formulario romaara">Formulario de contacto</h2>
        <form onSubmit={handleSubmit}>
          <Row className="mb-3 fs-2 fw-bold">
            <Form.Group as={Col} md="4" controlId="nombre">
              <Form.Label htmlFor="nombre">Nombre:</Form.Label>
              <Form.Control
                className="fs-5"
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Nombre"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                style={{ borderColor: nombre !== "" ? "initial" : "red" }}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="apellido">
              <Form.Label htmlFor="apellido">Apellido:</Form.Label>
              <Form.Control
                className="fs-5"
                type="text"
                id="apellido"
                name="apellido"
                placeholder="Apellido"
                required
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                style={{ borderColor: apellido !== "" ? "initial" : "red" }}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="correo">
              <Form.Label htmlFor="correo">Correo:</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  className="fs-5"
                  type="email"
                  id="correo"
                  name="correo"
                  placeholder="usuario@dominio.com"
                  required
                  value={correo}
                  onChange={handleEmailChange}
                  style={{ borderColor: correoValido ? "initial" : "red" }}
                />
              </InputGroup>
            </Form.Group>
          </Row>

          <Row className="mb-3 fs-4 fw-bold">
            <h3 className="fs-2 fw-bold">Selecciona el motivo de contacto:</h3>

            <Form.Group className="mb-3">
              <Form.Check
                type="radio"
                id="reclamo"
                name="motivo"
                value="reclamo"
                label="Reclamo"
                onChange={(e) => setMotivo(e.target.value)}
                defaultChecked
              />

              <Form.Check
                type="radio"
                id="consulta"
                name="motivo"
                value="consulta"
                label="Consulta"
                onChange={(e) => setMotivo(e.target.value)}
              />
              <Form.Check
                type="radio"
                id="sugerencia"
                name="motivo"
                value="sugerencia"
                label="Sugerencia"
                onChange={(e) => setMotivo(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <h3 className=" fs-2 fw-bold">Describe el motivo</h3>

            <Form.Control
              className="fs-5"
              as="textarea"
              rows={5}
              name="descripcion"
              placeholder="Describe el motivo de contacto"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </Row>
          <Boton
            texto="Enviar"
            ancho="40px"
            color="blue"
            onClick={SubmitEvent}
          />
        </form>
      </div>
    </>
  );
}

export default FormularioContacto1;
