import { useState } from "react";

export default function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleAdd();
    }
  }

  function handleAdd() {
    props.onAdd(inputText);
    setInputText("");
  }

  return (
    <div className="w-full flex justify-between p-2">
      <input
        className="bg-slate-300 outline-1 outline-black rounded text-black "
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        type="text"
        value={inputText}
      />
      <button className="text-white p-2" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}
