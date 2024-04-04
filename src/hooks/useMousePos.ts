import React from "react";

export default function useMousePos() {
    const mousePos = React.useRef({ x: 0, y: 0 });

    // Update the mouse position
    React.useEffect(() => {
        const onMouseMove = (event: MouseEvent) => {
            mousePos.current = { x: event.clientX, y: event.clientY };
        }

        window.addEventListener("mousemove", onMouseMove);
        return () => window.removeEventListener("mousemove", onMouseMove);
    }, []);

    return mousePos;
}