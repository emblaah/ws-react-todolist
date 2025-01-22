import { useState } from "react";

export default function ToDoItem(props) {


  return (
    <div className="flex items-center justify-between p-2">
      <li className="bg-slate-300 text-black rounded-lg p-2" style={{ textDecoration: props.isDone ? "line-through" : "none" }}>
        {props.text}
      </li>
      <div className="">
        <button className="border rounded-lg bg-blue-400 p-2 mr-1"
          onClick={() => {
            props.onToggle(props.id);
          }}>
          {props.isDone ? "Undo" : "Done"}
        </button>
        <button className="border rounded-lg bg-red-500 p-2"
          onClick={() => {
            props.onChecked(props.id);
          }}>
          Delete
        </button>
      </div>
    </div>
  );
}
