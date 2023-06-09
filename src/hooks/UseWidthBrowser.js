import { useLayoutEffect, useState } from "react"
import { MAX_WIDTH_SCREEN } from "../constants/constants";

export const useWidthBrowser = () => {
    const [width, setWidth] = useState(MAX_WIDTH_SCREEN);
    useLayoutEffect(() => {
        function handleWidth() {
            setWidth(window.innerWidth);
        };

        function updater(func, time) {
            let timer;
            return () => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    timer = null;
                    func.apply(this, arguments);
                }, time);
            }
        }

        const updateHandleWidth = updater(handleWidth, 1000);

        window.addEventListener('resize', updateHandleWidth)
        handleWidth();
        return () => window.removeEventListener('resize', updateHandleWidth);
    }, [])
    return width;
}