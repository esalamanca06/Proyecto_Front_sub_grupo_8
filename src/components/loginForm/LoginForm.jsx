import React from "react";
import "./LoginForm.css";

export const LoginForm = () => {
  return (
    <main className="contentLoginForm">
      <h1 className="titleForm">Inicio de sesión</h1>
      
      <form className="form">
        <div className="contentInput">
          <label htmlFor="userInput">Usuario</label>
          <input type="text" name="userInput" />
        </div>
        <div className="contentInput">
          <label htmlFor="userPassword">Contraseña</label>
          <input type="password" name="userPassword" />
        </div>
        <button>Ingresar</button>
        <a href="#">¿No recuerda la contraseña?</a>
      </form>
    </main>
  );
};
