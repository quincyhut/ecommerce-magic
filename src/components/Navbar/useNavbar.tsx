"use client";

import { useCallback, useState } from "react";

export const useNavbar = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchKeyword, setKeyword] = useState<string | null>(null);

    const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const keyword = e.target.value;
        
        setKeyword(keyword);
        setIsLoading(true);
    }, [setKeyword]);

    return {
        searchKeyword,
        isLoading,
        handleSearch,
    }
}