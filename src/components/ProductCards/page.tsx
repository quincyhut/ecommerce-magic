"use client";

import Image from 'next/image';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { IProductCards } from './types';
import { useProductCard } from './useProductCard';
import { BsCart2 } from 'react-icons/bs';

const ProductCards = (details: IProductCards) => {
    const { title, price, prevPrice, reactCount = 0 } = details;
    const {
        activeCardImg,
        hasAlreadyAddedToCart,
        handleMouseOut,
        handleMouseOver,
        handleViewDetails,
        handleAddToCart,
    } = useProductCard({ ...details });

    return (
        <div className='text-center transition-all duration-500 transform hover:border hover:border-amber-900 group' onMouseOver={handleMouseOver} onMouseLeave={handleMouseOut} onClick={() => handleViewDetails(details)}>
            <div className='h-[350px] w-[250px] overflow-hidden bg-red-200'>
                <div className="relative w-full h-full">
                    <Image className='group-hover:scale-110 group-hover:opacity-[0.9] cursor-pointer transition-all duration-1000' src={activeCardImg} layout="fill" objectFit="cover" alt='helo' />
                    <MdOutlineArrowOutward className="text-2xl text-black absolute top-2 right-2 hidden group-hover:block" />
                    <div className={`absolute top-2 left-2 w-fit flex-center gap-1 hover:bg-red-400 hover:text-white ${false ? 'bg-red-400 text-white' : 'bg-white '} drop-shadow-sm py-[2px] px-2 rounded-full text-slate-900 cursor-pointer hover:bg-zinc-200`}>
                        {
                            false ? <AiFillHeart className='text-2xl' /> : <AiOutlineHeart className='text-2xl' />
                        }
                        {reactCount > 0 && <span className='text-[12px]'>{reactCount}</span>}
                    </div>
                </div>
            </div>
            <div className='flex-between px-2 pb-2'>
                <div className='text-start'>
                    <h2 className='mt-2 mb-1 font-semibold'>{title}</h2>
                    <div className='flex-start gap-2'>
                        <p className='text-sm text-slate-800'>NPR {price}</p>
                        <p className='text-sm text-red-600 line-through'>NPR {prevPrice}</p>
                    </div>
                </div>
                <div className={`mt-2 w-fit bg-white drop-shadow-md rounded-full p-[11px] cursor-pointer flex-center hover:bg-red-500 text-slate-700 hover:text-white ${hasAlreadyAddedToCart(details) ? 'bg-red-500 text-white' : ''}`} onClick={handleAddToCart}>
                    <BsCart2 className='text-xl' />
                </div>
            </div>
        </div>
    )
}

export default ProductCards;