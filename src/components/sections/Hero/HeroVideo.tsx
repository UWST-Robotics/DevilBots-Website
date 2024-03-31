import HeroBackground from "./HeroBackground.tsx";

export default function HeroVideo() {
    return (
        <>
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -100,
                }}
            >
                <video
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: -100,

                        filter: "brightness(0.8) saturate(2)",
                        transform: "scale(1.1)",
                        backgroundImage: "url('videos/Hero.png')",
                    }}
                    autoPlay
                    loop
                    muted
                >
                    <source src="videos/Hero.mp4" type="video/mp4" />
                </video>
            </div>
            <HeroBackground />
        </>
    )
}