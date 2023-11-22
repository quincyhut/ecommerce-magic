import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { removeCartById, removeWishListById, setCartData, setPreviewProduct, setWishList } from "@/redux/reducers/productReducer";
import { IProductCards } from "@/components/ProductCards/types";
import { useRouter } from "next/navigation";

export const useCart = ({ productId = null }: { productId?: string | null } = {}) => {
    const { cart, wishlist, previewProduct } = useSelector((state: any) => state.productReducer);
    const [cartLists, setCartLists] = useState([]);
    const [wishList, setWishLists] = useState([]);
    const [totalCart, setTotalCart] = useState(0);
    const shippingCost = 100;

    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        setCartLists(cart);
        setWishLists(wishlist);
        setTotalCart(cart?.length ?? 0);
    }, [cart, wishlist]);

    const hasAlreadyAddedToCart = useMemo(() => {
        return cart?.some((product: IProductCards) => product._id === productId);
    }, [cart, productId]);
    const hasAlreadyLoved = useMemo(() => {
        return wishList?.some((list: any) => list._id === productId);
    }, [wishList, productId]);
    const totalCost: number = useMemo(() => {
        let totalAmount = 0;

        cartLists?.forEach((product) => {
            const { price, quantity } = product;
            const totalPrice = price * quantity;

            totalAmount += totalPrice;
        });
        return totalAmount;
    }, [cartLists]);

    const handleAddToCart = useCallback((e: any, selectedProduct: any) => {
        e.stopPropagation();
        if (!hasAlreadyAddedToCart) dispatch(setCartData(selectedProduct));
    }, []);

    const handleDeleteCartProduct = useCallback((id: string | any) => {
        dispatch(removeCartById(id));
    }, []);

    const handleAddToWishList = useCallback((e: React.MouseEvent<HTMLElement>, product: IProductCards | any) => {
        e.stopPropagation();

        dispatch(setWishList(product));
    }, [wishList]);

    const handleDeleteWishlist = useCallback((e: React.MouseEvent<HTMLElement>, id: IProductCards | any) => {
        e.stopPropagation();

        dispatch(removeWishListById(id));
    }, [wishList]);

    const handleViewDetails = useCallback((details: any) => {
        dispatch(setPreviewProduct(details));
        router.push(`/products/${details?._id}`, { scroll: false });
    }, []);

    return {
        totalCart,
        totalCost,
        shippingCost,
        previewProduct,
        cartLists,
        wishList,
        hasAlreadyAddedToCart,
        hasAlreadyLoved,
        handleAddToCart,
        handleDeleteCartProduct,
        handleAddToWishList,
        handleDeleteWishlist,
        handleViewDetails
    }
}
