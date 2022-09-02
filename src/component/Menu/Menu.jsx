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

  const logoutBtn = (
    <ul className="menu__list">
      <li className="menu__list-item welcome">
        Welcome! <i className="fa-regular fa-face-smile-beam smiley"></i>
      </li>
      <li className="menu__list-item logout" onClick={actions.logoutHandler}>
        <i className="fa-solid fa-right-from-bracket logout-icon"></i>Logout
      </li>
    </ul>
  );

  return (
    <div className="menu">
      {store.showSignup ? (
        <Signup />
      ) : store.showLogin ? (
        <Login />
      ) : store.userToken ? (
        logoutBtn
      ) : (
        menu
      )}
    </div>
  );
};

export default Menu;
