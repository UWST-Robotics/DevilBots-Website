import { Button, Card } from "react-bootstrap";

export interface EventCardProps {
    name: string;
    date: string;
    location: string;
    detailsLink?: string;
    streamLink?: string;
}

export default function EventCard(props: EventCardProps) {
    const { name, date, location, detailsLink, streamLink } = props;

    return (
        <Card
            className={"m-1 m-md-3"}
            style={{ minWidth: "18rem" }}
        >
            <Card.Body>
                <Card.Title>
                    <h2 className={"fs-5"}>{name}</h2>
                </Card.Title>
                <Card.Text>
                    <b>Date: </b>{date}<br />
                    <b>Location: </b>{location}
                </Card.Text>
            </Card.Body>
            {(detailsLink || streamLink) && (
                <Card.Footer>
                    {detailsLink && (
                        <Button
                            variant={"primary"}
                            href={detailsLink}
                            target={"_blank"}
                            size={"sm"}
                            className={"me-1"}
                        >
                            More Info
                        </Button>
                    )}
                    {streamLink && (
                        <Button
                            variant={"secondary"}
                            href={streamLink}
                            target={"_blank"}
                            size={"sm"}
                        >
                            Watch Live
                        </Button>
                    )}
                </Card.Footer>
            )}
        </Card>
    );
}