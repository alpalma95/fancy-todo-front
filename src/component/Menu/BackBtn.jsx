import React, { useContext } from "react";
import { Context } from "../../store.jsx";

const BackBtn = ({ formType }) => {
  const { store, actions } = useContext(Context);

  return (
    <i
      className="fa-solid fa-arrow-left back-btn"
      onClick={
        formType === "signup"
          ? actions.showSignupHandler
          : actions.showLoginHandler
      }
    ></i>
  );
};

export default BackBtn;
