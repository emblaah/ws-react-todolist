import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);
  // const [isDoneList, setIsDoneList] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => {
      return [
        ...prevItems,
        { id: crypto.randomUUID(), text: inputText, isDone: false },
      ];
    });
    //setItems("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  }

  function toggleItem(id) {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          const newIsDone = !item.isDone;

          return { ...item, isDone: newIsDone };
        }
        return item;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem) => (
            <ToDoItem
              key={todoItem.id}
              id={todoItem.id}
              text={todoItem.text}
              isDone={todoItem.isDone}
              onChecked={deleteItem}
              onToggle={toggleItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
