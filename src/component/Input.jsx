import React, { useContext, useState } from "react";
import { Context } from "../store";
import { v4 as uuidv4 } from "uuid";

const Input = () => {
  const { store, actions } = useContext(Context);
  const [input, setInput] = useState("");

  const setInputHandler = (e) => {
    setInput(e.target.value);
  };

  const newTodoHandler = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      const newTodo = {
        uid: uuidv4(),
        text: input,
        finished: false,
      };
      actions.addTodo(newTodo);
      actions.addTodoBE(newTodo);

      setInput("");
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
