import { Button, Col, Container, Row } from "react-bootstrap";

export default function JoinTeam() {
    return (
        <Container fluid className={"bg-blue pt-5 pb-3"}>
            <Container>
                <Row>
                    <Col className={"pt-1 pt-lg-5 text-center text-light-blue"}>
                        <h1 id={"join-team"}> {/* Document scrolls to this ID */}
                            Join Our Team
                        </h1>
                    </Col>
                    <Col md={8} className={"fs-5 text-light p-4"}>
                        <p>
                            <b>Sponsorship</b><br />
                            Our team is always looking for new sponsors to help us grow and compete at the highest
                            level! If you are interested in sponsoring our team, please check out our sponsorship
                            tiers below and contact us at{" "}
                            <a href={"mailto:robotics@uwstout.edu"}>robotics@uwstout.edu</a>.
                        </p>
                        <Button
                            variant={"primary"}
                            className={"mb-4 me-1"}
                            href={"https://drive.google.com/file/d/13ODQ5-tjmZtxzelqv0PtoxOCXXOnmso7/view?usp=sharing"}
                        >
                            Sponsorship Tiers
                        </Button>
                        <p>
                            <b>Students</b><br />
                            Our team is open to all students, regardless of major or experience level.
                            If you're a current or upcoming UW-Stout student interested in joining our team,
                            check out our page on UW-Stout Connect to learn more about our upcoming meetings and campus
                            events:
                        </p>
                        <Button
                            variant={"primary"}
                            className={"me-1"}
                            href={"https://connect.uwstout.edu/feeds?type=club&type_id=30935&tab=home"}
                            title={"Requires UW-Stout login"}
                        >
                            UW-Stout Connect
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}