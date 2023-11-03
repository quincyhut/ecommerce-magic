import { useCallback, useState } from "react";


export const useProductCard = ({ images }: any) => {
    const [activeCardImg, setActiveCardImgUrl] = useState(images[0]);

    const handleMouseOver = useCallback(() => {
        setActiveCardImgUrl(images[1])
    }, [activeCardImg]);

    const handleMouseOut = useCallback(() => {
        setActiveCardImgUrl(images[0])
    }, [activeCardImg]);

    const handleLoveReact = useCallback(() => {

    }, []);

    const handleViewDetails = useCallback(() => {

    }, []);

    const handleAddToCart = useCallback(() => {

    }, []);

    return {
        activeCardImg,
        handleMouseOver,
        handleMouseOut,
        handleLoveReact,
        handleViewDetails,
        handleAddToCart,
    }
}