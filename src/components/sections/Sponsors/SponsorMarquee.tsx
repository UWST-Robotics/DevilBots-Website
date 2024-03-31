import MainSponsors from "../../../types/MainSponsors.ts";
import SponsorIcon from "./SponsorIcon.tsx";
import Marquee from "react-fast-marquee";

export default function SponsorMarquee() {
    return (
        <Marquee
            speed={50}
            gradient
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