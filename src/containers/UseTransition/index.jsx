import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UseTransitionBefore from "../../components/useTransitionComponents/Before";
import UseTransitionNow from "../../components/useTransitionComponents/Now";

export default function UseTransition() {
  return (
    <Container id="useTransition" className="pt-5 pb-5">
      <h2>useTransition</h2>
      <p>
        <b>useTransition</b> and <b>startTransition</b> let you mark some state
        updates as not urgent. Other state updates are considered urgent by
        default. This can speed up rendering elements whose content is
        constantly updating background side-data.
      </p>
      <Container className="mt-4">
        <Row>
          <Col xs={12} md={6} className="d-flex flex-column gap-3">
            <h4>Before</h4>
            <UseTransitionBefore />
            <p>
              Before, the list of items was rendered every time the input
              changed (we are rendering a 15000 item list). This was a problem
              because the list was constantly updating and the browser was
              constantly re-rendering the list, causing a performance issue.
            </p>
          </Col>
          <Col xs={12} md={6} className="d-flex flex-column gap-3">
            <h4>Now</h4>
            <UseTransitionNow />
            <p>
              Now the list of items is rendered on low priority. Although this
              is not perfect, the input is rendered with a higher priority than
              the list, enhancing the performance of the application and the
              user experience.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
