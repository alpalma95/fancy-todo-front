import React, { useState, useContext } from "react";
import { Context } from "../../store";

const Todo = ({ id, text, todos, setTodos, counter, setCounter, todo }) => {
  const { store, actions } = useContext(Context);
  const [showRemove, setShowRemove] = useState(true);

  // const removeTodoHandler = (e) => {
  //   const todosArray = [...todos].map((x) => {
  //     let i;
  //     if (e.target.id === x.id) {
  //       i = { ...x };
  //       i.finished = true;
  //     } else {
  //       i = { ...x };
  //     }
  //     return i;
  //   });
  //   setTodos(todosArray);
  //   setCounter(counter - 1);
  //   setShowRemove(false);
  // };

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
