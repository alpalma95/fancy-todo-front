import React, { useState } from "react";
import BackBtn from "./BackBtn.jsx";
import "./Form.css";

const Login = () => {
  return (
    <div className="form login">
      <BackBtn formType="login" />
      <div className="email-form">
        <label htmlFor="email_login">
          <i className="fa-solid fa-envelope"></i>
        </label>
        <input type="text" id="email_login" placeholder="Email" />
      </div>
      <div className="password-form">
        <label htmlFor="password_login">
          <i className="fa-solid fa-key"></i>
        </label>
        <input type="text" id="password_login" placeholder="Password" />
      </div>
      <button>Login</button>
    </div>
  );
};

export default Login;
