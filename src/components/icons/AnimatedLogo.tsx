import React from "react";
import DevilBotsLogo from "./DevilBotsLogo.tsx";
import useMousePos from "../../hooks/useMousePos.ts";

export interface DevilBotsLogoProps {
    width?: number;
    height?: number;
}

const LEFT_EYE_ID = "Left_Eye";
const RIGHT_EYE_ID = "Right_Eye";
const LOGO_ID = "DevilBotsLogo";
const MOUSE_SCALE = 0.8;
const MAX_EYE_SCALE = 30;

export default function AnimatedLogo(props: DevilBotsLogoProps) {
    const [logoClass, setLogoClass] = React.useState("Logo-Idle");
    const mousePos = useMousePos();

    // Update the eye position
    const updateEyePosition = React.useCallback(() => {
        const leftEye = document.getElementById(LEFT_EYE_ID);
        const rightEye = document.getElementById(RIGHT_EYE_ID);

        if (leftEye && rightEye) {
            // Get the center of the logo
            const leftEyeX = (leftEye?.getBoundingClientRect().left || 0) + (leftEye?.getBoundingClientRect().width || 0) / 2;
            const leftEyeY = (leftEye?.getBoundingClientRect().top || 0) + (leftEye?.getBoundingClientRect().height || 0) / 2;

            const rightEyeX = (rightEye?.getBoundingClientRect().left || 0) + (rightEye?.getBoundingClientRect().width || 0) / 2;
            const rightEyeY = (rightEye?.getBoundingClientRect().top || 0) + (rightEye?.getBoundingClientRect().height || 0) / 2;

            const logoX = (leftEyeX + rightEyeX) / 2;
            const logoY = (leftEyeY + rightEyeY) / 2;

            // Calculate the eye movement
            let x = (mousePos.current.x - logoX) / logoX;
            let y = (mousePos.current.y - logoY) / logoY;

            // Scale the mouse movement
            x *= MOUSE_SCALE;
            y *= MOUSE_SCALE;

            // Clamp the eye movement
            x = Math.min(1, Math.max(-1, x));
            y = Math.min(1, Math.max(-1, y));

            // Move the eyes
            leftEye.style.transform = `translate(${x * MAX_EYE_SCALE}px, ${y * MAX_EYE_SCALE}px)`;
            rightEye.style.transform = `translate(${x * MAX_EYE_SCALE}px, ${y * MAX_EYE_SCALE}px)`;
        }
    }, []);

    // Update the eye position on mouse move
    React.useEffect(() => {
        window.addEventListener("mousemove", updateEyePosition);
        window.addEventListener("scroll", updateEyePosition);
        return () => {
            window.removeEventListener("mousemove", updateEyePosition);
            window.removeEventListener("scroll", updateEyePosition);
        }
    }, [updateEyePosition]);


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