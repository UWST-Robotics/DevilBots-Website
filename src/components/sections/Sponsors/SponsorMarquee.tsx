import MainSponsors from "../../../types/MainSponsors.ts";
import SponsorIcon from "./SponsorIcon.tsx";
import Marquee from "react-fast-marquee";
import useMobile from "../../../hooks/useMobile.ts";

export default function SponsorMarquee() {
    const isMobile = useMobile();

    return (
        <Marquee
            speed={40}
            gradient={!isMobile}
            gradientColor={"black"}
        >
            {MainSponsors.map((sponsor, index) => (
                <div className={"ms-3 ms-md-4 ms-lg-5"}>
                    <SponsorIcon
                        key={index + "-main"}
                        sponsor={sponsor}
                    />
                </div>
            ))}
        </Marquee>
    );
}