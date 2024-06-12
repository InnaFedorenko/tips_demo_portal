import React from "react";
import { Container, Row, Col,  Accordion} from "react-bootstrap";
import ActionsAccordionItem from "./Accordion/ActionsAccordionItem";
import paymentActionsData from "../data/paymentactions.js"
import deviceActionsData from "../data/deviceactions.js"


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