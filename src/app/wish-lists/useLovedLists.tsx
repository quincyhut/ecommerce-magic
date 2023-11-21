import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { ProductReducer } from "@/lib/types";

const useLovedProducts = () => {
    const { wishlist } = useSelector((state: ProductReducer) => state.productReducer);
    const [lovedProducts, setLovedProducts] = useState(wishlist);

    useEffect(() => {
        setLovedProducts(wishlist ?? []);
    }, [wishlist])

    return {
        lovedProducts,
    }
}

export default useLovedProducts;