import useMobile from "../../../hooks/useMobile.ts";

export default function HeroBackground() {
    const isMobile = useMobile();

    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: isMobile ? 0 : -80,
                zIndex: -99,
            }}
        >
            {/* Trapezoid */}
            <div
                className={"w-100 h-100 d-none d-lg-block"}
                style={{
                    background: "linear-gradient(110deg, rgba(10, 0, 81, 0.95) 0%, rgba(4, 4, 55, 0.6) 50%)",
                    clipPath: "polygon(0 0, 55% 0, 45% 100%, 0 100%)",
                }}
            >
            </div>

            {/* Full Screen Background */}
            <div
                className={"w-100 h-100 d-block d-lg-none"}
                style={{
                    background: "linear-gradient(110deg, rgba(10, 0, 81, 0.95) 0%, rgba(4, 4, 55, 0.6) 50%)",
                }}
            >
            </div>
        </div>
    );
}