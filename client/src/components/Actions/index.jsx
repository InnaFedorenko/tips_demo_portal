import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./style.css";

const Actions = () => {
  return (
    <Container fluid className="actions-container">
      <Row>
        <Col>
          <h1>Payment Actions</h1>
          <p>
            This page will allow the user to perform actions on payments.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Actions;