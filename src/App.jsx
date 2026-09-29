import React, { useState } from "react";
import "./App.css";

// Memoized Event Card
const EventCard = React.memo(function EventCard({ title }) {
  console.log("EventCard rendered:", title);

  return (
    <div className="event-card">
      <h2>{title}</h2>
    </div>
  );
});

function App() {
  const [count, setCount] = useState(0);

  const events = [
    { id: 1, title: "Tech Fest 2026" },
    { id: 2, title: "AI Workshop" },
    { id: 3, title: "Coding Competition" },
  ];

  return (
    <div className="app">
      <h1>Memoized Event Card</h1>

      <div className="counter-box">
        <h2>Counter: {count}</h2>

        <button onClick={() => setCount(count + 1)}>
          Increment Counter
        </button>
      </div>

      <h2>Upcoming Events</h2>

      <div className="events">
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
          />
        ))}
      </div>
    </div>
  );
}

export default App;