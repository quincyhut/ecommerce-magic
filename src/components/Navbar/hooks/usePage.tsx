"use client";

import { useEffect, useState } from "react";

export const usePage = () => {
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setShowMenu(window.innerWidth < 900);
        });

        return () => {
            window.removeEventListener("resize", () => {});
        }

    }, []);

    return {
        showMenu
    }
}