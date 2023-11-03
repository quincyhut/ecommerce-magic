'use client';

import ProductCards from '@/components/ProductCards/page';
import { Breadcrumb, Dropdown } from 'flowbite-react';
import React from 'react'

const Mens = () => {

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


    return (
        <div className="w-[100vw] flex-center">
            <div className="py-10 px-7 w-full md:w-[75vw]">
                <div className='flex-between logoFontFamily bg-zinc-50 px-5 py-4 mb-5'>
                    <Breadcrumb aria-label="Default breadcrumb example">
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
                        <Breadcrumb.Item>Mens Wear</Breadcrumb.Item>
                    </Breadcrumb>
                    <Dropdown label="Filter" inline className=' w-[200px]'>
                        <Dropdown.Item>Sort by</Dropdown.Item>
                        <Dropdown.Item>Newest</Dropdown.Item>
                        <Dropdown.Item>Price (low to high)</Dropdown.Item>
                        <Dropdown.Item>Price (high to low)</Dropdown.Item>
                        <Dropdown.Item>Name A-Z</Dropdown.Item>
                        <Dropdown.Item>Name Z-A</Dropdown.Item>
                    </Dropdown>
                </div>
                <div className="flex-between gap-5">
                    {
                        mockProductLists?.map((d, i: number) => (
                            <ProductCards
                                key={i}
                                title={d?.title}
                                price={d?.price}
                                prevPrice={d?.prevPrice}
                                reactCount={d?.reactCount}
                                images={d?.images}
                                userIds={d?.userIds}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Mens;