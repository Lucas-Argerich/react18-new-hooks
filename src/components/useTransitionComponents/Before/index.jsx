import React, { useState } from "react";

export default function UseTransitionBefore() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 10000;

  function handleChange(e) {
    setInput(e.target.value);
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(e.target.value);
    }
    setList(l);
  }

  return (
    <>
      <div className="bg-light d-flex gap-2 p-2 overflow-hidden">
        <input type="text" value={input} onChange={handleChange} />
        {list.map((item, index) => {
          return (
            <span className="w-100" key={index}>
              {item}
            </span>
          );
        })}
      </div>
    </>
  );
}
