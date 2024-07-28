import {Sponsor} from "../../../types/MainSponsors.ts";
import useMobile from "../../../hooks/useMobile.ts";
import React from "react";

interface SponsorIconProps {
    sponsor: Sponsor;
}

export default function SponsorIcon(props: SponsorIconProps) {
    const isMobile = useMobile();
    const [isHovered, setIsHovered] = React.useState(false);
    const {sponsor} = props;

    let maxWidth = sponsor.large ? 100 : 60;
    let maxHeight = 50;

    if (isMobile) {
        maxWidth *= 0.9;
        maxHeight *= 0.9;
    }

    return (
        <a href={sponsor.href} style={{textDecoration: "none"}}>
            <img
                src={`/images/Sponsors/${sponsor.id}.png`}
                className="d-inline-block align-top"
                alt={sponsor.id}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    margin: 10,
                    opacity: isHovered ? 1 : 0.8,
                    transform: isHovered ? "scale(1.1)" : "none",
                    transition: "transform 0.2s, opacity 0.2s",
                }}
            />
        </a>
    );
}