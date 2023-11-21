"use client";

import { useCart } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export const useNavbar = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchKeyword, setKeyword] = useState<string | null>(null);

    const { totalCartCount } = useCart();
    const router = useRouter();

    const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const keyword = e.target.value;

        setKeyword(keyword);
        setIsLoading(true);
    }, [setKeyword]);

    const handleRedirectToLovedLists = () => {
        router.push("/wish-lists");
    }

    const handleRedirectToCartLists = () => {
        router.push("/cart-lists");
    }
    return {
        totalCartCount,
        searchKeyword,
        isLoading,
        handleSearch,
        handleRedirectToLovedLists,
        handleRedirectToCartLists
    }
}