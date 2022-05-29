import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Events from "../components/Events";

export default function Home({ events, setEvents }) {
  return (
    <div className="my-3">
      {/* <Alert variant="primary">Welcome to Event Finder App!</Alert> */}
      <div className="d-flex flex-row justify-content-between">
        <h4>Events</h4>
        <Link to="/addEvent">
          <Button variant="outline-primary">Add Event</Button>
        </Link>
      </div>
      <hr />
      <div className="d-flex justify-content-center flex-row flex-wrap">
        <Events events={events} setEvents={setEvents} />
      </div>
    </div>
  );
}
