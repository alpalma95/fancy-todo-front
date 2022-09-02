import React, { useContext } from "react";
import { Context } from "../../store";
import Todo from "./Todo.jsx";

const TodoList = () => {
  const { store, actions } = useContext(Context);
  return (
    <ul>
      {store.todos.map((x) => {
        return <Todo key={x.uid} id={x.uid} text={x.text} todo={x} />;
      })}
    </ul>
  );
};

export default TodoList;
