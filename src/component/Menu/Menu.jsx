import React, { useState, useContext } from "react";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";
import { Context } from "../../store.jsx";
import "./Menu.css";

const Menu = () => {
  const { store, actions } = useContext(Context);
  const menu = (
    <ul className="menu__list">
      <li className="menu__list-item" onClick={actions.showLoginHandler}>
        Login
      </li>
      <li className="menu__list-item" onClick={actions.showSignupHandler}>
        Signup
      </li>
    </ul>
  );

  return (
    <div className="menu">
      {store.showSignup ? <Signup /> : store.showLogin ? <Login /> : menu}
    </div>
  );
};

export default Menu;
