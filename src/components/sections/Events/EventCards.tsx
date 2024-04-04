import UpcomingEvents from "../../../types/Events.ts";
import EventCard from "./EventCard.tsx";

export default function EventCards() {
    return UpcomingEvents.map((event, index) => (
        <EventCard
            key={index}
            name={event.name}
            date={event.date}
            location={event.location}
            detailsLink={event.detailsLink}
            streamLink={event.streamLink}
        />
    ));
}