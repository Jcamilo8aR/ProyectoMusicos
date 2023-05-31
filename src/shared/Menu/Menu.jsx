/** @format */

import { Link } from "react-router-dom";
import "./Menu.css";

export function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg menu navbar-dark text-size fs-4 fw-light py-1"> 
        <div className="container-fluid">

          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item" >
                <Link className="nav-link active" aria-current="true" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/integrantes">
                  Integrantes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/tienda">
                  Tienda
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/fans">
                  Fans
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/asd">
                  Hooks
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/musica">
                  Musica
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  );
}
