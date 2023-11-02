import { Col, Container, Row } from "react-bootstrap";
import EventCards from "./EventCards.tsx";

export default function EventsPanel() {
    return (
        <Container className={"pt-3 pb-3"}>
            <Row>
                <Col className={"pt-5 text-center text-blue"}>
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
                    </div>
                </Col>
            </Row>
        </Container>
    );
}