import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
export default function CardServices(props) {
  return (
    <Card className='shadow' style={{ width: '18rem', cursor:'pointer' }}>
    <Card.Img variant="top" src={props.img} />
    <Card.Body>
      <Card.Title className='text-center'>{props.title}</Card.Title>
      <ListGroup as="ul" className='mt-3'>
          {props.services.map((service, index) => (
            <ListGroup.Item as="li"  key={index} action>
              {service}
            </ListGroup.Item>
          ))}
        </ListGroup>
    </Card.Body>
  </Card>
  )
}
