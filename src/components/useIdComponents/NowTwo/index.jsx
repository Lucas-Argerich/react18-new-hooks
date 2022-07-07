import React, { useId } from "react";

export default function UseIdNowTwo() {
  const id = useId();
  return (
    <>
      <div id={id} className="bg-light p-2 d-flex flex-column gap-2">
        <div className="d-flex gap-2">
          <h5>Component id:</h5>
          <span>{id}</span>
        </div>
        <div id={`${id}-childOne`}>
          <p className="m-0">
            <b>Child id: </b>
            {`${id}-childOne`}
          </p>
        </div>
        <div id={`${id}-childTwo`}>
          <p className="m-0">
            <b>Other child id: </b>
            {`${id}-childTwo`}
          </p>
        </div>
      </div>
    </>
  );
}
