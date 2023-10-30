"use client";

import { useCallback, useState } from "react";

export const usePage = () => {
    const [showSearchbar, setShowSearchbar] = useState(false);

    const handleShowSearchbar = useCallback(() => {
        setShowSearchbar(!showSearchbar);
    }, [showSearchbar]);

    const handleHideSearchbar = useCallback(() => {
        console.log("leaver")
        setShowSearchbar(false);
    }, [showSearchbar]);


    return {
        showSearchbar,
        handleShowSearchbar,
        handleHideSearchbar
    }
}