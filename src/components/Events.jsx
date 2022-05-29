import React from "react";
import EventCard from "./EventCard";

export default function Events({ events, setEvents }) {
  const deleteEvent = (id) => {
    let eventsObj = [...events];
    setEvents(eventsObj.filter((e) => e.id !== id));
  };

  return (
    <div className="w-100">
      {events &&
        events
          .map((e, idx) => {
            return <EventCard event={e} deleteEvent={deleteEvent} key={idx} />;
          })
          .reverse()}
    </div>
  );
}
