import React from "react";

export default function UseIdBefore() {
  const id =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);

  return (
    <>
      <div className="bg-light d-flex gap-2 p-2">
        <h5>Component id:</h5>
        <span>{id}</span>
      </div>
    </>
  );
}
