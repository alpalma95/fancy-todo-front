import React, { useState, useEffect, useContext } from "react";
import { Context } from "./store";

import "./styles.css";
import Input from "./component/Input.jsx";
import TodoList from "./component/TodoList/TodoList.jsx";
import EmptyList from "./component/TodoList/EmptyList.jsx";
import ItemsCounter from "./component/ItemsCounter.jsx";
import DecorationBox from "./component/DecorationBox.jsx";
import Header from "./component/Header.jsx";

export default function App() {
  const { store, actions } = useContext(Context);
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [todosEmpty, setTodosEmpty] = useState(true);
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <Header />
      <ul className="list">
        <li>
          <Input
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            setTodosEmpty={setTodosEmpty}
            counter={counter}
            setCounter={setCounter}
          />
        </li>
        <li>
          {store.todos.length === 0 ? (
            <EmptyList />
          ) : (
            <>
              <TodoList
                className="todo-list"
                todos={todos}
                setTodos={setTodos}
                counter={counter}
                setCounter={setCounter}
              />
              <ItemsCounter
                counter={counter}
                todos={todos}
                setTodos={setTodos}
              />
            </>
          )}
        </li>
      </ul>
      <DecorationBox classNumber="1" />
      <DecorationBox classNumber="2" />
    </div>
  );
}
