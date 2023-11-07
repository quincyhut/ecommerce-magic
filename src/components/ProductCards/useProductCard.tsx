"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import { setPreviewProduct } from "@/redux/reducers/productReducer";
import { useCart } from "@/lib/hooks";


export const useProductCard = ({ images }: any) => {
    const [activeCardImg, setActiveCardImgUrl] = useState(images[0]);
    const { hasAlreadyAddedToCart } = useCart();

    const router = useRouter();
    const dispatch = useDispatch();

    const handleMouseOver = useCallback(() => {
        setActiveCardImgUrl(images[1])
    }, [activeCardImg]);

    const handleMouseOut = useCallback(() => {
        setActiveCardImgUrl(images[0])
    }, [activeCardImg]);

    const handleLoveReact = useCallback(() => {

    }, []);

    const handleViewDetails = useCallback((details: any) => {
        dispatch(setPreviewProduct(details));
        router.push(`/products/${details?._id}`, { scroll: false });
    }, []);

    const handleAddToCart = useCallback(() => {

    }, []);

    return {
        hasAlreadyAddedToCart,
        activeCardImg,
        handleMouseOver,
        handleMouseOut,
        handleLoveReact,
        handleViewDetails,
        handleAddToCart,
    }
}