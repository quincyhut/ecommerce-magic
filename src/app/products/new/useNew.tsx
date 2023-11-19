import { useState } from "react";


export const useNew = () => {
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
    const breadcrumbLinks = [
        { title: 'Home', href: '/' },
        { title: 'New', href: '/products/new' }
    ];

    const [productLists, setProductLists] = useState(mockProductLists);

    const handleSorting = () => {

    }

    return {
        productLists,
        breadcrumbLinks,
        handleSorting
    }
}