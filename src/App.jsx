import React, { useState, useEffect, useContext } from "react";
import { Context } from "./store";

import "./styles.css";
import Input from "./component/Input.jsx";
import TodoList from "./component/TodoList/TodoList.jsx";
import EmptyList from "./component/TodoList/EmptyList.jsx";
import ItemsCounter from "./component/ItemsCounter.jsx";
import DecorationBox from "./component/DecorationBox.jsx";
import Header from "./component/Header.jsx";
import MenuIcon from "./component/Menu/MenuIcon.jsx";
import Overlay from "./component/Menu/Overlay.jsx";

export default function App() {
  const { store, actions } = useContext(Context);

  return (
    <div className="App">
      <Header />
      <MenuIcon />
      <Overlay />
      <ul className={`list ${store.todos.length ? "move-up" : ""}`}>
        <li>
          <Input />
        </li>
        <li>
          {store.todos.length === 0 ? (
            <EmptyList />
          ) : (
            <>
              <TodoList className="todo-list" />
              <ItemsCounter />
            </>
          )}
        </li>
      </ul>
      <DecorationBox classNumber="1" />
      <DecorationBox classNumber="2" />
    </div>
  );
}
