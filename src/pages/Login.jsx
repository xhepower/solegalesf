import React from "react";
import "../styles/login.scss";
import logo from "../../public/assets/logos/logo_yard_sale.svg";
function Login() {
  return (
    <div className="Login">
      <div className="Login-container">
        <img src={logo} alt="logo" className="logo" />
        <form action="/" className="form">
          <label htmlFor="email" className="label">
            Correo eletrónico
          </label>
          <input
            type="text"
            name="email"
            placeholder="Ingrese su correo"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            placeholder="*****"
            className="input input-password"
          />
          <button className="primary-button login-button">Log in</button>
          <a href="/">Olvidé mi contraseña</a>
        </form>
      </div>
    </div>
  );
}

export default Login;
