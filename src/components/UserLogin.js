import React from "react";

const UserLogin = () => {
  return (
    <div className="login">
      <input
        type="text"
        name="username"
        className="login-input"
        placeholder="Usuario"
      />
      <input
        type="password"
        name="password"
        className="login-input"
        placeholder="Contraseña"
      />
      <input
        type="button"
        name="btn-login"
        className="btn-login"
        value="Iniciar Sesión"
      />
    </div>
  );
};

export default UserLogin;
