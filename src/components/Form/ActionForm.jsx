import React from "react";
import { Container, Row, Col, Accordion, Form, Button } from "react-bootstrap";
import ActionBody from "./ActionBody";

const requestBody = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
  };
  
  const responseBody = {
    status: "success",
    data: {
      keyA: "valueA",
      keyB: "valueB"
    }
  };

const ActionForm = ({ }) => {
    return (
        <Container>
            <Form>
                <Form.Group className="mb-6" controlId="actionInputs">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" />
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" placeholder="Password" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="actionSettings">
                    <Form.Check type="switch" label="Print Receipt" />
                    <Form.Check type="switch" label="Confirm Amount" />
                    <Form.Check type="switch" label="Include Amount" />
                    <Form.Check type="switch" label="Beep" />
                    <Form.Check type="switch" label="Signature" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="actionStructure">


                </Form.Group>
                <ActionBody 
                    requestBody={requestBody}
                    responseBody={responseBody} /
                    >
            </Form>
        </Container>

    );
}

export default ActionForm;