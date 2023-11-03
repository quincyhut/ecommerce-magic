import Image from 'next/image'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { IProductCards } from './types';
import { useProductCard } from './useProductCard';

const ProductCards = ({ size, images, title, price, prevPrice, reactCount }: IProductCards) => {
    const { activeCardImg, handleMouseOut, handleMouseOver, handleViewDetails } = useProductCard({ images })

    return (
        <div className='text-center transition-all duration-500 transform hover:border hover:border-amber-900 group' onMouseOver={handleMouseOver} onMouseLeave={handleMouseOut} onClick={handleViewDetails}>
            <div className='h-[350px] w-[250px] overflow-hidden bg-red-200'>
                <div className="relative w-full h-full">
                    <Image className='group-hover:scale-110 group-hover:opacity-[0.9] cursor-pointer transition-all duration-1000' src={activeCardImg} layout="fill" objectFit="cover" alt='helo' />
                    <MdOutlineArrowOutward className="text-2xl text-black absolute top-2 right-2 hidden group-hover:block" />
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
                <div className='flex-center gap-1 bg-white drop-shadow-sm p-1 px-3 rounded-full text-slate-900 cursor-pointer hover:bg-zinc-200'>
                    {
                        true ? <AiOutlineHeart className='text-2xl' /> : <AiFillHeart className='text-2xl text-red-700' />
                    }
                    <span className='text-sm text-slate-900'>{reactCount}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCards;