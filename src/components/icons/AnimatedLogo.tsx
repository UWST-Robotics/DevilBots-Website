import React from "react";
import DevilBotsLogo from "./DevilBotsLogo.tsx";
import LOGO_STATES from "../../types/LogoStates.ts";

export interface DevilBotsLogoProps {
    width?: number;
    height?: number;
}

export default function AnimatedLogo(props: DevilBotsLogoProps) {
    const [state, setState] = React.useState("Idle");

    // Randomize the logo state every second
    React.useEffect(() => {
        let currentState = "Idle";
        const interval = setInterval(() => {
            if (currentState !== "Idle" && Math.random() < 0.6) {
                currentState = "Idle";
            } else if (currentState === "Idle" && Math.random() < 0.5) {
                currentState = LOGO_STATES[Math.floor(Math.random() * LOGO_STATES.length)];
            }
            setState(currentState);
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    // CSS for the logo
    const className = `Logo-${state}`

    return (
        <DevilBotsLogo
            {...props}
            className={className}
        />
    )
}