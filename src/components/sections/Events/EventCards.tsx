import UpcomingEvents from "../../../types/Events.ts";
import { Card } from "react-bootstrap";
import EventCard from "./EventCard.tsx";

export interface EventCardsProps {
    extraCardText?: string;
}

export default function EventCards(props: EventCardsProps) {
    return (
        <>
            {UpcomingEvents.map((event, index) => (
                <EventCard
                    key={index}
                    name={event.name}
                    date={event.date}
                    location={event.location}
                    detailsLink={event.detailsLink}
                    streamLink={event.streamLink}
                />
            ))}

            {props.extraCardText && (
                <Card
                    className={"text-center"}
                    style={{ maxWidth: "15rem", borderStyle: "dashed" }}
                >
                    <Card.Body>
                        <Card.Text className={"text-muted p-3"}>
                            {props.extraCardText}
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}
        </>
    )
}