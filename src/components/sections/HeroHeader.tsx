import AnimatedLogo from "../icons/AnimatedLogo.tsx";
import { Col, Container, Row } from "react-bootstrap";

export default function HeroHeader() {
    return (
        <Container
            fluid
            style={{
                backgroundImage: "url(/images/HeroBackground.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                color: "white",
                minHeight: 300,
                paddingTop: 100,
                paddingBottom: 100,
            }}
        >
            <Container>
                <Row>
                    <Col lg={{ span: 5, order: 1 }} className={"text-center text-lg-start"}>
                        <AnimatedLogo width={200} />
                    </Col>
                    <Col lg={{ offset: 2, span: 5, order: 7 }} className={"text-center text-lg-start"}>
                        <div className={"m-5"}>
                            <h2 className={"mb-0 mt-3"}>
                                We are
                            </h2>
                            <h1 style={{ fontSize: 56, marginBottom: 0 }}>
                                Devil Bots
                            </h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}