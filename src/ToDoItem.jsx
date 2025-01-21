import { useState } from "react";
// import "/public/styles.css";

export default function ToDoItem(props) {
  // const [isDone, setIsDone] = useState(false);

  // function handleClick() {
  //   setIsDone((prevValue) => {
  //     return !prevValue;
  //   });
  // }

  return (
    <div className="flex justify-between items-center">
      <li style={{ textDecoration: props.isDone ? "line-through" : "none" }}>
        {props.text}
      </li>
      <div>
        <button className="btn border rounded bg-blue-400"
          onClick={() => {
            props.onToggle(props.id);
          }}>
          {props.isDone ? "Undo" : "Done"}
        </button>
        <button className="btn border rounded bg-red-500"
          onClick={() => {
            props.onChecked(props.id);
          }}>
          Delete
        </button>
      </div>
    </div>
  );
}
