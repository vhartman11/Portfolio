import React from 'react';
import Card from 'react-bootstrap/Card';

export function StoryCard(props) {
  return (
    <Card style={{ width: '70rem'}} bg="secondary" p-5>
      <Card.Body>
        <Card.Title><strong>{props.question}</strong></Card.Title>
        <Card.Text>{props.first}</Card.Text>
        <Card.Text>{props.second}</Card.Text>
        <Card.Text>{props.third}</Card.Text>
      </Card.Body>
    </Card>
  );
};
