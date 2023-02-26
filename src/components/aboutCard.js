import React from 'react';
import Card from 'react-bootstrap/Card';
import Nav        from 'react-bootstrap/Nav';
import { RenderIcon } from '../utils/renderIcon'

export function AboutCard(props) {
  return (
    <Card style={{ width: '20rem'}} bg="light" p-5>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Img className="img-fluid rounded-circle mb-3" src={props.imgSrc} alt={props.imgAlt} />
        <Card.Text>{props.cardText}</Card.Text>
        <Nav.Link href={props.link} target={props.target}><RenderIcon iconType={props.iconType} /></Nav.Link>
      </Card.Body>
    </Card>
  );
};

