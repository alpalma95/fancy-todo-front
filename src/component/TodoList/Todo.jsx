import React, { useContext } from "react";
import { Context } from "../../store";

const Todo = ({ id, text, todo }) => {
  const { store, actions } = useContext(Context);

  const markAsFinishedHanlder = (e) => {
    actions.markAsFinished(e);
    actions.markAsFinishedBE(todo);
  };

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
      >
        <i
          className="fa-solid fa-trash"
          id={id}
          onClick={markAsFinishedHanlder}
        ></i>
      </span>
    </li>
  );
};

export default Todo;
