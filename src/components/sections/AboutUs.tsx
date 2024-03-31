import { Col, Container, Row } from "react-bootstrap";
import Behold from "./Embed/Behold.tsx";
import { Instagram } from "react-bootstrap-icons";

//const IMAGE_COUNT = 4;

export default function AboutUs() {
    return (
        <Container className={"pt-5 mt-5 pb-3"}>
            <Row className={"mt-md-2"}>
                <Col className={"pt-1 pt-md-5 text-center text-blue"}>
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

                <Col
                    className={"p-1"}
                >
                    <Behold />
                    <p className={"text-muted text-center m-2"}>
                        Follow us on <Instagram size={16} className={"mb-1"} />:{" "}
                        <a href={"https://www.instagram.com/stoutdevilbots/"}>@stoutdevilbots</a>
                    </p>
                </Col>
            </Row>
        </Container>
    );
}