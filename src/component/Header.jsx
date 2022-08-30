import React, { useContext } from "react";
import { Context } from "../store.jsx";
const Header = () => {
  const { store, actions } = useContext(Context);

  return <h1 className="header">todos</h1>;
};

export default Header;
