import React, { useContext, useState, useEffect } from "react";
import "./MenuIcon.css";
import { Context } from "../../store";

const MenuIcon = () => {
  const { store, actions } = useContext(Context);
  const [icon, setIcon] = useState("fa-solid fa-ellipsis-vertical");

  useEffect(() => {
    store.showMenu
      ? setIcon("fa-solid fa-xmark")
      : setIcon("fa-solid fa-ellipsis-vertical");
  }, [store.showMenu]);

  return (
    <div className="menu-icon" onClick={actions.showMenuHandler}>
      <i className={`${icon} menu-icon__icon`}></i>
    </div>
  );
};

export default MenuIcon;
