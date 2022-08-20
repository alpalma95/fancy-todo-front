import React, { useState, useContext } from "react";
import { Context } from "../../store";

const Todo = ({ id, text, todo }) => {
  const { store, actions } = useContext(Context);
  const [showRemove, setShowRemove] = useState(true);

  return (
    <li
      className={`todo-item ${todo.finished ? `todo-item--finished` : ``}`}
      key={todo.id}
    >
      {text}
      <span
        role="img"
        aria-label="red cross"
        className={`todo-item__remove ${todo.finished ? `hidden` : ``}`}
        id={id}
        onClick={actions.markAsFinished}
      >
        ❌
      </span>
    </li>
  );
};

export default Todo;
