import { useCallback, useState } from "react";
import { useSelector } from "react-redux";


export const useProductPreview = () => {
    const { previewProduct } = useSelector((state: any) => state.productReducer);
    const { title, price, prevPrice, images, reactCount = 0 } = previewProduct;

    const [activeImage, setActiveImage] = useState(images[0]);

    const handleSwitchImage = useCallback((src: string) => {
        setActiveImage(src);
    }, [activeImage]);


    return {
        activeImage,
        title,
        price,
        prevPrice,
        images,
        reactCount,
        handleSwitchImage
    }
}