import { useState } from "react";
import "./Formulario.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Boton from "../buttons/Boton";

function FormularioContacto() {
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
        <h2 className="titulo-Formulario">Formulario de contacto</h2>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className="datos-contacto">
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Nombre"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                style={{ borderColor: nombre !== "" ? "initial" : "red" }}
              />
              <label htmlFor="nombre">Apellido:</label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                placeholder="Apellido"
                required
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                style={{ borderColor: apellido !== "" ? "initial" : "red" }}
              />
              <label htmlFor="correo">Correo:</label>
              <input
                type="email"
                id="correo"
                name="correo"
                placeholder="usuario@dominio.com"
                required
                value={correo}
                onChange={handleEmailChange}
                style={{ borderColor: correoValido ? "initial" : "red" }}
              />
            </div>
            <div className="motivo-contacto">
              <p>Selecciona el motivo de contacto:</p>
              <div className="radio-boton">
                <input
                  type="radio"
                  id="reclamo"
                  name="motivo"
                  value="reclamo"
                  onChange={(e) => setMotivo(e.target.value)}
                  defaultChecked
                />
                <label htmlFor="reclamo">Reclamo</label>

                <input
                  type="radio"
                  id="consulta"
                  name="motivo"
                  value="consulta"
                  onChange={(e) => setMotivo(e.target.value)}
                />
                <label htmlFor="consulta">Consulta</label>

                <input
                  type="radio"
                  id="sugerencia"
                  name="motivo"
                  value="sugerencia"
                  onChange={(e) => setMotivo(e.target.value)}
                />
                <label htmlFor="sugerencia">Sugerencia</label>
              </div>
            </div>
            <div className="texto-contacto">
              <p>Describe el motivo</p>

              <textarea
                name="descripcion"
                placeholder="Describe el motivo de contacto"
                cols="100"
                rows="10"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              ></textarea>
            </div>
            <Boton
              texto="Enviar"
              ancho="40px"
              color="blue"
              onClick={SubmitEvent}
            />
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default FormularioContacto;

/* 
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default FormExample;
 */
