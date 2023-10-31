"use client";

import { useCallback, useState } from "react";

export const usePage = () => {
    const [showSearchbar, setShowSearchbar] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState<string | null>(null);

    const handleShowSearchbar = useCallback(() => {
        setShowSearchbar(!showSearchbar);
    }, [showSearchbar]);

    const handleSearch = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            const keyword = e.target.value;

            console.log(keyword)
            setSearchKeyword(keyword);
            setLoading(true);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }, [searchKeyword]);

    return {
        isLoading,
        showSearchbar,
        handleShowSearchbar,
        handleSearch
    }
}