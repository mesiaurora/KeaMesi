import React from 'react'
import {Accordion, Card, Button} from 'react-bootstrap'
import '../Styles/styles.css'

const CollapsibleText = (props) => {

  const accordionDate = props.date;
  const accordionHeading = props.heading;
  const accordionRole = props.role;
  const cardBody = props.body;


  return (
    <div>
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              {accordionHeading} <br />
              {accordionRole} <br />
              {accordionDate}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>{cardBody}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

    </div>

  )
}

export default CollapsibleText
