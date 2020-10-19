import React, { useState } from "react";
import "../css/login.css";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user && password) {
      const person = { id: new Date().getTime().toString(), user, password };
      setUsers((users) => {
        return [...users, person];
      });
    }
    setUser("");
    setPassword("");
  };

  return (
    <>
      <div className="row">
        <h1 className="center-align">iUnha</h1>
      </div>
      <div className="row">
        <div className="col m2"></div>
        <form className="col m8">
          <div className="row">
            <div className="input-field col m12">
              <input
                id="user"
                type="text"
                className="validate col m8"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              <label htmlFor="user" className="active">
                Usuário
              </label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input
                id="password"
                type="password"
                className="validate col m8"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password" className="active">
                Senha
              </label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light "
            type="submit"
            name="action"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
        <div className="col m2"></div>
      </div>
    </>
  );
}

export { Login };
