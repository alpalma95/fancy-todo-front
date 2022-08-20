import React, { useContext } from "react";
import { Context } from "../../store";
import Todo from "./Todo.jsx";

const TodoList = ({ todos, setTodos, setTodosEmpty, counter, setCounter }) => {
  const { store, actions } = useContext(Context);
  return (
    <ul>
      {store.todos.map((x) => {
        return (
          <Todo
            key={x.id}
            id={x.id}
            text={x.text}
            todos={todos}
            todo={x}
            setTodos={setTodos}
            setTodosEmpty={setTodosEmpty}
            counter={counter}
            setCounter={setCounter}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
