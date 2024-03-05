import React from "react";
import DevilBotsLogo from "./DevilBotsLogo.tsx";

export interface DevilBotsLogoProps {
    width?: number;
    height?: number;
}

const LEFT_EYE_ID = "Left_Eye";
const RIGHT_EYE_ID = "Right_Eye";
const LOGO_ID = "DevilBotsLogo";

export default function AnimatedLogo(props: DevilBotsLogoProps) {
    const [logoClass, setLogoClass] = React.useState("Logo-Idle");

    React.useEffect(() => {
        const leftEye = document.getElementById(LEFT_EYE_ID);
        const rightEye = document.getElementById(RIGHT_EYE_ID);

        // Handle mouse movement
        const onMouseMove = (event: MouseEvent) => {
            if (leftEye && rightEye) {
                // Get the center of the logo
                const leftEyeX = (leftEye?.getBoundingClientRect().left || 0) + (leftEye?.getBoundingClientRect().width || 0) / 2;
                const leftEyeY = (leftEye?.getBoundingClientRect().top || 0) + (leftEye?.getBoundingClientRect().height || 0) / 2;

                const rightEyeX = (rightEye?.getBoundingClientRect().left || 0) + (rightEye?.getBoundingClientRect().width || 0) / 2;
                const rightEyeY = (rightEye?.getBoundingClientRect().top || 0) + (rightEye?.getBoundingClientRect().height || 0) / 2;

                const logoX = (leftEyeX + rightEyeX) / 2;
                const logoY = (leftEyeY + rightEyeY) / 2;

                // Calculate the eye movement
                let x = (event.clientX - logoX) / logoX;
                let y = (event.clientY - logoY) / logoY;

                // Clamp the eye movement
                x = Math.min(1, Math.max(-1, x));
                y = Math.min(1, Math.max(-1, y));

                // Move the eyes
                leftEye.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
                rightEye.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
            }
        }

        window.addEventListener("mousemove", onMouseMove);
        return () => window.removeEventListener("mousemove", onMouseMove);
    }, []);

    // Handle mouse enter, click, and leave
    React.useEffect(() => {
        const logo = document.getElementById(LOGO_ID);

        // Handle mouse enter and leave
        const onHover = () => setLogoClass("Logo-Squint");
        const onClick = () => setLogoClass("Logo-RaiseEyebrow Logo-RaiseHorns");
        const onLeave = () => setLogoClass("Logo-Idle");

        if (logo) {
            logo.addEventListener("mouseenter", onHover);
            logo.addEventListener("click", onClick);
            logo.addEventListener("mouseleave", onLeave);
        }

        return () => {
            if (logo) {
                logo.removeEventListener("mouseenter", onHover);
                logo.removeEventListener("click", onClick);
                logo.removeEventListener("mouseleave", onLeave);
            }
        }
    }, []);

    return (
        <DevilBotsLogo
            {...props}
            className={logoClass}
        />
    )
}