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
    <div className="flex flex-col items-center w-full bg-gray-100 min-h-[500px] max-w-[500px] min-w-[250px] rounded-xl shadow-lg">
      <div className="p-4 flex flex-col justify-center items-center">
        <h1 className="box-decoration-clone bg-gradient-to-r from-yellow-600 to-blue-500 text-white px-2 rounded-lg shadow-md">
          To-Do List
        </h1>
      </div>
      <InputArea onAdd={addItem} />

      <div className="flex flex-col w-full">
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
