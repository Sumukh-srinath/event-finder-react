import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";

export default function AddEvent({ events, setEvents }) {
  const initialValues = {
    title: "",
    body: "",
    id: events.length + 1,
  };

  let navigate = useNavigate();

  const [event, setEvent] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setEvent({
      ...event,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let eventsObj = [...events];
    eventsObj.push(event);
    setEvents(eventsObj);
    navigate("/");
  };

  return (
    <div className="my-3">
      <div className="d-flex flex-row justify-content-between">
        <h4>Add Event</h4>
        <Link to="/">
          <Button variant="outline-secondary">Go Back</Button>
        </Link>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Event Title</Form.Label>
          <Form.Control
            name="title"
            type="text"
            placeholder="Enter the title of the Event."
            onChange={handleInputChange}
            value={event.title}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Body</Form.Label>
          <Form.Control
            name="body"
            type="text"
            placeholder="Enter event description."
            value={event.body}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Save Event
        </Button>
      </Form>
    </div>
  );
}
