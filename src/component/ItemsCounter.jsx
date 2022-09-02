import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store";

const ItemsCounter = () => {
  const { store, actions } = useContext(Context);
  const [items, setItems] = useState(``);

  useEffect(() => {
    const counter = store.todos.filter((x) => !x.finished);
    setItems(counter.length);
  }, [store.todos]);

  return (
    <div className="items-counter">
      <small>
        {items} {`${items === 1 ? `item` : `items`}`} left
      </small>
      <button
        className="items-counter__btn"
        onClick={() => {
          actions.removeCompleted(), actions.removeCompletedBE();
        }}
      >
        Delete Completed
      </button>
    </div>
  );
};

export default ItemsCounter;
