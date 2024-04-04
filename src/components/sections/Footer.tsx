import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
    return (
        <Container fluid style={{ backgroundColor: "black", color: "white" }}>
            <Container>
                <Row className={"text-center pt-3 pb-3"}>
                    <Col className={"m-auto"}>
                        <h1 className={"fs-5"}>
                            DevilBots{" · "}<a href={"https://www.robotevents.com/teams/VEXU/DEVIL5"}>DEVIL5</a>
                        </h1>
                    </Col>
                    <Col md={8} className={"m-auto"}>
                        <h2 className={"mb-0 fs-6"}>
                            <a href={"https://www.uwstout.edu/"}>University of Wisconsin-Stout</a>
                        </h2>
                        <p className={"mb-0"}>
                            <a
                                href={"mailto:robotics@uwstout.edu"}
                                style={{ color: "white", textDecoration: "none" }}
                            >
                                robotics@uwstout.edu
                            </a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}