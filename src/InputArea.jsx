import { useState } from "react";

export default function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    setInputText(event.target.value);
  }

  return (
    <div className="flex justify-between">
      <input className="bg-slate-300 outline outline-blue-400 rounded " onChange={handleChange} type="text" value={inputText} />
      <button className="text-white"
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}>
        <span>Add</span>
      </button>
    </div>
  );
}

