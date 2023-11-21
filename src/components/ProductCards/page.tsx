"use client";

import Image from 'next/image';
import { AiOutlineHeart, AiFillHeart, AiFillDelete } from 'react-icons/ai';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { IProductCards } from './types';
import { useProductCard } from './useProductCard';
import { BsCart2 } from 'react-icons/bs';

const ProductCards = (details: IProductCards) => {
    const { title, price, prevPrice, allowLoveReact, allowDelete = false } = details;
    const {
        activeCardImg,
        hasAlreadyLoved,
        hasAlreadyAddedToCart,
        handleMouseOut,
        handleMouseOver,
        handleViewDetails,
        handleAddToCart,
        handleAddToWishList,
        handleDeleteWishlist,
    } = useProductCard({ ...details });

    return (
        <div className='text-center transition-all duration-500 transform hover:border hover:border-amber-900 group overflow-hidden' onMouseOver={handleMouseOver} onMouseLeave={handleMouseOut} onClick={() => handleViewDetails(details)}>
            <div className='h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] overflow-hidden bg-slate-200'>
                <div className="relative w-full h-full">
                    <Image className='group-hover:scale-110 group-hover:opacity-[0.9] cursor-pointer transition-all duration-1000' src={activeCardImg} layout="fill" objectFit="cover" alt='helo' />
                    <MdOutlineArrowOutward className="text-2xl text-black absolute top-2 right-2 hidden group-hover:block" />
                    <div className='relative p-2 flex gap-3'>
                        {
                            allowLoveReact && (
                                <div className={`w-fit flex-center shadow-inner gap-1 hover:bg-black hover:text-white  bg-white ${hasAlreadyLoved ? 'text-red-500' : ''} drop-shadow-lg px-[8px] py-[7px] rounded-full cursor-pointer`} onClick={(e) => handleAddToWishList(e, details)}>
                                    {hasAlreadyLoved ? <AiFillHeart className='text-2xl' /> : <AiOutlineHeart className='text-2xl' />}
                                </div>
                            )
                        }
                        {
                           allowDelete &&
                            (
                                <div className='bg-white p-3 rounded-full cursor-pointer hover:opacity-80' onClick={(e) => handleDeleteWishlist(e, details?._id)}>
                                    <AiFillDelete className='text-lg text-slate-600' />
                                </div>
                            )
                        }
                        <div className={`flex xl:hidden w-fit rounded-full p-3 cursor-pointer hover:bg-black hover:text-white ${hasAlreadyAddedToCart ? 'bg-black text-white shadow-inner' : 'bg-white text-slate-700 drop-shadow-md'}`} onClick={(e) => handleAddToCart(e, details)}>
                            <BsCart2 className='text-lg' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-between px-2 pb-2'>
                <div className='text-start'>
                    <h2 className='w-[190px] truncate whitespace-nowrap mt-2 mb-1 font-semibold'>{title}</h2>
                    <div className='flex-start gap-2'>
                        <p className='text-sm text-slate-800'>NPR {price}</p>
                        <p className='text-sm text-red-600 line-through'>NPR {prevPrice}</p>
                    </div>
                </div>
                <div className={`hidden xl:flex mt-2 w-fit rounded-full p-[9px] cursor-pointer hover:bg-black hover:text-white ${hasAlreadyAddedToCart ? 'bg-black text-white shadow-inner' : 'bg-white text-slate-700 drop-shadow-md'}`} onClick={(e) => handleAddToCart(e, details)}>
                    <BsCart2 className='text-xl' />
                </div>
            </div>
        </div>
    )
}

export default ProductCards;