import { Route, Routes } from "react-router-dom";

import AddEvent from "./pages/AddEvent";
import Home from "./pages/Home";
import { useState } from "react";

import data from "./store/db.json";

function App() {
  const [events, setEvents] = useState(data);

  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={<Home events={events} setEvents={setEvents} />}
        ></Route>
        <Route
          path="/addEvent"
          element={<AddEvent events={events} setEvents={setEvents} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
