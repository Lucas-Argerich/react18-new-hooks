import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UseIdBefore from "../../components/UseIdBefore";
import UseIdNowOne from "../../components/UseIdNowOne";
import UseIdNowTwo from "../../components/useIdNowTwo";

export default function UseId() {
  return (
    <Container id="useId">
      <h2>useId</h2>
      <p>
        <b>useId</b> is a new hook for generating unique IDs on both the client
        and server, while avoiding hydration mismatches.
      </p>
      <Container className="mt-4">
        <Row>
          <Col xs={12} md={6} className="d-flex flex-column gap-3">
            <h4>Before</h4>
            <UseIdBefore />
            <UseIdBefore />
            <p>Every id is randomly generated in each render. Unpredictable.</p>
          </Col>
          <Col xs={12} md={6} className="d-flex flex-column gap-3">
            <h4>Now</h4>
            <UseIdNowOne />
            <UseIdNowOne />
            <p>Now each id is automatically generated on render, and is consistent with its last render id while the page does not change.  </p>
            <h4>Other Use</h4>
            <UseIdNowTwo />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
