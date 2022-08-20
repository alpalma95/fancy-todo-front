import React, { useContext } from "react";
import { Context } from "../store";

const Input = ({
  input,
  setInput,
  todos,
  setTodos,
  setTodosEmpty,
  counter,
  setCounter,
}) => {
  const { store, actions } = useContext(Context);

  const setInputHandler = (e) => {
    setInput(e.target.value);
  };

  const newTodoHandler = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      actions.addTodo([
        ...todos,
        { id: `${Math.random() * 5000}`, text: `${input}`, finished: false },
      ]);
      setInput("");
      setCounter(counter + 1);
    }
  };

  return (
    <input
      placeholder="Enter a task and hit Enter!"
      type="text"
      value={input}
      onChange={setInputHandler}
      onKeyPress={newTodoHandler}
    />
  );
};

export default Input;
