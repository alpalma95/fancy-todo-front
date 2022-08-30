import React, { useState } from "react";
import BackBtn from "./BackBtn.jsx";
import "./Form.css";

const Signup = () => {
  return (
    <div className="form signup">
      <BackBtn formType="signup" />
      <div className="email-form">
        <label htmlFor="email_signup">
          <i className="fa-solid fa-envelope"></i>
        </label>
        <input type="text" id="email_signup" placeholder="Email" />
      </div>
      <div className="password-form">
        <label htmlFor="password_signup">
          <i className="fa-solid fa-key"></i>
        </label>
        <input type="text" id="password_signup" placeholder="Password" />
      </div>
      <div className="password-form">
        <label htmlFor="password_confirm_signup">
          <i className="fa-solid fa-key"></i>
        </label>
        <input type="text" id="password_confirm_signup" placeholder="Confirm" />
      </div>
      <button>Signup</button>
    </div>
  );
};

export default Signup;
