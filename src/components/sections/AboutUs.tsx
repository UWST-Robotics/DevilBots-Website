import {Col, Container, Row} from "react-bootstrap";

export default function AboutUs() {
    return (
        <Container className={"pt-5 mt-4 pb-3"}>
            <Row className={"mt-md-2"}>
                <Col className={"p-5 p-md-0 p-lg-5 text-center text-blue d-flex flex-column justify-content-center"}>
                    <img
                        className={"w-100"}
                        src={"/images/TransparentRobot.png"}
                        alt={"Blue Devil Robotics"}
                    />
                </Col>
                <Col md={8} className={"p-4 d-flex flex-column justify-content-center text-center text-md-start"}>
                    <h3 className={"text-header"}>
                        We are UW-Stout’s Robotics Team
                    </h3>
                    <p>
                        We work with
                        industry-standard tools and software to construct robots to can complete a variety of goals and
                        tasks.
                        This includes designing parts in CAD software, 3D-printing prototypes, assembling the robot,
                        and programming autonomous routines.
                    </p>
                    <p>
                        We also work on a variety of different outreach projects to help promote STEM education among
                        the UW-Stout community.
                        This includes hosting workshops, attending events, and working with local schools to help teach
                        students about robotics.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}