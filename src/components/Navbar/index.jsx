import React from "react";
import { Navbar as NavBar, Nav, Container } from "react-bootstrap";

export default function Navbar() {
  return (
    <NavBar bg="dark" variant="dark">
      <Container>
        <NavBar.Brand href="#">Lucas Argerich</NavBar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#useId">useId</Nav.Link>
          <Nav.Link href="#useTransition">useTransition</Nav.Link>
          <Nav.Link href="#useDeferredValue">useDeferredValue</Nav.Link>
          <Nav.Link href="#useSyncExternalStore">useSyncExternalStore</Nav.Link>
          <Nav.Link href="#useInsertionEffect">useInsertionEffect</Nav.Link>
        </Nav>
      </Container>
    </NavBar>
  );
}
