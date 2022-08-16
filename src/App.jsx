import React, { useState, useEffect } from "react";
import "./styles.css";
import Input from "./component/Input.jsx";
import TodoList from "./component/TodoList/TodoList.jsx";
import EmptyList from "./component/TodoList/EmptyList.jsx";
import ItemsCounter from "./component/ItemsCounter.jsx";
import DecorationBox from "./component/DecorationBox.jsx";
import Header from "./component/Header.jsx";

export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [todosEmpty, setTodosEmpty] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (
      todos.length === 0 ||
      todos.every((x) => {
        return x.finished;
      })
    ) {
      setTodosEmpty(true);
    }
  }, [todos]);

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
          {todosEmpty ? (
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
              <ItemsCounter counter={counter} />
            </>
          )}
        </li>
      </ul>
      <DecorationBox classNumber="1" />
      <DecorationBox classNumber="2" />
    </div>
  );
}
