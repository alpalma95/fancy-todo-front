import { createContext, useState } from "react";

export const Context = createContext();

export const Provider = (props) => {
  const [store, setStore] = useState({
    todos: [],
    showMenu: false,
    showSignup: false,
    showLogin: false,
    showTitle: true,
  });
  const actions = {
    addTodo: (todo) => {
      setStore({
        ...store,
        todos: [...store.todos, todo],
      });
      console.log(store.todos);
    },
    markAsFinished: (e) => {
      const todosArray = [...store.todos].map((x) => {
        let i;
        if (e.target.id === x.id) {
          i = { ...x };
          i.finished = true;
        } else {
          i = { ...x };
        }
        return i;
      });
      setStore({ ...store, todos: todosArray });
    },
    removeCompleted: () => {
      const todosFiltered = store.todos.filter((x) => !x.finished);
      setStore({ ...store, todos: todosFiltered });
    },
    showMenuHandler: () => {
      setStore({
        ...store,
        showMenu: !store.showMenu,
        showLogin: false,
        showSignup: false,
      });
    },
    showSignupHandler: () => {
      setStore({ ...store, showSignup: !store.showSignup });
    },
    showLoginHandler: () => {
      setStore({ ...store, showLogin: !store.showLogin });
    },
  };

  return (
    <Context.Provider value={{ store, actions }}>
      {props.children}
    </Context.Provider>
  );
};
