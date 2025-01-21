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
    <div className="listItem">
      <li style={{ textDecoration: props.isDone ? "line-through" : "none" }}>
        {props.text}
      </li>
      <div>
        <button
          onClick={() => {
            props.onToggle(props.id);
          }}>
          {props.isDone ? "Undo" : "Done"}
        </button>
        <button
          onClick={() => {
            props.onChecked(props.id);
          }}>
          Delete
        </button>
      </div>
    </div>
  );
}
