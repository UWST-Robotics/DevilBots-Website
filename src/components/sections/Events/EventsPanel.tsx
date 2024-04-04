import { Col, Container, Row } from "react-bootstrap";
import EventCards from "./EventCards.tsx";
import PlaceholderEventCard from "./PlaceholderEventCard.tsx";

export default function EventsPanel() {
    return (
        <Container className={"pt-3 pb-3"}>
            <Row>
                <Col className={"pt-1 pt-md-5 text-center text-blue"}>
                    <h1>
                        Upcoming Events
                    </h1>
                </Col>
                <Col md={8}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexWrap: "wrap",
                        }}
                    >
                        <EventCards />
                        <PlaceholderEventCard>
                            More events are soon to come!
                        </PlaceholderEventCard>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}