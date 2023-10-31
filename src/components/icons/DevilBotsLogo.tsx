import LogoSVG from "./Logo_BlackOutline.svg?react";

interface DevilBotsLogoProps {
    className?: string;
    width?: number;
    height?: number;
}

export default function DevilBotsLogo(props: DevilBotsLogoProps) {
    return (
        <LogoSVG
            className={props.className}
            width={props.width}
            height={props.height}
        />
    )
}