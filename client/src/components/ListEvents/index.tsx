import { useEffect, useState } from "react";
import "./style.scss";

export const ListEvents = () => {
  const [events, setEvents] = useState([]);

  const getAllEvents = async () => {
    try {
      const res = await fetch("https://elephant-test-001.onrender.com");
      const data = await res.json();
      setEvents(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllEvents();
  }, []);
  return (
    <div className="sectionWrapper">
      <h1>events</h1>
      {events.map((event) => {
        const { id, event_name, event_location } = event;
        return (
          <div className="eventCard" key={id}>
            <h3>{event_name}</h3>
            <p>{event_location}</p>
          </div>
        );
      })}
    </div>
  );
};
