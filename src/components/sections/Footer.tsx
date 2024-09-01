import {Col, Container, Row} from "react-bootstrap";
import {Discord, EnvelopeFill, Github, Instagram, Youtube} from "react-bootstrap-icons";
import FooterIcon from "./FooterIcon.tsx";

export default function Footer() {
    return (
        <Container fluid style={{backgroundColor: "black", color: "white"}}>
            <Container>
                <Row className={"pt-3 pb-3"}>
                    <Col className={"m-auto text-center text-md-start"}>
                        <h1 className={"fs-5 mb-0"}>
                            🤖 Blue Devil Robotics 🦾
                        </h1>
                        <p style={{fontSize: 12}} className={"mb-1"}>
                            Organization of the <a href={"https://www.uwstout.edu"}>University of Wisconsin-Stout</a>
                        </p>
                    </Col>
                    <Col md={8}>
                        <div
                            className={"d-flex justify-content-center justify-content-md-end align-items-center h-100"}
                        >
                            <FooterIcon
                                href={"https://www.instagram.com/stoutdevilbots"}
                                icon={Instagram}
                            />
                            <FooterIcon
                                href={"https://discord.gg/Y9P4vkwJ3a"}
                                icon={Discord}
                            />
                            <FooterIcon
                                href={"https://github.com/UWST-Robotics"}
                                icon={Github}
                            />
                            <FooterIcon
                                href={"https://www.youtube.com/@StoutDevilBots"}
                                icon={Youtube}
                            />
                            <FooterIcon
                                href={"mailto:robotics@uwstout.edu"}
                                icon={EnvelopeFill}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}