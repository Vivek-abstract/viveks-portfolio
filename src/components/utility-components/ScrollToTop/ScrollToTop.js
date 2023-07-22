import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This component is purely for scrolling to top when route changes
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}