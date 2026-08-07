import { NavLink } from "react-router-dom";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

function Navegacion() {
  return (
    <>
      <Navbar
        expand="md"
        sticky="top"
        bg="dark"
        data-bs-theme="dark"
        className="border-bottom border-body"
      >
        <Container fluid>
          <Navbar.Brand className="romaara-nav">RMA</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarNavDropdown"
            aria-label="Abrir menú de navegación"
          />
          <Navbar.Collapse id="navbarNavDropdown">
            <Nav className="ms-md-auto">
              <Nav.Item>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `nav-link${isActive ? " active" : ""}`
                  }
                >
                  Inicio
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  to="/nosotros"
                  aria-disabled="true"
                  tabIndex="-1"
                  className={({ isActive }) =>
                    `nav-link disabled${isActive ? " active" : ""}`
                  }
                >
                  Nosotros
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  to="/formulario"
                  className={({ isActive }) =>
                    `nav-link${isActive ? " active" : ""}`
                  }
                >
                  Contacto
                </NavLink>
              </Nav.Item>
              <NavDropdown
                title="Particularidades"
                id="particularidades-dropdown"
              >
                <NavDropdown.Item as={NavLink} to="/curiosidades">
                  Curiosidades
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/beneficios">
                  Beneficios
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/recetas" disabled>
                  Recetas
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navegacion;
