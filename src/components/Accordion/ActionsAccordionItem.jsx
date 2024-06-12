import React from "react";
import { Container, Row, Col,  Accordion} from "react-bootstrap";
import ActionForm from "../Form/ActionForm";

const ActionsAccordionItem = ({ eventKey, header, body }) => {
    return (
        <Accordion.Item eventKey={eventKey}>
        <Accordion.Header>{header}</Accordion.Header>
        <Accordion.Body>{body}
        <ActionForm/>
        </Accordion.Body>

      </Accordion.Item>
    );
}
    export default ActionsAccordionItem;