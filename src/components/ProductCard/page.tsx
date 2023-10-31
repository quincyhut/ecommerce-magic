import Image from 'next/image'
import { MdOutlineArrowOutward } from 'react-icons/md';

const ProductCard = () => {
    return (
        <div className='h-fit w-[150px] text-center transition-all duration-500 transform hover:-translate-y-2 hover:p-1 hover:border hover:border-amber-900 group'>
            <div className='h-[200px] overflow-hidden'>
                <Image className='group-hover:scale-110 group-hover:opacity-[0.5]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuC7qVfPwg99T6rpxM7LOoDEsFMTtbpSYxHw&usqp=CAU" height={100} width={100} layout="responsive" objectFit="cover" alt='helo' />
                <MdOutlineArrowOutward className="text-2xl text-blue-800 absolute top-2 right-2 hidden group-hover:block" />
            </div>
            <h2 className='my-2'>Half Size Tshirt</h2>
        </div>
    )
}

export default ProductCard;