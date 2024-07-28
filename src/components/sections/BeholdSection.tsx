import {Col, Container, Row} from "react-bootstrap";
import Behold from "./Embed/Behold.tsx";

export default function BeholdSection() {
    return (
        <Container
            fluid
            className={"pt-4 pb-4"}
        >
            <Row>
                <Col>
                    <Behold/>
                </Col>
            </Row>
        </Container>
    )
}