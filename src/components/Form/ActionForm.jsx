import React from "react";
import { Container, Row, Col, Accordion, Form, Button } from "react-bootstrap";
import ActionBody from "./ActionBody";
import ActionSettings from "./ActionSettings"

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
                <ActionSettings/>
                <ActionBody 
                    requestBody={requestBody}
                    responseBody={responseBody} /
                    >
            </Form>
        </Container>
    );
};

export default ActionForm;