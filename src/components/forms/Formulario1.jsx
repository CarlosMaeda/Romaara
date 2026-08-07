import { useState } from "react";
import "../../styles/custom.css";
import "./Formulario.css";

import usePageTitle from "../../hooks/usePageTitle";

import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Boton from "../buttons/Boton";

function FormularioContacto1() {
  usePageTitle("Contacto — ROMAARA");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [correoValido, setCorreoValido] = useState(true);
  const [motivo, setMotivo] = useState("reclamo");
  const [descripcion, setDescripcion] = useState("");
  const [touched, setTouched] = useState({
    nombre: false,
    apellido: false,
    correo: false,
  });
  const [status, setStatus] = useState("idle");
  const [errorMensaje, setErrorMensaje] = useState("");

  const nombreInvalido = touched.nombre && nombre === "";
  const apellidoInvalido = touched.apellido && apellido === "";
  const correoInvalido = touched.correo && !correoValido;

  const handleEmailChange = (e) => {
    const nuevoCorreo = e.target.value;
    setCorreo(nuevoCorreo);

    const correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const esValido = correoRegex.test(nuevoCorreo);
    setCorreoValido(esValido);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setTouched({ nombre: true, apellido: true, correo: true });

    if (nombre === "" || apellido === "" || !correoValido) {
      setErrorMensaje("Completá los campos requeridos e intentá de nuevo.");
      setStatus("error");
      return;
    }

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
    if (!endpoint) {
      setErrorMensaje(
        "Hubo un error al enviar. Probá de nuevo o escribinos por otro medio."
      );
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          apellido,
          email: correo,
          motivo,
          mensaje: descripcion,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setNombre("");
        setApellido("");
        setCorreo("");
        setCorreoValido(true);
        setMotivo("reclamo");
        setDescripcion("");
        setTouched({ nombre: false, apellido: false, correo: false });
      } else {
        setErrorMensaje(
          "Hubo un error al enviar. Probá de nuevo o escribinos por otro medio."
        );
        setStatus("error");
      }
    } catch (err) {
      setErrorMensaje(
        "Hubo un error al enviar. Probá de nuevo o escribinos por otro medio."
      );
      setStatus("error");
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
                onChange={(e) => {
                  setNombre(e.target.value);
                  setTouched((prev) => ({ ...prev, nombre: true }));
                }}
                style={{ borderColor: nombreInvalido ? "red" : "initial" }}
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
                onChange={(e) => {
                  setApellido(e.target.value);
                  setTouched((prev) => ({ ...prev, apellido: true }));
                }}
                style={{ borderColor: apellidoInvalido ? "red" : "initial" }}
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
                  onChange={(e) => {
                    handleEmailChange(e);
                    setTouched((prev) => ({ ...prev, correo: true }));
                  }}
                  style={{ borderColor: correoInvalido ? "red" : "initial" }}
                />
              </InputGroup>
            </Form.Group>
          </Row>

          <Row className="mb-3 fs-4 fw-bold">
            <fieldset>
              <legend className="fs-2 fw-bold">
                Selecciona el motivo de contacto:
              </legend>

              <Form.Group className="mb-3">
                <Form.Check
                  type="radio"
                  id="reclamo"
                  name="motivo"
                  value="reclamo"
                  label="Reclamo"
                  checked={motivo === "reclamo"}
                  onChange={(e) => setMotivo(e.target.value)}
                />

                <Form.Check
                  type="radio"
                  id="consulta"
                  name="motivo"
                  value="consulta"
                  label="Consulta"
                  checked={motivo === "consulta"}
                  onChange={(e) => setMotivo(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  id="sugerencia"
                  name="motivo"
                  value="sugerencia"
                  label="Sugerencia"
                  checked={motivo === "sugerencia"}
                  onChange={(e) => setMotivo(e.target.value)}
                />
              </Form.Group>
            </fieldset>
          </Row>

          <Row className="mb-3">
            <h3 className="fs-2 fw-bold">Describe el motivo</h3>

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

          {status === "success" && (
            <Alert variant="success">
              ¡Gracias! Te contactamos a la brevedad.
            </Alert>
          )}
          {status === "error" && (
            <Alert variant="danger">{errorMensaje}</Alert>
          )}

          <Boton
            texto={status === "submitting" ? "Enviando…" : "Enviar"}
            ancho="100%"
            color="blue"
            type="submit"
            disabled={status === "submitting"}
          />
        </form>
      </div>
    </>
  );
}

export default FormularioContacto1;
