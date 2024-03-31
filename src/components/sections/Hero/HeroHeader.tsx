import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import HeroVideo from "./HeroVideo.tsx";
import HeroBanner from "./HeroBanner.tsx";
import AnimatedLogo from "../../icons/AnimatedLogo.tsx";

export default function HeroHeader() {
    const onClick = React.useCallback(() => {
        const element = document.getElementById("join-team");
        if (element)
            element.scrollIntoView({ behavior: "smooth" });
    }, []);

    return (
        <div style={{ position: "relative", zIndex: 0 }}>
            <Container>
                <Row
                    style={{
                        filter: "drop-shadow(1px 1px 15px black)",
                        color: "white",
                        paddingTop: 200,
                        paddingBottom: 200,
                    }}
                >
                    <Col lg={5} className={"text-center text-lg-start"}>
                        <div className={"ms-md-5 ps-md-5"}>
                            <AnimatedLogo width={150} height={150} />
                            <h2 className={"fs-3 mb-0 mt-3"}>
                                We are
                            </h2>
                            <h1 style={{ fontSize: 64, marginBottom: 9 }}>
                                DevilBots
                            </h1>
                            <h2 style={{ fontSize: 14, cursor: "pointer" }} onClick={onClick}>
                                Join us for the 2024-25 season {">>"}
                            </h2>
                        </div>
                    </Col>
                </Row>
            </Container>
            <HeroVideo />
            <HeroBanner />
        </div>
    )
}