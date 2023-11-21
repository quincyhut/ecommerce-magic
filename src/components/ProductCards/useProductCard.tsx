"use client";

import { useCallback, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import { removeWishListById, setCartData, setPreviewProduct, setWishList } from "@/redux/reducers/productReducer";
import { useCart } from "@/lib/hooks";
import { ProductReducer } from "@/lib/types";
import { useSelector } from "react-redux";

export const useProductCard = (product: any) => {
    const [activeCardImg, setActiveCardImgUrl] = useState(product?.images[0]);

    const { hasAlreadyAddedToCart } = useCart();
    const { wishlist } = useSelector((state: ProductReducer) => state.productReducer);

    const router = useRouter();
    const dispatch = useDispatch();

    const hasAlreadyLoved = useMemo(() => {
        return wishlist?.some(list => list._id === product?._id) ?? false;
    }, [wishlist]);

    const handleMouseOver = useCallback(() => {
        setActiveCardImgUrl(product?.images[1])
    }, [activeCardImg]);

    const handleMouseOut = useCallback(() => {
        setActiveCardImgUrl(product?.images[0])
    }, [activeCardImg]);

    const handleLoveReact = useCallback(() => {

    }, []);

    const handleViewDetails = useCallback((details: any) => {
        dispatch(setPreviewProduct(details));
        router.push(`/products/${details?._id}`, { scroll: false });
    }, []);

    const handleAddToCart = useCallback((e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();

        dispatch(setCartData(product));
    }, []);

    const handleAddToWishList = useCallback((e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();

        dispatch(setWishList(product));
    }, [wishlist]);

    const handleDeleteCart = useCallback((e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
    }, []);

    const handleDeleteWishlist = useCallback((e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        
        dispatch(removeWishListById(product?._id));
    }, [wishlist]);

    return {
        hasAlreadyAddedToCart,
        hasAlreadyLoved,
        activeCardImg,
        handleMouseOver,
        handleMouseOut,
        handleLoveReact,
        handleViewDetails,
        handleAddToCart,
        handleAddToWishList,
        handleDeleteCart,
        handleDeleteWishlist,
    }
}