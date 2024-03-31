import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
    return (
        <Container fluid style={{ backgroundColor: "black", color: "white" }}>
            <Container>
                <Row className={"text-center"}>
                    <Col className={"m-auto"}>
                        <h1 className={"fs-5 m-2"}>
                            DevilBots
                        </h1>
                    </Col>
                    <Col md={8} className={"m-auto"}>
                        <p className={"m-1"}>
                            <a
                                href={"mailto:robotics@uwstout.edu"}
                                style={{ color: "white", textDecoration: "none" }}
                            >
                                robotics@uwstout.edu
                            </a>
                            {" • "}
                            <a
                                href={"https://www.instagram.com/stoutdevilbots/"}
                                target={"_blank"}
                                rel={"noreferrer"}
                                style={{ color: "white", textDecoration: "none" }}
                            >
                                @stoutdevilbots
                            </a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}