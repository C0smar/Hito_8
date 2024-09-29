import React, { useState, useContext } from "react";
import { MyContext } from "../Context";

const LoginPages = () => {
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const { login } = useContext(MyContext);

  function onInputChange({ target }) {
    const { value, name } = target;

    if (name === "password") {
      setPassword(value);
    } else if (name === "mail") {
      setMail(value);
    }
  }

  async function onSubmitHandler(event) {
    event.preventDefault();

    if (!password || !mail) {
      alert("Todos los campos son obligatorios");
      return;
    }

    await login(mail, password);

    setPassword("");
    setMail("");
  }

  return (

    <div className="cajaLogin">

    <div className="formularioLogin">
      <h1 className="tituloLogin">Login</h1>
      <form className="cajaLogin" onSubmit={onSubmitHandler}>
        <h3>Ingresa tu email</h3>
        <input
          type="email"
          placeholder="Ingresa tu email"
          onChange={onInputChange}
          value={mail}
          name="mail"
          />

        <h3>Ingresa tu contraseña</h3>
        <input
          type="password"
          placeholder="Ingresa tu contraseña"
          onChange={onInputChange}
          value={password}
          name="password"
          />

        <button className="btnLogin" type="submit">
          Ingresar
        </button>
      </form>
      </div>
    </div>
  );
};

export default LoginPages;
