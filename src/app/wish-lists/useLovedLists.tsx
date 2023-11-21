import { useEffect, useState } from "react";

import { useCart } from "@/lib/hooks";

const useLovedProducts = () => {
    const { wishList } = useCart();
    const [lovedProducts, setLovedProducts] = useState([]);

    useEffect(() => {
        setLovedProducts(wishList ?? []);
    }, [wishList])

    return {
        lovedProducts,
    }
}

export default useLovedProducts;