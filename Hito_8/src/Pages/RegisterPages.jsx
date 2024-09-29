import React, { useState, useContext } from "react";
import { MyContext } from "../Context";

const RegisterPages = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mail, setMail] = useState("");
  const { register } = useContext(MyContext);

  function onInputChange({ target }) {
    const { value, name } = target;

    if (name === "password") {
      setPassword(value);
    } else if (name === "mail") {
      setMail(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  }

  async function onSubmitHandler(event) {
    event.preventDefault();

    if (!password || !confirmPassword || !mail) {
      alert("Todos los campos son obligatorios");
      return;
    } else if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    } else if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    await register(mail, password);

    setPassword("");
    setConfirmPassword("");
    setMail("");
  }

  return (
    <>

      <div className="boxRegistro">

      <div className="formularioRegistro">
        <h1>Registro</h1>

        <form className="cajaRegistro" onSubmit={onSubmitHandler}>
          <h3>Ingresa un Email</h3>
          <input
            type="email"
            placeholder="Ingresa tu email"
            onChange={onInputChange}
            value={mail}
            name="mail"
            />

          <h3>Ingresa una contraseña</h3>
          <input
            type="password"
            placeholder="Ingresa una contraseña"
            onChange={onInputChange}
            value={password}
            name="password"
            />

          <h3>Confirma tu contraseña</h3>
          <input
            type="password"
            placeholder="Confirma la contraseña"
            onChange={onInputChange}
            value={confirmPassword}
            name="confirmPassword"
            />

          <button className="btnRegister" type="submit">
            Enviar
          </button>
        </form>
      </div>
            </div>
    </>
  );
};

export default RegisterPages;
