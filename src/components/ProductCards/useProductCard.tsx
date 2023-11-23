"use client";

import { useCallback, useState } from "react";
import { useCart } from "@/lib/hooks";

export const useProductCard = (product: any) => {
    const [activeCardImg, setActiveCardImgUrl] = useState(product?.images[0]);
    const {
        hasAlreadyAddedToCart,
        hasAlreadyLoved,
        handleAddToCart,
        handleAddToWishList,
        handleDeleteWishlist,
        handleViewDetails
    } = useCart({ productId: product?._id });

    const handleMouseOver = useCallback(() => {
        setActiveCardImgUrl(product?.images[1])
    }, [activeCardImg]);

    const handleMouseOut = useCallback(() => {
        setActiveCardImgUrl(product?.images[0])
    }, [activeCardImg]);

    return {
        hasAlreadyAddedToCart,
        hasAlreadyLoved,
        activeCardImg,
        handleMouseOver,
        handleMouseOut,
        handleViewDetails,
        handleAddToCart,
        handleAddToWishList,
        handleDeleteWishlist,
    }
}