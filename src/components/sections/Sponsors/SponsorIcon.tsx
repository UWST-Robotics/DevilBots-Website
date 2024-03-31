import { Sponsor } from "../../../types/MainSponsors.ts";

interface SponsorIconProps {
    sponsor: Sponsor;
}

export default function SponsorIcon(props: SponsorIconProps) {
    const { sponsor } = props;

    const maxWidth = sponsor.large ? 140 : 80;
    const maxHeight = 80;

    return (
        <a href={sponsor.href} style={{ textDecoration: "none" }}>
            <img
                src={`/images/Sponsors/${sponsor.id}.png`}
                className="d-inline-block align-top"
                alt={sponsor.id}
                style={{
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    margin: 10,
                }}
            />
        </a>
    );
}