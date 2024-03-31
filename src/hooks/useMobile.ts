import useWindowSize from "./useWindowSize.ts";

const MAX_MOBILE_WIDTH = 992;

export default function useMobile() {
    const { windowWidth } = useWindowSize();
    return windowWidth < MAX_MOBILE_WIDTH;
}