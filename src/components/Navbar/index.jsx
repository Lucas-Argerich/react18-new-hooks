import React from "react";
import { Navbar as NavBar, Nav, Container } from "react-bootstrap";

export default function Navbar() {
  return (
    <NavBar bg="dark" variant="dark" collapseOnSelect expand="lg">
      <Container>
        <NavBar.Brand href="#">Lucas Argerich</NavBar.Brand>
        <NavBar.Toggle aria-controls="responsive-navbar-nav" />
        <NavBar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#useId">useId</Nav.Link>
            <Nav.Link href="#useTransition">useTransition</Nav.Link>
            <Nav.Link href="#useDeferredValue">useDeferredValue</Nav.Link>
          </Nav>
        </NavBar.Collapse>
      </Container>
    </NavBar>
  );
}
