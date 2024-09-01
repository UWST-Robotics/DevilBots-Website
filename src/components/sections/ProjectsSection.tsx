import ProjectPanel from "./Projects/ProjectPanel.tsx";
import {Col, Container, Row} from "react-bootstrap";
import PlaceholderProjectPanel from "./Projects/PlaceholderProjectPanel.tsx";

export default function ProjectsSection() {
    return (
        <Container className={"mt-2 mb-5"}>
            <Row>
                <Col md={4}>
                    <ProjectPanel
                        imgSrc={"/images/Gallery/IMG_8056.JPG"}
                        title={"VEX-U Robotics"}
                        href={"https://youtu.be/Tm-U1--ddJk"}
                    >
                        <p>
                            <a href={"https://www.vexrobotics.com/v5/competition/vrc-current-game"}>VEX Robotics</a> is
                            an educational program that encourages students to explore STEM fields through hands-on
                            robotics challenges.
                        </p>
                        <p>
                            Every year, VEX hosts competitions where teams can compete in regional events across the
                            US and a World Championship.
                        </p>
                    </ProjectPanel>
                </Col>
                <Col md={4}>
                    <ProjectPanel
                        imgSrc={"/images/Gallery/IMG_8057.png"}
                        title={"BattleBots"}
                    >
                        <p>
                            Organizations such as <a href={"https://www.nhrl.io/"}>NHRL</a> regularly host competitions
                            where teams are challenged to design, build, and test robots that can compete in
                            head-to-head combat.
                        </p>
                        <p>
                            For the 2024-25 season, we plan to develop a team who'll work together to assemble a
                            competitive robot.
                        </p>
                        <p className={"text-muted fst-italic"}>
                            Coming 2024-25 Season
                        </p>
                    </ProjectPanel>
                </Col>
                <Col md={4}>
                    <PlaceholderProjectPanel/>
                </Col>
            </Row>
        </Container>
    )
}