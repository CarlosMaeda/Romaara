import { Link } from "react-router-dom";

function Navegacion() {
  return (
    <>
      <nav
        className="navbar navbar-expand-md bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <span className="navbar-brand romaara">RMA</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-md-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link disabled"
                  aria-disabled="true"
                  to="/nosotros"
                >
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/formulario">
                  Contacto
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Particularidades
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="curiosidades">
                      Curiosidades
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="beneficios">
                      Beneficios
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item disabled"
                      aria-disabled="true"
                      to="recetas"
                    >
                      Recetas
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navegacion;
