import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UseDeferredValueBefore from "../../components/useDeferredValueComponents/Before";
import UseDeferredValueNow from "../../components/useDeferredValueComponents/Now";

export default function UseDeferredValue() {
  return (
    <Container id="useDeferredValue" className="pt-5 pb-5">
      <h2>useDeferredValue</h2>
      <p>
        <b>useDeferredValue</b> lets you defer re-rendering a non-urgent part of
        the tree. It is similar to debouncing, but has a few advantages compared
        to it. There is no fixed time delay, so React will attempt the deferred
        render right after the first render is reflected on the screen.
      </p>
      <Container className="mt-4">
        <Row>
          <Col xs={12} md={6} className="d-flex flex-column gap-3">
            <h4>Before</h4>
            <UseDeferredValueBefore />
            <p>
              Before, the list of items was rendered every time the input
              changed (we are rendering a 15000 item list). This was a problem
              because the list was constantly updating and the browser was
              constantly re-rendering the list, causing a performance issue.
            </p>
          </Col>
          <Col xs={12} md={6} className="d-flex flex-column gap-3">
            <h4>Now</h4>
            <UseDeferredValueNow />
            <p>
              Now the list of items is only rendered after a certain amount of
              time has passed since the last type of the user. This is a good
              way to avoid performance issues.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
