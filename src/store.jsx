import { createContext, useState } from "react";

export const Context = createContext();

export const Provider = (props) => {
  const [store, setStore] = useState({
    todos: [],
  });
  const actions = {
    addTodo: (todo) => {
      setStore({
        ...store,
        todos: [...store.todos, ...todo],
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
  };

  return (
    <Context.Provider value={{ store, actions }}>
      {props.children}
    </Context.Provider>
  );
};
