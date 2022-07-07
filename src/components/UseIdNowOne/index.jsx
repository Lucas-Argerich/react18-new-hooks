import React, { useId } from "react";

export default function UseIdNowOne() {
  const id = useId();
  return (
    <>
      <div id={id} className="bg-light d-flex gap-2 p-2">
        <h5>Component id:</h5>
        <span>{id}</span>
      </div>
    </>
  );
}
