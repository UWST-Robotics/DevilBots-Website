import { Card } from "react-bootstrap";
import React from "react";

export interface PlaceholderEventCardProps {
    children?: React.ReactNode;
}

export default function PlaceholderEventCard(props: PlaceholderEventCardProps) {
    return (
        <Card
            className={"text-center"}
            style={{
                width: "18rem",
                height: 162,
                borderStyle: "dashed"
            }}
        >
            <Card.Body className={"d-flex justify-content-center align-items-center"}>
                <Card.Text className={"text-muted p-3"}>
                    {props.children}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}