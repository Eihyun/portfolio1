// hooks/useMediaQuery.js
import { useEffect, useState } from "react";

function useMediaQuery(query) {
    const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        const updateMatch = () => setMatches(mediaQueryList.matches);

        mediaQueryList.addEventListener("change", updateMatch);
        return () => mediaQueryList.removeEventListener("change", updateMatch);
    }, [query]);

    return matches;
}

export default useMediaQuery;