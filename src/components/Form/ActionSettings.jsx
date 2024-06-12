import React from "react";
import { Form, Row, Col, FloatingLabel } from "react-bootstrap";

import "./ActionSettings.css"; // Import your custom CSS file

const ActionSettings = ({}) => {
  return (
    <>
      <Row>
        {/* Column for Labels and Controls */}
        <Col xs={12} md={6} className="custom-col">
          <div className="custom-block">
            <Form.Group className="mb-3" controlId="actionInputs">
              <FloatingLabel controlId="floatingAmount" label="Amount: $">
                <Form.Control type="text" placeholder="Enter amount" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPrompt" label="Prompt:" className="mt-3">
                <Form.Control type="text" placeholder="Enter prompt" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingDropdown" label="Format:" className="mt-3">
                <Form.Select aria-label="Default select example">
                  <option value="phone">Phone Number</option>
                  <option value="amount">Amount Entry</option>
                  <option value="date">Month / Year Date</option>
                  <option value="numeric">Numeric Entry</option>
                  <option value="alphanumeric">Alphanumeric</option>
                </Form.Select>
              </FloatingLabel>
            </Form.Group>
          </div>
        </Col>

        {/* Column for Checkboxes */}
        <Col xs={12} md={6} className="custom-col">
          <div className="custom-block">
            <Form.Group className="mb-3" controlId="actionSettings">
              <Row>
                <Col xs={12} sm={6}>
                  <Form.Check type="switch" label="Print Receipt" />
                </Col>
                <Col xs={12} sm={6}>
                  <Form.Check type="switch" label="Confirm Amount" />
                </Col>
                <Col xs={12} sm={6}>
                  <Form.Check type="switch" label="Include Amount" />
                </Col>
                <Col xs={12} sm={6}>
                  <Form.Check type="switch" label="Beep" />
                </Col>
                <Col xs={12} sm={6}>
                  <Form.Check type="switch" label="Signature" />
                </Col>
              </Row>
            </Form.Group>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ActionSettings;
