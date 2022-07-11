import React, { useState } from "react";
import List from "./List";

export default function UseDeferredValueBefore() {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <>
      <div className="bg-light d-flex gap-2 p-2 overflow-hidden">
        <input type="text" value={input} onChange={handleChange} />
        <List input={input} />
      </div>
    </>
  );
}
