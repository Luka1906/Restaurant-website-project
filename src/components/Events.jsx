import { useEffect, useState } from "react";
import Event from "./Event";
import Button from "./UI/Button";

// Helper Functions
{
  /* Returning array with the unique city names*/
}
const eventsCitiesArray = (events) => {
  const uniqueCities = [...new Set(events.flatMap((event) => event.cities))];
  return uniqueCities;
};
{
  /* Function for formatting APIs date property */
}
const cleanDate = (dateStr) => {
  return dateStr
    .replace("st", "")
    .replace("nd", "")
    .replace("rd", "")
    .replace("th", "");
};

{
  /* Function for filtering event based on date (date in the past or no date)*/
}

const getUpcomingEvents = (events) => {
  const now = new Date();
  const withDates = [];
  const withoutDates = [];

  for (const event of events) {
    if (event.date) {
      const formattedEventDate = cleanDate(event.date);
      const eventDate = new Date(formattedEventDate);

      if (eventDate > now) {
        withDates.push(event);
      }
    } else {
      withoutDates.push(event);
    }
  }

  return [...withDates, ...withoutDates];
};

{
  /* Function for filtering bases on the city name */
}

const filterEventsByCity = (events, city) => {
  if (city !== "All") {
    return events.filter(
      (event) => event.cities && event.cities.includes(city)
    );
  }
  return events;
};

export default function Events() {
  const [allEvents, setAllEvents] = useState([]);
  const [events, setEvents] = useState([]);
  const [selectedCity, setSelectedCity] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const eventsURL =
    "https://abarestaurants-staging-401581158498.us-central1.run.app/wp-json/lettuce/events";

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(eventsURL);
        if (!response.ok) throw new Error("Error with fetching the data");
        const result = await response.json();
        const upcoming = getUpcomingEvents(result);
        setAllEvents(upcoming);
        setEvents(upcoming);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const handleClickFiltering = (city) => {
    setSelectedCity(city);
    const filtered = filterEventsByCity(allEvents, city);
    setEvents(filtered);
  };

  const uniqueCitiesArray = eventsCitiesArray(allEvents);
  const allCities = ["All", ...uniqueCitiesArray];

  return (
    <section>
      <h1 className="text-center font-accent text-2xl py-12">
        Upcoming Events
      </h1>

      <div className="flex flex-wrap justify-center gap-2">
        {!error &&
          allCities.map((city, index) => (
            <Button
              value={city}
              className={`px-9 py-1.5 rounded-md cursor-pointer hover:bg-text-bold ${
                selectedCity === city
                  ? "bg-text-bold"
                  : ""
              }`}
              key={index}
              onClick={() => handleClickFiltering(city)}
            >
              {city}
            </Button>
          ))}
      </div>

      {/* Loading Message */}
      {loading && (
        <p className="text-center text-gray-500 py-12 ">
          Loading...
        </p>
      )}

      {/* Error Message */}
      {!loading && error && (
        <p className="text-red-600 text-center font-light pb-12">
          Error fetching the data. Try again!
        </p>
      )}

      {/* Events List */}
      {!loading && !error && (
        <ul className="flex flex-wrap justify-center gap-4 py-16">
          {events.map((event) => (
            <li key={event.ID}>
              <Event event={event} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
