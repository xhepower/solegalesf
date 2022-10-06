import React, { useState, useRef, useEffect } from "react";
import "@styles/Login.scss";
import logo from "@logos/logo_yard_sale.svg";
import { authSchema } from "@schemas/auth.schema";
import authService from "@services/auth.service";

function Login() {
  const [token, setToken] = useState([]);
  const [errors, setErrors] = useState([]);
  const form = useRef(null);
  const handleLogin = async (data) => {
    const datos = { errors: null, token: null };
    try {
      const rta = await authService.login(data);
      datos.token = rta.data;
    } catch (error) {
      datos.errors = error.response.status;
    }
    return datos;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const rta = await handleLogin(data);
    console.log(rta);
    setErrors(rta.errors);
    setToken(rta.token);
  };

  return (
    <div className="Login">
      {errors ? (
        <div>
          <p>Hay errores</p>
        </div>
      ) : null}
      <div className="Login-container">
        <img src={logo} alt="logo" className="logo" />
        <form className="form" ref={form}>
          <label htmlFor="email" className="label">
            Correo eléctronico
          </label>
          <input
            type="email"
            name="email"
            placeholder="Ingrese aquí su correo electrónico"
            className="input input-email"
            required
          />
          <label htmlFor="password" className="label">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className="input input-password"
            required
          />
          <input
            className="primary-button login-button"
            value="Entrar"
            type="submit"
            onClick={handleSubmit}
          ></input>
          <a href="/">Olvidé mi contraseña</a>
        </form>
      </div>
    </div>
  );
}

export default Login;
