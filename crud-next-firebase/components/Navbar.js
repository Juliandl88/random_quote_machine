import React, { useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  // esta useEffect es para solucionar el error de bootstrap
  useEffect(() => {
    if (typeof document !== undefined) {
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark-subtle text-emphasis-dark">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand">
            Home
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  href="/formulario"
                  className="nav-link active"
                  aria-current="page"
                >
                  Crear
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link active" aria-current="page">
                  Actualizar
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link active" aria-current="page">
                  Eliminar
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link active" aria-current="page">
                  Listar
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
