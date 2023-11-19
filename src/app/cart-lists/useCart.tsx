import { useCallback, useState } from "react";
import { useSelector } from "react-redux";

const mockProductLists: any[] = [
    {
        title: 'Check Tshirts',
        price: 1200,
        prevPrice: 1523,
        reactCount: 25,
        images: ['/images/banner-1-a.webp', '/images/banner-1-b.webp'],
        userIds: ['hacker']

    },
    {
        title: 'Joggers Pants',
        price: 999,
        prevPrice: 1000,
        reactCount: 12,
        images: ['/images/banner-2-a.webp', '/images/banner-2-b.webp'],
        userIds: ['hacker']
    },
    {
        title: 'Bluish Suits',
        price: 2200,
        prevPrice: 5603,
        reactCount: 0,
        images: ['/images/banner-3-a.webp', '/images/banner-3-b.webp'],
        userIds: ['hacker']
    },
    {
        title: 'Sporty Trousers',
        price: 2300,
        prevPrice: 3444,
        reactCount: 23,
        images: ['/images/banner-4-a.webp', '/images/banner-4-b.webp'],
        userIds: ['hacker']
    },
    {
        title: 'Himalayan Jacket',
        price: 950,
        prevPrice: 1423,
        reactCount: 12,
        images: ['/images/banner-5-a.webp', '/images/banner-5-b.webp'],
        userIds: ['hacker']
    },
    {
        title: 'Recked White croks',
        price: 1200,
        prevPrice: 1523,
        reactCount: 15,
        images: ['/images/banner-3-b.webp', '/images/banner-4-b.webp'],
        userIds: ['hacker']
    },
];


const useCartProduct = () => {
    const { cart } = useSelector((state: any) => state.productReducer);
    const [lovedProducts, setLovedProducts] = useState(cart);

    const handleQuantityChange = useCallback(() => {

    }, []);

    const handlePickColor = useCallback((color: string) => {

    }, []);

    const handlePickSize = useCallback((color: string) => {

    }, []);

    return {
        lovedProducts,
        handleQuantityChange,
        handlePickColor,
        handlePickSize
    }
}

export default useCartProduct;