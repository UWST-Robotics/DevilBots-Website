import { Col, Container, Row } from "react-bootstrap";

export default function JoinTeam() {
    return (
        <Container fluid className={"bg-blue pt-5 pb-3"}>
            <Container>
                <Row>
                    <Col className={"pt-1 pt-lg-5 text-center text-light-blue"}>
                        <h1>
                            Join Our Team
                        </h1>
                    </Col>
                    <Col md={8} className={"fs-5 text-light p-4"}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}