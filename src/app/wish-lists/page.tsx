'use client';

import React from 'react';
import Image from 'next/image';

import { IProductCards } from '@/components/ProductCards/types';
import useLovedProducts from './useLovedLists';
import ProductCards from '@/components/ProductCards/page';

const LovedLists = () => {
    const {
        lovedProducts
    } = useLovedProducts();

    return (
        <div className="w-[100vw] flex-center">
            <div className="py-10 pl-4 pr-5 sm:px-8 w-full lg:w-[75vw]">
                {
                    !lovedProducts?.length && (
                        <div className='h-[70vh] flex flex-col justify-center items-center'>
                            <Image src='/images/empty-wishlist.webp' height={200} width={200} alt='empty-cart.svg' />
                            <div className='text-lg ml-10'>
                                <span className='text-zinc-700'>Your Wishlist is</span>
                                <span className='text-red-700'> Empty!</span>
                            </div>
                        </div>
                    )
                }
                {
                    lovedProducts?.length > 0 && (
                        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
                            {
                                lovedProducts?.map((d: IProductCards, i: number) => (
                                    <ProductCards
                                        key={i}
                                        _id={d?._id}
                                        title={d?.title}
                                        sizes={d?.sizes}
                                        colors={d?.colors}
                                        price={d?.price}
                                        quantity={d?.quantity}
                                        prevPrice={d?.prevPrice}
                                        reactCount={d?.reactCount}
                                        images={d?.images}
                                        userIds={d?.userIds}
                                        allowDelete={true}
                                        allowLoveReact={false}
                                    />
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default LovedLists