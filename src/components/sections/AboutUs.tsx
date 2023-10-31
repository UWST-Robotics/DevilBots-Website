import { Col, Container, Row } from "react-bootstrap";
import EventCards from "./EventCards.tsx";

export default function AboutUs() {
    return (
        <Container className={"pt-5 pb-3"}>
            <Row>
                <Col className={"pt-1 pt-lg-5 text-center text-blue"}>
                    <h1>
                        Who are we?
                    </h1>
                </Col>
                <Col md={8} className={"p-4 fs-5"}>
                    <p>
                        <b>We are UW-Stout’s VEX-U Robotics Team</b>
                    </p>
                    <p>
                        <a href={"https://www.vexrobotics.com/"}>VEX Robotics</a> is an educational program that
                        encourages students to explore STEM fields through
                        hands-on robotics challenges. Every year, VEX hosts competitions where teams can compete in
                        regional events across the US and a World Championship.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
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