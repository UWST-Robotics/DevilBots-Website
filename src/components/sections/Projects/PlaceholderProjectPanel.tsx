import {Card} from "react-bootstrap";
import React from "react";

export default function PlaceholderProjectPanel() {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <Card
            className={"mt-3"}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                transition: "transform 0.2s",
                transform: isHovered ? "translateY(-5px)" : "none",
                border: "2px dashed rgba(0, 0, 0, 0.15)",
                borderRadius: 20,
                overflow: "hidden",
                height: "100%",
                minHeight: 150,
                opacity: 0.5,
            }}
        >
            <div className={"d-flex justify-content-center align-items-center h-100 text-center"}>
                <h3 className={"text-header"}>
                    Soon™
                </h3>
            </div>
        </Card>
    )
}