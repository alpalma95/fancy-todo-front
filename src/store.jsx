import { createContext, useState } from "react";

export const Context = createContext();

export const Provider = (props) => {
  const [store, setStore] = useState({
    todos: [],
    showMenu: false,
    showSignup: false,
    showLogin: false,
    showTitle: true,
    backEndUrl: "https://fancy-todo-back.vercel.app/api/v1/",
    userToken: localStorage.getItem("jwt-token") || null,
    showMessage: false,
    messageType: "error",
    messageContent: null,
  });
  const actions = {
    getToken: () => {
      setStore({
        ...store,
        userToken: localStorage.getItem("jwt-token") || null,
        showLogin: false,
        showSignup: false,
        showMenu: false,
      });
      console.log("Im working yay");
    },
    addTodo: (todo) => {
      setStore({
        ...store,
        todos: [...store.todos, todo],
      });
      console.log(store.todos);
    },
    addTodoBE: async (todo) => {
      const body = {
        ...todo,
      };
      const options = {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.userToken,
        },
        body: JSON.stringify(body),
      };

      try {
        const response = await fetch(`${store.backEndUrl}todos`, options);
        const data = await response.json();
        console.log(data);
      } catch (err) {
        alert(err.message);
      }
    },
    markAsFinished: (e) => {
      const todosArray = [...store.todos].map((x) => {
        let i;
        if (e.target.id === x.uid) {
          i = { ...x };
          i.finished = true;
        } else {
          i = { ...x };
        }
        return i;
      });
      setStore({ ...store, todos: todosArray });
    },
    markAsFinishedBE: async (todo) => {
      const body = {
        finished: true,
      };
      const options = {
        method: "PATCH",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.userToken,
        },
        body: JSON.stringify(body),
      };

      try {
        const response = await fetch(
          `${store.backEndUrl}todos/${todo.uid}`,
          options
        );
        const data = await response.json();
        console.log(data);
      } catch (err) {
        alert(err.message);
      }
    },
    removeCompleted: () => {
      const todosFiltered = store.todos.filter((x) => !x.finished);
      setStore({ ...store, todos: todosFiltered });
    },
    removeCompletedBE: async () => {
      const options = {
        method: "DELETE",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.userToken,
        },
      };

      try {
        await fetch(`${store.backEndUrl}todos`, options);
      } catch (err) {
        alert(err.message);
      }
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
    signupHandler: async (email, password, passwordConfirm) => {
      const body = {
        email,
        password,
        passwordConfirm,
      };
      const options = {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      };
      try {
        const respose = await fetch(`${store.backEndUrl}users/signup`, options);
        const data = await respose.json();
        localStorage.setItem("jwt-token", data.token);
        if (data.status === "success") {
          setStore({
            ...store,
            userToken: data.token,
            showSignup: false,
            showMenu: false,
            showMessage: true,
            messageType: "success",
            messageContent: data.message,
          });
        } else {
          localStorage.removeItem("jwt-token");

          setStore({
            ...store,
            messageType: "error",
            showMessage: true,
            messageContent: data.message,
          });
        }
      } catch (err) {
        localStorage.removeItem("jwt-token");

        setStore({
          ...store,
          messageType: "error",
          showMessage: true,
          messageContent: err.message,
        });
      }
    },
    loginHandler: async (email, password) => {
      const body = {
        email,
        password,
      };
      const options = {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      };
      try {
        const respose = await fetch(`${store.backEndUrl}users/login`, options);
        const data = await respose.json();
        console.log(data);
        localStorage.setItem("jwt-token", data.token);
        if (data.status === "success") {
          setStore({
            ...store,
            userToken: data.token,
            showLogin: false,
            showMenu: false,
            showMessage: true,
            messageType: "success",
            messageContent: data.message,
          });
        } else {
          localStorage.removeItem("jwt-token");

          setStore({
            ...store,
            messageType: "error",
            showMessage: true,
            messageContent: data.message,
          });
        }
      } catch (err) {
        localStorage.removeItem("jwt-token");

        setStore({
          ...store,
          messageType: "error",
          showMessage: true,
          messageContent: err.message,
        });
      }
    },
    logoutHandler: () => {
      localStorage.removeItem("jwt-token");
      setStore({
        ...store,
        userToken: null,
        todos: [],
        showMenu: false,
        showMessage: true,
        messageType: "success",
        messageContent: "See you soon! 🍻",
      });
    },
    fetchTodos: async () => {
      if (!store.userToken) return;

      const options = {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.userToken,
        },
      };

      try {
        const response = await fetch(`${store.backEndUrl}todos`, options);
        const data = await response.json();
        setStore({ ...store, todos: [...data.data.todos] });
      } catch (err) {
        alert(err.message);
      }
    },
    showMessageHandler: () => {
      setStore({ ...store, showMessage: !store.showMessage });
    },
  };

  return (
    <Context.Provider value={{ store, actions }}>
      {props.children}
    </Context.Provider>
  );
};
