import {Button, Card, CardBody, CardImg} from "react-bootstrap";
import React from "react";

export interface ProjectSectionProps {
    imgSrc: string;
    href?: string;
    title: string;
    muted?: boolean;
    children: React.ReactNode;
}

export default function ProjectPanel(props: ProjectSectionProps) {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <>
            <Card
                className={"text-center mt-3"}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    transition: "transform 0.2s",
                    transform: isHovered ? "translateY(-5px)" : "none",
                    border: "none",
                    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
                    borderRadius: 20,
                    overflow: "hidden",
                }}
            >
                {props.muted && (
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 1,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            opacity: isHovered ? 1 : 0,
                            transition: "opacity 0.2s",
                        }}
                    >
                        <h3 className={"text-header"}>
                            Soon™
                        </h3>
                    </div>
                )}
                <div
                    style={{
                        opacity: props.muted ? 0.2 : 1
                    }}
                >
                    <CardImg
                        src={props.imgSrc}
                        alt={props.title}
                        style={{
                            maxHeight: 165,
                            objectFit: "cover",
                        }}
                    />
                    <CardBody>
                        <h4 className={"text-header"}>
                            {props.title}
                        </h4>
                        {props.children}
                        {props.href && (
                            <Button
                                href={props.href}
                                target={"_blank"}
                                variant={"primary"}
                                className={"mt-2"}
                            >
                                Learn More
                            </Button>
                        )}
                    </CardBody>
                </div>
            </Card>
        </>
    )
}