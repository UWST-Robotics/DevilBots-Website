import AnimatedLogo from "../icons/AnimatedLogo.tsx";
import { Col, Container, Row } from "react-bootstrap";
import HeroVideo from "./HeroVideo.tsx";

export default function HeroHeader() {
    return (
        <HeroVideo>
            <Container>
                <Row
                    style={{
                        filter: "drop-shadow(1px 1px 15px black)",
                        color: "white",
                        paddingTop: 150,
                        paddingBottom: 150,
                    }}
                >
                    <Col lg={{ span: 5, order: 1 }} className={"text-center text-lg-start"}>
                        <AnimatedLogo width={200} />
                    </Col>
                    <Col lg={{ offset: 2, span: 5, order: 7 }} className={"text-center text-lg-start"}>
                        <div className={"mt-5 ms-md-5"}>
                            <h2 className={"mb-0 mt-3"}>
                                We are
                            </h2>
                            <h1 style={{ fontSize: 56, marginBottom: 9 }}>
                                Devil Bots
                            </h1>
                            <h2 style={{ fontSize: 14 }}>
                                Join us for the 2023-24 season {">>"}
                            </h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </HeroVideo>
    )
}