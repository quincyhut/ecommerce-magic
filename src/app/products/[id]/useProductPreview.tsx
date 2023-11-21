import { IProductCards } from "@/components/ProductCards/types";
import { useCart } from "@/lib/hooks";
import _ from "lodash";
import { KeyboardEvent, useCallback, useMemo, useState } from "react";


export const useProductPreview = () => {
    const { previewProduct, cartLists, handleAddToCart} = useCart();
    const breadcrumbLinks = [
        { title: 'Home', href: '/' },
        { title: 'Mens', href: '/products/mens' },
        { title: previewProduct?.title, href: '' }
    ];

    const [selectedProduct, setSelectedProduct] = useState({
        ...previewProduct ?? {},
        quantity: 1,
        pickSize: [],
        pickColor: [],
    });
    const [activeImage, setActiveImage] = useState(selectedProduct?.images?.[0]);

    const hasAlreadyAddedToCart = useMemo(() => {
        return cartLists?.some((product: IProductCards) => product._id === selectedProduct?._id);
    }, [cartLists, previewProduct]);

    const handleSwitchImage = useCallback((src: string) => {
        setActiveImage(src);
    }, [activeImage]);

    const handleQuantityChange = useCallback((e: any) => {
        const { value }: any = e.target;

        if (value?.length > 2) return;

        setSelectedProduct({ ...selectedProduct, quantity: value.replace(/\D/g, '') });
    }, [selectedProduct]);

    const handlePickSize = useCallback((size: string) => {
        let _pickSize = [...selectedProduct.pickSize];

        if (_pickSize.includes(size)) _pickSize = _pickSize.filter((d) => d !== size);
        else _pickSize = [..._pickSize, size];

        setSelectedProduct({ ...selectedProduct, pickSize: _pickSize });
    }, [selectedProduct]);

    const handlePickColor = useCallback((color: string) => {
        let _pickColor = [...selectedProduct.pickColor];

        if (_pickColor.includes(color)) _pickColor = _pickColor.filter((d) => d !== color);
        else _pickColor = [..._pickColor, color];

        setSelectedProduct({ ...selectedProduct, pickColor: _pickColor });
    }, [selectedProduct]);

    const handleBuyProduct = useCallback(() => {
        console.log({ selectedProduct })
    }, [selectedProduct]);

    const handleSorting = () => {

    }
    
    return {
        selectedProduct,
        activeImage,
        breadcrumbLinks,
        hasAlreadyAddedToCart,
        handleSwitchImage,
        handleQuantityChange,
        handlePickSize,
        handlePickColor,
        handleBuyProduct,
        handleAddToCart,
        handleSorting
    }
}