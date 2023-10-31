import UpcomingEvents from "../../types/Events.ts";
import { Button, Card } from "react-bootstrap";

export default function EventCards() {
    return (
        <>
            {UpcomingEvents.map((event, index) => (
                <Card
                    key={index}
                    className={"m-1 m-md-3"}
                    style={{ minWidth: "18rem" }}
                >
                    <Card.Body>
                        <Card.Title>
                            <h2 className={"fs-5"}>{event.name}</h2>
                        </Card.Title>
                        <Card.Text>
                            <b>Date: </b>{event.date}<br />
                            <b>Location: </b>{event.location}
                        </Card.Text>
                    </Card.Body>
                    {(event.detailsLink || event.streamLink) && (
                        <Card.Footer>
                            {event.detailsLink && (
                                <Button
                                    variant={"primary"}
                                    href={event.detailsLink}
                                    target={"_blank"}
                                    size={"sm"}
                                    className={"me-1"}
                                >
                                    More Info
                                </Button>
                            )}
                            {event.streamLink && (
                                <Button
                                    variant={"secondary"}
                                    href={event.streamLink}
                                    target={"_blank"}
                                    size={"sm"}
                                >
                                    Watch Live
                                </Button>
                            )}
                        </Card.Footer>
                    )}
                </Card>
            ))}
        </>
    )
}