import React, { useState, useContext } from "react";
import BackBtn from "./BackBtn.jsx";
import { Context } from "../../store.jsx";
import "./Form.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { store, actions } = useContext(Context);

  const setEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const setPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const setPasswordConfirmHandler = (e) => {
    setPasswordConfirm(e.target.value);
  };

  return (
    <div className="form signup">
      <BackBtn formType="signup" />
      <div className="email-form">
        <label htmlFor="email_signup">
          <i className="fa-solid fa-envelope"></i>
        </label>
        <input
          type="text"
          id="email_signup"
          placeholder="Email"
          value={email}
          onChange={setEmailHandler}
        />
      </div>
      <div className="password-form">
        <label htmlFor="password_signup">
          <i className="fa-solid fa-key"></i>
        </label>
        <input
          type="password"
          id="password_signup"
          placeholder="Password"
          value={password}
          onChange={setPasswordHandler}
        />
      </div>
      <div className="password-form">
        <label htmlFor="password_confirm_signup">
          <i className="fa-solid fa-key"></i>
        </label>
        <input
          type="password"
          id="password_confirm_signup"
          placeholder="Confirm"
          value={passwordConfirm}
          onChange={setPasswordConfirmHandler}
        />
      </div>
      <button
        onClick={() => actions.signupHandler(email, password, passwordConfirm)}
      >
        Signup
      </button>
    </div>
  );
};

export default Signup;
