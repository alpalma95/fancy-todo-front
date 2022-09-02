import React, { useState, useContext } from "react";
import BackBtn from "./BackBtn.jsx";
import { Context } from "../../store.jsx";

import "./Form.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { store, actions } = useContext(Context);

  const setEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const setPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="form login">
      <BackBtn formType="login" />
      <div className="email-form">
        <label htmlFor="email_login">
          <i className="fa-solid fa-envelope"></i>
        </label>
        <input
          type="text"
          id="email_login"
          placeholder="Email"
          value={email}
          onChange={setEmailHandler}
        />
      </div>
      <div className="password-form">
        <label htmlFor="password_login">
          <i className="fa-solid fa-key"></i>
        </label>
        <input
          type="password"
          id="password_login"
          placeholder="Password"
          value={password}
          onChange={setPasswordHandler}
        />
      </div>
      <button onClick={() => actions.loginHandler(email, password)}>
        Login
      </button>
    </div>
  );
};

export default Login;
