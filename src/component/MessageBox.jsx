import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store.jsx";
import "./MessageBox.css";

const MessageBox = () => {
  const { store, actions } = useContext(Context);

  const [fade, setFade] = useState("");

  useEffect(() => {
    if (!store.showMessage) return;
    setFade("");
    setTimeout(() => {
      setFade("moveUpAndFade");
    }, 1900);

    setTimeout(() => {
      actions.showMessageHandler();
    }, 2000);
  }, [store.showMessage]);

  return (
    <div
      className={`message-box ${fade} ${
        store.messageType === "error"
          ? "message-box--error"
          : "message-box--success"
      } ${store.showMessage ? "grid" : "none"}`}
    >
      <p>{store.messageContent}</p>
    </div>
  );
};

export default MessageBox;
