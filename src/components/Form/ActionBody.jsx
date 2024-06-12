import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FaCopy } from "react-icons/fa";

import './ActionBody.css'

const ActionBody = ({ requestBody, responseBody }) => {

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <Form.Group className="mb-3" controlId="formBasicRequest">
      <Row>
        <Col xs={12} md={6} className="custom-block-title mb-3">
          <Form.Label className="d-flex justify-content-between align-items-center text-warning">
            Request:
            <Button 
              variant="outline-light" 
              size="sm" 
              onClick={() => handleCopy(JSON.stringify(requestBody, null, 2))}
            >
              <FaCopy />
            </Button>
          </Form.Label>
          <div className="custom-code-block">
            <pre>
              <code>
                {JSON.stringify(requestBody, null, 2)}
              </code>
            </pre>
          </div>
        </Col>
        <Col xs={12} md={6} className="custom-block-title mb-3">
          <Form.Label className="d-flex justify-content-between align-items-center text-warning">
            Response:
            <Button 
              variant="outline-light" 
              size="sm" 
              onClick={() => handleCopy(JSON.stringify(responseBody, null, 2))}
            >
              <FaCopy />
            </Button>
          </Form.Label>
          <div className="custom-code-block">
            <pre>
              <code>
                {JSON.stringify(responseBody, null, 2)}
              </code>
            </pre>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col xs={12} sm={6} md={3} className="mb-2 mb-md-0">
          <Button variant="primary" type="submit" className="w-100">
            Submit Request
          </Button>
        </Col>
        <Col xs={12} sm={6} md={3} className="mb-2 mb-md-0">
          <Button variant="secondary" type="reset" className="w-100">
            Reset Request
          </Button>
        </Col>
      </Row>
    </Form.Group>
  );
};

export default ActionBody;
