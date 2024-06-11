import React from "react";
import { Container, Row, Col,  Accordion} from "react-bootstrap";
import ActionsAccordionItem from "../ActionsAccordionItem";

import "./style.css";
const paymentActionsData = [
    {
      eventKey: "0",
      header: "AuthCard",
      body: "  Initiate a payment authorization request for a card payment."
    },
    {
      eventKey: "1",
      header: "ReadCard",
      body: "Generate a payment token via EMV, NFC, or MSR"
    },
    {
        eventKey: "2",
        header: "ReadManual",
        body: "Generate a payment token via manually-keyed card data"
    },
    {
        eventKey: "3",
        header: "Tips",
        body: "Prompt for a tip amount for a payment"
    }
    // Add more items as needed
  ];
  const deviceActionsData = [
    {
        eventKey: "0",
        header: "ReadConfirmation",
        body: "Prompt for confirmation response"
    },
    {
        eventKey: "1",
        header: "ReadInput",
        body: "Prompt for user input"
    },
    {
        eventKey: "2",
        header: "ReadSignature",
        body: "Prompt to capture cardholder's signature"
    }
            
]// Add more items as needed

const Actions = ({actionType}) => {
    let actionsData = actionType === 'device' ? deviceActionsData : paymentActionsData;
  return (
    <Container fluid className="actions-container">
      <Row>
        <Col>
          <p>
            This page will allow the user to perform actions on payments.
          </p>
          <Accordion defaultActiveKey = "0">
            {actionsData.map(({ eventKey, header, body }) => (
              <ActionsAccordionItem
                key={eventKey}
                eventKey={eventKey}
                header={header}
                body={body}
              />
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

export default Actions;