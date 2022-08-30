import React, { useContext } from "react";
import "./Overlay.css";
import Menu from "./Menu.jsx";
import { Context } from "../../store";

const Overlay = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className={`overlay ${store.showMenu ? "" : "none"}`}>
      <Menu />
    </div>
  );
};

export default Overlay;
