import React from "react";
import { Container, Row, Col,  Accordion} from "react-bootstrap";

import "./style.css";

const ActionsAccordionItem = ({ eventKey, header, body }) => {
    return (
        <Accordion.Item eventKey={eventKey}>
        <Accordion.Header>{header}</Accordion.Header>
        <Accordion.Body>{body}</Accordion.Body>
      </Accordion.Item>
    );
}
    export default ActionsAccordionItem;