import { Sponsor } from "../../../types/MainSponsors.ts";
import useMobile from "../../../hooks/useMobile.ts";

interface SponsorIconProps {
    sponsor: Sponsor;
}

export default function SponsorIcon(props: SponsorIconProps) {
    const isMobile = useMobile();
    const { sponsor } = props;

    let maxWidth = sponsor.large ? 140 : 80;
    let maxHeight = 80;

    if (isMobile) {
        maxWidth *= 0.9;
        maxHeight *= 0.9;
    }

    return (
        <a href={sponsor.href} style={{ textDecoration: "none" }}>
            <img
                src={`/images/Sponsors/${sponsor.id}.png`}
                className="d-inline-block align-top"
                alt={sponsor.id}
                style={{
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    margin: 10
                }}
            />
        </a>
    );
}