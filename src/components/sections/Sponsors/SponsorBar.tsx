import MainSponsors, { OtherSponsors } from "../../../types/MainSponsors.ts";
import { ChevronCompactDown, ChevronCompactUp } from "react-bootstrap-icons";
import React from "react";
import { Collapse } from "react-bootstrap";
import SponsorIcon from "./SponsorIcon.tsx";

export default function SponsorBar() {
    const [isExpanded, setIsExpanded] = React.useState(false);

    return (
        <div
            style={{
                backgroundColor: "black",
                color: "white",
                width: "100%",
                textAlign: "center",
                padding: 20,
                position: "relative",
                zIndex: 0,
            }}
        >
            <h1 className={"fs-4"}>
                Proudly Sponsored By
            </h1>
            <div
                style={{
                    display: "flex",
                    flex: 1,
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                {MainSponsors.map((sponsor, index) => (
                    <SponsorIcon sponsor={sponsor} key={index + "-main"} />
                ))}
            </div>
            <Collapse in={isExpanded}>
                <div>
                    <div
                        style={{
                            display: "flex",
                            flex: 1,
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        {OtherSponsors.map((sponsor, index) => (
                            <SponsorIcon sponsor={sponsor} key={index} />
                        ))}
                    </div>
                </div>
            </Collapse>
            {!isExpanded && OtherSponsors.length > 0 && (
                <ChevronCompactDown
                    size={32}
                    color={"white"}
                    onClick={() => setIsExpanded(true)}
                    style={{
                        marginTop: -10,
                        cursor: "pointer"
                    }}
                />
            )}
            {isExpanded && OtherSponsors.length > 0 && (
                <ChevronCompactUp
                    size={32}
                    color={"white"}
                    onClick={() => setIsExpanded(false)}
                    style={{
                        marginTop: -10,
                        cursor: "pointer"
                    }}
                />
            )}
        </div>
    );
}