import { IProductCards } from "@/components/ProductCards/types";
import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";

export const useCart = () => {
    const { cart } = useSelector((state: any) => state.productReducer);
    const totalCartCount = useMemo(() => cart?.length, [cart]);

    const hasAlreadyAddedToCart = useCallback((selectedProduct: IProductCards) => {
        return cart?.some((product: IProductCards) => product._id === selectedProduct?._id);
    }, [cart]);

    return {
        cart,
        totalCartCount,
        hasAlreadyAddedToCart
    }
}