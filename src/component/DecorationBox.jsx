import React, { useContext } from "react";
import { Context } from "../store.jsx";

const DecorationBox = ({ classNumber }) => {
  const { store, actions } = useContext(Context);
  return (
    <div
      className={`decoration-box decoration-box__${classNumber} ${
        store.todos.length ? "move-up" : ""
      }`}
    ></div>
  );
};

export default DecorationBox;
