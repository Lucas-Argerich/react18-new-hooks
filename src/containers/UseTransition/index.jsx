import React from "react";
import { Container } from "react-bootstrap";

export default function UseTransition() {
  return (
    <Container id="useTransition" className="mt-5">
      <h2>useTransition</h2>
      <p><b>useTransition</b> and <b>startTransition</b> let you mark some state updates as not urgent. Other state updates are considered urgent by default. This can speed up rendering elements whose content is constantly updating background side-data.</p>
    </Container>
  );
}
