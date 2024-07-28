import {Col, Container, Row} from "react-bootstrap";
import {Discord, Github, Instagram} from "react-bootstrap-icons";
import FooterIcon from "./FooterIcon.tsx";

export default function Footer() {
    return (
        <Container fluid style={{backgroundColor: "black", color: "white"}}>
            <Container>
                <Row className={"text-center pt-3 pb-3"}>
                    <Col className={"m-auto"}>
                        <h1 className={"fs-5"}>
                            Blue Devil Robotics
                        </h1>
                    </Col>
                    <Col md={8}>
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
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}