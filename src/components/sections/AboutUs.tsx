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
                        regional events across the US and a World Championship. VEX-U is the college-level division of
                        VEX Robotics, where students can compete in a more advanced and challenging environment.
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
            <Row className={"mt-md-4"}>
                <Col className={"pt-5 text-center text-blue"}>
                    <h1>
                        What do we do?
                    </h1>
                </Col>
                <Col md={8} className={"p-4 fs-5"}>
                    <p>
                        <b>
                            We design, prototype, and build robots
                        </b>
                    </p>
                    <p>
                        We work with
                        industry-standard tools and software to create robots that can complete a variety of tasks.
                        This includes designing parts in CAD software, 3D-printing prototypes, assembling the robot,
                        and programming the robot to move autonomously.
                        We also work on outreach projects to help promote STEM education among the UW-Stout community.
                    </p>
                    <hr />
                    <p>
                        This season in <a href={"https://www.youtube.com/watch?v=dvDqEI7qO34"}>VEX Over Under</a>, we
                        are designing a robot to collect and score triangular balls into nets on either side of the
                        field, as well as to hang from a bar at the end of the match. Whoever scores the most points
                        at the end of the match, wins!
                    </p>
                </Col>
            </Row>
        </Container>
    );
}