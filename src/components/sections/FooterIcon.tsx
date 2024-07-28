import {Icon} from "react-bootstrap-icons";
import React from "react";

export interface FooterIconProps {
    href: string;
    icon: Icon;
}

export default function FooterIcon(props: FooterIconProps) {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <a
            href={props.href}
            target={"_blank"}
            className={"m-2"}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                transition: "color 0.2s",
                color: isHovered ? "#aaa" : "white",
            }}
        >
            <props.icon size={22}/>
        </a>
    );
}