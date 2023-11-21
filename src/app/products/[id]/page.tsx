'use client';

import Image from 'next/image';
import React from 'react';
import { useProductPreview } from './useProductPreview';
import { BiCheck } from 'react-icons/bi';
import ProductBreadcumb from '@/components/ProductBreadcumb/page';

const ProductPreview = () => {
    const {
        hasAlreadyAddedToCart,
        activeImage,
        selectedProduct,
        breadcrumbLinks,
        handleSorting,
        handleSwitchImage,
        handleQuantityChange,
        handlePickSize,
        handlePickColor,
        handleBuyProduct,
        handleAddToCart
    } = useProductPreview();

    return (
        <div className="w-[100vw] flex-center">
            <div className="py-5 px-4 w-full md:w-[75vw] flex-center">
                <ProductBreadcumb links={breadcrumbLinks} handleSorting={handleSorting} hideSorting={true} />
                <div className='w-full flex flex-col sm:flex-row flex-wrap'>
                    <div className="h-fit w-full sm:w-1/2">
                        <div className="h-[550px] w-full relative">
                            <Image src={activeImage} layout="fill" objectFit="cover" alt='helo' className='p-1' />
                        </div>
                        <div className="flex gap-3 px-1 mt-2">
                            {
                                selectedProduct?.images?.map((src: string, index: number) => (
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
                    <div className='w-full sm:w-1/2 p-0 sm:p-10 mt-5 sm:mt-0'>
                        <h2 className='text-2xl font-semibold'>{selectedProduct?.title}</h2>
                        <div className='flex gap-3 mt-2'>
                            <h3>NPR {selectedProduct?.price}</h3>
                            {selectedProduct?.prevPrice && <h3 className='text-red-500 line-through'>NPR {selectedProduct?.prevPrice}</h3>}
                        </div>
                        <div className='my-5'>
                            <h2 className='text-md'>Size</h2>
                            <div className='mt-2 flex gap-3'>
                                {
                                    selectedProduct?.sizes?.map((size: string, i: number) => <div key={i} className={`h-8 w-8 flex-center rounded-full cursor-pointer border border-black text-sm hover:bg-black hover:text-white ${selectedProduct?.pickSize?.includes(size) ? 'bg-black text-white' : ''}`} onClick={() => handlePickSize(size)}>{size}</div>)
                                }

                            </div>
                        </div>
                        <div className='my-5'>
                            <h2 className='text-md'>Colors</h2>
                            <div className='mt-2 flex gap-3'>
                                {
                                    selectedProduct?.colors?.map((color: string, i: number) => <div key={i} className={`h-7 w-7 rounded-full cursor-pointer text-white flex-center border`} style={{ backgroundColor: color }} onClick={() => handlePickColor(color)}>{selectedProduct?.pickColor?.includes(color) ? <BiCheck className='text-xl' /> : ''}</div>)
                                }
                            </div>
                        </div>
                        <>
                            <h2 className='text-md'>Quantity</h2>
                            <input type='number' min='1' max='5' className='w-[60px] hover:w-[70px] py-1 mt-2' value={selectedProduct?.quantity} onChange={handleQuantityChange} />
                        </>
                        <div className='flex gap-3 mt-10'>
                            <button className='p-2 w-[150px] border border-black text-black text-sm' onClick={handleBuyProduct}>Buy Now</button>
                            <button className='p-2 w-[200px] text-white bg-black text-sm' onClick={(e) => handleAddToCart(e, selectedProduct)}>{hasAlreadyAddedToCart ? "View Cart" : "Add to Cart"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPreview;