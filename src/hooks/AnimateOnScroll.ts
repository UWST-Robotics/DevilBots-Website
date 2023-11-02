import React from "react";

export default function useAnimateOnScroll() {
    React.useEffect(() => {
        const allElements = document.querySelectorAll(".appear-scroll");
        const allElementsArray = Array.from(allElements);

        const animate = () => {
            allElementsArray.forEach((element) => {
                const elementTop = element.getBoundingClientRect().top;
                if (elementTop < window.innerHeight - 100) {
                    element.classList.add("appear");
                } else {
                    element.classList.remove("appear");
                }
            });
        }

        window.addEventListener("scroll", animate);
        animate();

        return () => {
            window.removeEventListener("scroll", animate);
        }
    }, []);
}