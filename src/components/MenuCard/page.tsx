import Image from 'next/image'
import { MdOutlineArrowOutward } from 'react-icons/md';
import { IMenuCard } from './types';

const MenuCard = ({ img, title, link }: IMenuCard) => {
    return (
        <div className='h-fit text-center transition-all duration-500 transform hover:-translate-y-2 hover:p-1 hover:border hover:border-amber-900 group'>
            <div className='h-[200px] w-[140px] overflow-hidden relative'>
                <Image className='group-hover:opacity-[0.9] cursor-pointer' src={img} layout="fill" objectFit="cover" alt='helo' />
                <MdOutlineArrowOutward className="text-2xl text-blue-800 absolute top-2 right-2 hidden group-hover:block" />
            </div>
            <h2 className='mt-2'>{title}</h2>
        </div>
    )
}

export default MenuCard;