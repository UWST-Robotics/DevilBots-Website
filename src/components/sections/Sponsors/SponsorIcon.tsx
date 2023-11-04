import { Sponsor } from "../../../types/MainSponsors.ts";

interface SponsorIconProps {
    sponsor: Sponsor;
}

export default function SponsorIcon(props: SponsorIconProps) {
    const { sponsor } = props;
    return (
        <a href={sponsor.href} style={{ textDecoration: "none" }}>
            <img
                src={`/images/Sponsors/${sponsor.id}.png`}
                className="d-inline-block align-top"
                alt={sponsor.id}
                style={{
                    maxWidth: 100,
                    maxHeight: 100,
                    margin: 10,
                }}
            />
        </a>
    );
}