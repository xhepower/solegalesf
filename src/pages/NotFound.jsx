import React from "react";
import { Link } from "react-router-dom";
import "../styles/notfound.scss";
function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound-container">
        <h1 className="title-404">404</h1>
        <p className="text-404">Oops! Pagina no encontrada.</p>
        <Link to="/" className="button-404">
          Regresar al Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
