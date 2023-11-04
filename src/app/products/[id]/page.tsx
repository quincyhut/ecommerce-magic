'use client';

import Image from 'next/image';
import React from 'react';
import { useProductPreview } from './useProductPreview';

const ProductPreview = () => {
    const {
        activeImage,
        title,
        price,
        prevPrice,
        images,
        reactCount,
        handleSwitchImage
    } = useProductPreview();

    return (
        <div className="w-[100vw] flex-center ">
            <div className="py-1 px-4 w-full md:w-[75vw] flex-center ">

                <div className='w-full flex flex-col sm:flex-row flex-wrap'>
                    <div className="h-[500px] w-full sm:w-1/2">
                        <div className="h-[400px] w-full relative">
                            <Image src={activeImage} layout="fill" objectFit="cover" alt='helo' className='p-1' />
                        </div>
                        <div className="flex gap-3 px-1 mt-2">
                            {
                                images?.map((src: string, index: number) => (
                                    <Image
                                        key={index}
                                        src={src}
                                        height={90}
                                        width={90}
                                        alt={src}
                                        onClick={() => handleSwitchImage(src)}
                                        className={`${src === activeImage ? 'border-2 border-red-500' : ''}`}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className='w-full sm:w-1/2 p-0 sm:p-3 mt-5 sm:mt-0'>
                        <h2 className='text-2xl font-semibold'>{title}</h2>
                        <div className='flex gap-3'>
                            <h3>NPR {price}</h3>
                            {prevPrice && <h3 className='text-red-500 line-through'>NPR {prevPrice}</h3>}
                        </div>
                        <div className='flex flex-col sm:flex-row gap-3 mt-5'>
                            <button className='p-2 w-[250px] border border-black text-black text-sm'>Buy Now</button>
                            <button className='p-2 w-full text-white bg-red-500 text-sm'>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPreview;