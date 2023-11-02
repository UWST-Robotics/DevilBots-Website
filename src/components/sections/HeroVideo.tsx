import React from "react";

export default function HeroVideo(props: { children: React.ReactNode }) {
    return (
        <div
            style={{
                zIndex: 0,
                position: "relative",
                textAlign: "center",
                width: "100%",
                margin: 0,
                padding: 0,
                overflow: "hidden",
            }}
        >
            <video
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    zIndex: -100,
                    objectFit: "cover",

                    // Blur and Blue
                    filter: "blur(5px) brightness(0.5) saturate(2)",
                    transform: "scale(1.1)",

                }}
                autoPlay
                loop
                muted
            >
                <source src="/videos/Hero.mp4" type="video/mp4" />
            </video>
            <div
                style={{
                    background: "linear-gradient(110deg, rgba(10, 0, 80, 0.7) 0%, rgba(0, 212, 255, 0) 100%)"
                }}
            >
                {props.children}
            </div>
        </div>
    )
}