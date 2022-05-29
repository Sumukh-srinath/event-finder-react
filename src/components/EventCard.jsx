import React from "react";
import { Card, Button } from "react-bootstrap";

export default function EventCard({ event, deleteEvent }) {
  return (
    <Card className="col-12 my-2">
      <Card.Header>{event.title}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>{event.body}</p>
        </blockquote>
      </Card.Body>
      <Card.Footer className="text-muted text-end">
        <Button variant="outline-danger" onClick={() => deleteEvent(event.id)}>
          Delete Event
        </Button>
      </Card.Footer>
    </Card>
  );
}
