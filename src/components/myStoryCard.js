import React from 'react';
import Card from 'react-bootstrap/Card';

export function StoryCard(props) {
  return (
    <div className="container p-1">
      <div className="col-md">
        <div className="row g-4">
          <Card style={{ width: '70rem'}} bg="secondary" text="dark">
            <Card.Body>
              <Card.Title><strong>{props.question}</strong></Card.Title>
              <Card.Text>{props.first}</Card.Text>
              <Card.Text>{props.second}</Card.Text>
              <Card.Text>{props.third}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};
