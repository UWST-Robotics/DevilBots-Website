import SponsorMarquee from "../Sponsors/SponsorMarquee.tsx";

export default function HeroBanner() {
    return (
        <div
            style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,

                color: "white",
                backgroundColor: "rgb(15, 15, 15)",

                textAlign: "center",
            }}
        >
            <SponsorMarquee />
        </div>
    )
}